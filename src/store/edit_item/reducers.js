import {
    EDIT_ITEM_POS_DEFAULT,
    EDIT_ITEM_PRODUCT_DISPENSER_DEFAULT,
    EDIT_ITEM
} from './actions';

const defaultState = { editItem: 0 }
const defaultStatePos = { editItem: 1 }
const defaultStateProductDispenser = { editItem: 75 }

export const EditItemReducer = (state = defaultState, action) => {
    switch (action.type) {
        case EDIT_ITEM_POS_DEFAULT:
            return state = defaultStatePos;
        case EDIT_ITEM_PRODUCT_DISPENSER_DEFAULT:
            return state = defaultStateProductDispenser;
        case EDIT_ITEM:
            return {
                ...state,
                editItem: action.payload
            };
    }
    return state;
}