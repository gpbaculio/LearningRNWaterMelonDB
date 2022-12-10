import React from 'react';
import withObservablesSynchronized from '@nozbe/with-observables';

import {View, Text, Pressable} from 'react-native';

const Comment = ({comment}) => {
  return (
    <Pressable
      onPress={() => {
        console.log(`${comment.body}`, comment.isPressed);
        comment.updateIsPressed(!comment.isPressed);
        console.log(`${comment.body}`, comment.isPressed);
      }}
      style={{
        borderColor: comment.isPressed ? 'green' : 'red',
        borderWidth: 1,
      }}>
      <Text>{comment.body}</Text>
    </Pressable>
  );
};

const enhance = withObservablesSynchronized(['comment'], ({comment}) => ({
  comment,
}));

const EnhancedComment = enhance(Comment);

export default EnhancedComment;
