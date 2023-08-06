<script lang="ts">
  import {tweened} from "svelte/motion"
  import {pollStore} from "@/stores";
  import type {OptionType, IPolls} from "@/types";
  import Button from "@/shared/Button.svelte";
  import Card from "@/shared/Card.svelte";

  export let poll: IPolls = {} as IPolls

  //reactive values
  $: totalVotes = poll.votesA + poll.votesB
  $: percentA = Math.floor((poll.votesA / totalVotes) * 100) || 0
  $: percentB = Math.floor((poll.votesB / totalVotes) * 100) || 0

  //tweened percentages
  const tweenedA = tweened(0)
  const tweenedB = tweened(0)
  $:tweenedA.set(percentA)
  $:tweenedB.set(percentB)

  //handling votes
  const handleVote = (option: OptionType, id: number): void => {
    pollStore.update((currentPolls: IPolls[]): IPolls[] => {
      const copiedPolls = [...currentPolls]
      const poll = currentPolls.find((poll: IPolls): boolean => poll.id === id)

      if (option === 'a') poll.votesA += 1
      if (option === 'b') poll.votesB += 1

      return copiedPolls
    })
  }

  const handleDelete = (id: number): void => {
    pollStore.update((currentPolls: IPolls[]): IPolls[] => {
      return currentPolls.filter((poll: IPolls) => poll.id !== id)
    })
  }
</script>

<Card>
	<div class="poll">
		<h3 class="poll-title">{poll.question}</h3>
		<p class="total">Total votes: {totalVotes}</p>
		<div
			class="answer"
			on:click={()=>handleVote('a', poll.id)}
		>
			<div
				class="percent percent-a"
				style="width: {$tweenedA}%"
			></div>
			<span> {poll.answerA} ({poll.votesA})</span>
		</div>
		<div
			class="answer"
			on:click={()=>handleVote('b', poll.id)}
		>
			<div
				class="percent percent-b"
				style="width: {$tweenedB}%"
			></div>
			<span> {poll.answerB} ({poll.votesB})</span>
		</div>
		<div class="delete">
			<Button
				flat={true}
				on:click={()=>handleDelete(poll.id)}
			>
				Delete
			</Button>
		</div>
	</div>
</Card>

<style lang="scss">
  .poll {
  }

  .poll-title {
    margin: 0 auto;
    color: #555;
  }

  .total {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }

  .answer {
    background-color: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
    transition: 0.1s linear;
    border-radius: 4px;
    overflow: hidden;
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }

    &:active {
      transform: scale(0.98);
    }

    span {
      display: inline-block;
      font-weight: 600;
      padding: 10px 20px;
      user-select: none;
      webkit-user-select: none;
    }
  }

  .percent {
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    box-sizing: border-box;

    &-a {
      border-left: 4px solid #d91b42;
      background-color: rgba(217, 27, 66, 0.3);
    }

    &-b {
      border-left: 4px solid #45c496;
      background-color: rgba(69, 196, 150, 0.3);
    }
  }

  .delete {
    margin-top: 30px;
    text-align: center;
    width: 100%;
  }
</style>
