// v7 shared — HUD nav, ThreeBar mark, footer, hooks. Pure #000/#FFF.
const { useState, useEffect, useRef } = React;

const ThreeBar = ({ size = 16, color = 'currentColor', gap = 2, animate = false }) => {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!animate) return;
    let r;
    const tick = () => { setT(x => x + 0.016); r = requestAnimationFrame(tick); };
    r = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r);
  }, [animate]);
  const base = [0.66, 1, 0.82];
  const heights = animate ? base.map((h, i) => 0.4 + 0.55 * (0.5 + 0.5 * Math.sin(t * 2.6 + i * 0.7))) : base;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'flex-end', gap, height: size }}>
      {heights.map((h, i) => (
        <span key={i} style={{ width: size * 0.22, height: `${h * 100}%`, background: color }} />
      ))}
    </span>
  );
};

const HUD = ({ active = '' }) => {
  const links = [
    ['Home', 'home.html', 'home'],
    ['Work', 'case-studies.html', 'work'],
    ['About', 'about.html', 'about'],
    ['Team', 'team.html', 'team'],
    ['Get a Quote', 'contact.html', 'contact'],
  ];
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      zIndex: 100, mixBlendMode: 'difference',
      pointerEvents: 'none',
      padding: '20px 32px',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      color: '#FFF',
      fontFamily: 'Geist Mono', fontSize: 11,
      letterSpacing: '0.22em', textTransform: 'uppercase',
    }}>
      <a href="home.html" style={{ pointerEvents: 'auto', display: 'inline-flex', alignItems: 'center', gap: 12, color: '#FFF', textDecoration: 'none' }}>
        <ThreeBar size={14} color="#FFF" gap={3} />
        White Label Resell
      </a>
      <span style={{ pointerEvents: 'auto', display: 'flex', gap: 24 }}>
        {links.map(([label, href, key]) => (
          <a key={key} href={href} style={{
            color: '#FFF', textDecoration: 'none',
            opacity: active === key ? 1 : 0.6,
            borderBottom: active === key ? '1px solid #FFF' : '1px solid transparent',
            paddingBottom: 2,
          }}>{label}</a>
        ))}
      </span>
    </div>
  );
};

const useInView = (threshold = 0.25) => {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
};

// Section kicker line
const Kick = ({ children, style = {} }) => (
  <div style={{
    fontFamily: 'Geist Mono', fontSize: 11,
    letterSpacing: '0.22em', textTransform: 'uppercase',
    opacity: 0.6, marginBottom: 16, ...style,
  }}>{children}</div>
);

const Footer = ({ invert = false }) => {
  const fg = invert ? '#000' : '#FFF';
  const bg = invert ? '#FFF' : '#000';
  return (
    <footer style={{
      background: bg, color: fg,
      borderTop: `1px solid ${fg}`,
      padding: '48px 32px 32px',
    }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        flexWrap: 'wrap', gap: 32,
      }}>
        <div>
          <ThreeBar size={20} color={fg} gap={3} />
          <div style={{
            marginTop: 16,
            fontFamily: 'Geist Mono', fontSize: 10,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            opacity: 0.55,
          }}>© 2026 White Label Resell · est. 2018</div>
        </div>
        <div style={{
          display: 'flex', gap: 24, flexWrap: 'wrap',
          fontFamily: 'Geist Mono', fontSize: 10,
          letterSpacing: '0.22em', textTransform: 'uppercase',
        }}>
          <a href="home.html" style={{ color: fg, textDecoration: 'none', opacity: 0.8 }}>Home</a>
          <a href="case-studies.html" style={{ color: fg, textDecoration: 'none', opacity: 0.8 }}>Work</a>
          <a href="about.html" style={{ color: fg, textDecoration: 'none', opacity: 0.8 }}>About</a>
          <a href="team.html" style={{ color: fg, textDecoration: 'none', opacity: 0.8 }}>Team</a>
          <a href="contact.html" style={{ color: fg, textDecoration: 'none', opacity: 0.8 }}>Get a Quote</a>
          <a href="mailto:partners@whitelabelresell.com" style={{ color: fg, textDecoration: 'none', opacity: 0.8 }}>partners@whitelabelresell.com</a>
        </div>
      </div>
    </footer>
  );
};

window.V7 = { ThreeBar, HUD, useInView, Kick, Footer };
