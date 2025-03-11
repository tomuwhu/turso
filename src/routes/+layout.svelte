<script>
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/stores';
	let { children, data } = $props();
  let active = $state(0)
  let v = $page.url.pathname
  let user = $state(data.user)
  const refresh = () => {
    user = data.user
    v = $page.url.pathname
    if (v == "/") active = 0
    if (v == "/portfolios") active = 1
    if (v == "/demo") active = 2
    if (v == "/demo/lucia") active = 10
    if (v == "/demo/lucia/login") active = 10
  }
  afterNavigate(refresh)
  refresh()
</script>
<div class="ui pointing menu">
  <a class="item {active === 0 ? 'active' : ''}"
    onclick={() => {active = 0}} href="/">
    Home
  </a>
  <a class="item {active === 1 ? 'active' : ''}"
     onclick={() => {active = 1}} 
     href="/portfolios">
    Regisztrált portfóliók listája
  </a>
  <a class="item {active === 2 ? 'active' : ''}"
     onclick={() => {active = 2}}
     href="/demo">
    Front-end Demók
  </a>
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