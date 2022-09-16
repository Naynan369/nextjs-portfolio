import React from 'react'

function About() {
  return (
    <div id='about' className = 'w-full md:h-screen p-2 flex items-center py-16'>
        <div className = 'max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className = 'col-span-2'>
              <p className = 'py-4 uppercase text-3xl tracking-widest'>About</p>
              <h2>Who I am!</h2>
              <p className = 'text-[#ffa500] text-2xl'>*** I'm not your ordinary developer ***</p>
              <p>I was really facinated with technology and its staff it make me excited to watch the detail information about how a website, software and also mobile application actually works? how they could connected to database to store an organized data? I taught myself how to code and how to connect the digital world with the tradional one.</p>
            </div>
            <div className = 'w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300'>
              <img className = 'rounded-xl' src="https://images.wondershare.com/mockitt/ui-design/gui-python-introduction.jpg" alt="/" />
            </div>
        </div>
    </div>
  )
}

export default About