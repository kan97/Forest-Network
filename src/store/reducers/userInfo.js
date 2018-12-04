const initialState = {
  fullName: 'Panda Team',
  post: 111,
  followers: 56,
  following: 98,
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
}

const userInfo = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default userInfo