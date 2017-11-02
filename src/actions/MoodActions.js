import { SET_MOOD } from '../constants/Mood'

export function setMood(mood) {

	return {
		type: SET_MOOD,
		payload: mood
	}

}
