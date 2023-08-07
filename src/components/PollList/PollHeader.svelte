<script lang="ts">
  import {pollStore} from "@/stores";
  import type {IPolls, Nullable} from "@/types";
  import Button from "@/shared/Button.svelte";

  export let question: string
  export let id: number

  let title: string = ""
  let isShowTitle: boolean = true
  let titleRefElement: Nullable<HTMLTitleElement> = null

  const changeMode = (isShow: boolean = true): void => {
    isShowTitle = isShow
  }

  const updateChoiceTitle = (): void => {
    if (!title.trim()) return

    pollStore.update((currentPolls: IPolls[]): IPolls[] => {
      return currentPolls.map((pollItem: IPolls) => pollItem.id === id ? {
        ...pollItem,
        question: title
      } : pollItem)
    })
  }

  const updateLocalTitle = ({target}: HTMLInputElement): void => {
    title = target.value
  }

  const handleKeypressButton = (e: KeyboardEvent): void => {
    if (e.key !== "Enter") return

    updateChoiceTitle()
    changeMode()
  }

  const updateChoiceTitleByBlur = (): void => {
    updateChoiceTitle()
    changeMode()
  }

  const scrollToQuestion = (): void => {
    titleRefElement.scrollIntoView({
      behavior: 'smooth',
    })
  }
</script>

<div class="inner">
	{#if isShowTitle}
		<h3
			class="poll-title"
			title="click for scroll, double click for edit mode"
			bind:this={titleRefElement}
			on:click={scrollToQuestion}
			on:dblclick={()=>changeMode(false)}
		>
			{question}
		</h3>
		<Button inverse on:click={()=>changeMode(false)}>
			Edit
		</Button>
	{:else }
		<input
			type="text"
			class="title-input"
			value={question}
			placeholder="enter question"
			autofocus
			on:change={updateLocalTitle}
			on:blur={updateChoiceTitleByBlur}
			on:keypress={handleKeypressButton}
		>
		<Button inverse type="secondary" on:click={changeMode}>
			Save
		</Button>
	{/if}
</div>

<style lang="scss">
  .inner {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .poll-title {
    font-weight: 600;
    text-align: left;
    margin: 0;
    color: #555;
    cursor: pointer;
    line-height: 33px;
  }

  .title-input {
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    height: 33px;
	  outline: none;

    &:focus {
		  border: 1px solid rgb(64, 120, 224);
    }
  }
</style>
