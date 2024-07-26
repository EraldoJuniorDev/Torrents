const key = 'eraldo';
const games = [];
let gameId = 0;
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
const gameMinimumRequirements = document.getElementById('gameminimumrequirements');
gameMinimumRequirements.addEventListener('submit', handleSubmit);
const gameRecommendedRequirements = document.getElementById('gamerecommendedrequirements');
gameRecommendedRequirements.addEventListener('submit', handleSubmit);
listAllGames();
openAddMenu();
darkTheme();
addExtraLink();
SlidesModal();
slideOptions();

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
    const typeRequiredGraphicsCard = document.getElementById(
        'requiredgraphicscard'
    ).value;
    const typeRequiredCPU = document.getElementById('requiredcpu').value;
    const typeRequiredOS = document.getElementById('requiredos').value;

    const typeRecommendedRamMemory =
        document.getElementById('recommendedram').value;
    const typeRecommendedGraphicsCard = document.getElementById(
        'recommendedgraphicscard'
    ).value;
    const typeRecommendedCPU = document.getElementById('recommendedcpu').value;
    const typeRecommendedOS = document.getElementById('recommendedos').value;

    const game = {
        id: 0,
        frontImg,
        title,
        releaseDate,
        developerName,
        genre,
        fileSize,
        typeRequiredRamMemory,
        typeRequiredGraphicsCard,
        typeRequiredCPU,
        typeRequiredOS,
        buttonTorrentLink,
        buttonExtraLink,
        isShowExtraLink: false,
        typeRecommendedRamMemory,
        typeRecommendedGraphicsCard,
        typeRecommendedCPU,
        typeRecommendedOS,
    };

    game.id = gameId++;
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

    return listGames.map(game => addCard(game));
}

// Função de Gerar um Jogo

