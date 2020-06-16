import AsyncStorage from "@react-native-community/async-storage";

export async function isSignedIn() {
    return await AsyncStorage.getItem('email');
}

export async function setEmail(value) {
    return await AsyncStorage.setItem('email',value);
}

export async function removeEmail(value) {
    return await AsyncStorage.removeItem('email');
}