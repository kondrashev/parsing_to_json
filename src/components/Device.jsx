import React from 'react';
import { connect } from 'react-redux';
import DeviceEditItems from './DeviceEditItems';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
let items = '';

class Device extends React.Component {
    constructor(props) {
        super(props);
    }
    openClick(event) {
        let element = 0;
        switch (event.target.getAttribute('identify')) {
            case 'options':
                return DeviceEditItems(items, element = 1, event.target.getAttribute('identify'))
            case 'products':
                return DeviceEditItems(items, element, event.target.getAttribute('identify'))
        }
    }
    render() {
        const StyledTableCell = withStyles(theme => ({
            head: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
                fontStyle: 'typeface-roboto',
                fontSize: '18px'
            },
            body: {
                fontStyle: 'typeface-roboto',
                fontSize: 14,
            },
        }))(TableCell);
        const useStyles = makeStyles(theme => ({
            root: {
                width: '100%',
                marginTop: theme.spacing(3),
                overflowX: 'auto',
            },
            table: {
                minWidth: 700,
            },
        }));
        items = this.props.items;
        const deviceItems = Object.entries(this.props.devices.api.deviceTree[this.props.items][0]).map(([key]) => {
            return (
                <StyledTableCell
                    key={key}
                >
                    {key}
                </StyledTableCell>
            )
        })
        const deviceItemsValues = Object.entries(this.props.devices.api.deviceTree[this.props.items][0]).map(([key, value]) => {
            if (typeof value === 'object' && value.length !== 0) {
                return (
                    <StyledTableCell
                        key={key}
                    >
                        <a
                            href='#'
                            identify={key}
                            onClick={this.openClick}
                            style={{
                                fontStyle: 'typeface-roboto',
                                fontSize: '18px'
                            }}
                        >
                            {'Click'}
                        </a>
                    </StyledTableCell>
                )
            } else {
                return (
                    <StyledTableCell
                        key={key}
                        onClick={this.editClick}
                        identify={key}
                    >
                        {`${value}`}
                    </StyledTableCell>
                )
            }
        })
        return (
            <Paper className={useStyles.root}>
                <Table className={useStyles.table} aria-label='customized table'>
                    <TableHead>
                        <TableRow>
                            {deviceItems}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {deviceItemsValues}
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}
const mapStateToProps = state => {
    return { devices: state.LoadDevicesReducer };
}
export default connect(mapStateToProps)(Device);