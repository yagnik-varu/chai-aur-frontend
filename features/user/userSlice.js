import { createSlice } from '@reduxjs/toolkit'

console.log(localStorage.getItem('user'))
const initialState={
    user:JSON.parse(localStorage.getItem('user'))||{}
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        userSignin(state,action){
            console.log(action.payload)
            localStorage.setItem('user',JSON.stringify(action.payload))
            state.user = {...action.payload};
        },
        userLogout(state,action){
            localStorage.setItem('user',{})
            state.user = {}
        }
    }

})

export const {userSignin,userLogout} = userSlice.actions
export default userSlice.reducer