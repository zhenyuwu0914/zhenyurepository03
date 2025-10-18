import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	gender: { type: String, required: true },
	age: { type: Number, required: true },
	goal: { type: String, required: true },
	timePerDay: { type: String, required: true },
	equipment: { type: String, required: true },
}, { timestamps: true });

export type UserDocument = mongoose.InferSchemaType<typeof userSchema> & { _id: mongoose.Types.ObjectId };

export const UserModel = mongoose.model('User', userSchema);






