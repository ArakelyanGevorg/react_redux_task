const f = (state) => {
  const newState = JSON.parse(JSON.stringify(state));
  return newState;
};
export default f;