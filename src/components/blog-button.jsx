import Button from "react-bootstrap/esm/Button"

function BlogButton(props) {

    const id = props.id

    return (
        <>
        <Button onClick = {() => props.action(id)} id = {id} className = "mx-1" variant={(props.name === "View") ? "primary": "secondary"} size = "sm">{props.name}</Button>
        </>
    )
}

export default BlogButton