import React from "react";

const Header = () => {
	function handleEditAvatarClick() {
		console.log("handleEditAvatarClick");
	}
	function handleEditProfileClick() {
		console.log("handleEditProfileClick");
	}
	function handleAddPlaceClick() {
		console.log("handleAddPlaceClick");
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
