import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import PersonalInfoScreen from './src/screens/PersonalInfoScreen';
import PlanScreen from './src/screens/PlanScreen';
import UploadScreen from './src/screens/UploadScreen';
import ProgressScreen from './src/screens/ProgressScreen';

export type RootStackParamList = {
	PersonalInfo: undefined;
	Plan: { gender: string; age: number; goal: string; timePerDay: string; equipment: string } | undefined;
	Upload: undefined;
	Progress: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="auto" />
			<Stack.Navigator>
				<Stack.Screen name="PersonalInfo" component={PersonalInfoScreen} options={{ title: '个人信息' }} />
				<Stack.Screen name="Plan" component={PlanScreen} options={{ title: '生成计划' }} />
				<Stack.Screen name="Upload" component={UploadScreen} options={{ title: '动作上传' }} />
				<Stack.Screen name="Progress" component={ProgressScreen} options={{ title: '进度追踪' }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}





