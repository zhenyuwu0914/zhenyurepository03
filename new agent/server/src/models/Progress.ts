import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	dateIso: { type: String, required: true },
	activity: { type: String, required: true },
	quantity: { type: Number, required: true },
	unit: { type: String, required: true },
}, { timestamps: true });

export type ProgressDocument = mongoose.InferSchemaType<typeof progressSchema> & { _id: mongoose.Types.ObjectId };

export const ProgressModel = mongoose.model('Progress', progressSchema);






