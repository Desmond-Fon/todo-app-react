import cross from "../images/icon-cross.svg";
import Check from "./Check";

const Todo = ({
  handleChange,
  name,
  handleKeyDown,
  todo,
  toggleCheck,
  check,
}) => {
  return (
    <div className="px-5 lg:px-96">
      <input
        type="text"
        name=""
        id="input"
        placeholder="Create a new todo..."
        className="w-full h-12 rounded-md px-5 text-xs mb-4 shadow-md dark:bg-veryDarkSaturatedBlueDM dark:text-lightGrayishBlueDM outline-none"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <div className="shadow-md">
        <div className="bg-white rounded-md dark:bg-veryDarkSaturatedBlueDM dark:shadow-lg">
          <ul id="todo">
            {todo.map((item) => {
              return (
                <div key={Math.floor(Math.random() * 1000) + 1}>
                  <li className="flex justify-between py-4 px-5 text-xs items-center text-veryDarkGrayishBlueLT dark:text-lightGrayishBlueDM">
                    <span className="flex items-center">
                      <Check toggleCheck={toggleCheck} check={check}/>
                      <p>{item}</p>
                    </span>
                    <span>
                      <img src={cross} alt="" className="w-3" />
                    </span>
                  </li>
                  <div className="w-full h-[1px] bg-gray-200 dark:bg-gray-600 "></div>
                </div>
              );
            })}
          </ul>
          <div className="flex justify-between px-5 text-xs py-4 text-darkGrayishBlueLT">
            <button id="items-left">{todo.length} items left</button>
            <button id="clear-completed">Clear Completed</button>
          </div>
        </div>
      </div>

      <div className="className= w-full h-12 rounded-md px-5 text-sm mt-4 flex justify-center items-center shadow-sm bg-white dark:bg-veryDarkSaturatedBlueDM dark:shadow-lg">
        <button
          className="px-3 font-bold text-darkGrayishBlueLT hover:text-blue-600 active:text-blue-600"
          id="all"
        >
          All
        </button>
        <button
          className="px-3 font-bold text-darkGrayishBlueLT hover:text-blue-600 active:text-blue-600"
          id="active"
        >
          Active
        </button>
        <button
          className="px-3 font-bold text-darkGrayishBlueLT hover:text-blue-600 active:text-blue-600"
          id="completed"
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default Todo;
