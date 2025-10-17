import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	gender: { type: String, required: true },
	age: { type: Number, required: true },
	goal: { type: String, required: true },
	timePerDay: { type: String, required: true },
	equipment: { type: String, required: true },
}, { timestamps: true });

const workoutStepSchema = new mongoose.Schema({
	order: Number,
	name: String,
	durationSeconds: Number,
	reps: Number,
	sets: Number,
	category: String,
}, { _id: false });

const planSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	title: { type: String, required: true },
	steps: { type: [workoutStepSchema], default: [] },
}, { timestamps: true });

const progressSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	dateIso: { type: String, required: true },
	activity: { type: String, required: true },
	quantity: { type: Number, required: true },
	unit: { type: String, required: true },
}, { timestamps: true });

export const UserModel = mongoose.models.User || mongoose.model('User', userSchema);
export const PlanModel = mongoose.models.Plan || mongoose.model('Plan', planSchema);
export const ProgressModel = mongoose.models.Progress || mongoose.model('Progress', progressSchema);





