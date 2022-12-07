// Реализовать на ООП прибор бытовой техники или другой девайс.
// Перед реализацией определитесь какой будет функционал у вашего устройства, что может в нем нажать пользователь -
// это будут публичные методы вашего объекта/класса/конструктора - можно сделать как угодно.
//
// Если у вашего прибора есть временные процессы: например, чайник должен сам выключиться после закипания, вам понадобится setTimeout или setInterval.
// Прибор должен уметь только то что он умеет.
// Например, чайник не может сам нагревать воду, он может запустить/остановить этот нагрев и считывать температуру с датчика.
// Нужно делать эмуляцию окружающей среды в отдельном объекте и при запуске чайника делать что-то типа env.startHeat().


// микроволновка функции:
//  [X] функция старт (если не задано время, то 30 сек) (если запущена, то +30 сек)
//  [X] функция смены режима (слабый (x0.5), средний (x1), сильный прогрев (x2))
//  [Х] функция инпута времени в сек (если подогрев - плюсует)
//  [X] функция отмены времени "Табло: 00:00" (если запущена, то пауза)
//  [X] функция отключения/включения розетки (выключает таймер, обнуляет табло)
//  [X] функция открыть/закрыть дверцу (останавливает разогрев если открыть)
//  [X] функция взять/поставить еду
//  [X] еда должна остывать

// все должно работать при подключенной розетке, и отключаться, если ее выдернут
// когда микроволновка включается в розетку "Табло: 'Hello' "
// когда отключается "цифры на табле резко потухли..." (если выключена 'Вставьте микроволновку в розетку')



// Конструктор еды
function Food() {
  this.temperature = 23;

  this.cooling = () => {
    setTimeout(() => {
      if (this.temperature > 20) {
        this.temperature--;
        this.cooling();
      } else {
        this.temperatureCheck();
      }
    },2000)
  };

  (this.temperatureCheck = () => {
    let tempCheck = setInterval(() => {
      if (this.temperature > 20) {
        this.cooling();
        clearInterval(tempCheck);
      }
    }, 2000)
  })();
}

const food = new Food();

function Microwave() {
  this.isPluggedIn = false;
  this.isOpen = false;
  this.contains = null;
  this.timer = 0;
  this.mode = 2;
  this.isWarmingUp = false;

  // Включить микроволновку в розетку
  this.plugIn = () => {
    if (!this.isPluggedIn) {
      this.isPluggedIn = true;
      console.log('Turning on... Hello!');
    } else {
      console.log('Can\'t plug in - microwave already plugged in');
    }
    return this;
  };

  // Выключить микроволновку из розетки
  this.unPlug = () => {
    if (this.isPluggedIn) {
      this.isPluggedIn = false;
      this.isWarmingUp = false;
      this.timer = 0;
      console.log('Numbers on the display have suddenly disappeared...');
    } else {
      console.log('Can\'t unplug - microwave already unplugged');
    }
    return this;
  };

  // Открыть дверцу микроволновки
  this.open = () => {
    if (!this.isOpen) {
      this.isOpen = true;
      console.log('Microwave is open');
      if (this.isWarmingUp) {
        this.isWarmingUp = false;
        console.log('Warming up has been stopped');
      }
    } else {
      console.log('Can\'t open - microwave already opened');
    }
    return this;
  };

  // Закрыть дверцу микроволновки
  this.close = () => {
    if (this.isOpen) {
      this.isOpen = false;
      console.log('Microwave is closed');
    } else {
      console.log('Can\'t close - microwave already closed');
    }
    return this;
  };

  // Положить еду в микроволновку (принимает еду из конструктора еды)
  this.putFood = (food) => {
    if (this.isOpen) {
      if (!this.contains) {
        if (food) {
          this.contains = food;
          console.log('Food was put in microwave');
        } else {
          console.log('Can\'t put nothing, send food as argument');
        }
      } else {
        console.log('Can\'t put food - microwave is full');
      }
    } else {
      console.log('Can\'t put food - microwave is closed');
    }
    return this;
  };

  // Вытащить еду из микроволновки
  this.getFood = () => {
    if (this.isOpen) {
      if (this.contains) {
        this.contains = null;
        console.log('Food was removed from microwave');
      } else {
        console.log('Can\'t get food - microwave is empty');
      }
    } else {
      console.log('Can\'t get food - microwave is closed');
    }
    return this;
  };

  // Задать время разогрева (принимает секунды)
  this.addTime = (seconds) => {
    if (this.isPluggedIn) {
      this.timer += seconds;
      console.log(`New warming up time was set: ${this.timer} seconds`);
    } else {
      console.log('Can\'t set time - microwave is unplugged');
    }
    return this;
  };

  // Старт - запустить разогрев (Если время не выставлено, запускает разогрев на 30 сек; Если уже разогревается - добавляет 30 сек)
  this.start = () => {
    if (this.isPluggedIn) {
      if (!this.isOpen) {
        if (this.contains) {
          if (this.isWarmingUp) {
            this.timer += 30;
          } else {
            if (this.timer === 0) {
              this.timer = 30;
            }
            this.isWarmingUp = true;
            const heating = () => {
              setTimeout(() => {
                if (this.timer > 0 && this.isWarmingUp) {
                  console.log(`${this.timer} seconds remaining. Food heats up, current temperature - ${this.contains.temperature}°`);
                  this.contains.temperature += this.mode;
                  this.timer--;
                  heating();
                } else {
                  if (this.timer === 0) {
                    console.log(`Beep-beep, warmth of food - ${this.contains.temperature}°`);
                    this.isWarmingUp = false;
                  }
                }
              },1000)
            };
            heating();
          }
        } else {
          console.log('Can\'t start - microwave is empty');
        }
      } else {
        console.log('Can\'t start - microwave is open');
      }
    } else {
      console.log('Can\'t start - microwave is unplugged');
    }
    return this;
  }

  // Отмена - остановка разогрева или сброс времени разогрева
  this.cancel = () => {
    if (this.isPluggedIn) {
      if (this.isWarmingUp) {
        this.isWarmingUp = false;
        console.log('Warming up was canceled');
      } else {
        this.timer = 0;
        console.log('Time has been reset');
      }
    } else {
      console.log('Can\'t reset time - microwave is unplugged');
    }
    return this;
  };

  // Смена режима (easy (x0.5) => medium (x1) => hard (x2))
  this.switchMode = () => {
    if (this.isPluggedIn) {
      switch (this.mode) {
        case 1:
          this.mode = 2;
          console.log(`Microwave mode switched to x${this.mode}`);
          break;
        case 2:
          this.mode = 3;
          console.log(`Microwave mode switched to x${this.mode}`);
          break;
        case 3:
          this.mode = 1;
          console.log(`Microwave mode switched to x${this.mode}`);
          break;
      }
    } else {
      console.log('Can\'t switch mode - microwave is unplugged');
    }
    return this;
  };
}

const microwave = new Microwave();
microwave.open().plugIn().addTime(15).putFood(food).close();
