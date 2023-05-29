import React, { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.jsx";
import Card from "./Card.jsx";
import { api } from "../utils/api.js";
import ImagePopup from "./ImagePopup.jsx";

const Main = (props) => {
	const [userName, setUserName] = useState("");
	const [userAbout, setUserAbout] = useState("");
	const [userAvatar, setUserAvatar] = useState("");
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api.getProfileInitialInfo().then((res) => {
			setUserName(res.name);
			setUserAbout(res.about);
			setUserAvatar(res.avatar);
		});
	}, []);

	useEffect(() => {
		api.getCards().then((res) => {
			setCards(res);
		});
	}, []);

	return (
		<>
			<section className="owner">
				<div className="avatar">
					<img
						className="avatar__circle"
						src={userAvatar}
						alt={`Foto de perfil de ${userName}`}
					/>
					<button
						className="avatar__edit"
						onClick={props.onEditAvatarClick}
					></button>
				</div>

				<div className="main-text">
					<div className="main-text__container">
						<h1 className="main-text__name">{userName}</h1>
						<button
							className="button button-edit"
							data-target="#editProfile"
							onClick={props.onEditProfileClick}
						></button>
					</div>
					<h2 className="main-text__about">{userAbout}</h2>
				</div>
			</section>
			<section className="upload">
				<button
					className="button button-add"
					data-target="#addPlace"
					onClick={props.onAddPlaceClick}
				></button>
			</section>

			<main className="main main-cards">
				{cards.map((card) => {
					return (
						<Card
							key={card._id}
							name={card.name}
							link={card.link}
							likes={card.likes.length}
							onOpenImage={props.onOpenImage}
						/>
					);
				})}
			</main>
			<ImagePopup
				isOpen={props.isImageOpen}
				onClose={props.closeAllPopups}
				selectedCard={props.selectedCard}
			/>

			<PopupWithForm
				title="Añadir Lugar"
				submitText="Crear"
				isOpen={props.isAddPlacePopupOpen}
				onClose={props.closeAllPopups}
			>
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
			</PopupWithForm>
			<PopupWithForm
				title="Editar Avatar"
				submitText="Guardar"
				isOpen={props.isEditAvatarPopupOpen}
				onClose={props.closeAllPopups}
			>
				<input
					type="URL"
					id="edit-avatar__link"
					name="editAvatarLink"
					className="form__input modal__input edit-avatar__link"
					placeholder="URL de la imagen"
					required
				/>
				<span className="edit-avatar__link-error form__input-error"></span>
			</PopupWithForm>
			<PopupWithForm
				title="Editar Perfil"
				submitText="Guardar"
				isOpen={props.isEditProfilePopupOpen}
				onClose={props.closeAllPopups}
			>
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
			</PopupWithForm>
			{/*
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
			*/}
		</>
	);
};

export default Main;
