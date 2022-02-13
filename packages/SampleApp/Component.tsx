import React, {useEffect, useState} from 'react';
import {Button, Text} from 'react-native';
import {PageTwo} from 'foo/build/PageTwo';

export function Test() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 20) {
      throw new Error('fjkdhkjfhdjk');
    }
  });

  return (
    <>
      <PageTwo />
      <Text>App.tsx {count}</Text>
      <Button title="increment" onPress={() => setCount(count + 1)} />
    </>
  );
}
