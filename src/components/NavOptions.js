
import React,{useState,useEffect} from 'react';
import '../styles/NavOptions.css';
import NavCard from './NavCard';

function NavOptions({miPhonesData,redmiPhonesData,tvData,laptopData,fitnessAndLifeStyleData,homeData,audioData,accessoriesData}) {

  const [miPhonesToggle, setMiPhonesToggle] = useState(false);
  const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessAndLifeStyleToggle, setFitnessAndLifeStyleToggle] = useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if(window.location.pathname === "/miphones"){
      return setMiPhonesToggle(true);
    }

    if(window.location.pathname === "/redmiphones"){
      return setRedmiPhonesToggle(true);
    }

    if(window.location.pathname === "/tv"){
      return setTvToggle(true);
    }

    if(window.location.pathname === "/laptops"){
      return setLaptopToggle(true);
    }

    if(window.location.pathname === "/fitness"){
      return setFitnessAndLifeStyleToggle(true);
    }

    if(window.location.pathname === "/home"){
      return setHomeToggle(true);
    }

    if(window.location.pathname === "/audio"){
      return setAudioToggle(true);
    }

    if(window.location.pathname === "/accessories"){
      return setAccessoriesToggle(true);
    }

  }, []);

  return (
    <div className='NavOptions'>
      
      {miPhonesToggle ? miPhonesData.map((item,index) => (
        <NavCard key={item.image} name={item.name} price={item.price} image = {item.image} index={index} />
      )) : null}
      
      {redmiPhonesToggle ? redmiPhonesData.map((item,index) => (
        <NavCard key={item.image} name={item.name} price={item.price} image = {item.image} index={index} />
      )) : null}

      {tvToggle ? tvData.map((item,index) => (
        <NavCard key={item.image} name={item.name} price={item.price} image = {item.image} index={index} />
      )) : null}

      {laptopToggle ? laptopData.map((item,index) => (
        <NavCard key={item.image} name={item.name} price={item.price} image = {item.image} index={index} />
      )) : null}

      {fitnessAndLifeStyleToggle ? fitnessAndLifeStyleData.map((item,index) => (
        <NavCard key={item.image} name={item.name} price={item.price} image = {item.image} index={index} />
      )) : null}

      {homeToggle ? homeData.map((item,index) => (
        <NavCard key={item.image} name={item.name} price={item.price} image = {item.image} index={index} />
      )) : null}

      {audioToggle ? audioData.map((item,index) => (
        <NavCard key={item.image} name={item.name} price={item.price} image = {item.image} index={index} />
      )) : null}

      {accessoriesToggle ? accessoriesData.map((item,index) => (
        <NavCard key={item.image} name={item.name} price={item.price} image = {item.image} index={index} />
      )) : null}


    </div>
  );
}

export default NavOptions;
