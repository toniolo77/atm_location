import React from 'react';


const AtmForm = (props) => {
    
    return (
        <form onSubmit={props.sendForm}>
            <div className="form-group">
                <label htmlFor="atm">Tipo Cajero</label>
                <select name="atm" value={props.data.atm} onChange={props.changeForm} className="form-control" id="atm" required>
                    <option value="BANELCO">Banelco</option>
                    <option value="LINK">Link</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="latitude">Latitud</label>
                <input name="latitude" type="number" value={props.data.latitude} onChange={props.changeForm} className="form-control" id="latitude" placeholder="Latitud" required/>
            </div>
            <div className="form-group">
                <label htmlFor="longitude">Longitud</label>
                <input name="longitude" type="number" value={props.data.longitude} onChange={props.changeForm} className="form-control" id="longitude" placeholder="Longitud" required/>
            </div>
            <div style={{'textAlign':'center'}}>
                <button type="submit" className="btn btn-primary" style={{'marginRight':'20px'}}>Consultar</button>
                <button onClick={props.getCoord} className="btn btn-primary">Obtener posicion</button>
            </div>
        </form>
    );
}

export default AtmForm;