import Image from "next/image"
import LoginPage from "../Home"
import { useState, useEffect } from "react"
import Hero from "../../assets/gifs/sudadera_sams.gif"
import Logo from "../../assets/logo/logo_sams.png"

const LoadingPage = () =>{
    const [isShowLoadingPage, setShowLoadingPage] = useState(true);
    useEffect(() => {
        const timeout = setTimeout(() => {
          setShowLoadingPage(false);
        }, 2000);
    
        // Limpiar el temporizador al desmontar el componente
        return () => clearTimeout(timeout);
      }, []); // Se ejecuta solo una vez al montar el componente
      
    return(
        <>
        <section className= {`${isShowLoadingPage ? "h-screen w-full relative" : "hidden"}`} style={{backgroundColor: "#004B8D"}}>
             <img className="h-4/6 w-full absolute" src="assets/bgImages/loginBg.png" alt="fondo" />
             <div className="flex flex-col justify-start h-full w-full gap-10">
                 <div className="flex justify-center items-center z-10 h-1/6 w-full relative">  
                 <Image width={600} className="px-10 absolute top-32" src={Logo}/>
                 </div>
                 <div className="flex justify-center items-center z-10 h-4/6 w-full">   
                     <Image className="animation" src={Hero} alt="hero" width={280} height={250} />
                 </div>
                 {/* <div className="flex justify-center items-center z-10 h-1/6 w-full relative">    
                     <CustomizedProgressBar classname={"absolute left-20"} />
                 </div> */}
             </div>
         </section>
             {!isShowLoadingPage && <LoginPage />}
        </>
         )
}

export default LoadingPage;