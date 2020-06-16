import AsyncStorage from "@react-native-community/async-storage";

//get login email for login
export async function isSignedIn() {
    return await AsyncStorage.getItem('email');
}

//set login email for login
export async function setEmail(value) {
    return await AsyncStorage.setItem('email',value);
}

//remove email for logout
export async function removeEmail(value) {
    return await AsyncStorage.removeItem('email');
}