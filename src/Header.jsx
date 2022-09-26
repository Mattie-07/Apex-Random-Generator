const Header = ({ selectedClass, legendCount }) => {
    return (
        <header className="container">
            <div className="row justify-content-center mt-3 mb-4">
                <div className="col-8">
                <h1>Legends Selected</h1>
                <h3>
                    {selectedClass} has {legendCount} Legends
                </h3>
                </div>
            </div>
        </header>
    );
};

export default Header;
