import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Plan'>;

export default function PlanScreen({ route, navigation }: Props) {
	const [loading, setLoading] = useState(false);
	const [plan, setPlan] = useState<string | null>(null);

	async function generatePlan() {
		setLoading(true);
		setPlan(null);
		try {
			// Placeholder: call backend or OpenAI API
			// Here we mock a response for demo
			const mock = `① 开合跳30秒（热身）→ ② 平板支撑20秒×3组（核心）→ ③ 仰卧抬腿15个×3组（腹部）→ ④ 拉伸1分钟（放松）`;
			await new Promise(r => setTimeout(r, 800));
			setPlan(mock);
		} finally {
			setLoading(false);
		}
	}

	return (
		<View style={styles.container}>
			<Button title="生成AI计划" onPress={generatePlan} />
			<View style={styles.spacer} />
			{loading && <ActivityIndicator />}
			{plan && (
				<ScrollView style={styles.planBox}>
					<Text style={styles.planText}>{plan}</Text>
				</ScrollView>
			)}
			<View style={styles.spacer} />
			<Button title="去动作上传" onPress={() => navigation.navigate('Upload')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, padding: 16, backgroundColor: '#fff' },
	spacer: { height: 16 },
	planBox: { borderWidth: 1, borderColor: '#eee', borderRadius: 8, padding: 12 },
	planText: { fontSize: 16, lineHeight: 24 },
});






