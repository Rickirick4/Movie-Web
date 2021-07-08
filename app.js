const StorageController = (function () {

})

const MovieController = (function () {
    const Movie = function (name, star) {
        this.name = name;
        this.star = star
    }

    const data = {
        movie: [
            { name: "Silent Hill", star: 8 },
            { name: "Dark", star: 4 },
            { name: "forrest gump", star: 10 }
        ],
        sellectedMovie: null
    }

    return {
        getMovie: function () {
            return data.movie;
        },
        getData: function () {
            return data;
        },
        getSelectors: function () {
            return Selectors;
        }
    }
})


const UIController = (function () {
    const Selectors = {}
})


const App = (function (MovieCtrl, UICtrl, StrogeCTRL) {

    const UISelectors = UICtrl.getSelectors;

    const loadEventListeners = function () {
        
    }


    return {
        init: function () {

        }
    }
}(StorageController, MovieController, UIController))


App.init();