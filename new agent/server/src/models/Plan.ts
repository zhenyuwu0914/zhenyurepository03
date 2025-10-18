import mongoose from 'mongoose';

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

export type PlanDocument = mongoose.InferSchemaType<typeof planSchema> & { _id: mongoose.Types.ObjectId };

export const PlanModel = mongoose.model('Plan', planSchema);






