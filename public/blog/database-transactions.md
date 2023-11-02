# Database transaction concepts

Ravi Upadhyay

10/30/2023

---

If you have used database, you must have heard about transactions.

A transaction is a feature of datbase to group together multiple database
statements and run them as a single logical unit.

But what does grouping together statements into one single transaction mean,
and what are its benefits?

That's what ACID is all about. ACID is a set of well known and popular
guarantee that a database provides for transactions. ACID is not the chemical
ACID, of course, but an acronym for Atomic, Consistent, Isolated and Durable.

Consistent and Durable property are very trivial properties. Consistent means
that running a transaction should not leave the database in in consistent state.
This property is very vague and actually doesn't tell us much. Durable means
that a transactions writes should be saved so that if database crashes later,
the writes should be effective when the data is read after the database comes up
again.

## Atomicity

Atomic property, by name indicates that a transaction should not appear
to be composed of different statements, but rather, it should behave like a
single non decomposable thing.

The actual definition of atomic in this context is also similar. It means
that a database transaction can not have partial writes. Either the whole
transaction succeeds, or if it fails, then there should be no partial
writes in database.

See the transaction example below.

```
update bank_balance
set balance = account1_balance - 10
where account_id = 1;

update bank_balance
set balance = account2_balance + 10
where account_id = 2;
```

Suppose, if the first update statement runs, and the transaction then fails for
some reason, before running executing the second one, then the effect of first
statement will be rolled back because of the atomic property. If the database
did not have atomic property then it might be possible that amount 10 is
deducted from account 1, but not added to account 2.

Because of atomic proerty of transaction, users running the transaction need
not worry about how much of a transaction went through in case of failure. Its
guaranteed that either all the writes were done or none. So in case of failure
the user can retry the statement again.

## Isolation

Isolation is a complex and one of the most misunderstood property. Isolation, as
name suggests, means that a transaction is isolated from other transasctions.
Especially because different databases themselves use different definitions for
isolation.

Take, for example this transaction:

```
SELECT balance FROM accounts WHERE account_id = '12345';
UPDATE accounts SET balance = balance + 10 WHERE account_id = '12345';
```

If a database has isolation property for transaction, one might believe that
the the balance between the read and write will not change. But that's not
the case in most of the popular ACID compliant datbases! Its possible that
another transaction may interfere with this transaction and change the
balance value between the read and write of the above transaction.

So, how does database claim to be isolated if it does not guarantee this?

Actually, the behavior we are assuming from the isolation property is called
serialized isolation. It means that users can assume that transactions are
running in a serial order, i.e. no two transactions can interleave. If a
datbase guarantees serialized transaction, then the above transaction will
always have consistent behavior. But this isolation guarantee has a huge
performance impact, because there is no scope of optimizing quries by
parallelizing them.

That's why datbases guarantee other weaker isolation guarantees instead, which
are useful in their own right.

As for the above transaction example, dbs provide other ways to write consistent
transactions. To make the above transaction consistent, we can use the row
locking property. So, instead of "locking" thw whole database for a single
transaction, as we do in case of serialized isolation, the database can instead
lock particular rows for the current transaction, so that other transactions
can not change it.

In popular databases it can be done like this (note the `FOR UPDATE` part):

```
SELECT balance FROM accounts WHERE account_id = '12345' FOR UPDATE;
UPDATE accounts SET balance = balance + 10 WHERE account_id = '12345';
```
