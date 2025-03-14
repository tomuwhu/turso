<script>
  import { page } from "$app/stores";
  $: currentRoute = $page.url.pathname;
  const menu = [
    { name: "REST API", href: "/sveltetut/rest_api" },
/*     { name: "SvelteKit + Load / Actions", href: "/sveltetut/sveltekit_load" },
    { name: "SvelteKit/Drizzle/Lucia/Turso", href: "/sveltetut/turso" }, */
    { name: "SvelteKit FullStack Video tananyag", href: "/sveltetut/sveltekit_video" },
  ];
</script>

<menu class="am">
  {#each menu as item}
    <span> </span>
    <a
      class="ui small gray button {currentRoute.includes(item.href) ? '' : 'inverted'}"
      href={item.href}>{item.name}</a
    >
  {/each}
</menu>
<div class="ui divider"></div>
<slot></slot>
<style>
  .am {
    padding: 0px;
    margin-top: -7px;
    background-color: rgb(126, 126, 126);
  }
  :global(.am .ui.button) {
    margin: 2px;
    padding: 6px;
  }
</style>
