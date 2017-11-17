import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableWithoutFeedback, Text, StyleSheet, Alert, Image} from 'react-native';
//import {Container, Header, Content, Title, Left, Right, Body, Icon, Button, Item,  Input,Form,Label} from 'native-base';
import {Icon, Fab, Button, Toast, Container, Title, Input, InputGroup, Form, Label, Item, Content, Thumbnail} from 'native-base';
import appColors from '../styles/colors';
import appMetrics from '../styles/metrics';

export default class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePetName = this.handlePetName.bind(this);
        this.handlePetBirth = this.handlePetBirth.bind(this);
        this.handlePetWeight = this.handlePetBirth.bind(this);
        this.state = {
            name: '',
            email: '',
            petName: '',
            petBirth: '',
            petWeight: 0
        }
    }

    handleEmail(event){
        this.setState({emailvalue: event.nativeEvent.text});
    }
    handleName(event){
        this.setState({name: event.nativeEvent.text});
    }
    handlePetName(event){
        this.setState({petName: event.nativeEvent.text});
    }
    handlePetBirth(event){
        this.setState({petBirth: event.nativeEvent.text});
    }
    handlePetWeight(event){
        this.setState({petWeight: event.nativeEvent.text});
    }
    handleDone(event){
        alert('done');
    }

    render(){
        return(
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <Text style={styles.title}>Set Profile</Text>
                    <Thumbnail source={require('../img/logo.png')} size={80} style={styles.images}/>
                    <InputGroup>
                        <Icon name='people' />
                        <Input placeholder='Name' value={this.state.name} onChange={this.handleName}/>
                    </InputGroup>
                    <InputGroup>
                        <Icon name='e-mail' />
                        <Input placeholder='Email' value={this.state.email} onChange={this.handleEmail}/>
                    </InputGroup>
                    <InputGroup>
                        <Icon name='octocat' />
                        <Input placeholder='PetName' value={this.state.petName} onChange={this.handlePetName}/>
                    </InputGroup>
                    <InputGroup>
                        <Icon name='open' />
                        <Input placeholder='petWeight' value={this.state.petWeight} onChange={this.handlePetWeigh}/>
                    </InputGroup>
                    <InputGroup>
                        <Icon name='birthday' />
                        <Input placeholder='petBirth' value={this.state.petBirth} onChange={this.handlePetBirth}/>
                    </InputGroup>
                    <Content>
                    <Button large primary style={styles.buttons} onPress={this.handleDone} >
                        <Text style={styles.text}>Done</Text>
                    </Button>
                    </Content>
                </Content>
            </Container>
        )
    }
}
const styles = {
    images:{
        height: 80,
        width: 80,
        alignItems: 'center',
        alignSelf: 'center',
        margin: 10,
        borderRadius: 10
    },
    title:{
      fontSize:20,
      color:'rgba(0, 0, 0, 1)',
      fontWeight:'bold',
      marginTop: 50,
      textAlign: 'center'
    },
    container:{
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: 1
    },
    content: {
        backgroundColor: 'rgb(255, 255, 255)',
        flex:1,
        margin: 30,
        borderRadius: 10
    },
    input: {
        height: 100,
        fontSize:90
    },
    buttons:{
      marginTop:32,
      width:270,
      alignSelf:'center',
      backgroundColor:'rgb(15, 100, 219)',
      alignItems:'center',
      borderRadius: 18
    },
    text:{
      fontSize:26,
      color:'white',
      marginLeft:100
    }
};