function addCard({
    id,
    frontImg,
    title,
    releaseDate,
    developerName,
    genre,
    fileSize,
    typeRequiredRamMemory,
    typeRequiredGraphicsCard,
    typeRequiredCPU,
    typeRequiredOS,
    buttonTorrentLink,
    buttonExtraLink,
    isShowExtraLink = false,
    typeRecommendedRamMemory,
    typeRecommendedGraphicsCard,
    typeRecommendedCPU,
    typeRecommendedOS,
}) {
    const mainContent = document.getElementById('mainContent');
    const divMain = document.createElement('div');

    const divCard = document.createElement('div');

    //Card Front

    const divCardFront = document.createElement('div');
    const divCardFrontImg = document.createElement('img');

    //Card Back

    const divCardBack = document.createElement('div');

    //Card Back Descrição

    const divCardBackDescriptionContent = document.createElement('div');

    const deleteIcon = document.createElement('i');
    const deleteGame = document.createElement('button');

    const divCardBackDescriptionTitle = document.createElement('h1');
    const divCardBackDescriptionRelease = document.createElement('h3');
    const divCardBackDescriptionReleaseDate = document.createElement('p');

    const divCardBackDescriptionDeveloper = document.createElement('h3');
    const divCardBackDescriptionDeveloperName = document.createElement('p');

    const divCardBackDescriptionGenreType = document.createElement('h3');
    const divCardBackDescriptionGenre = document.createElement('p');

    const divCardBackDescriptionSize = document.createElement('h3');
    const divCardBackDescriptionFileSize = document.createElement('p');

    const divCardBackButtonTorrentLink = document.createElement('a');
    const divCardBackButtonTorrent = document.createElement('button');

    const divCardBackButtonExtra = document.createElement('a');
    const divCardBackButtonExtraLink = document.createElement('button');

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

    // Tudo da divMain
    divMain.className = 'gameContent';
    divMain.id = id;

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



    // Tudo da divCardBackRequiredContent

    
    deleteIcon.onclick = function () {
        deleteGameModal();
    }
    deleteIcon.className = 'bi bi-x-circle';
    deleteGame.className = 'delete_btn';
    deleteGame.id = 'deleteGameButton';

    divCardBackDescriptionContent.className = 'description';

    divCardBackDescriptionTitle.innerText = title;
    divCardBackDescriptionRelease.innerText = 'Lançamento:';
    divCardBackDescriptionReleaseDate.innerText = releaseDate;
    divCardBackDescriptionDeveloper.innerText = 'Desenvolvedora:';
    divCardBackDescriptionDeveloperName.innerText = developerName;
    divCardBackDescriptionGenreType.innerText = 'Gênero:';
    divCardBackDescriptionGenre.innerText = genre;
    divCardBackDescriptionSize.innerText = 'Tamanho:';
    divCardBackDescriptionFileSize.innerText = fileSize;

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
    
    divCardBackDescriptionContent.appendChild(divCardBackDescriptionTitle);
    divCardBackDescriptionContent.appendChild(divCardBackDescriptionRelease);
    divCardBackDescriptionContent.appendChild(divCardBackDescriptionReleaseDate);

    divCardBackDescriptionContent.appendChild(divCardBackDescriptionDeveloper);
    divCardBackDescriptionContent.appendChild(divCardBackDescriptionDeveloperName);

    divCardBackDescriptionContent.appendChild(divCardBackDescriptionGenreType);
    divCardBackDescriptionContent.appendChild(divCardBackDescriptionGenre);

    divCardBackDescriptionContent.appendChild(divCardBackDescriptionSize);
    divCardBackDescriptionContent.appendChild(divCardBackDescriptionFileSize);

    divCardBackDescriptionContent.appendChild(divCardBackButtonTorrentLink);
    divCardBackButtonTorrentLink.appendChild(divCardBackButtonTorrent);

    if (isShowExtraLink) {
        divCardBackDescriptionContent.appendChild(divCardBackButtonExtraLink);
        divCardBackButtonExtraLink.appendChild(divCardBackButtonExtra);
    }

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
    divCardBackRecommendedContent.appendChild(
        divCardBackTypeRecommendedRamMemory
    );

    divCardBackRecommendedContent.appendChild(divCardBackRecommendedGraphicsCard);
    divCardBackRecommendedContent.appendChild(
        divCardBackTypeRecommendedGraphicsCard
    );

    divCardBackRecommendedContent.appendChild(divCardBackRecommendedCPU);
    divCardBackRecommendedContent.appendChild(divCardBackTypeRecommendedCPU);

    divCardBackRecommendedContent.appendChild(divCardBackRecommendedOS);
    divCardBackRecommendedContent.appendChild(divCardBackTypeRecommendedOS);

    divCard.appendChild(divCardFront);
    divCardFront.appendChild(divCardFrontImg);

    divCard.appendChild(divCardBack);
    divCardBack.appendChild(deleteGame);
    deleteGame.appendChild(deleteIcon);
    divCardBack.appendChild(divCardBackDescriptionContent);
    divCardBack.appendChild(divCardBackRequiredContent);
    divCardBack.appendChild(divCardBackRecommendedContent);

    divMain.appendChild(divCard);
    mainContent.appendChild(divMain);
}

const deleteButtons = document.querySelectorAll('.delete_btn');
const modalK = document.querySelector('.deleteGameModalConfirmation');

// deleteButtons.forEach(button => {
//     button.addEventListener('click', ev => {
//         const cardId = ev.currentTarget.closest('.gameContent').id;
//         handleDeleteGame(cardId);
//     });
// });

function handleDeleteGame(id) {
    const card = document.getElementById(id);
    card.remove();

    let listGames = JSON.parse(localStorage.getItem(key));
    listGames = listGames.filter(game => game.id !== parseInt(id));
    localStorage.setItem(key, JSON.stringify(listGames));
}

// Função de abrir Janela de Adição de Jogos

function openAddMenu() {
    const modalOpenBtn = document.querySelector('#open_modal');
    const modalCloseBtn = document.querySelector('.bi-x-circle-fill');
    const modal = document.querySelector('.addGameModal');

    modalOpenBtn.addEventListener('click', () => {
        modal.show();
    });

    modalCloseBtn.addEventListener('click', () => {
        modal.close();
    });
};

// Função do Menu Dropdown

function menuDropdown() {
    if (dropdown_items.style.display == 'flex') {
        dropdown_items.style.display = 'none';
    } else {
        dropdown_items.style.display = 'flex';
    }
}

// Função do Modo Escuro

