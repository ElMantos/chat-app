import React, {ReactChild, useState, useRef, useEffect} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {
  Container,
  List,
  ListItem,
  Text,
  Form,
  Button,
  Content,
  Input,
} from 'native-base';
import Header from './Header';

export interface Message {
  body: string;
  sentByMe: boolean;
}

interface ChatScreenProps {
  messages?: Message[];
  title?: string | null;
  headerLeftChildren?: ReactChild;
  headerRightChildren?: ReactChild;
  onSend: (message: string) => void;
}

const styles = StyleSheet.create({
  message: {
    maxWidth: '90%',
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginTop: 5,
  },
  messageText: {
    fontSize: 15,
  },
  sentByMe: {
    marginLeft: 'auto',
  },
  sentByFriend: {
    marginRight: 'auto',
  },
  form: {
    backgroundColor: 'white',
  },
  input: {
    minHeight: 50,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginTop: 10,
  },
  start: {
    textAlign: 'center',
  },
});

const ChatScreen: React.FC<ChatScreenProps> = ({
  messages,
  title,
  headerLeftChildren,
  headerRightChildren,
  onSend,
}) => {
  const [value, setValue] = useState('');
  const textareaRef = useRef<TextInput | null>();
  const contentRef = useRef<any>();

  const messageLength = messages?.length;

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current._root.scrollToEnd();
    }
  }, [messageLength]);
  return (
    <Container>
      <Header
        title={title || ''}
        rightChildren={headerRightChildren}
        leftChildren={headerLeftChildren}
      />
      <Content
        ref={(ref) => {
          contentRef.current = ref;
        }}
        enableResetScrollToCoords
        padder>
        <List>
          {messages ? (
            messages.map(({body, sentByMe}, index) => (
              <ListItem
                key={index}
                style={[
                  styles.message,
                  sentByMe ? styles.sentByMe : styles.sentByFriend,
                ]}
                itemHeader>
                <Text style={styles.messageText}>{body}</Text>
              </ListItem>
            ))
          ) : (
            <Text style={styles.start}>Start the conversation!</Text>
          )}
        </List>
        <Form style={styles.form}>
          <Input
            placeholder="Message"
            getRef={(ref: TextInput) => {
              textareaRef.current = ref;
            }}
            style={styles.input}
            value={value}
            onChangeText={(text: string) => setValue(text)}
            blurOnSubmit
          />
          <Button
            onPress={() => {
              if (value) {
                if (textareaRef.current) {
                  textareaRef.current.blur();
                }
                onSend(value);
                setValue('');
              }
            }}
            full>
            <Text>Send</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ChatScreen;
