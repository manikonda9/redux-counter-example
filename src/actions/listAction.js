export const addItem = text => ({
  type: "ADD_LIST",
  text
});

export const deleteItem = id => ({
  type: "DELETE",
  id
});
