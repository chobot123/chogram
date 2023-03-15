import { AiOutlineMenu } from "react-icons/ai";
import SideNavItem from "../sidenav-item";

export default function SideNavOptions(): JSX.Element {

    return (
        <>
            <SideNavItem name="More" icon={<AiOutlineMenu />} />
        </>
    )
}