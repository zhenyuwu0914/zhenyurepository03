import type { VercelRequest, VercelResponse } from '@vercel/node';
import { connectToDatabase } from './_db';
import { UserModel } from './models';

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
	const mongoUri = process.env.MONGODB_URI as string;
	if (!mongoUri) return res.status(500).json({ error: 'MONGODB_URI missing' });
	await connectToDatabase(mongoUri);
	const { gender, age, goal, timePerDay, equipment } = req.body || {};
	const doc = await UserModel.create({ gender, age, goal, timePerDay, equipment });
	return res.status(200).json(doc);
}





