import React, { createContext, useState } from "react";
const initialState = {
  categoryDrawer: [
    {
      category: "dairy",
      name: "لبنیات",
      subCategory: ["ماست", "دوغ", "کره حیوانی و گیاهی", "شیر"],
    },
    {
      category: "protein",

      name: "محصولات پروتئینی",
      subCategory: [
        "ماهی , میگو و خاویار",
        "تخم مرغ",
        "گوشت مرغ",
        "گوشت گاو و گوساله",
      ],
    },
    {
      category: "drinks",
      name: "نوشیدنی",
      subCategory: ["قهوه", "قهوه فوری و هات چاکلت", "چای", "شربت و آبمیوه"],
    },
  ],
};
export const StateContext = createContext(initialState);
export const StateProvider = ({ children }) => {
  const [categories, setCategories] = useState(initialState.categoryDrawer);

  return (
    <StateContext.Provider
      value={{
        categories,
        setCategories,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
