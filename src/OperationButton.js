import { ACTIONS } from "./Cal";

export default function OperationButton({ dispatch, operation }) {
  return (
    <button className="opbtn"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}
