import "../index.css";
import React, { useState } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";

function App() {
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isImageOpen, setIsImageOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({});

	function handleEditProfileClick() {
		setIsEditProfilePopupOpen(true);
	}
	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(true);
	}
	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(true);
	}
	function handleImageOpenClick(card) {
		setSelectedCard(card);
		setIsImageOpen(true);
	}
	function closeAllPopups() {
		setIsEditProfilePopupOpen(false);
		setIsAddPlacePopupOpen(false);
		setIsEditAvatarPopupOpen(false);
		setIsImageOpen(false);
	}
	return (
		<div className="App container">
			<Header />
			<Main
				isEditProfilePopupOpen={isEditProfilePopupOpen}
				isAddPlacePopupOpen={isAddPlacePopupOpen}
				isEditAvatarPopupOpen={isEditAvatarPopupOpen}
				onEditProfileClick={handleEditProfileClick}
				onAddPlaceClick={handleAddPlaceClick}
				onEditAvatarClick={handleEditAvatarClick}
				closeAllPopups={closeAllPopups}
				isImageOpen={isImageOpen}
				onOpenImage={handleImageOpenClick}
				selectedCard={selectedCard}
			/>
			<Footer />
		</div>
	);
}

export default App;
