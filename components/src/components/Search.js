import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import LocationItem from './LocationItem';
import { API_KEY } from './Key';

export default function Search() {
  return (
    <View style={styles.container}>
      <GoogleAutoComplete apiKey={API_KEY} debounce={500} minLength={3}>
        {({ handleTextChange, locationResults, fetchDetails }) => (
          <React.Fragment>
            {console.log('locationResults', locationResults)}
            <View style={styles.inputWrapper}>
              <TextInput 
                style={styles.textInput}
                placeholder="Search a place" 
                onChangeText={handleTextChange}
              />
            </View>
            <ScrollView>
              {locationResults.map(el =>(
                <LocationItem
                  {...el}   
                  key={el.id}    
                  fetchDetails={fetchDetails}              
                />
              ))}
            </ScrollView>
          </React.Fragment>
        )}
      </GoogleAutoComplete>  
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft:50,
      },
      textInput: {
        height: 40,
        width: 300,
        borderWidth: 1,
        paddingHorizontal: 16,
        borderRadius:50,
      },
      inputWrapper: {
        marginTop: 80,
        alignSelf:'center',
      }
    });
