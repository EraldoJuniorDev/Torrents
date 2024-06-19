const key = 'eraldo';
const games = [];
const form = document.getElementById('form');
form.addEventListener("submit", handleSubmit);
const gameMinimumRequirements = document.getElementById('gameminimumrequirements');
gameMinimumRequirements.addEventListener("submit", handleSubmit);
const gameRecommendedRequirements = document.getElementById('gamerecommendedrequirements');
gameRecommendedRequirements.addEventListener("submit", handleSubmit);
listAllGames();

// Função de Adicionar um Jogo

function handleSubmit(ev) {
    ev.preventDefault();
    const frontImg = document.getElementById('frontimage').value;
    const title = document.getElementById('gametitle').value;
    const releaseDate = document.getElementById('gamerelease').value;
    const developerName = document.getElementById('gamedeveloper').value;
    const genre = document.getElementById('gamegenre').value;
    const fileSize = document.getElementById('gamesize').value;
    const buttonTorrentLink = document.getElementById('gamelink').value;
    const buttonExtraLink = document.getElementById('gamelinkextra').value;

    const typeRequiredRamMemory = document.getElementById('requiredram').value;
    const typeRequiredGraphicsCard = document.getElementById('requiredgraphicscard').value;
    const typeRequiredCPU = document.getElementById('requiredcpu').value;
    const typeRequiredOS = document.getElementById('requiredos').value;

    const typeRecommendedRamMemory = document.getElementById('recommendedram').value;
    const typeRecommendedGraphicsCard = document.getElementById('recommendedgraphicscard').value;
    const typeRecommendedCPU = document.getElementById('recommendedcpu').value;
    const typeRecommendedOS = document.getElementById('recommendedos').value;

    const game = { id : 0 , frontImg, title, releaseDate, developerName, genre, fileSize, typeRequiredRamMemory, typeRequiredGraphicsCard, typeRequiredCPU, typeRequiredOS, buttonTorrentLink, buttonExtraLink, isShowExtraLink, typeRecommendedRamMemory, typeRecommendedGraphicsCard, typeRecommendedCPU, typeRecommendedOS };
    games.push(game);
    saveGameData(game);
    addCard(game);
}

// Função de Salvar os Jogos no LocalStorage

function saveGameData(game) {
    let listGames = JSON.parse(localStorage.getItem(key));

    if (!listGames) {
        listGames = [];
    }

    listGames.push(game);
    localStorage.setItem(key, JSON.stringify(listGames));
}

// Função de Listar os Jogos

function listAllGames() {
    let listGames = JSON.parse(localStorage.getItem(key));

    if (!listGames) {
        listGames = [];
    }

    return listGames.map((game) => addCard(game));
}

// Função de Gerar um Jogo

