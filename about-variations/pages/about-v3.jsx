/* ═══ VARIATION 3 · THE COLLECTIVE ═══
   Modular, structured, contemporary — the relationship between people and
   disciplines. Rhythm: black hero → white identity → black disciplines ring →
   black partner marquee → white values → white journey → black team + film →
   white FAQ → CTA. */

const Hero = () => {
  const [ref, seen] = useReveal(0.15);
  return (
    <section ref={ref} style={{
      minHeight: '78vh', background: '#000', color: '#FFF', padding: '150px 6vw 60px',
      display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
    }}>
      <h1 style={{
        margin: '0 auto', maxWidth: 1000, fontFamily: 'Geist, sans-serif',
        fontSize: 'clamp(44px,6.6vw,112px)', fontWeight: 500, letterSpacing: '-.045em', lineHeight: 1.03,
        opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(22px)',
        transition: 'opacity .9s ease, transform .9s cubic-bezier(.2,.8,.2,1)',
      }}>
        Different skills.<br /><i style={{ fontWeight: 300 }}>One team.</i>
      </h1>
      <p style={{ margin: '28px 0 0', maxWidth: 640, fontSize: 'clamp(15px,1.2vw,18px)', lineHeight: 1.65, opacity: .75, fontWeight: 300 }}>
        Strategy, design, engineering, marketing and analytics under one roof — assembled around each
        partner&rsquo;s goals and shipped under their brand.
      </p>
      <div style={{ marginTop: 40, display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Btn href={A.cta.link} light>Get a quote</Btn>
        <Btn href="#team" light outline>Meet the team</Btn>
      </div>
    </section>
  );
};

const SplitWho = () => {
  const [ref, seen] = useReveal(0.2);
  return (
    <section ref={ref} style={{ background: '#FFF', color: '#000', padding: '120px 6vw', borderTop: '1px solid #000' }}>
      <div className="split2 light">
        <div style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(18px)', transition: 'opacity .7s ease, transform .7s cubic-bezier(.2,.8,.2,1)' }}>
          <Kick style={{ opacity: .55 }}>Who we are</Kick>
          <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(28px,3.4vw,52px)', fontWeight: 500, letterSpacing: '-.03em', lineHeight: 1.08 }}>
            People you know,<br /><i style={{ fontWeight: 300 }}>by name.</i>
          </div>
          <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.65, opacity: .72, fontWeight: 300, maxWidth: 460 }}>
            Every engagement is staffed by real people whose names and roles are on our team page. You
            know who is doing your work.
          </p>
        </div>
        <div style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(18px)', transition: 'opacity .7s ease .15s, transform .7s cubic-bezier(.2,.8,.2,1) .15s' }}>
          <Kick style={{ opacity: .55 }}>What we believe</Kick>
          <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(28px,3.4vw,52px)', fontWeight: 500, letterSpacing: '-.03em', lineHeight: 1.08 }}>
            Good work ships<br /><i style={{ fontWeight: 300 }}>under your name.</i>
          </div>
          <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.65, opacity: .72, fontWeight: 300, maxWidth: 460 }}>
            We sign mutual NDAs as standard, stay invisible to the end client, and are measured by the
            results you keep.
          </p>
        </div>
      </div>
    </section>
  );
};

