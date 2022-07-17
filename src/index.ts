import { data, IDataItem } from './data';
import { LocalStorageUtil } from './localStorageUtil';
import './style.css';

const checks = document.querySelectorAll('input[type="checkbox"]');

class Application {
    aciveClass: string;
    // productsLength: number;
    // items: NodeList;

    constructor() {
        this.aciveClass = 'active';

        checks.forEach((item) => {
            item.addEventListener('click', (event) => {
                const target = event.target as HTMLInputElement;

                this.onClickEvent();

                console.log(item);
            });
        });

        const search = document.querySelector('.search') as HTMLInputElement | null;

        if (!search) {
            throw new Error('undefined');
        }

        search.addEventListener('input', (event) => {
            const target = event.target as HTMLInputElement;

            this.onClickEvent();

            console.log(this);
        });

        document.querySelector('.clear-button')!.addEventListener('click', () => {
            // localStorage.removeItem('search');
            search.value = '';
            this.onClickEvent();
        });
    }

    public onClickEvent(): void {
        this.renderItems(products.filter());
    }

    clickBasket(): void {
        const items = document.querySelectorAll('.item');

        items.forEach((item) => {
            item.addEventListener('click', (event) => {
                const id = item.getAttribute('data-id');
                const { isPushed, products } = storage.putProducts(id);

                if (isPushed) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }

                this.createHeaderCounter(products.length);
                // console.log(products.length);
            });
        });
    }

    public createHeader(): void {
        const header = document.createElement('header');
        header.classList.add('header');

        header.innerHTML = `<div class="container">
               <div class="logo">
                 <img src="./img/shopping-cart.png" alt="Store Logo">
               </div>
               <h1 class="title">Online Store</h1>
               <div class="backet">
                 <span>${this.createHeaderCounter(count)}</span>
                 <img src="./img/shopping-cart.png" alt="Shopping Cart">
               </div>
        </div>`;

        document.body.prepend(header);
    }

    public createHeaderCounter(count: number): number {
        return count;
    }

    // createSidebarFilters(): void {
    //     const sidebar = document.createElement('div');
    //     const container = document.querySelector('main .container');
    //     sidebar.classList.add('sidebar');

    //     sidebar.innerHTML = `

    //         <div class="range">
    //             <span>1</span>
    //             <input type="range">
    //             <span>2</span>
    //         </div>

    //         <div>
    //             <h4>Бренды</h4>
    //             <div id="brands">
    //                 <div class="checkbox"><label><input type="checkbox" name="brand" value="Apple"> Apple</label></div>
    //                 <div class="checkbox"><label><input type="checkbox" name="brand" value="Samsung"> Samsung</label></div>
    //                 <div class="checkbox"><label><input type="checkbox" name="brand" value="Xiaomi"> Xiaomi</label></div>
    //             </div>
    //         </div>
    //         <div>
    //             <h4>Цвета</h4>
    //             <div id="colors">
    //                 <div class="checkbox"><label><input type="checkbox" name="color" value="Черный"> Черный</label></div>
    //                 <div class="checkbox"><label><input type="checkbox" name="color" value="Красный"> Красный</label></div>
    //                 <div class="checkbox"><label><input type="checkbox" name="color" value="Белый"> Белый</label></div>
    //             </div>
    //         </div>
    //         <div>
    //             <h4>Количество камер</h4>
    //             <div id="cameras">
    //                 <div class="checkbox"><label><input type="checkbox" name="brands[]" value="3"> 3</label></div>
    //                 <div class="checkbox"><label><input type="checkbox" name="brands[]" value="2"> 2</label></div>
    //                 <div class="checkbox"><label><input type="checkbox" name="brands[]" value="1"> 1</label></div>
    //             </div>
    //         </div>
    //     `;

    //     container?.prepend(sidebar);
    // }

    public createFooter() {
        const footer = document.createElement('footer');

        footer.innerHTML = `
        <div class="container">
          <p>© 2022</p>
          <div class="logo">
            <a href="">Rolling Scopes School</a>
          </div>
          <div class="github">
            <a href="">Github</a>
          </div>
        </div>
        `;
        document.body.appendChild(footer);
    }

    public renderItems(data: IDataItem[]): void {
        const itemsContainer = document.querySelector('.items') as HTMLElement;
        let htmlCatalog = '';
        const catalog = storage.getProducts();

        if (data.length === 0) {
            itemsContainer.innerHTML = 'Nothing to show';
            return;
        }

        data.forEach((elem: IDataItem) => {
            let activeClass = '';

            if (catalog.indexOf(elem.id) === -1) {
                // console.log(elem.id);
            } else {
                activeClass = ' ' + this.aciveClass;
            }

            htmlCatalog += `
            <div class="item${activeClass}" data-id="${elem.id}">
                <h2>${elem.name}</h2>
                <div class="item-image">
                    <img src=${'./'} alt="${elem.name}">
                </div>
                <div class="props">
                    <h3>Количество: ${elem.quantity}</h3>
                    <h3>Год: ${elem.year}</h3>
                    <h3>Производитель: ${elem.brand}</h3>
                    <h3>Цвет: ${elem.color}</h3>
                </div>
            </div>`;
        });

        itemsContainer.innerHTML = htmlCatalog;
        this.clickBasket();
    }

    public render(data: IDataItem[]): void {
        this.createFooter();
        this.createHeader();
        this.renderItems(data);
    }
}

class Products {
    data: IDataItem[];
    filteredData: IDataItem[];
    filteredRules: IDataItem[];

    constructor(data: IDataItem[]) {
        this.data = data;
        this.filteredData = data;
        this.filteredRules = [];
    }

    filter() {
        const search = document.querySelector('.search') as HTMLInputElement | null;

        const filter = search!.value.toLowerCase();

        const brands = [...document.querySelectorAll('#brands input:checked')].map(
            (input) => (input as HTMLInputElement).value
        );
        const colors = [...document.querySelectorAll('#colors input:checked')].map(
            (input) => (input as HTMLInputElement).value
        );
        const cameras = [...document.querySelectorAll('#cameras input:checked')].map(
            (input) => (input as HTMLInputElement).value
        );

        console.log(brands, colors, cameras);

        const result = this.data.filter(
            (elem) =>
                (!brands.length || brands.includes(elem.brand)) &&
                (!colors.length || colors.includes(elem.color.toLocaleLowerCase())) &&
                (!cameras.length || cameras.includes(elem.size)) &&
                elem.name.toLocaleLowerCase().indexOf(filter) !== -1
        );

        this.filteredData = result;

        console.log(result);

        return result;
    }
}

// const sidebar = document.querySelector('#brands') as HTMLElement;

const app = new Application();
const storage = new LocalStorageUtil();
const products = new Products(data);
const count = storage.getProducts().length;

app.render(data);

// storage.putProducts('products', 'el1');
// storage.putProducts('el6');

// const pr = storage.getProducts();
// console.log(pr);

// document.addEventListener('DOMContentLoaded', (e) => {
//     console.log(10);
// });
