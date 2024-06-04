import React from 'react'

const Client = () => {
  return (
    <section className=' pt-10 lg:pt-[120px]'>
      <div className='container mx-auto px-3'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div className='mx-auto mb-12 md:max-w-[800px] text-center lg:mb-20'>
              <span className='mb-2 block text-lg md:text-2xl font-semibold text-primary'>
                Our Clients
              </span>
              <p className='text-base text-black w-full md:text-xl'>
                Building strong, lasting relationships with our clients based on
                trust and reliability
              </p>
            </div>
          </div>
        </div>

        {/* <div className='w-full flex md:flex-row flex-col gap-4 px-4 justify-center'>
          {clients.map((client) => (
            <div
              key={client._id}
              className='mb-9 rounded-[20px] bg-white md:px-7 xl:px-10'
            >
              <img
                src={client.imageUrl} 
                alt='Client Image'
                className="w-40"
              />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}

export default Client