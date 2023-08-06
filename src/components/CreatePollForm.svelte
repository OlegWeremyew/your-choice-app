<script lang="ts">
  import Button from "@/shared/Button.svelte";
  import {createEventDispatcher} from "svelte";
  import type {IPolls, IFields} from "@/types";
  import {pollStore} from "@/stores";

  const dispatch = createEventDispatcher()

  const fields: IFields = {
    question: '',
    answerA: '',
    answerB: '',
  }

  const errors: IFields = {
    question: '',
    answerA: '',
    answerB: '',
  }

  let isValid: boolean = false

  const submitHandler = (): void => {
    isValid = true

    //validate questions
    if (fields.question.trim().length < 5) {
      isValid = false
      errors.question = "Question must be at latest that 5 characters long"
    } else {
      errors.question = ""
    }

    //validate answer A
    if (!fields.answerA.trim().length) {
      isValid = false
      errors.answerA = "Answer A cannot be empty"
    } else {
      errors.answerA = ""
    }

    //validate answer B
    if (!fields.answerB.trim().length) {
      isValid = false
      errors.answerB = "Answer B cannot be empty"
    } else {
      errors.answerB = ""
    }

    //add new poll
    if (isValid) {
      let poll = {
        ...fields,
        votesA: 0,
        votesB: 0,
        id: Math.random(),
      };

      pollStore.update((currentPols: IPolls[]): IPolls[] =>
        [
          poll,
          ...currentPols,
        ]
      )

      dispatch('addPoll')
    }
  }
</script>

<form on:submit|preventDefault={submitHandler}>
	<div class="form-field">
		<label for="question">Poll Question:</label>
		<input
			id="question"
			type="text"
			placeholder="question"
			class:error={errors.question}
			bind:value={fields.question}
		>
		<div class="error">{errors.question}</div>
	</div>
	<div class="form-field">
		<label for="answer-a">Answer A:</label>
		<input
			id="answer-a"
			type="text"
			placeholder="answer A"
			class:error={errors.answerA}
			bind:value={fields.answerA}
		>
		<div class="error">{errors.answerA}</div>
	</div>
	<div class="form-field">
		<label for="answer-b">Answer B:</label>
		<input
			id="answer-b"
			type="text"
			placeholder="answer B"
			class:error={errors.answerB}
			bind:value={fields.answerB}
		>
		<div class="error">{errors.answerB}</div>
	</div>
	<Button
		typeButton="submit"
		type="secondary"
		flat
	>Add Poll
	</Button>

</form>

<style lang="scss">
  form {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 18px auto;
  }

  input {
    width: 100%;
    border-radius: 6px;
    outline: none;
    border: 2px solid rgba(0, 0, 0, 0.45);

    &.error {
      border: 2px solid #d91b42;
    }

    &:focus {
      background-color: rgba(0, 0, 0, 0.05);
      border: 2px solid rgb(64, 120, 224);
    }
  }

  label {
    margin: 10px auto;
    text-align: left;
  }

  .error {
    font-weight: bold;
    text-align: left;
    color: #d91b42;
  }
</style>
