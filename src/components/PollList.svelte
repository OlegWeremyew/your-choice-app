<script lang="ts">
	import {fade,scale, slide} from 'svelte/transition'
	import {flip} from 'svelte/animate'
  import PollDetails from "@/components/PollDetails.svelte";
  import {pollStore} from "@/stores";
</script>

<div class="poll-list">
	{#each $pollStore as poll (poll.id)}
		<div in:fade out:scale|local animate:flip={{duration: 500}}>
			<PollDetails {poll}/>
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
  }
</style>
