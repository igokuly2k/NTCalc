import React, { Component } from 'react';
import { Text } from 'react-native';
import Button from './common/Button';
import CardSection from './common/CardSection';

class ResultInput extends Component {
    render() {
        return (
            <CardSection>
                <Text>Result:</Text>
                <Text>{this.props.value}</Text>
                <Button>OK</Button>
            </CardSection>
        );
    }
}

export default ResultInput;
