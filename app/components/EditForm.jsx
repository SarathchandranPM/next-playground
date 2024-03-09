"use client";

import { editTask } from "@/utils/actions";

const EditForm = ({ task }) => {
  const { id, content, completed } = task;
  console.log(task);
  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      {/* content */}
      <input
        type="text"
        name="content"
        required
        defaultValue={content}
        className="input input-bordered w-full"
      />
      {/* completed */}
      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            defaultValue={completed}
            name="completed"
            id="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Edit
      </button>
    </form>
  );
};
export default EditForm;
