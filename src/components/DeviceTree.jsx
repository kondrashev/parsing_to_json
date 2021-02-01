import React from 'react';
import { connect } from 'react-redux';
import { setLoadDevices } from '../store/load_devices/actions';
import SimpleTabs from './SimpleTabs';

class DeviceTree extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setLoadDevices();
    }
    render() {
        return (
            <SimpleTabs deviceTree={this.props.devices.api.deviceTree} />
        )
    }
}
const mapStateToProps = state => {
    return {
        devices: state.LoadDevicesReducer
    };
}
const mapDispatchToProps = {
    setLoadDevices
}
export default connect(mapStateToProps, mapDispatchToProps)(DeviceTree);