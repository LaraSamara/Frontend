import UI from './ui.module.js';

class Details {
    static async renderDetails(id, loader) {
        const detail = await this.openDetails(id, loader);

        document.querySelector('.details .row').innerHTML = `
                <div class="col-4">
                    <img src="${detail.thumbnail}" alt="Image" width="100%">
                </div>
                <div class="col-8">
                    <h2 class="my-4">Title: <span>${detail.title}</span></h2>
                    <h3 class="my-4">Category: <span>${detail.genre}</span></h3>
                    <h3 class="my-4">Platform: <span>${detail.platform}</span></h3>
                    <h3 class="my-4">Status: <span>${detail.status}</span></h3>
                    <p>${detail.description}.</p>
                    <a href="${detail.game_url}" target="_blank" class="btn btn-outline-warning text-white px-4">Show Game</a>
                </div>`;
    }

    static async closeDetails() {
        const button = document.querySelector('.cross');
        button.addEventListener('click', () => {
            document.querySelector('.content').classList.remove('d-none');
            document.querySelector('.details').classList.add('d-none');
        });
    }

    static async openDetails(id, loader) {
        loader.classList.remove('d-none');
        const detail = await UI.fetchDetails(id);
        document.querySelector('.content').classList.add('d-none');
        document.querySelector('.details').classList.remove('d-none');
        loader.classList.add('d-none');
        return detail;
    }
}

export default Details;