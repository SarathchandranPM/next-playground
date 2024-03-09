import { createTask } from "@/utils/actions";

const TasksForm = () => {
  // In server actions, when we're working with input value, it is important to provide the name attribute to the input. We can then access the input value using the name
  return (
    <form action={createTask}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type here"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Create Task
        </button>
      </div>
    </form>
  );
};
export default TasksForm;
