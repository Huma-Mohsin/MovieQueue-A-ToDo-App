"use client";
import { useState } from "react";

export default function Home() {
  
  // Hardcoded array of movies with unique IDs, typically sourced from a database.
  const [todos, SetTodos] = useState([
    { movie: "Django Unchained", id: 1 },
    { movie: "Catch Me If You Can", id: 2 },
    { movie: "The Wolf of Wall Street", id: 3 },
    { movie: "Inglourious Basterds", id: 4 },
    { movie: "The Departed", id: 5 },
    { movie: "American Hustle", id: 6 },
    { movie: "Ocean's Eleven", id: 7 },
    { movie: "Pulp Fiction", id: 8 },
    { movie: "Scarface", id: 9 },
    { movie: "Goodfellas", id: 10 },
    { movie: "Blow", id: 11 },
    { movie: "The Nice Guys", id: 12 },
    { movie: "The Usual Suspects", id: 13 },
    { movie: "Heat", id: 14 },
    { movie: "Inside Man", id: 15 },
    { movie: "True Romance", id: 16 },
    { movie: "Sicario", id: 17 },
    { movie: "The Town", id: 18 },
    { movie: "Casino", id: 19 },
    { movie: "Snatch", id: 20 },
  ]);

  // State to store the input value for adding a movie.
  const [inputVal, setInput] = useState("");
   // State to store the unique ID input by the user.
  const [id, setId] = useState(0);


  // Function to add or edit movies in the list.
  const addItems = () => {

    // Check if the movie ID already exists in the list.
    let obj: any = todos.find((item) => item.id == id);

    if (obj) {
      // If ID exists, remove the current movie and replace it with the new input value.
      let newArray = todos.filter((item) => item.id !== obj.id);
      SetTodos([...newArray, { movie: inputVal, id: id }]); // Update the state with the edited movie.
    } else {

      // If ID doesn't exist, add the movie as a new item.
      SetTodos([...todos, { movie: inputVal, id: id }]);
    }

    // Clear the input fields after adding or editing.
    setInput("");
    setId(0);
  };

  // Function to populate input fields for editing an existing movie.
  const editItems = (id: any) => {
    let obj: any = todos.find((item) => item.id == id);
     // Populate the fields with the current movie's data.
    setInput(obj.movie);
    setId(obj.id);
  };

  // Function to delete a movie based on its ID.
  const deleteItem = (id: any) => {
    let newArray = todos.filter((item) => item.id !== id);
      // Update the state with the remaining movies.
    SetTodos([...newArray]);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      
      <h1 className="text-center text-4xl font-bold text-blue-600 underline mb-8">MovieQueue</h1>
      <h3 className="text-center text-2xl font-bold text-blue-600 underline mb-8"> A To-Do App</h3>

      <div className="flex justify-between gap-4 mb-6">
        <input
          type="text"
          value={inputVal}
          onChange={(event) => {
            setInput(event.target.value);// Update the input value on each key press.
          }}
          className="flex-1 p-3 border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Enter Movie Name"
        />

        <input
          type="number"
          value={id}
          onChange={(event: any) => setId(event.target.value)}
          className="w-24 p-3 border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="ID"
        />

        <button
          onClick={addItems}
          className="w-32 p-3 text-lg font-semibold bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Add Movie
        </button>
      </div>

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Movies List</h2>

      <div className="grid grid-cols-2 gap-6">
        {todos.map((item: any, index: any) => {
          return (
            <div
              className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              key={index}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-gray-600">{index + 1}</span>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="text-red-500 text-lg font-semibold hover:text-red-700 focus:outline-none"
                >
                  X
                </button>
              </div>

              <div className="text-xl font-semibold text-gray-800 mb-2">{item.movie}</div>
              <button
                onClick={() => editItems(item.id)}
                className="text-sm font-medium text-blue-600 hover:underline focus:outline-none"
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
{/**Explanation of Key Sections:
State Variables:

todos: Holds the movie list, with each movie having a movie name and id.
inputVal and id: Capture the user's input for the movie title and unique ID.
addItems Function:

Checks if the entered id already exists in todos. If it does, it updates that movie entry; if not, it adds a new movie to the list.
editItems Function:

Populates inputVal and id based on the selected movie for easy editing.
deleteItem Function:

Filters out the movie with the specified id, updating todos with the remaining movies.
Movie Display Section:

Maps through todos, displaying each movie's index, title, edit, and delete options. 


Tailwind CSS Styling Adjustments
--------------------------------
Container Styling:

max-w-4xl mx-auto p-6 bg-gray-50 shadow-lg rounded-lg: The main container is centrally aligned with a light background, shadow, and rounded corners for a card-like feel.
Heading Styling:

text-4xl font-bold text-blue-600 underline mb-8: Applied to give the main heading a bold, professional look with a blue accent color.
Input Fields:

flex-1 p-3 border border-gray-300 rounded-md shadow-sm text-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500: This style adds rounded borders, subtle shadows, and a focus effect for interactive feedback on text inputs.
Button Styling:

w-32 p-3 text-lg font-semibold bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300: Provides a distinct appearance, hover effect, and focus ring for accessibility on the "Add Movie" button.
Movie List Card Styling:

p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200: Each movie card has a rounded, shadowed box with a hover effect for a professional and engaging look.





*/}