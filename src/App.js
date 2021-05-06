import Navbar from "./Components/NavBar";
import TitleFooter from "./Components/ComponenteTitleAndFooter";


const App = () => {
  return (
    <div>
      {/* <div>App</div> */}
      <TitleFooter
        text="React -- basic functionality -- "
        fontF="cursive"
        fontS="44px"
        alignment="center"
        padding="33px"
        fgColor="white"
        bgColor="mediumseagreen"
      />
          <Navbar></Navbar>

      <div>
      </div>
 
      <div className='mt-2'>
        <TitleFooter
                  text="developed by tarallo giuseppe &copy; London 2021"
                  fontF="cursive"
                  fontS="22px"
                  alignment="center"
                  padding="11px"
                  fgColor="darkblue"
                  bgColor="mediumseagreen"
          />
      </div>
      
    </div>
  );
};

export default App;
