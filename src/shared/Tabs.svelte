<script lang="ts">
  import {createEventDispatcher} from "svelte";
  import {NAV_ITEMS} from "@/types/enums";

  export let items: NAV_ITEMS[]
  export let activeItem: NAV_ITEMS

  const dispatch = createEventDispatcher()

  const tabChange = (item: NAV_ITEMS): void => {
    dispatch('tabChange', item)
  }
</script>

<section class="tabs">
	<ul>
		{#each items as item (item)}
			<li on:click={()=>tabChange(item)}>
				<div class:active={item === activeItem}>
					{item}
				</div>
			</li>
		{/each}
	</ul>
</section>

<style lang="scss">
  .tabs {
    margin-bottom: 40px;
  }

  ul {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }

  li {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }

  .active {
    color: #d91b41;
    border-bottom: 2px solid #d91b41;
  }
</style>
