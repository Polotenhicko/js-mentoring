// https://www.codewars.com/kata/577bd8d4ae2807c64b00045b/javascript
// 7kyu Two fighters, one winner

function declareWinner(fighter1, fighter2, firstAttacker) {
  let total1 = fighter2.health / fighter1.damagePerAttack;
  let total2 = fighter1.health / fighter2.damagePerAttack;
  let highestDmg = Math.floor(total1) < Math.floor(total2) ? String(fighter1) : String(fighter2);
  
  return Math.ceil(total1) === Math.ceil(total2)
      ? firstAttacker 
      : highestDmg;
}

// если тотал одинаковое, то выигрывает первый атакер, иначе больший дамагер