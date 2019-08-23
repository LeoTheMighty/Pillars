import {LOAD_USER, SAVE_USER, ADD_PILLAR, EDIT_PILLAR, REMOVE_PILLAR} from "../typeConstants";
// For all the actions regarding the actual user using the app. (Will be used to access cloud storage of the User's
// progress and whatnot). May use API calls to retrieve info.

import UserStorage from "../../api/UserStorage";
import {newUser} from "../../logic/PillarsUserHelper";

export const updateUser = (successHandler) => {
  return (dispatch, getStore) => {
    let user = UserStorage.loadUser();
    if (!user) {
      alert("Generating new user!");
      user = newUser();
      UserStorage.saveUser(user);

      // TODO Start up flow state!

    }
    dispatch(loadUser(user));
    successHandler&&successHandler();
  };
};

export const addPillarToUser = (pillar, index = 0) => {
  return (dispatch) => {
    dispatch(addPillar(pillar, index));
  };
};

// Save
export const saveUserToStorage = () => {
  return (dispatch, getStore) => {
    UserStorage.saveUser(getStore().user.user);
    dispatch(saveUser());
  };
};

// Load

// Edit (in different ways)

// Low Level Redux Actions

const loadUser = (user) => ({
  type: LOAD_USER,
  payload: {
    user,
  },
});

const saveUser = () => ({
  type: SAVE_USER,
});

export const addPillar = (pillar, index = 0) => ({
  type: ADD_PILLAR,
  payload: {
    index,
    pillar
  },
});

const editPillar = (index, pillar) => ({
  type: EDIT_PILLAR,
  payload: {
    index,
    pillar,
  },
});

const removePillar = (index) => ({
  type: REMOVE_PILLAR,
  payload: {
    index,
  },
});