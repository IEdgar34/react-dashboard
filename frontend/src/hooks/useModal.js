import { React, useCallback, useState } from "react";

export const useModal = () => {
	const [modalIsActive, setModalIsActive] = useState(false);

	const modalChange = useCallback(() => {
		setModalIsActive((prev) => (prev ? false : true));
	}, []);
	return [modalIsActive, modalChange];
};
