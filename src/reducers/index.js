const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITE":
      return {
        ...state,
        favoriteGames: [...state.favoriteGames, action.payload],
      };
    case "DELETE_FAVORITE":
      return {
        ...state,
        favoriteGames: state.favoriteGames.filter(
          (items) => items.data.id !== action.payload
        ),
      };
    case "SET_SECTION":
      return {
        ...state,
        sectionActive: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
