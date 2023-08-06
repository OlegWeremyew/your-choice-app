<script lang="ts">
  import Button from "@/shared/Button.svelte";
  import {pollStore} from "@/stores";
  import type {IPolls} from "@/types";

  export let id: number

  const handleDelete = (): void => {
    pollStore.update((currentPolls: IPolls[]): IPolls[] => {
      return currentPolls.filter((poll: IPolls) => poll.id !== id)
    })
  }

  const resetSurvey = (): void => {
    pollStore.update((currentPolls: IPolls[]): IPolls[] => {
      return currentPolls.map((poll: IPolls) => (
        {
          ...poll,
          votesA: id === poll.id ? 0 : poll.votesA,
          votesB: id === poll.id ? 0 : poll.votesB,
        }))
    })
  }

</script>

<div class="control">
	<Button
		type="secondary"
		flat={true}
		full={true}
		on:click={resetSurvey}
	>
		Survey
	</Button>
	<Button
		flat={true}
		full={true}
		on:click={handleDelete}
	>
		Delete
	</Button>
</div>

<style lang="scss">
  .control {
    margin-top: 20px;
    height: 87px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    width: 100%;
  }
</style>
