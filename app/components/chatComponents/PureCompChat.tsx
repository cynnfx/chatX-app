import * as React from 'react';
import { List } from 'native-base'
import BubbleChat from '../BubbleChat'
import PureCompMessage from './PureCompMessage'
import { StyleSheet, Image, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    rightElem: {
      justifyContent: 'flex-end',
    },
    leftElem: {
      justifyContent: 'flex-start'
    }
});

class PureCompChat extends React.PureComponent {
    constructor() {
        super();
        this.state = {
        };
    }
    
    render () {
        const messages = [
            {
                username: 'Jeanne',
                message: 'Salut Jean',
                image: 'https://picsum.photos/seed/01/200/300',
                mine: false
            },
            {
                username: 'Jean',
                message: 'Salut Jeanne',
                image: 'https://i.imgur.com/SCI3502.jpg',
                mine: true
            },
            {
                username: 'Jeanne',
                message: 'Ca va bien ?',
                image: 'https://picsum.photos/seed/01/200/300',
                mine: false
            },
            {
                username: 'Jean',
                message: 'Très bien, tu peux me sucer ?',
                image: 'https://i.imgur.com/SCI3502.jpg',
                mine: true
            },
            {
                username: 'Jeanne',
                message: 'Demande a ta femme',
                image: 'https://picsum.photos/seed/01/200/300',
                mine: false
            },
            {
                username: 'Jean',
                message: 'Elle suce mal',
                image: 'https://i.imgur.com/SCI3502.jpg',
                mine: true
            },
            {
                username: 'Jeanne',
                message: 'Bon bah j\'arrive alors',
                image: 'https://picsum.photos/seed/01/200/300',
                mine: false
            },
            {
                username: 'Jean',
                message: 'Trop bien, je commence à la laver',
                image: 'https://i.imgur.com/SCI3502.jpg',
                mine: true
            },
            {
                username: 'Jeanne',
                message: 'Sllluuuurrrrp',
                image: 'https://picsum.photos/seed/01/200/300',
                mine: false
            },
            {
                username: 'Jean',
                message: 'Baaalaaaa',
                image: 'https://i.imgur.com/SCI3502.jpg',
                mine: true
            },

        ]

        return (
                <List 
                    dataArray={messages}
                    keyExtractor={(item, index) => index.toString()}
                    renderRow={(message) =>
                        <PureCompMessage message={message}/>
                }>
                </List>
        )
    }
}

export default PureCompChat;
