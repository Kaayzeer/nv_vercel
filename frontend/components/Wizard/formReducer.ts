export default (previousState: any, action: { type: string; value: any }) => {
  switch (action.type) {
    case "RESET":
      return {};

    case "UPDATE_KEY_VALUES":
      return {
        ...previousState,
        ...action.value,
      };

    case "TOGGLE_DARE":
      return {
        ...previousState,
        userDares: !previousState.userDares,
      };

    default:
      return previousState;
  }
};
