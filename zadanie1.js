let result = +prompt('Введите число:')

if (typeof result === 'number' && !isNaN(result)) {
  if (result % 2 == 0) {
    console.log('Четное число')
  }
  else {
    console.log('Не чётное число')
  }
} else {
  console.log('Упс Кажется вы ошиблись')
}