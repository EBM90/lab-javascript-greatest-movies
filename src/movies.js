// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies) {
    let directors = movies.map(function(film) {
        return film.director
    })

    return directors
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
    let amount = 0
    movies.filter(function(movie) {
            if(movie.director === 'Steven Spielberg') {
                if(movie.genre.includes('Drama')){
                    amount++
                }
            }
    })
    return amount
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies) {
    if(movies.length === 0) {
        return 0
    }
    let sum = movies.reduce(function(acc, movie) {
        if(movie.rate){
            return acc + movie.rate
        } else {
            return acc
        }
        
    }, 0)
    return Math.round(((sum/movies.length))*100)/100
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies) {
    if(movies.length === 0) {
        return 0
    } 
    
    let drama = movies.filter(function(movie) {
        return movie.genre.includes('Drama')
    })
    return  ratesAverage(drama)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    let ordered = movies.sort(function(a, b){
        if(a.year > b.year){
            return 1
        } else if (a.year < b.year) {
            return -1
        } else {
            if(a.title>b.title){
              return 1
            } else {
              return -1
            }
        }
      
    })
    let newArr = ordered.map(function(m){
        return m
    })
    return newArr
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies) {
    let arr = movies.map(function(m) {
        movies.sort(function(a, b){
          if(a.rate > b.rate) {
            return 1
          } else if (a.rate < b.rate) {
            return -1
          } else {
            return a.title>b.title
          }
        })
        return m.title
        } )
    if(arr.length > 19){
      var less =  arr.slice(0,20)
      let ordered = less.sort(function(a, b) {
            if(a>b){
                return 1
              }else{
                return-1
              } 
    })

    return ordered
    } else{
      return arr.sort(function(a, b) {
            if(a>b){
                return 1
              }else{
                return-1
              } 
    })
    }  
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(movies){
    let newArr = movies.map(function(m){
        return m
    })
    
    let duration = []
    
    for(let i = 0; i<newArr.length; i++){
      duration.push(newArr[i].duration)
    }
    let toMin = duration.map(function(m){ 
      if(m[0] === '1'){
        m[0] = '6'
      } else if (m[0] === '2'){
        m[0] = '120'
      } else {
        m[0] = '180'
      }
    })
    return toMin
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

function bestYearAvg(movies){
    if(movies.length === 0){
        return null
    }
    if (movies.length === 1){
        return `The best year was ${movies.year} with an average rate of ${movies.rate}`
    }


    return `The best year was \<YEAR\> with an average rate of \<RATE\>`
}