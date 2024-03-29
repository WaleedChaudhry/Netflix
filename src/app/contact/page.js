import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact With Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.247179936299!2d74.3587024151045!3d31.520369001340352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392a9928a0ee5d47%3A0x40df2d4647e69b3a!2sBadshahi%20Mosque!5e0!3m2!1sen!2s!4v1681787623458!5m2!1sen!2s"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>

        </>
    );
};

export default Contact;
