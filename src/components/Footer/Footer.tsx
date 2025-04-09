import './Footer.scss';
import logo from '../../../public//icons/Logo.svg';
import { BackToTopIcon } from '../../../public/icons/BackToTopIcon';
import { scrollToTop } from '../../utils/scrollUtils';
import { footerLink } from '../../constants/footerLinks';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <a href="" className="footer_img-wrapper">
          <img src={logo} alt="Logo" className="footer_img" />
        </a>
        {footerLink.map(el => (
          <a target="_blank" key={el.path} href={el.path} rel="noreferrer">
            {el.name}
          </a>
        ))}
        <button onClick={scrollToTop} className="footer_button">
          Back to top <BackToTopIcon />
        </button>
      </div>
    </div>
  );
};

export default Footer;
