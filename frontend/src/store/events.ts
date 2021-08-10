import { AppDispatch } from "..";
import { csrfFetch } from "./csrf";

const GET_EVENTS = "events/getEvents"
const REMOVE_EVENTS = "events/removeEvents"

export interface eventsInterface {
   id: number | null,
   description: string,
   createdAt: string | null,
   updatedAt: string | null
}

const initialState: eventsInterface[] = [
   {
      id: null,
      description: "",
      createdAt: null,
      updatedAt: null
   }
]
// Action
const setEvents = (events: eventsInterface[]) => {
  return {
    type: GET_EVENTS,
    payload: events,
  };
};

const deleteEvents = () => {
  return {
    type: REMOVE_EVENTS,
    payload: initialState
  }
}
// thunk action
export const getEvents = (userId: number | string) => async (dispatch: AppDispatch) => {
   const events = await csrfFetch(`/api/events/${userId}`)
   const data = await events.json()
   dispatch(setEvents(data))
   return data
}

export const removeEvents = () => (dispatch: AppDispatch) => {
  dispatch(deleteEvents())
}
// reducer
const eventsReducer = (state = initialState, action: {type: string, payload: eventsInterface}) => {
  let newState;
  switch (action.type) {
    case GET_EVENTS:
      newState = action.payload
      return newState;
    case REMOVE_EVENTS:
      return action.payload
    default:
      return state;
  }
};

export default eventsReducer;
