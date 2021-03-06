import { connect } from "react-redux";

import { SearchBarFilterButton } from "./SearchBarFilterButton";
import { setFilterSectionVisibility } from "actions/FilterListActions";

const mapStateToProps = (state) => {
  return {
    searchInputValue: state.searchInputValue,
  };
};

const mapDispatchToProps = {
  setFilterSectionVisibility,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBarFilterButton);
