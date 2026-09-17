import React from "react";
import IngredientsList from "./IngredientsList";
import GroqRecipe from "./GroqRecipe";
import { getRecipeFromMistral } from "./ai";


export default function Main()
{
    const [items, setItems]=React.useState([]);
    const [recipe, setrecipe]=React.useState("");
    const recipeSection=React.useRef(null)

    function handleSubmit(formData)
    {
        console.log("Form submitted!");
        const ingredient=formData.get("ingredient");
        if(ingredient!=="")
        {
            setItems(prevItems =>  [...prevItems, ingredient]);
        }
    }
    async function getRecipe()
    {
        const recipeMarkdown=await getRecipeFromMistral(items);
        console.log(recipeMarkdown)
        setrecipe(recipeMarkdown)
    }

    React.useEffect(() =>
    {
        if(recipe!=="" && recipeSection.current!==null)
        {
            recipeSection.current.scrollIntoView({behavior:"smooth"});
        }
    })

    return (
        <main>
            <form action={handleSubmit} className="add-ingredient-form">
                <input
                name="ingredient"
                type="text"
                placeholder="e.g carrot" 
                aria-label="Add Ingredient"    
                />
            <button type="submit">
                Add Ingredient
            </button>
            </form>
            {items.length>0 ? <IngredientsList ref={recipeSection} getRecipe={getRecipe} ingredients={items} /> : null}
            {recipe && <GroqRecipe recipe={recipe}/>}
        </main>
    )
}