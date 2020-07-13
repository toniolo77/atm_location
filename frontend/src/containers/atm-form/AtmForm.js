import React from 'react';
import styles from './AtmForm.module.scss';


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
            <div className={styles.textCenter}>
                <button type="submit" className="btn btn-primary" >Consultar</button>
                <button onClick={props.getCoord} className="btn btn-primary">Obtener posicion</button>
            </div>
        </form>
    );
}

export default AtmForm;