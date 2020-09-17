import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import GetInput from './GetInput';
import Result from './Result';
import Button from './common/Button';
import DisplayInput from './DisplayInput';
import { calculation } from '../actions/CalcActions';

class NTCalculator extends Component {
    onSubmit = (array, picker) => {
        this.props.calculation(array, picker);
    };
    render() {
        const { array, picker, result } = this.props;
        return (
        <View style={styles.viewStyle}>
             <GetInput />
             <DisplayInput /> 
             <Button 
             style={{ alignSelf: 'center' }} 
             onPress={this.onSubmit.bind(this, array, picker)}
             >Submit</Button>

             <Result value={result} />
        </View> 
             );
    }
}
const styles = {
    viewStyle: {
        MarginLeft: 5,
        MarginRight: 5,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flex: 1,
        position: 'relative',
        elevation: 2
    }
};
const MapStateToProps = (state) => {
    console.log(state);
    const { array, picker } = state.input;
    const { result } = state.calculate;
    return { array, picker, result };
};
export default connect(MapStateToProps, { calculation })(NTCalculator);
