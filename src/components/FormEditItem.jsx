import React from 'react';
import '../css/FormEditItem.css';
import { connect } from 'react-redux';
import {
    setEditItemPosDefault,
    setEditItemProductDispenserDefault,
    setEditItem
} from '../store/edit_item/actions';

class FormEditItem extends React.Component {
    constructor(props) {
        super(props);
        this.onEditItem = this.onEditItem.bind(this);
    }
    componentDidMount() {
        switch (this.props.device) {
            case 'POS':
                return this.props.setEditItemPosDefault();
            case 'ProductDispenser':
                return this.props.setEditItemProductDispenserDefault();
        }
    }
    close = () => {
        document.getElementsByClassName('editForm')[0].style.display = 'none';
    }
    onEditItem(event) {
        this.props.setEditItem(event.target.value);
    }
    render() {
        const styleEditFormClose = { display: 'none' }
        return (
            <div
                className='editForm'
                style={styleEditFormClose}
            >
                <button
                    className='btn-1'
                    onClick={this.close}
                >
                </button>
                <h>Edit item device!</h>
                <input
                    className='inp-1'
                    autoFocus type='number'
                    placeholder='Edit item'
                    onChange={this.onEditItem}
                />
            </div >
        );
    }
}
const mapStateToProps = () => { }
const mapDispatchToProps = {
    setEditItemPosDefault,
    setEditItemProductDispenserDefault,
    setEditItem
}
export default connect(mapStateToProps, mapDispatchToProps)(FormEditItem);