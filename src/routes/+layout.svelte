<script>
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
	let { children, data } = $props();
  let active = $state(0)
  let v = $page.url.pathname
  let user = $state(data.user)
  const menu = [
    {name: "Home", link: "/"},
    {name: "Regisztrált portfóliók listája", link: "/portfolios"},
    {name: "Tematika", link: "/tematika"},
    {name: "Tananyag", link: "/sveltetut/sveltekit_video"},
    {name: "Front-end Demók", link: "/demo"},
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
    <a class="item {active === menu.indexOf(item) ? 'active' : ''}"
      onclick={() => {active = menu.indexOf(item)}} href={item.link}>
      {item.name}
    </a>
{/each}
  <a class="item {active === 10 ? 'active' : ''}"
    onclick={() => {active = 10}} 
    href="/demo/lucia">
  {user ? `${user.name} profil` : "Login/Regisztráció"}
  </a>
  <div class="right menu">
    <div class="item">
      <div class="ui transparent icon input">
        <input type="text" placeholder="Search...">
        <i class="search link icon"></i>
      </div>
    </div>
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