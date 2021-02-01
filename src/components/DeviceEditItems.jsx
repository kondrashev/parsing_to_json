import React from 'react';
import ReactDOM from 'react-dom';
import DeviceTree from './DeviceTree';
import DeviceEdit from './DeviceEdit';
import FormEditItem from './FormEditItem';
import { createStore } from 'redux';
import rootReducer from '../store/reducers';
import { Provider } from 'react-redux';

const store = createStore(
    rootReducer
);

const DeviceEditItems = (items, element, itemsEdit) => {
    const App = () => (
        <Provider store={store}>
            <div>
                <DeviceTree />
                <DeviceEdit items={items} element={element} itemsEdit={itemsEdit} />
                <FormEditItem device={items} />
            </div>
        </Provider>
    )
    ReactDOM.render(<App />, document.getElementById('root'))
}
export default DeviceEditItems;