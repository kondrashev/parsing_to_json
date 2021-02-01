import { combineReducers } from 'redux';
import { LoadDevicesReducer } from '../store/load_devices/reducers';
import { EditItemReducer } from '../store/edit_item/reducers';

export default combineReducers({
    LoadDevicesReducer,
    EditItemReducer
});