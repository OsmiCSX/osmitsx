/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '@redux/store';
import { getUser } from '@redux/actions/user';
import { View, ActivityIndicator, Image, Text } from 'react-native';

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabParamList } from '@navigations/bottomTab';

import styles from './style';
import { apply } from '@theme';

const Home: Props = props => {
  const { user } = props;
  const result = user.data?.results?.[0];
  const name = `${result?.name?.title}. ${result?.name?.first} ${result?.name?.last}`;

  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <View style={styles.container}>
      {user.loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Image
            source={{ uri: result?.picture?.medium }}
            style={apply('w-40 h-40')}
          />
          <Text>Name: {name}</Text>
          <Text>Age: {result?.dob?.age}</Text>
          <Text>Gender: {result?.gender}</Text>
          <Text>Phone: {result?.phone}</Text>
          <Text>Email: {result?.email}</Text>
        </>
      )}
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  getUser: () => dispatch(getUser()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = FC<BottomTabScreenProps<TabParamList, 'Home'> & PropsFromRedux>;

export default connector(Home);
