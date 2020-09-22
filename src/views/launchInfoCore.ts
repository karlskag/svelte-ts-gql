import serviceIds from '../service/serviceIds';

export function getLatestLaunch(state: any) {
    return state[serviceIds.latestLaunches].data;
}

export function shouldShowLoading(state: any) {
    return getLatestLaunch(state) === null;
}

export function getLatestLaunchDetails(state: any) {
    return getLatestLaunch(state).details;   
}

export function getLatestLaunchName(state: any) {
    return getLatestLaunch(state).name;
}

export function getYouTubeSource(state: any) {
    return `https://www.youtube.com/embed/${getLatestLaunch(state).links.youtube_id}`;
}