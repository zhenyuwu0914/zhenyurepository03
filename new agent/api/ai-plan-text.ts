import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
	const { gender, age, goal, timePerDay, equipment } = req.body || {};
	const text = `① 开合跳30秒（热身）→ ② 平板支撑20秒×3组（核心）→ ③ 仰卧抬腿15个×3组（${goal || '腹部'}）→ ④ 拉伸1分钟（放松）`;
	return res.status(200).json({ text, input: { gender, age, goal, timePerDay, equipment } });
}





