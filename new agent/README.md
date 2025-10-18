## Fitness Companion (React Native + Node + Mongo)

### Prerequisites
- Node.js 18+
- npm or pnpm
- MongoDB (local or Atlas)

### Frontend (Expo)
```bash
# from repo root
npm install
npm run start
# or: pnpm install && pnpm start
```

### Backend (Express)
```bash
cd server
npm install
cp .env.example .env  # then edit
npm run dev
```

Create `server/.env` with:
```
PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/fitness_companion
OPENAI_API_KEY=sk-...
ELEVENLABS_API_KEY=...
```

### API
- POST `/api/user` create user profile
- POST `/api/plan/generate` create demo plan for user
- POST `/api/progress` add progress entry
- GET  `/api/progress/:userId/summary` list entries
- POST `/api/upload/video` upload video (placeholder)
- POST `/api/ai/plan-text` AI plan text (stub)
- POST `/api/ai/pose` pose advice from video (stub)
- POST `/api/ai/tts` synthesize motivation voice (stub)

### Notes
- Screens: `PersonalInfo`, `Plan`, `Upload`, `Progress`
- Replace AI stubs with real integrations when ready.





