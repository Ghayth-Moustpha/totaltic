import HomeCard from "../HomeCard";

const Home = ()  => {
    return (
        <>
 
  <section className="bg-gray-100 py-16">
    <div className="container mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to TotalTicket</h1>
        <p className="text-xl text-gray-600">The easiest way to book tickets for your favorite events</p>
        <a href="#" className="bg-blue-500 text-white px-6 py-3 mt-6 inline-block rounded-lg hover:bg-blue-600">Get Started</a>
      </div>
    </div>
  </section>

 
  <section className="bg-white py-16">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <HomeCard
       title={"Easy Booking Process." } 
       imagelink={"/images/easybooking.jpg"}
        par={"With TotalTicket, you can book tickets for your desired events in just a few simple steps. Say goodbye to long queues and complicated booking systems."}/> 
          <HomeCard
       title={"modren Payment Mrethod " } 
       imagelink={"/images/easybooking.jpg"}
        par={"With TotalTicket, you can book tickets for your desired events in just a few simple steps. Say goodbye to long queues and complicated booking systems."}/> 
        
        <HomeCard
       title={"modren Payment Mrethod " } 
       imagelink={"/images/easybooking.jpg"}
        par={"With TotalTicket, you can book tickets for your desired events in just a few simple steps. Say goodbye to long queues and complicated booking systems."}/> 
        
    
      </div>
    </div>
  </section>

 
        </>
    )
}

export default Home ; 