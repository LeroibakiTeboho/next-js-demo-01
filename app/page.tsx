import { getAllTodos } from "@/api";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import Link from "next/link";


export default async function Home() {
  const tasks = await getAllTodos();
  return (
    <main className="max-w-4xl mx-auto pt-10">
      <div className="text-center my-8 flex flex-col gap-4">
        <div className="navbar text-[1.2rem]">
          <Link href='/'>Home</Link>
          <Link className="px-3" href='./counter'>Counter</Link>
        </div>
        <h1 className="text-4xl mb-4 font-bold">Todo List Application</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
