import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function PlanScreen() {
  const navigate = useNavigate()
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [plan, setPlan] = useState<string | null>(null)
  const [userInfo, setUserInfo] = useState<any>(null)

  useEffect(() => {
    if (location.state) {
      setUserInfo(location.state)
    }
  }, [location.state])

  async function generatePlan() {
    setLoading(true)
    setPlan(null)
    try {
      // 调用后端 API
      const response = await fetch('/api/ai-plan-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      })
      
      if (response.ok) {
        const data = await response.json()
        setPlan(data.text)
      } else {
        // 如果 API 失败，使用模拟数据
        const mock = `① 开合跳30秒（热身）→ ② 平板支撑20秒×3组（核心）→ ③ 仰卧抬腿15个×3组（腹部）→ ④ 拉伸1分钟（放松）`
        setPlan(mock)
      }
    } catch (error) {
      console.error('生成计划失败:', error)
      // 使用模拟数据作为后备
      const mock = `① 开合跳30秒（热身）→ ② 平板支撑20秒×3组（核心）→ ③ 仰卧抬腿15个×3组（腹部）→ ④ 拉伸1分钟（放松）`
      setPlan(mock)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="screen">
      <h1>生成计划</h1>
      
      {userInfo && (
        <div className="user-info">
          <p><strong>性别:</strong> {userInfo.gender}</p>
          <p><strong>年龄:</strong> {userInfo.age}</p>
          <p><strong>目标:</strong> {userInfo.goal}</p>
          <p><strong>时间:</strong> {userInfo.timePerDay}</p>
          <p><strong>设备:</strong> {userInfo.equipment}</p>
        </div>
      )}

      <div className="button-group">
        <button className="btn btn-primary" onClick={generatePlan} disabled={loading}>
          {loading ? '生成中...' : '生成AI计划'}
        </button>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>正在生成个性化计划...</p>
        </div>
      )}

      {plan && (
        <div className="plan-box">
          <h3>您的健身计划</h3>
          <p>{plan}</p>
        </div>
      )}

      <div className="button-group">
        <button className="btn btn-secondary" onClick={() => navigate('/upload')}>
          去动作上传
        </button>
      </div>
    </div>
  )
}

