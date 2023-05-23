import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm.jsx";
import api from "../utils/api.js";

const Main = (props) => {
	const [userName, setUserName] = React.useState(0);
	const [userDescription, setUserDescription] = React.useState(0);
	const [userAvatar, setUserAvatar] = React.useState(0);

	//esta es la configuración de cada modal.
	//con esto armaré cada modal
	const modalAddPlace = {
		modalName: "add-place",
		modalId: "addPlace",
		modalTitle: "Nuevo Lugar",
		modalButton: "Crear",
		modalInputs: [
			{
				inputName: "name",
				inputType: "text",
				minLength: 2,
				maxLength: 30,
			},
			{
				inputName: "link",
				inputType: "URL",
				minLength: 2,
				maxLength: 200,
			},
		],
	};
	const modalEditAvatar = {
		modalName: "edit-avatar",
		modalId: "editAvatar",
		modalTitle: "Cambiar foto de perfil",
		modalButton: "Guardar",
		modalInputs: [
			{
				inputName: "name",
				inputType: "URL",
				minLength: 10,
				maxLength: 255,
			},
		],
	};
	const modalDeleteCard = {
		modalName: "delete-card",
		modalId: "deleteCard",
		modalTitle: "¿Estás segur@?",
		modalButton: "Sí, quiero borrar esto!",
		modalInputs: [],
	};
	const modalEditProfile = {
		modalName: "edit-profile",
		modalId: "editProfile",
		modalTitle: "Editar Perfil",
		modalButton: "Guardar",
		modalInputs: [
			{
				inputName: "name",
				inputType: "text",
				minLength: 2,
				maxLength: 40,
			},
			{
				inputName: "about",
				inputType: "text",
				minLength: 2,
				maxLength: 200,
			},
		],
	};

	return (
		<>
			<section className="owner">
				<div className="avatar">
					<img className="avatar__circle" src=" " alt="Foto de perfil" />
					<button
						className="avatar__edit"
						onClick={props.isEditAvatarPopupOpen}
					></button>
				</div>
				<div className="main-text">
					<div className="main-text__container">
						<h1 className="main-text__name"></h1>
						<button
							className="button button-edit"
							data-target="#editProfile"
							onClick={props.isEditProfilePopupOpen}
						></button>
					</div>
					<h2 className="main-text__about"></h2>
				</div>
			</section>

			<section className="upload">
				<button
					className="button button-add"
					data-target="#addPlace"
					onClick={props.isAddPlacePopupOpen}
				></button>
			</section>
			<main className="main main-cards">
				<template className="card-template">
					<article className="card">
						<section className="card__photo">
							<button className="button-delete"></button>
							<img
								src=" "
								alt=""
								className="card__image"
								data-target="#photoPopUp"
							/>
						</section>
						<section className="card__name">
							<h3 className="card__title"></h3>
							<section className="card__like">
								<button className="button-like"></button>
								<span className="count-likes">3</span>
							</section>
						</section>
					</article>
				</template>
			</main>

			<PopupWithForm modal={modalAddPlace} />
			<PopupWithForm modal={modalEditAvatar} />
			<PopupWithForm modal={modalEditProfile} />
			<PopupWithForm modal={modalDeleteCard} />

			{/* 			<div className="modal edit-profile" id="editProfile">
				<div className="modal__container edit-profile__container">
					<button className="close button-close"></button>

					<form
						className="edit-profile__form form"
						action="#"
						name="editProfile"
						noValidate
					>
						<fieldset className="form__fieldset">
							<h2 className="edit-profile__title">Editar Perfil</h2>
							<input
								type="text"
								id="edit-profile__name"
								name="editProfileName"
								className="form__input modal__input edit-profile__input edit-profile__name"
								required
								minLength="2"
								maxLength="40"
								data-target="name"
							/>
							<span className="edit-profile__name-error form__input-error"></span>

							<input
								type="text"
								id="edit-profile__about"
								name="editProfileAbout"
								className="form__input modal__input edit-profile__input edit-profile__about"
								required
								minLength="2"
								maxLength="200"
								data-target="about"
							/>
							<span className="edit-profile__about-error form__input-error"></span>

							<button type="submit" className="button button-save">
								Guardar
							</button>
						</fieldset>
					</form>
				</div>
			</div>

			<div className="modal add-place" id="addPlace">
				<div className="modal__container add-place__container">
					<button className="close button-close"></button>

					<form
						className="add-place__form form"
						action="#"
						name="addPlace"
						noValidate
					>
						<fieldset className="form__fieldset">
							<h2 className="add-place__title">Nuevo Lugar</h2>
							<input
								type="text"
								id="add-place__name"
								name="addPlaceName"
								className="form__input modal__input add-place__name"
								placeholder="Título"
								required
								minLength="2"
								maxLength="30"
							/>
							<span className="add-place__name-error form__input-error"></span>

							<input
								type="URL"
								id="add-place__link"
								name="addPlaceLink"
								className="form__input modal__input add-place__link"
								placeholder="URL de la imagen"
								required
							/>
							<span className="add-place__link-error form__input-error"></span>

							<button type="submit" className="button button-save">
								Crear
							</button>
						</fieldset>
					</form>
				</div>
			</div>

			<div className="modal photo-popup" id="photoPopUp">
				<div className="photo-popup__container">
					<button className="close button-close"></button>
					<img src=" " alt=" " className="photo-popup__image" />
					<p className="photo-popup__title"></p>
				</div>
			</div>

			<div className="modal delete-card" id="deleteCard">
				<div className="modal__container delete-card__container">
					<button className="close button-close"></button>

					<form
						className="delete-card__form form"
						action="#"
						name="deleteCard"
						noValidate
					>
						<h2>¿Estás segur@?</h2>
						<button type="submit" className="button button-save">
							Sí, quiero borrar esto!
						</button>
					</form>
				</div>
			</div>

			<div className="modal edit-avatar" id="editAvatar">
				<div className="modal__container edit-avatar__container">
					<button className="close button-close"></button>

					<form
						className="edit-avatar__form form"
						action="#"
						name="editAvatar"
						noValidate
					>
						<fieldset className="form__fieldset">
							<h2>Cambiar foto de perfil</h2>

							<input
								type="URL"
								id="edit-avatar__link"
								name="editAvatarLink"
								className="form__input modal__input edit-avatar__link"
								placeholder="URL de la imagen"
								required
							/>
							<span className="edit-avatar__link-error form__input-error"></span>

							<button type="submit" className="button button-save">
								Guardar
							</button>
						</fieldset>
					</form>
				</div>
			</div> */}
		</>
	);
};

export default Main;
