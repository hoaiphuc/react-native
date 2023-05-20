import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Little Lemon</Text>
        </View>
    );
}

const styles = {
    container: {
        backgroundColor: '#EE9972',
    },
    headerText: {
        padding: 40,
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
};
