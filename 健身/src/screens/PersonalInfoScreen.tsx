import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'PersonalInfo'>;

export default function PersonalInfoScreen({ navigation }: Props) {
	const [gender, setGender] = useState('女生');
	const [age, setAge] = useState('20');
	const [goal, setGoal] = useState('减脂');
	const [timePerDay, setTimePerDay] = useState('每天早上10分钟');
	const [equipment, setEquipment] = useState('无器械');

	function onGeneratePlan() {
		navigation.navigate('Plan', {
			gender,
			age: Number(age) || 0,
			goal,
			timePerDay,
			equipment,
		});
	}

	return (
		<View style={styles.container}>
			<Text style={styles.label}>性别</Text>
			<TextInput value={gender} onChangeText={setGender} style={styles.input} placeholder="女生/男生" />

			<Text style={styles.label}>年龄</Text>
			<TextInput value={age} onChangeText={setAge} style={styles.input} placeholder="20" keyboardType="numeric" />

			<Text style={styles.label}>目标</Text>
			<TextInput value={goal} onChangeText={setGoal} style={styles.input} placeholder="减脂/增肌/塑形" />

			<Text style={styles.label}>可用时间</Text>
			<TextInput value={timePerDay} onChangeText={setTimePerDay} style={styles.input} placeholder="每天早上10分钟" />

			<Text style={styles.label}>设备</Text>
			<TextInput value={equipment} onChangeText={setEquipment} style={styles.input} placeholder="无器械/有哑铃" />

			<View style={styles.spacer} />
			<Button title="生成计划" onPress={onGeneratePlan} />
			<View style={styles.smallSpacer} />
			<Button title="去进度追踪" onPress={() => navigation.navigate('Progress')} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		backgroundColor: '#fff',
	},
	label: {
		fontSize: 16,
		marginTop: 12,
		marginBottom: 4,
	},
	input: {
		borderWidth: 1,
		borderColor: '#ddd',
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingVertical: Platform.select({ ios: 12, android: 8, default: 10 }),
		fontSize: 16,
	},
	spacer: { height: 16 },
	smallSpacer: { height: 8 },
});






