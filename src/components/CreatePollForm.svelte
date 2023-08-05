<script lang="ts">
  import Button from "@/shared/Button.svelte";

  interface IFields {
    question: string
    answerA: string
    answerB: string
  }

  let fields: IFields = {
    question: '',
    answerA: '',
    answerB: '',
  }

  const submitHandler = (e: SubmitEvent): void => {
    console.log(fields)

  }
</script>

<form on:submit|preventDefault={submitHandler}>
	<div class="form-field">
		<label for="question">Poll Question:</label>
		<input
			id="question"
			type="text"
			placeholder="question"
			bind:value={fields.question}
		>
	</div>
	<div class="form-field">
		<label for="answer-a">Answer A:</label>
		<input
			id="answer-a"
			type="text"
			placeholder="answer A"
			bind:value={fields.answerA}
		>
	</div>
	<div class="form-field">
		<label for="answer-b">Answer B:</label>
		<input
			id="answer-b"
			type="text"
			placeholder="answer B"
			bind:value={fields.answerB}
		>
	</div>
	<Button
		typeButton="submit"
		type="secondary"
		flat
	>Add Poll</Button>

</form>

<style lang="scss">
  form {
    width: 400px;
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
    border: 1px solid rgba(0, 0, 0, 0.45);

    &:focus {
      background-color: rgba(0, 0, 0, 0.05);
      border: 1px solid rgb(64, 120, 224);
    }
  }

  label {
    margin: 10px auto;
    text-align: left;
  }
</style>