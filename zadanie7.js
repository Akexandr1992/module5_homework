let arr = [36, 56, 0, null, 'sasha', 98]
let even = 0
let odd = 0
let zero = 0

for (let i = 0; i < arr.length; i += 1) {
  if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zero++
    } else if (arr[i] % 2 === 0) {
      even++
    } else {
      add++
    }
  }
}
console.log(`В массиве: ${zero} - нулей, ${even} - четных, ${odd} - нечётных`)