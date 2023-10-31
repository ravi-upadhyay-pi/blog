import { IPost } from './model';

export const posts: IPost[] = [
  {
    title: 'Database Transactions',
    url: 'database-transactions',
    author: 'Ravi Upadhyay',
    date: new Date(Date.parse('2023-10-30:00:00:00.000+05:30')),
    summary: 'ACID property of database transactions and their use.',
    contentFileName: 'db_transactions.md',
  },
];
