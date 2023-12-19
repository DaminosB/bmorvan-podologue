import styles from "./ContactSection.module.css";

const ContactSection = () => {
  return (
    <form className={`container ${styles.contactSection}`}>
      <h2>Contact</h2>
      <label htmlFor="name">
        <input type="text" name="nom" id="name" placeholder="Votre nom" />
      </label>
      <label htmlFor="email">
        <input type="email" name="email" id="email" placeholder="Votre email" />
      </label>
      <label htmlFor="telephone">
        <input
          type="tel"
          name="téléphone"
          id="telephone"
          pattern="[0-9]{10}"
          placeholder="Votre numéro de téléphone"
        />
      </label>
      <button type="submit">Valider</button>
    </form>
  );
};

export default ContactSection;
