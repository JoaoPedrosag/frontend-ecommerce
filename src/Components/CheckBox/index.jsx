const Checkbox = ({ id, label, value, onChange, onClick }) => {
    return (
      <div>
        <input 
          id={id} 
          type="checkbox" 
          checked={value} 
          onChange={onChange}
          text={label} 
          onClick={onClick}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  };
  
  export default Checkbox;