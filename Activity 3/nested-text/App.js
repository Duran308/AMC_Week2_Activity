import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const BoldAndBeautiful = () => (
  <SafeAreaProvider>
   <SafeAreaView style={styles.container}>
    <Text style={styles.baseText}>
      Gabriel Martin V. Duran
      <Text style={styles.sectionText}> and BSIT 302</Text>
       <Text style={styles.hobbyText}> I love to play basketball</Text>
        <Text style={styles.animemovieText}> and my favorite anime slamdunk and hajime no ippo  </Text>
      </Text>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  baseText: {
    fontWeight: 'bold',
  },
  sectionText: {
    color: 'red'
  },
  hobbyText: {
    color: 'purple'
  },
  animemovieText: {
    color: 'blue'
  }
});

export default BoldAndBeautiful;