import Reactmarkdown from "react-markdown";
export default function GroqRecipe(props)
{
    return (
        <section className="recipe-output">
        <Reactmarkdown>
        {props.recipe}   
        </Reactmarkdown>
        </section>
    )
}