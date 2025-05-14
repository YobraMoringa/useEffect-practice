export default function Search() {
    function displayNameInPopUp() {
        // Generate a random number btn 1 and 10
        const randomNumber = Math.floor(Math.random() * 10);
        console.log(randomNumber);
        // Find a way to add the number to the URL 


    }

    return (
        <div className="search">
            <input className="search-number" type="button" value="Get Random User" onClick={displayNameInPopUp} />
        </div>
    )
}

export { displayNameInPopUp }

// 1. Implement a function that will handle getting a random user when the Button **Get Random User** is clicked.
//  - This can be achieved by tracking the url in state and updating the parameter using the numbers between 1 and 10