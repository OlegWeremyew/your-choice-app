<script lang="ts">
  import src from '@/assets/images/header-img.png'
</script>

<header>
	<h1>
		<img {src} alt="choice images" title="choice images">
	</h1>
</header>

<style lang="scss">
  header {
    background-color: #f7f7f7;
    padding: 20px;
  }

  h1 {
    margin: 0;
    text-align: center;
  }

  img {
    max-width: 180px;
  }
</style>
