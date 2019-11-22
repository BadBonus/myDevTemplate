import makeCustomApi from "./customApi";

export const makeApi = (dependencies = {}) => ({
  custom: makeCustomApi(dependencies),
});

export default makeApi;
