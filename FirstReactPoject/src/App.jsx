export default function App(){
  return(
  <>
  <form className="new-item-form">
    <div className = "form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">TODO List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox"/>
        Item 1
      </label>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
}
// https://www.youtube.com/watch?v=Rh3tobg7hEo -Link to tutorial used look over it if confused later