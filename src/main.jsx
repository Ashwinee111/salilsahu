import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const Link = ({ children, href = '#', className = '', target, rel }) => (
  <a href={href} className={`link ${className}`} target={target} rel={rel}>
    {children}
    <span>↗</span>
  </a>
);

const detailedBooks = [
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    desc: 'The best one for understanding how distorted our thinking process is, even though we believe it is rational and unbiased.',
  },
  {
    title: 'The Discovery of India',
    author: 'Jawaharlal Nehru',
    desc: "A magisterial, comprehensive exploration of India's history, philosophy, culture, and civilisational identity that captures India's essential pluralistic foundations.",
  },
  {
    title: 'Sapiens',
    author: 'Yuval Noah Harari',
    desc: "Shows how the common stories we believe in — money, religion, duty and more — have played a foundational role in humanity's journey from an insignificant species to the dominant one. A book that changed the way the world understood itself.",
  },
  {
    title: 'Outlive',
    author: 'Peter Attia',
    desc: 'Presents a scientific framework for extending both lifespan and healthspan through exercise, nutrition, sleep, and emotional well-being. Through practical steps, it makes the process clear and doable.',
  },
  {
    title: 'The Effective Executive',
    author: 'Peter Drucker',
    desc: 'A classic. Leaders need to become good managers, and this is as good a guide as any — how to manage time, set priorities, build on strengths, and make sound decisions. Drucker treats effectiveness as a learnable discipline.',
  },
  {
    title: 'India After Gandhi',
    author: 'Ramachandra Guha',
    desc: 'Illiteracy, poverty, ethnic divisions — very few gave the Indian republic a chance of surviving in 1947. Guha captures the political, social, and economic transformation without missing a beat. A must-read to understand India.',
  },
  {
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    desc: 'Our behaviour and actions are driven by the fundamental force of genes trying to replicate themselves. This book reframes your view of life and morality — and introduced the idea of the “meme” as the unit through which culture spreads.',
  },
  {
    title: 'The God Delusion',
    author: 'Richard Dawkins',
    desc: 'Dawkins relentlessly questions the idea of God and suggests science and reason as a sufficient foundation for a moral life.',
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    desc: 'The magic realism is mesmerising. Across several generations of the Buendía family in the mythical town of Macondo, it explores ambition, violence, memory, the cyclical nature of history—and the infinite power of love.',
  },
  {
    title: 'The Spirit of Indian Painting',
    author: 'B. N. Goswamy',
    desc: 'An authoritative book on Indian miniatures; it shows the beauty of these masterpieces and makes you fall in love with them. The imagination, symbolism and craftsmanship behind them are as extraordinary as in any European tradition.',
  },
];

function ScrollToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-top-btn ${visible ? 'visible' : ''}`}
      aria-label="Back to top"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}

function App() {
  return (
    <div className="site">
      <header className="header container">
        <a href="#top" className="wordmark">
          SALIL SAHU
        </a>
        <Link href="https://www.linkedin.com/in/salilksahu/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
      </header>

      <main id="top" className="container">
        {/* 01 ABOUT ME */}
        <section className="section about">
          <div className="eyebrow">ABOUT ME</div>
          <div className="about-grid">
            <img src="/images/IMG_9.jpg" alt="Salil Sahu" className="portrait" />
            <div className="about-content">
              <h2>
                I have worked in corporates, both Indian and multinational, in a variety of positions, including CEO. One day I realised I wanted to do something more— so I set up a healthtech venture.
              </h2>
              <p>
                I enjoy exploring other things too, in pursuit of what I would call a fulfilling life. I have written a book on leadership, run full marathons, cycled long-distance brevets, quizzed, and read far more than my career needed.
              </p>
              <p>
                This page is everything in one place.
              </p>
              <Link href="https://www.linkedin.com/in/salilksahu/" target="_blank" rel="noopener noreferrer">More on LinkedIn</Link>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 02 HAPPILY HEALTH */}
        <section className="section project-row">
          <div className="eyebrow">HAPPILY HEALTH</div>
          <div className="project-grid">
            <img src="/images/IMG_8.png" alt="Happily Health" className="book-cover-img" />
            <div className="project-content">
              <p>
                Everyone knows what good health requires – exercise, diet, emotional health. Not many follow the simple steps for that.
              </p>
              <p>
                That gap in everyday lifestyle — between knowing and doing — is what Happily Health works on.
              </p>
              {/* <Link href="#">Explore Happily Health</Link> */}
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 03 THE HEALTHSPAN CODE */}
        <section className="section project-row">
          <div className="eyebrow">THE HEALTHSPAN CODE</div>
          <div className="project-grid">
            <img src="/images/IMG_5.jpg" alt="The Healthspan Code" className="book-cover-img" />
            <div className="project-content">
              <div className="project-date">COMING OCTOBER 2026</div>
              <h2>
                A book co-written with Dr Amitav Mohanty, a physician with three decades of clinical practice. It makes the science of living healthier and longer accessible.
              </h2>
              <p>
                Written for the Indian reader first on our bodies, our food, our risks. It has been endorsed by titans of Indian healthcare, including Dr Devi Shetty and Dr Ramakant Panda.
              </p>
              {/* <Link href="#">Get notified</Link> */}
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 04 LEADERSHIP */}
        <section className="section project-row">
          <div className="eyebrow">LEADERSHIP</div>
          <div className="project-grid">
            <img src="/images/Leader_book.jpg" alt="We The Leaders" className="book-cover-img" />
            <div className="project-content">
              <h2>
                Since I started working as a leader — uncertain and unprepared — the complexity of leadership has fascinated me.
              </h2>
              <p>
                In 2018 I wrote a book that simplifies leadership basics: <em>We The Leaders</em> (Himalaya Publishing House). I keep exploring the subject in my blog, <em>leadnow.blog</em>.
              </p>
              <div className="project-links">
                <Link href="https://www.amazon.in/We-Leaders-Sahu-Salil/dp/9352993683/" target="_blank" rel="noopener noreferrer">Amazon</Link>
                <Link href="https://leadnow.blog/" target="_blank" rel="noopener noreferrer">leadnow.blog</Link>
              </div>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 05 THINK SHARPER */}
        <section className="section project-row">
          <div className="eyebrow">THINK SHARPER</div>
          <div className="project-grid">
            <img src="/images/IMG_3.PNG" alt="Think Sharper" className="book-cover-img tall-cover-img" />
            <div className="project-content">
              <h2>
                Evolution equipped us with fast, instinctive shortcuts — brilliant for dodging predators, unreliable for modern decisions with long-term consequences.
              </h2>
              <p>
                Add a daily flood of information, much of it designed to mislead, and clear thinking becomes a survival skill.
              </p>
              <p>
                This short eBook alerts us to the cognitive errors we all make and helps us to think better.
              </p>
              {/* <Link href="#">Find it on Amazon</Link> */}
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 06 CURIOUS ELEPHANT */}
        <section className="section project-row">
          <div className="eyebrow">CURIOUS ELEPHANT</div>
          <div className="project-grid">
            <img src="/images/IMG_2.PNG" alt="Curious Elephant" className="square-post-img" />
            <div className="project-content">
              <h2>
                A fun passion project on Instagram — posts with ideas from science, history and psychology.
              </h2>
              <Link href="https://www.instagram.com/elephant.curious?stkn=MW5qbmMybXZreG9qbg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">FOLLOW CURIOUS ELEPHANT</Link>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 07 RUNNING, CYCLING & QUIZZING */}
        <section className="section project-row">
          <div className="eyebrow">RUNNING, CYCLING & QUIZZING</div>
          <div className="project-grid">
            <img src="/images/cycle.jpg" alt="Cycling landscape" className="book-cover-img object-top" />
            <div className="project-content">
              <h2>
                Full marathons and several halves. Cycling brevets and intercity rides.
              </h2>
              <p>
                This was the initial inspiration for my healthtech foray.
              </p>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 08 FROM MY LIBRARY */}
        <section className="section project-row">
          <div className="eyebrow">FROM MY LIBRARY</div>
          <div className="project-grid">
            <div className="sticky-portrait">
              <img src="/images/IMG_10.jpg" alt="From My Library" className="book-cover-img" />
            </div>
            <div className="project-content">
              <p className="library-intro">
                For as long as I can remember, I have been a ravenous reader of whatever I could find — it even helped me land in the BBC Mastermind quiz. Here are some of the books I have savoured:
              </p>
              <div className="detailed-book-list">
                {detailedBooks.map((book, idx) => (
                  <div key={idx} className="detailed-book-item">
                    <div className="book-title-row">
                      <span className="book-title">{book.title}</span>
                      <span className="book-author">— {book.author}</span>
                    </div>
                    <p className="book-desc">{book.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 09  CONNECT */}
        <section id="connect" className="section connect">
          <div className="eyebrow">CONNECT</div>
          <h2>Let's connect.</h2>
          <div className="connect-footer-row">
            <div className="social-links">
              <a href="mailto:100galaxy@gmail.com" className="social-link">
                100galaxy@gmail.com ↗
              </a>
              <a href="https://www.linkedin.com/in/salilksahu/" target="_blank" rel="noopener noreferrer" className="social-link">
                LinkedIn ↗
              </a>
            </div>
            <span className="copyright-text">© {new Date().getFullYear()} SALIL SAHU</span>
          </div>
        </section>
      </main>
      <ScrollToTop />
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
