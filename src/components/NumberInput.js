import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Button from './common/Button';


class NumberInput extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <TextInput
                    style={{ height: 40, 
                    borderColor: 'gray', 
                    borderWidth: 1, 
                    flex: 2 }} keyboardType="number-pad" autoCorrect={false}
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                />
                <Button style={{ flex: 1 }} onPress={this.props.onPress}>+</Button>
            </View>
        );
    }
}
const styles = {
    viewStyle: {
        flexDirection: 'row',
        flex: 1
    }
};

export default NumberInput;
