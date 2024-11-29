document.getElementById("searchBtn").addEventListener("click", function() {
    const countryInp = document.getElementById("Country-input").value.trim();


    if (countryInp.length === 0) {
        alert("Please Enter Country Name");

    }


    fetch("https://restcountries.com/v3.1/name/" + countryInp)
        .then(function(response) {
            return response.json()

        })
        .then(function(data) {


            const Country = data.find(function(c) {

                return c.name.common.toLowerCase() === countryInp.toLowerCase()


                if (!Country) {
                    throw new Error("COUNTRY NOT FOUND")

                }

            })

            console.log(Country);
            document.getElementById("CountryName").textContent = Country.name.common
            document.getElementById("CountryFlag").src = Country.flags.png
            document.getElementById("capital").textContent = Country.capital
            document.getElementById("population").textContent = Country.population.toLocaleString()

            document.getElementById("currency").textContent = Country.currencies ? Object.values(Country.currencies)[0].name : "NA"

            document.getElementById("language").textContent = Country.languages ? Object.values(Country.languages) : "NA"

            document.getElementById("continent").textContent = Country.continents



















            document.getElementById("Country-info").classList.remove("hide")
            document.getElementById("errorMessage").classList.add("hide")


        })

    .catch(function() {

        document.getElementById("Country-info").classList.add("hide")
        document.getElementById("errorMessage").classList.remove("hide")




    })

})