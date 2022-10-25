// Task 1 
// Создать объект, в котором будет метод с вложенной функией, которая будет ссылаться на имя объекта, скопировать метод в другой объект, чтобы работало.
const obj = {
  title: 'main obj',
  getTitle() {
    subGetTitle = () => {
      console.log(this.title)
    };
    subGetTitle()
  }
};
obj.getTitle()

const subObj = {
  title: 'sub obj',
};
subObj.getTitle = obj.getTitle;
subObj.getTitle()