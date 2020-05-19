// This solution uses the DOM API to generate spans of the appropriate color

const palette = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
const input = "Rainbows! They make everything better"

const result = document.createElement("div")

function rainbowText(string, palette) {
  let output = document.createElement("span")
  let coloredCharacterCounter = 0
  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/s*/)) {
      output.appendChild(document.createTextNode(string[i]))
    } else {
      let coloredCharacter = document.createElement("span")
      coloredCharacter.setAttribute(
        "style",
        `color: ${palette[coloredCharacterCounter % palette.length]};`
      )
      coloredCharacter.appendChild(document.createTextNode(string[i]))
      output.appendChild(coloredCharacter)
      coloredCharacterCounter += 1;
    }
  }
  return output
}

result.appendChild(rainbowText(input, palette));
