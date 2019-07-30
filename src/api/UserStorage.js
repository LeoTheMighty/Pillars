import type PillarsUser from '../types/PillarsUser';

/**
 * Local Storage usage for loading the user data from to the local machine. Stores data from different runs. Indefinite
 * data storage.
 */
class UserStorage {
  // The key to access the information
  static storageKey = 'user';

  /**
   * Retrieves a user object from storage.
   *
   * @return {PillarsUser | null} The user object retrieved from the storage or null if there was no user object found.
   */
  static loadUser() {
    const userJSON = localStorage.getItem(UserStorage.storageKey);
    return userJSON ? JSON.parse(userJSON) : null;
  }

  /**
   * Saves a user object into storage.
   *
   * @param {PillarsUser} user The user object to save into the storage.
   */
  static saveUser(user) {
    localStorage.setItem(UserStorage.storageKey, JSON.stringify(user));
  }
}

export default UserStorage;