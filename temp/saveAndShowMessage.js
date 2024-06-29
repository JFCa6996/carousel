import React, { useState } from 'react';
import './Form.css';

const Form = ({
                  formData,
                  handleSave,
                  handleChange,
                  onNombre_artChange,
                  onApellido1_artChange,
                  onApellido2_artChange,
                  onEmail_artChange,
                  onTelef_artChange,
                  onActivo_artChange,
                  onVocal_artChange,
                  onFech_nac_artChange,
                  onFech_cont_artChange,
                  onSexo_artChange,
                  handleAddJson,
                  handleDeleteJson,
                  handleCancel
              }) => {
    const [showMessage, setShowMessage] = useState(false);

    const saveAndShowMessage = () => {
        handleSave();
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 5000);
    };

    return (
        <div>
            {showMessage && <div className="save-message">Artículo guardado con éxito!</div>}
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault();
                saveAndShowMessage();
            }}>
                <div className="form-group">
                    <label htmlFor="name">ID:</label>
                    <input
                        id="name"
                        type="text"
                        name="id"
                        value={formData.id}
                        required
                        onChange={(e) => {
                            handleChange(e);
                            onNombre_artChange(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre_art">Nombre:</label>
                    <input
                        id="nombre_art"
                        type="text"
                        name="nombre_art"
                        value={formData.nombre_art}
                        required
                        onChange={(e) => {
                            handleChange(e);
                            onNombre_artChange(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido1_art">Apellido 1:</label>
                    <input
                        id="apellido1_art"
                        type="text"
                        name="apellido1_art"
                        value={formData.apellido1_art}
                        onChange={(e) => {
                            handleChange(e);
                            onApellido1_artChange(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="apellido2_art">Apellido 2:</label>
                    <input
                        id="apellido2_art"
                        type="text"
                        name="apellido2_art"
                        value={formData.apellido2_art}
                        onChange={(e) => {
                            handleChange(e);
                            onApellido2_artChange(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email_art">Email:</label>
                    <input
                        id="email_art"
                        type="email"
                        name="email_art"
                        value={formData.email_art}
                        onChange={(e) => {
                            handleChange(e);
                            onEmail_artChange(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="telef_art">Teléfono:</label>
                    <input
                        id="telef_art"
                        type="tel"
                        name="telef_art"
                        value={formData.telef_art}
                        onChange={(e) => {
                            handleChange(e);
                            onTelef_artChange(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="activo_art">Activo:</label>
                    <input
                        id="activo_art"
                        type="checkbox"
                        name="activo_art"
                        checked={formData.activo_art}
                        onChange={(e) => {
                            handleChange(e);
                            onActivo_artChange(e.target.checked);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="vocal_art">Vocal:</label>
                    <input
                        id="vocal_art"
                        type="checkbox"
                        name="vocal_art"
                        checked={formData.vocal_art}
                        onChange={(e) => {
                            handleChange(e);
                            onVocal_artChange(e.target.checked);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fech_nac_art">Fecha de Nacimiento:</label>
                    <input
                        id="fech_nac_art"
                        type="date"
                        name="fech_nac_art"
                        value={formData.fech_nac_art}
                        onChange={(e) => {
                            handleChange(e);
                            onFech_nac_artChange(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fech_cont_art">Fecha de Contratación:</label>
                    <input
                        id="fech_cont_art"
                        type="date"
                        name="fech_cont_art"
                        value={formData.fech_cont_art}
                        onChange={(e) => {
                            handleChange(e);
                            onFech_cont_artChange(e.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="sexo_art">Sexo:</label>
                    <input
                        id="sexo_art"
                        type="text"
                        name="sexo_art"
                        value={formData.sexo_art}
                        onChange={(e) => {
                            handleChange(e);
                            onSexo_artChange(e.target.value);
                        }}
                    />
                </div>
                <div className="form-button">
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleAddJson}>Add</button>
                    <button type="button" onClick={handleDeleteJson}>Borrar</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
