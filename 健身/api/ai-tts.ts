import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
	res.setHeader('Content-Type', 'audio/mpeg');
	return res.status(200).send(Buffer.from([]));
}





