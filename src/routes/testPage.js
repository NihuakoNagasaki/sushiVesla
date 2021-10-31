import { useEffect, useState } from "react"



export default function TestPage() {

    const [area, setArea] = useState()
    let load = true


    useEffect(() => {
        document.title = "Тест"

    })
    useEffect(() => {
        setTimeout(() => {
            setArea(123)
            load = false
        }, 6000);
    })
    console.log(area ? area : null);
    if (load) {
        return null;
    }

    return (
        <span>
            {area}

        </span>
    )

}