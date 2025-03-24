import { Outlet } from "react-router";

export default function ReadPage() {
    return (
        <>
            <Outlet/>
            <h1>Read page</h1>
        </>
    )
}