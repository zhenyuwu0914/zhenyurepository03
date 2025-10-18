import type { NextRequest } from 'next/server';

export const config = {
	runtime: 'edge',
};

export default async function handler(req: NextRequest) {
	if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
	// 简化：假设请求体是二进制/表单已由前端转换
	return new Response(JSON.stringify({ advice: '臀部太高了，压下去，身体呈一条直线！' }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}





