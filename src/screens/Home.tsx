import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '@redux/actions/user';
import { View, ActivityIndicator } from 'react-native';

const Home = props => {
  const { user } = props;

  useEffect(() => {
    props.getUser();
  }, []);

  console.log(user);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator />
    </View>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(getUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
