import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getPets } from '../../utilities/pets-service'
import './Pets.css'

const Pets = () => {
    const [pets, setPets] = useState([])
    // const [bool, setBool] = useState(false)
    const navigate = useNavigate()
    // useEffect below will invoke after every render
    // useEffect(() => {
    //     console.log('helloasdasd')
    // })

    // useEffect below will only run ONCE if the dependency array is empty
    // second arg of useEffect is the dependency array
    // Dependency array can have multiple dependencies. useEffect will listen to changes and will trigger again when a change happens
    useEffect(() => {
        // IIFE - Immediately Invoked Function Expression
        // ()(), we can put an anonymous function inside the first set of parenthesis and the second set of parenthesis will immediately invoke that function
        (async () => {
            const petsRes = await getPets()
            setPets(petsRes.data)
        })()
    }, [])

    // Why we are using useEffect?
    // To make HTTP request the moment the component loads
    // Use case: We want to use an empty dependency array to prevent multiple requests to the server

    // console.log('PETS', pets)
    return (
        <div id='pets-img'>
            <div className="text-center">
                <Link className="col-2 btn m-4 bg-info text-white" to='/pets/create'>Add New Pet</Link>
            </div>


            <div id='pet-container' className="row row-cols-1 row-cols-md-2 g-5 p-5">
                {
                    pets.map(pet =>
                        <div className="col" id='pet-card' key={pet._id} onClick={() =>
                        navigate(`/pets/${pets._id}`, {state:pet})}>
                            <div className="card" >
                                <img src={pet.image} className="card-img-top" alt={`Pet's name: ${pet.name}`} id='pet-name' />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{pet.name}</h5>
                                    <p className="card-text">{pet.breed}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>

    )
}

// {/* <button onClick={() => setBool(true)}>CLICK ME</button>
// <button onClick={logOut}>LOGOUT</button> */}
export default Pets;