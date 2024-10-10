import Logo from "./Logo"


const Footer = () => {
  return (
    <>
      <footer className="w-full flex justify-center items-center bg-text_primary text-white font-montserrat">
        <div className="w-full flex justify-between items-center xl:max-w-7xl px-6 py-[120px]">
          <div>
            <Logo 
            className={ "text-[42px]" }/>
            <p className="max-w-[300px] text-white text-[14px] font-light mt-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking.
            </p>
          </div>
          <div className=" flex items-center text-[14px] font-light gap-20">
            <ul>
              <a href="#">
                <li>About</li>
              </a>
              <a href="#">
                <li>What We Offer</li>
              </a>
              <a href="#">
                <li>Leadership</li>
              </a>
              <a href="#">
                <li>Careers</li>
              </a>
              <a href="#">
                <li>Catalog </li>
              </a>
              <a href="#">
                <li>Become a partner</li>
              </a>
            </ul>

            <ul>
              <a href="#">
                <li>Learners</li>
              </a>
              <a href="#">
                <li>Partners</li>
              </a>
              <a href="#">
                <li>Developers</li>
              </a>
              <a href="#">
                <li>Transors</li>
              </a>
              <a href="#">
                <li>Blog</li>
              </a>
              <a href="#">
                <li>Tech Blog</li>
              </a>
            </ul>

            <ul>
              <a href="#">
                <li>Press </li>
              </a>
              <a href="#">
                <li>Investors</li>
              </a>
              <a href="#">
                <li>Terms</li>
              </a>
              <a href="#">
                <li>Privacy</li>
              </a>
              <a href="#">
                <li>Help</li>
              </a>
              <a href="#">
                <li>Accessibility</li>
              </a>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer