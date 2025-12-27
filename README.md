# Black Box Testing - Profesionalni Web Development Sajt

Moderni, funkcionalan i responzivan web sajt za Black Box Testing - profesionalne usluge web developmenta i testiranja.

## 🚀 Karakteristike

- ✨ Moderan dizajn sa Tailwind CSS
- 📱 Potpuno responzivan (mobile-first)
- ⚡ Brze performanse sa Next.js 14
- 📧 Funkcionalna kontakt forma sa email integracijom
- 🎨 Animacije i smooth scrolling
- 🌙 Tamna tema sa gradijentima
- 💼 Portfolio sekcija za prikaz projekata
- 🛠️ TypeScript za type safety

## 📦 Tehnologije

- **Framework:** Next.js 14 (React 18)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Email:** Nodemailer
- **Hosting:** Ready for Vercel/Netlify

## 🛠️ Instalacija

1. Instalirajte dependencije:
```bash
npm install
```

2. Kreirajte `.env.local` fajl (kopirajte `.env.local.example`):
```bash
cp .env.local.example .env.local
```

3. Popunite email konfiguraciju u `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=vas-email@gmail.com
SMTP_PASS=vasa-app-lozinka
SMTP_FROM=noreply@blackboxtesting.rs
CONTACT_EMAIL=vas-email@gmail.com
```

## 🚀 Pokretanje

### Development mode:
```bash
npm run dev
```

Otvorite [http://localhost:3000](http://localhost:3000) u browseru.

### Production build:
```bash
npm run build
npm start
```

## 📧 Podešavanje Email-a

### Gmail:
1. Uključite 2-factor authentication na Google nalogu
2. Idite na: https://myaccount.google.com/apppasswords
3. Kreirajte "App Password" za aplikaciju
4. Koristite taj password u `.env.local` fajlu

### Drugi provajderi:
- **Mailgun:** `smtp.mailgun.org:587`
- **SendGrid:** `smtp.sendgrid.net:587`
- **Outlook:** `smtp-mail.outlook.com:587`

## 📁 Struktura Projekta

```
Black-Box_Sajt/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API endpoint za kontakt formu
│   ├── globals.css               # Globalni stilovi
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Homepage
├── components/
│   ├── Navigation.tsx            # Header navigacija
│   ├── Hero.tsx                  # Hero sekcija
│   ├── About.tsx                 # O nama sekcija
│   ├── Services.tsx              # Usluge sekcija
│   ├── Portfolio.tsx             # Portfolio sekcija
│   ├── Contact.tsx               # Kontakt forma
│   └── Footer.tsx                # Footer
├── public/                       # Statički fajlovi (slike, logo...)
├── .env.local                    # Environment varijable (ne commitovati!)
├── .env.local.example            # Primer env fajla
└── README.md                     # Ovaj fajl
```

## 🎨 Customizacija

### Boje:
Podesite boje u `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // vaše boje...
  }
}
```

### Logo:
Dodajte vaš logo u:
1. `public/` folder
2. Update `components/Navigation.tsx` da koristi logo sliku

### Sadržaj:
- **Hero:** `components/Hero.tsx`
- **O nama:** `components/About.tsx`
- **Usluge:** `components/Services.tsx`
- **Portfolio:** `components/Portfolio.tsx` - dodajte svoje projekte

## 📱 Sekcije

### 1. Hero
- Glavni naslov i CTA dugmići
- Statistike (projekti, klijenti, itd.)
- Animirani background

### 2. O nama
- Opis kompanije
- Ključne vrednosti (Preciznost, Brzina, Sigurnost, Inovacija)

### 3. Usluge
- Web Development
- QA & Testing
- E-Commerce
- Mobile-First Design
- Maintenance & Support
- UI/UX Design

### 4. Portfolio
- Filterable projects
- Project showcase
- Tags i kategorije

### 5. Kontakt
- Kontakt informacije
- Funkcionalna forma
- Email notifikacije

## 🚀 Deployment

### Vercel (Preporučeno):
```bash
npm install -g vercel
vercel
```

### Netlify:
```bash
npm run build
# Upload 'out' folder
```

### Environment Variables:
Ne zaboravite da dodate environment varijable u deployment platformi!

## 📝 TODO Lista

- [ ] Dodati pravi logo
- [ ] Popuniti stvarne projekte u Portfolio
- [ ] Dodati prave kontakt informacije
- [ ] Povezati social media linkove
- [ ] Dodati Google Analytics
- [ ] Optimizovati SEO
- [ ] Dodati blog sekciju (opciono)
- [ ] Dodati testimonials (opciono)

## 🤝 Kontakt

- **Email:** contact@blackboxtesting.rs
- **Website:** [blackboxtesting.rs](https://blackboxtesting.rs)

## 📄 Licenca

© 2024 Black Box Testing. Sva prava zadržana.

