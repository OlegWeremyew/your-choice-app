<script lang="ts">
  import Header from "@/components/Header.svelte";
  import Footer from "@/components/Footer.svelte";
  import Tabs from "@/shared/Tabs.svelte";
  import {NAV_ITEMS} from "@/types";
  import CreatePollForm from "@/components/CreatePollForm.svelte";

  //tabs
  let items: NAV_ITEMS[] = [NAV_ITEMS.CURRENT_POLLS, NAV_ITEMS.ADD_NEW_POLL]
  let activeItem: NAV_ITEMS = NAV_ITEMS.CURRENT_POLLS

  const tabChange = (e: CustomEvent): void => {
    activeItem = e.detail
  }
</script>

<template>
	<Header/>
	<main>
		<Tabs {items} {activeItem} on:tabChange={tabChange}/>
		{#if activeItem === NAV_ITEMS.CURRENT_POLLS}
			<p>Poll list components goes here</p>
		{:else if activeItem === NAV_ITEMS.ADD_NEW_POLL}
			<CreatePollForm/>
		{/if}
	</main>
	<Footer/>
</template>

<style lang="scss">
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
