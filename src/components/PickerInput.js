import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';

class PickerInput extends Component {
    render() {
        return (
            <View style={styles.viewStyle} >
                <Text>What you gonna do?</Text>
                <Picker 
                style={{ height: 50, width: 100 }}
                onValueChange={this.props.onValueChange}
                selectedValue={this.props.selectedValue}
                > 
                    <Picker.Item label="LCM" value="lcm" />
                    <Picker.Item label="GCD" value="gcd" />
                    <Picker.Item label="Canonical Decomposition" value="cd" />
                    <Picker.Item label="Tow Sigma" value="ts" />
                </Picker>
            </View>
        );
    }
}
const styles = {
    viewStyle: {
        flexDirection: 'column'
    }
};

export default PickerInput;
