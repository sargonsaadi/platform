


const initialState = {
    apps: {
        'Clock': { id: 'Clock', title: 'Clock', desc: 'Keep track of your time always', collapsed: false, pinned: false, active: true },
        'Puzzle': { id: 'Puzzle', title: 'Puzzle', desc: 'Solve this addicting Puzzle. its awsome.', collapsed: false, pinned: false, active: true },
        'Calculator': { id: 'Calculator', title: 'Calculator', desc: 'Dont ever miscalucate. life is complex', collapsed: false, pinned: false, active: true },
        'Notes': { id: 'Notes', title: 'Notes', desc: 'Take Notes and brains storm', collapsed: false, pinned: false, active: true },
    },
    appList: ['Calculator', 'Puzzle', 'Notes'],
    sideAppList: ['Clock', 'Puzzle', 'Calculator', 'Notes'],
    appModules: [],

    isMenuOpen: false
}
const rootReducer = (state = initialState, action) => {
    console.log("rootReducer - Triggered")
    if (action.type === "COLLAPSE_APP") {

        console.log("rootReducer - Collapse App - Triggered")
        const { appId } = action.payload;

        let app = state.apps[appId];
        app.collapsed = !app.collapsed;

        let newApps = {
            ...state.apps,
            [appId]: app
        }
        const newState = Object.assign({}, state, { apps: newApps })
        console.log("newState collapse: ", newState)
        return newState
    }


    if (action.type === "CANCEL_APP") {
        console.log("roeducer - Cancel App - Triggered", action.payload.appId);

        const { appId } = action.payload;

        let newAppList = [...state.appList];

        let apps = { ...state.apps };
        let app = apps[appId];

        //deActivating the app.
        app.active = false;
        apps = { ...state.apps, [appId]: app }

        //removing app from appList
        newAppList = newAppList.filter(id => id !== appId);


        const newState = Object.assign({}, state, { appList: newAppList, apps })
        console.log("newState", newState)
        return newState;
    }

    if (action.type === "REORDER_LIST") {
        let appList = [...state.appList];
        const apps = { ...state.apps };
        const { source, destination, draggableId } = action.payload;

        //if the destination is pinned, don't drag.
        if (destination.index === 0 && apps[appList[destination.index]].pinned) {
            return state;
        }

        //insert the draggable in destination
        appList.splice(source.index, 1)
        appList.splice(destination.index, 0, draggableId);


        const newState = Object.assign({}, state, { appList });

        return newState;
    }

    if (action.type === "REORDER_SIDE_LIST") {
        let appList = [...state.appList];
        let sideAppList = [...state.sideAppList];

        const { source, destination, draggableId } = action.payload;

        console.log(
            "payload side list", action.payload
        )
        sideAppList.splice(source.index, 1)
        sideAppList.splice(destination.index, 0, draggableId);
        console.log("sideAppList", sideAppList)

        const newState = Object.assign({}, state, { sideAppList });
        console.log("newState: ", newState)
        return newState;
    }
    if (action.type === "PIN_APP") {
        console.log("pinApp - reduceer - triggered")
        const { appId } = action.payload;
        let appList = [...state.appList];
        const apps = { ...state.apps }
        let app = state.apps[appId];

        // app.pinned = !app.pinned;

        for (let key in apps) {
            console.log("key: ", key, "value", apps[key])
            if (key !== appId && !apps[key].pinned) {
                console.log("match")
                apps[key].pinned = false;
            } else {
                apps[key].pinned = !apps[key].pinned
            }
        }
        const appIndex = appList.indexOf(app.id);

        if (appIndex !== 0) {
            appList.splice(appIndex, 1);
            appList.splice(0, 0, app.id);
        }

        const newState = Object.assign({}, state, { appList })

        return newState;
    }

    if (action.type === "TOGGLE_MENU") {

        let isMenuOpen = !state.isMenuOpen;
        console.log("reducer - toggle menu - triggered. Menu is now: ", isMenuOpen)
        return Object.assign({}, state, { isMenuOpen });
    }

    if (action.type === "TOGGLE_ACTIVE") {
        console.log("Toggle Ative - reducer - triggered")
        let apps = { ...state.apps };
        let appList = [...state.appList];
        const { appId } = action.payload;
        let app = apps[appId];

        //toggle "active" on that specific app
        app.active = !app.active;

        //update the appList according to active
        if (app.active) {
            appList.push(appId)
        } else {
            //if app is pinned or collapsed, reset them.
            if (app.pinned || app.collapsed) { app.pinned = false; app.collapsed = false }
            //remove it from list
            appList = appList.filter(id => id !== appId);
        }

        const newState = Object.assign({}, state, { apps: { ...apps, [appId]: app }, appList })


        console.log("NewState: Active: ", newState);
        return newState;
    }
    return state
}


export default rootReducer;


