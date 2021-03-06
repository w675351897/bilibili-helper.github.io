import {sendCommandToHelper} from 'Utils/functions';

export default {
    state: {
        version: null,
        config: null,
        downloads: null,
        feeds: null,
        websiteUpdate: null,
        status: {
            initializing: false,
            tryConnect: false,
            connected: false,
            error: null,
        },
    },
    subscriptions: {
        setup({dispatch, history}) {
            window.addEventListener('message', function(event) {
                let {command = '', commend = '', data = {}, from, model, sign} = event.data;
                if (from !== 'helper') return;
                if (model !== 'global') return;
                switch (command || commend) {
                    case 'returnApp': {
                        if (data.code === 0) {
                            switch (sign) {
                                case 'connect': {
                                    dispatch({type: 'user/fetchUser'});
                                    dispatch({type: 'comments/loadCommentMap'})
                                    .then(() => dispatch({type: 'comments/loadVoteConfig'})
                                    .then(() => dispatch({type: 'comments/fetchVotes'})));
                                    dispatch({type: 'user/fetchCsrf'});
                                    dispatch({type: 'initApp', payload: {...data.data, initializing: false}});
                                    break;
                                }
                            }
                        }
                        break;
                    }
                }
            });
            dispatch({type: 'connectHelper'});
            dispatch({type: 'fetchConfig'});
            dispatch({type: 'fetchDownloadsConfig'});
            dispatch({type: 'fetchFeedsConfig'});
            dispatch({type: 'fetchWebsiteUpdateConfig'});
        },
    },
    reducers: {
        updateTryConnect(state) {
            state.status.tryConnect = true;
            return state;
        },
        initApp(state, {payload}) {
            if (payload.connected) state.status.connected = payload.connected;
            if (payload.config) state.version = payload.config;
            if (payload.initializing) state.initializing = payload.initializing;
            return state;
        },
        updateAppConfig(state, {payload}) {
            state.config = payload;
            return state;
        },
        updateDownloadsConfig(state, {payload}) {
            state.downloads = payload;
            return state;
        },
        updateFeedsConfig(state, {payload}) {
            state.feeds = payload;
            return state;
        },
        updateWebsiteUpdateConfig(state, {payload}) {
            state.websiteUpdate = payload;
            return state;
        },
    },
    effects: {
        * connectHelper({}, {put}) {
            sendCommandToHelper('connect', {model: 'global', sign: 'connect'});
            yield put({type: 'initApp', payload: {initializing: true}});
            yield put({type: 'updateTryConnect'});
        },
        * fetchConfig({}, {put, call}) {
            const configResponse = yield call(fetch, '../static/json/config.json');
            if (configResponse.status === 200 || configResponse.status === 304) {
                const config = yield configResponse.json();
                yield put({type: 'updateAppConfig', payload: config});
            }
        },
        * fetchDownloadsConfig({}, {put, call}) {
            const downloadsResponse = yield call(fetch, '../static/json/downloads.json');
            if (downloadsResponse.status === 200 || downloadsResponse.status === 304) {
                console.log(downloadsResponse);
                const config = yield downloadsResponse.json();
                console.log(config);
                yield put({type: 'updateDownloadsConfig', payload: config});
            }
        },
        * fetchFeedsConfig({}, {put, call}) {
            const feedsResponse = yield call(fetch, '../static/json/feed.json');
            if (feedsResponse.status === 200 || feedsResponse.status === 304) {
                const config = yield feedsResponse.json();
                yield put({type: 'updateFeedsConfig', payload: config});
            }
        },
        * fetchWebsiteUpdateConfig({}, {put, call}) {
            const updateResponse = yield call(fetch, '../static/json/websiteUpdate.json');
            if (updateResponse.status === 200 || updateResponse.status === 304) {
                const config = yield updateResponse.json();
                yield put({type: 'updateWebsiteUpdateConfig', payload: config});
            }
        },
    },
};
