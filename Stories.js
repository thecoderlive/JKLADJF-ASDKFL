import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const storiesItem = ({ item }) => (
<View style={styles.stories_item}>
<Image
    style={styles.story}
    source={{uri: item.story}}
    />
<Text style={styles.story_label}>{item.story_label}</Text>
</View>
  );

const Stories = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.stories}
    data={item}
    renderItem={storiesItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default Stories;

const styles = StyleSheet.create({
    'story': {
        'width': '100vw',
        'height': '100vw',
        'marginTop': 5
    },
    'story_label': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});