function addCard({ id ,frontImg, title, releaseDate, developerName, genre, fileSize, typeRequiredRamMemory, typeRequiredGraphicsCard, typeRequiredCPU, typeRequiredOS, buttonTorrentLink, buttonExtraLink, isShowExtraLink = false, typeRecommendedRamMemory, typeRecommendedGraphicsCard, typeRecommendedCPU, typeRecommendedOS }) {
    const mainContent = document.getElementById('mainContent');
    const divMain = document.createElement('div');

    const divCard = document.createElement('div');

    //Card Front

    const divCardFront = document.createElement('div');
    const divCardFrontImg = document.createElement('img');

    //Card Back

    const divCardBack = document.createElement('div');

    //Card Back Requisítos Mínimos

    const divCardBackRequiredContent = document.createElement('div');
    const divCardBackMinimumRequirements = document.createElement('h1');
    const divCardBackRequiredRamMemory = document.createElement('h3');
    const divCardBackTypeRequiredRamMemory = document.createElement('p');

    const divCardBackRequiredGraphicsCard = document.createElement('h3');
    const divCardBackTypeRequiredGraphicsCard = document.createElement('p');


    const divCardBackRequiredCPU = document.createElement('h3');
    const divCardBackTypeRequiredCPU = document.createElement('p');

    const divCardBackRequiredOS = document.createElement('h3');
    const divCardBackTypeRequiredOS = document.createElement('p');

    //Card Back Requisítos Recomendados

    const divCardBackRecommendedContent = document.createElement('div');
    const divCardBackRecommendedRequirements = document.createElement('h1');
    const divCardBackRecommendedRamMemory = document.createElement('h3');
    const divCardBackTypeRecommendedRamMemory = document.createElement('p');

    const divCardBackRecommendedGraphicsCard = document.createElement('h3');
    const divCardBackTypeRecommendedGraphicsCard = document.createElement('p');


    const divCardBackRecommendedCPU = document.createElement('h3');
    const divCardBackTypeRecommendedCPU = document.createElement('p');

    const divCardBackRecommendedOS = document.createElement('h3');
    const divCardBackTypeRecommendedOS = document.createElement('p');

    //Card Overlay

    const divCardOverlay = document.createElement('div');
    const divCardOverlayContent = document.createElement('div');

    const deleteIcon = document.createElement('i');
    const deleteGame = document.createElement('button');

    const divCardOverlayTitle = document.createElement('h1');
    const divCardOverlayRelease = document.createElement('h3');
    const divCardOverlayReleaseDate = document.createElement('p');

    const divCardOverlayDeveloper = document.createElement('h3');
    const divCardOverlayDeveloperName = document.createElement('p');


    const divCardOverlayGenreType = document.createElement('h3');
    const divCardOverlayGenre = document.createElement('p');

    const divCardOverlaySize = document.createElement('h3');
    const divCardOverlayFileSize = document.createElement('p');



    const divCardBackButtonTorrentLink = document.createElement('a');
    const divCardBackButtonTorrent = document.createElement('button');

    const divCardBackButtonExtra = document.createElement('a');
    const divCardBackButtonExtraLink = document.createElement('button');

    // Tudo da divMain
    divMain.className = 'gameContent';
    divMain.addEventListener('click', (ev) => deleteGameButton(ev.currentTarget));

    // Tudo da divCard
    divCard.className = 'card';
    divCard.id = 'card';
    divCard.tagName = 'card';
    // divCard.addEventListener('click', (ev) => flipCard(ev.currentTarget));

    // Tudo da divCardFront
    divCardFront.className = 'card_front';
    divCardFrontImg.src = frontImg;
    divCardFrontImg.className = 'game_cover';

    // Tudo da divCardBack
    divCardBack.className = 'card_back';

    // Tudo da divCardOverlay
    divCardOverlay.className = 'card_overlay';
  


    // Tudo da divCardBackRequiredContent
    divCardBackRequiredContent.className = 'minimumrequirements';
    divCardBackMinimumRequirements.innerText = 'Requisitos Mínimos:';
    divCardBackRequiredRamMemory.innerText = 'RAM:';
    divCardBackTypeRequiredRamMemory.innerText = typeRequiredRamMemory;
    divCardBackRequiredGraphicsCard.innerText = 'Placa de Vídeo:';
    divCardBackTypeRequiredGraphicsCard.innerText = typeRequiredGraphicsCard;
    divCardBackRequiredCPU.innerText = 'Processador:';
    divCardBackTypeRequiredCPU.innerText = typeRequiredCPU;
    divCardBackRequiredOS.innerText = 'Sistema Operacional:';
    divCardBackTypeRequiredOS.innerText = typeRequiredOS;
    divCardBackButtonTorrentLink.href = buttonTorrentLink;
    divCardBackButtonTorrent.innerText = 'Download';
    divCardBackButtonExtraLink.href = buttonExtraLink;
    divCardBackButtonExtraLink.innerText = 'Updater';
    divCardBackButtonExtraLink.className = 'extra';

    divCardBackRecommendedContent.className = 'recommendedrequirements';
    divCardBackRecommendedRequirements.innerText = 'Requisitos Recomendados:';
    divCardBackRecommendedRamMemory.innerText = 'Memória RAM Recomendado:';
    divCardBackTypeRecommendedRamMemory.innerText = typeRecommendedRamMemory;
    divCardBackRecommendedGraphicsCard.innerText = 'Placa de Vídeo Recomendado:';
    divCardBackTypeRecommendedGraphicsCard.innerText = typeRecommendedGraphicsCard;
    divCardBackRecommendedCPU.innerText = 'Processador Recomendado:';
    divCardBackTypeRecommendedCPU.innerText = typeRecommendedCPU;
    divCardBackRecommendedOS.innerText = 'Sistema Operacional Recomendado:';
    divCardBackTypeRecommendedOS.innerText = typeRecommendedOS;

    // Tudo da divCardOverlayContent
    divCardOverlayContent.className = 'description';
    deleteIcon.className = 'bi bi-x-circle';
    deleteGame.className = 'delete_btn';
    deleteGame.id = 'deleteGameButton'
    divCardOverlayTitle.innerText = title;
    divCardOverlayRelease.innerText = 'Lançamento:';
    divCardOverlayReleaseDate.innerText = releaseDate;
    divCardOverlayDeveloper.innerText = 'Desenvolvedora:';
    divCardOverlayDeveloperName.innerText = developerName;
    divCardOverlayGenreType.innerText = 'Gênero:';
    divCardOverlayGenre.innerText = genre;
    divCardOverlaySize.innerText = 'Tamanho:';
    divCardOverlayFileSize.innerText = fileSize;


    deleteGame.appendChild(deleteIcon);
    divCardOverlayContent.appendChild(deleteGame);

    divCardOverlayContent.appendChild(divCardOverlayTitle);
    divCardOverlayContent.appendChild(divCardOverlayRelease);
    divCardOverlayContent.appendChild(divCardOverlayReleaseDate);

    divCardOverlayContent.appendChild(divCardOverlayDeveloper);
    divCardOverlayContent.appendChild(divCardOverlayDeveloperName);

    divCardOverlayContent.appendChild(divCardOverlayGenreType);
    divCardOverlayContent.appendChild(divCardOverlayGenre);

    divCardOverlayContent.appendChild(divCardOverlaySize);
    divCardOverlayContent.appendChild(divCardOverlayFileSize);

    divCardOverlayContent.appendChild(divCardBackButtonTorrentLink);
    divCardBackButtonTorrentLink.appendChild(divCardBackButtonTorrent);



    if (isShowExtraLink) {
        divCardOverlayContent.appendChild(divCardBackButtonExtraLink);
        divCardBackButtonExtraLink.appendChild(divCardBackButtonExtra);
    }

    divCardOverlay.appendChild(divCardOverlayContent);
    divCard.appendChild(divCardOverlay);
    divCardBack.appendChild(divCardBackRequiredContent);
    divCardBack.appendChild(divCardBackRecommendedContent);
    divCard.appendChild(divCardBack);
    divCardFront.appendChild(divCardFrontImg);
    divCard.appendChild(divCardFront);
    divMain.appendChild(divCard);
    mainContent.appendChild(divMain);

    divCardBackRequiredContent.appendChild(divCardBackMinimumRequirements);
    divCardBackRequiredContent.appendChild(divCardBackRequiredRamMemory);
    divCardBackRequiredContent.appendChild(divCardBackTypeRequiredRamMemory);

    divCardBackRequiredContent.appendChild(divCardBackRequiredGraphicsCard);
    divCardBackRequiredContent.appendChild(divCardBackTypeRequiredGraphicsCard);

    divCardBackRequiredContent.appendChild(divCardBackRequiredCPU);
    divCardBackRequiredContent.appendChild(divCardBackTypeRequiredCPU);

    divCardBackRequiredContent.appendChild(divCardBackRequiredOS);
    divCardBackRequiredContent.appendChild(divCardBackTypeRequiredOS);

    divCardBackRecommendedContent.appendChild(divCardBackRecommendedRequirements);
    divCardBackRecommendedContent.appendChild(divCardBackRecommendedRamMemory);
    divCardBackRecommendedContent.appendChild(divCardBackTypeRecommendedRamMemory);

    divCardBackRecommendedContent.appendChild(divCardBackRecommendedGraphicsCard);
    divCardBackRecommendedContent.appendChild(divCardBackTypeRecommendedGraphicsCard);

    divCardBackRecommendedContent.appendChild(divCardBackRecommendedCPU);
    divCardBackRecommendedContent.appendChild(divCardBackTypeRecommendedCPU);

    divCardBackRecommendedContent.appendChild(divCardBackRecommendedOS);
    divCardBackRecommendedContent.appendChild(divCardBackTypeRecommendedOS);

    id = games.length +1; 

}



