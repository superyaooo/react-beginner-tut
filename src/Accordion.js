import "./Accordion.css";

export default function Accordion({id, open, onClick, children, labelText}) {

    const handleClick = () => {
        onClick(id);
    }

    return (
      <div className="accordion">
          <div className="label-text" onClick={handleClick}>{labelText}</div> 
          {!!open &&<div>{children}</div>}
          
      </div>
    );
}
