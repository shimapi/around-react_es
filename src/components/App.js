import "../index.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import api from "../utils/api";

function App() {
	const [currentUser, setCurrentUser] = useState({});
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isImageOpen, setIsImageOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({});

	useEffect(() => {
		api
			.getProfileInitialInfo()
			.then((res) => {
				setCurrentUser(res);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

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
			<CurrentUserContext.Provider value={currentUser}>
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
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
