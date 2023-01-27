import { ACTIONS } from "./Cal";

export default function OperationButton({ dispatch, digit }) {
  return (
    <button className="digibtn"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
