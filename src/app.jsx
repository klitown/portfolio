import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog"
import { Button } from '../components/ui/button'
import AboutMe from '../views/AboutMe'
import OneMoreThing from '../views/OneMoreThing'

export function App() {
  return (
    <div className='min-h-screen bg-[url(/grid.svg)]'>
      <div className='container mx-auto p-10'>

        <section className='flex flex-col justify-center my-10 items-start gap-0'>
          <h1 className='text-6xl font-bold leading-relaxed'>
            Nicolás Ayala
          </h1>
          <h2 className='text-2xl font-extralight leading-normal -my-4'>
            Frontend developer
          </h2>
        </section>


        <section className='container mx-auto px-0 md:px-10 lg:px-20'>
          <p className="text-2xl  text-black leading-loose font-semibold">
            Hey there 👋. Nice to meet you, I'm Nicolás, a paraguayan citizen, working as a
            <span className="text-white rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 font-bold mx-2">
              Frontend
              Developer
            </span>
            in a local company here in
            <span className="text-white rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 font-bold mx-2">
              Asunción, Paraguay.
            </span>
          </p>
        </section>

        <hr className='my-16 border-none' />

        <section>
          <div className="pointer-events-none relative flex gap-10 overflow-hidden">
            <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-20">
              <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)]"
                src="https://i.ibb.co/3zdPZDY/tsjs-removebg-preview.png"
                alt="" />
              <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)]"
                src="https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png"
                alt="" />
              <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
                alt="" />
              <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)]"
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                alt="" />
            </div>

            <div aria-hidden="true" className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-20">
              <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)]"
                src="https://i.ibb.co/3zdPZDY/tsjs-removebg-preview.png"
                alt="" />
              <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)]"
                src="https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png"
                alt="" />
              <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)]"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"
                alt="" />
              <img className="aspect-square max-w-[clamp(10rem,28vmin,20rem)]"
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                alt="" />
            </div>
          </div>
        </section>

        <section className='my-32'>
          <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">

            <div class="row-[span_16_/_span_16] col-span-2 md:col-span-1 bg-[url('/rrrepeat.svg')] rounded-lg
                  bg-no-repeat bg-center border border-gray-100 group">
              <div className='bg-white/10 backdrop-blur-sm flex justify-center items-center h-full
              group-hover:bg-white/30 group-hover:grayscale group-hover:bg-repeat transition-all'>
                <Dialog>
                  <DialogTrigger>
                    <Button className='font-bold leading-relaxed tracking-wide text-4xl p-16 md:p-10 bg-white'
                      variant="outline">
                      About me 🙋🏻‍♂️
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <span className='text-3xl'>About me</span>
                      </DialogTitle>
                      <DialogDescription>
                        A short description about me 👋🏻
                      </DialogDescription>
                    </DialogHeader>
                    <AboutMe />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div class="col-span-2 row-[span_16_/_span_16] bg-[url('/ffflux.svg')] rounded-lg
            bg-cover bg-center">
              <div className='bg-white/10 backdrop-blur-sm flex flex-col justify-start items-center h-full rounded-lg'>

                <div className='flex flex-col md:flex-row p-5 md:p-0 justify-between items-center w-full h-1/3 bg-white/60 backdrop-blur-sm px-3'>
                  <p className='font-bold text-3xl leading-relaxed px-3 py-2 rounded-md'>
                    Some Projects
                  </p>
                  <a href='https://github.com/klitown' target='_blank'
                    className='border-4 border-emerald-200 px-3 py-2 text-blue-500 rounded-md underline text-lg bg-white/60 backdrop-blur-sm'>
                    Feel free to see more on Github
                  </a>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-5 h-full w-full bg-white/30 backdrop-blur-sm p-5'>
                  <div className='flex flex-col h-full justify-start items-center rounded-md p-3 bg-white group hover:bg-black transition-all'>
                    <div className='flex flex-col md:flex-row w-full justify-between items-start'>
                      <p className='font-semibold leading-relaxed text-xl group-hover:text-white'>
                        Cartalogo Digital
                      </p>
                      <p className='font-light text-gray-400 text-sm '>
                        <span className='w-10 h-10 bg-green-500 rounded-full'>.</span>
                        <a href='https://cartalogo.digital' target='_blank' className='text-blue-500 hover:text-blue-700 text-lg hover:underline group-hover:text-white mx-2'>
                          Visit
                        </a>
                      </p>
                    </div>
                    <div className='flex flex-col w-full justify-start items-center my-2'>
                      <p className='font-light text-gray-400 leading-relaxed tracking-wide text-sm'>
                        An e-commerce platform aimed at businesses seeking to establish an online presence without the typical complexities. <br />
                        Includes a store for the client and a admin panel dashboard.
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col h-full justify-start items-center rounded-md p-3 bg-white group hover:bg-black transition-all'>
                    <div className='flex flex-col md:flex-row w-full justify-between items-start'>
                      <p className='font-semibold leading-relaxed text-xl group-hover:text-white'>
                        Aire libre
                      </p>
                      <p className='font-light text-gray-400 text-sm'>
                        <span className='w-10 h-10 bg-green-500 rounded-full'>.</span>
                        <a href='https://aire-libre.vercel.app/' target='_blank' className='text-blue-500 hover:text-blue-700 text-lg hover:underline group-hover:text-white mx-2'>
                          Visit
                        </a>
                      </p>
                    </div>
                    <div className='flex flex-col w-full justify-start items-center my-2'>
                      <p className='font-light text-gray-400 leading-relaxed tracking-wide text-sm'>
                        Open-source community-driven project named "Aire Libre" designed to address the need for accessible, collaborative, and decentralized information about air quality.
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col h-full justify-start items-center rounded-md p-3 bg-white group hover:bg-black transition-all'>
                    <div className='flex flex-col md:flex-row w-full justify-between items-start'>
                      <p className='font-semibold leading-relaxed text-xl group-hover:text-white'>
                        Spotify API
                      </p>
                      <p className='font-light text-gray-400 text-sm'>
                        <span className='w-10 h-10 bg-green-500 rounded-full'>.</span>
                        <a href='https://spoti-app-rosy.vercel.app/home' target='_blank' className='text-blue-500 hover:text-blue-700 text-lg hover:underline group-hover:text-white mx-2'>
                          Visit
                        </a>
                      </p>
                    </div>
                    <div className='flex flex-col w-full justify-start items-center my-2'>
                      <p className='font-light text-gray-400 leading-relaxed tracking-wide text-sm'>
                        Front-end application utilizing Spotify's open API. This project involves creating a user interface that interacts with Spotify's extensive music library
                        and features, providing users with the ability to search, play, and manage Spotify's vast collection of songs, playlists, and artist information.
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col h-full justify-start items-center rounded-md p-3 bg-white group hover:bg-black transition-all'>
                    <div className='flex flex-col md:flex-row w-full justify-between items-start'>
                      <p className='font-semibold leading-relaxed text-xl group-hover:text-white'>
                        Digital Planner Landing
                      </p>
                      <p className='font-light text-gray-400 text-sm'>
                        <span className='w-10 h-10 bg-green-500 rounded-full'>.</span>
                        <a href='https://jahapp.vercel.app/' target='_blank' className='text-blue-500 hover:text-blue-700 text-lg hover:underline group-hover:text-white mx-2'>
                          Visit
                        </a>
                      </p>
                    </div>
                    <div className='flex flex-col w-full justify-start items-center my-2'>
                      <p className='font-light text-gray-400 leading-relaxed tracking-wide text-sm'>
                        Digital travel planner project, just a landing page, designed to assist users in organizing and planning their travels.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="col-span-2 row-[span_16_/_span_16] bg-[url('/flux.svg')] rounded-md
            bg-cover bg-center">
              <div className='bg-white/10 backdrop-blur-sm flex flex-col justify-start items-center h-full rounded-lg'>

                <div className='flex justify-between items-center w-full h-1/3 bg-white/60 backdrop-blur-sm px-3'>
                  <p className='font-bold text-3xl leading-relaxed px-3 py-2 rounded-md'>
                    Social
                  </p>
                </div>

                <div className='grid grid-cols-2 lg:grid-cols-6 gap-1 h-full w-full bg-white/30 backdrop-blur-sm p-5'>

                  <svg onClick={() => window.open("https://www.linkedin.com/in/nicolas-ayala-py/")}
                    className='cursor-pointer'
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                  </svg>
                  <svg onClick={() => window.open("https://github.com/klitown")}
                    className='cursor-pointer'
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"></path><path fill="#455a64" d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"></path><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"></path><path fill="#455a64" d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"></path><path fill="#00bcd4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"></path>
                  </svg>
                  <a href="mailto:roacutanico@gmail.com">
                    <svg
                      className='cursor-pointer'
                      xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                      <path fill="#e0e0e0" d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"></path><path fill="#d9d9d9" d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"></path><path fill="#eee" d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"></path><path fill="#e0e0e0" d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"></path><path fill="#ca3737" d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"></path><path fill="#f5f5f5" d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"></path><path fill="#e84f4b" d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"></path>
                    </svg>
                  </a>


                </div>

              </div>
            </div>

            <div class="row-[span_16_/_span_16] col-span-2 md:col-span-1 bg-[url('/triangle.svg')] rounded-lg
                  bg-no-repeat bg-center border border-gray-100 group">
              <div className='bg-white/10 backdrop-blur-sm flex justify-center items-center h-full
              group-hover:bg-white/30 group-hover:grayscale group-hover:bg-repeat transition-all'>
                <Dialog>
                  <DialogTrigger>
                    <Button className='font-bold leading-relaxed tracking-wide text-4xl p-16 md:p-10 bg-white'
                      variant="outline">
                      One more thing 👀
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        <span className='text-3xl'>Other facts</span>
                      </DialogTitle>
                      <DialogDescription>
                        Wanna know a little more?
                      </DialogDescription>
                    </DialogHeader>
                    <OneMoreThing />
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <div class="bg-[url('/lock.png')] col-span-2 md:col-span-1 border border-gray-100 rounded-md
            bg-contain bg-no-repeat bg-center row-[span_16_/_span_16]">
              <div className='bg-white/10 backdrop-blur-sm flex justify-center items-center h-full rounded-lg'>
                <div className='p-5 bg-white rounded-lg font-bold leading-relaxed tracking-wide'>
                  <p>Soon!</p>
                </div>
              </div>
            </div>
            <div class="bg-[url('/lock.png')] col-span-2 md:col-span-1 border border-gray-100 rounded-md
            bg-contain bg-no-repeat bg-center row-[span_16_/_span_16]">
              <div className='bg-white/10 backdrop-blur-sm flex justify-center items-center h-full rounded-lg'>
                <div className='p-5 bg-white rounded-lg font-bold leading-relaxed tracking-wide'>
                  <p>Soon!</p>
                </div>
              </div>
            </div>
            <div class="bg-[url('/lock.png')] col-span-2 md:col-span-1 border border-gray-100 rounded-md
            bg-contain bg-no-repeat bg-center row-[span_16_/_span_16]">
              <div className='bg-white/10 backdrop-blur-sm flex justify-center items-center h-full rounded-lg'>
                <div className='p-5 bg-white rounded-lg font-bold leading-relaxed tracking-wide'>
                  <p>Soon!</p>
                </div>
              </div>
            </div>
          </div>

        </section>



      </div>
    </div>
  )
}
