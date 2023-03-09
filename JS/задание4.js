"use strict"
//Функция конструктор для электрических устройств
function ElectricalDevise(option) {
	this.name = option.name;
	this.price = option.price;
	this.power = option.power;
	this.isOn = false;
};

//Функция включения 
ElectricalDevise.prototype.turnOn = function () {
	this.isOn = true;
	if (this.constructor == Tv.prototype.constructor)
		this.currentChannel = '1';
};
ElectricalDevise.prototype.turnOff = function () {

	this.isOn = false;
	if (this.constructor == Tv.prototype.constructor)
		delete this.currentChannel;
};
//Функция конструктор для компьютера
function Computer(option) {
	ElectricalDevise.apply(this, arguments);
	this.type = option.type;
	this.os = option.os;
};

//Наследование прототипа
Computer.prototype = Object.create(ElectricalDevise.prototype);
Computer.prototype.constructor = Computer;

//Функция перезагрузки компьютера
Computer.prototype.restartComputer = function () {
	if (this.isOn) {
		this.isOn = false;
		this.isOn = true;
		console.log('Компьютер перезапущен');
	}
	else {
		console.log('Для того чтобы перезагрузить компьютер необходимо его включить!');
	}
};


//Функция конструктор для телевизора 
function Tv(option) {
	ElectricalDevise.apply(this, arguments);
	this.resolution = option.resolution;
};

//Наследование прототипа
Tv.prototype = Object.create(ElectricalDevise.prototype);
Tv.prototype.constructor = Tv;

//Функция смены канала;
Tv.prototype.changeChannel = function (newChan) {
	if ('currentChannel' in this) {
		console.log(`Вы переключили канал с ${this.currentChannel} на ${newChan}`)
		this.currentChannel = newChan;

	}
	else {
		console.log('Для того чтобы переключить канал, включите телевизор')
	}
}
// Создание массива электроприборов

let allElectricalDevices = [];

//
function getTotalPower(devicesArr) {
	let totalPower = 0;
	devicesArr.map((element) => {
		if (element.isOn) {
			totalPower += element.power;
		}
	});
	return totalPower;
}

//Создание экземпляров
const lenovoNoteBook = new Computer({ name: 'Lenovov', price: '48000', power: 60, type: 'Notebook', os: 'Windows 11' });
const macPc = new Computer({ name: 'Mac', price: '85000', power: 90, type: 'PC', os: 'MacOS 10' });
const samsungTv = new Tv({ name: 'Samsung', price: '59000', power: 50, resolution: '1920x1080' });


//Заполнение массива

allElectricalDevices.push(lenovoNoteBook, macPc, samsungTv);

console.log(samsungTv);

console.log(macPc);

console.log(lenovoNoteBook);

//Включение телевизора и ноутбука
samsungTv.turnOn();
lenovoNoteBook.turnOn();

// Перезапуск компьютера и смена канала на телевизоре 
samsungTv.changeChannel('3');

lenovoNoteBook.restartComputer();

//Подсчет энергопотребления
console.log(`Количество потребляемой энергии составляет: ${getTotalPower(allElectricalDevices)} ватт в час`);

//Выключение ноутбука и включение пк
lenovoNoteBook.turnOff();
macPc.turnOn();
//Подсчет энергопотребления
console.log(`Количество потребляемой энергии составляет: ${getTotalPower(allElectricalDevices)} ватт в час`);