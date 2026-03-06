import { useState } from 'react'
import './FAQ.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What makes ApexCut shears different from other brands?",
      answer: "ApexCut shears are crafted from premium Japanese 440C steel, known for its exceptional hardness and edge retention. Each pair undergoes a 12-stage hand-sharpening process by master craftsmen. Our tools are weight-balanced to within 0.1 grams, ensuring superior precision and reduced hand fatigue for professional use."
    },
    {
      question: "How do I choose the right shear size?",
      answer: "Shear size is measured in inches from the tip to the finger rest. Common sizes include 5.5\" (standard), 6\" (versatile), and 7\" (for longer cuts). Choose based on your hand size and cutting style. If you're unsure, we recommend 6\" as a versatile option that works well for most techniques."
    },
    {
      question: "Are left-handed shears available?",
      answer: "Yes! We offer a dedicated collection of left-handed shears designed specifically for left-handed professionals. These shears feature the finger rest on the opposite side and blade geometry optimized for left-handed cutting motions."
    },
    {
      question: "How do I care for my ApexCut shears?",
      answer: "To maintain optimal performance: 1) Clean blades after each use with a soft cloth, 2) Apply a drop of shear oil to the pivot point weekly, 3) Have them professionally sharpened every 6-12 months depending on use, 4) Store in the provided case when not in use, 5) Never drop your shears as this can damage the alignment."
    },
    {
      question: "What is your warranty policy?",
      answer: "All ApexCut products come with a lifetime warranty against manufacturing defects. This covers issues with materials and craftsmanship. The warranty does not cover damage from misuse, improper care, accidental drops, or normal wear and forthedge. Register your purchase to activate your warranty."
    },
    {
      question: "Do you offer custom or personalized shears?",
      answer: "Yes, we offer custom engraving on our premium shears. You can add initials, a name, or a personal message (up to 15 characters). Custom orders typically take 2-3 weeks for delivery. Contact our VIP team at vip@apexcut.com for special custom requests."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 days) and Priority shipping (1-2 days) are available at checkout. International orders typically arrive within 10-21 business days. Free standard shipping is available on orders over $150."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unused products in original condition. Return shipping is free for US orders. To initiate a return, contact our customer service team. Refunds are processed within 5-7 business days of receiving the return."
    },
    {
      question: "Can I try before I buy?",
      answer: "While we don't offertry-on appointments, we do provide a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, return it for a full refund. We also offer sample sets so you can experience the quality firsthand before committing to a full-size shear."
    },
    {
      question: "How do I know if my shears need sharpening?",
      answer: "Signs your shears need sharpening include: pulling or tugging hair instead of cutting cleanly, requiring more force to cut, making unusual sounds, or visible nicks/damage to the blade edge. Professional sharpening every 6-12 months (depending on usage) will keep your shears performing their best."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="faq-page">
      <section className="faq-hero">
        <div className="faq-hero-overlay"></div>
        <div className="faq-hero-content">
          <span className="faq-hero-tagline">Need Help?</span>
          <h1 className="faq-hero-heading">Frequently Asked Questions</h1>
          <p className="faq-hero-subheading">
            Find answers to common questions about our products and services
          </p>
        </div>
      </section>

      <section className="faq-content">
        <div className="faq-container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openIndex === index ? 'open' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-contact">
            <h3>Still have questions?</h3>
            <p>Can't find the answer you're looking for? Our support team is here to help.</p>
            <a href="/contact" className="faq-contact-btn">Contact Us</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

