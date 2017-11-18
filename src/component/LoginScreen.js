import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableWithoutFeedback, Text, StyleSheet, Alert, Image, Picker} from 'react-native';
import {Icon, Fab, Button, Toast, Container, Title, Input, InputGroup, Form, Label, Item, Content, Thumbnail} from 'native-base';
// Styles
import appColors from '../styles/colors';
import appMetrics from '../styles/metrics';
import styles from '../styles/LoginScreenStyles'
// Date picker
import DatePicker from 'react-native-datepicker'
// Navigation
import {
    StackNavigator,
} from 'react-navigation';


export default class LoginScreen extends React.Component{
    constructor(props){
        super(props);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handlePetName = this.handlePetName.bind(this);
        this.handlePetBirth = this.handlePetBirth.bind(this);
        this.handlePetWeight = this.handlePetBirth.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.state = {
            name: '',
            email: '',
            petName: '',
            petBirth: '',
            petWeight: 0,
            pick: false
        }
    }

    handleEmail(event){
        this.setState({email: event.nativeEvent.text});
    }
    handleName(event){
        this.setState({name: event.nativeEvent.text});
    }
    handlePetName(event){
        this.setState({petName: event.nativeEvent.text});
    }
    handlePetBirth(event){
        this.setState({petBirth: event.nativeEvent.text, pick: true});
    }
    handlePetWeight(event){
        this.setState({petWeight: event.nativeEvent.text});
    }
    handleDone(){
        if( this.state.name==='' || 
            this.state.email===''||
            this.state.petName===''||
            this.state.petBirth===''||
            this.state.petWeight==='')
        alert('Please fill up the form!!')
        else this.props.navigation.navigate('BottomBar');
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
                        <Input placeholder="Pets' Name" value={this.state.petName} onChange={this.handlePetName}/>
                    </InputGroup>
                    <InputGroup>
                        <Icon name='open' />
                        <Input placeholder="Pet's Weight" value={this.state.petWeight} onChange={this.handlePetWeigh}/>
                    </InputGroup>
                    <DatePicker
                        style={{width: 200}}
                        date={this.state.petBirth}
                        mode="date"
                        placeholder="pets Birthday"
                        format="YYYY-MM-DD"
                        minDate="2016-05-01"
                        maxDate="2019-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => {this.setState({petBirth: date})}}
                    />
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
