import { motion } from 'framer-motion'
import './About.css'

function About() {
  const features = [
    {
      title: '天然竹纤面料',
      description: '采用优质天然竹纤维，柔软亲肤，透气性极佳，让孩子的肌肤自由呼吸',
      icon: '🎋'
    },
    {
      title: '抗菌防螨',
      description: '竹纤维天然抗菌特性，有效抑制细菌生长，保护孩子娇嫩肌肤',
      icon: '🛡️'
    },
    {
      title: '环保可持续',
      description: '竹子快速生长，无需农药化肥，是真正的绿色环保面料',
      icon: '🌱'
    },
    {
      title: '舒适耐穿',
      description: '面料柔软耐磨，多次洗涤不变形，持久保持舒适质感',
      icon: '✨'
    }
  ]

  return (
    <div className="about-page">
      <motion.section
        className="hero-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-content">
          <div className="logo-display">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=green%20bamboo%20logo%20for%20children%27s%20clothing%20brand%20Bamboo%20Tales%2C%20cute%20toucan%20bird%20with%20bamboo%2C%20minimalist%20design&image_size=square_hd"
              alt="Bamboo Tales Logo"
              className="main-logo"
            />
          </div>
          <h1 className="hero-title">Bamboo Tales</h1>
          <p className="hero-subtitle">让孩子的每一寸肌肤都享受天然呵护</p>
        </div>
      </motion.section>

      <motion.section
        className="company-intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="section-title">关于我们</h2>
        <div className="intro-content">
          <div className="intro-text">
            <p>
              Bamboo Tales 成立于2020年，是一家专注于儿童竹纤面料服装的创新型企业。
              我们坚信，每个孩子都值得拥有最天然、最舒适的穿着体验。
            </p>
            <p>
              我们的竹纤维面料全部来自有机种植的竹林，通过高科技工艺提取，
              既保留了竹纤维的天然特性，又确保了面料的柔软度和耐用性。
            </p>
            <p>
              从设计到生产，我们始终将孩子的健康和舒适放在首位，
              每一件衣服都经过严格的质量检验，让父母放心，让孩子开心。
            </p>
          </div>
          <div className="intro-images">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=happy%20children%20wearing%20bamboo%20fiber%20clothes%2C%20playing%20in%20garden%2C%20natural%20lighting&image_size=landscape_4_3"
              alt="孩子们穿着竹纤面料衣服"
              className="intro-image"
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        className="features-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <h2 className="section-title">为什么选择我们</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="products-preview"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h2 className="section-title">我们的产品</h2>
        <div className="products-grid">
          <div className="product-card">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20children%27s%20pajama%20set%20with%20bunny%20pattern%2C%20bamboo%20fiber%2C%20soft%20blue%20color&image_size=square"
              alt="儿童睡衣套装"
              className="product-image"
            />
            <h3 className="product-name">卡通睡衣套装</h3>
            <p className="product-desc">柔软亲肤，舒适入眠</p>
          </div>
          <div className="product-card">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=children%27s%20t-shirt%20with%20cute%20animal%20prints%2C%20bamboo%20fabric%2C%20bright%20colors&image_size=square"
              alt="儿童T恤"
              className="product-image"
            />
            <h3 className="product-name">透气T恤</h3>
            <p className="product-desc">清凉透气，运动必备</p>
          </div>
          <div className="product-card">
            <img
              src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=baby%20onesie%20romper%2C%20bamboo%20fiber%2C%20pastel%20colors%2C%20soft%20and%20gentle&image_size=square"
              alt="婴儿连体衣"
              className="product-image"
            />
            <h3 className="product-name">婴儿连体衣</h3>
            <p className="product-desc">轻柔呵护，新生儿首选</p>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default About
