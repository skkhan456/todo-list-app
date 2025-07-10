// import { useState,useEffect } from "react";
// import reactLogo from "./assets/react.svg";
// import { AiFillDelete } from "react-icons/ai";
// import { FaRegEdit } from "react-icons/fa";
// import viteLogo from "/vite.svg";

// import Navbar from "./components/Navbar";
// import { v4 as uuidv4 } from "uuid";

// function App() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     let todoString = localStorage.getItem("todos")
//     if(todoString){
//       let todos = JSON.parse(localStorage.getItem("todos")) 
//       setTodos(todos)
//     }
//   }, [])
  

//   const saveToLS = (updatedTodos) => {
//     localStorage.setItem("todos", JSON.stringify(updatedTodos))
//   }
  

//   let handleDelete = (e, id) => {
//     let newtodos = todos.filter((items) => {
//       return items.id !== id;
//     });

//     setTodos(newtodos);
//     saveToLS(newtodos);
//   };

//   let handleEdit = (e, id) => {
//     let t = todos.filter((items) => {
//       return items.id === id;
//     });

//     setTodo(t[0].todo);
//     let newtodos = todos.filter((items) => {
//       return items.id !== id;
//     });

//     setTodos(newtodos);
//     saveToLS(newtodos);
//   };

//   let handleAdd = (e) => {
//     const newtodos=[...todos, { id: uuidv4(), todo, isCompleted: false }];
//     setTodos(newtodos);
//     setTodo("");
//     saveToLS(newtodos);
//   };

//   let handleChange = (e) => {
//     setTodo(e.target.value);

//   };

//   let handleCheckBox = (e) => {
//     let id = e.target.name;
//     let index = todos.findIndex((items) => {
//       return items.id === id;
//     });

//     let newtodos = [...todos];
//     newtodos[index].isCompleted = !newtodos[index].isCompleted;
//     setTodos(newtodos);
//     saveToLS(newtodos);
//   };

  
//   return (
//     <>
//       <Navbar />
//       <div className="container m-auto p-5 bg-pink-200 my-5 rounded-md min-h-[80vh] md:w-[55%]">
//         <h2 className="font-bold text-center text-3xl">
//           iTask - Manage your todos at one place
//         </h2>

//         <div className="addtodo  my-5 flex flex-col gap-4">
//           <h2 className="text-2xl font-bold">Add Todo</h2>

//           <div className="adding">
//             <input
//               type="text"
//               onChange={handleChange}
//               value={todo}
              
//               className="w-1/2 rounded-md px-2 py-1 "
//             />
//             <button
//               onClick={handleAdd}
//               disabled={todo.length<3}
//               className="bg-violet-800 mx-2 rounded-md hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white"
//             >
//               Save
//             </button>
//           </div>
//         </div>

//         <h2 className="text-2xl font-bold">Your Todos</h2>
//         <div className="todos mt-3">

//            {/* traversin throughthe all list store in todos */}
//           {todos.length === 0 && (
//             <div className="font-bold">No todos to display</div>
//           )}
//           {todos.map((items) => {
//             return (
//               <div key={items.id} className="todo flex  my-3 gap-5 justify-between w-1/2">

//                 <div className="flex gap-3">
//                   <input
//                     name={items.id}
//                     onChange={handleCheckBox}
//                     type="checkbox" checked={items.isCompleted} id=""/>

//                   <div className={items.isCompleted ? "line-through" : ""}>
//                     {items.todo}
//                   </div>
//                 </div>

//                 <div className="buttons flex h-full">
//                   <button
//                     onClick={(e) => {
//                       handleEdit(e, items.id);
//                     }}
//                     className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
//                   > <FaRegEdit /> </button>
//                   <button
//                     onClick={(e) => {
//                       handleDelete(e, items.id);
//                     }}
//                     className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
//                   > <AiFillDelete /> </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { AiFillDelete } from "react-icons/ai";
// import { FaRegEdit } from "react-icons/fa";
// import Navbar from "./components/Navbar";

// function App() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     const todoString = localStorage.getItem("todos");
//     if (todoString) {
//       setTodos(JSON.parse(todoString));
//     }
//   }, []);

//   const saveToLS = (updatedTodos) => {
//     localStorage.setItem("todos", JSON.stringify(updatedTodos));
//   };

//   const handleAdd = () => {
//     const newtodos = [...todos, { id: uuidv4(), todo, isCompleted: false }];
//     setTodos(newtodos);
//     setTodo("");
//     saveToLS(newtodos);
//   };

//   const handleDelete = (id) => {
//     const newtodos = todos.filter((item) => item.id !== id);
//     setTodos(newtodos);
//     saveToLS(newtodos);
//   };

//   const handleEdit = (id) => {
//     const toEdit = todos.find((item) => item.id === id);
//     setTodo(toEdit.todo);
//     const newtodos = todos.filter((item) => item.id !== id);
//     setTodos(newtodos);
//     saveToLS(newtodos);
//   };

//   const handleChange = (e) => {
//     setTodo(e.target.value);
//   };

