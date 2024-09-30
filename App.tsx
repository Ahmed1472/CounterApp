import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const counterApp = () => {

  const [count, setCount] = useState(0);

  const AddCount = () => {
    setCount(count + 1);
  }

  const SubstractCount = () => {
    setCount(count - 1);
  }

  const ResetCount = () => {
    setCount(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Counter</Text>

      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button} onPress={SubstractCount}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.counterText}>{count}</Text>

        <TouchableOpacity style={styles.button} onPress={AddCount}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={ResetCount}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headingText: {
    fontSize: 30,
    marginBottom: 40,
    fontWeight: 'bold',
    color: 'black'
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    paddingHorizontal: 20,
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: '#FF4136',
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default counterApp;