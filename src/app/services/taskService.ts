import jsonPlaceholderApiClient from "@/app/clients/jsonPlaceholderClient"
import { Task } from "@/app/types/Task"

export const getTasks = async (): Promise<Task[]> => {
  try {
    const response = await jsonPlaceholderApiClient.get('todos?_limit=5');
    return response.data;
  } catch(err) {
    throw new Error('Failed to fetch todos');
  }
}