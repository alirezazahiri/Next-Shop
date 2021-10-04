export const addItem = (product) => {
    return {type: "ADD_ITEM", payload: product}
}

export const removeItem = (id) => {
    return {type: "REMOVE_ITEM", payload: id}
}

export const increase = (id) => {
    return {type: "INCREASE_ITEM", payload: id}
} 

export const decrease = (id) => {
    return {type: "DECREASE_ITEM", payload: id}
}

export const checkout = () => {
    return {type: "CHECKOUT"}
}

export const clear = () => {
    return {type: "CLEAR"}
}