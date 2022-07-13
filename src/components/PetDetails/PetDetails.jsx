import { useLocation, useNavigate } from "react-router-dom";
import { deletePet } from '../../utilities/pets-service'
import './PetDetails.css'

const PetDetails = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const petDetails = location.state

    const handleDelete = async () => {
        try {
            const res = await deletePet(petDetails._id)
            if(res.status === 200) navigate('/pets')
        } catch (e) {
            console.log(e)
        }
    }
    
    return (
        <div id='petDetails-img'>
<div className="card w-75 m-5 pl-15 mx-auto" >
            <div className="row">
                <div className="col-md-4">
                    <img src={petDetails.image} alt="" />
                </div>
                <div className="col-md-8 m-auto text-center">
                    <div className="card-body">
                        <h3 className="card-title">{petDetails.name}</h3>
                        <h5 className="card-text">Species: {petDetails.species}</h5>
                        <h5 className="card-text">Breed: {petDetails.breed}</h5>
                        <h5 className="card-text">Gender: {petDetails.gender}</h5>
                        <h5 className="card-text">Age: {petDetails.age} </h5>
                        <h5 className="card-text">Date of Birth: {petDetails.dob}</h5>
                        <h5 className="card-text">Date of Adoption: {petDetails.adoption}</h5>
                        <h5 className="card-text">Vet's Info: {petDetails.vet}</h5>
                        <h5 className="card-text">Medication: {petDetails.medication}</h5>
                        <h5 className="card-text">Notes: {petDetails.notes}</h5>
                        <br />
                        <button className="btn bg-info text-white" onClick={() =>
                        navigate(`/pets/${petDetails._id}/edit`, {state: petDetails})}>Edit {petDetails.name}</button>
                        <br />
                        <br />
                        <button className="btn btn-danger text-white" onClick={handleDelete}>Delete {petDetails.name}</button>
                     
                    </div>
                </div>
            </div>
        </div>
        </div>
        
     
    );
}

export default PetDetails;
