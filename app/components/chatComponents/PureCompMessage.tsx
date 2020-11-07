import * as React from 'react';
import { ListItem } from 'native-base'
import BubbleChat from '../BubbleChat'
import { StyleSheet } from 'react-native';

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

class PureCompMessage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message,
        };
    }

    render () {
        return (
            <ListItem avatar style={[(this.state.message.mine) ? styles.leftElem : styles.rightElem]}>
                <BubbleChat
                    mine={this.state.message.mine}
                    sender={ this.state.message.username }
                    text={ this.state.message.message }
                    image={{ uri: this.state.message.image }}
                />
            </ListItem>
        )
    }
}

export default PureCompMessage;
