import "../css/Login.css"

export default function FormInput(props) {
    const { label, onChange, id, ...inputProps } = props;
    return (
        <div className="formInput">
            <input {...inputProps} onChange={onChange} />
        </div>
    );
  }