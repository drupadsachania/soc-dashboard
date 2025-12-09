const Layout = ({ children, title = "Dashboard" }) => {
    return (
        <div className="app-layout">
            <Sidebar />
            <Header title={title} />
            <main className="app-main">
                <div className="main-content-container">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
