import SideNavBar from "@/components/sidenav-bar"

type props = {
    children: React.ReactNode
}

export default function DefaultLayout({children}: props): JSX.Element {

    return (
        <>
            <SideNavBar />
            <div className="nav-offset-w">
                <section className="d-flex 
                                    flex-column
                                    hide-x
                                    min-vh-100">
                    {children}
                </section>
            </div>
        </>
    )
}