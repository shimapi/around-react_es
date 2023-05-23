import "./index.css";
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";

function App() {
	const [editAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
	const [editProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
	const [addPlacePopupOpen, setAddPlacePopupOpen] = useState(false);

	function isEditAvatarPopupOpen() {
		console.log("isEditAvatarPopupOpen");
		const modal = document.querySelector(".edit-avatar");
		modal.classList.add("modal_active");
		setEditAvatarPopupOpen(true);
	}
	function isEditProfilePopupOpen() {
		console.log("isEditProfilePopupOpen");
		const modal = document.querySelector(".edit-profile");
		modal.classList.add("modal_active");
		setEditProfilePopupOpen(true);
	}
	function isAddPlacePopupOpen() {
		console.log("isAddPlacePopupOpen");
		const modal = document.querySelector(".add-place");
		modal.classList.add("modal_active");
		setAddPlacePopupOpen(true);
	}

	return (
		<div className="App container">
			<Header />
			<Main
				onEditProfileClick={isEditProfilePopupOpen}
				onAddPlaceClick={isAddPlacePopupOpen}
				onEditAvatarClick={isEditAvatarPopupOpen}
				/* onCardClick={} */
			/>
			<Footer />
		</div>
	);
}

export default App;
