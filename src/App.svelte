<script lang="ts">
  import {Router, Route} from "svelte-navigator";
  import Header from "@/components/Header.svelte";
  import Footer from "@/components/Footer.svelte";
  import Polls from "@/pages/Polls.svelte";
  import Countries from "@/pages/Countries.svelte";
  import ScrollTop from "@/shared/ScrollTop.svelte";
  import Error from "@/pages/Error.svelte";
</script>

<template>
	<Router primary={false}>
		<Header/>
		<main>
			<Route path="/">
				<Polls/>
			</Route>
			<Route path="/countries">
				<Countries/>
			</Route>
			<Route path="*">
				<Error/>
			</Route>
		</main>
		<Footer/>
		<ScrollTop/>
	</Router>
</template>

<style lang="scss">
  main {
    max-width: 960px;
    min-height: calc(100vh - 170px);
    margin: 20px auto 40px;
    padding: 0 10px;
    flex-grow: 1;
  }
</style>
