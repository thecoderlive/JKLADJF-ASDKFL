import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const postsItem = ({ item }) => (
<View style={styles.posts_item}>
<Image
    style={styles.user_image}
    source={{uri: item.user_image}}
    />
<Text style={styles.user_name}>{item.user_name}</Text>
</View>
  );

const Posts = ({ item }) => (
<FlatList
    style={styles.posts}
    data={item}
    renderItem={postsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Posts;

const styles = StyleSheet.create({
    'user_image': {
        'width': '20vw',
        'height': '100vw',
        'marginTop': 5
    },
    'user_name': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 21,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});