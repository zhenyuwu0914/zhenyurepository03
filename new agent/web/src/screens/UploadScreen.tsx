import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UploadScreen() {
  const navigate = useNavigate()
  const [uploading, setUploading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  async function handleFileUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]
    if (!file) return

    setUploading(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append('image', file)

      const response = await fetch('/api/ai-pose', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        const data = await response.json()
        setResult(data.advice)
      } else {
        setResult('分析失败，请重试')
      }
    } catch (error) {
      console.error('上传失败:', error)
      setResult('上传失败，请检查网络连接')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="screen">
      <h1>动作上传</h1>
      
      <div className="upload-area">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          disabled={uploading}
          id="file-upload"
          style={{ display: 'none' }}
        />
        <label htmlFor="file-upload" className="upload-label">
          {uploading ? '上传中...' : '选择图片上传'}
        </label>
      </div>

      {uploading && (
        <div className="loading">
          <div className="spinner"></div>
          <p>正在分析动作...</p>
        </div>
      )}

      {result && (
        <div className="result-box">
          <h3>分析结果</h3>
          <p>{result}</p>
        </div>
      )}

      <div className="button-group">
        <button className="btn btn-secondary" onClick={() => navigate('/progress')}>
          去进度追踪
        </button>
      </div>
    </div>
  )
}

