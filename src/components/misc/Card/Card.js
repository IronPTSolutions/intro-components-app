function Card({ img, title, description, children }) {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {children}
      </div>
    </div>
  )
}

export default Card