const Tour = ({ image, date, title, info, url }) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={image} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{info}</p>
        <div className="tour-footer">
          <a className="btn" href={url} target="_blank">
            RUN
          </a>
        </div>
      </div>
    </article>
  );
};
export default Tour;
