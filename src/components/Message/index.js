import { StyleSheet, Text, View } from 'react-native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const Message = ({message}) => {
    const isMyMessage = () => message.user.id === 'u1';
  return (
    <View style={[
                    styles.container,
                    { backgroundColor: isMyMessage() ? '#DCF8C5' : 'white'},
                    { alignSelf: isMyMessage() ? 'flex-start' : 'flex-end'}
                ]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.CreatedAt).fromNow(true)}</Text>
    </View>
  )
}

export default Message;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
        shadowColor: '#000',
        shadowOffset: {width: 0,height: 1},
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    message: {},
    time: {
        color: 'gray',
        alignSelf:  'flex-end',
    },
})