import type { IData } from "~/types/data"
const defaultValue:IData = {
  name: '',
  phone: '',
  id: 0,
  userId: 0,
  body: '',
  title: '',
}
export const useDataStore = defineStore('data', () => {
  const data = ref<IData>(defaultValue);

  const setData = (newData: IData) => {
    data.value = newData;
  };

  const resetData = () => {
    data.value = defaultValue;
  };
  return {
    data,
    setData,
    resetData,
  };
})