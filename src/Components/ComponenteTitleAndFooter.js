import './css/TitleAndFooterComponent.css'

// destrutturazione diretta
const TitleAndFooterComponent = ({
  text,
  fontF,
  fontS,
  alignment,
  fgColor,
  bgColor,
  padding
}) => {

  // console.log(text, fontF, fontS, alignment, fgColor, bgColor, padding);

  return (
    <div className='titleAndFooter'
      style={{
        fontFamily: fontF,
        fontSize: fontS,
        textAlign: alignment,
        color: fgColor,
        backgroundColor: bgColor,
        padding: padding,
        lineHeight: "26px"
      }}
    >
      {text}
    </div>
  );
};

export default TitleAndFooterComponent;
