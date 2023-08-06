<script lang="ts">
  let y

  $: isShowButton = y > 200

  const scrollToTopPage = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>

<button
	type="button"
	class="round"
	class:active={isShowButton}
	on:click={scrollToTopPage}
>
	<div class="arrow"></div>
</button>

<svelte:window bind:scrollY={y}/>

<style lang="scss">
  .round {
    position: fixed;
    right: 15px;
    bottom: 45px;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #fafafa;
    cursor: pointer;
    pointer-events: none;
    visibility: hidden;
    transition: 0.2s linear;
    opacity: 0.6;
    transform: scale(0.7);
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

    &.active {
      opacity: 1;
      transform: scale(1);
      visibility: visible;
      pointer-events: auto;
    }

    &:active {
      transform: scale(0.92);
    }
  }

  .arrow {
    width: 20px;
    height: 20px;
    background-image: url(../assets/images/arrowUp.png);
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>