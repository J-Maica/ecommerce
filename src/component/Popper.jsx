import coffee from '../assets/images/coffee.jpg' 

function Popper() {
  return (
    <div className="bg-secondaryBrown text-primaryBrown mt-5">
    <div className="container py-5">
      <div className='row'>
          <div className='col-lg-8'>
          <h1>Select Your New Perfect Taste</h1>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
              officia sapiente sequi tempora vitae quis iure facilis sed neque
              animi, laboriosam atque, amet a consectetur aperiam consequatur,
              obcaecati impedit. Illum cum, maiores a quia eos harum sit vero
              reiciendis dolorem.
          </p>
          <button className="btn btn-primaryBrown my-4">SHOP NOW</button>
          </div>

          <div className='col-lg-4'>
              <img
              src={coffee}
              width={"800px"}
              className="figure-img img-fluid rounded"
              alt="A generic square placeholder image with rounded corners in a figure."
              />
          </div>
      </div>
    </div>
  </div>
  )
}

export default Popper