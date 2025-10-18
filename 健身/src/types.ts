export type UserProfile = {
	gender: string;
	age: number;
	goal: '减脂' | '增肌' | '塑形' | string;
	timePerDay: string;
	equipment: '无器械' | '有哑铃' | string;
};

export type WorkoutStep = {
	order: number;
	name: string;
	durationSeconds?: number;
	reps?: number;
	sets?: number;
	category?: '热身' | '核心' | '力量' | '拉伸' | string;
};

export type Plan = {
	title: string;
	steps: WorkoutStep[];
};

export type ProgressEntry = {
	dateIso: string;
	activity: string;
	quantity: number;
	unit: string;
};






