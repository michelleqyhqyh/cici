import { motion } from 'framer-motion'
import './Contact.css'

function Contact() {
  const contactInfo = {
    address: '中国福建省泉州市石狮市',
    phone: '+86 138-0000-0000',
    email: 'contact@bambootales.com',
    businessHours: '周一至周六 9:00 - 18:00'
  }

  return (
    <div className="contact-page">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="contact-title">联系我们</h1>
        <p className="contact-subtitle">期待与您的合作，欢迎随时联系</p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="info-card">
            <div className="info-icon">📍</div>
            <div className="info-content">
              <h3 className="info-title">公司地址</h3>
              <p className="info-text">{contactInfo.address}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <div className="info-content">
              <h3 className="info-title">联系电话</h3>
              <p className="info-text">{contactInfo.phone}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📧</div>
            <div className="info-content">
              <h3 className="info-title">电子邮箱</h3>
              <p className="info-text">{contactInfo.email}</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">🕐</div>
            <div className="info-content">
              <h3 className="info-title">营业时间</h3>
              <p className="info-text">{contactInfo.businessHours}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-map-section"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="map-container">
            <iframe
              title="Company Location"
              className="map-iframe"
              src="https://www.openstreetmap.org/export/embed.html?bbox=118.5748%2C24.7602%2C118.7748%2C24.9602&layer=mapnik&marker=24.8602%2C118.6748"
              loading="lazy"
            ></iframe>
            <div className="map-overlay">
              <div className="map-pin">
                <div className="pin-icon">📍</div>
                <div className="pin-label">Bamboo Tales</div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2 className="form-title">发送消息</h2>
            <form className="contact-form">
              <div className="form-group">
                <label className="form-label">姓名</label>
                <input type="text" className="form-input" placeholder="请输入您的姓名" />
              </div>
              <div className="form-group">
                <label className="form-label">邮箱</label>
                <input type="email" className="form-input" placeholder="请输入您的邮箱" />
              </div>
              <div className="form-group">
                <label className="form-label">电话</label>
                <input type="tel" className="form-input" placeholder="请输入您的电话" />
              </div>
              <div className="form-group">
                <label className="form-label">留言</label>
                <textarea className="form-textarea" rows="5" placeholder="请输入您的留言"></textarea>
              </div>
              <button type="submit" className="submit-btn">发送消息</button>
            </form>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="company-info-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="company-details">
          <h2 className="details-title">公司简介</h2>
          <p className="details-text">
            Bamboo Tales 是一家专业的儿童竹纤面料服装制造商，位于中国著名的服装生产基地——福建省石狮市。
            我们拥有先进的生产设备和专业的设计团队，致力于为全球客户提供高品质、环保舒适的儿童服装。
          </p>
          <div className="company-images">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20clothing%20factory%20interior%2C%20production%20line%2C%20professional%20workers%2C%20bright%20and%20clean&image_size=landscape_4_3"
              alt="工厂内部"
              className="company-image"
            />
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=textile%20design%20studio%2C%20fashion%20designers%20working%2C%20fabric%20samples%2C%20creative%20workspace&image_size=landscape_4_3"
              alt="设计工作室"
              className="company-image"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
