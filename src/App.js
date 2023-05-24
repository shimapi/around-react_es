import "./index.css";
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
	const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
	const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
	const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

	function handleEditProfileClick() {
		console.log("handleEditProfileClick");
		const modal = document.querySelector(".edit-avatar");
		modal.classList.add("modal_active");
		setEditAvatarPopupOpen(true);
	}
	function handleAddPlaceClick() {
		console.log("handleAddPlaceClick");
		const modal = document.querySelector(".edit-profile");
		modal.classList.add("modal_active");
		setEditProfilePopupOpen(true);
	}
	function handleEditAvatarClick() {
		console.log("handleEditAvatarClick");
		const modal = document.querySelector(".add-place");
		modal.classList.add("modal_active");
		setAddPlacePopupOpen(true);
	}

	return (
		<div className="App container">
			<Header />
			<Main
				handleEditProfileClick={handleEditProfileClick}
				handleAddPlaceClick={handleAddPlaceClick}
				handleEditAvatarClick={handleEditAvatarClick}
				/* onCardClick={} */
			/>
			<Footer />
		</div>
	);
}

export default App;
