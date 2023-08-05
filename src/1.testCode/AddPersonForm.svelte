<script lang="ts">
  import {createEventDispatcher} from "svelte";

  let dispatch: any = createEventDispatcher()

  let name: string;
  let beltColor: string;
  let age: number;

  // let fighting = false
  // let sneaking = false
  // let running = false

  let skills: string[] = []

  const handleSubmit = () => {
    // console.log(name, beltColor, age, fighting, sneaking, running)
    // console.log(name, beltColor, age, skills)
    const person = {
        name: name || "oleg",
        beltColor: beltColor || 'red',
        age: age || 29,
        skills,
        id: Math.random(),
      }

      dispatch('addPersonEvent', person)
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
	<input type="text" placeholder="name" bind:value={name}>
	<input type="text" placeholder="belt color" bind:value={beltColor}>
	<input type="number" placeholder="age" bind:value={age}>

	<label>Skills: </label>
	<!--	<input type="checkbox" bind:checked={fighting}/>fighting<br>-->
	<!--	<input type="checkbox"  bind:checked={sneaking}/>sneaking<br>-->
	<!--	<input type="checkbox"  bind:checked={running}/>running<br>-->

	<input type="checkbox" bind:group={skills} value="fighting"/>fighting<br>
	<input type="checkbox" bind:group={skills} value="sneaking"/>sneaking<br>
	<input type="checkbox" bind:group={skills} value="running"/>running<br>

	<label>Belts color:</label>
	<select bind:value={beltColor}>
		<option value="black">black</option>
		<option value="orange">orange</option>
		<option value="red">red</option>
		<option value="blue">blue</option>
	</select>

	<button type="submit">add Person</button>
</form>