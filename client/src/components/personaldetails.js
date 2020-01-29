import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'


class PersonalDetails extends Component {
    arry = [];
    state = {
        eat: "",
        WatchMovies: "",
        listenToRadio: "",
        watchTv: "",
        food: []
    }
    AddSurvey = (() => {

        let eatOut = this.state.eat;
        let WatchMovies = this.state.WatchMovies;
        let listenToRadio = this.state.listenToRadio;
        let watchTv = this.state.watchTv;
        let favourite_food = this.state.food;
        let obj = {
            surname: this.dom("surname"),
            firstName: this.dom("firstname"),
            contactNumber: this.dom("firstname"),
            date: this.dom("date"),
            age: this.dom("age"),
            favouriteFood: favourite_food,
            eatOut: eatOut,
            watchMovies: WatchMovies,
            watchTv: watchTv,
            listenToRadio: listenToRadio
        }
    if (obj.surname == "" && obj.firstName == "" && obj.contactNumber == "", obj.date == "", obj.age == "", favourite_food.length == 0, obj.eatOut == "", obj.WatchMovies == "", obj.watchTv == "", obj.listenToRadio == "") {
            this.ErrorValidation("Please enter all details")
        } else{
            axios.post('http://localhost:5000/survey/surveyanswer' , obj).then((message)=>{
            console.log("added successfully") ;
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Survey submitted successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }).catch((error)=>{{
           this.ErrorValidation("not added successfuly")
        }})
        }
    })

    dom = ((value) => {
        return document.getElementById(value).value;

    })


    eatOut = ((e) => {
        this.setState({
            eat: e
        })
    })

    WatchMovies = ((e) => {
        this.setState(({
            WatchMovies: e
        }))
    })

    listenToRadio = ((e) => {
        this.setState({
            listenToRadio: e
        })
    })

    watchTv = ((e) => {
        this.setState({
            watchTv: e
        })
    })

    favourite_food = ((e) => {
        this.arry.push(e)
        this.setState({
            food: this.arry
        })

    })

