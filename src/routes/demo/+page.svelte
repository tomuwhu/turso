<script>
  var t = $state(0)
  var y = $state(0)
  var innerWidth = $state(0)
  setInterval(() => {
    t = t + 1
    if (t > innerWidth - 40) {
      t = 0
    }
    y = 100 * Math.sin(t / 100)
  })
</script>
<svelte:window bind:innerWidth />
<h1>Demo</h1>
<p>Current time: {t}</p>
<div id="d1"style="left: {t}px; top: {y + 240}px; "></div>
<style>
#d1 {
  position: absolute;
  top: 150px;
  left: 0;
  width: 40px;
  height: 40px;
  background-color: red;
  border-radius: 20px;
  border: 4px solid white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
}
</style>

