

const  Legends = ({legends, selectedClass, handleLegendCardClick, handleLegendSelectionChange}) => {

    return (
        <main className='container'>
            <div className="row justify-content-center mt-3 mb-3">
                <div className="col-6">
                    <select className="form-select form-select-lg" value={selectedClass} onChange={handleLegendSelectionChange}>
                        <option value="Medic">Medic</option>
                        <option value="Assault">Assault</option>
                        <option value="Defense">Defense</option>
                        <option value="Survey">Survey</option>
                    </select>
                </div>
                <div className='col-8'>
                    <div className="card-collection">
                    {
                    legends.map((legend) => (
                        <div key={legeend.id} id={legend.id} className={(legend.role === selectedClass ? 'card m-2 standout':'card m-2')} style={{cursor:'pointer'}} onClick={handleLegendCardClick} >                            
                            <img src={legend.legendImage} className="img-size card-img-top" alt="" />
                            <div className="card-body">
                                <h2 className="card-title">Legend Name: {legend.name}</h2> 
                                <p className="card-text"><b>Role: </b>{legend.role}</p>
                            </div>
                        </div>
                    ))
                }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Legends