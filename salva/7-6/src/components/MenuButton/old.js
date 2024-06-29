* MenuButton.css */

#menu .MuiMenuItem-root {
    /*font-family: 'Roboto', sans-serif;*/
    /*font-family: 'Open Sans', sans-serif;*/
    /*font-family: Arial, sans-serif; */
    /*font-family: 'Playfair Display', serif;*/
    /*font-family: 'Montserrat', serif;*/
    font-family: 'Lato', serif;
    /*font-family: 'Cormorant+Garamond', serif;*/
    /*font-family: 'Pacifico', serif;*/

    /*Montserrat-Lato-Cormorant+Garamond-Merriweather-Pacifico*/
    font-size: 12px; /* Elige el tamaño de fuente base para todo el proyecto */

    /* Peso de la fuente */
    font-weight: normal;
    /*color: #f8f4f4;*/
    color: #f6f3f3;
}

#menu .MuiMenuItem-root:hover {
    background-color: #9900FF;; /* Cambia el color de fondo al pasar el cursor sobre el elemento */
}

.menuIcon {
    z-index:  101;
    background-color: #deac18;
    color: #6b0b0b;
}

.menuContainer {
    z-index: 100;
    flex-direction: column;
    position: fixed;
    background-color: transparent;
    color: #0d207e;
    top: 2vh;
    left: 2vw;
    z-index: 10;
}



.menu {
    position: absolute;
    top: 10vh;
    right: 2vw;
    display: none;
    flex-direction: column;
    background-color: rgba(253, 2, 115, 0.46);
    box-shadow: 0px 4px 8px rgb(59, 50, 50);
}
