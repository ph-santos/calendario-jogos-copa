function creatGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/images/icon-${player1}.svg" alt="Bandeira da Suíça">
        <span>${hour}</span>
        <img src="./assets/images/icon-${player2}.svg" alt="Bandeira de Camarões">
    </li>
    `
}

let delay = -0.4
function creatCard(date, day, games) {
    delay += 0.4
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>

        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector('#cards').innerHTML = 
    creatCard('23/11', 'Quarta', 
        creatGame('marrocos', '07:00', 'croacia') +
        creatGame('alemanha', '10:00', 'japao') +
        creatGame('belgica', '16:00', 'canada')
    ) +
    creatCard('24/11', 'Quinta', 
        creatGame('suica', '10:00', 'camaroes') +
        creatGame('brasil', '16:00', 'servia') +
        creatGame('portugal', '13:00', 'ghana')
    ) +
    creatCard('28/11', 'Segunda', 
        creatGame('koreasul', '10:00', 'ghana') +
        creatGame('brasil', '13:00', 'suica') +
        creatGame('portugal', '16:00', 'uruguai')
    ) +
    creatCard('02/12', 'Sexta', 
        creatGame('korea', '12:00', 'portugal') +
        creatGame('camaroes', '16:00', 'brasil') +
        creatGame('ghana', '12:00', 'Uruguai')
    ) 
    
    function changeColors() {
        document.body.classList.toggle('blue')
    }

    document.querySelector('body').addEventListener('click', changeColors)