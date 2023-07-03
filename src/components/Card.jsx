import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = (props) => {
	const currentUser = useContext(CurrentUserContext);
	// Verificando si el usuario actual es el propietario de la tarjeta actual
	const isOwn = props.owner._id === currentUser._id;
	// Creando una variable que después establecerás en `className` para el botón eliminar
	const cardDeleteButtonClassName = isOwn ? "button-delete" : "";

	// Verifica si el usuario actual le dio "like" a la tarjeta
	const isLiked = props.likes.some((card) => card._id === currentUser._id);
	console.log(isLiked);
	// Crea una variable que después establecerás en `className` para el botón like
	const cardLikeButtonClassName = `button-like 
		${isLiked ? "button-like-active" : ""}`;

	function handleCardPhotoClick() {
		props.onOpenImage(props);
	}
	return (
		<article className="card" id={props.id}>
			<section className="card__photo">
				<button className={cardDeleteButtonClassName}></button>
				<img
					src={props.link}
					alt={props.name}
					onClick={handleCardPhotoClick}
					className="card__image"
					data-target="#photoPopUp"
				/>
			</section>
			<section className="card__name">
				<h3 className="card__title">{props.name}</h3>
				<section className="card__like">
					<button
						className={cardLikeButtonClassName}
						onClick={() => {
							//para usar la funcion, requiero ejecutar la funcion
							props.onCardLike(props.card);
						}}
					></button>
					<span className="count-likes">{props.likes.length}</span>
				</section>
			</section>
		</article>
	);
};

export default Card;
