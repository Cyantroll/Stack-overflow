import * as api from '../api'

export const fetchAllUsers=()=>async(dispatch) =>{
    try{
        const {data} = await api.fetchAllUsers()
        dispatch({type: 'FETCH_USERS',payload:data})
    }catch(error){
        console.log(error)
    }
}

export const updatedProfile = (id, updateData) => async(dispatch) => {
    try {
        const { data } = await api.updatedProfile(id, updateData)
        dispatch({ type: 'UPDATE_CURRENT_USER', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const followUser = (userId) => async (dispatch) => {
    try {
      await api.followUser(userId);
      dispatch(fetchAllUsers());
    } catch (error) {
      console.log(error);
    }
  };
  
  export const unfollowUser = (userId) => async (dispatch) => {
    try {
      await api.unfollowUser(userId);
      dispatch(fetchAllUsers());
    } catch (error) {
      console.log(error);
    }
  };