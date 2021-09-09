//const axios = require('axios');
const fetch =require('cross-fetch');
const api_url = "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";

function findAns(data){
    var c
    var ans=data.reduce((ans,m)=>{
        //console.log(m.cast)
        m.cast.forEach(func)
        function func(item){
            c=-1
            c=ans.actors.findIndex(a => a.Name === item)
            if (c>=0) ans.actors[c].Movies.push(m.title)
            else ans.actors.push({'Name':item,'Movies':[m.title]})
        }

        m.genres.forEach(func1)
        function func1(item){
        c=-1
        c=ans.genres.findIndex(g => g.Type === item)
        if (c>=0) ans.genres[c].Movies.push(m.title)
        else ans.genres.push({'Type':item,'Movies':[m.title]})
        }
        return ans
    },{actors:[],genres:[]})
    return ans
}

async function getapi(url) {
    const response = await fetch(url);
    data = await response.json();

    var ans=findAns(data)
    console.log("Total movies:",data.length)
    console.log("Total number of actors:",ans.actors.length)
    console.log("Total number of genres:",ans.genres.length,"\n")
    console.log("List of movies for each actor and each type of genre:")
    console.log(ans,"\n")
    console.log("Actor 1:",ans.actors[0])
    console.log("Actor 101:",ans.actors[100])
    console.log("Genre 1:",ans.genres[0])
    console.log("Genre 41:",ans.genres[40])
}

getapi(api_url);