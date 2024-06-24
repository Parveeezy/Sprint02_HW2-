const initState = {
    themeId: 1,
}
type InitStateType = typeof initState
type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeIdType): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({type: 'SET_THEME_ID', id} as const) // fix any