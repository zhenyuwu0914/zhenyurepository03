import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PersonalInfoScreen from './screens/PersonalInfoScreen'
import PlanScreen from './screens/PlanScreen'
import UploadScreen from './screens/UploadScreen'
import ProgressScreen from './screens/ProgressScreen'
import './App.css'

export type RootStackParamList = {
  PersonalInfo: undefined;
  Plan: { gender: string; age: number; goal: string; timePerDay: string; equipment: string } | undefined;
  Upload: undefined;
  Progress: undefined;
};

export default function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/personal-info" replace />} />
          <Route path="/personal-info" element={<PersonalInfoScreen />} />
          <Route path="/plan" element={<PlanScreen />} />
          <Route path="/upload" element={<UploadScreen />} />
          <Route path="/progress" element={<ProgressScreen />} />
        </Routes>
      </div>
    </Router>
  )
}

