import React, { FC, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from '@navigations/bottomTab';

import styles from './style';
import { apply } from '@theme';
import { useGetUser } from '@stores';

type Props = FC<BottomTabScreenProps<TabParamList, 'Home'>>;

const Home: Props = () => {
  const { fetching, data, getUser } = useGetUser();

  useEffect(() => {
    getUser();
  }, []);

  console.log(data);

  return (
    <View style={styles.container}>
      <ActivityIndicator color={apply('red-500')} />
    </View>
  );
};

export default Home;
