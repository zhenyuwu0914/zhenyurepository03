import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function UploadScreen() {
	const [imageUri, setImageUri] = useState<string | null>(null);
	const [feedback, setFeedback] = useState<string | null>(null);

	async function pickVideo() {
		const res = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Videos });
		if (!res.canceled && res.assets && res.assets.length > 0) {
			setImageUri(res.assets[0].uri);
			setFeedback('正在分析动作...');
			// Placeholder: send to backend / TensorFlow.js analysis
			setTimeout(() => setFeedback('臀部太高了，压下去，身体呈一条直线！'), 1200);
		}
	}

	return (
		<View style={styles.container}>
			<Button title="选择/上传训练视频" onPress={pickVideo} />
			<View style={styles.spacer} />
			{imageUri && <Text style={styles.tip}>视频已选择：{imageUri.slice(0, 32)}...</Text>}
			{feedback && <Text style={styles.feedback}>{feedback}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, backgroundColor: '#fff' },
	spacer: { height: 16 },
	tip: { fontSize: 12, color: '#666' },
	feedback: { fontSize: 16, marginTop: 12 },
});






