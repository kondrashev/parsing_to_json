export const EDIT_ITEM_POS_DEFAULT = 'EDIT_ITEM_POS_DEFAULT';
export const EDIT_ITEM_PRODUCT_DISPENSER_DEFAULT = 'EDIT_ITEM_PRODUCT_DISPENSER_DEFAULT';
export const EDIT_ITEM = 'EDIT_ITEM';

export const setEditItemPosDefault = () => ({
    type: EDIT_ITEM_POS_DEFAULT
});
export const setEditItemProductDispenserDefault = () => ({
    type: EDIT_ITEM_PRODUCT_DISPENSER_DEFAULT
});
export const setEditItem = editItem => ({
    type: EDIT_ITEM,
    payload: editItem
});