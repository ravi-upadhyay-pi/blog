<script lang="ts">
  import AboutMe from '../shared/AboutMe.svelte';
  import Link from '../shared/Link.svelte';
  import { posts } from './shared/data';
</script>

<div class="container">
  <h1>Blog</h1>
  <ul class="posts-list">
    {#each posts as post}
      <li>
        <div class="post">
          <Link href="/blog/{post.url}">{post.title}</Link>
          <span>{post.summary}</span>
        </div>
      </li>
    {/each}
  </ul>
  <AboutMe />
</div>

<style lang="scss">
  @use '../style/common.scss';

  .container {
    @extend %flex-column;
    border: 2px solid #ddd;
    border-radius: var(--border-radius);
    margin-top: 16px;
    padding: 12px;
    width: 800px;
  }

  .posts-list {
    @extend %flex-row;
    margin-left: 16px;
    margin-bottom: 16px;
  }

  .post {
    @extend %flex-column;
  }
</style>
