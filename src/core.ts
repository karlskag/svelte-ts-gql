import pageIds from "./pageIds";

export function createState() {
    let state = { 
        activePageId: pageIds.start,
        latestLaunchService: {
            data: null,
            ok: null
        }
    };
    return state;
}

export function shouldFetchLatestLaunch(state) {
    return state.latestLaunchService.data === null;
}

export function receiveServiceResponse(state, data, ok: boolean, serviceId: string) {
    state[serviceId].ok = ok;
    if (ok) {
        state[serviceId].data = data;
    }

    return state;
} 

export function getActivePageId(state) {
    return state.activePageId;
}