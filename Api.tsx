import React, { useState } from 'react';

// Api URL
const API_URL = 'https://api.imgur.com/3/image';
// Client ID IM
const CLIENT_ID = '757d9bd0bfc055b';

export const uploadImage = async (imageUri: string | undefined) => {
    // Create a form data object
    const formData = new FormData();
    formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'image.jpg',
    });

    try {
        // Fetch the image
        fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-type': 'multipart/form-data',
                'Authorization': `Client-ID ${CLIENT_ID}`,
            },
            body: formData,
        })
            .then((response) => response.json())
            .then((json) => console.log(json.data.link));
    } catch (error) {
        console.log(error);

    }
}