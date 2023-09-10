const Option = ({ name }) => {
  return (
    <>
      <p className="nav-link" to={"/" + name}>{name}</p>
    </>
  )
}
export default Option