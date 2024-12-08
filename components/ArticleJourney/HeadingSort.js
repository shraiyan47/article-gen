import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import styles from "./HeadingSort.module.css";

// Sample Data
const initialData = [
  {
    id: "category-1",
    name: "Category 1",
    subcategories: [
      { id: "sub-1-1", name: "Subcategory 1.1" },
      { id: "sub-1-2", name: "Subcategory 1.2" },
    ],
  },
  {
    id: "category-2",
    name: "Category 2",
    subcategories: [
      { id: "sub-2-1", name: "Subcategory 2.1" },
      { id: "sub-2-2", name: "Subcategory 2.2" },
    ],
  },
];

export default function HeadingSort({ nextCallback }) {
  const [data, setData] = useState(initialData);

  // Simulated API call to send updated data
  const sendDataToBackend = async (updatedData) => {
    console.log("Sending data to backend:", updatedData);
    try {
      // Replace with actual API endpoint
      const response = await fetch("/api/updateCategories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      const result = await response.json();
      console.log("Server response:", result);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  // Update backend whenever the data changes
  // useEffect(() => {
  //   sendDataToBackend(data);
  // }, [data]);

  const onDragEnd = (result) => {
    const { source, destination, type } = result;

    if (!destination) return;

    if (type === "category") {
      const reordered = Array.from(data);
      const [removed] = reordered.splice(source.index, 1);
      reordered.splice(destination.index, 0, removed);
      setData(reordered);
      return;
    }

    const sourceCategoryIndex = data.findIndex(
      (category) => category.id === source.droppableId
    );
    const destinationCategoryIndex = data.findIndex(
      (category) => category.id === destination.droppableId
    );

    const sourceCategory = data[sourceCategoryIndex];
    const destinationCategory = data[destinationCategoryIndex];

    const sourceItems = Array.from(sourceCategory.subcategories);
    const destinationItems =
      sourceCategoryIndex === destinationCategoryIndex
        ? sourceItems
        : Array.from(destinationCategory.subcategories);

    const [removed] = sourceItems.splice(source.index, 1);
    destinationItems.splice(destination.index, 0, removed);

    const newData = Array.from(data);
    newData[sourceCategoryIndex] = {
      ...sourceCategory,
      subcategories: sourceItems,
    };
    if (sourceCategoryIndex !== destinationCategoryIndex) {
      newData[destinationCategoryIndex] = {
        ...destinationCategory,
        subcategories: destinationItems,
      };
    }

    setData(newData);
  };

  const removeCategory = (categoryId) => {
    const updatedData = data.filter((category) => category.id !== categoryId);
    setData(updatedData);
  };

  const removeSubcategory = (categoryId, subcategoryId) => {
    const updatedData = data.map((category) => {
      if (category.id === categoryId) {
        return {
          ...category,
          subcategories: category.subcategories.filter(
            (sub) => sub.id !== subcategoryId
          ),
        };
      }
      return category;
    });
    setData(updatedData);
  };

  const editItem = (categoryId, subcategoryId = null) => {
    const newName = prompt("Enter new name:");
    if (!newName) return;

    const updatedData = data.map((category) => {
      if (category.id === categoryId) {
        if (subcategoryId) {
          return {
            ...category,
            subcategories: category.subcategories.map((sub) =>
              sub.id === subcategoryId ? { ...sub, name: newName } : sub
            ),
          };
        }
        return { ...category, name: newName };
      }
      return category;
    });

    setData(updatedData);
  };

  return (
    <div>
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3 className={"font-semibold text-lg  text-blueGray-700 "}>
              Step 2 : Keywords
            </h3>
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative w-full mb-3 mt-8">
                <DragDropContext onDragEnd={onDragEnd}>
                  <Droppable droppableId="categories" type="category">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={styles.categories}
                      >
                        {data.map((category, index) => (
                          <Draggable
                            key={category.id}
                            draggableId={category.id}
                            index={index}
                          >
                            {(provided) => (
                              <div
                                {...provided.draggableProps}
                                ref={provided.innerRef}
                                className={styles.category}
                              >
                                <div
                                  className={styles.categoryHeader}
                                  {...provided.dragHandleProps}
                                >
                                  {category.name}
                                  <div>
                                    <button
                                      className={styles.editButton}
                                      onClick={() => editItem(category.id)}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      className={styles.removeButton}
                                      onClick={() =>
                                        removeCategory(category.id)
                                      }
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                                <Droppable
                                  droppableId={category.id}
                                  type="subcategory"
                                >
                                  {(provided) => (
                                    <div
                                      {...provided.droppableProps}
                                      ref={provided.innerRef}
                                      className={styles.subcategories}
                                    >
                                      {category.subcategories.map(
                                        (sub, subIndex) => (
                                          <Draggable
                                            key={sub.id}
                                            draggableId={sub.id}
                                            index={subIndex}
                                          >
                                            {(provided) => (
                                              <div
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                ref={provided.innerRef}
                                                className={styles.subcategory}
                                              >
                                                {sub.name}
                                                <button
                                                  className={styles.editButton}
                                                  onClick={() =>
                                                    editItem(
                                                      category.id,
                                                      sub.id
                                                    )
                                                  }
                                                >
                                                  Edit
                                                </button>
                                                <button
                                                  className={
                                                    styles.removeButton
                                                  }
                                                  onClick={() =>
                                                    removeSubcategory(
                                                      category.id,
                                                      sub.id
                                                    )
                                                  }
                                                >
                                                  Remove
                                                </button>
                                              </div>
                                            )}
                                          </Draggable>
                                        )
                                      )}
                                      {provided.placeholder}
                                    </div>
                                  )}
                                </Droppable>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() =>
                    nextCallback({
                      step: "4",
                      value: data,
                    })
                  }
                >
                  {"Next >> "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
