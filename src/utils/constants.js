//esta es la configuración de cada modal.
//con esto armaré cada modal
export const modalAddPlace = {
	modalName: "add-place",
	modalId: "addPlace",
	modalTitle: "Nuevo Lugar",
	modalButton: "Crear",
	modalInputs: [
		{
			inputName: "name",
			inputType: "text",
			minLength: 2,
			maxLength: 30,
		},
		{
			inputName: "link",
			inputType: "URL",
			minLength: 2,
			maxLength: 200,
		},
	],
};
export const modalEditAvatar = {
	modalName: "edit-avatar",
	modalId: "editAvatar",
	modalTitle: "Cambiar foto de perfil",
	modalButton: "Guardar",
	modalInputs: [
		{
			inputName: "name",
			inputType: "URL",
			minLength: 10,
			maxLength: 255,
		},
	],
};
export const modalDeleteCard = {
	modalName: "delete-card",
	modalId: "deleteCard",
	modalTitle: "¿Estás segur@?",
	modalButton: "Sí, quiero borrar esto!",
	modalInputs: [],
};
export const modalEditProfile = {
	modalName: "edit-profile",
	modalId: "editProfile",
	modalTitle: "Editar Perfil",
	modalButton: "Guardar",
	modalInputs: [
		{
			inputName: "name",
			inputType: "text",
			minLength: 2,
			maxLength: 40,
		},
		{
			inputName: "about",
			inputType: "text",
			minLength: 2,
			maxLength: 200,
		},
	],
};
