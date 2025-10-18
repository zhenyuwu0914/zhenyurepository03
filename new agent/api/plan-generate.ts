import type { VercelRequest, VercelResponse } from '@vercel/node';
import { connectToDatabase } from './_db';
import { PlanModel } from './models';

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
	const mongoUri = process.env.MONGODB_URI as string;
	if (!mongoUri) return res.status(500).json({ error: 'MONGODB_URI missing' });
	await connectToDatabase(mongoUri);
	const { userId } = req.body || {};
	const title = '个性化健身计划';
	const steps = [
		{ order: 1, name: '开合跳', durationSeconds: 30, category: '热身' },
		{ order: 2, name: '平板支撑', durationSeconds: 20, sets: 3, category: '核心' },
		{ order: 3, name: '仰卧抬腿', reps: 15, sets: 3, category: '腹部' },
		{ order: 4, name: '拉伸', durationSeconds: 60, category: '拉伸' },
	];
	const plan = await PlanModel.create({ userId, title, steps });
	return res.status(200).json(plan);
}