function darkTheme() {
    const checkbox = document.getElementById('checkbox');
    const dropDownMenuItem = document.querySelectorAll('.dropdown_item>a');
    const inputList = document.querySelectorAll('#form input[type=text]');

    checkbox.addEventListener('change', () => {
        document.querySelector('body').classList.toggle('dark');
        document.querySelector('header').classList.toggle('dark');
        document.querySelector('.search_input .search_box').classList.toggle('dark');
        // document.querySelector('.deleteGameModalWindow').classList.toggle('light');
        // document.querySelector('.gameModalClosureContainer').classList.toggle('light');
        document.querySelector('.add_game').classList.toggle('light_dark');
        document.querySelector('#open_modal span').classList.toggle('white_only_font')
        document.querySelector('.card_back').classList.toggle('dark');
        document.querySelector('dialog div').classList.toggle('light');

        dropDownMenuItem.forEach(menuItem =>
            menuItem.classList.toggle('white_font'));
        inputList.forEach(input =>
            input.classList.toggle('white_only_font'));
    });
};

// Função de Adicionar Link/Botão de Download Extra

function addExtraLink() {
    const extraLinkYesButton = document.getElementById('yesbtn');
    const extraLinkNoButton = document.getElementById('nobtn');
    const labelExtraLink = document.querySelector('div .select_extra_download');

    extraLinkYesButton.addEventListener('click', () => {
        isShowExtraLink = true;
        if (extraLinkYesButton.checked) {
            labelExtraLink.style.display = 'flex';
        }
    });

    extraLinkNoButton.addEventListener('click', () => {
        isShowExtraLink = false;
        if (extraLinkNoButton.checked) {
            labelExtraLink.style.display = 'none';
        }
    });
};

// Função dos Slides do Modal

function SlidesModal() {
    window.addEventListener('load', () => {
        const slideGameOptions = document.querySelector('.game_options');
        const sliderOption0 = document.querySelector('#option0');
        if (sliderOption0.checked) {
            slideGameOptions.style.left = '305px';
        }
    })
};


function slideOptions() {

    window.addEventListener('change', () => {
        const slideGameOptions = document.querySelector('.game_options');
        const sliderOption0 = document.querySelector('#option0');
        const sliderOption1 = document.querySelector('#option1');

        if (sliderOption0.checked) {
            slideGameOptions.style.left = '305px';
        }
        else if (sliderOption1.checked) {
            slideGameOptions.style.left = '0';
        }
        else {
            slideGameOptions.style.left = '-305px';
        }
    })
};

//Função do Modal de Confirmação dos Jogos

function deleteGameModal() {
    const bodyContainer = document.querySelector('body');
    const deleteButtons = document.querySelectorAll('.delete_btn');
    const gameModalContainer = document.createElement('dialog');
    const deleteGameModalWindow = document.createElement('div');
    const deleteGameModalHeaderContainer = document.createElement('div');
    const deleteGameModalIcon = document.createElement('i');
    const deleteGameModalTitle = document.createElement('p');
    const deleteGameModal = document.createElement('i');
    const deleteGameModalMessage = document.createElement('p');
    const deleteButtonsContainer = document.createElement('div');
    const deleteButtonYes = document.createElement('button');
    const deleteButtonNo = document.createElement('button');

    //Tudo do Modal de Exclusão de Jogos

    gameModalContainer.className = 'deleteGameModal';
    deleteGameModalWindow.className = 'deleteGameModalWindow light dark';
    deleteGameModalHeaderContainer.className = 'deleteGameModalHeaderContainer';
    deleteGameModalIcon.innerText = '*';
    deleteGameModalTitle.innerText = 'Deletar Jogo:';
    deleteGameModalTitle.className = 'deleteGameModalTitle';
    deleteGameModal.className = 'closeDeleteGameModal bi bi-x-circle';
    deleteGameModal.innerText = 'X';
    deleteGameModalMessage.innerText = 'Você deseja realmente excluir esse jogo?';
    deleteGameModalMessage.className = 'deleteGameModalMessage light_font dark_font';
    deleteButtonsContainer.className = 'deleteButtonsContainer';
    deleteButtonYes.onclick = function () {
        gameModalClosure(modalArr[0]);
    }
    deleteButtonYes.id = 'deleteYesButton';
    deleteButtonYes.innerText = 'Sim';
    deleteButtonNo.id = 'deleteNoButton'
    deleteButtonNo.innerText = 'Não';

    //Árvore dos Elementos

    deleteGameModalHeaderContainer.appendChild(deleteGameModalIcon);
    deleteGameModalHeaderContainer.appendChild(deleteGameModalTitle)
    deleteGameModalHeaderContainer.appendChild(deleteGameModal);
    deleteGameModalWindow.appendChild(deleteGameModalHeaderContainer);
    deleteGameModalWindow.appendChild(deleteGameModalMessage);
    deleteButtonsContainer.appendChild(deleteButtonYes);
    deleteButtonsContainer.appendChild(deleteButtonNo);
    deleteGameModalWindow.appendChild(deleteButtonsContainer)
    gameModalContainer.appendChild(deleteGameModalWindow);
    bodyContainer.appendChild(gameModalContainer);

    deleteButtons.forEach(button => {
        button.addEventListener('click', ev => {
            gameModalContainer.show();
        });
    });

    deleteGameModal.addEventListener('click', () => {
        gameModalContainer.remove();
    });

    deleteButtonYes.addEventListener('click', () => {
        const closureModal = document.querySelector('.gameModalContainer');
        gameModalContainer.remove();
        closureModal.show();
    });

    deleteButtonNo.addEventListener('click', () => {
        gameModalContainer.remove();
    });
};

