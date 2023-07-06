import "../index.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Footer from "./Footer.jsx";
import api from "../utils/api";
import EditProfilePopup from "./EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup.jsx";
import AddPlacePopup from "./AddPlacePopup.jsx";

function App() {
	const [currentUser, setCurrentUser] = useState({});
	const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
	const [isImageOpen, setIsImageOpen] = useState(false);
	const [selectedCard, setSelectedCard] = useState({});
	const [cards, setCards] = useState([]);

	useEffect(() => {
		api.getCards().then((res) => {
			setCards(res);
		});
	}, []);

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

	function handleCardLike(card) {
		const isLiked = card.likes.some((i) => i._id === currentUser._id);

		api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
			setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
		});
	}
	function handleAddPlace(name, link) {
		api.addNewCard(name, link).then((data) => {
			setCards([data, ...cards]);
			closeAllPopups();
		});
	}
	function handleCardDelete(card) {
		api.deleteCard(card._id).then(() => {
			setCards(
				cards.filter((item) => {
					return item._id !== card._id;
				})
			);
		});
	}

	function handleUpdateUser(user) {
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
					onEditProfileClick={handleEditProfileClick}
					onAddPlaceClick={handleAddPlaceClick}
					onEditAvatarClick={handleEditAvatarClick}
					closeAllPopups={closeAllPopups}
					isImageOpen={isImageOpen}
					onOpenImage={handleImageOpenClick}
					selectedCard={selectedCard}
					cards={cards}
					onCardLike={handleCardLike}
					onCardDelete={handleCardDelete}
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

				<AddPlacePopup
					isOpen={isAddPlacePopupOpen}
					onClose={closeAllPopups}
					onAddPlace={handleAddPlace}
				/>
			</CurrentUserContext.Provider>
		</div>
	);
}

export default App;
