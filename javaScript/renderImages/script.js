// Import data from other files
const propertyForSaleArr = required('/data.js')

const  getFeedHtml = () =>{
   let feedHTML = ' '
   propertyForSaleArr.forEach((propertyData) =>{
       feedHTML += `<section class="card">
    <img src="/images/${propertyData.image}">
    <div class="card-right">
        <h2>${propertyData.propertyLocation}</h2>
        <h3>PRICE GBP</h3>
        <p>COMMENT</p>
        <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    </div>
</section>`
   })
}

const render = () =>{
document.getElementById('container')
}
return render()