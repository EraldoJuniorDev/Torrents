const key = 'eraldo';
const games = [];
let gameId = 0;
const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);
form.addEventListener('reset', loginHandleSubmit);
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', loginHandleReset)
const gameMinimumRequirements = document.getElementById('gameminimumrequirements');
gameMinimumRequirements.addEventListener('submit', handleSubmit);
const gameRecommendedRequirements = document.getElementById('gamerecommendedrequirements');
gameRecommendedRequirements.addEventListener('submit', handleSubmit);
const loginForm = document.querySelector('.loginContent');
loginForm.addEventListener('submit', loginHandleSubmit);

listAllGames();
openAddMenu();
darkTheme();
addExtraLink();
slidesModal();
slideOptions();
closeModals();

function loginHandleSubmit(ev) {
    ev.preventDefault();
}

function loginHandleReset() {
    const addGameModal = document.querySelector('.addGameModal');
    const loginSubmited = document.querySelector('.gameModalContainer');

    gameModalClosure(modalArr[3])

    // if(loginSubmited == null){
    //     addGameModal.close()
    // }else{
    //     addGameModal.show();
    // }

    while (loginSubmited !== null) {
        addGameModal.show()
    }
}

// Função de Adicionar um Jogo

function handleSubmit(ev) {
    gameModalClosure(modalArr[1]);
    const addGameModal = document.querySelector('.addGameModal');
    const loginSubmited = document.querySelector('.gameModalContainer');

    if (loginSubmited !== null) {
        addGameModal.close()
    }

    ev.preventDefault();
    const frontImg = document.getElementById('frontimage').value;
    const title = document.getElementById('gametitle').value;
    const releaseDate = document.getElementById('gamerelease').value;
    const developerName = document.getElementById('gamedeveloper').value;
    const genre = document.getElementById('gamegenre').value;
    const fileSize = document.getElementById('gamesize').value;
    const buttonTorrentLink = document.getElementById('gamelink').value;
    const buttonExtraTitle = document.getElementById('linkextrabutton').value;
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
        buttonExtraTitle,
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
    buttonExtraTitle,
    buttonExtraLink,
    isShowExtraLink,
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

    const settings = document.createElement('div');
    const settingsButtonFloat = document.createElement('abbr');
    const settingsButton = document.createElement('span');
    const settingsOptions = document.createElement('div');
    const favorite = document.createElement('span');
    const deleteGame = document.createElement('span');
    const editGame = document.createElement('span');

    //Card Back

    const divCardBack = document.createElement('div');

    const line = document.createElement('hr');
    const lineplus = document.createElement('hr');


    //Card Back Descrição

    const divCardBackDescriptionContent = document.createElement('div');


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

    const divCardBackButtonExtraLink = document.createElement('a');
    const divCardBackButtonExtra = document.createElement('button');

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

    // Tudo da divCardFront
    divCardFront.className = 'card_front';
    divCardFrontImg.src = frontImg;
    divCardFrontImg.className = 'game_cover';

    settings.className = 'settings';
    settingsButtonFloat.title = 'Opções';
    settingsButton.className = 'settingsButton white_font black_font';
    settingsButton.innerText = '...';
    settingsOptions.className = 'settingsOptions';
    favorite.innerText = 'Favoritar';
    favorite.className = 'settingsOption favorite white_font black_font';
    deleteGame.innerHTML = 'Excluir Jogo';
    deleteGame.className = 'settingsOption deleteGame white_font black_font';
    deleteGame.onclick = deleteGameModal;
    editGame.innerText = 'Editar Jogo';
    editGame.className = 'settingsOption editGame white_font black_font';

    // Tudo da divCardBack
    divCardBack.className = 'card_back';

    // Tudo da divCardBackRequiredContent


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
    divCardBackButtonExtra.innerText = buttonExtraTitle;
    divCardBackButtonExtra.className = 'extra';

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
    divCardFront.appendChild(settings);
    settings.appendChild(settingsButtonFloat);
    settingsButtonFloat.appendChild(settingsButton);
    settings.appendChild(settingsOptions)
    settingsOptions.appendChild(favorite);
    settingsOptions.appendChild(deleteGame);
    settingsOptions.appendChild(editGame);

    divCard.appendChild(divCardBack);
    divCardBack.appendChild(divCardBackDescriptionContent);
    divCardBack.appendChild(line);
    divCardBack.appendChild(divCardBackRequiredContent);
    divCardBack.appendChild(lineplus);
    divCardBack.appendChild(divCardBackRecommendedContent);

    divMain.appendChild(divCard);
    mainContent.appendChild(divMain);
}

//Função de Exclusão de Jogos

// const deleteButtons = document.querySelectorAll('.deleteGame');

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
    const modal = document.querySelector('.addGameModal');

    modalOpenBtn.addEventListener('click', () => {
        modal.show();
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
    const settingsButton = document.querySelectorAll('.settingsButton');
    const settingsOption = document.querySelectorAll('.settingsOption');

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
        settingsButton.forEach(settingButton =>
            settingButton.classList.toggle('white_font')
        )
        settingsOption.forEach(option =>
            option.classList.toggle('white_font'));
    });
};

