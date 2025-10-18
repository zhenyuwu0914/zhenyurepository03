import { Router } from 'express';
import multer from 'multer';
import { checkPoseAdvice, generatePlanText, synthesizeMotivationVoice } from '../services/ai.js';

const upload = multer({ storage: multer.memoryStorage() });
export const aiRouter = Router();

aiRouter.post('/plan-text', async (req, res) => {
	const text = await generatePlanText(req.body);
	res.json({ text });
});

aiRouter.post('/pose', upload.single('video'), async (req, res) => {
	if (!req.file) return res.status(400).json({ error: 'No file' });
	const advice = await checkPoseAdvice(req.file.buffer);
	res.json({ advice });
});

aiRouter.post('/tts', async (req, res) => {
	const { text } = req.body as { text: string };
	const audio = await synthesizeMotivationVoice(text);
	res.setHeader('Content-Type', 'audio/mpeg');
	res.send(Buffer.from(audio));
});






