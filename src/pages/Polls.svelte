<script lang="ts">
  import Tabs from "@/shared/Tabs.svelte";
  import CreatePollForm from "@/components/CreatePollForm.svelte";
  import {NAV_ITEMS} from "@/types/enums";
  import PollList from "@/components/PollList/PollList.svelte";

  //tabs
  let items: NAV_ITEMS[] = [NAV_ITEMS.CURRENT_POLLS, NAV_ITEMS.ADD_NEW_POLL]
  let activeItem: NAV_ITEMS = NAV_ITEMS.CURRENT_POLLS

  const tabChange = (e: CustomEvent): void => {
    activeItem = e.detail
  }

  const handleAddPoll = (): void => {
    activeItem = NAV_ITEMS.CURRENT_POLLS
  }
</script>

<div class="polls-wrapper">
	<Tabs {items} {activeItem} on:tabChange={tabChange}/>
	{#if activeItem === NAV_ITEMS.CURRENT_POLLS}
		<PollList/>
	{:else if activeItem === NAV_ITEMS.ADD_NEW_POLL}
		<CreatePollForm on:addPoll={handleAddPoll}/>
	{/if}
</div>

<style lang="scss">
  .polls-wrapper {
    width: 100%;
    height: 100%;
  }
</style>
