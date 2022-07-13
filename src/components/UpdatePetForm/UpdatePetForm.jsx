import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as petsService from '../../utilities/pets-service'

const UpdatePetForm = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const pet = location.state
    
    const [petDetails, setPetDetails] = useState(pet)
    
    const handleChange = e => {
        setPetDetails({
            ...petDetails,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
        const res = await petsService.updatePet(petDetails)
        // console.log(res)
        if (res.status === 200) navigate(`/pets/${petDetails._id}`, { state: petDetails})
        } catch (e) {
            console.log(e)
        }
    }
    console.log(petDetails)
    return (
        <div id='createPet-img'>
            <form className="row g-3 mx-auto w-50 border border-5 rounded-3 p-5 m-5 bg-light" id="createPetForm" onSubmit={handleSubmit}>

            <div className="col-md-6">
                <label 
                    htmlFor="inputName" 
                    className="form-label">Pet's Name
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputName" 
                    name="name"
                    onChange={handleChange}
                    value={petDetails.name}
            />
            </div>

            <div className="col-md-3">
                <label 
                    htmlFor="inputSpecies" 
                    className="form-label">Species
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputSpecies" 
                    name="species"
                    onChange={handleChange}
                    value={petDetails.species}
            />
            </div>

            <div className="col-md-3">
                <label 
                    htmlFor="inputBreed" 
                    className="form-label">Breed
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputBreed" 
                    name="breed"
                    onChange={handleChange}
                    value={petDetails.breed}
            />
            </div>

            <div className="col-md-3">
                <label 
                    htmlFor="inputGender" 
                    className="form-label">Gender
                </label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="inputGender" 
                    name="gender"
                    onChange={handleChange}
                    value={petDetails.gender}
            />
            </div>

            <div className="col-md-3">
                <label 
                    htmlFor="inputAge" 
                    className="form-label">Age
                </label>
                <input 
                    type="number" 
                    className="form-control" 
                    id="inputAge" 
                    name="age"
                    onChange={handleChange}
                    value={petDetails.age}
            />
            </div>

            <div className="col-md-3">
                <label 
                    htmlFor="inputDOB" 
                    className="form-label">Date of Birth
                </label>
                <input 
                    type="date" 
                    className="form-control" 
                    id="inputDOB" 
                    name="dob"
                    onChange={handleChange}
                    value={petDetails.dob}
            />
            </div>

            <div className="col-md-3">
                    <label 
                        htmlFor="inputAdoption" 
                        className="form-label">Date of Adoption
                    </label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="inputAdoption" 
                        name="adoption"
                        onChange={handleChange}
                        value={petDetails.adoption}
                />
                </div>

                <div className="col-md-6">
                    <label 
                        htmlFor="inputVet4" 
                        className="form-label">Vet's Info
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputVet4" 
                        name="vet"
                        onChange={handleChange}
                        value={petDetails.vet}
                />
                </div>

                <div className="col-md-6">
                    <label 
                        htmlFor="inputMeds" 
                        className="form-label">Medication
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputMeds" 
                        name="medication"
                        onChange={handleChange}
                        value={petDetails.medication}
                />
                </div>

                <div className="col-12">
                    <label 
                        htmlFor="inputImage" 
                        className="form-label">Image
                    </label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inputImage" 
                        name="image"
                        onChange={handleChange}
                        value={petDetails.image}
                />
                </div>

                <div className="col-12">
                    <label 
                        htmlFor="inputNotes" 
                        className="form-label">Notes
                    </label>
                    <textarea 
                        type="text" 
                        className="form-control" 
                        id="inputNotes" 
                        rows="3"
                        name="notes"
                        onChange={handleChange}
                        value={petDetails.notes}
                />
                </div>
              
                {/* <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Neutered/Spayed
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        House Trained
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Good with Kids
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        Good with Other Animals
                    </label>
                </div> */}
                <div className="col-12 text-center">
                    <button type="submit" className="btn bg-info text-white">Update Pet</button>
                </div>
            </form>
        </div>
    );
}

export default UpdatePetForm;
