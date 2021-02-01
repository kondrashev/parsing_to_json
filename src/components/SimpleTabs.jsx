import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import 'typeface-roboto';
import Device from './Device';
let index = 0;

export default function SimpleTabs(props) {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        index = newValue;
    };
    const treeDevice = [];
    Object.entries(props.deviceTree).map(([key]) => {
        treeDevice.push(key);
    })
    const listDevices = Object.entries(props.deviceTree).map(([key]) => {
        return (
            <Tab
                label={key}
                style={{
                    fontSize: 18
                }}
            />
        )
    })
    return (
        <div>
            <AppBar position="static">
                <Tabs
                    style={{
                        fontStyle: 'typeface-roboto',
                        paddingLeft: '140px'
                    }}
                    value={value}
                    onChange={handleChange}
                    aria-label='simple tabs example'>
                    {listDevices}
                </Tabs>
            </AppBar>
            <Device items={treeDevice[index]} />
        </div>
    );
}