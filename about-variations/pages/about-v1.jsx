/* ═══ VARIATION 1 · PEOPLE AND PRINCIPLES ═══
   Human-centred, brand-led, clean and balanced. Fully centred hero,
   central-logo commitments, white journey, checker team preview with the
   film as a continuation of the people story, department bento, partner
   marquee, FAQ. */

const Hero = () => {
  const [ref, seen] = useReveal(0.15);
  return (
    <section ref={ref} style={{
      minHeight: '86vh', background: '#000', color: '#FFF', padding: '150px 6vw 70px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
    }}>
      <h1 style={{
        margin: '0 auto', maxWidth: 1060, fontFamily: 'Geist, sans-serif',
        fontSize: 'clamp(46px,7vw,120px)', fontWeight: 500, letterSpacing: '-.045em', lineHeight: 1.0,
        opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(22px)',
        transition: 'opacity .9s ease, transform .9s cubic-bezier(.2,.8,.2,1)',
      }}>
        Built by specialists.<br /><i style={{ fontWeight: 300 }}>One shared standard.</i>
      </h1>
      <p style={{ margin: '28px 0 0', maxWidth: 620, fontSize: 'clamp(15px,1.2vw,18px)', lineHeight: 1.65, opacity: .75, fontWeight: 300 }}>
        White Label Resell is a multidisciplinary team designing, building and growing better digital
        businesses — shipped under our partners&rsquo; brands, never in front of their clients.
      </p>
      <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Btn href={A.cta.link} light>Get a quote</Btn>
        <Btn href="#team" light outline>Meet the team</Btn>
      </div>
      <div style={{ marginTop: 64, display: 'flex', gap: 30, flexWrap: 'wrap', justifyContent: 'center', fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', opacity: .55 }}>
        {['Strategy', 'Design', 'Engineering', 'Marketing', 'Analytics'].map(x => (
          <span key={x} style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <ThreeBar size={10} color="#FFF" />{x}
          </span>
        ))}
      </div>
    </section>
  );
};

const Quad = ({ markRef }) => {
  const [ref, seen] = useReveal(0.1);
  const blocks = [
    { t: 'Design and Development', d: 'Interfaces, brand systems and production-ready builds — WordPress, eCommerce and custom.', fill: '#FFF' },
    { t: 'SEO', d: 'Technical and on-page SEO, keyword strategy and content engineered to earn rankings.', fill: '#000' },
    { t: 'Marketing', d: 'Search and social campaigns measured against pipeline, not vanity clicks.', fill: '#000' },
    { t: 'Content Strategy and Analytics Tracking', d: 'Content built to convert, with GA4 and reporting that turns data into decisions.', fill: '#FFF' },
  ];
  return (
    <section ref={ref} style={{ background: '#FFF', color: '#000', padding: '120px 6vw', borderTop: '1px solid #000' }}>
      <div style={{ textAlign: 'center', marginBottom: 64 }}>
        <Kick style={{ opacity: .6 }}>What we do</Kick>
        <h2 style={{ margin: '0 auto', maxWidth: 780, fontFamily: 'Geist, sans-serif', fontSize: 'clamp(38px,5vw,80px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.02 }}>
          One team.<br /><i style={{ fontWeight: 300 }}>Four commitments.</i>
        </h2>
      </div>
      <div className="quad">
        <div className="quad-l">
          <QuadBlock i={0} seen={seen} title={blocks[0].t} desc={blocks[0].d} fill={blocks[0].fill} delay={120} />
          <QuadBlock i={1} seen={seen} title={blocks[1].t} desc={blocks[1].d} fill={blocks[1].fill} delay={220} />
        </div>
        <div className="quad-c"><BrandLockup seen={seen} color="#000" markRef={markRef} /></div>
        <div className="quad-r">
          <QuadBlock i={2} seen={seen} title={blocks[2].t} desc={blocks[2].d} fill={blocks[2].fill} delay={160} />
          <QuadBlock i={3} seen={seen} title={blocks[3].t} desc={blocks[3].d} fill={blocks[3].fill} delay={260} />
        </div>
      </div>
    </section>
  );
};

const JourneyBars = ({ variant = 'timer', color = '#000', size = 170 }) => {
  const heights = [0.66, 1, 0.82];
  const cls = `jm-${variant}`;
  return (
    <span className={`jm ${cls}`} style={{ height: size, gap: size * 0.18 }}>
      {heights.map((h, i) => (
        <span key={i} className="jm-bar"
              style={{ width: size * 0.22, height: `${h * 100}%`, background: color, ['--jm-tx']: `${size * 0.09 + size * 0.22}px` }} />
      ))}
    </span>
  );
};

const Journey = ({ cardRef, cardBg, cardColor, cardBorder, cardDark }) => {
  const [ref, seen] = useReveal(0.1);
  const j = A.journey;
  return (
    <section ref={ref} style={{ background: '#FFF', color: '#000', padding: '120px 6vw', borderTop: '1px solid #000' }}>
      <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' }}>
        <Kick style={{ opacity: .55 }}>Our journey</Kick>
        <h2 style={{ margin: 0, fontFamily: 'Geist, sans-serif', fontSize: 'clamp(38px,5.2vw,74px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.04 }}>
          One team,<br /><i style={{ fontWeight: 300 }}>year by year.</i>
        </h2>
      </div>
      <div className="journey-bento" style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(20px)', transition: 'opacity .7s ease, transform .7s cubic-bezier(.2,.8,.2,1)' }}>
        <div ref={cardRef} className="jb-top" style={{ background: cardBg, color: cardColor, borderColor: cardBorder }}>
          <div className="jb-copy">
            <span className="ji-period">{j[0].tag}</span>
            <h3>{j[0].title}</h3>
            <p>{j[0].desc}</p>
          </div>
          <div className="jb-art"><JourneyBars variant="timer" color={cardColor} size={170} /></div>
        </div>
        <div className="jb-card">
          <div className="jb-art"><JourneyBars variant="grow" color="#000" size={160} /></div>
          <div className="jb-copy">
            <span className="ji-period">{j[1].tag}</span>
            <h3>{j[1].title}</h3>
            <p>{j[1].desc}</p>
          </div>
        </div>
        <div className="jb-card">
          <div className="jb-art"><JourneyBars variant="unity" color="#000" size={160} /></div>
          <div className="jb-copy">
            <span className="ji-period">{j[2].tag}</span>
            <h3>{j[2].title}</h3>
            <p>{j[2].desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const [ref, seen] = useReveal(0.05);
  const [hover, setHover] = useState(-1);
  return (
    <section id="team" ref={ref} style={{ background: '#000', color: '#FFF', padding: '120px 6vw 0', borderTop: '1px solid #FFF' }}>
      <div style={{ marginBottom: 48 }}>
        <Kick>The people</Kick>
        <h2 style={{ margin: 0, fontFamily: 'Geist, sans-serif', fontSize: 'clamp(40px,5.4vw,84px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.02 }}>
          The people behind<br /><i style={{ fontWeight: 300 }}>the work.</i>
        </h2>
      </div>
      <div className="team-grid">
        {A.team.map((m, i) => {
          const delay = (i % 4) * 70 + Math.floor(i / 4) * 120;
          return (
            <div key={m.name} style={{
              opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(18px)',
              transition: `opacity .6s ease ${seen ? delay : 0}ms, transform .6s cubic-bezier(.2,.8,.2,1) ${seen ? delay : 0}ms`,
            }}>
              <CheckerTeamCard m={m} i={i} seen={seen} hover={hover === i}
                               onEnter={() => setHover(i)} onLeave={() => setHover(-1)} />
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 48, textAlign: 'center' }}>
        <Btn href={A.teamHref} light outline>Meet the full team</Btn>
      </div>
    </section>
  );
};

const Departments = () => {
  const [ref, seen] = useReveal(0.1);
  return (
    <section ref={ref} style={{ background: '#FFF', color: '#000', padding: '120px 6vw', borderTop: '1px solid #000' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
        <div>
          <Kick style={{ opacity: .55 }}>The disciplines</Kick>
          <h2 style={{ margin: 0, fontFamily: 'Geist, sans-serif', fontSize: 'clamp(40px,5.4vw,84px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.02 }}>
            Eight disciplines,<br /><i style={{ fontWeight: 300 }}>one standard.</i>
          </h2>
        </div>
        <p style={{ margin: 0, maxWidth: 400, fontSize: 15, lineHeight: 1.6, opacity: .7, fontWeight: 300 }}>
          Each area is led by a specialist who works with the rest of the bench on every client — not in isolation.
        </p>
      </div>
      <div className="dept-grid">
        {A.departments.map((d, i) => <DeptCard key={d.name} d={d} i={i} seen={seen} wide={i === 0 || i === 7} light />)}
      </div>
    </section>
  );
};

const QuadJourney = () => {
  const trackRef = React.useRef(null);
  const markRef = React.useRef(null);
  const cardRef = React.useRef(null);
  const [lineTop, setLineTop] = React.useState(0);
  const [lineH, setLineH] = React.useState(0);
  const [cardBg, setCardBg] = React.useState('#FFF');
  const [cardColor, setCardColor] = React.useState('#000');
  const [cardBorder, setCardBorder] = React.useState('rgba(0,0,0,.18)');
  const [cardDark, setCardDark] = React.useState(false);

  React.useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const track = trackRef.current;
        const mark = markRef.current;
        const card = cardRef.current;
        if (!track || !mark || !card) return;
        const trackRect = track.getBoundingClientRect();
        const markRect = mark.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const logoBottom = markRect.bottom - trackRect.top;
        const cardTop = cardRect.top - trackRect.top;
        const gap = cardTop - logoBottom;
        if (gap <= 0) {
          setLineTop(logoBottom);
          setLineH(0);
          setCardBg('#000');
          setCardColor('#FFF');
          setCardBorder('#000');
          setCardDark(true);
          return;
        }
        const viewH = window.innerHeight;
        const startTrigger = viewH * 0.55;
        const scrolled = startTrigger - markRect.bottom;
        const progress = Math.max(0, Math.min(1, scrolled / gap));
        const PHASE_A = 0.55;
        let lt, lh, bgR;
        if (progress <= PHASE_A) {
          const t = progress / PHASE_A;
          lt = logoBottom;
          lh = t * gap;
          bgR = 0;
        } else {
          const t = (progress - PHASE_A) / (1 - PHASE_A);
          lt = logoBottom + t * gap;
          lh = (1 - t) * gap;
          bgR = t;
        }
        setLineTop(lt);
        setLineH(lh);
        const r = Math.round(255 * (1 - bgR));
        setCardBg(`rgb(${r},${r},${r})`);
        setCardColor(bgR > 0.5 ? '#FFF' : '#000');
        setCardBorder(bgR > 0.5 ? '#000' : 'rgba(0,0,0,.18)');
        setCardDark(bgR > 0.5);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div ref={trackRef} style={{ position: 'relative' }}>
      <div style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)',
        top: lineTop, width: 3, height: lineH,
        background: '#000', borderRadius: 2, pointerEvents: 'none', zIndex: 1,
      }} />
      <Quad markRef={markRef} />
      <Journey cardRef={cardRef} cardBg={cardBg} cardColor={cardColor} cardBorder={cardBorder} cardDark={cardDark} />
    </div>
  );
};

const App = () => (
  <React.Fragment>
    <HUD active="about" />
    <Hero />
    <QuadJourney />
    <Team />
    <VideoSection />
    <Departments />
    <PartnerMarquee />
    <Cta />
    <Footer />
  </React.Fragment>
);
