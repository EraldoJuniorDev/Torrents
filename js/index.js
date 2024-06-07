const key = 'eraldo';
const games = [];
const form = document.getElementById('form');
form.addEventListener("submit", handleSubmit);
const formBack = document.getElementById('formrequirements');
formBack.addEventListener("submit", handleSubmit);
listAllGames();

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

    // const typeRecommendedRamMemory = document.getElementById('recommendedram').value;
    // const typeRecommendedGraphicsCard = document.getElementById('recommendedgraphicscard').value;
    // const typeRecommendedCPU = document.getElementById('recommendedcpu').value;
    // const typeRecommendedOS = document.getElementById('recommendedos').value;

    const game = { frontImg, title, releaseDate, developerName, genre, fileSize, typeRequiredRamMemory, typeRequiredGraphicsCard, typeRequiredCPU, typeRequiredOS, buttonTorrentLink, buttonExtraLink, isShowExtraLink: false };
    games.push(game);
    saveGameData(game);
    addCard(game);
}

function saveGameData(game) {
    let listGames = JSON.parse(localStorage.getItem(key));

    if (!listGames) {
        listGames = [];
    }

    listGames.push(game);
    localStorage.setItem(key, JSON.stringify(listGames));
}

function listAllGames() {
    const listGames = JSON.parse(localStorage.getItem(key));

    if (!listGames) {
        listGames = [];
    }

    return listGames.map((game) => addCard(game));
}

function addCard({ frontImg, title, releaseDate, developerName, genre, fileSize, typeRequiredRamMemory, typeRequiredGraphicsCard, typeRequiredCPU, typeRequiredOS, buttonTorrentLink, buttonExtraLink, isShowExtraLink = false }) {
    const mainContent = document.getElementById('mainContent');
    const divMain = document.createElement('div');

    const divCard = document.createElement('div');

    //Card Front

    const divCardFront = document.createElement('div');
    const divCardFrontImg = document.createElement('img');

    //Card Back Requisítos Mínimos

    const divCardBack = document.createElement('div');
    const divCardBackContent = document.createElement('div');
    const divCardBackMinimumRequirements = document.createElement('h1');
    const divCardBackRequiredRamMemory = document.createElement('h3');
    const divCardBackTypeRequiredRamMemory = document.createElement('p');

    const divCardBackRequiredGraphicsCard = document.createElement('h3');
    const divCardBackTypeRequiredGraphicsCard = document.createElement('p');


    const divCardBackRequiredCPU = document.createElement('h3');
    const divCardBackTypeRequiredCPU = document.createElement('p');

    const divCardBackRequiredOS = document.createElement('h3');
    const divCardBackTypeRequiredOS = document.createElement('p');

    const divCardBackButtonTorrentLink = document.createElement('a');
    const divCardBackButtonTorrent = document.createElement('button');

    const divCardBackButtonExtra = document.createElement('a');
    const divCardBackButtonExtraLink = document.createElement('button');

    //Card Back Requisítos Recomendados

    // const divCardBackRecommendedRequirements = document.createElement('h1');
    // const divCardBackRecommendedRamMemory = document.createElement('h3');
    // const divCardBackTypeRecommendedRamMemory = document.createElement('p');

    // const divCardBackRecommendedGraphicsCard = document.createElement('h3');
    // const divCardBackTypeRecommendedGraphicsCard = document.createElement('p');


    // const divCardBackRecommendedCPU = document.createElement('h3');
    // const divCardBackTypeRecommendedCPU = document.createElement('p');

    // const divCardBackRecommendedOS = document.createElement('h3');
    // const divCardBackTypeRecommendedOS = document.createElement('p');

    // const divCardBackButtonTorrentLink = document.createElement('a');
    // const divCardBackButtonTorrent = document.createElement('button');

    // const divCardBackButtonExtra = document.createElement('a');
    // const divCardBackButtonExtraLink = document.createElement('button');

    //Card Overlay

    const divCardOverlay = document.createElement('div');
    const divCardOverlayContent = document.createElement('div');
    const divCardOverlayTitle = document.createElement('h1');
    const divCardOverlayRelease = document.createElement('h3');
    const divCardOverlayReleaseDate = document.createElement('p');

    const divCardOverlayDeveloper = document.createElement('h3');
    const divCardOverlayDeveloperName = document.createElement('p');


    const divCardOverlayGenreType = document.createElement('h3');
    const divCardOverlayGenre = document.createElement('p');

    const divCardOverlaySize = document.createElement('h3');
    const divCardOverlayFileSize = document.createElement('p');

    // Tudo da divMain
    divMain.className = 'maincontainer';

    // Tudo da divCard
    divCard.className = 'card';
    divCard.id = 'card';
    divCard.tagName = 'card';
    divCard.addEventListener('click', (ev) => flipCard(ev.currentTarget));

    // Tudo da divCardFront
    divCardFront.className = 'card_front';
    divCardFrontImg.src = frontImg;
    divCardFrontImg.className = 'game_cover';

    // Tudo da divCardBack
    divCardBack.className = 'card_back';

    // Tudo da divCardOverlay
    divCardOverlay.className = 'card_overlay';


    // Tudo da divCardBackContent
    divCardBackContent.className = 'minimumrequirements';
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

    // divCardBackContent.className = 'recommendedrequirements';
    // divCardBackRecommendedRequirements.innerText = 'Requisitos Recomendados:';
    // divCardBackRecommendedRamMemory.innerText = 'Memória RAM Recomendado:';
    // divCardBackTypeRecommendedRamMemory.innerText = typeRecommendedRamMemory;
    // divCardBackRecommendedGraphicsCard.innerText = 'Placa de Vídeo Recomendado:';
    // divCardBackTypeRecommendedGraphicsCard.innerText = typeRecommendedGraphicsCard;
    // divCardBackRecommendedCPU.innerText = 'Processador Recomendado:';
    // divCardBackTypeRecommendedCPU.innerText = typeRecommendedCPU;
    // divCardBackRecommendedOS.innerText = 'Sistema Operacional Recomendado:';
    // divCardBackTypeRecommendedOS.innerText = typeRecommendedOS;
    // divCardBackButtonTorrentLink.href = buttonTorrentLink;
    // divCardBackButtonTorrent.innerText = 'Download';
    // divCardBackButtonExtraLink.href = buttonExtraLink;
    // divCardBackButtonExtraLink.innerText = 'Updater';
    // divCardBackButtonExtraLink.className = 'extra';

    // Tudo da divCardOverlayContent
    divCardOverlayContent.className = 'description';
    divCardOverlayTitle.innerText = title;
    divCardOverlayRelease.innerText = 'Lançamento:';
    divCardOverlayReleaseDate.innerText = releaseDate;
    divCardOverlayDeveloper.innerText = 'Desenvolvedora:';
    divCardOverlayDeveloperName.innerText = developerName;
    divCardOverlayGenreType.innerText = 'Gênero:';
    divCardOverlayGenre.innerText = genre;
    divCardOverlaySize.innerText = 'Tamanho:';
    divCardOverlayFileSize.innerText = fileSize;

    divCardOverlayContent.appendChild(divCardOverlayTitle);
    divCardOverlayContent.appendChild(divCardOverlayRelease);
    divCardOverlayContent.appendChild(divCardOverlayReleaseDate);

    divCardOverlayContent.appendChild(divCardOverlayDeveloper);
    divCardOverlayContent.appendChild(divCardOverlayDeveloperName);

    divCardOverlayContent.appendChild(divCardOverlayGenreType);
    divCardOverlayContent.appendChild(divCardOverlayGenre);

    divCardOverlayContent.appendChild(divCardOverlaySize);
    divCardOverlayContent.appendChild(divCardOverlayFileSize);

    divCardOverlay.appendChild(divCardOverlayContent);
    divCard.appendChild(divCardOverlay);
    divCardBack.appendChild(divCardBackContent);
    divCard.appendChild(divCardBack);
    divCardFront.appendChild(divCardFrontImg);
    divCard.appendChild(divCardFront);
    divMain.appendChild(divCard);
    mainContent.appendChild(divMain);

    divCardBackContent.appendChild(divCardBackMinimumRequirements);
    divCardBackContent.appendChild(divCardBackRequiredRamMemory);
    divCardBackContent.appendChild(divCardBackTypeRequiredRamMemory);

    divCardBackContent.appendChild(divCardBackRequiredGraphicsCard);
    divCardBackContent.appendChild(divCardBackTypeRequiredGraphicsCard);

    divCardBackContent.appendChild(divCardBackRequiredCPU);
    divCardBackContent.appendChild(divCardBackTypeRequiredCPU);

    divCardBackContent.appendChild(divCardBackRequiredOS);
    divCardBackContent.appendChild(divCardBackTypeRequiredOS);

    // divCardBackContent.appendChild(divCardBackRecommendedRequirements);
    // divCardBackContent.appendChild(divCardBackRecommendedRamMemory);
    // divCardBackContent.appendChild(divCardBackTypeRecommendedRamMemory);

    // divCardBackContent.appendChild(divCardBackRecommendedGraphicsCard);
    // divCardBackContent.appendChild(divCardBackTypeRecommendedGraphicsCard);

    // divCardBackContent.appendChild(divCardBackRecommendedCPU);
    // divCardBackContent.appendChild(divCardBackTypeRecommendedCPU);

    // divCardBackContent.appendChild(divCardBackRecommendedOS);
    // divCardBackContent.appendChild(divCardBackTypeRecommendedOS);

    divCardBackContent.appendChild(divCardBackButtonTorrentLink);
    divCardBackContent.appendChild(divCardBackButtonTorrent);

    if (isShowExtraLink) {
        divCardBackContent.appendChild(divCardBackButtonExtraLink);
        divCardBackContent.appendChild(divCardBackButtonExtra);
    }

}

