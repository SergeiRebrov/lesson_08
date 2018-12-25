/* ------------Урок---------------

document.querySelector('.onclick').onclick = function () {
	console.log('onclick');
}
document.querySelector('.ondblclick').ondblclick = function () {
	console.log('ondblclick');
}
document.querySelector('.onmousemove').onmousemove = function () {
	console.log('onmousemove');
}
//при наводе на блок мышь срабатывает один раз
document.querySelector('.onmouseenter').onmouseenter = function () {
	console.log('onmouseenter');
}
document.querySelector('.onmouseleave').onmouseleave = function () {
	console.log('onmouseleave');
}
document.querySelector('.onmousewheel').onmousewheel = function () {
	console.log('onmousewheel');
	return false;
}
//конткстное меню
document.querySelector('.oncontextmenu').oncontextmenu = function () {
	console.log('oncontextmenu');
	return false;
}*/



//-------------------------------Задания--------------------------------------------------------------------------

//отменить выделение текста по двойному клику (НЕ ПОЛУЧИЛОСЬ!!!) 

/*document.querySelector('.block1').ondblclick = function () {
	console.log('ondblclick');
}
*/

//-----------------------------------------------------------------------------------------------------------------
//Отключите клик правой кнопкой мыши на документе. (получилось)

/*document.oncontextmenu = function () {
	console.log('oncontextmenu');
	return false;
};
*/
//------------------------------------------------------------------------------------------------------------------

// Открытая/закрытая папка        (получилось)

/*let blc = document.querySelector('.block2');  
blc.onmouseenter = function (){
	this.style.backgroundImage = "url('https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678084-folder-128.png')";
};
blc.onmouseleave = function (){
	this.style.backgroundImage = "url('https://cdn4.iconfinder.com/data/icons/small-n-flat/24/folder-blue-128.png')";
};
*/

//------------------------------------------------------------------------------------------------------------------ 

//изменение цвета блокa (получилось c подсказкой)

// получаем элемент и вешаем событие
let c3 = document.querySelector('.color3').onmouseenter = function () {

	// получаем строку rgb (255, 255, 255)
	function randColor() {
		return 'rgb('+rgbX()+', '+rgbY()+', '+rgbZ()+')'; 
	};

// случайное значение округленное
	 function rgbX (){
			return Math.round( Math.random() * 255 ); 
		};
	// меняем цвет
		document.querySelector('.color3').style.background = randColor ();
};

	









		
