/* ═══ VARIATION 2 · STORY AND CULTURE ═══
   Editorial, story-focused, team-oriented, spacious, strong typography.
   Rhythm: black hero → white who-we-are → black values → white journey →
   black team + film → white culture → white departments → CTA. */

const Hero = () => {
  const [ref, seen] = useReveal(0.2);
  return (
    <section ref={ref} style={{
      minHeight: '92vh', background: '#000', color: '#FFF', padding: '150px 6vw 90px',
      display: 'grid', gridTemplateColumns: '1.7fr 1fr', gap: '4vw', alignItems: 'center',
    }}>
      <div>
        <h1 style={{
          margin: 0, fontFamily: 'Geist, sans-serif',
          fontSize: 'clamp(46px,7vw,118px)', fontWeight: 500, letterSpacing: '-.045em', lineHeight: 1.02,
          opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(24px)',
          transition: 'opacity .9s ease, transform .9s cubic-bezier(.2,.8,.2,1)',
        }}>
          The people<br /><i style={{ fontWeight: 300 }}>behind the work.</i>
        </h1>
        <p style={{ margin: '30px 0 0', maxWidth: 520, fontSize: 'clamp(15px,1.2vw,18px)', lineHeight: 1.65, opacity: .75, fontWeight: 300 }}>
          We are a specialist team that partners with agencies to design, build and grow better digital
          businesses — quietly, under your brand, never in front of your clients.
        </p>
        <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Btn href={A.cta.link} light>Get a quote</Btn>
          <Btn href="#team" light outline>Meet the team</Btn>
        </div>
      </div>
      <div style={{
        opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(20px)',
        transition: 'opacity .9s ease .2s, transform .9s cubic-bezier(.2,.8,.2,1) .2s',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{ width: '100%', maxWidth: 360, aspectRatio: '3 / 4', border: '1px solid rgba(255,255,255,.2)', display: 'grid', placeItems: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 18, left: 18, fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '.22em', opacity: .5 }}>WLR</div>
          <ThreeBar size={110} color="#FFF" gap={10} />
          <div style={{ position: 'absolute', bottom: 18, right: 18, fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '.22em', opacity: .5 }}>est. 2018</div>
        </div>
      </div>
    </section>
  );
};

const WhoWeAre = () => {
  const [ref, seen] = useReveal(0.25);
  return (
    <section ref={ref} style={{ background: '#FFF', color: '#000', padding: 'clamp(90px,10vw,140px) 6vw', borderTop: '1px solid #000' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5vw', alignItems: 'center' }}>
        <div style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(20px)', transition: 'opacity .8s ease, transform .8s cubic-bezier(.2,.8,.2,1)' }}>
          <Kick style={{ opacity: .55 }}>About the company</Kick>
          <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(34px,4.4vw,68px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.05 }}>
            A bench,<br /><i style={{ fontWeight: 300 }}>with personality.</i>
          </div>
        </div>
        <div>
          <p style={{ fontSize: 'clamp(16px,1.3vw,19px)', lineHeight: 1.7, opacity: .8, fontWeight: 300, maxWidth: 560 }}>
            White Label Resell was founded to give agencies the depth of a full in-house team without the
            overhead of building one. We are designers, engineers, marketers and analysts who share one
            obsession: work that is good enough to put your name on.
          </p>
          <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.7, opacity: .68, fontWeight: 300, maxWidth: 560 }}>
            We work under our partners&rsquo; brands, sign mutual NDAs as standard, and measure ourselves by
            results our clients keep long after launch.
          </p>
        </div>
      </div>
    </section>
  );
};

