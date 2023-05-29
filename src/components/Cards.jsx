import React from "react";

const Cards = () => {
	return (
		<main className="main main-cards">
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
		</main>
	);
};

export default Cards;
