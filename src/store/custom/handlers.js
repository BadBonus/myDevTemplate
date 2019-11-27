const initialState = {
  isLoading: false,
  error: null,
};

// общий экшен для всех ошибок в Custom
export const processFailure = (state, { payload }) => ({
  ...state,
  error: payload.error,
  isLoading: false,
});

// export const getGhibliFilms = (state, { payload }) => ({
//   ...state,
//   isLoading: true,
// });

// export const getGhibliFilmsSuccess = (state, { payload }) => ({
//   ...state,
//   isLoading: false,
//   ghibliFilms: payload.ghibliFilms,
// });

export default initialState;
