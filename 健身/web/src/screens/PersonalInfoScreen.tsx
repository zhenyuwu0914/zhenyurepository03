import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PersonalInfoScreen() {
  const navigate = useNavigate()
  const [gender, setGender] = useState('女生')
  const [age, setAge] = useState('20')
  const [goal, setGoal] = useState('减脂')
  const [timePerDay, setTimePerDay] = useState('每天早上10分钟')
  const [equipment, setEquipment] = useState('无器械')

  function onGeneratePlan() {
    navigate('/plan', { 
      state: {
        gender,
        age: Number(age) || 0,
        goal,
        timePerDay,
        equipment,
      }
    })
  }

  return (
    <div className="screen">
      <h1>个人信息</h1>
      
      <div className="form-group">
        <label>性别</label>
        <input 
          type="text"
          value={gender} 
          onChange={(e) => setGender(e.target.value)} 
          placeholder="女生/男生" 
        />
      </div>

      <div className="form-group">
        <label>年龄</label>
        <input 
          type="number"
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          placeholder="20" 
        />
      </div>

      <div className="form-group">
        <label>目标</label>
        <input 
          type="text"
          value={goal} 
          onChange={(e) => setGoal(e.target.value)} 
          placeholder="减脂/增肌/塑形" 
        />
      </div>

      <div className="form-group">
        <label>可用时间</label>
        <input 
          type="text"
          value={timePerDay} 
          onChange={(e) => setTimePerDay(e.target.value)} 
          placeholder="每天早上10分钟" 
        />
      </div>

      <div className="form-group">
        <label>设备</label>
        <input 
          type="text"
          value={equipment} 
          onChange={(e) => setEquipment(e.target.value)} 
          placeholder="无器械/有哑铃" 
        />
      </div>

      <div className="button-group">
        <button className="btn btn-primary" onClick={onGeneratePlan}>
          生成计划
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/progress')}>
          去进度追踪
        </button>
      </div>
    </div>
  )
}

