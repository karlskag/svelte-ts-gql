<script>
    export let state;
    export let swapState;

    import * as core from './launchInfoCore';
</script>

<div class={'container'}>
    {#if core.shouldShowLoading(state)}
        Loading...
    {:else}
        <div class={'details'}>
            <div class={'video'}>
                <iframe title="Launch stream" width="560" height="340" src={core.getYouTubeSource(state)}></iframe>
            </div>
            <h2>{core.getLatestLaunchName(state)}</h2>
            <p>{core.getLatestLaunchDetails(state)}</p>
        </div>
    {/if}
</div>

<style>
    .container {
        display: flex;
        justify-content: center;
    }

    .details {
        width: 50%;
        text-align: left;
        line-height: 1.5;
    }

    .video {
        text-align: center;
    }
</style>