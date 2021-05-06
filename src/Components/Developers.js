import dati from '../Dati/dataModuleFile';
import BtnShowVer from "./BtnShowVer";
import './css/Developers.css'

const Developer = () => {
  // console.log(dati[0].nome);
  return (
    <div>
      <div className='mt-4'>
          
          <h1>
            Developer page
          </h1>

          <BtnShowVer/>


          <p>
            Here is shown the team of developers who carried out the project.
          </p>

      </div>

      <div>
        {dati.map(({ id, nome, cognome, eta, email, img_avatar, role }) => {
            console.log(img_avatar);
            const max_height = "100px";
            const max_width  = "100px";
          return (
            <div className="card card-body mt-2 bg-success"  key={id}>
              <div className='row' style={{backgroundColor:"mediumseagreen"}}>

                  <div className='rounded-circle' style={{width: max_width, height: max_height }}>
                      <img className='border border-solid rounded-circle'  src={img_avatar} style={{marginTop: "11px", marginLeft: "4px",width:"100%", height:"100%"}} alt=""/>
                  </div>
                  <div className='col-9 text-white'>
                      <div>{nome.toLocaleUpperCase()}</div>
                      <div>{cognome.toLocaleUpperCase()}</div>
                      <div>{eta}</div>
                      <div>{email}</div>
                      <div><b><i className='text-secondary'>role:</i></b> {role} </div>
                  </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Developer;
