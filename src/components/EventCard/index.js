import PropTypes from "prop-types";
import "./style.scss";

const EventCard = ({
  imageSrc,
  imageAlt = "image",
  date = new Date(),
  title,
  label,
  small = false,
  ...props
}) => {
  const cardClass = `EventCard${small ? " EventCard--small" : ""}`;

  const formattedMonth = new Intl.DateTimeFormat('fr-FR', { month: 'long' }).format(date);

  return (
    <div data-testid="card-testid" className={cardClass} {...props}>
      <div className="EventCard__imageContainer">
        <img data-testid="card-image-testid" src={imageSrc} alt={imageAlt} />
        <div className="EventCard__label">{label}</div>
      </div>
      <div className="EventCard__descriptionContainer">
        <div className="EventCard__title">{title}</div>
        <div className="EventCard__month">{formattedMonth}</div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  imageSrc: PropTypes.string.isRequired, // L'URL de l'image est requise
  imageAlt: PropTypes.string, // Texte alternatif pour l'image
  date: PropTypes.instanceOf(Date).isRequired, // La date est requise et doit être une instance de Date
  title: PropTypes.string.isRequired, // Le titre est requis
  small: PropTypes.bool, // Option pour une version plus petite de la carte
  label: PropTypes.string.isRequired, // Le label est requis
};

EventCard.defaultProps = {
  imageAlt: "image", // Valeur par défaut pour le texte alternatif de l'image
  small: false, // Par défaut, la carte n'est pas petite
};

export default EventCard;
