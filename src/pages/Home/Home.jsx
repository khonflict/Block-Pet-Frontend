import './Home.css'

const Home = () => {
    return (
        <div id="home-img" >
            <div className="row g-3 mx-auto w-50 border border-5 rounded-3 p-5 m-5 text-center">
                <h2>About Us</h2>
                <br />
                <br />
                <p>Block Pets is the premier destination for pet lovers. Search our extensive network of shelters and rescues to find your new best furrriend today! Our services are designed to enhance your life in the best ways. Explore the possibilities!</p>
                <br />
                <br />
                <button type="submit" className="btn col-2 bg-info text-white m-auto"><a href={'/signUp'}>Join Us!</a></button>
            </div>
        </div>


    );
}

export default Home;
