import React, { useContext } from "react";
import Card from "./Card.jsx";
import ImagePopup from "./ImagePopup.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

const Main = (props) => {
	const currentUser = useContext(CurrentUserContext);

	return (
		<>
			<section className="owner">
				<div className="avatar">
					<img
						className="avatar__circle"
						src={currentUser.avatar}
						alt={`Foto de perfil de ${currentUser.name}`}
					/>
					<button
						className="avatar__edit"
						onClick={props.onEditAvatarClick}
					></button>
				</div>

				<div className="main-text">
					<div className="main-text__container">
						<h1 className="main-text__name">{currentUser.name}</h1>
						<button
							className="button button-edit"
							data-target="#editProfile"
							onClick={props.onEditProfileClick}
						></button>
					</div>
					<h2 className="main-text__about">{currentUser.about}</h2>
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
				{props.cards.map((card) => {
					return (
						<Card
							card={card}
							key={card._id}
							name={card.name}
							link={card.link}
							likes={card.likes}
							onOpenImage={props.onOpenImage}
							owner={card.owner}
							onCardLike={props.onCardLike}
							onCardDelete={props.onCardDelete}
						/>
					);
				})}
			</main>
			<ImagePopup
				isOpen={props.isImageOpen}
				onClose={props.closeAllPopups}
				selectedCard={props.selectedCard}
			/>

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
