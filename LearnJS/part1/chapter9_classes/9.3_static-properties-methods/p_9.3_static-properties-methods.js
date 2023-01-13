// Task 1
// Что будет в консоли?
class Class {
  static boobs = '(.)(.)'
  sayBoobs() {
    console.log(this.boobs);
  }
}
new Class().sayBoobs();
// Ответ: undefined - из экземпляра нельзя обращаться к статическим свойствам.



// Task 2
// Что будет в консоли
class Beat {
  static drums = 'Pts-Chts-Pts-Chts'
  #synth = 'wob-wob-wob-wob'
  _vocal = 'la-la-la-la'
  get vocal() {return this._vocal}
  bass = 'bup-bup-bup-bup'
}
class Verse extends Beat {
  play1() {
    for (let verseKey in this) {
      console.log(verseKey);
    }
  }
  play2() {console.log(Verse.drums)}
}
new Verse().play1()
new Verse().play2()
// Ответ: _vocal    bass    Pts-Chts-Pts-Chts   - только приватные и статические св-ва не наследуются (но статические доступны извне класса)