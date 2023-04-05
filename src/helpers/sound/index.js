import { sounds } from "../../constants/sound/index.js";

export const playSound = (label) => {
	new Audio(sounds[label]).play().then( (r) => {});
};