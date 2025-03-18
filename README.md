## Getting Started

1. Install the packages:
```bash
npm run install
```

2. Create an `.env.local` file
- Populate the values based on the `.env.local.example` file.
- Currently, there is only one value: `NEXT_PUBLIC_API_URL`. Give it a value of `https://jsonplaceholder.typicode.com`

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

## Deployed application
Please feel free to access the application at: https://task-manager.thecodecompass.com/

---
### Points for improvment

If given more time I would apply the following:

1. Change the value in `NEXT_PUBLIC_API_URL` to point to a live API.
2. Update the reducers in `tasksSlice` so that instead of dealing with mocked data, we deal with real data coming from a proper API.
3. Create a suite of unit tests for the `TaskList`, `TaskItem` and `AddTaskForm` components.
4. Create snapshot tests for all the components.
5. Add authentication via the `next-auth` library.
6. Integrate Storybook to preview common components.
7. Integrate `react-hook-form` in case we add more form components.
8. Configure `eslint` and `prettier` rules to assist in maintaining code quality.