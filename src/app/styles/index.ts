import { StyleSheet } from 'react-nativescript';

export const globalStyles = StyleSheet.create({
  container: {
    padding: 16,
  },
  flexContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  button: {
    fontSize: 18,
    padding: 16,
    margin: 8,
    backgroundColor: '#6B8C9E',
    color: 'white',
    borderRadius: 8,
  },
});