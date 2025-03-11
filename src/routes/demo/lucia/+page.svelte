<script >
	import { enhance } from '$app/forms';
	let { data } = $props()
	let url = $state(data.user.projectURL)
	let email = $state(data.user.email)
</script>

<h3>Üdvözlöm {data.user.name} a {data.user.groupname} csoportban!</h3>
<p>A regisztrát oldala a <a href={url}>{url}</a>.
	<br>
	A megadott email cím: {email}.
</p>
<form method='post' action='?/logout' use:enhance>
	<button class="ui red button">Sign out</button>
</form>
