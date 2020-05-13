
function RGBtoHEX(color) {
  let hexaConvertion = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E']
  let convertedColor = ''

  for (let i of color) {
    let div = (i / 16).toFixed(2).split('.')
    convertedColor += hexaConvertion[div[0]] + hexaConvertion[Math.round((div[1] * 16) / 100)]
  }

  return convertedColor;
}

console.log(RGBtoHEX([200, 80, 197]))
