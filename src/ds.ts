// if (!search) {
//   throw new Error('fdfd');
// }

// if (!resetBtn) {
//   throw new Error('fdfd');
// }

// (search.value as string | null) = localStorage.getItem('search') || 's21';
// filter();

// resetBtn.addEventListener('click', () => {
//   localStorage.removeItem('search');
//   search.value = '';
//   filter();
// });

// search.addEventListener('input', () => {
//   localStorage.setItem('search', search.value);
//   filter();
// });

// const checkChecked = document.querySelectorAll('input[type="checkbox"]:checked');

// const search = document.querySelector('.search') as HTMLInputElement | null;
// const resetBtn = document.querySelector('.clear-button') as HTMLElement | null;

// document.addEventListener('change', (event) => {
//     const chk = event.target as HTMLInputElement;

//     if (chk.tagName === 'INPUT' && chk.type === 'checkbox') {
//         findCheck();
//     }
// });

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

// getFilteredData(key: string, value: string): IDataItem[] {
//   this.filteredRules.push({
//       key,
//       value,
//   });

//   const result: IDataItem[] = this.filteredData?.filter((item) => this.filterInner(item, key, value));

//   this.filteredData = result;

//   return result;
// }

// filterInner(item: IDataItem, key: string, value: string) {
//   if (item[key]) {
//       return item[key] === value;
//   } else {
//       console.log('no such key', key);
//   }
// }
