export function openSlider(id) {
  return {
    type: "OPEN_SLIDER",
    id
  };
}

export function closeSlider(id) {
  return {
    type: "CLOSE_SLIDER",
    id
  };
}
