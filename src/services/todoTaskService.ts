import jsonPlaceholderApiClient from "@/clients/jsonPlaceholderClient"
import { TodoTask } from "@/types/TodoTask"

export const getTodoTasks = async (): Promise<TodoTask[]> => {
  try {
    const response = await jsonPlaceholderApiClient.get('todos?_limit=5');
    return response.data;
  } catch(err) {
    throw new Error('Failed to fetch todos');
  }
}