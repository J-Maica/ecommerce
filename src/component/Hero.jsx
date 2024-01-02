import coffee from '../assets/images/coffeeBanner.png';

function Hero() {
  return (
    <div className="bg-secondaryBrown h-100 h-100 d-flex align-items-center p-5">
      <div className="container  vh-100">
        <div className='row h-100'>
          <div className='col-12 col-lg-6 d-flex flex-column justify-content-center'>
            <h1 className="text-center text-lg-start mainText primaryBrown">Select Your New Perfect Taste</h1>
            <p className="text-center text-lg-start text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
              officia sapiente sequi tempora vitae quis iure facilis sed neque
              animi, laboriosam atque, amet a consectetur aperiam consequatur,
              obcaecati impedit. Illum cum, maiores a quia eos harum sit vero
              reiciendis dolorem.
            </p>
            <div className="text-center text-lg-start">
              <button className="btn btn-dark bg-primaryBrown">SHOP NOW</button>
            </div>
          </div>

          <div className='col-12 col-lg-6 d-flex align-items-center'>
            <img
              src={coffee}
              className="img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
