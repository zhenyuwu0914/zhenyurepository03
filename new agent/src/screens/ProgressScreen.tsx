import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProgressScreen() {
	const [stats, setStats] = useState<string | null>(null);

	async function refresh() {
		// Placeholder: fetch from backend
		await new Promise(r => setTimeout(r, 500));
		setStats('本周累计跑步15公里，比上周多3公里。\n本月平板支撑从20秒提升到40秒。');
	}

	return (
		<View style={styles.container}>
			<Button title="刷新数据" onPress={refresh} />
			<View style={styles.spacer} />
			{stats && <Text style={styles.text}>{stats}</Text>}
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, backgroundColor: '#fff' },
	spacer: { height: 16 },
	text: { fontSize: 16, lineHeight: 22 },
});






