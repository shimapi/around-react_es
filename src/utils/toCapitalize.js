/* if (props.modal.modalInputs[1]?.inputName) {
  const toCapitalizeInputName = props.modal.modalInputs[1]?.inputName;

  // get the first character of the string
  let firstCharacter = toCapitalizeInputName.charAt(0);

  // convert the first character to uppercase
  firstCharacter = firstCharacter.toUpperCase();

  // combine the first character with the rest of the string
  let capitalizedInputName = firstCharacter + toCapitalizeInputName.slice(1);

  // log the capitalized string to the console
  console.log(props.modal.modalName, capitalizedInputName);
} else {
  console.log("no tiene inputName");
} */

export default function capitalizeString() {
	if (this.modal.modalInputs[0]?.inputName) {
		const toCapitalizeInputName = this.modal.modalInputs[0]?.inputName;
		let firstCharacter = toCapitalizeInputName.charAt(0);
		firstCharacter = firstCharacter.toUpperCase();
		let capitalizedInputName = firstCharacter + toCapitalizeInputName.slice(1);
		console.log(this.modal.modalName, capitalizedInputName);
	} else {
		console.log("x no tiene inputName");
	}
}
