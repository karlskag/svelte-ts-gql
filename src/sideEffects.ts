import * as core from './core';
import { fetchData } from './service/serviceCaller';
import serviceIds from './service/serviceIds';

export default function performSideEffects({ system, state, swapState }) {
    if (core.shouldFetchLatestLaunch(state)) {
        fetchData({
            url: 'https://api.spacexdata.com/v4/launches/latest',
            resolveFn: function (data) { swapState(core.receiveServiceResponse, data, true, serviceIds.latestLaunches) },
            rejectFn: () => { }
        });
    }
};  