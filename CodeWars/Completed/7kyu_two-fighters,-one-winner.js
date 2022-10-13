function declareWinner(fighter1, fighter2, firstAttacker) {
  if (Math.ceil(fighter2.health / fighter1.damagePerAttack) ===
      Math.ceil(fighter1.health / fighter2.damagePerAttack)) {
    return firstAttacker
  }
  return Math.floor(fighter2.health / fighter1.damagePerAttack) <
      Math.floor(fighter1.health / fighter2.damagePerAttack)
    ? String(fighter1)
    : String(fighter2);
}

// если хп после деления одинаковое, то выигрывает первый атакер, иначе больший дамагер