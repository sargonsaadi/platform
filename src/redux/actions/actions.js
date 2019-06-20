



export const cancelApp = appId => {
    console.log("Action cancelApp - Triggered")
    return {
        type: "CANCEL_APP",
        payload: { appId }
    }
}

export const collapseApp = appId => {
    console.log("Action collapseApp - Triggered")
    return {
        type: "COLLAPSE_APP",
        payload: { appId }
    }
}
export const pinApp = appId => {
    console.log("Action pinApp - Triggered", appId)
    return {
        type: "PIN_APP",
        payload: { appId }
    }
}
export const testApp = appId => {
    console.log("Action testApp - Triggered", appId)
    return {
        type: "TEST_APP",
        payload: { appId }
    }
}
export const reOrderList = (source, destination, draggableId) => {
    console.log("reOrderList action - Triggered");
    return {
        type: "REORDER_LIST",
        payload: {
            source, destination, draggableId
        }
    }
}
export const reOrderSideList = (source, destination, draggableId) => {
    console.log("reOrderSideList action - Triggered");
    return {
        type: "REORDER_SIDE_LIST",
        payload: {
            source, destination, draggableId
        }
    }
}
export const toggleMenu = () => {
    console.log("toggleMenu action - Triggered");
    return {
        type: "TOGGLE_MENU",
        payload: {}
    }
}

export const toggleActive = appId => {
    console.log("toggleActive action - Triggered");
    return {
        type: "TOGGLE_ACTIVE",
        payload: { appId }
    }
}