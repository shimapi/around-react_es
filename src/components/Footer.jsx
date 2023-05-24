import React from "react";
import { originURL, useApi } from "../custom-hooks/useApi.jsx";

const Footer = () => {
	const [cards, cardsError, cardsLoading] = useApi(`${originURL}/cards`, "GET");
	console.log(`${originURL}/cards`, "GET");

	return (
		<footer className="footer">
			<p className="footer__about">© 2023 Alrededor de los EEUU</p>
		</footer>
	);
};

export default Footer;
