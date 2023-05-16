import React from "react";

const PopupWithForm = (props) => {
	console.log(props);

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
							type="text"
							id={`${props.modal.modalName}__name`}
							name={`${props.modal.modalId}Name`}
							className={`form__input modal__input ${props.modal.modalName}__input ${props.modal.modalName}__name`}
							required
							minLength="2"
							maxLength="40"
							data-target="name"
						/>
						<span
							className={`${props.modal.modalName}__name-error form__input-error`}
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
