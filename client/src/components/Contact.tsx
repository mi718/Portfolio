import { useForm } from "react-hook-form";
import { useToast } from "../hooks/use-toast";
import { motion } from "framer-motion";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import emailjs from '@emailjs/browser';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, to: 'micael.staeubli@gmail.com' }),
      });
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs.sendForm('service_rqorsq5', 'template_7vk3yq7', e.target as HTMLFormElement, 'H6OW3nglMdhNlRXC2')
        .then(() => {
          reset(); // Clear the form
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
  }

  return (
      <section id="contact" className="section">
        <h2 className="section-title1">Get in Touch</h2>
        <div className="containerContact">
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
          >

            <div className="contact-card">
              <div className="contact-header">
                <h3 className="contact-title">Send me a message</h3>
              </div>
              <form onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                  <input

                      type={"text"}
                      className="form-input"
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="form-error">{errors.name.message}</p>}
                </div>
                <div className="form-group">
                  <input
                      type="email"
                      className="form-input"
                      placeholder="Your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                  />
                  {errors.email && <p className="form-error">{errors.email.message}</p>}
                  <textarea
                      className="form-textarea"
                      placeholder="Your message"
                      {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && <p className="form-error">{errors.message.message}</p>}
                </div>
                <button type="submit" className="submit-button">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
          <div className="vertical-line">‎</div>
          <div className={"social-icons"}>
            <a href="https://github.com/mi718" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/micaelstaubli/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin/>
            </a>
          </div>
        </div>
      </section>
  );
}