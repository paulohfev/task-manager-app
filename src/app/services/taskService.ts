import jsonPlaceholderApiClient from "@/app/clients/jsonPlaceholderClient"
import { Task } from "@/app/types/Task"

export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await jsonPlaceholderApiClient.get<Task[]>('/todos', { params: { _limit: 5 } });
    return response.data;
  } catch(err) {
    console.error(err);
    throw new Error('Failed to fetch todos');
  }
}