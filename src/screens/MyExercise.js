import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const MyExercise=()=>{
const name='Vijay'
return (
    <View>
    <Text style={Styles.textStyle}>'Getting Started with React Native'</Text>
    <Text style={Styles.subHeaderStyle}>My Name is {name}</Text>
    </View>
)
};
const Styles=StyleSheet.create({
textStyle: {
    fontSize:45},
    subHeaderStyle:{
        fontSize:20
    }

});

export default MyExercise;
