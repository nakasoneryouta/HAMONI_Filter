/* No Use */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BottomTabType } from '../@types';

type State = {
	token: BottomTabType | null,
}

const initialState: State = {
	token: null,
}

const accessTokenStore = createSlice({
	name: 'accessToken',
	initialState,
	reducers: {
		setToken(state: State, action: PayloadAction<BottomTabType>) {
			state.token = action.payload
		}
	}
})

export const {
	setToken
} = accessTokenStore.actions

export default accessTokenStore