    ErrorValidation = ((message) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            timer: 1500

        })
    })
    render() {

        return (
            <div className="container mt-5 ml-50">
                <form class="well form-horizontal " action=" " method="post" id="contact_form">
                    <fieldset class="w-100">
                        <legend> <center> <b> <h1>Personal Details</h1></b></center></legend>
                        <div class="col-auto">
                            <label class="sr-only" for="inlineFormInputGroup">Surname</label>
                            <div class="input-group mb-2 w-75 ml-5">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="far fa-user"></i></div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Surname" id="surname" />
                            </div>
                        </div>

                        <div class="col-auto mt-4">
                            <label class="sr-only" for="inlineFormInputGroup">Firstname</label>
                            <div class="input-group mb-2 w-75 ml-5">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="far fa-user"></i></div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Firstname" id="firstname" />
                            </div>
                        </div>
                        <div class="col-auto mt-4">
                            <label class="sr-only" for="inlineFormInputGroup">Contact number</label>
                            <div class="input-group mb-2 w-75 ml-5">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fas fa-phone"></i></div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Contact number" id="contact_number" />
                            </div>
                        </div>

                        <div class="col-auto mt-4">
                            <label class="sr-only" for="inlineFormInputGroup">Firstname</label>
                            <div class="input-group mb-2 w-75 ml-5">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fas fa-calendar-week"></i></div>
                                </div>
                                <input type="date" class="form-control" id="inlineFormInputGroup" placeholder="Firstname" id="date" />
                            </div>
                        </div>

                        <div class="col-auto mt-4">
                            <label class="sr-only" for="inlineFormInputGroup">Firstname</label>
                            <div class="input-group mb-2 w-25 ml-5">
                                <div class="input-group-prepend">
                                    <div class="input-group-text"><i class="fas fa-phone"></i></div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Age" id="age" />
                            </div>
                        </div>
                        <p class="ml-5 mt-4">What is your favourite food (You can choose more than 1)</p>
                        <div class="form-check ml-5 mt-4">
                            <input class="form-check-input" type="checkbox" onChange={this.favourite_food.bind(this, "Pizza")} value="pizza" id="defaultCheck1" id="pizza" />
                            <label class="form-check-label  ml-4" for="defaultCheck1">
                                Pizza
                            </label>
                        </div>

                        <div class="form-check ml-5 mt-4">
                            <input class="form-check-input" type="checkbox" onChange={this.favourite_food.bind(this, "Pasta")} value="Pasta" id="defaultCheck1" id="pasta" />
                            <label class="form-check-label  ml-4" for="defaultCheck1">
                                Pasta
                            </label>
                        </div>

                        <div class="form-check ml-5 mt-4">
                            <input class="form-check-input" type="checkbox" onChange={this.favourite_food.bind(this, "Pap and wors")} value="Pap and Wors" id="pap_and_wors" />
                            <label class="form-check-label  ml-4" for="defaultCheck1">
                                Pap and Wors
                            </label>
                        </div>

                        <div class="form-check ml-5 mt-4">
                            <input class="form-check-input" type="checkbox" onChange={this.favourite_food.bind(this, "Chicken stir fry")} value="Chicken stir fry" id="chicken_stir_fry" />
                            <label class="form-check-label  ml-4" for="defaultCheck1">
                                Chicken stir fry
                            </label>
                        </div>

                        <div class="form-check ml-5 mt-4">
                            <input class="form-check-input" type="checkbox" onChange={this.favourite_food.bind(this, "Beef stir fry")} value="Beef stir fry" id="beef_stir_fry" />
                            <label class="form-check-label  ml-4" for="defaultCheck1">
                                Beef stir fry
                            </label>
                        </div>

                        <div class="form-check ml-5 mt-4">
                            <input class="form-check-input" type="checkbox" onChange={this.favourite_food.bind(this, "Other")} value="Other" id="other" />
                            <label class="form-check-label  ml-4" for="defaultCheck1">
                                Other
                            </label>
                        </div>




                        <p class="ml-3 mt-3">On a scale of 1 to 5 indicate whether you strongly agree to strongly disagree</p>
                        <table class="table mt-4 w-100 ">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Strongly Agree <br></br> (1)</th>
                                    <th scope="col"> Agree <br></br> (2)</th>
                                    <th scope="col"> Neutral <br></br> (3)</th>
                                    <th scope="col"> Disagree <br></br> (4)</th>
                                    <th scope="col"> Strongly Disagree <br></br> (5)</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">I like to eat out</th>
                                    <td>
                                        <div class="form-check ml-3">
                                            <input class="form-check-input" type="radio" name="eatOut" onChange={this.eatOut.bind(this, 1)} value="1" id="eat_out_strongly_agree" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="eatOut" onChange={this.eatOut.bind(this, 2)} value="" id="eat_out_agree" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="eatOut" onChange={this.eatOut.bind(this, 3)} value="" id="eat_out_disagree" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="eatOut" onChange={this.eatOut.bind(this, 4)} value="" id="eat_out_strongly_disagree" />
                                        </div>
                                    </td>

                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="eatOut" onChange={this.eatOut.bind(this, 4)} value="" id="eat_out_strongly_disagree" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">I like to watch movies</th>
                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="watchMovies" onChange={this.WatchMovies.bind(this, 1)} value="4" id="watch_movies_strongly_agree" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="watchMovies" onChange={this.WatchMovies.bind(this, 2)} value="3" id="watch_movies_agree" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check ml-3">
                                            <input class="form-check-input" type="radio" name="watchMovies" onChange={this.WatchMovies.bind(this, 3)} id="watch_movies_disagree" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="watchMovies" onChange={this.WatchMovies.bind(this, 4)} value="1" id="watch_movies_strongly_disagree" />
                                        </div>
                                    </td>

                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="watchMovies" onChange={this.WatchMovies.bind(this, 5)} value="1" id="watch_movies_strongly_disagree" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">I like to listen to the radio</th>
                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="listenToRadio" onChange={this.listenToRadio.bind(this, 1)} value="4" id="listen_to_radio_strongly_agree" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check ml-3">
                                            <input class="form-check-input" type="radio" name="listenToRadio" onChange={this.listenToRadio.bind(this, 2)} value="3" id="listen_to_radio_agree" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="listenToRadio" onChange={this.listenToRadio.bind(this, 3)} value="2" id="listen_to_radio_disagree" />
                                        </div>
                                    </td>

                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="listenToRadio" onChange={this.listenToRadio.bind(this, 4)} value="1" id="listen_to_radio_strongly_disagree" />
                                        </div>
                                    </td>

                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="listenToRadio" onChange={this.listenToRadio.bind(this, 5)} value="1" id="listen_to_radio_strongly_disagree" />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">I like to watch TV</th>
                                    <td>
                                        <div class="form-check ml-3">
                                            <input class="form-check-input" type="radio" name="watchTV" onChange={this.watchTv.bind(this, 1)} value="4" id="watch_tv_strongly_agree" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="watchTV" onChange={this.watchTv.bind(this, 2)} value="3" id="watch_tv_strongly_agree" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="watchTV" onChange={this.watchTv.bind(this, 3)} value="2" id="watch_tv_disagree" />
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="watchTV" onChange={this.watchTv.bind(this, 4)} value="1" id="watch_tv_strongly_disagree" />
                                        </div>
                                    </td>

                                    <td>
                                        <div class="form-check ml-3 ">
                                            <input class="form-check-input" type="radio" name="watchTV" onChange={this.watchTv.bind(this, 5)} value="1" id="watch_tv_strongly_disagree" />
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                        </table>
                        <button type="button" class="btn  btn-lg btn-secondary mt-4" onClick={this.AddSurvey}>Submit</button>
                    </fieldset>

                </form>
            </div>
        )
    }

}

export default PersonalDetails





