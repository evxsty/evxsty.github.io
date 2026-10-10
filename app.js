const paperLinks = {"xct": {"url": "https://doi.org/10.1016/j.tafmec.2024.104589", "label": "Hu et al. (2024), Theoretical and Applied Fracture Mechanics"}, "dvc": {"url": "https://doi.org/10.1016/j.ijrmms.2025.106230", "label": "Hu et al. (2025), International Journal of Rock Mechanics and Mining Sciences"}, "f1": {"url": "https://doi.org/10.1007/s00603-021-02477-0", "label": "Xi et al. (2021), Rock Mechanics and Rock Engineering"}, "f2": {"url": "https://doi.org/10.1016/j.tafmec.2022.103641", "label": "Xi & Yang (2022), Theoretical and Applied Fracture Mechanics"}, "h1": {"url": "https://doi.org/10.1016/j.ijrmms.2022.105182", "label": "Xi et al. (2022), International Journal of Rock Mechanics and Mining Sciences"}, "h2": {"url": "https://doi.org/10.1007/s00603-022-02922-8", "label": "Xi et al. (2022), Rock Mechanics and Rock Engineering"}, "lrc": {"url": "https://doi.org/10.1016/j.tust.2026.107641", "label": "Zhang et al. (2026), Tunnelling and Underground Space Technology"}, "t1": {"url": "https://doi.org/10.1016/j.est.2026.121544", "label": "Flett et al. (2026), Journal of Energy Storage"}, "t2": {"url": "https://doi.org/10.1016/j.est.2026.124673", "label": "Wang et al. (2026), Journal of Energy Storage"}, "c1": {"url": "https://doi.org/10.1016/j.cemconres.2018.03.009", "label": "Xi, Yang & Li (2018), Cement and Concrete Research"}, "c2": {"url": "https://doi.org/10.1016/j.engfracmech.2018.05.036", "label": "Xi et al. (2018), Engineering Fracture Mechanics"}, "a1": {"url": "https://doi.org/10.1061/JSENDH.STENG-12253", "label": "Xi et al. (2024), Journal of Structural Engineering"}, "a2": {"url": "https://pure.strath.ac.uk/ws/portalfiles/portal/117489931/Xi_etal_EFM_2021_Using_artificial_neural_network_to_predict_the_fracture_properties_of_the_interfacial.pdf", "label": "Xi et al., Using artificial neural network to predict the fracture properties of the interfacial transition zone of concrete at the mesoscale"}};
const button = document.getElementById('language');
function setLanguage(language) {
  const chinese = language === 'zh';
  document.documentElement.lang = chinese ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-en][data-zh]').forEach(el => { if (el.dataset.emailLink) {
    const email=el.dataset.emailLink, parts=el.dataset[language].split(email);
    const a=document.createElement('a');a.href='mailto:'+email;a.textContent=email;a.className='manager-email';
    el.replaceChildren(document.createTextNode(parts[0]),a,document.createTextNode(parts.slice(1).join(email)));
  } else if (el.dataset.paperKeys) {
    const keys=JSON.parse(el.dataset.paperKeys);
    const parts=el.dataset[language].split(/\(paper link\)|（paper link）/);
    el.replaceChildren(document.createTextNode(parts[0]));
    keys.forEach((key,i)=>{const a=document.createElement('a');a.href=paperLinks[key].url;a.title=paperLinks[key].label;a.className='inline-paper';a.textContent=chinese?'[论文]':'[paper]';el.append(a,document.createTextNode(parts[i+1]||''));});
  } else { el.textContent = el.dataset[language]; } });
  button.textContent = chinese ? 'English' : 'Chinese';
  button.setAttribute('aria-label', chinese ? 'Switch to English' : 'Switch to Chinese');
  document.title = chinese ? '杨尚同教授 | 岩石力学与地下能源' : 'Prof Shangtong Yang | Rock Mechanics & Subsurface Energy';
  if (document.body.dataset.page === 'publications') document.title = chinese ? '近三年期刊论文（2024–2026） | 杨尚同教授' : 'Recent 3-year journal publications (2024-2026) | Prof Shangtong Yang';
  if (document.body.dataset.page === 'service') document.title = chinese ? '学术兼职 | 杨尚同教授' : 'Academic Service | Prof Shangtong Yang';
  if (document.body.dataset.page === 'facilities') document.title = chinese ? '科研设施 | 杨尚同教授' : 'Facilities | Prof Shangtong Yang';
  try { localStorage.setItem('yang-language', language); } catch {}
}
button.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'zh' : 'en'));
try { setLanguage(localStorage.getItem('yang-language') === 'zh' ? 'zh' : 'en'); } catch { setLanguage('en'); }
document.getElementById('year').textContent = new Date().getFullYear();
