import React from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

const NumberList = React.memo(({ numbers }) => {
  console.log('Rendering NumberList...');
  return (
    <FlatList
      data={numbers}
      keyExtractor={(item) => item.toString()}
      renderItem={({ item }) => (
        <Text style={styles.item}>{item}</Text>
      )}
    />
  );
});

const styles = StyleSheet.create({
  item: { fontSize: 24, padding: 10 },
});

export default NumberList;
