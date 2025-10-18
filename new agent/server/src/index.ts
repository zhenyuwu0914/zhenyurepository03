import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import { UserModel } from './models/User.js';
import { PlanModel } from './models/Plan.js';
import { ProgressModel } from './models/Progress.js';
import { aiRouter } from './routes/ai.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/ai', aiRouter);

const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fitness_companion';
mongoose.connect(mongoUri).then(() => {
	console.log('MongoDB connected');
}).catch((err) => {
	console.error('MongoDB connection error', err);
});

// Health
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Create or update user profile
app.post('/api/user', async (req, res) => {
	const { gender, age, goal, timePerDay, equipment } = req.body;
	const doc = await UserModel.create({ gender, age, goal, timePerDay, equipment });
	res.json(doc);
});

// Generate plan (placeholder AI)
app.post('/api/plan/generate', async (req, res) => {
	const { userId } = req.body;
	const title = '个性化健身计划';
	const steps = [
		{ order: 1, name: '开合跳', durationSeconds: 30, category: '热身' },
		{ order: 2, name: '平板支撑', durationSeconds: 20, sets: 3, category: '核心' },
		{ order: 3, name: '仰卧抬腿', reps: 15, sets: 3, category: '腹部' },
		{ order: 4, name: '拉伸', durationSeconds: 60, category: '拉伸' },
	];
	const plan = await PlanModel.create({ userId, title, steps });
	res.json(plan);
});

// Progress
app.post('/api/progress', async (req, res) => {
	const entry = await ProgressModel.create(req.body);
	res.json(entry);
});

app.get('/api/progress/:userId/summary', async (req, res) => {
	const { userId } = req.params;
	const entries = await ProgressModel.find({ userId }).sort({ dateIso: 1 }).lean();
	res.json({ entries });
});

// Video upload (placeholder storage)
const upload = multer({ storage: multer.memoryStorage() });
app.post('/api/upload/video', upload.single('video'), async (req, res) => {
	if (!req.file) return res.status(400).json({ error: 'No file' });
	// TODO: send buffer to action recognition or cloud storage
	res.json({ ok: true, advice: '臀部太高了，压下去，身体呈一条直线！' });
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => console.log(`Server listening on port ${port}`));


