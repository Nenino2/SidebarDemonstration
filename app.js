const sidebar = document.getElementById('sidebar');
const btn = document.getElementById('btn');
const content = document.getElementById('content');
let sidebarVisible = false; /* assegniamo una variabile che indica se la sidebar è visibile (inizialmente no) */

/* quando il pulsante viene cliccato */
btn.addEventListener('click', () => {
    /* aggiungi la classe css visible alla sidebar */
    /* in questo modo verrà modificata la posizione della sidebar e verrà resa visibile*/
    /* visto che dal css abbiamo messo transition, verrà animata automaticamente */
    sidebar.classList.add('visible');

    /* appena la transizione viene completata e la sidebar è completamente visibile (dopo 0.5 secondi)
       imposta la variabile sidebarVisible su true */
    setTimeout(() => {
        sidebarVisible = true;
    }, 500);
});

/* quando il sito viene cliccato al di fuori della sidebar ed essa è aperta, chiudila!*/
content.addEventListener('click', () => {
    /* controlla se la sidebar è aperta */
    if (sidebarVisible === true) {
        /* allora chiudila */

        sidebarVisible = false; /* impostiamo la variabile sidebarVisible su false */

        /* rimuoviamo la classe css visible, così torna alla posizione iniziale*/
        sidebar.classList.remove('visible');
    }
});
