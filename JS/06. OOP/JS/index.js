import Games from "./games.module.js";
import Details from "./details.module.js";

const loader = document.querySelector('.loading');
let link = document.querySelector('header .navbar a.active');

const fetch = async () => {
    const wrapper = document.querySelector('.navbar-collapse');
    await Games.searchGames(loader, 'mmorpg');

    wrapper.addEventListener('click', async (e) => {
        link.classList.remove('active');
        link = e.target;
        link.classList.add('active');
        const category = link.innerHTML;
        await Games.searchGames(loader, category);
    });
}

const fetchDetails = async () => {
    const wrapper = document.querySelector('.content section .row');

    wrapper.addEventListener('click', async(e) => {
        const card = e.target.closest('.card');
        await Details.renderDetails(card.dataset.id, loader);
    });

    await Details.closeDetails();
}

fetch();
fetchDetails();