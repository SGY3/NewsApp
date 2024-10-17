import image from '../assest/new.jpg'

const NewItem = ({ title, description, src, url }) => {
  return (
    <div className="col-md-4 card m-1 p-1 bg-dark text-light" style={{ maxWidth: "345px" }}>
      <img src={src ? src : image} style={{ height: "200px", width: "100%" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description ? description : "click below to read more."}</p>
        <a href={url} target='_blank' className="btn btn-primary">Read More</a>
      </div>
    </div>
  )
}

export default NewItem
