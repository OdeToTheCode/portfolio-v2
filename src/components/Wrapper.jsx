const Wrapper = ({children}) => {
  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundColor: "#333",
      padding: "50px"
    }}>
      { children }
    </div>
  )
}

export default Wrapper;