function deleteGameButton(card) {

    let listGames = JSON.parse(localStorage.getItem(key));

    if (!listGames) {
        listGames = [];
    }

    console.log(listGames)
    // localStorage.setItem(key, JSON.stringify(listGames));
    // card.remove();
}

// Função de Virar Os Cards

// function flipCard(card) {
//     if (card.style.transform == 'rotateY(180deg)') {
//         card.style.transform = 'none'
//     }
//     else {
//         card.style.transform = 'rotateY(180deg)'
//     }
// }

// Função de abrir Janela de Adição de Jogos

const modalOpenBtn = document.querySelector("#open_modal")
const modalCloseBtn = document.querySelector(".bi-x-circle-fill")
const modal = document.querySelector("dialog")

modalOpenBtn.addEventListener('click', () => {
    modal.show();
})

modalCloseBtn.addEventListener('click', () => {
    modal.close();
})

// Função do Menu Dropdown

function menuDropdown() {
    if (dropdown_items.style.display == 'flex') {
        dropdown_items.style.display = 'none'
    } else {
        dropdown_items.style.display = 'flex'
    }
}

// Função de Mudança de Tema

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('header').classList.toggle('dark')
    document.querySelector('.search_btn').classList.toggle('dark')
    document.querySelector('.mode_label').classList.toggle('light_dark')
    // document.querySelector('.modal').classList.replace('light_dark', 'dark')
})

window.addEventListener('load', (event) => {
    document.querySelector('.modal').classList.add('light_dark')
})

// Função de Adicionar Link/Botão de Download Extra

const extraLinkYesButton = document.getElementById('yesbtn')
const extraLinkNoButton = document.getElementById('nobtn')
const labelExtraLink = document.querySelector("div .select_extra_download")

extraLinkYesButton.addEventListener('click', () => {
    isShowExtraLink = true
    if (extraLinkYesButton.checked) {
        labelExtraLink.style.display = 'flex'
    }
})

extraLinkNoButton.addEventListener('click', () => {
    isShowExtraLink = false
    if (extraLinkNoButton.checked) {
        labelExtraLink.style.display = 'none'
    }
})

// Função de Slide da Janela de dição de Jogos

// const sliderCheckbox = document.querySelector("input[name=select_slide_option]");


// sliderCheckbox.addEventListener('click', () => {
//     if (sliderCheckbox) {
//         alert('Hello World');
//     }
//     else {
//         alert("Checkbox is not checked...");
//     }
// });