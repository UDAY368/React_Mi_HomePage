import React from 'react';
import HotItemCard from './HotItemCard';
import '../styles/HotAccessories.css';


function HotAccessories({musicData,smartDeviceData,homeData,lifestyleData,mobilesData,
    musicCover,smartDeviceCover,homeDataCover,lifestyleCover,mobilesCover}) {
  return (
    <div className='HotAccessories'>
      <div>
          <img src={musicCover || smartDeviceCover || homeDataCover || lifestyleCover || mobilesCover} alt="Cover" />
      </div>
      {/*--------- 2nd section ------------ */}
      <div>
          {musicData&&musicData.map((item,index) =>(
              <HotItemCard key={item.image} name = {item.name} 
              price={item.price} image ={item.image} index= {index}/>
          ))}

          {smartDeviceData&&smartDeviceData.map((item,index) =>(
              <HotItemCard key={item.image} name = {item.name} 
              price={item.price} image ={item.image} index= {index}/>
          ))}

          {homeData&&homeData.map((item,index) =>(
              <HotItemCard key={item.image} name = {item.name} 
              price={item.price} image ={item.image} index= {index}/>
          ))}

          {lifestyleData&&lifestyleData.map((item,index) =>(
              <HotItemCard key={item.image} name = {item.name} 
              price={item.price} image ={item.image} index= {index}/>
          ))}

          {mobilesData&&mobilesData.map((item,index) =>(
              <HotItemCard key={item.image} name = {item.name} 
              price={item.price} image ={item.image} index= {index}/>
          ))}
          <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg"/>
      </div>
          
    </div>
  );
}

export default HotAccessories;
