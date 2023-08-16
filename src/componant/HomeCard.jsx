
const HomeCard = ({title, imagelink , par }) =>{
    return (
        <div className=" bg-gray-200 rounded-lg shadow-2xl  m-6   ">

        <h1 className="p-6 text-2xl font-bold text-gray-900 text-center">{title} </h1> 

          <img src={imagelink} alt="easy booking" className="p-0"/>

            <p className=" p-6 text-gray-600">
               {par} 
            </p>
      </div>
    )
}
export default HomeCard ; 