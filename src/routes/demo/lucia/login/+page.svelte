<script >
	import { enhance } from '$app/forms';
	import projectConfig from '$lib/project.config';
	const groups = projectConfig.groups;
	let mode = $state(0)
	let { form } = $props();
</script>
{#if mode == 0}
<h1><b>Login</b> / <button class="lb" onclick={() => {mode = 1}}>Register</button></h1>
{:else}
<h1><button class="lb" onclick={() => {mode = 0}}>Login</button> \ <b>Register</b></h1>
{/if}
<form method='post' action='?/login' use:enhance>
	<div class="ui input">
		<div class="ui label">Felhasználónév</div>
		<input name='username' />
	</div>
	<div class="ui input">
		<div class="ui label">Jelszó</div>
		<input type='password' name='password' />
	</div>
	{#if mode == 1}
	<div class="ui input">
		<div class="ui label">Név</div>
		<input type='text' name='name' />
	</div>
	<div class="ui input">
		<div class="ui label">Email</div>
		<input type='email' name='email' />
	</div>
	<div class="ui input">
		<div class="ui label">Csoport ID</div>
		<select name='groupID' class="ui selection dropdown">
			<option value=''>Válasszon csoportot</option>
			{#each groups as group}
				<option value={group.id}>{group.name}</option>
			{/each}
		</select>
	</div>
	<div class="ui input">
		<div class="ui label">Projekt URL</div>
		<input type='text' name='projectURL' />
	</div>
	{/if}

	{#if mode == 0}
	<button class="ui green button">Bejelentkezés</button>
	{:else}
	<button class="ui red button" formaction='?/register'>Regisztráció</button>
	{/if}
</form>
<p style='color: red'>{form?.message ?? ''}</p>

<style>
	div.ui.label {
		width: 120px;
		text-align: right;
		padding: 13px 10px 0px 10px;
	}
	select.ui.selection.dropdown {
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
		font-size: 13px;
		text-shadow: 1px 1px 3px gray;
		text-align: right;
	}
	form {
		display: inline-flex;
		flex-direction: column;
		gap: 1rem;
		margin: auto;
		background-color: beige;
		padding: 20px;
		border-radius: 10px;
		box-shadow: 1px 1px 4px inset;
	}
	b {
		color: red;
	}
	button.lb {
		all:unset;
		cursor: pointer;
	}
	button.lb:hover {
		text-decoration: underline;
	}
</style>