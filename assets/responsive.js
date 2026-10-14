/* Shared navigation keeps links and mobile behavior consistent on every page. */
(() => {
  const base = new URL('../', document.currentScript.src);
  const links = [['Work', 'work-variations/work-v6.html'], ['About', 'about-variations/about-v1.html'], ['Team', 'team-v2.html']];
  const url = path => new URL(path, base).href;
  window.ResponsiveHUD = function ResponsiveHUD() {
    const h = React.createElement;
    const [open, setOpen] = React.useState(false);
    React.useEffect(() => {
      const close = e => { if (e.key === 'Escape') setOpen(false); };
      const resize = () => { if (innerWidth > 900) setOpen(false); };
      document.addEventListener('keydown', close); window.addEventListener('resize', resize);
      return () => { document.removeEventListener('keydown', close); window.removeEventListener('resize', resize); };
    }, []);
    const menuItems = () => [
      ...links.map(([label,path]) => h('a',{key:path,href:url(path),'aria-current':location.pathname.endsWith('/'+path) ? 'page' : undefined},label)),
      h('button',{key:'quote',className:'nav-quote',type:'button',onClick:()=>{setOpen(false);window.openQuoteModal();}},'Get a Quote')
    ];
    return h(React.Fragment, null,
      h('nav', {className:'site-nav','aria-label':'Main navigation'},
        h('a',{className:'site-brand',href:url('index.html')},h('span',{className:'site-mark','aria-hidden':true},...[0,1,2].map(i=>h('i',{key:i}))),'White Label Resell'),
        h('button',{className:'menu-toggle',type:'button','aria-label':open?'Close navigation':'Open navigation','aria-expanded':open,'aria-controls':'site-links',onClick:()=>setOpen(!open)},open?'✕':'☰'),
        h('div',{className:'site-links',id:'site-links-desktop'},...menuItems())),
      open ? ReactDOM.createPortal(h('div',{className:'site-links is-open mobile-menu-portal',id:'site-links'},...menuItems()),document.body) : null);

  };
  document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav.nav');
    if (nav) {
      nav.className = 'site-nav';
      nav.innerHTML = `<a class="site-brand" href="${url('index.html')}"><span class="site-mark" aria-hidden="true"><i></i><i></i><i></i></span>White Label Resell</a><button type="button" class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="site-links">☰</button><div class="site-links" id="site-links">${links.map(([l,p])=>`<a href="${url(p)}">${l}</a>`).join('')}<button class="nav-quote" type="button">Get a Quote</button></div>`;
      const toggle=nav.querySelector('.menu-toggle'), panel=nav.querySelector('.site-links');
      const close=()=>{panel.classList.remove('mobile-menu-portal');nav.append(panel);panel.classList.remove('is-open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';};
      toggle.onclick=()=>{if(panel.classList.contains('is-open')){close();return;}document.body.append(panel);panel.classList.add('is-open','mobile-menu-portal');toggle.setAttribute('aria-expanded','true');toggle.textContent='✕';};
      window.addEventListener('resize',()=>{if(innerWidth>900)close();});
      document.addEventListener('keydown',e=>{if(e.key==='Escape')close();});
      nav.querySelector('.nav-quote').onclick=()=>{close();window.openQuoteModal();};
    }
    // The static blog page uses the same quote form as the React pages.
    if (nav && !window.openQuoteModal) {
      let dialog;
      window.closeQuoteModal=()=>{if(dialog){dialog.remove();dialog=null;}};
      window.openQuoteModal=()=>{if(dialog)return;dialog=document.createElement('dialog');dialog.className='quote-dialog';dialog.innerHTML=`<button class="dialog-close" aria-label="Close quote">✕</button><iframe src="${url('quote-v1.html')}" title="Get a Quote"></iframe>`;document.body.append(dialog);dialog.querySelector('button').onclick=window.closeQuoteModal;dialog.addEventListener('click',e=>{if(e.target===dialog)window.closeQuoteModal();});dialog.showModal();};
      window.addEventListener('message',e=>{if(e.origin===location.origin && e.data==='close-quote-modal')window.closeQuoteModal();});
    }
  });
})();
