<script lang="ts">
  export let isPromo: boolean = false
  export let showModal: boolean = false
  export let toggleModal: () => void
</script>

{#if showModal}
	<div
		class="backprop"
		class:promo={isPromo}
		on:click|self={toggleModal}
	>
		<div class="modal">
			<slot/>
		</div>
	</div>
{/if}

<style lang="scss">
  .backprop {
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0, 0, 0, 0.3);
  }

  .modal {
    padding: 10px;
    border-radius: 10px;
    max-width: 400px;
    margin: 10% auto;
    text-align: center;
    background-color: #fff;
  }

  .promo .modal {
    background-color: red;
    color: white;
  }
</style>