<script lang="ts">
  export let type: "primary" | "secondary" = 'primary'
  export let flat: boolean = false
  export let full: boolean = false
  export let inverse: boolean = false
  export let typeButton: 'button' | "submit" | "reset" = 'button'
</script>

<button
	type={typeButton}
	class={type}
	class:flat={flat}
	class:inverse={inverse}
	class:full={full}
	on:click
>
	<slot/>
</button>

<style lang="scss">
  button {
    cursor: pointer;
    border-radius: 6px;
    padding: 8px 12px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    outline: none;
    border: 2px solid transparent;
	  transition: 0.25s linear;
	  user-select: none;

    &:active {
      transform: scale(0.95);
    }
  }

  .primary {
    background-color: #d91b42;
    color: #ffffff;
  }

  .secondary {
    background-color: #45c496;
    color: #ffffff;
  }

  .full {
    width: 100%;
    transition: 0.15s linear;
  }

  .flat {
    box-shadow: none;
  }

  .inverse {
    max-height: 40px;

    &.primary {
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
