<script >
	import { enhance } from '$app/forms';
	let { data } = $props()
	let url = $state(data.user.projectURL)
	let email = $state(data.user.email)
	let uform = $state(false)
</script>

<h3>Üdvözlöm {data.user.name} a {data.user.groupname} csoportban!</h3>
<div class="ui divider"></div>
{#if uform}	
	<form class="update" action="?/update" method="POST">
		<div class="ui input">
			<div class="ui label">Email</div>
			<input type='email' name='email' value={email}/>
		</div>
		<div class="ui input">
			<div class="ui label">Projekt URL</div>
			<input type='text' name='projectURL' value={url} />
		</div>
		<button class="ui blue button">Módosítás</button>
	</form>
	<div class="ui divider"></div>
	<button class="ui brown button" onclick={() => {uform = false}}>Módosítás elvetése</button>
{:else}
	<p>A regisztrát oldala a <a href={url}>{url}</a>.
		<br>
		A megadott email cím: {email}.
	</p>
	<button class="ui blue button" onclick={() => {uform = true}}>Adatok módosítása</button>
{/if}

<div class="ui divider"></div>
<form method='post' action='?/logout' use:enhance>
	<button class="ui red button">Kijelentkezés</button>
</form>
<style>
	form.update {
		display: inline-flex;
		flex-direction: column;
		gap: 1rem;
		margin: auto;
		background-color: rgb(236, 236, 200);
		padding: 20px;
		border-radius: 18px;
		box-shadow: 1px 1px 4px black;
		border: solid 10px rgb(188, 185, 162);
	}
</style>