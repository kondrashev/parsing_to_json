import React from 'react';
import { connect } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
class DeviceEdit extends React.Component {
    constructor(props) {
        super(props);
    }
    editClick(event) {
        if (event.target.getAttribute('identify') === 'merchantIdx' || event.target.getAttribute('identify') == 'count') {
            document.getElementsByClassName('editForm')[0].style.display = '';
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
        const deviceFields = Object.entries(this.props.devices.api.deviceTree[this.props.items][0][this.props.itemsEdit][this.props.element]).map(([key]) => {
            return key;
        })
        const deviceValues = Object.entries(this.props.devices.api.deviceTree[this.props.items][0][this.props.itemsEdit][this.props.element]).map(([, value]) => {
            if (value === '1' || value === 75) {
                return this.props.editItem;
            } else {
                return value;
            }
        })
        const deviceItems = deviceFields.map((item) =>
            <StyledTableCell
                key={item}
            >
                {item}
            </StyledTableCell>
        )
        const deviceItemsValues = deviceValues.map((value, key) => {
            if (value === 1 || value === 75) {
                return (
                    <StyledTableCell
                        key={value}
                        onClick={this.editClick}
                        identify={deviceFields[key]}
                        style={{
                            backgroundColor: 'grey'
                        }}
                    >
                        {value}
                    </StyledTableCell>
                )
            } else {
                return (
                    <StyledTableCell
                        key={value}
                        onClick={this.editClick}
                        identify={deviceFields[key]}
                    >
                        {value}
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
    return {
        devices: state.LoadDevicesReducer,
        editItem: state.EditItemReducer.editItem
    };
}
export default connect(mapStateToProps)(DeviceEdit);