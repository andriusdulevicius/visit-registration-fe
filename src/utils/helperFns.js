import { getCostumers } from '../apis/fetch';

export async function getSortedCostumers() {
  const costumersArr = await getCostumers();
  return costumersArr.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}
