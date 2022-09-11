const Header  = ({selectedClass, legendCount}) =>{
    return(
        <header>
            <h1>Legends Selected</h1>
            <h3>{selectedClass} has {legendCount} Legends</h3>
        </header>
    )
}

export default Header