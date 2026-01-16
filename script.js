// Pagina statica: aggiorna i risultati direttamente in index.html.
// Script per il Torneo delle Merendine

document.addEventListener('DOMContentLoaded', function() {
    
    // Aggiungi effetti hover ai matchup
    const matchups = document.querySelectorAll('.matchup');
    
    matchups.forEach(matchup => {
        matchup.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        matchup.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Aggiungi click sui team per mostrare info (opzionale)
    const teams = document.querySelectorAll('.team');
    
    teams.forEach(team => {
        team.addEventListener('click', function() {
            const teamName = this.querySelector('.team-name').textContent;
            if (teamName && teamName.trim() !== '') {
                // Aggiungi un piccolo effetto di "pulse"
                this.style.animation = 'pulse 0.3s';
                setTimeout(() => {
                    this.style.animation = '';
                }, 300);
            }
        });
    });

    // Aggiungi animazione di entrata al caricamento
    const rounds = document.querySelectorAll('.round');
    rounds.forEach((round, index) => {
        round.style.opacity = '0';
        round.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            round.style.transition = 'all 0.5s ease-out';
            round.style.opacity = '1';
            round.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Conta e mostra statistiche
    function updateStats() {
        const winners = document.querySelectorAll('.team.winner');
        const totalMatches = document.querySelectorAll('.matchup').length;
        
        console.log(`🏆 Statistiche Torneo:`);
        console.log(`- Partite totali: ${totalMatches}`);
        console.log(`- Vincitori dichiarati: ${winners.length}`);
    }

    updateStats();

    // Easter egg: click multipli sul titolo
    let clickCount = 0;
    const title = document.querySelector('h1');
    
    title.addEventListener('click', function() {
        clickCount++;
        if (clickCount === 5) {
            this.style.transform = 'rotate(360deg)';
            this.style.transition = 'transform 1s';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
                clickCount = 0;
            }, 1000);
        }
    });

    // Aggiungi tooltip per i vincitori (opzionale)
    const winnerTeams = document.querySelectorAll('.team.winner');
    winnerTeams.forEach(team => {
        team.setAttribute('title', '🏆 Vincitore!');
    });

    // Funzione per evidenziare il percorso di una merendina (da implementare se necessario)
    function highlightPath(snackName) {
        // Funzionalità futura per tracciare il percorso di una merendina attraverso il torneo
        console.log(`Tracking path for: ${snackName}`);
    }

    // Log di benvenuto nella console
    console.log('🍫 Benvenuto al Torneo delle Merendine! 🍫');
    console.log('Che vinca la merendina migliore!');
});

// Aggiungi CSS per l'animazione pulse
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);