//Создание класса для электр. устройств
class ElectricalDevise {
	constructor(option) {
		this.name = option.name;
		this.price = option.price;
		this.power = option.power;
		this.isOn = false;
	}
	turnOn() {
		this.isOn = true;
		if (this.constructor == Tv.prototype.constructor)
			this.currentChannel = '1';
	}
	turnOff() {
		this.isOn = false;
		if (this.constructor == Tv.prototype.constructor)
			delete this.currentChannel;
	}
}
//Создание класса для компьютеров с использованием прототипа класса электронных устройств 

class Computer extends ElectricalDevise {
	constructor(option) {
		super(option);
		this.type = option.type;
		this.os = option.os;
	}
	restartComputer() {
		if (this.isOn) {
			this.isOn = false;
			this.isOn = true;
			console.log('Компьютер перезапущен');
		}
		else {
			console.log('Для того чтобы перезагрузить компьютер необходимо его включить!');
		}
	}
}

//Создание класса для телевизоров с использованием прототипа класса электронных устройств

class Tv extends ElectricalDevise {
	constructor(option) {
		super(option);
		this.resolution = option.resolution;
	}
	changeChannel(newChan) {
		if ('currentChannel' in this) {
			console.log(`Вы переключили канал с ${this.currentChannel} на ${newChan}`)
			this.currentChannel = newChan;

		}
		else {
			console.log('Для того чтобы переключить канал, включите телевизор')
		}
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