import React from 'react';
import { TouchableOpacity,StyleSheet,Text, View,Button } from 'react-native';
import styles from '../../styles/styles';

const ButtonApp =({text,handler})=>{
    return(<TouchableOpacity
        style={styles.ButtonStyle} onPress={handler}>
        <Text style={styles.textStyleButton}>{text}</Text>
      </TouchableOpacity>);  
}
export default ButtonApp
