// @flow
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as customActions } from "../../store/custom";

import MainPage from "../../components/pages/MainPage";

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
