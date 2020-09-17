import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => 
    (<View style={styles.viewStyle}>
        {props.children}
    </View>);
const styles = {
    viewStyle: {
        flex: 1, 
        backgroundColor: '#F3F3F3',
        flexDirection: 'column',
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 5 },
        position: 'relative',
        elevation: 2,
        borderColor: '#FFFFFF',
        borderWidth: 5,
        borderRadius: 5,
        borderBottomWidth: 0
    }
};
export default CardSection;
