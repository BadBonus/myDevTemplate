import { all, put, call, take, takeEvery } from "redux-saga/effects";
import { actions as types } from "./index";
import makeApi from "../../api";

// function* signUpSaga({ payload }) {
//     try {
//         let response;
//         const auth = makeApi().auth;
//         const { email, password, role, zip, manufacturers } = payload;

//         if (role === 'customer') {
//             response = yield call([auth, auth.registerCustomer], { email, password, role, zip });
//         }
//         else {
//             response = yield call([auth, auth.registerDealer], { email, password, role, zip, manufacturers });
//         }

//         if (response.data) {
//             const { token } = response.data.user;
//             const user = { ...response.data.user };

//             localStorage.setItem('token', token);

//             yield put(types.signUpSuccess({ decodedJWT: user }));

//             history.push('/dash');
//         }

//     } catch (error) {
//         yield put(types.signUpFailure({ error }))
//     }
// }

// расскоментить когда начнется разработка, вставить свои вызовы
// const customSagas = [takeEvery(types.getGhibliFilms, getGhibliFilmsSaga)];

// удалить при разработке
const customSagas = [];
export default customSagas;
