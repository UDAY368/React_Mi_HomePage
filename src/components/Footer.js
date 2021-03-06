import React from 'react';
import '../styles/Footer.css';
import '../styles/preFooter.css';

const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{height:'24px'}}><path d="M480 256c-17.67 0-32 14.31-32 32c0 52.94-43.06 96-96 96H192L192 344c0-9.469-5.578-18.06-14.23-21.94C169.1 318.3 159 319.8 151.9 326.2l-80 72C66.89 402.7 64 409.2 64 416s2.891 13.28 7.938 17.84l80 72C156.4 509.9 162.2 512 168 512c3.312 0 6.615-.6875 9.756-2.062C186.4 506.1 192 497.5 192 488L192 448h160c88.22 0 160-71.78 160-160C512 270.3 497.7 256 480 256zM160 128h159.1L320 168c0 9.469 5.578 18.06 14.23 21.94C337.4 191.3 340.7 192 343.1 192c5.812 0 11.57-2.125 16.07-6.156l80-72C445.1 109.3 448 102.8 448 95.1s-2.891-13.28-7.938-17.84l-80-72c-7.047-6.312-17.19-7.875-25.83-4.094C325.6 5.938 319.1 14.53 319.1 24L320 64H160C71.78 64 0 135.8 0 224c0 17.69 14.33 32 32 32s32-14.31 32-32C64 171.1 107.1 128 160 128z"/></svg>

const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{height:'24px'}}><path d="M384 476.1L192 421.2V35.93L384 90.79V476.1zM416 88.37L543.1 37.53C558.9 31.23 576 42.84 576 59.82V394.6C576 404.4 570 413.2 560.9 416.9L416 474.8V88.37zM15.09 95.13L160 37.17V423.6L32.91 474.5C17.15 480.8 0 469.2 0 452.2V117.4C0 107.6 5.975 98.78 15.09 95.13V95.13z"/></svg>

const sheildIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{height:'24px'}}><path d="M466.5 83.71l-192-80C269.6 1.67 261.3 0 256 0C250.7 0 242.5 1.67 237.6 3.702l-192 80C27.7 91.1 16 108.6 16 127.1c0 257.2 189.2 384 239.1 384c51.1 0 240-128.2 240-384C496 108.6 484.3 91.1 466.5 83.71zM256 446.5l.0234-381.1c.0059-.0234 0 0 0 0l175.9 73.17C427.8 319.7 319 417.1 256 446.5z"/></svg>

const instagram = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{height:'24px'}}><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>;

const youTube = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{height:'24px'}}><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>;

const facebook = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{height:'24px'}}><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>;

const twitter = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{height:'24px'}}><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/></svg>;


function Footer({footerData}) {
  return (
    <>
    {/* -------------------------------PreFooter1------------------------------- */}
      <div className="preFooter">
        <div>
          {repeatIcon}
          <p>
            <b>Hassle-free replacement</b> <br />
            10-days easy replacement policy on mi.com
          </p>
        </div>
        <div>
          {sheildIcon}
          <p>
            <b>100% secure payments</b> <br />
            We support Cards,Wallets,EMI and COD
          </p>
        </div>
        <div>
          {mapIcon}
          <p>
            <b>Vast service network</b> <br />
            1000 Mi service-centers across 600 cities
          </p>
        </div>
      </div>
      {/* -------------------------------PreFooter2------------------------------- */}
      <div className="preFooter2">
        <div>
          <p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span>
        </div>
        <div>
          <div>
            <input type="text" placeholder="Enter your email" />
            <button>{`>`}</button>
          </div>
          {/* <span>Thanks. You're on our email list for special offers.</span> */}
        </div>
        <div>
          <p>FOLLOW MI</p><span>We want to hear from you!</span>
        </div>
        <div>
          {facebook}{youTube}{instagram}{twitter}
        </div>
      </div>
      {/* -------------------------------MainFooter------------------------------- */}
      <div className="footer">
        <div>
          <p> SUPPORT </p>
          {footerData.support.map((item)=>(
            <a key={item.url} href={item.url}>{item.name} <br /></a>
          ))}
        </div>

        <div>
          <p> SHOP AND LEARN </p>
          {footerData.shopAndLearn.map((item)=>(
            <a key={item.url} href={item.url}>{item.name} <br /></a>
          ))}
        </div>

        <div>
          <p> RETAIL STORE </p>
          {footerData.retailStore.map((item)=>(
            <a key={item.url} href={item.url}>{item.name} <br /></a>
          ))}
        </div>

        <div>
          <p> ABOUT US </p>
          {footerData.aboutUS.map((item)=>(
            <a key={item.url} href={item.url}>{item.name} <br /></a>
          ))}
        </div>
        
        <div>
          <p> CONTACT US </p>
          {footerData.contactUs.map((item)=>(
            <a key={item.url} href={item.url}>{item.name} <br /></a>
          ))}
        </div>

        <div>
          <p>Chat with our Virtual AI Bot (24/7 Live Agent Support)</p>
          <button>CHAT NOW</button>
        </div>   
           
      </div>
      <div className='footerBorder'>
          <div> Uday @ WebDev'22</div>
      </div>
    </>
  );
}

export default Footer;
