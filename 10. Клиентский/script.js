const app = document.getElementById("app");

class Busket {

    constructor(){
        this.count = 0;
        this.items = new Array();
    }

}

const busket = new Busket();
class Product {

    constructor(id, name, price, image){
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.inBusket = false;
    }

    static storage = new Array();


    toString(){
        const btn = new Button("В корзину", {width: 80, height: 25}, "#ccffcc");
        return `
            <div class="item">
                #<span id="id">${this.id}</span>
                <h4>${this.name}</h4>
                <img src="images/${this.image}.jpg" alt="${this.id} product">
                <span>${this.price}</span>
                ${btn.toString()}
            </div>
        `;
    }

    static add(obj){
        Product.storage.push(new Product(obj.id, obj.name, obj.price, obj.image));
    }

    static remove(id){
        Product.storage = this.storage.filter(item => {
            return item.id !== id;
        });
    }

    static printItems(){
        Product.storage.forEach((item, index) => {
            app.innerHTML += item;
        });
    }

    static setName(id, name){
        const items = document.getElementsByClassName("item");
        for(let i = 0; i < items.length; i++){
            if (items[i].childNodes[1].innerText == id){
                items[i].childNodes[3].innerText = name;
            }
        }
    }

    static setPrice(id, price){
        const items = document.getElementsByClassName("item");
        for(let i = 0; i < items.length; i++){
            if (items[i].childNodes[1].innerText == id){
                items[i].childNodes[7].innerText = price;
            }
        }
    }

    static setImage(id, image){
        const items = document.getElementsByClassName("item");
        for(let i = 0; i < items.length; i++){
            if (items[i].childNodes[1].innerText == id){
                items[i].childNodes[5].src = "images/"+image+".jpg";
            }
        }
    }

}



Product.add({
    id: 1,
    name: "Notebook",
    price: 1500,
    image: "Notebook"
});
Product.add({
    id: 2,
    name: "Notebook",
    price: 1500,
    image: "Notebook"
});
Product.add({
    id: 3,
    name: "iMac",
    price: 2500,
    image: "imac"
});
Product.add({
    id: 4,
    name: "iPhone",
    price: 2000,
    image: "iphone"
});
Product.add({
    id: 5,
    name: "BMW",
    price: 25000,
    image: "bmw"
});
Product.remove(2);
//Product.setImage(3, "BMW");
Product.printItems();
Product.setImage(3, "BMW");

for(let i = 0; i < document.getElementsByClassName("item").length; i++){
    if (i % 2 === 0){
        document.getElementsByClassName("item")[i].style.backgroundColor = "lightgray";
    }
}