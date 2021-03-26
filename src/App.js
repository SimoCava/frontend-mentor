import Cards from './Cards'

function App() {
  return (
    <main className='h-screen max-w-7xl text-center px-8 pt-20 pb-20 mx-auto'>
      <header>
        <h1 className='text-2xl text-neutral-veryDarkBlue font-light mb-1 xl:text-4xl mb-2'>
          Reliable, efficient delivery
        </h1>
        <h1 className='text-2xl text-neutral-veryDarkBlue font-semibold mb-4 xl:text-4xl mb-8'>
          Powered by Technology
        </h1>
        <p className='text-body text-neutral-grayishBlue font-normal mb-16 xl:w-2/5 mx-auto'>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <Cards />
    </main>
  )
}

export default App
