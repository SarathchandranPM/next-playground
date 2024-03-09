import TasksForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Tasks = () => {
  return (
    <div>
      <h1 className="max-w-lg">
        <TasksForm />
        <TaskList />
      </h1>
    </div>
  );
};
export default Tasks;
