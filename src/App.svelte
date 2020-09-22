<script lang="ts">
	export let appEngine;
	import * as core from './core';
	import { writable } from 'svelte/store';
	import pageIds from './pageIds';

	import LaunchInfo from './views/LaunchInfo.svelte'
	import Start from './views/Start.svelte'

	let state = writable(appEngine.stateAtom.deref()); 

	appEngine.render = function () {
		state.set(appEngine.stateAtom.deref());
	}

	let idsToComponent = {};
	idsToComponent[pageIds.start] = Start;
	idsToComponent[pageIds.latest] = LaunchInfo;
	const pageComponent = idsToComponent[$state.activePageId];
</script>

<main>
	<h1>SpaceX launch information</h1>
	<svelte:component this={pageComponent} state={$state} swapState={appEngine.swapState}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>