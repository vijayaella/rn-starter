import React from "react";
import { Text, StyleSheet,View,Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  //console.log(props.navigation);
  return (
    <View>
  <Text style={styles.text}>Hi There !</Text>
  <Button 
    onPress={() => navigation.navigate('Components')}
    title="Go to Components Demo"
    />
    <Button 
    onPress={() => navigation.navigate('List')}
    title="Go to List Demo"
    />

    <Button 
    onPress={() => navigation.navigate('Image')}
    title="Go to Image Demo"
    />
   
  </View>
  );
};
 // <TouchableOpacity  onPress={() => props.navigation.navigate('List')}>
    // <Text>Go to List Demo</Text>
    // </TouchableOpacity>

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

