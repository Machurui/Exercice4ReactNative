import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Asset, ImagePickerResponse, launchImageLibrary } from 'react-native-image-picker';
import { uploadImage } from './Api';


const selectImage = () => {
    // Open Image Library:
    launchImageLibrary({ mediaType: 'photo' }, (response: ImagePickerResponse) => {
        // Check if the user cancelled the image picker
        if (response.didCancel) {
            console.log('User cancelled image picker');
            // Check if there was an error
        } else if (response.errorMessage) {
            console.log('ImagePicker Error: ', response.errorMessage);
            // Image was selected
        } else if (response.assets && response.assets.length > 0) {
            const firstAsset: Asset = response.assets[0];
            const source = { uri: firstAsset.uri };
            console.log(source);

            uploadImage(source.uri)
        }
    });
}

const Home = () => {
    return (
        <SafeAreaView>
            <Button title="Select Image" onPress={selectImage} />
        </SafeAreaView>
    )
}

export default Home;