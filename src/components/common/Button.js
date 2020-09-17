import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const Button = (props) => 
    (<View style={[styles.viewStyle, props.style]}>
            <TouchableOpacity onPress={props.onPress}>
                <Text>
                    {props.children}
                </Text>
            </TouchableOpacity>
    </View>);
const styles = {
    viewStyle: {
        width: 100, 
        borderWidth: 2,
        borderColor: '#0080FF',
        position: 'relative',
        elevation: 2,
        fontWidth: 30
    }
};
export default Button;