const DeptRing = () => {
  const [ref, seen] = useReveal(0.08);
  return (
    <section ref={ref} style={{ background: '#000', color: '#FFF', padding: '120px 6vw', borderTop: '1px solid #FFF' }}>
      <div style={{ textAlign: 'center', marginBottom: 56 }}>
        <Kick style={{ opacity: .6 }}>The disciplines, connected</Kick>
        <h2 style={{ margin: '0 auto', maxWidth: 820, fontFamily: 'Geist, sans-serif', fontSize: 'clamp(38px,5vw,80px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.02 }}>
          Eight specialties,<br /><i style={{ fontWeight: 300 }}>one centre.</i>
        </h2>
        <p style={{ margin: '18px auto 0', maxWidth: 520, fontSize: 15, lineHeight: 1.6, opacity: .72, fontWeight: 300 }}>
          Every discipline plugs into the same strategy, the same brief and the same reporting.
        </p>
      </div>
      <div className="dept-ring">
        {A.departments.slice(0, 4).map((d, i) => <DeptRingCard key={d.name} d={d} i={i} seen={seen} />)}
        <div className="ring-center" style={{ border: '1px solid rgba(255,255,255,.25)', minHeight: 150, padding: 24, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <ThreeBar size={40} color="#FFF" gap={5} />
          <div style={{ marginTop: 12, fontFamily: 'Geist, sans-serif', fontWeight: 500, fontSize: 16, letterSpacing: '-.01em' }}>The collective</div>
          <div style={{ marginTop: 6, fontFamily: 'Geist Mono, monospace', fontSize: 9, letterSpacing: '.2em', textTransform: 'uppercase', opacity: .55 }}>one standard</div>
        </div>
        {A.departments.slice(4).map((d, i) => <DeptRingCard key={d.name} d={d} i={i + 4} seen={seen} />)}
      </div>
    </section>
  );
};

const Values = () => {
  const [ref, seen] = useReveal(0.12);
  const sel = [2, 3, 0, 1]; // Continuous Improvement · Quality Without Complexity · Ownership · Clear Communication
  return (
    <section ref={ref} style={{ background: '#FFF', color: '#000', padding: '120px 6vw', borderTop: '1px solid #000' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
        <div>
          <Kick style={{ opacity: .55 }}>Our values</Kick>
          <h2 style={{ margin: 0, fontFamily: 'Geist, sans-serif', fontSize: 'clamp(40px,5.4vw,84px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.02 }}>
            Principles we<br /><i style={{ fontWeight: 300 }}>work by.</i>
          </h2>
        </div>
        <p style={{ margin: 0, maxWidth: 400, fontSize: 15, lineHeight: 1.6, opacity: .72, fontWeight: 300 }}>
          Not slogans — the rules we hold each other to on every project, in every discipline.
        </p>
      </div>
      <div className="value-grid">
        {sel.map((idx, i) => (
          <div key={idx} style={{
            opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(18px)',
            transition: `opacity .55s ease ${i * 80}ms, transform .55s cubic-bezier(.2,.8,.2,1) ${i * 80}ms`,
          }}>
            <ValueCard v={A.values[idx]} i={i} seen={seen} light />
          </div>
        ))}
      </div>
    </section>
  );
};

const Journey = () => {
  const [ref, seen] = useReveal(0.2);
  return (
    <section ref={ref} style={{ background: '#FFF', color: '#000', padding: '120px 6vw', borderTop: '1px solid #000' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 1fr', gap: '5vw', alignItems: 'center' }}>
        <div style={{ opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateY(20px)', transition: 'opacity .8s ease, transform .8s cubic-bezier(.2,.8,.2,1)' }}>
          <Kick style={{ opacity: .55 }}>Our journey</Kick>
          <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(38px,5vw,76px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.05 }}>
            From specialists<br /><i style={{ fontWeight: 300 }}>to one team.</i>
          </div>
        </div>
        <div>
          {A.journey.map((s, i) => (
            <div key={i} style={{
              borderBottom: i < A.journey.length - 1 ? '1px solid rgba(0,0,0,.18)' : 'none',
              padding: '26px 0', opacity: seen ? 1 : 0, transform: seen ? 'none' : 'translateX(-12px)',
              transition: `opacity .55s ease ${i * 120}ms, transform .55s ease ${i * 120}ms`,
            }}>
              <div style={{ fontFamily: 'Geist Mono, monospace', fontSize: 10, letterSpacing: '.22em', opacity: .55, marginBottom: 8 }}>{s.tag}</div>
              <div style={{ fontFamily: 'Geist, sans-serif', fontSize: 'clamp(20px,1.8vw,28px)', fontWeight: 500, letterSpacing: '-.02em' }}>{s.title}</div>
              <p style={{ marginTop: 8, fontSize: 14, lineHeight: 1.6, opacity: .7, fontWeight: 300 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const [ref, seen] = useReveal(0.05);
  return (
    <section id="team" ref={ref} style={{ background: '#000', color: '#FFF', padding: '120px 6vw 0', borderTop: '1px solid #FFF' }}>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <Kick style={{ opacity: .6 }}>The people</Kick>
        <h2 style={{ margin: '0 auto', maxWidth: 820, fontFamily: 'Geist, sans-serif', fontSize: 'clamp(40px,5.4vw,84px)', fontWeight: 500, letterSpacing: '-.035em', lineHeight: 1.02 }}>
          The collective,<br /><i style={{ fontWeight: 300 }}>up close.</i>
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
              <IdentityTeamCard m={m} i={i} seen={seen} />
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 48, textAlign: 'center' }}>
        <Btn href={A.teamHref} light outline>Explore the full team</Btn>
      </div>
    </section>
  );
};

const App = () => (
  <React.Fragment>
    <HUD active="about" />
    <Hero />
    <SplitWho />
    <DeptRing />
    <PartnerMarquee />
    <Values />
    <Journey />
    <Team />
    <VideoSection />
    <Faq />
    <Cta />
    <Footer />
  </React.Fragment>
);
