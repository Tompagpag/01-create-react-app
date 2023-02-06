const Input = (props) => {
  const handlerChange = (e) => {
    e.preventDefault()
    props.setFirstname(e.target.value);
  }
  return <input type="text"  placeholder="saiuir un prénom" onChange={(e) => {handlerChange(e)}}/>
}

export default Input;