//Função de Confirugações de Cards

function handleSettings() {

    const settingsButton = document.querySelectorAll('.settingsButton');
    const settingsOptions = document.querySelectorAll('.settingsOptions');
    const modal = document.querySelector('.deleteGameModal');

    settingsButton.forEach(button => {
        button.addEventListener('click', () => {
            settingsOptions.forEach(options => {
                if (options.style.display == 'flex') {
                    options.style.display = 'none'
                } else {
                    options.style.display = 'flex'
                }
            })
        })
    })

};

handleSettings();

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

function slidesModal() {
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


//Array de Objetos do Modal de Exclusão

const modalArr = [
    {
        modalIcon: '*',
        modalTitle: 'Aviso:',
        modalMessage: 'Seu jogo foi excluído com sucesso.'
    },
    {
        modalIcon: '*',
        modalTitle: 'Aviso:',
        modalMessage: 'Seu jogo foi adicionado com sucesso.'
    },
    {
        modalIcon: '*',
        modalTitle: 'Bem-vindo',
        modalMessage: 'Seja muito bem-vindo!'
    },
    {
        modalIcon: '*',
        modalTitle: 'Aviso:',
        modalMessage: 'Todos os dados existentes foram limpos.'
    }
]

//Função do Modal de Confirmação dos Jogos

function deleteGameModal() {
    const bodyContainer = document.querySelector('body');
    const deleteButton = document.querySelectorAll('.deleteGame');
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

    
    gameModalContainer.show();

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
        modalMessage
    }
) {
    // const addGameModal = document.querySelector('.addGameModal');

    // if(gameModalContainer.style.display == 'flex'){
    //     addGameModal.style.display = 'none'
    // }

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
    gameModalContainer.show();

    //Tudo do Modal de Exclusão de Jogos

    gameModalContainer.className = 'gameModalContainer';
    gameModalClosureWindow.className = 'gameModalClosureWindow light dark';
    gameModalClosureContainer.className = 'gameModalClosureContainer';
    gameModalClosureIcon.innerText = modalIcon;
    gameModalClosureTitle.innerText = modalTitle;
    gameModalClosureTitle.className = 'gameModalClosureTitle';
    gameModalClosure.className = 'gameModalClosure bi bi-x-circle';
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

//Função de Fechamento dos Modais

function closeModals() {
    const closeButton = document.querySelectorAll('.bi-x-circle-fill');
    const modal = document.querySelectorAll('dialog');

    closeButton.forEach(closeIcon => {
        closeIcon.addEventListener('click', () => {
            modal.forEach(modal => {
                modal.close();
            }
            );
        })
    })
}

//Tudo da Função de Login

function openLogin() {
    const loginContainer = document.querySelector('.loginContainer');

    loginContainer.show();

}

//Array dos Usuários

const loginUsers = [
    {
        user: 'junin',
        pass: 'junin'
    },
    {
        user: 'ninho',
        pass: 'ninho'
    },
{
        user: 'txola',
        pass: 'txola'
    }
]

//Validação de Login

function handleLogin() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const addGame = document.querySelector('.add_game');
    const settingsOptions = document.querySelectorAll('.settings');
    const loginContainer = document.querySelector('.loginContainer');
    // const openLoginButton = document.querySelector('.openLoginButton');
    // const loginSubmited = document.querySelector('.gameModalContainer');
    const loginModal = function () {
        gameModalClosure(modalArr[2]);
    }
    const loginMessage = document.querySelector('.loginMessage');

    for(let i in loginUsers){
        if (username == loginUsers[i].user && password == loginUsers[i].pass) {
            loginContainer.close();
            loginModal();
            addGame.style.display = 'flex';
            settingsOptions.forEach(options =>
                {options.style.display = 'flex'}
            )
    
        } else if (username == '' || password == '') {
            loginMessage.style.display = 'flex';
            loginMessage.innerText = 'Nenhum campo pode estar vazio.';
        }
    
        else {
            loginMessage.style.display = 'flex';
            loginMessage.innerText = 'Usuário ou senha incorretos.'
        }
    }

}

// function login(){
//     const bodyContainer = document.querySelector('body');
//     const loginModal = document.createElement('dialog');
//     const loginForm = document.createElement('form');

//     const loginHeader = document.createElement('div');
//     const loginIcon = document.createElement('i');
//     const loginTitle = document.createElement('p');
//     const loginCloseButton = document.createElement('i');

//     const loginFieldset = document.createElement('fieldset');
//     const usernameLabel = document.createElement('label');
//     const usernameInput = document.createElement('input');
//     const passwordLabel = document.createElement('label');
//     const passwordInput = document.createElement('input');

//     const loginMessage = document.createElement('p');
//     const submitInput = document.createElement('input');

//     loginModal.className = 'LoginContainer';
//     loginForm.className = 'loginContent';
//     loginHeader.id = 'close_modal';
//     loginIcon.innerText = '*';
//     loginTitle.innerText = 'Login:';
//     loginCloseButton.className = 'bi bi-x-circle-fill';
//     loginFieldset.className = 'loginFieldset';
//     usernameLabel
// }