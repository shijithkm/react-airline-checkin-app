export const LOAD_COURSES_SUCCESS = "LOAD_COURSES_SUCCESS";
export const LOAD_AUTHORS_SUCCESS = "LOAD_AUTHORS_SUCCESS";
export const CREATE_COURSE_SUCCESS = "CREATE_COURSE_SUCCESS";
export const UPDATE_COURSE_SUCCESS = "UPDATE_COURSE_SUCCESS";
export const BEGIN_API_CALL = "BEGIN_API_CALL";
export const API_CALL_ERROR = "API_CALL_ERROR";
// By convention, actions that end in "_SUCCESS" are assumed to have been the result of a completed
// API call. But since we're doing an optimistic delete, we're hiding loading state.
// So this action name deliberately omits the "_SUCCESS" suffix.
// If it had one, our apiCallsInProgress counter would be decremented below zero
// because we're not incrementing the number of apiCallInProgress when the delete request begins.
export const DELETE_COURSE_OPTIMISTIC = "DELETE_COURSE_OPTIMISTIC";

export const LOAD_PASSENGERS_SUCCESS = "LOAD_PASSENGERS_SUCCESS";
export const CREATE_PASSENGER_SUCCESS = "CREATE_PASSENGER_SUCCESS";
export const UPDATE_PASSENGER_SUCCESS = "UPDATE_PASSENGER_SUCCESS";
export const DELETE_PASSENGER_OPTIMISTIC = "DELETE_PASSENGER_OPTIMISTIC";

export const LOAD_ANCILLARY_SERVICES_SUCCESS =
  "LOAD_ANCILLARY_SERVICES_SUCCESS";
export const CREATE_ANCILLARY_SERVICE_SUCCESS =
  "CREATE_ANCILLARY_SERVICE_SUCCESS";
export const UPDATE_ANCILLARY_SERVICE_SUCCESS =
  "UPDATE_ANCILLARY_SERVICE_SUCCESS";
export const DELETE_ANCILLARY_SERVICE_OPTIMISTIC =
  "DELETE_ANCILLARY_SERVICE_OPTIMISTIC";
