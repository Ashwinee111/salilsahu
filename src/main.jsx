import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const Link = ({ children, href = '#', className = '', target, rel }) => (
  <a href={href} className={`link ${className}`} target={target} rel={rel}>
    {children}
    <span>↗</span>
  </a>
);

const books = [
  'Atomic Habits',
  'Thinking, Fast and Slow',
  'Deep Work',
  'Sapiens',
  'Dune',
  'The 5 AM Club',
  'Range',
  'The Psychology of Money',
  'Ikigai',
  'Dopamine Nation',
  'The Almanack of Naval Ravikant',
  'Grit',
];

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
        {/* HERO */}
        <section className="hero">
          <h1 className="hero-title">
            I build, write, read, run
            <br />
            and occasionally get distracted by
            <br />
            interesting questions.
          </h1>
          <div className="hero-meta">
            <span>BASED IN INDIA · CURIOUS BY DEFAULT</span>
            <Link href="https://www.linkedin.com/in/salilksahu/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
          </div>
        </section>

        <div className="rule" />

        {/* 01 ABOUT ME */}
        <section className="section about">
          <div className="eyebrow">01  ABOUT ME</div>
          <div className="about-grid">
            <img src="/images/about.jpeg" alt="Salil Sahu" className="portrait" />
            <div className="about-content">
              <h2>I like making useful things and asking better questions.</h2>
              <p>
                Over the years, that has meant building products, writing about health and leadership,
                and finding the thread between ideas that seem unrelated at first.
              </p>
              <Link href="https://www.linkedin.com/in/salilksahu/" target="_blank" rel="noopener noreferrer">More on LinkedIn</Link>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 02 HAPPILY HEALTH */}
        <section className="section project-row">
          <div className="eyebrow">02  HAPPILY HEALTH</div>
          <div className="project-grid">
            <img src="/images/IMG_6.JPG" alt="Happily Health" className="book-cover-img" />
            <div className="project-content">
              <p>
                A small attempt to make everyday health feel less like a spreadsheet and more like a life.
                Happily Health brings simple, thoughtful nudges to the routines that keep us well.
              </p>
              <Link href="#">Explore Happily Health</Link>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 03 THE HEALTHSPAN CODE */}
        <section className="section project-row">
          <div className="eyebrow">03  THE HEALTHSPAN CODE</div>
          <div className="project-grid">
            <img src="/images/IMG_5.jpg" alt="The Healthspan Code" className="book-cover-img" />
            <div className="project-content">
              <h2>
                A forthcoming book about the practical science of staying capable, curious and alive to the world for
                longer.
              </h2>
              <p>Not a manual for perfection. More a collection of ideas, experiments and honest reminders.</p>
              <Link href="#">Get notified</Link>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 04 LEADERSHIP */}
        <section className="section project-row">
          <div className="eyebrow">04  LEADERSHIP</div>
          <div className="project-grid">
            <img src="/images/Leader_book.jpg" alt="We The Leaders" className="book-cover-img" />
            <div className="project-content">
              <h2>
                Leadership is less about having the loudest answer and more about making it easier for other people to do
                their best work.
              </h2>
              <p>
                That idea runs through <em>We The Leaders</em> and <em>leadnow.blog</em> — two places for stories, tools
                and generous conversations.
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
          <div className="eyebrow">05  THINK SHARPER</div>
          <div className="project-grid">
            <img src="/images/IMG_3.PNG" alt="Think Sharper" className="book-cover-img" />
            <div className="project-content">
              <h2>
                A compact eBook for clearer thinking, better decisions and fewer meetings that should have been emails.
              </h2>
              <Link href="#">Find it on Amazon</Link>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 06 CURIOUS ELEPHANT */}
        <section className="section project-row">
          <div className="eyebrow">06  CURIOUS ELEPHANT</div>
          <div className="project-grid">
            <img src="/images/IMG_2.PNG" alt="Curious Elephant" className="book-cover-img" />
            <div className="project-content">
              <h2>A corner of the internet for interesting questions, small discoveries and the joy of noticing things.</h2>
              <p>
                Curious Elephant is where I share what makes me pause — without pretending every thought needs to become a
                lesson.
              </p>
              <Link href="#">FOLLOW CURIOUS ELEPHANT</Link>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 07 RUNNING, CYCLING & QUIZZING */}
        <section className="section project-row">
          <div className="eyebrow">07  RUNNING, CYCLING & QUIZZING</div>
          <div className="project-grid">
            <img src="/images/cycle.jpg" alt="Cycling landscape" className="book-cover-img object-top" />
            <div className="project-content">
              <p>
                When I am not at a desk, I am usually running, cycling a little farther than planned, riding a brevet, or
                trying to remember the answer on BBC Mastermind.
              </p>
              <p>These are useful ways to be bad at something in public — and keep going anyway.</p>
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 08 READING */}
        <section className="section reading">
          <div className="eyebrow">08  READING</div>
          <div className="reading-grid">
            <div className="reading-left">
              <h2>
                A shelf in progress.
                <br />
                These books have
                <br />
                changed how I see work,
                <br />
                people or the long walk
                <br />
                home.
              </h2>
            </div>
            <div className="book-list">
              {books.map((book, idx) => (
                <div key={idx} className="book-item">
                  {book}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="rule" />

        {/* 09 CONNECT */}
        <section id="connect" className="section connect">
          <div className="eyebrow">09  CONNECT</div>
          <h2>I read every message.</h2>
          <p>If something here made you think, disagree, or smile, to talk, I would love to hear from you.</p>
          <div className="social-links">
            <a href="mailto:hello@example.com" className="social-link">
              Email ↗
            </a>
            <a href="https://www.linkedin.com/in/salilksahu/" target="_blank" rel="noopener noreferrer" className="social-link">
              LinkedIn ↗
            </a>
            <a href="#" className="social-link">
              Instagram ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <span>© 2025 SALIL SAHU</span>
        <a href="#top" className="link-subtle">
          MADE WITH CURIOSITY ↗
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
