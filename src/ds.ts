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

// типо работает надо исправить
// const items = document.querySelector('.items');
// items?.addEventListener('click', (e) => {
//     const target = e.target as HTMLElement;
//     console.log(target);
//     if (!target.classList.contains('items')) {
//         // console.log('dsd');
//         target.classList.toggle('green');
//     }
// });

// document.addEventListener('change', (event) => {
//     const chk = event.target as HTMLInputElement;

//     if (chk.tagName === 'INPUT' && chk.type === 'checkbox') {
//         findCheck();
//     }
// });
