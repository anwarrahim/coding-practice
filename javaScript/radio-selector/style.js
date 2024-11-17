const companyDataCard = document.getElementById('company-data-card')

let companyData = [
    {
    companyName : ['Scrimba'],
    companyProducts: 3,
    companyCustomers: 435,
    companyLocation: ['Oslo', 'New York', 'Islamabad','Sydney']
    },
    
    {
        companyName : ['Microsoft'],
        companyProducts: 7,
        companyCustomers: 935,
        companyLocation: ['Oslo', 'New York', 'Islamabad','Sydney','Oslo', 'New York', 'Islamabad','Sydney']
    }

]

function companyName(companies){
    let companyNameArray = []
    for (let company of companies ){
        for (let brand of company.companyName){
            companyNameArray.push(brand)
        }
    }
    return companyNameArray
}


function companyNameRender(companies){
    let companyNameRendering = ``
    const companyNames = companyName(companies)
    for (let companyName of companyNames){
        companyNameRendering += `<p>${companyName}</p>`
    }
    companyDataCard.innerHTML = companyNameRendering
}

companyNameRender(companyData)

