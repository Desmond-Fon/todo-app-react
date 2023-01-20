import cross from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";

const Todo = () => {
    return (
        <div class="px-5 lg:px-96">
            <input
                type="text"
                name=""
                id="input"
                placeholder="Create a new todo..."
                class="w-full h-12 rounded-md px-5 text-xs mb-4 shadow-md dark:bg-veryDarkSaturatedBlueDM dark:text-lightGrayishBlueDM outline-none"
            />

            <div class="shadow-md">
                <div
                    class="bg-white rounded-md dark:bg-veryDarkSaturatedBlueDM dark:shadow-lg"
                >
                    <ul id="list">
                        <li
                            class="flex justify-between py-4 px-5 text-xs items-center text-veryDarkGrayishBlueLT dark:text-lightGrayishBlueDM"
                        >
                            <span class="flex items-center">
                                <span class="border p-1 rounded-full w-5 h-5 mr-2 check dark:border-gray-600" onclick="print()">
                                    <img
                                        src={check}
                                        alt=""
                                        class="w-3 hidden tick" id="tick"
                                    />
                                </span>
                                <p>Complete online javascript course</p>
                            </span>
                            <span>
                                <img src={cross} alt="" class="w-3" />
                            </span>
                        </li>
                        <div class="w-full h-[1px] bg-gray-200 dark:bg-gray-600 "></div>
                    </ul>
                    <div
                        class="flex justify-between px-5 text-xs py-4 text-darkGrayishBlueLT"
                    >
                        <button id="items-left">0 items left</button>
                        <button id="clear-completed">Clear Completed</button>
                    </div>
                </div>
            </div>

            <div
                class="class= w-full h-12 rounded-md px-5 text-sm mt-4 flex justify-center items-center shadow-sm bg-white dark:bg-veryDarkSaturatedBlueDM dark:shadow-lg"
            >
                <button
                    class="px-3 font-bold text-darkGrayishBlueLT hover:text-blue-600 active:text-blue-600"
                    id="all"
                >
                    All
                </button>
                <button
                    class="px-3 font-bold text-darkGrayishBlueLT hover:text-blue-600 active:text-blue-600"
                    id="active"
                >
                    Active
                </button>
                <button
                    class="px-3 font-bold text-darkGrayishBlueLT hover:text-blue-600 active:text-blue-600"
                    id="completed"
                >
                    Completed
                </button>
            </div>
        </div>);
}

export default Todo;