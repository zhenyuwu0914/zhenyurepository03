import mongoose from 'mongoose';

declare global {
	// eslint-disable-next-line no-var
	var __mongooseConn: Promise<typeof mongoose> | undefined;
}

export function connectToDatabase(uri: string) {
	if (!global.__mongooseConn) {
		global.__mongooseConn = mongoose.connect(uri);
	}
	return global.__mongooseConn;
}





