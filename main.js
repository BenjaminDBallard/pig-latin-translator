//starts and returns final product of piglatin translation
const loadTranslation = () => {
  let input = document.getElementById("user-input").value;
  let phrase = input.split(" ");
  let length = phrase.length;
  if (length > 1) {
    document.getElementById("display-element").innerHTML = this.pigLatin.phraseTrans(input);
  } else if ((length = 1)) {
    document.getElementById("display-element").innerHTML = this.pigLatin.pigLatin(input);
  }
};
