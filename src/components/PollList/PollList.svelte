<script lang="ts">
  import {fade} from 'svelte/transition'
  import {flip} from 'svelte/animate'
  import PollDetails from "@/components/PollList/PollDetails.svelte";
  import {pollStore} from "@/stores";
</script>

<div class="poll-list" class:empty={!$pollStore.length}>
	{#each $pollStore as poll (poll.id)}
		<div out:fade|local animate:flip={{duration: 500, delay: 200}}>
			<PollDetails {poll}/>
		</div>
	{:else }
		<div class="empty-list">
			<h3>List is empty</h3>
		</div>
	{/each}
</div>

<style lang="scss">
  .poll-list {
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }

    &.empty {
      grid-template-columns: 1fr;
    }
  }

  .empty-list {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }
</style>
