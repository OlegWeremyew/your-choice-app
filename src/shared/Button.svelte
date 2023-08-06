<script lang="ts">
  export let type: "primary" | "secondary" = 'primary'
  export let flat: boolean = false
  export let inverse: boolean = false
  export let typeButton: 'button' | "submit" | "reset" = 'button'
</script>

<button
	type={typeButton}
	class={type}
	class:flat={flat}
	class:inverse={inverse}
	on:click
>
	<slot/>
</button>

<style lang="scss">
  button {
    border: 0;
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
	  outline: none;
  }

  .primary {
    background-color: #d91b42;
    color: #ffffff;
  }

  .secondary {
    background-color: #45c496;
    color: #ffffff;
  }

  .flat {
    box-shadow: none;
  }

  .inverse {

	  &.primary{
      background-color: #ffffff;
      color: #d91b42;
		  border: 2px solid #d91b42;
	  }

    .secondary {
      background-color: #ffffff;
      color: #45c496;
      border: 2px solid #45c496;
    }
  }
</style>
