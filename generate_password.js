// define sample function to randomly return a item in an array
function sample(collection) {
  let randomindex = Math.floor(Math.random() * collection.length)
  return collection[randomindex]
}



// define generatePassword function
function generatePassword(options) {

  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  // lowerCaseLetters.spilt('')
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  // dummy data of req.body
  // create a collection to store things user picked up

  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  //remove things user do not need

  if (options.excludeCharacters) {
    console.log(`exclude characters: ${options.excludeCharacters}`)
    collection = collection.filter(character =>
      !options.excludeCharacters.includes(character)
    )
    //此寫法為精簡版  原版在最下面
    // if the character includes in 'excludeCharacters', return false to remove the character in the collection
  }
  // console.log('collection', collection)
  //return error notice if collection is empty

  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  // start generating password
  let password = ''
  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }
  //return the generated password 
  return password
}

//invoke generatePassword function
module.exports = generatePassword


// String.prototype.split() 方法，來將字串轉換成陣列
// Array.prototype.concat() 這個方法會把兩個陣列相連接後，回傳一個新陣列。

// 原版
// if (options.excludeCharacters) {
//   console.log(`exclude characters: ${options.excludeCharacters}`)
//   collection = collection.filter(character => {
//     if (options.excludeCharacters.includes(character) === true) {
//       //   return false
//       } else {
//         return true
//       }
//   })
// }
      //   if (options.excludeCharacters.includes(character) === true) {
      // //   return false
      // } else {
      //   return true
      // }