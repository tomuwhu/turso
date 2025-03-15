<script>
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
	let { children, data } = $props();
  let active = $state(0)
  let v = $page.url.pathname
  let user = $state(data.user)
  const menu = [
    {name: "Home", link: "/"},
    {name: "Regisztrált portfóliók listája", link: "/portfolios", inner: true},
    {name: "Tematika", link: "/tematika", inner: true},
    {name: "Tananyag", link: "/sveltetut/sveltekit_video", inner: true},
    {name: "Front-end Demók", link: "/demo", inner: true},
  ]
  const refresh = () => {
    user = data.user
    v = $page.url.pathname
    menu.forEach((item, index) => {
      if (v == item.link) active = index
    })
    if (v == "/demo/lucia/login") active = 10
  }
  afterNavigate(refresh)
  refresh()
</script>
<div class="ui pointing menu">
{#each menu as item}
    {#if !item.inner}
    <a class="item {active === menu.indexOf(item) ? 'active' : ''}"
      onclick={() => {active = menu.indexOf(item)}} href={item.link}>
      {item.name}
    </a>
    {/if}
{/each}
<div class="right menu">
  <a class="item {active === 10 ? 'active' : ''}"
    onclick={() => {active = 10}} 
    href="/demo/lucia">
  {user ? `${user.name} profil` : "Login/Regisztráció"}
  </a>
</div>
</div>

{@render children()}
<style>
  .ui.menu a.item {
    cursor: pointer;
  }
  .ui.menu a.item:hover {
    background-color: #d9a9a9;
  }
</style>