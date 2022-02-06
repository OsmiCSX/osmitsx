/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '@redux/actions/user';
import { View, ActivityIndicator, Image, Text } from 'react-native';
import { UserStateType } from '@constants/user';

const Home = (props: any) => {
  const { user }: { user: UserStateType } = props;
  const result = user.data?.results?.[0];
  const name = `${result?.name?.title}. ${result?.name?.first} ${result?.name?.last}`;

  useEffect(() => {
    props.getUser();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {user.loading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Image
            source={{ uri: result?.picture?.medium }}
            style={{ width: 40, height: 40 }}
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

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Function) => ({
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
