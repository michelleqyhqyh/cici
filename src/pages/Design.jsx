import { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'
import './Design.css'

function Shirt({ textureUrl }) {
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
    }
  })

  const texture = textureUrl ? new THREE.TextureLoader().load(textureUrl) : null

  return (
    <group ref={meshRef}>
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 1.5, 0.1]} />
        <meshStandardMaterial
          color={texture ? '#ffffff' : '#81c784'}
          map={texture}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[-0.7, 1.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 32]} />
        <meshStandardMaterial
          color={texture ? '#ffffff' : '#81c784'}
          map={texture}
        />
      </mesh>
      <mesh position={[0.7, 1.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.15, 0.8, 32]} />
        <meshStandardMaterial
          color={texture ? '#ffffff' : '#81c784'}
          map={texture}
        />
      </mesh>
      <mesh position={[0, 2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.25, 0.35, 0.5, 32]} />
        <meshStandardMaterial
          color={texture ? '#ffffff' : '#81c784'}
          map={texture}
        />
      </mesh>
    </group>
  )
}

function Scene({ textureUrl }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={50} />
      <OrbitControls enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#ffd54f" />
      <Environment preset="park" />
      <Shirt textureUrl={textureUrl} />
      <ContactShadows resolution={1024} scale={10} blur={2} opacity={0.5} far={4} color="#000000" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#c8e6c9" />
      </mesh>
    </>
  )
}

function Design() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const fileInputRef = useRef(null)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setIsProcessing(true)
      const reader = new FileReader()
      reader.onload = (event) => {
        setTimeout(() => {
          setUploadedImage(event.target.result)
          setIsProcessing(false)
        }, 1500)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      setIsProcessing(true)
      const reader = new FileReader()
      reader.onload = (event) => {
        setTimeout(() => {
          setUploadedImage(event.target.result)
          setIsProcessing(false)
        }, 1500)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="design-page">
      <div className="design-header">
        <h1 className="design-title">设计您的专属衣服</h1>
        <p className="design-subtitle">上传您设计的图案，我们将为您呈现3D上身效果</p>
      </div>

      <div className="design-content">
        <div className="upload-section">
          <div
            className="upload-area"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <AnimatePresence mode="wait">
              {isProcessing ? (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="processing-content"
                >
                  <div className="spinner"></div>
                  <p className="upload-text">正在处理您的设计...</p>
                </motion.div>
              ) : uploadedImage ? (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="preview-content"
                >
                  <img src={uploadedImage} alt="上传的设计" className="preview-image" />
                  <p className="upload-text success">设计已上传！</p>
                  <button
                    className="change-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      setUploadedImage(null)
                    }}
                  >
                    更换设计
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="upload-icon">📁</div>
                  <p className="upload-text">点击或拖拽上传您的设计图片</p>
                  <p className="upload-hint">支持 JPG、PNG、GIF 格式</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="tips-section">
            <h3 className="tips-title">设计小贴士</h3>
            <ul className="tips-list">
              <li>建议使用高分辨率图片以获得最佳效果</li>
              <li>图案尺寸建议：2048x2048像素</li>
              <li>支持无缝图案效果更佳</li>
              <li>可以在3D视图中旋转查看不同角度</li>
            </ul>
          </div>
        </div>

        <div className="viewer-section">
          <div className="viewer-header">
            <h2 className="viewer-title">3D 预览效果</h2>
          </div>
          <div className="canvas-container">
            <Canvas shadows dpr={[1, 2]}>
              <Scene textureUrl={uploadedImage} />
            </Canvas>
          </div>
          <p className="viewer-hint">拖动鼠标旋转，滚轮缩放</p>
        </div>
      </div>
    </div>
  )
}

export default Design
