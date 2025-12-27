# TODO Lista - Black Box Testing Sajt 📋

## 🔴 PRIORITET - Pre Deploy-a

### 1. Logo ⚠️
- [ ] Napraviti novi logo koji je vidljiv na tamnoj pozadini
- [ ] Logo treba da ima svetle boje (bela, plava, cyan)
- [ ] Optimizovati logo za sve veličine (mobile, tablet, desktop)
- [ ] Testirati vidljivost na svim sekcijama sajta

**Trenutni problem:** Logo ima crne elemente koji se ne vide na tamnoj pozadini

---

### 2. Portfolio Sekcija 🎨
- [ ] Dodati **PRAVE projekte** umesto placeholder-a
- [ ] Za svaki projekat dodati:
  - [ ] Screenshot ili sliku projekta
  - [ ] Link ka live sajtu
  - [ ] Link ka GitHub repo-u (ako je javni)
  - [ ] Detaljan opis projekta
  - [ ] Tehnologije korišćene
  - [ ] Client testimonial (ako postoji)
- [ ] Kreirati folder `/public/projects/` za slike projekata
- [ ] Ažurirati `components/Portfolio.tsx` sa pravim podacima

**Trenutno stanje:** Sekcija ima placeholder projekte sa emoji ikonama

---

## 🟡 OPCIONO - Poboljšanja

### 3. Kontakt Informacije 📞
- [ ] Dodati pravi broj telefona (trenutno: `+381 XX XXX XXXX`)
- [ ] Dodati pravu email adresu (trenutno: `contact@blackboxtesting.rs`)
- [ ] Proveriti da li domen `blackboxtesting.rs` postoji ili kupiti

### 4. Social Media Linkovi 🔗
- [ ] Dodati prave linkove za:
  - [ ] Facebook
  - [ ] Twitter/X
  - [ ] LinkedIn
  - [ ] GitHub
- [ ] Trenutno svi linkovi pokazuju na `#` (placeholder)

### 5. SEO Optimizacija 🔍
- [ ] Dodati meta description
- [ ] Dodati meta keywords
- [ ] Dodati Open Graph tags za social media preview
- [ ] Kreirati `favicon.ico`
- [ ] Dodati `robots.txt`
- [ ] Dodati `sitemap.xml`

### 6. Pravni Dokumenti 📄
- [ ] Kreirati stranicu "Politika privatnosti"
- [ ] Kreirati stranicu "Uslovi korišćenja"
- [ ] Dodati linkove u Footer-u

### 7. Analytics & Monitoring 📊
- [ ] Dodati Google Analytics ili Plausible
- [ ] Dodati Google Search Console
- [ ] Setup error tracking (Sentry)

### 8. Performance 🚀
- [ ] Optimizovati slike (WebP format)
- [ ] Dodati lazy loading za slike
- [ ] Testirati Lighthouse score
- [ ] Optimizovati bundle size

---

## ✅ ZAVRŠENO

- [x] Moderni, responzivan dizajn
- [x] Hero sekcija sa Matrix animacijom
- [x] Animirani brojevi i statistika
- [x] About sekcija
- [x] Services sekcija sa 3D tilt efektima
- [x] Contact forma sa EmailJS integracijom
- [x] Full mobile/tablet/desktop responsive
- [x] Navigation sa mobile menu
- [x] Footer sa quick links
- [x] Custom `blackbox` komanda
- [x] Git repo kreiran i push-ovan na GitHub

---

## 📝 Napomene

### Logo preporuke:
1. Koristi **svetle boje**: bela, plava (#2563eb), cyan (#06b6d4)
2. Format: **SVG** (najbolji za skaliranje) ili **PNG** sa transparentnom pozadinom
3. Dimenzije: minimum 400x100px
4. Možeš koristiti online alate:
   - [Canva](https://www.canva.com) - besplatno
   - [LogoMakr](https://logomakr.com) - besplatno
   - [Figma](https://www.figma.com) - besplatno

### Portfolio projekti:
- Minimum **3-6 projekata**
- Slike: 1200x800px (optimalno)
- Format: WebP ili JPG (optimizovano)
- Dodaj case study za najbolje projekte

---

## 🎯 Kada završiš TODO listu, sajt je spreman za:
1. Deploy na Vercel/Netlify
2. Kupovina domena
3. Google indexing
4. Promocija klijentima

---

**Poslednje ažuriranje:** 27. Decembar 2024

