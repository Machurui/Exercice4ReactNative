// Deprecated for Android 34
// import { Platform } from "react-native"
// import { PERMISSIONS, request } from "react-native-permissions"

// export const requestGalleryPermission = async () => {
//     if (Platform.OS === 'android') {
//         const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
//         if (result === 'granted') {
//             console.log('Permission granted');
//         } else {
//             console.log('Permission denied');
//         }
//     }
// }