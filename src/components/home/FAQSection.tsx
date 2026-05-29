import { HOME_FAQ } from '@/lib/constants';

export default function FAQSection() {
  return (
    <section className="faq-section">
      <div className="faq-inner">
        <div style={{ textAlign: 'center' }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title" style={{ marginTop: '8px' }}>Common Questions</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Everything you need to know before you book.
          </p>
        </div>
        <div className="faq-list">
          {HOME_FAQ.map(({ question, answer }) => (
            <div key={question} className="faq-item">
              <div className="faq-question">{question}</div>
              <div className="faq-answer">{answer}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
