import { useSelector } from "react-redux"

const js = useSelector((state)=> state.js)

const files = [
    {
        fileName: "index.js",
        content: js
    }
]