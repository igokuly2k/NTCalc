import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common/CardSection';

class DisplayInput extends Component {
    render() {
        const { array } = this.props;
        return (
            <CardSection>
                <Text>Your Input:</Text>
                {array.map((value, index) => (<Text key={index}>{value}</Text>)) }
            </CardSection>
        );
    }
}
const MapStateToProps = (state) => {
    const { array } = state.input;
    return { array };
};
export default connect(MapStateToProps)(DisplayInput);
