import React from "react";

const Cards = (props) => {
	function handleCardPhotoClick() {
		props.onOpenImage(props);
	}
	return (
		<article className="card" id={props.id}>
			<section className="card__photo">
				<button className="button-delete"></button>
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
					<button className="button-like"></button>
					<span className="count-likes">{props.likes}</span>
				</section>
			</section>
		</article>
	);
};

export default Cards;
