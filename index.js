const apiURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players/`;
const main = document.getElementById(`rosterDetails`);
console.log(main);

const getAllPuppies = async () => {
    const response = await fetch(apiURL);
    const result = await response.json();
    renderAllPuppies(result);
}
const getSinglePuppy = async (name) => {
    const response = await fetch(`${apiURL}${name}`);
    const singlePuppyInfo = await response.json();
    renderSinglePuppy(singlePuppyInfo);
    console.log(singlePuppyInfo);
}
const renderAllPuppies = (listOfPuppies) => {
    main.innerHTML = ``;
    const h2 = document.createElement(`h2`);
    h2.innerText = `Puppy Roster`;
    h2.style.fontSize = '100px';
    main.appendChild(h2);

    listOfPuppies.data.players.forEach((singlePuppy) => {
        const puppyContainer = document.createElement('div');
        puppyContainer.classList.add('puppy-container');

        const img = document.createElement('img');
        img.src = singlePuppy.imageUrl;
        img.classList.add('puppy-img');

        const name = document.createElement('h2');
        name.innerText = singlePuppy.name;
        name.addEventListener('click', () => {
            getSinglePuppy(singlePuppy.name);
        });

        img.addEventListener('click', () => {
            getSinglePuppy(singlePuppy.name);
        });

        puppyContainer.appendChild(img);
        puppyContainer.appendChild(name);

        main.appendChild(puppyContainer);
    });
};

const renderSinglePuppy = (singlePuppy) => {
    console.log('Rendering single puppy:', singlePuppy);
    main.innerHTML = ``;

    const h2 = document.createElement(`h2`);
    h2.innerText = `Puppy Details`;
    main.appendChild(h2);

    const puppyContainer = document.createElement('div');
    puppyContainer.classList.add('puppy-container');

    const img = document.createElement('img');
    img.src = singlePuppy.imageUrl;
    img.classList.add('puppy-img');

    const name = document.createElement('h2');
    name.innerText = singlePuppy.name;

    name.addEventListener('click', () => {
        getSinglePuppy(singlePuppy.name);
    });

    img.addEventListener('click', () => {
        getSinglePuppy(singlePuppy.name);
    });

    const breed = document.createElement('p');
    breed.innerText = `Breed: ${singlePuppy.breed}`;

    const status = document.createElement('p');
    status.innerText = `Status: ${singlePuppy.status}`;

    puppyContainer.appendChild(img);
    puppyContainer.appendChild(name);
    puppyContainer.appendChild(breed);
    puppyContainer.appendChild(status);

    main.appendChild(puppyContainer);

    const backButton = document.createElement('button');
    backButton.id = 'back-button';
    backButton.innerText = 'Go Back To All Puppies';
    backButton.addEventListener('click', getAllPuppies);
    main.appendChild(backButton);
};

getAllPuppies();
