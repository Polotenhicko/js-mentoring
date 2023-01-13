// Task 1
// Переписать microwave.js используя поля классов.


/*
* Функции микроволновки:
*
* .plugIn() - Включить микроволновку в розетку
* .inPlug() - Выключить микроволновку из розетки
* .open() - Открыть дверцу микроволновки
* .close() - Закрыть дверцу микроволновки
* .putFood(foodName|food) - Положить еду в микроволновку (принимает строку названия еды или объект из конструктора еды)
* .getFood() - Вытащить еду из микроволновки
* .addTime(sec) - Задать время разогрева (принимает секунды, в том числе отрицательные)
* .start() - Запустить разогрев (Если время не выставлено, запускает разогрев на 30 сек; Если уже разогревается - добавляет 30 сек)
* .cancel() - Сброс времени разогрева; если разогревается - остановка разогрева,
* .switchMode() - Поочередная смена режима (easy (x1) => medium (x2) => hard (x3))
*
* new Food(foodName) - Создать еду с помощью конструктора еды
 */


// Класс еды (принимает строку названия еды)
class Food {
  constructor(name = 'food') {
    if (typeof name != 'string') {
      console.log('If you wanna name your food - send string with name as argument of new Food()');
      name = 'food';
    }
    this.name = name;
    console.log(`${name} created`);
    this.temperatureCheck();
  }
  temperature = 23;


  cooling = () => {
    setTimeout(() => {
      if (this.temperature > 20) {
        this.temperature--;
        this.cooling();
      } else {
        this.temperatureCheck();
      }
    },4000)
  };

  temperatureCheck = () => {
    let tempCheck = setInterval(() => {
      if (this.temperature > 20) {
        this.cooling();
        clearInterval(tempCheck);
      }
    }, 2000)
  };
}

const food = new Food('kasha');


// Класс микроволновки
class Microwave {
  isPluggedIn = false;
  isOpen = false;
  contains = null;
  timer = 0;
  mode = 1;
  isWarmingUp = false;

  #checkPluggedIn() {
    if (this.isPluggedIn) {
      console.log(`Can\'t do that - plug issues`);
      return true;
    }
  }

  #checkIsOpen() {
    if (this.isOpen) {
      console.log('Can\'t do that - door issues');
      return true;
    }
  }

  #checkContains() {
    if (!this.contains) {
      console.log('Can\'t do that - contains issues');
      return true;
    }
  }

  #heating() {
    setTimeout(() => {
      if (this.timer > 0 && this.isWarmingUp) {
        console.log(`${this.timer} seconds remaining. ${this.contains.name} heats up, current temperature - ${this.contains.temperature}°`);
        this.contains.temperature += this.mode + 1;
        this.timer--;
        this.#heating();
      } else {
        if (this.timer === 0) {
          console.log(`Beep-beep, warmth of ${this.contains.name} - ${this.contains.temperature}°`);
          this.isWarmingUp = false;
        } else {
          console.log('Warming up has been stopped');
          this.isWarmingUp = false;
        }
      }
    },1000)
  };

  // Включить микроволновку в розетку
  plugIn = () => {
    if (!this.#checkPluggedIn()) {
      return this;
    }

    this.isPluggedIn = true;
    console.log('Turning on... Hello!');
    return this;
  };

  // Выключить микроволновку из розетки
  unPlug = () => {
    if (this.#checkPluggedIn()) {
      return this;
    }

    this.isPluggedIn = false;
    this.isWarmingUp = false;
    this.timer = 0;
    console.log('Numbers on the display have suddenly disappeared...');

    return this;
  };

  // Открыть дверцу микроволновки
  open = () => {
    if (this.#checkIsOpen()) {
      return this;
    }

    this.isOpen = true;
    console.log('Microwave is open');
    if (this.isWarmingUp) {
      this.isWarmingUp = false;
      console.log('Warming up has been stopped');
    }

    return this;
  };

  // Закрыть дверцу микроволновки
  close = () => {
    if (!this.#checkIsOpen()) {
      return this;
    }

    this.isOpen = false;
    console.log('Microwave is closed');
    return this;
  };

  // Положить еду в микроволновку (принимает строку названия еды)
  putFood = (food) => {
    if (!this.#checkIsOpen()) {
      return this;
    }
    if (!this.#checkContains()) {
      return this;
    }
    if (!food) {
      console.log('Can\'t put nothing, send food as argument');
      return this;
    }

    if (food.temperature && food.cooling && food.temperatureCheck) {
      this.contains = food;
      console.log(`${this.contains.name} was put in microwave`);
    } else {
      food = new Food(food);
      this.contains = food;
      console.log(`${this.contains.name} was put in microwave`);
    }
    return this;
  };

  // Вытащить еду из микроволновки
  getFood = () => {
    if (this.#checkIsOpen()) {
      return this;
    }
    if (this.#checkContains()) {
      return this;
    }

    console.log(`${this.contains.name} was removed from microwave`);
    this.contains = null;
    return this;
  };

  // Задать время разогрева (принимает секунды)
  addTime = (seconds) => {
    if (this.#checkPluggedIn()) {
      return this;
    }

    this.timer += seconds;
    if (!(seconds > 0)) {
      console.log('Time less than 0 will equate to 0, then microwave start');
    }
    console.log(`New warming up time was set: ${this.timer} seconds`);
    return this;
  };

  // Старт - запустить разогрев (Если время не выставлено, запускает разогрев на 30 сек; Если уже разогревается - добавляет 30 сек)
  start = () => {
    if (this.#checkPluggedIn()) {
      return this;
    }
    if (this.#checkIsOpen()) {
      return this;
    }
    if (this.#checkContains()) {
      return this;
    }

    if (this.isWarmingUp) {
      this.timer += 30;
    } else {
      if (this.timer <= 0) {
        this.timer = 30;
        console.log(`New warming up time was set: ${this.timer} seconds`);
      }
      this.isWarmingUp = true;
      this.#heating();
    }
    return this;
  }

  // Отмена - остановка разогрева или сброс времени разогрева
  cancel = () => {
    if (this.#checkPluggedIn()) {
      return this;
    }

    if (this.isWarmingUp) {
      this.isWarmingUp = false;
      console.log('Warming up was canceled');
    } else {
      this.timer = 0;
      console.log('Time has been reset');
    }
    return this;
  };

  // Смена режима (easy (x1) => medium (x2) => hard (x3))
  switchMode = () => {
    if (this.#checkPluggedIn()) {
      return this;
    }

    if (this.mode === 2) {
      this.mode = 0;
    } else {
      this.mode++;
    }

    const modes = ['easy (x1)', 'medium (x2)', 'hard (x3)'];
    console.log(`Microwave mode switched to ${modes[this.mode]}`);
    return this;
  };
}

const microwave = new Microwave();
microwave.open()
    .plugIn()
    .addTime(15)
    .putFood('kasha')
    .close()
    .start();