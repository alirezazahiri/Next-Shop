const initialState = {
  selectedItems: [],
  totalPrice: 0,
  totalCount: 0,
  isCheckout: false,
};

const calcTotals = (items) => {
  const totalPrice = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const totalCount = items.reduce((total, item) => total + item.quantity, 0);
  return { totalCount, totalPrice };
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        const newItems = [
          ...state.selectedItems,
          { ...action.payload, quantity: 1 },
        ];
        return {
          ...state,
          selectedItems: newItems,
          ...calcTotals(newItems),
        };
      }
      return state;
    case "REMOVE_ITEM":
      if (state.selectedItems.find((item) => item.id === action.payload)) {
        const newItems = [...state.selectedItems].filter(
          (item) => item.id !== action.payload
        );
        return {
          ...state,
          selectedItems: newItems,
          ...calcTotals(newItems),
        };
      }
      return state;
    case "INCREASE_ITEM":
      const newItems_i = [...state.selectedItems].map((item) => {
        if (item.id === action.payload) {
          const newItem = { ...item, quantity: item.quantity + 1 };
          return newItem;
        }
        return item;
      });
      return {
        ...state,
        selectedItems: newItems_i,
        ...calcTotals(newItems_i),
      };
    case "DECREASE_ITEM":
      const newItems_d = [...state.selectedItems].map((item) => {
        if (item.id === action.payload) {
          const newItem = { ...item, quantity: item.quantity - 1 };
          return newItem;
        }
        return item;
      });
      return {
        ...state,
        selectedItems: newItems_d,
        ...calcTotals(newItems_d),
      };
    case "CHECKOUT":
      return { ...initialState, isCheckout: true };
    case "CLEAR":
      return { ...initialState, selectedItems: [], isCheckout: false };
    default:
      return state;
  }
};

export default shopReducer;
