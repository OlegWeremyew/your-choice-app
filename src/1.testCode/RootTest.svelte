<script lang="ts">
  import Modal from "@/1.testCode/Modal.svelte";
  import AddPersonForm from "@/1.testCode/AddPersonForm.svelte";

  let beltColor = 'black'
  let firstName = "Oleg"
  let lastName = "Veremyev"

  $: fullName = `${firstName} ${lastName}`
  $: {
    // console.log(beltColor)
    // console.log(fullName)
  }

  type array = {
    name: string,
    beltColor: string,
    age: number,
    id: number,
    skills: string[]
  }

  let people: array[] = [
    {name: "oleg", beltColor: "black", age: 29, id: 1, skills: []},
    {name: "oleg1", beltColor: "red", age: 39, id: 2, skills: []},
    {name: "oleg2", beltColor: "green", age: 49, id: 3, skills: []},
  ]

  const handleClick = (e: PointerEvent, id: number): void => {
    console.dir(e.clientX)
    people = people.filter((person: array): boolean => person.id !== id)
  }

  let showModal: boolean = false

  const toggleModal = (): void => {
    showModal = !showModal
  }

  // const addPerson = (person: array): void => {
  //   people = [...people, person]
  //   toggleModal()
  // }
  const addPerson = (e: CustomEvent): void => {
    people = [...people, e.detail]
    toggleModal()
  }
</script>
<Modal isPromo={true} {showModal} {toggleModal}>
	<AddPersonForm on:addPersonEvent={addPerson}/>
</Modal>
<main>
	<button on:click={toggleModal}>show</button>
	<p>{fullName} - {beltColor} belt</p>
	<input type="text" bind:value={beltColor}>
	<input type="text" bind:value={firstName}>
	<input type="text" bind:value={lastName}>

	<div>
		{#each people as person (person.id)}
			<div>{person.name}</div>
			<div>{person.age} years old, {person.beltColor}</div>
			<button on:click={(e)=>handleClick(e, person.id)}>delete</button>
		{:else }
			oleg
		{/each}
	</div>
</main>

<style lang="scss">
  main {
    text-align: center;
    padding: 1rem;
    max-width: 240px;
    margin: 0 auto;
  }
</style>
