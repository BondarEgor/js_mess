import React from "react"
import { Button } from "../../kit/Button"

export const UserAuth: React.FC = () => {
    return <Button onClick={() => console.log('Clicked')} label="Auth" />
}