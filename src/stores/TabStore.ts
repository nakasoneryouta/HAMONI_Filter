/* No Use */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BottomTabType } from '../@types';

type State = {
	tab: BottomTabType,
}

const initialState: State = {
	tab: 'filter',
}

const accessTokenStore = createSlice({
	name: 'tab',
	initialState,
	reducers: {
		changeTab(state: State, action: PayloadAction<BottomTabType>) {
			state.tab = action.payload
		}
	}
})

export const {
	changeTab
} = accessTokenStore.actions

export default accessTokenStore