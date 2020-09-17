import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common/CardSection';
import PickerInput from './PickerInput';
import Numberinput from './NumberInput';
import { ValueChange, AddArray } from '../actions/InputActions';


class GetInput extends Component {
    onNumberChange = (value) => {
        this.props.ValueChange('number', value);
    };
    onPickerChange = (value) => {
        this.props.ValueChange('picker', value);
    }; 
    addValue = (number, picker, length) => {
        this.props.AddArray(number, picker, length);
    };
    render() {
        const { number, picker, length, error } = this.props;
        return (
            <CardSection>
                <PickerInput 
                onValueChange={this.onPickerChange.bind(this)} 
                selectedValue={picker} 
                />
                <Numberinput 
                onChangeText={this.onNumberChange.bind(this)} 
                value={number}
                onPress={this.addValue.bind(this, number, picker, length)} 
                />
                <Text>{error}</Text>
            </CardSection>
        );
    }
}
const MapStateToProps = (state) => {
    const { number, picker, length, error } = state.input;
    return { number, picker, length, error }; 
};
export default connect(MapStateToProps, { ValueChange, AddArray })(GetInput);
