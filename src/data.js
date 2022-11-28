export const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];

const taskList = [
  {
    text: "Buy rice",
    category: "Food",
  },
  {
    text: "Save a tenner",
    category: "Money",
  },
  {
    text: "Build a todo app",
    category: "Code",
  },
  {
    text: "Build todo API",
    category: "Code",
  },
  {
    text: "Get an ISA",
    category: "Money",
  },
  {
    text: "Cook rice",
    category: "Food",
  },
  {
    text: "Tidy house",
    category: "Misc",
  },
];

export const generateID = () => "id" + Math.random().toString(32).slice(2);

export const TASKS = taskList.map((task) => {
  return { id: generateID(), ...task };
});
