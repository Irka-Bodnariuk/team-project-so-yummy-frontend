import { Bar, ItemLink } from "./CategoriesList.styled";


const categories = [
    'Beef',
    'Breakfast',
    'Chicken',
    'Dessert',
    'Goat',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegetarian',
  ];    


export const CategoriesList = () => {
    return (
        <Bar>
            {categories.map(category => (
                <ItemLink to={`/categories/${category.toLowerCase()}`} key={category}>{category}</ItemLink>
            ))}
        </Bar>
    )
}