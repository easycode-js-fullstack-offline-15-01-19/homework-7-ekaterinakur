// -------------------------- Home work 7 --------------------------
// -------------------------- Курочка Екатерина --------------------------

//  1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект, содержащий первый аргумент и массив из остатка:

/**
   * @autor Ekaterina Kurochka
   * @description для создания объекта, содержащего первый аргумент функции и массив из остатка входящих аргументов ф-ции
   * @returns {object} объект   
   */
function getObj(first, ...other) {
	return {
		first: first,
		other: [other]
	};
}

//  или (до правок) ------------
// function getObj() {
// 	const [first, ...other] = arguments;
// 	return {first: first, other: other};
// }

getObj('a', 'b', 'c', 'e', 'd');

// //  2. Организовать функцию getInfo, которая принимает объект и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners

const organisation = {  
  name: 'Google',   
  info: { employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing'] } 
};

/**
   * @autor Ekaterina Kurochka
   * @description Для получения (в консоль) значения поля "имя" (если имени нет - unknown) и первых двух партнеров из массива
   * @param {object} объект вида { name: ...,  info: { employees: [...], partners: [ … ]  } }
   * @returns {undefined}   
   */
function getInfo(myObj) {
	let { name = 'Unknown',  info: { partners: [first, second] } } = myObj;
	// console.log( `Name: ${name}; Partners: ${ [ first, second ] }` );
	console.log(`Name: ${name}`);
	console.log(`Partners: ${ [first, second] }`);
}

getInfo(organisation);

//  3. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function)

const sum = (...props) => {
	if (!props.length) return 0;
  	return props.reduce((prev, next) => prev + next);
}

sum(1, 2, 3, 4); // 10
sum(); // 0