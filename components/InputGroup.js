const InputGroup = ({
  _for,
  type,
  label,
  className,
  textArea,
  placeholder,
  required,
  onChange,
  value,
}) => {
  return textArea ? (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label htmlFor={_for} className='font-medium'>
        {!required ? (
          label
        ) : (
          <span>
            {label}
            <strong className='text-white'> *</strong>
          </span>
        )}
      </label>
      <textarea
        id={_for}
        name={_for}
        rows={8}
        className={`px-4 py-2 text-lg outline-none focus:border-b-4 focus:border-blue-700`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  ) : (
    <div className={`flex flex-col space-y-2 ${className}`}>
      <label htmlFor={_for} className='font-medium'>
        {!required ? (
          label
        ) : (
          <span>
            {label}
            <strong className='text-white'> *</strong>
          </span>
        )}
      </label>
      <input
        type={type}
        id={_for}
        name={_for}
        className={`px-4 py-2 text-lg outline-none focus:border-b-4 focus:border-blue-700`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      {/* { !value.length && required ? <p className='text-white'>Please fill in this field</p> : null } */}
    </div>
  )
}

export default InputGroup