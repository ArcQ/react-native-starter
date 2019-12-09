import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  title: {
    flex: 1,
    color: 'blue',
    fontSize: 32,
    padding: 20,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  landingContainer: {
    backgroundColor: 'teal',
    alignItems: 'center',
  },
  ideasText: {
    flex: 1,
    color: '#000',
    fontSize: 16,
    fontWeight: '400',
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  ideaContainer: {
    borderRadius: 3,
    margin: 10,
    padding: 10,
    backgroundColor: 'coral',
  },
  ideaInput: {
    backgroundColor: '#DDDDDD',
    padding: 20,
  },
  searchBar: {
    margin: 8,
  },
  homeContainer: {
    backgroundColor: 'coral',
  },
});
