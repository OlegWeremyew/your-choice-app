<script lang="ts">
  import src from '@/assets/images/header-img.png'
  import Navbar from "@/components/Navbar.svelte";
</script>

<header>
	<h1>
		<img {src} alt="choice images" title="choice images">
	</h1>
	<Navbar/>
</header>

<style lang="scss">
  header {
    background-color: #f7f7f7;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    margin: 0;
    text-align: center;
  }

  img {
    max-width: 70px;
  }
</style>
