import "../styles/Services.css";

function Services({ services }) {
  return (
    <section className="services" id="services">
      <div className="services__group">
        <h3 className="highlight">What I do</h3>
        <h2 data-bgtext="My Services">
          Services and <span className="highlight">Solutions</span>
        </h2>
      </div>
      <div className="services__grid">
        {services.map((service, index) => (
          <div key={index} className="service__card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <h4>Features:</h4>
            <ul>
              <li>{service.features.join(", ")}</li>
            </ul>
            <h4>Technologies:</h4>
            <ul>
              <li>{service.technologies.join(", ")}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
