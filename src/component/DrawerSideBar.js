import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, Platform} from 'react-native'

import {Container, Content, Thumbnail, Icon, Badge, Button, Text as NbText} from 'native-base';
import appColors from '../styles/colors';

export default class DrawerSideBar extends React.Component {
    static propTypes = {
        navigate: PropTypes.func.isRequired
    };

    render() {
      const {navigate} = this.props;
      console.log('Draw');
      console.log(this.props);
      return (
        <Container style={styles.drawer}>
            <Image source={require('../img/back.jpg')}style={styles.header}>
                <Thumbnail large source={require('../img/back.jpg')} />
            </Image>
            <Button block transparent style={styles.item} onPress={() => navigate('Personal')}>
                <Icon name="star" style={styles.icon} />
                <Text style={styles.text}>My page</Text>

            </Button>
            <Button block transparent style={styles.item} onPress={() => navigate('Group')}>
                <Icon name='tag-multiple' style={styles.icon} />
                <Text style={styles.text}>Group</Text>
            </Button>
            <Button block transparent style={styles.item} onPress={() => navigate('Profile')}>
                <Icon name='account-circle' style={styles.icon} />
                <Text style={styles.text}>Profile</Text>
            </Button>
        </Container>
    );
    }
}

const styles = {
    drawer: {
        flex: 1,
        backgroundColor: appColors.primaryLight
    },
    header: {
        width: undefined,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#666',
        marginBottom: 16
    },
    item: {
        alignItems: 'center'
    },
    icon: {
        color: appColors.primaryLightText
    },
    text: {
        color: appColors.primaryLightText,
        fontSize: (Platform.OS === 'ios') ? 17 : 19,
        fontWeight: 'bold',
        flex: 1,
        marginHorizontal: 12
    }
};
