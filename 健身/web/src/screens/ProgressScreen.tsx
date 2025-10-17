import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProgressScreen() {
  const navigate = useNavigate()
  const [stats, setStats] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function refresh() {
    setLoading(true)
    try {
      // 这里可以调用真实的进度 API
      // const response = await fetch('/api/progress?userId=xxx')
      // const data = await response.json()
      
      // 模拟数据
      await new Promise(r => setTimeout(r, 500))
      setStats('本周累计跑步15公里，比上周多3公里。\n本月平板支撑从20秒提升到40秒。')
    } catch (error) {
      console.error('获取进度失败:', error)
      setStats('获取数据失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="screen">
      <h1>进度追踪</h1>
      
      <div className="button-group">
        <button className="btn btn-primary" onClick={refresh} disabled={loading}>
          {loading ? '加载中...' : '刷新数据'}
        </button>
      </div>

      {loading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>正在加载进度数据...</p>
        </div>
      )}

      {stats && (
        <div className="stats-box">
          <h3>您的健身进度</h3>
          <p style={{ whiteSpace: 'pre-line' }}>{stats}</p>
        </div>
      )}

      <div className="button-group">
        <button className="btn btn-secondary" onClick={() => navigate('/personal-info')}>
          返回个人信息
        </button>
      </div>
    </div>
  )
}

