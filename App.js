import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Colors,
  DebugInstructions,
  ReloadInstructions,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';

const HEADER_HEIGHT = 150;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
      heartAnim: new Animated.Value(0),
    };
  }

  componentDidMount = () => {
    SplashScreen.hide();
    Animated.spring(this.state.fadeAnim, {
      toValue: 1,
      duration: 2000,
    }).start();
  };

  doLike = () => {
    this.setState({heartAnim: new Animated.Value(0)}, () => {
      Animated.timing(this.state.heartAnim, {
        toValue: 1,
        duration: 700,
        useNativeDriver: true,
      }).start();
    });
  };

  render() {
    const marginTop = this.state.fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 32],
    });

    const marginLeft = this.state.fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [500, 0],
    });

    const toggleHeart = this.state.heartAnim.interpolate({
      inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      outputRange: [
        '0deg',
        '-20deg',
        '20deg',
        '20deg',
        '-20deg',
        '-20deg',
        '20deg',
        '20deg',
        '-20deg',
        '-20deg',
        '0deg',
      ],
    });

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.header}>
              <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                React Native
              </Text>
            </View>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <Animated.View
                style={[
                  styles.sectionContainer,
                  {
                    opacity: this.state.fadeAnim,
                    marginTop,
                    marginLeft,
                  },
                ]}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Text>
              </Animated.View>
              <Animated.View
                style={[
                  styles.sectionContainer,
                  {
                    opacity: this.state.fadeAnim,
                    marginTop,
                    marginLeft,
                  },
                ]}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </Animated.View>
              <Animated.View
                style={[
                  styles.sectionContainer,
                  {
                    opacity: this.state.fadeAnim,
                    marginTop,
                    marginLeft,
                  },
                ]}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </Animated.View>
              <Animated.View
                style={[
                  styles.sectionContainer,
                  {
                    opacity: this.state.fadeAnim,
                    marginTop,
                    marginLeft,
                  },
                ]}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </Animated.View>

              <Animated.View>
                <TouchableOpacity
                  style={[
                    styles.btnHeart,
                    {
                      transform: [{rotateZ: toggleHeart}],
                    },
                  ]}
                  onPress={this.doLike}>
                  <Icon name="heart" color="black" size={34} />
                </TouchableOpacity>
              </Animated.View>
              <LearnMoreLinks />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  header: {
    height: HEADER_HEIGHT,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    width: '90%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  btnHeartContainer: {
    backgroundColor: 'yellow',
  },
  btnHeart: {
    padding: 10,
    alignSelf: 'center',
  },
  card: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
