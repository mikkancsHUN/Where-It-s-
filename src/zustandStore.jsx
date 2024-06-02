import create from 'zustand';

const useOrderStore = create((set) => ({
  orderDataList: JSON.parse(localStorage.getItem('orderData')) || [],
  updateOrder: (updatedOrderData) => set((state) => {
    const updatedOrderDataList = state.orderDataList.map((item) =>
      item.eventName === updatedOrderData.eventName ? updatedOrderData : item
    );
    localStorage.setItem('orderData', JSON.stringify(updatedOrderDataList));
    return { orderDataList: updatedOrderDataList };
  }),
  setOrderDataList: (orderDataList) => set(() => ({ orderDataList })),
}));

export default useOrderStore;
