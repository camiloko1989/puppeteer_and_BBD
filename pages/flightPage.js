const {I} = inject()

class FlightPage{

    constructor(){
        this.mainDiv = '.main_search'
        this.inputs = {
            from: "#autocomplete",
            to: "#autocomplete2",
            date: "#departure", 
            passenger: ".dropdown-toggle.dropdown-btn.waves-effect",
            search: "#flights-search",
            firstOption: ".autocomplete-result[data-index='0']",
            moreAdultsPassengers: "(//i[@class='la la-plus'])[1]"
        }
        this.results= "//*[@id='fadein']/section[1]/div/div/div/div[2]/div/ul/li/a"
    }

    validatePage(){
        I.amOnPage("flights")
        I.waitForElement(this.mainDiv)
        I.waitForElement(this.inputs.from)
        I.waitForElement(this.inputs.to)
        I.waitForElement(this.inputs.date)
        I.waitForElement(this.inputs.passenger)
        I.waitForElement(this.inputs.search)
        //I.seeInCurrentUrl(flights)
    }

    selectFlight(from, to, date, passengers){
        I.fillField(this.inputs.from, from)
        I.click(this.inputs.firstOption) //selecciona la primera opcion que aparezca

        I.fillField(this.inputs.to, to)
        I.click(this.inputs.firstOption)

        I.fillField(this.inputs.date, date)

        if(passengers !== 1){
            I.click(this.inputs.passenger)
            for(let i=0; i<passengers-1; i++){
                I.click(this.inputs.moreAdultsPassengers)
            }
        }

        I.click(this.inputs.search) //click en Search
    }

    validateFlight(){
        I.waitForElement(this.results, 5)
    }

}

module.exports = new FlightPage()
module.exports.FlightPage = FlightPage