const Values = () => {
  const [ref, seen] = useReveal(0.15);
  const sel = [0, 1, 4, 5]; // Ownership · Clear Communication · Collaboration Across Disciplines · Lasting Value
  return (
    <section ref={ref} style={{ background: '#000', color: '#FFF', padding: '120px 6vw', borderTop: '1px solid #FFF' }}>
      <Kick>Our values</Kick>
      <h2 style={{ margin: '0 0 40px', fontFamily: 'Geist, sans-serif', fontSize: 'clamp(40px,5.4vw,84px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.02 }}>
        What we hold<br /><i style={{ fontWeight: 300 }}>ourselves to.</i>
      </h2>
      {sel.map((idx, i) => <ValuePanel key={idx} v={A.values[idx]} i={i} seen={seen} />)}
    </section>
  );
};

const Journey = () => {
  const [ref, seen] = useReveal(0.15);
  return (
    <section ref={ref} style={{ background: '#FFF', color: '#000', padding: '120px 6vw', borderTop: '1px solid #000' }}>
      <div style={{ marginBottom: 48 }}>
        <Kick style={{ opacity: .55 }}>Our journey</Kick>
        <h2 style={{ margin: 0, fontFamily: 'Geist, sans-serif', fontSize: 'clamp(40px,5.4vw,84px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.02 }}>
          How we grew,<br /><i style={{ fontWeight: 300 }}>stage by stage.</i>
        </h2>
      </div>
      <div className="journey-grid">
        {A.journey.map((s, i) => <JourneyCard key={i} s={s} i={i} seen={seen} light />)}
      </div>
    </section>
  );
};

const Team = () => {
  const [ref, seen] = useReveal(0.05);
  return (
    <section id="team" ref={ref} style={{ background: '#000', color: '#FFF', padding: '120px 6vw 0', borderTop: '1px solid #FFF' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
        <div>
          <Kick>The people</Kick>
          <h2 style={{ margin: 0, fontFamily: 'Geist, sans-serif', fontSize: 'clamp(40px,5.4vw,84px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.02 }}>
            A team of<br /><i style={{ fontWeight: 300 }}>named specialists.</i>
          </h2>
        </div>
        <p style={{ margin: 0, maxWidth: 380, fontSize: 15, lineHeight: 1.6, opacity: .7, fontWeight: 300 }}>
          Real people, real roles — the leads you work with are the people you see here.
        </p>
      </div>
      <div className="team-grid">
        {A.team.map((m, i) => {
          const delay = (i % 4) * 90 + Math.floor(i / 4) * 130;
          return (
            <div key={m.name} style={{
              opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(18px)',
              transition: `opacity .6s ease ${seen ? delay : 0}ms, transform .6s cubic-bezier(.2,.8,.2,1) ${seen ? delay : 0}ms`,
            }}>
              <EditorialTeamCard m={m} i={i} seen={seen} />
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 48, textAlign: 'center' }}>
        <Btn href={A.teamHref} light outline>View all team members</Btn>
      </div>
    </section>
  );
};

const Culture = () => {
  const [ref, seen] = useReveal(0.2);
  return (
    <section ref={ref} style={{ background: '#FFF', color: '#000', padding: '120px 6vw', borderTop: '1px solid #000' }}>
      <div style={{ maxWidth: 980 }}>
        <Kick style={{ opacity: .55 }}>How we work</Kick>
        <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(34px,5vw,76px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.06, opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(22px)', transition: 'opacity .8s ease, transform .8s cubic-bezier(.2,.8,.2,1)' }}>
          No hand-offs between <span style={{ background: '#000', color: '#FFF', padding: '0 18px', display: 'inline-block', fontStyle: 'italic', fontWeight: 300 }}>silos.</span> One brief, one standard.
        </div>
        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 32 }}>
          {[
            ['Led by leads', 'Each discipline has a named lead who owns quality and direction on every project.'],
            ['Parallel, not sequential', 'Design, build and content run at the same time, from the same brief.'],
            ['One shared standard', 'Reviews, QA and reporting follow the same rules, whatever the discipline.'],
          ].map(([t, b], i) => (
            <div key={t} style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(16px)', transition: `opacity .55s ease ${i * 110}ms, transform .55s ease ${i * 110}ms` }}>
              <ThreeBar size={16} color="#000" gap={3} />
              <div style={{ marginTop: 14, fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '.22em', opacity: .5 }}>/0{i + 1}</div>
              <div style={{ marginTop: 10, fontFamily: 'Geist, sans-serif', fontSize: 'clamp(18px,1.6vw,24px)', fontWeight: 500, letterSpacing: '-.02em' }}>{t}</div>
              <p style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.6, opacity: .7, fontWeight: 300 }}>{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Departments = () => {
  const [ref, seen] = useReveal(0.1);
  return (
    <section ref={ref} style={{ background: '#FFF', color: '#000', padding: '120px 6vw', borderTop: '1px solid #000' }}>
      <div style={{ maxWidth: 880 }}>
        <Kick style={{ opacity: .55 }}>The disciplines</Kick>
        <h2 style={{ margin: '0 0 44px', fontFamily: 'Geist, sans-serif', fontSize: 'clamp(40px,5.4vw,84px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.02 }}>
          One company,<br /><i style={{ fontWeight: 300 }}>eight specialties.</i>
        </h2>
      </div>
      <div className="dept-list">
        {A.departments.map((d, i) => {
          const delay = i * 60;
          return (
            <div key={d.name} style={{
              border: '1px solid rgba(0,0,0,.18)', padding: '20px 22px', display: 'flex', gap: 18, alignItems: 'flex-start',
              opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(16px)',
              transition: `opacity .5s ease ${seen ? delay : 0}ms, transform .5s ease ${seen ? delay : 0}ms`,
            }}>
              <span style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '.22em', opacity: .5, paddingTop: 3 }}>/0{i + 1}</span>
              <div>
                <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(17px,1.5vw,22px)', fontWeight: 500, letterSpacing: '-.02em' }}>{d.name}</div>
                <p style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6, opacity: .7, fontWeight: 300 }}>{d.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const App = () => (
  <React.Fragment>
    <HUD active="about" />
    <Hero />
    <WhoWeAre />
    <Values />
    <Journey />
    <Team />
    <VideoSection />
    <Culture />
    <Departments />
    <Cta />
    <Footer />
  </React.Fragment>
);
