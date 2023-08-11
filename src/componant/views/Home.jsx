

const Home = ()  => {
    return (
        <>
 
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to TotalTicket</h1>
        <p class="text-xl text-gray-600">The easiest way to book tickets for your favorite events</p>
        <a href="#" class="bg-blue-500 text-white px-6 py-3 mt-6 inline-block rounded-lg hover:bg-blue-600">Get Started</a>
      </div>
    </div>
  </section>

 
  <section class="bg-white py-16">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="p-6 bg-gray-200 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Easy Booking Process</h2>
          <p class="text-gray-600">With TotalTicket, you can book tickets for your desired events in just a few simple steps. Say goodbye to long queues and complicated booking systems.</p>
        </div>
        <div class="p-6 bg-gray-200 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Wide Range of Events</h2>
          <p class="text-gray-600">TotalTicket offers a wide variety of events to choose from. Whether you're into concerts, sports, theater, or more, we have something for everyone.</p>
        </div>
        <div class="p-6 bg-gray-200 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Secure Transactions</h2>
          <p class="text-gray-600">Your security is our top priority. TotalTicket ensures that all transactions are secure and your personal information is protected at all times.</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-gray-900 py-6 text-white">
    <div class="container mx-auto text-center">
      <p>&copy; 2023 TotalTicket. All rights reserved.</p>
    </div>
  </footer>
        </>
    )
}

export default Home ; 