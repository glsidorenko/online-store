import { data, IDataItem } from './data';
import './style.css';

const checks = document.querySelectorAll('input[type="checkbox"]');

class Application {
    constructor() {
        checks.forEach((item) => {
            item.addEventListener('change', (event) => {
                const target = event.target as HTMLInputElement;
                this.onClickEvent(target.name, target.value);
                console.log(item);
            });
        });
    }

    onClickEvent(key: string, value: string): void {
        const filteredData = products.getFilteredData(key, value);

        this.renderItems(filteredData);
    }

    createHeader(): void {
        const header = document.createElement('header');
        header.classList.add('header');

        header.innerHTML = `<div class="container">
               <div class="logo">
                 <img src="./img/shopping-cart.png" alt="Store Logo">
               </div>
               <h1 class="title">Online Store</h1>
               <div class="backet">
                 <img src="./img/shopping-cart.png" alt="Shopping Cart">
               </div>
        </div>`;

        document.body.prepend(header);
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

    createFooter() {
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

    renderItems(data: IDataItem[]): void {
        const itemsContainer = document.querySelector('.items') as HTMLElement;
        let htmlCatalog = '';

        if (data.length === 0) {
            itemsContainer.innerHTML = 'Nothing to show';
            return;
        }

        data.forEach((elem: IDataItem) => {
            // console.log(elem);
            htmlCatalog += `
            <div class="item">
                <h2>${elem.name}</h2>
                <div class="item-image">
                    <img src=${'./'} alt="${elem.name}">
                </div>
                <div class="props">
                    <h3>Количество: ${elem.quantity}</h3>
                    <h3>Год: ${elem.year}</h3>
                    <h3>Производитель: ${elem.shape}</h3>
                    <h3>Цвет: ${elem.color}</h3>
                </div>
            </div>`;
        });

        itemsContainer.innerHTML = htmlCatalog;
    }

    render(data: IDataItem[]): void {
        this.createFooter();
        this.createHeader();
        this.renderItems(data);
    }

    saveFilterRules() {
        const rules = products.getFilteredRules();
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

    useFilterRules(filteredRules: IDataItem[]) {
        let result = this.data;

        filteredRules.forEach(({ key, value }) => {
            result = this.data.filter((item) => this.filterInner(item, key, value));
        });

        return result;
    }

    getFilteredRules() {
        return this.filteredRules;
    }

    getFilteredData(key: string, value: string): IDataItem[] {
        this.filteredRules.push({
            key,
            value,
        });

        const result: IDataItem[] = this.filteredData?.filter((item) => this.filterInner(item, key, value));

        this.filteredData = result;

        return result;
    }

    filterInner(item: IDataItem, key: string, value: string) {
        if (item[key]) {
            return item[key] === value;
        } else {
            console.log('no such key', key);
        }
    }
}

const sidebar = document.querySelector('#brands') as HTMLElement;

const App = new Application();
App.render(data);

const products = new Products(data);

// products.getFilteredData('brand', 'Samsung');

// function filter() {
//     // const checkChecked = document.querySelectorAll('input[type="checkbox"]:checked');
//     const filter = search!.value.toLowerCase();

//     const brands = [...sidebar.querySelectorAll('#brands input:checked')].map(
//         (input) => (input as HTMLInputElement).value
//     );
//     const colors = [...sidebar.querySelectorAll('#colors input:checked')].map(
//         (input) => (input as HTMLInputElement).value
//     );
//     const cameras = [...sidebar.querySelectorAll('#cameras input:checked')].map(
//         (input) => (input as HTMLInputElement).value
//     );

//     console.log(brands, colors, cameras);

//     // const newData = data.filter(
//     //     (elem) =>
//     //         (!brands.length || brands.includes(elem.shape)) &&
//     //         (!colors.length || colors.includes(elem.color.toLocaleLowerCase())) &&
//     //         (!cameras.length || cameras.includes(elem.size)) &&
//     //         elem.name.toLocaleLowerCase().indexOf(filter) !== -1
//     // );

// }
