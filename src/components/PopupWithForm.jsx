import React from "react";
import capitalizeString from "../utils/capitalizeString.js";

const PopupWithForm = (props) => {
	/* 	function isOpen(){
    isOpen ? 'popup_is-opened' : ''
  } */
	return (
		<div
			className={`modal ${props.modal.modalName}`}
			id={`${props.modal.modalId}`}
		>
			<div className={`modal__container ${props.modal.modalName}__container`}>
				<button className="close button-close"></button>

				<form
					className={`${props.modal.modalName}__form form`}
					action="#"
					name={props.modal.modalId}
					noValidate
				>
					<fieldset className="form__fieldset">
						<h2 className={`${props.modal.modalName}__title`}>
							{props.modal.modalTitle}
						</h2>
						<input
							type={props.modal.modalInputs[0]?.inputType}
							id={`${props.modal.modalName}__${props.modal.modalInputs[0]?.inputName}`}
							name={`${props.modal.modalId}${capitalizeString}`}
							className={`form__input modal__input ${props.modal.modalName}__input ${props.modal.modalName}__${props.modal.modalInputs[0]?.inputName}`}
							required
							minLength={props.modal.modalInputs[0]?.minLength}
							maxLength={props.modal.modalInputs[0]?.maxLength}
							data-target={props.modal.modalInputs[0]?.inputName}
						/>
						<span
							className={`${props.modal.modalName}__${props.modal.modalInputs[0]?.inputName}-error form__input-error`}
						></span>

						<input
							type="text"
							id={`${props.modal.modalName}__about`}
							name={`${props.modal.modalId}About`}
							className={`form__input modal__input ${props.modal.modalName}__input ${props.modal.modalName}__about`}
							required
							minLength="2"
							maxLength="200"
							data-target="about"
						/>
						<span
							className={`${props.modal.modalName}__about-error form__input-error`}
						></span>

						<button type="submit" className="button button-save">
							{props.modal.modalButton}
						</button>
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default PopupWithForm;
//para poner la 1º letra en mayúscula.

/* 	function capitalizeString() {
		if (props.modal.modalInputs[0]?.inputName) {
			const toCapitalizeInputName = props.modal.modalInputs[0]?.inputName;
			let firstCharacter = toCapitalizeInputName.charAt(0);
			firstCharacter = firstCharacter.toUpperCase();
			let capitalizedInputName =
				firstCharacter + toCapitalizeInputName.slice(1);
			console.log(props.modal.modalName, capitalizedInputName);
		} else {
			console.log("x no tiene inputName");
		}
	} */
