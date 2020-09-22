import App from './App.svelte';
import AppEngine from '@teamhex/hexlib/appEngine.js';
import * as core from './core';
import performAppSideEffects from './sideEffects';

const appEngine = AppEngine.default({
	initialState: core.createState(),
	performSideEffects: performAppSideEffects,
	system: {}
})

const app = new App({
	target: document.body,
	props: {
		appEngine: appEngine 
	}
});

export default app;