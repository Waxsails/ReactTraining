import { useCallback, useMemo, useState } from 'react';
import { Button, StyleSheet, Switch, Text, View } from 'react-native';
import NumberList from './components/NumberList';

export default function App() {
  const [numbers, setNumbers] = useState([1, 2, 3]);
  const [showEven, setShowEven] = useState(false);

  const filteredNumbers = useMemo(() => {
    console.log('Filtering numbers...');
    return showEven ? numbers.filter(n => n % 2 === 0) : numbers;
  }, [numbers, showEven]);

  const addNumber = useCallback(() => {
    setNumbers(prev => [...prev, prev.length + 1]);
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Add Number" onPress={addNumber} />
      <View style={styles.switchContainer}>
        <Text>Show Even Numbers</Text>
        <Switch value={showEven} onValueChange={setShowEven} />
      </View>
      <NumberList numbers={filteredNumbers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  switchContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 20 },
});
