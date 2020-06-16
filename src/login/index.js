import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { setEmail } from '../helper/async';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error:''
        }
    }

    setEmail(text) {
        this.setState({ email: text })
    }

    setPassword(text) {
        this.setState({ password: text })
    }

    isEmailValid = (email) => {
        let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(String(email).toLowerCase())
   }

   async login(){
    if(!this.state.email){
        this.setState({ error: "Email is required" })
        return false
    }else if(!this.isEmailValid(this.state.email)){
        this.setState({ error: "Invalid Email" })
        return false
    }else if(!this.state.password){
        this.setState({ error: "Password is required" })
        return false
    }else {
        await setEmail(this.state.email)
        this.props.navigation.navigate('home')
        return true
    }
   }

    render() {
        return (
            <View style={{ padding: 20, flex: 1, justifyContent: 'center' }}>
                <Text style={{ color: '#000', fontWeight: 'bold', fontSize: 24, marginBottom: 20 }}>Login</Text>
                <TextInput placeholder={'Enter you email'} value={this.state.email} onChangeText={(text) => this.setEmail(text)} />
                <TextInput style={{ marginTop: 16 }} placeholder={'Enter you password'} secureTextEntry={true} value={this.state.password} onChangeText={(text) => this.setPassword(text)} />
                <TouchableOpacity onPress={async () => {
                    if(!await this.login()){
                        alert(this.state.error)
                    }
                }} style={{ backgroundColor: '#000', padding: 10, alignItems: 'center', justifyContent: 'center', borderRadius: 5, marginTop: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '400' }}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;