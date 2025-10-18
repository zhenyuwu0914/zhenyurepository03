import type { PlanDocument } from '../models/Plan.js';

export async function generatePlanText(params: { gender: string; age: number; goal: string; timePerDay: string; equipment: string }): Promise<string> {
	// Placeholder: call OpenAI or Claude. Return simple string now.
	return `① 开合跳30秒（热身）→ ② 平板支撑20秒×3组（核心）→ ③ 仰卧抬腿15个×3组（${params.goal}）→ ④ 拉伸1分钟（放松）`;
}

export async function checkPoseAdvice(_videoBytes: Buffer): Promise<string> {
	// Placeholder: integrate TensorFlow.js or Vision API.
	return '膝盖别内扣，对准脚尖！';
}

export async function synthesizeMotivationVoice(text: string): Promise<Uint8Array> {
	// Placeholder: integrate ElevenLabs. Return empty byte array stub.
	return new Uint8Array([]);
}






