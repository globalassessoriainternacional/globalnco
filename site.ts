---
import { route, SERVICE_FAMILIES } from '../i18n/routes';
import { content } from '../data';
import type { Lang } from '../config/site';
interface Props { lang: Lang }
const { lang } = Astro.props;
const c = content[lang];
const bg: Record<string,string> = { live: '/img/faixa-viver.jpg', wealth: '/img/faixa-patrimonio.jpg', business: '/img/faixa-negocios.jpg' };
---
<div class="sg">
  {SERVICE_FAMILIES.map((f) => (
    <section class="sg__fam reveal">
      <header class="sg__head" style={`--img:url('${bg[f.key]}')`}>
        <h3>{c.common.serviceFamilies[f.key].name}</h3>
        <p>{c.common.serviceFamilies[f.key].desc}</p>
      </header>
      <ul class="sg__list">
        {f.services.map((s) => (
          <li>
            <a href={route(s, lang)}>
              <strong>{c.services[s].nav}</strong>
              <span>{c.services[s].excerpt}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  ))}
</div>
<style>
  .sg { display: grid; gap: 1.6rem; }
  @media (min-width: 900px) { .sg { grid-template-columns: repeat(3, 1fr); align-items: start; } }
  .sg__fam { border: 1px solid var(--line); border-radius: var(--radius); overflow: hidden; background: var(--white); }
  .sg__head { padding: 1.4rem 1.4rem 1.5rem; color: #fff;
    background-image: linear-gradient(160deg, rgba(18,11,48,.92), rgba(24,16,71,.72)), var(--img);
    background-size: cover; background-position: center; }
  .sg__head h3 { font-family: var(--serif); font-size: 1.6rem; color: #fff; }
  .sg__head p { font-size: .86rem; color: rgba(255,255,255,.75); margin-top: .3rem; }
  .sg__list { list-style: none; padding: .5rem; margin: 0; display: grid; gap: .2rem; }
  .sg__list a { display: grid; gap: .15rem; padding: .8rem .9rem; border-radius: var(--radius-sm); text-decoration: none; transition: background .16s ease; }
  .sg__list a:hover { background: var(--mist); }
  .sg__list strong { font-size: .95rem; color: var(--ink); font-weight: 600; }
  .sg__list span { font-size: .8rem; color: var(--muted); }
</style>
