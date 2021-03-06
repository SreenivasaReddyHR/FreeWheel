export const actionTypes = {
  LOAD_DATA: "LOAD_DATA_SERVICES",
  LOAD_DATA_SUCCESS: "LOAD_DATA_SUCCESS_SERVICES",
  LOAD_DATA_FAILURE: "LOAD_DATA_FAILURE_SERVICES"
};

export function loadData() {
  return {
    type: actionTypes.LOAD_DATA
  };
}

export function loadDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    payload: {
      data: data
    }
  };
}

export function loadDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_DATA_FAILURE,
    payload: {
      error: error
    }
  };
}
