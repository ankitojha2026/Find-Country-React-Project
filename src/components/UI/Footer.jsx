
import footerData from '../../API/footerData.json';
import { MdPlace } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';


const Footer = () =>
{


    const icons={
        MdPlace:<MdPlace/>,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus:<TbMailPlus/>,
        
    }





    return (
        




        <footer className="py-3 my-4">

<hr />


<div className="container text-center">
  <div className="row">
{footerData.map((current, index) => 
    
    {
        const {icon,title,details}=current;
        return<>
                <div className="col" key={index}>
            
               <div>{icons[icon]}  <span className="card-text">{title}</span></div>
                <div><p className="card-text">{details}</p></div>
                </div>
          </>
    }
    )}
  </div>
</div> 



    
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="/about" className="nav-link px-2 text-body-secondary">About</a></li>
      <li className="nav-item"><a href="/country" className="nav-link px-2 text-body-secondary">Country</a></li>
      <li className="nav-item"><a href="/contact" className="nav-link px-2 text-body-secondary">Contact</a></li>
    </ul>
    <p className="text-center text-body-secondary">© 2025 Company, Inc</p>
  </footer>
     
    )           

}
export default Footer;