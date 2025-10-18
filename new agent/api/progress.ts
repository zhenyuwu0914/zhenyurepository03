import type { VercelRequest, VercelResponse } from '@vercel/node';
import { connectToDatabase } from './_db';
import { ProgressModel } from './models';

export default async function handler(req: VercelRequest, res: VercelResponse) {
	const mongoUri = process.env.MONGODB_URI as string;
	if (!mongoUri) return res.status(500).json({ error: 'MONGODB_URI missing' });
	await connectToDatabase(mongoUri);

	if (req.method === 'POST') {
		const entry = await ProgressModel.create(req.body);
		return res.status(200).json(entry);
	}

	if (req.method === 'GET') {
		const userId = req.query.userId as string;
		const entries = await ProgressModel.find({ userId }).sort({ dateIso: 1 }).lean();
		return res.status(200).json({ entries });
	}

	return res.status(405).json({ error: 'Method Not Allowed' });
}





