import UI from './ui.module.js';

class Games {
    static async renderGames(category) {
        const games = await UI.fetchGames(category);
        const data = games.map((game) => {
            return `
                <div class="card-container col-sm-12 col-md-6 col-lg-3 col-xlg-3">
                    <div class="card w-100" data-id=${game.id}>
                        <div class="card-body py-4 px-4 d-flex justify-content-start flex-column" style="height: 330px">
                            <img src="${game.thumbnail}" class="card-img-top" alt="image" style="height: 150px; width: 100%">
                            <div class="d-flex justify-content-between align-items-center my-3">
                                <h2>${game.title}</h2>
                                <button class="btn-blue text-white">Free</button>
                            </div>
                            <p class="card-text text-center">${game.short_description}</p>
                        </div>
                        <div class="card-footer d-flex justify-content-between align-items-center border-top py-2 mt-3">
                            <a class="card-link btn-gray text-white">${game.genre}</a>
                            <a class="card-link btn-gray text-white">${game.platform}</a>
                        </div>
                    </div>
                </div>
                `
        }).join('');
        document.querySelector('section .row').innerHTML = data;
    }

    static async searchGames(loader, category) {
        loader.classList.remove('d-none');
        await this.renderGames(category);
        loader.classList.add('d-none');
    }
}

export default Games;