//   const handleCheckBox = (id) => {
//     const newtodos = todos.map((item) =>
//       item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
//     );
//     setTodos(newtodos);
//     saveToLS(newtodos);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-tr from-pink-100 to-violet-100 p-4 flex flex-col items-center">
//         <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
//           <h1 className="text-3xl font-bold text-center text-violet-800 mb-6">
//             iTask - Manage your todos at one place
//           </h1>

//           {/* Add Todo Section */}
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold mb-2 text-gray-700">Add Todo</h2>
//             <div className="flex flex-col sm:flex-row gap-3">
//               <input
//                 type="text"
//                 value={todo}
//                 onChange={handleChange}
//                 placeholder="Write your task..."
//                 className="flex-1 border-2 border-violet-300 focus:border-violet-500 outline-none rounded-lg px-4 py-2 text-gray-800 shadow-sm"
//               />
//               <button
//                 onClick={handleAdd}
//                 disabled={todo.length < 3}
//                 className="bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
//               >
//                 Add Task
//               </button>
//             </div>
//           </div>

//           {/* Display Todos */}
//           <h2 className="text-xl font-semibold mb-3 text-gray-700">Your Todos</h2>
//           <div className="space-y-3">
//             {todos.length === 0 && (
//               <div className="text-center text-gray-500 font-medium">No todos to display</div>
//             )}

//             {todos.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
//               >
//                 <div className="flex items-center gap-3">
//                   <input
//                     type="checkbox"
//                     checked={item.isCompleted}
//                     onChange={() => handleCheckBox(item.id)}
//                     className="w-5 h-5 accent-violet-600"
//                   />
//                   <span
//                     className={`text-lg ${
//                       item.isCompleted ? "line-through text-gray-400" : "text-gray-800"
//                     }`}
//                   >
//                     {item.todo}
//                   </span>
//                 </div>

//                 <div className="flex gap-2">
//                   <button
//                     onClick={() => handleEdit(item.id)}
//                     className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md text-sm font-medium"
//                   >
//                     <FaRegEdit />
//                   </button>
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium"
//                   >
//                     <AiFillDelete />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./components/Navbar";

function App() {
  const [todo, setTodo] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [todos, setTodos] = useState([]);

  // Load todos from localStorage on mount
  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      setTodos(JSON.parse(todoString));
    }
  }, []);

  const saveToLS = (updatedTodos) => {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleAdd = () => {
    const newtodos = [
      ...todos,
      {
        id: uuidv4(),
        todo,
        isCompleted: false,
        dueDate: selectedDate,
      },
    ];
    setTodos(newtodos);
    setTodo("");
    setSelectedDate("");
    saveToLS(newtodos);
  };

  const handleDelete = (id) => {
    const newtodos = todos.filter((item) => item.id !== id);
    setTodos(newtodos);
    saveToLS(newtodos);
  };

  const handleEdit = (id) => {
    const toEdit = todos.find((item) => item.id === id);
    setTodo(toEdit.todo);
    setSelectedDate(toEdit.dueDate || "");
    const newtodos = todos.filter((item) => item.id !== id);
    setTodos(newtodos);
    saveToLS(newtodos);
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckBox = (id) => {
    const newtodos = todos.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newtodos);
    saveToLS(newtodos);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-tr from-pink-100 to-violet-100 p-4 flex flex-col items-center">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-6">
          <h1 className="text-4xl font-bold text-center text-violet-800 mb-6">
            iTask - Manage your todos at one place
          </h1>

          {/* Add Todo Section */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Add Todo</h2>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                value={todo}
                onChange={handleChange}
                placeholder="Write your task..."
                className="flex-1 border-2 border-violet-300 focus:border-violet-500 outline-none rounded-lg px-4 py-2 text-gray-800 shadow-sm"
              />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="border-2 border-violet-300 rounded-lg px-3 py-2 text-gray-700"
              />
              <button
                onClick={handleAdd}
                disabled={todo.length < 3}
                className="bg-violet-600 hover:bg-violet-700 disabled:bg-violet-300 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
              >
                Add Task
              </button>
            </div>
          </div>

          {/* Completion Stats */}
          <div className="text-right text-gray-600 mb-3 text-sm">
            Completed: {todos.filter((t) => t.isCompleted).length} / {todos.length}
          </div>

          {/* Display Todos */}
          <h2 className="text-xl font-semibold mb-3 text-gray-700">Your Todos</h2>
          <div className="space-y-3">
            {todos.length === 0 && (
              <div className="text-center text-gray-500 font-medium">No todos to display</div>
            )}

            {todos.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={item.isCompleted}
                      onChange={() => handleCheckBox(item.id)}
                      className="w-5 h-5 accent-violet-600"
                    />
                    <span
                      className={`text-lg ${
                        item.isCompleted ? "line-through text-gray-400" : "text-gray-800"
                      }`}
                    >
                      {item.todo}
                    </span>
                  </div>

                  {item.dueDate && (
                    <div
                      className={`text-sm ${
                        new Date(item.dueDate) < new Date() && !item.isCompleted
                          ? "text-red-500 font-semibold"
                          : "text-gray-500"
                      }`}
                    >
                      Due: {item.dueDate}
                    </div>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item.id)}
                    className="px-3 py-1 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md text-sm font-medium"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
