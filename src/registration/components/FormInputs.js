export const FormInput = ({ name, type, placeholder, value, onChange, error, success }) => {
  return(
    <div className={`form__field ${error ? 'error' : success ? 'good' : ''}`}>
      <input
        name={name}
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="divError">{error}</div>}
    </div>
  )
}