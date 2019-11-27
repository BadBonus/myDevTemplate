import makeCustomApi from "./customApi";

const makeApi = (dependencies = {}) => ({
  custom: makeCustomApi(dependencies),
});

export default makeApi;
