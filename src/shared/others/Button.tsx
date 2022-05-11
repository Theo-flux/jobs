type ButtonProps = {
  className: string;
  text: string;
}

function Button({className, text}: ButtonProps) {
  return (
    <button className={`font-roboto px-4 outline-0 md:px-8 py-2 text-white ${className}`}>
      {text}
    </button>
  )
}

export default Button;
