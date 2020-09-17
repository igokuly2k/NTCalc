import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
    render() {
        const { viewStyle, textStyle } = styles;
        return (
        <View style={viewStyle}>
            <Text style={textStyle}> 
                {this.props.children}
            </Text>
        </View>);
    }
}
const styles = {
    viewStyle: { 
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 2,
        backgroundColor: '#E3E3E3', 
        borderColor: '#FFFFFF',
        borderWidth: 5,
        borderRadius: 5,
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 5 },
        position: 'relative',
        elevation: 2,
        overflow: 'hidden'
     },
    textStyle: {
        fontSize: 30,
        fontWeight: '800'
    }
};

export default Header;
