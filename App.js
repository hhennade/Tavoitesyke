import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('')
  const [HR, setHR] = useState('')

  const calculateHR = () => {
    if (age !== '') {
      const minHR = Math.round((220-age)*0.65)
      const maxHR = Math.round((220-age)*0.85)
      setHR(minHR + ' - ' + maxHR)
    }
    else {
      setHR('')
    }

  }


  return (
    <View style={styles.container}>
      <Text styles={styles.field}>Age</Text>
      <TextInput
        placeholder="Enter your age"
        keyboardType='decimal-pad'
        value={age}
        onChangeText = {age => setAge(age)}
        styles={styles.field} 
        textAlign='center'
        onBlur = {calculateHR}
        />
      <Text styles={styles.field}>HR limits</Text>
      <Text styles={styles.field}>{HR}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field: {
    marginBottom: 10,
  }
});
