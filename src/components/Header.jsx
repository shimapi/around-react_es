import React from "react";

const Header = () => {
	const config = {
		formSelector: ".form",
		inputSelector: ".form__input",
		submitButtonSelector: ".button-save",
		inactiveButtonClass: "button-inactive",
		inputErrorClass: "form__input_type_error",
		errorClass: "form__input-error_active",
		errorSufix: "-error",
		formSelectorProfile: ".edit-profile__form",
		formSelectorAddPlace: ".add-place__form",
		cardTemplate: ".card-template",
	};
	/* 	const activeModal = selectedModal.classList.add("modal_active");
	const modals = document.querySelectorAll(".modal");
	const _formElement = config.formSelector;
	const formElement = modal.querySelector(".form");

	const selectedModal = modals.forEach((modal) => {
		return this;
	}); */

	/* 	const _inputList = Array.from(
		_formElement.querySelectorAll(config.inputSelector)
	); */

	function handleEditAvatarClick() {
		console.log("handleEditAvatarClick");
		const modal = document.querySelector(".edit-avatar");
		modal.classList.add("modal_active");
	}
	function handleEditProfileClick() {
		console.log("handleEditProfileClick");
		const modal = document.querySelector(".edit-profile");
		modal.classList.add("modal_active");
	}
	function handleAddPlaceClick() {
		console.log("handleAddPlaceClick");
		const modal = document.querySelector(".add-place");
		modal.classList.add("modal_active");
	}

	return (
		<>
			<header className="header">
				<div className="header__logo"></div>
			</header>
			<section className="owner">
				<div className="avatar">
					<img className="avatar__circle" src=" " alt="Foto de perfil" />
					<button
						className="avatar__edit"
						onClick={handleEditAvatarClick}
					></button>
				</div>
				<div className="main-text">
					<div className="main-text__container">
						<h1 className="main-text__name"></h1>
						<button
							className="button button-edit"
							data-target="#editProfile"
							onClick={handleEditProfileClick}
						></button>
					</div>
					<h2 className="main-text__about"></h2>
				</div>
			</section>

			<section className="upload">
				<button
					className="button button-add"
					data-target="#addPlace"
					onClick={handleAddPlaceClick}
				></button>
			</section>
		</>
	);
};

export default Header;
