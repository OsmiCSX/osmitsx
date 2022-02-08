import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  name: 'WhistleBlower',
  host: '127.0.0.1',
}).useReactNative();

if (__DEV__) {
  // https://github.com/infinitered/reactotron for more options!

  reactotron.connect();

  // Let's clear Reactotron on every time we load the app
  reactotron.clear!();

  // Totally hacky, but this allows you to not both importing reactotron-react-native
  // on every file.  This is just DEV mode, so no big deal.
}
export default reactotron;

declare global {
  interface Console {
    tron: typeof reactotron;
  }
}

console.tron = reactotron;
