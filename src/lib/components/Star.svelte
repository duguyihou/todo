<script lang="ts">
	import Fa from 'svelte-fa'
	import { faStar } from '@fortawesome/free-solid-svg-icons'
	import type { Task } from '$lib/typings'
	import { handleStar } from '$lib/store'

	export let task: Task
</script>

<button
	aria-label="star"
	type="button"
	class:starred={task.priority > 1}
	on:click={() => handleStar(task.id, task.priority)}
>
	<Fa icon={faStar} size="sm" />
</button>

<style lang="postcss">
	button {
		@apply mx-2 flex justify-center items-center text-bg;
	}
	.starred {
		@apply text-red;
	}
</style>
