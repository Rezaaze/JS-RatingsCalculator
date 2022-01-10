const collect_ratings = () => {
    const ratings = {
        count:0,
        sum:0,
        average:0
    }

    let rating = 0;
    const elements = document.querySelectorAll(".rating");

    elements.forEach(element => {
                                rating = parseInt(element.id.replace("star", ''));
                                console.log(rating+"++++")
                                ratings.count += parseInt(element.value)
                                console.log(element.value + "****")
                                ratings.sum += parseInt(element.value)*rating})
                                console.log(ratings.sum+"ppp")

                        
    if (ratings.count !== 0){
        ratings.average = ratings.sum / ratings.count;
    }

    return ratings;
}

document.addEventListener("change", e => {const ratings =collect_ratings()
                                            document.querySelector('#average').value = ratings.average.toFixed(2);
                                            console.log(ratings);
})
