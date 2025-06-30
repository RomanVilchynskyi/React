import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function NoPage() {
    const nav = useNavigate();
 
    const goBack = () => {
        nav(-1); 
    };
    return (
        <div>
            <img width={500} src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png" alt="" />
            <button onClick={goBack}>
                Повернутися назад
            </button>
        </div>
    )
}
