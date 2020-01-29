import React, { Component } from 'react';
import axios from 'axios';

class ViewResults extends Component {


    TotalSurvey;
    test = [];
    totalPizza = 0;
    totalPasta = 0;
    totalPap = 0;
    totalEatOutAverageRate = 0
    totalwatchTVAverage = 0;
    totalwatchMovies = 0;
    totalistenToRadioAverage = 0;
    state = {
        data: [],
        oldest: 0,
        youngest: 0,
        averageAge: 0,
        age: [],
        sumAge: 0,
        tempFood: [],
        pizzaPercentage: 0,
        pastaPercentage: 0,
        papPercentage: 0,
        eatOutAverageRating: 0,
        watchTVAverageRating: 0,
        watchMoviesAverageRating: 0,
        listenToRadioAverage: 0 ,
        totalSurvey :0 

    }

    componentDidMount() {
        axios.get('http://localhost:5000/survey/surveyanswer').then((data) => {
            this.setState({
                data: data
            })

            console.log(this.state.data.data)

            for (let index = 0; index < this.state.data.data.length; index++) {
                this.state.age.push(parseInt(this.state.data.data[index].age))
                console.log(this.state.data.data[index].listenToRadio);
                this.totalistenToRadioAverage = this.totalistenToRadioAverage + parseInt(this.state.data.data[index].listenToRadio);
                this.totalEatOutAverageRate = this.totalEatOutAverageRate + parseInt(this.state.data.data[index].eatOut)
                this.totalwatchTVAverage = this.totalwatchTVAverage + parseInt(this.state.data.data[index].watchTv) ;
                this.totalwatchMovies =this.totalwatchMovies + parseInt(this.state.data.data[index].watchMovies)
            }
            this.state.age.sort()
            this.state.age.forEach((t) => {
                this.setState({
                    sumAge: this.state.sumAge + t
                })

            })

            this.setState({
                oldest: this.state.age[this.state.age.length - 1],
                youngest: this.state.age[0],
                averageAge: this.state.sumAge / this.state.age.length
            })



            for (let index = 0; index < this.state.data.data.length; index++) {
                for (let j = 0; j < this.state.data.data[index].favouriteFood.length; j++) {
                    this.test.push(this.state.data.data[index].favouriteFood[j])
                }

            }
            for (let k = 0; k < this.test.length; k++) {
                if (this.test[k] == "Pizza") {
                    this.totalPizza = this.totalPizza + 1
                } else if (this.test[k] == "Pap and wors") {
                    this.totalPap = this.totalPap + 1;
                } else if (this.test[k] == "Pasta") {
                    this.totalPasta = this.totalPasta + 1
                }

            }
            
            console.log(this.totalEatOutAverageRate) ;
            console.log(this.totalwatchMovies) ;
            console.log(this.totalwatchTVAverage) ;
            console.log(this.totalistenToRadioAverage)

            this.setState({
                pizzaPercentage: this.totalPizza / this.state.data.data.length * 100,
                papPercentage: this.totalPap / this.state.data.data.length * 100,
                pastaPercentage: this.totalPasta / this.state.data.data.length * 100 ,
                eatOutAverageRating :this.totalEatOutAverageRate/this.state.data.data.length,
                watchMoviesAverageRating:this.totalwatchMovies / this.state.data.data.length,
                watchTVAverageRating:this.totalwatchTVAverage / this.state.data.data.length ,
                listenToRadioAverage:this.totalistenToRadioAverage / this.state.data.data.length ,
                totalSurvey : this.state.data.data.length


            })

            console.log((this.state))

        }).catch((error) => {
        })
    }

    render() {
        return (
            <div class="container mt-5 w-50">

                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Total number of surveys
                <span class="text-end">{this.state.totalSurvey}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Average age
                        <span class="text-end">{this.state.averageAge}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Oldest person who participate in survey
                        <span class="text-end">{this.state.oldest}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Yougest person who participate in survey
                        <span class="text-end">{this.state.youngest}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Percentage of people who like Pizza
                        <span class="text-end">{this.state.pizzaPercentage}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Percentage of people who like Pasta
                        <span class="text-end">{this.state.pastaPercentage}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Percentage of people who like Pap and Wors
                        <span class="text-end">{this.state.papPercentage}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        People like to eat out
                    <span class="text-end">{this.state.eatOutAverageRating}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        People like to watch movies
                    <span class="text-end">{this.state.watchMoviesAverageRating}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        People like to watch TV
        <span class="text-end">{this.state.watchTVAverageRating}</span>
                    </li>

                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        People like to listen to the radio
        <span class="text-end">{Math.round (this.state.listenToRadioAverage * 10)/10}</span>
       
                    </li>
                </ul>
            </div>
        )
    }
}

export default ViewResults;