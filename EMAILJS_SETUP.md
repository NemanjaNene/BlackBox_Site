# EmailJS Setup - Vodič za Konfiguraciju 📧

## Korak 1: Registracija na EmailJS

1. Idi na **https://www.emailjs.com/**
2. Klikni na **"Sign Up"** (ili **"Get Started"**)
3. Registruj se sa svojim Google nalogom (najlakše) ili emailom

---

## Korak 2: Dodavanje Email Servisa (Gmail)

1. U dashboard-u, idi na **"Email Services"** (levo u meniju)
2. Klikni na **"Add New Service"**
3. Izaberi **"Gmail"**
4. Klikni **"Connect Account"** i prijavi se na svoj Gmail nalog
5. Dozvoli pristup EmailJS servisu
6. **Kopiraj Service ID** (npr. `service_abc123`) - sačuvaj ga!

---

## Korak 3: Kreiranje Email Template-a

1. U dashboard-u, idi na **"Email Templates"**
2. Klikni na **"Create New Template"**
3. Popuni template ovako:

### Template Name:
```
Contact Form - Black Box Testing
```

### Template Content (Subject):
```
Nova poruka sa sajta: {{subject}}
```

### Template Content (Body):
```
Ime: {{from_name}}
Email: {{from_email}}
Naslov: {{subject}}

Poruka:
{{message}}

---
Ova poruka je poslata sa kontakt forme na Black Box Testing sajtu.
```

4. U **"To Email"** polju stavi: `{{to_email}}`
5. Klikni **"Save"**
6. **Kopiraj Template ID** (npr. `template_xyz789`) - sačuvaj ga!

---

## Korak 4: Dobijanje Public Key

1. U dashboard-u, idi na **"Account"** (gornji desni ugao)
2. Nađi sekciju **"General"**
3. **Kopiraj Public Key** (npr. `abcXYZ123456`) - sačuvaj ga!

---

## Korak 5: Dodavanje Kredencijala u Projekat

1. Otvori fajl `.env.local` u root direktorijumu projekta
2. Zameni placeholder vrednosti sa pravim vrednostima:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcXYZ123456
```

---

## Korak 6: Restartovanje Servera

Posle dodavanja environment varijabli, **MORAŠ RESTARTOVATI** dev server:

```bash
# Zaustavi server (Ctrl+C u terminalu)
# Pokreni ponovo:
blackbox
```

---

## Korak 7: Testiranje

1. Otvori sajt u browser-u
2. Scroll do **Contact** sekcije
3. Popuni formu i pošalji test poruku
4. Proveri svoj Gmail - trebalo bi da stigne email! 📬

---

## Besplatni Limit

- **200 email-ova mesečno** - besplatno!
- Savršeno za početak

---

## Troubleshooting 🔧

### Email ne stiže?
- Proveri da li si dobro iskopirao Service ID, Template ID i Public Key
- Proveri da li si restartovao server nakon dodavanja .env.local
- Proveri SPAM folder u Gmail-u
- Proveri konzolu u browser-u za greške (F12 -> Console)

### "EmailJS nije pravilno konfigurisan" greška?
- Proveri da li `.env.local` fajl postoji
- Proveri da li su sve tri varijable popunjene
- Restartuj server

---

## Gotovo! 🎉

Tvoj sajt je sada povezan sa EmailJS i primaćeš sve poruke direktno na svoj Gmail!

