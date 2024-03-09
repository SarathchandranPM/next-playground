"use server";

import prisma from "@/utils/bd";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Get all tasks
export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Create a new task
export const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");
  // The statement revalidatePath("/tasks") in Next.js serves the purpose of triggering the revalidation process for the /tasks page. This revalidation aims to refresh the page's data with the latest information from the server at a predetermined interval, ensuring users see up-to-date content even after the initial render.
};

// Delete a task
export const deleteTask = async (formData) => {
  const id = formData.get("id");
  await prisma.task.delete({
    where: {
      id,
    },
  });
  revalidatePath("/tasks");
};

// Get Individual Task
export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id,
    },
  });
};

// Edit individual Task
export const editTask = async (formData) => {
  console.log(formData);
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");

  await prisma.task.update({
    where: {
      id,
    },
    data: {
      content,
      completed: completed === "on" ? true : false,
    },
  });
  redirect("/tasks");
  // Make sure to import redirect from 'next/navigation'
};
