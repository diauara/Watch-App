import { Pressable, StyleSheet, Text } from 'react-native';

import { Link } from 'expo-router';

export default function Edit() {
    return (
        <Link href="/modal" asChild>
            <Pressable>
            {({ pressed }) => (
                <Text style={{ marginLeft: 15, fontSize: 18, color: 'orange', opacity: pressed ? 0.1 : 1 }} >Edit</Text>
            )}
            </Pressable>
        </Link>
    )
}
