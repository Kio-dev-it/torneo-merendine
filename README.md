# 🏆 Torneo delle Merendine 🍫

Tabellone interattivo per il torneo delle merendine tra amici!

## 📁 File del Progetto

- `index.html` - Pagina principale
- `style.css` - Stili e design responsive
- `script.js` - Interattività e animazioni

## 🚀 Come Pubblicare su GitHub Pages

### 1. Crea un Repository su GitHub
1. Vai su [GitHub](https://github.com)
2. Clicca su "New repository"
3. Dai un nome al repository (es: `torneo-merendine`)
4. Seleziona "Public"
5. Clicca su "Create repository"

### 2. Carica i File
Hai due opzioni:

#### Opzione A: Upload diretto via web
1. Nel tuo repository, clicca su "Add file" > "Upload files"
2. Trascina i tre file (index.html, style.css, script.js)
3. Clicca su "Commit changes"

#### Opzione B: Via Git (se lo hai installato)
```bash
git clone https://github.com/TUO-USERNAME/torneo-merendine.git
cd torneo-merendine
# Copia i file nella cartella
git add .
git commit -m "Initial commit - Torneo delle Merendine"
git push origin main
```

### 3. Attiva GitHub Pages
1. Nel repository, vai su "Settings"
2. Nel menu laterale, clicca su "Pages"
3. Sotto "Source", seleziona "Deploy from a branch"
4. Seleziona il branch "main" e la cartella "/ (root)"
5. Clicca su "Save"

### 4. Accedi al Sito
Dopo qualche minuto, il tuo sito sarà disponibile all'indirizzo:
```
https://TUO-USERNAME.github.io/torneo-merendine/
```

## ✨ Caratteristiche

- ✅ Design responsive (funziona su desktop, tablet e mobile)
- ✅ Animazioni fluide
- ✅ Evidenziazione dei vincitori
- ✅ Grafica accattivante con gradiente viola
- ✅ Finale evidenziata in oro
- ✅ Effetti hover interattivi

## 🎨 Personalizzazione

### Modificare i Colori
Nel file `style.css`, cerca queste righe per cambiare i colori:

```css
/* Colore di sfondo principale */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Colore vincitori */
background-color: #d4edda;

/* Colore finale */
border: 3px solid #ffd700;
```

### Aggiornare i Risultati
Nel file `index.html`, modifica semplicemente i punteggi e aggiungi/rimuovi la classe `winner`:

```html
<div class="team winner">
    <span class="team-name">Nome Merendina</span>
    <span class="score">5</span>
</div>
```

## 📱 Test Responsive

Il sito è ottimizzato per:
- 📱 Mobile (< 480px)
- 📱 Tablet (480px - 768px)
- 💻 Desktop (> 768px)

## 🐛 Problemi Comuni

**Il sito non si vede dopo la pubblicazione**
- Aspetta 5-10 minuti dopo l'attivazione di GitHub Pages
- Controlla che i file siano nella root del repository
- Verifica che il file si chiami esattamente `index.html`

**Il CSS/JS non funziona**
- Controlla che i nomi dei file corrispondano esattamente
- Verifica che tutti e tre i file siano nella stessa cartella

## 📝 Licenza

Progetto creato per divertimento tra amici. Usa e modifica come preferisci! 🍫

---

**Buon torneo e che vinca la merendina migliore!** 🏆