import "../index.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup.jsx";

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

	function handleUpdateUser(user) {
		//logica para editar perfil
		api.editProfileInfo(user.name, user.about).then((data) => {
			setCurrentUser(data);
			closeAllPopups();
		});
	}

	function handleUpdateAvatar(avatar) {
		api.editProfileAvatar(avatar).then((data) => {
			setCurrentUser(data);
			closeAllPopups();
		});
	}

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
					isAddPlacePopupOpen={isAddPlacePopupOpen}
					onEditProfileClick={handleEditProfileClick}
					onAddPlaceClick={handleAddPlaceClick}
					onEditAvatarClick={handleEditAvatarClick}
					closeAllPopups={closeAllPopups}
					isImageOpen={isImageOpen}
					onOpenImage={handleImageOpenClick}
					selectedCard={selectedCard}
				/>
				<Footer />

				<EditProfilePopup
					isOpen={isEditProfilePopupOpen}
					onClose={closeAllPopups}
					onUpdateUser={handleUpdateUser}
				/>

				<EditAvatarPopup
					isOpen={isEditAvatarPopupOpen}
					onClose={closeAllPopups}
					onUpdateAvatar={handleUpdateAvatar}
				/>
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