// Botão de Adicionar Jogos

function sectionBtn() {
    if (formdescription.style.display == 'none')
        formdescription.style.display = 'flex'
    else {
        formdescription.style.display = 'none'
    }
}

// Botões de Opções do Form

function requirementsBtn() {
    if (formrequirements.style.display == 'flex')
        formrequirements.style.display = 'none'
    else {
        formrequirements.style.display = 'flex'
    }
}

// Função de Virar Os Cards

function flipCard(card) {
    if (card.style.transform == 'rotateY(180deg)') {
        card.style.transform = 'none'
    }
    else {
        card.style.transform = 'rotateY(180deg)'
    }
}

// Função de abrir o Menu de Adição

function openAddMenu() {
    const section = document.querySelector("section")
    if (form.style.display == 'flex') {
        form.style.display = 'none'
    } else {
        form.style.display = 'flex'
    }

    addbtn.style.transition = '0.2s'

    if (addbtn.style.transform == 'rotate(45deg)') {
        addbtn.style.transform = 'rotate(0deg)'
    }
    else {
        addbtn.style.transform = 'rotate(45deg)'
    }

    if (sectionbtn.style.display == 'flex') {
        sectionbtn.style.display = 'none'
    } else {
        sectionbtn.style.display = 'flex'
    }
}

function menuDropdown() {
    if (dropdown_items.style.display == 'flex') {
        dropdown_items.style.display = 'none'
    } else {
        dropdown_items.style.display = 'flex'
    }
}