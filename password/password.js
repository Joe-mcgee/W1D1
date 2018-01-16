var password = process.argv.slice(2).toString();
var replacements = { '4': /a/g,
                    '3': /e/g,
                    '0': /o/g,
                    '1': /l/g}

// for in loop for expression



for (replacement in replacements) {
  console.log(replacement)
  console.log(replacements[replacement])

  password = password.replace(replacements[replacement], replacement)
}

console.log(password)



