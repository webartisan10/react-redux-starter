import { SET_MOOD } from '../constants/Mood'

const initialState = {
	mood: 'Perfect',
	date: 'The best Day'
}

export default function mood(state = initialState, action) {

	switch (action.type) {
		case SET_MOOD:
			return { ...state, mood: action.payload }

		default:
			return state;
	}

}
