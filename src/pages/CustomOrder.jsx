import { useState, useRef } from 'react'
import './CustomOrder.css'

function CustomOrder() {
  const [formData, setFormData] = useState({
    bladeMaterial: '',
    handleType: '',
    tensionSystem: '',
    engraving: '',
    bladeLength: 6.0,
    handedness: 'right',
    name: '',
    email: '',
    phone: ''
  })
  
  const [uploadedFile, setUploadedFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef(null)

  const MAX_ENGRAVING_CHARS = 100

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'engraving' && value.length > MAX_ENGRAVING_CHARS) return
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSliderChange = (e) => {
    setFormData({
      ...formData,
      bladeLength: parseFloat(e.target.value)
    })
  }

  const handleHandednessToggle = (handedness) => {
    setFormData({
      ...formData,
      handedness
    })
  }

  const handleOptionSelect = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    })
  }

  const handleFileSelect = (e) => {
    const file = e.target.files[0]
    if (file) {
      validateAndSetFile(file)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) {
      validateAndSetFile(file)
    }
  }

  const validateAndSetFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg']
    if (validTypes.includes(file.type)) {
      setUploadedFile(file)
    } else {
      alert('Please upload a PNG or JPG image.')
    }
  }

  const handleRemoveFile = () => {
    setUploadedFile(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Quote request:', formData, 'File:', uploadedFile)
      alert('Thank you for your custom order request! Our team will contact you with a personalized quote within 24-48 hours.')
      setIsSubmitting(false)
      setFormData({
        bladeMaterial: '',
        handleType: '',
        tensionSystem: '',
        engraving: '',
        bladeLength: 6.0,
        handedness: 'right',
        name: '',
        email: '',
        phone: ''
      })
      setUploadedFile(null)
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    }, 2000)
  }

  const charactersRemaining = MAX_ENGRAVING_CHARS - formData.engraving.length

  return (
    <div className="custom-order-page">
      {/* Hero Section */}
      <section className="custom-hero">
        <div className="custom-hero-overlay"></div>
        <div className="custom-hero-content">
          <span className="custom-hero-tagline">Bespoke Excellence</span>
          <h1 className="custom-hero-heading">Your Signature Edge.<br/>Custom Built.</h1>
          <p className="custom-hero-subheading">
            Craft a tool that's uniquely yours. Every shear tailored to your exact specifications.
          </p>
        </div>
      </section>

      {/* Configurator Section */}
      <section className="custom-configurator">
        <div className="custom-container">
          <div className="custom-configurator-header">
            <span className="custom-section-label">Custom Order</span>
            <h2 className="custom-configurator-title">Build Your Perfect Shear</h2>
            <p className="custom-configurator-subtitle">
              Select your preferences below and our master craftsmen will create a tool uniquely suited to your technique.
            </p>
          </div>

          <form className="custom-form" onSubmit={handleSubmit}>
            {/* Blade Material */}
            <div className="custom-form-group">
              <label className="custom-form-label">Blade Material</label>
              <div className="custom-select-wrapper">
                <select
                  name="bladeMaterial"
                  value={formData.bladeMaterial}
                  onChange={handleChange}
                  className={`custom-select ${formData.bladeMaterial ? 'active' : ''}`}
                  required
                >
                  <option value="">Select blade material</option>
                  <option value="japanese-440c">Japanese 440C Steel</option>
                  <option value="damascus">Damascus Steel</option>
                  <option value="cobalt">Cobalt Alloy</option>
                </select>
                <span className="custom-select-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </div>
              <p className="custom-form-hint">
                {formData.bladeMaterial === 'japanese-440c' && 'The gold standard. Exceptional edge retention and corrosion resistance.'}
                {formData.bladeMaterial === 'damascus' && 'Layers of steel forge-welded together for unmatched beauty and performance.'}
                {formData.bladeMaterial === 'cobalt' && 'Premium alloy with superior hardness and heat resistance.'}
              </p>
            </div>

            {/* Handle Type */}
            <div className="custom-form-group">
              <label className="custom-form-label">Handle Type</label>
              <div className="custom-options-grid">
                {['Offset', 'Crane', 'Swivel', 'Classic'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`custom-option-btn ${formData.handleType === type ? 'active' : ''}`}
                    onClick={() => handleOptionSelect('handleType', type)}
                  >
                    <span className="custom-option-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 2L12 22" />
                        <path d="M8 6L12 2L16 6" />
                        <path d="M8 18L12 22L16 18" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </span>
                    <span className="custom-option-text">{type}</span>
                  </button>
                ))}
              </div>
              <p className="custom-form-hint">
                {formData.handleType === 'Offset' && 'Ergonomic design reduces wrist strain. Ideal for extended use.'}
                {formData.handleType === 'Crane' && 'Classic Japanese style. Perfect for precision cutting techniques.'}
                {formData.handleType === 'Swivel' && 'Rotating finger ring allows natural hand movement.'}
                {formData.handleType === 'Classic' && 'Traditional straight handle. Time-tested by professionals.'}
              </p>
            </div>

            {/* Tension System */}
            <div className="custom-form-group">
              <label className="custom-form-label">Tension System</label>
              <div className="custom-options-grid custom-options-3">
                {['Leaf Spring', 'UFO', 'Ball Bearing'].map((system) => (
                  <button
                    key={system}
                    type="button"
                    className={`custom-option-btn ${formData.tensionSystem === system ? 'active' : ''}`}
                    onClick={() => handleOptionSelect('tensionSystem', system)}
                  >
                    <span className="custom-option-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </span>
                    <span className="custom-option-text">{system}</span>
                  </button>
                ))}
              </div>
              <p className="custom-form-hint">
                {formData.tensionSystem === 'Leaf Spring' && 'Traditional system. Smooth, reliable tension with classic feel.'}
                {formData.tensionSystem === 'UFO' && 'Modern click-style adjuster. Easy tension fine-tuning.'}
                {formData.tensionSystem === 'Ball Bearing' && 'Silky smooth opening and closing. Premium feel.'}
              </p>
            </div>

            {/* Technical Specs: Blade Length & Handedness */}
            <div className="custom-form-row">
              {/* Blade Length Slider */}
              <div className="custom-form-group">
                <label className="custom-form-label">Blade Length</label>
                <div className="custom-slider-container">
                  <input
                    type="range"
                    name="bladeLength"
                    min="5.0"
                    max="8.0"
                    step="0.1"
                    value={formData.bladeLength}
                    onChange={handleSliderChange}
                    className="custom-slider"
                  />
                  <div className="custom-slider-value">{formData.bladeLength.toFixed(1)}"</div>
                  <div className="custom-slider-labels">
                    <span>5.0"</span>
                    <span>8.0"</span>
                  </div>
                </div>
              </div>

              {/* Left/Right Handed Toggle */}
              <div className="custom-form-group">
                <label className="custom-form-label">Handedness</label>
                <div className="custom-toggle-container">
                  <button
                    type="button"
                    className={`custom-toggle-btn ${formData.handedness === 'left' ? 'active' : ''}`}
                    onClick={() => handleHandednessToggle('left')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M10.5 2.5L6 7v10l4.5 4.5" />
                      <path d="M10.5 2.5L21 13" />
                    </svg>
                    Left
                  </button>
                  <button
                    type="button"
                    className={`custom-toggle-btn ${formData.handedness === 'right' ? 'active' : ''}`}
                    onClick={() => handleHandednessToggle('right')}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M13.5 2.5L18 7V17l-4.5 4.5" />
                      <path d="M13.5 2.5L3 13" />
                    </svg>
                    Right
                  </button>
                </div>
              </div>
            </div>

            {/* Reference Image Upload */}
            <div className="custom-form-group">
              <label className="custom-form-label">Reference Upload</label>
              <div 
                className="custom-upload-zone"
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
              >
                {uploadedFile ? (
                  <div className="custom-upload-preview">
                    <div className="custom-upload-preview-image">
                      <img 
                        src={URL.createObjectURL(uploadedFile)} 
                        alt="Reference upload" 
                      />
                    </div>
                    <div className="custom-upload-preview-info">
                      <span className="custom-upload-filename">{uploadedFile.name}</span>
                      <button 
                        type="button" 
                        className="custom-upload-remove"
                        onClick={(e) => {
                          e.stopPropagation()
                          handleRemoveFile()
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="custom-upload-content">
                    <div className="custom-upload-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                    </div>
                    <span className="custom-upload-text">Drag & drop your image here</span>
                    <span className="custom-upload-subtext">or click to browse (PNG, JPG)</span>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,image/jpg"
                  onChange={handleFileSelect}
                  className="custom-file-input"
                />
              </div>
              <p className="custom-form-hint">
                Upload a photo of your current tool or hand grip to help us understand your preferences.
              </p>
            </div>

            {/* Personalization - Extended to Textarea */}
            <div className="custom-form-group">
              <label className="custom-form-label">Engraving & Notes</label>
              <textarea
                name="engraving"
                value={formData.engraving}
                onChange={handleChange}
                className="custom-textarea"
                placeholder="Enter custom text or special instructions for your shear..."
                rows={4}
                maxLength={MAX_ENGRAVING_CHARS}
              />
              <div className={`custom-char-counter ${charactersRemaining < 10 ? 'limit-reached' : ''}`}>
                {charactersRemaining}/100 characters remaining
              </div>
              <p className="custom-form-hint">
                Add your name, initials, or special notes. Located on the finger rest. Maximum 100 characters.
              </p>
            </div>

            {/* Contact Info */}
            <div className="custom-form-divider"></div>
            
            <div className="custom-form-row">
              <div className="custom-form-group">
                <label className="custom-form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="custom-input"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="custom-form-group">
                <label className="custom-form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="custom-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="custom-form-group">
                <label className="custom-form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="custom-input"
                  placeholder="Enter your phone"
                />
              </div>
            </div>

            {/* Submit Button with Loading Animation */}
            <button 
              type="submit" 
              className={`custom-submit-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="custom-loading">
                  <span className="custom-loading-spinner"></span>
                  Processing...
                </span>
              ) : (
                <>
                  Submit Request
                  <span className="custom-submit-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Process Section */}
      <section className="custom-process">
        <div className="custom-container">
          <div className="custom-process-header">
            <h2 className="custom-process-title">The Custom Process</h2>
          </div>
          <div className="custom-process-grid">
            <div className="custom-process-step">
              <span className="custom-process-number">01</span>
              <h3 className="custom-process-step-title">Configure</h3>
              <p className="custom-process-text">Select your preferred specifications using our configurator above.</p>
            </div>
            <div className="custom-process-step">
              <span className="custom-process-number">02</span>
              <h3 className="custom-process-step-title">Quote</h3>
              <p className="custom-process-text">Receive a detailed quote within 24-48 hours with pricing and timeline.</p>
            </div>
            <div className="custom-process-step">
              <span className="custom-process-number">03</span>
              <h3 className="custom-process-step-title">Craft</h3>
              <p className="custom-process-text">Our master craftsmen hand-forge your custom shear to perfection.</p>
            </div>
            <div className="custom-process-step">
              <span className="custom-process-number">04</span>
              <h3 className="custom-process-step-title">Deliver</h3>
              <p className="custom-process-text">Receive your bespoke instrument with complimentary insured shipping.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CustomOrder

