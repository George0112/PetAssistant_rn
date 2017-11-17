import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Container, Header, Button, Icon, Left, Right, Body, Title, Drawer} from 'native-base';
import DrawerSideBar from './DrawerSideBar';

export default class NavigationContainer extends React.Component {
    static propTypes = {
        navigate: PropTypes.func.isRequired,
        title: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.openDrawer = this.openDrawer.bind(this);
        this.closeDrawer = this.closeDrawer.bind(this);
        this.handleGoBack = this.handleGoBack.bind(this);
    }

    render() {
        const {title, navigate} = this.props;
        let leftButton = (
          <View></View>
        );
        let rightButton =(
          <View></View>
        );
        if(title === 'My Calendar' || title === 'Todo' || title ==='Create todo' || title ==='Create team' || title === 'PopAct') {
            leftButton = (
                <Button transparent onPress={this.handleGoBack}>
                    <Icon name='chevron-left' />
                </Button>
            );
            rightButton =(
                <View></View>
            );
        }
        if(title === 'Login')
        {
            leftButton = (
                <View></View>
            );
            rightButton =(
                <View></View>
          );
        }



        return (
            <Drawer
                ref={(el) => this.drawer = el}
                content={<DrawerSideBar  navigate={navigate} />}
                onClose={this.closeDrawer}
                tweenHandler={(ratio) => ({
                    mainOverlay: {
                        opacity: ratio,
                        backgroundColor: appColors.mask
                    }
                })}>
                <Container>                    
                    {this.props.children}
                </Container>
            </Drawer>
        );
    }

    openDrawer() {
        this.drawer._root.open();
    }

    closeDrawer() {
        this.drawer._root.close();
    }

    handleGoBack() {
        this.props.back();
    }
}
