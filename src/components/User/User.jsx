import React from 'react'
import { useParams } from 'react-router-dom'


export const User = () => {
    const { UserId } = useParams()

    return (
        <div>User: {UserId}</div>
    )
}
