function isEvenlyDivisible(num1, num2) {
  return num1 % num2 === 0 ? true : false
}

function halfSquare(num) {
  return (num**2)/2
}

function isLong(str) {
  return str.length >= 15 ? true : false
}

function exclaim(str) {
  if (str.includes('!')){
    if (!str.endsWith('!')){
      return str + '!'
    }
    else {
      for (let i=str.length-1; i>=0; i--){
        if (str[i]!='!'){
          return str.slice(0, i+2)
        }
      }
      return '!'
    }
  }
  else {
      return str + '!'
  }
}

function countWords(str) {
  let x = str.split(' ')
  return x.length
}

function containsDigit(str) {
  let x = ['1','2','3','4','5','6','7','8','9','0']
  for (let i=0; i<str.length; i++){
    if (x.includes(str[i])){
      return true
    }
  }
  return false
}

function containsLowerCase(str) {
  let x = 'abcdefghijklmnopqrstuvwxyz'
  for (let i=0; i<str.length; i++){
    if (x.includes(str[i])){
      return true
    }
  }
  return false
}

function containsUpperCase(str) {
  let x = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i=0; i<str.length; i++){
    if (x.includes(str[i])){
      return true
    }
  }
  return false
}

function containsNonAlphanumeric(str) {
  for (let i=0; i<str.length; i++){
    if (!containsLowerCase(str[i]) && !containsUpperCase(str[i]) && !containsDigit(str[i])){
      return true
    }
  }
  return false
}

function containsSpace(str) {
  for (let i=0; i<str.length; i++){
    if (str[i]===' '){
      return true
    }
  }
  return false
}

function digits(num) {
  let x = num.toString()
  let y = []
  if (x.startsWith('-')){
    x = x.slice(1, x.length)
    x = x.split('')
    for (const z of x){
      if (z==='.'){
      }
      else {
        y.push(Number(z))
      }
    }
  }
  else {
    x = x.split('')
    for (const z of x){
      if (z==='.'){
      }
      else {
        y.push(Number(z))
      }
    }
  }
  return y
}

function truncate(str) {
  if (str.length>=15){
    return str.slice(0, 8) + '...'
  }
  else {
    return str
  }
}

function isValidPassword(str) {
  if (containsDigit(str) && 
  containsLowerCase(str) && 
  containsNonAlphanumeric(str) && 
  containsUpperCase(str) && 
  !containsSpace(str)){
    return true
  }
  return false
}

function onlyPunchy(arr) {
  let x = []
  for (let i=0; i<arr.length; i++){
    let z = arr[i]
      if (z.includes('!')){
        if (!z.endsWith('!') && z.length<15){
          x.push(z) + '!'
        }
        else if (z.endsWith('!')){
          let a = ''
          for (let y=z.length-1; y>=0 && z[y]==='!'; y--){
              a = z.slice(0, y+1)
          }
          a = a.slice(0, a.length-1)
          a += '!'
          if (a.length<15){
            x.push(a)
          }
        }
      }
      else if (z.length<15){
          x.push(z+'!')
      }
  }
  return x
}

module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}