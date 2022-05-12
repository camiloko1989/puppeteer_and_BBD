const {I} = inject()

class NavBar{

    constructor(){  //Mapea los elementos de la barra de navegacion
        this.navBar = '.menu-wrapper'
        this.menu = {
            home: "//a[normalize-space()='Home']",
            hotels: "//a[normalize-space()='Hotels']",
            flights: "//a[normalize-space()='flights']"
        }
    }

    validateNaveBarIsPresent(){ // Validar si la barra de navegación se desplegó
        I.waitForElement(this.navBar)
        I.waitForElement(this.menu.home)
        I.waitForElement(this.menu.hotels)
        I.waitForElement(this.menu.flights)
    }

    selectMenuItem(menuItem){ //Seleccionar un item de la barra de navegacion
        I.click(this.menu[menuItem])
    }

}

module.exports = new NavBar()
module.exports.NavBar = NavBar;