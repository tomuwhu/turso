<script>
  let { data } = $props();
</script>
<h2>Regisztrált portfóliók listája</h2>

{#each data.users as user}
  <a href={user.projectURL} target="_blank">{user.name}</a> ({user.email}) <br>
{/each}