//Função do Modal de Finalização

function gameModalClosure(
    {
        modalIcon,
        modalTitle,
        modalCloseButton,
        modalMessage
    }
) {
    const bodyContainer = document.querySelector('body');
    const gameModalContainer = document.createElement('dialog');
    const gameModalClosureWindow = document.createElement('div');
    const gameModalClosureContainer = document.createElement('div');
    const gameModalClosureIcon = document.createElement('i');
    const gameModalClosureTitle = document.createElement('p');
    const gameModalClosure = document.createElement('i');
    const gameModalClosureMessage = document.createElement('p');
    // const deleteButtonsContainer = document.createElement('div');
    const modalClosureButton = document.createElement('button');

    //Tudo do Modal de Exclusão de Jogos

    gameModalContainer.className = 'gameModalContainer';
    gameModalClosureWindow.className = 'gameModalClosureWindow light dark';
    gameModalClosureContainer.className = 'gameModalClosureContainer';
    gameModalClosureIcon.innerText = modalIcon;
    gameModalClosureTitle.innerText = modalTitle;
    gameModalClosureTitle.className = 'gameModalClosureTitle';
    gameModalClosure.className = 'gameModalClosure bi bi-x-circle';
    gameModalClosure.innerText = modalCloseButton;
    gameModalClosureMessage.innerText = modalMessage;
    gameModalClosureMessage.className = 'gameModalClosureMessage light_font dark_font';
    modalClosureButton.id = 'modalClosureButton'
    modalClosureButton.innerText = 'Fechar';

    //Árvore dos Elementos

    // closeDeleteGameModalClosureContainer.appendChild(closeDeleteGameModalClosureIcon);
    // closeDeleteGameModalClosureContainer.appendChild(closeDeleteGameModalClosureText)

    gameModalClosureContainer.appendChild(gameModalClosureIcon);
    gameModalClosureContainer.appendChild(gameModalClosureTitle);
    gameModalClosureContainer.appendChild(gameModalClosure);
    gameModalClosureWindow.appendChild(gameModalClosureContainer);
    gameModalClosureWindow.appendChild(gameModalClosureMessage);
    gameModalClosureWindow.appendChild(modalClosureButton);
    gameModalContainer.appendChild(gameModalClosureWindow);
    bodyContainer.appendChild(gameModalContainer);

    modalClosureButton.addEventListener('click', () => {
        gameModalContainer.remove();
    });

    gameModalClosure.addEventListener('click', () => {
        gameModalContainer.remove();
    })
};

//Array de Objetos do Modal de Exclusão

const modalArr = [
    {
        modalIcon: '*',
        modalTitle: 'Aviso:',
        modalCloseButton: 'X',
        modalMessage: 'Seu jogo foi excluído com sucesso.'
    },
    {
        modalIcon: '*',
        modalTitle: 'Aviso:',
        modalCloseButton: 'X',
        modalMessage: 'Seu jogo foi adicionado com sucesso.'
    }
]

function teste() {
    deleteButtons.forEach(button => {
        button.addEventListener('click', ev => {
            const cardId = ev.currentTarget.closest('.gameContent').id;
            handleDeleteGame(cardId);
        });
    });

    function handleDeleteGame(id) {
        const card = document.getElementById(id);
        card.remove();

        let listGames = JSON.parse(localStorage.getItem(key));
        listGames = listGames.filter(game => game.id !== parseInt(id));
        localStorage.setItem(key, JSON.stringify(listGames));
    }
}