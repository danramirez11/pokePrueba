class Pokemon {
    constructor(id, name, image, weight) {
        this.id = id
        this.name = name
        this.image = image
        this.weight = weight
    }

    toHtml(pos) {
        return `
        <div class="card" onclick="selected(${pos})">
            <p>${this.name}</p>
            <img width="100" src="${this.image}" />
        </div>
        `
    }

    toHTMLdetail(){
        return `<div>
        <p>${this.name}</p>
        <img src="${this.image}" alt="">
        <p>Weigth ${this.weight}</p>
    </div>`
    }
}