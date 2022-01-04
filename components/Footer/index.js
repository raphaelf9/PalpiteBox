import React from "react";

const Footer = () =>{
    return(
        <div className='bg-gray-700 p-4'>
          <div className='container mx-auto text-center font-bold text-white'>
          Projeto desenvolvido por Raphael Faria
          <div>
              <a className="hover:underline" href="https://www.linkedin.com/in/raphaelf9/" target ="_blank"> 
              Linkedin /
              </a> 
              <a className="hover:underline" href="#" target= '_blank'> 
              Github.</a>
        </div> 
          </div>
        </div>
    )

}
export default Footer