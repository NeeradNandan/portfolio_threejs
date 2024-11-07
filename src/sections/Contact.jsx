import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
    const formRef= useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
                                         name: '',
                                         email: '',
                                         message: '',
                                     });
    const handleChange = ({target: {name,value}}) => {
        setForm({...form, [name]: value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send("service_rsiwon9",
                         "template_t4vzcuf",
                         {
                             from_name: form.name,
                             to_name: "Neerad",
                             from_email: form.email,
                             to_email: "nrdnandan@gmail",
                             message: form.message,
                         }, "Iw9jmHHU0hdWCt_VX")
            setLoading(false);
            alert("Thank you. Your message has been sent");

            setForm({
                        name: '',
                        email: '',
                        message: '',
                    });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert("Something went wrong. Please try again later");
        }
    }
    return (
        <section
        className="c-space my-20"
        id="contact"
        >
            <div
            className="relative min-h-screen flex items-center justify-center flex-col"
            >
                <h3
                className="head-text"
                >
                    Contact Me
                </h3>
                <img
                src="/assets/terminal.png"
                alt="terminal background"
                className="absolute inset-0 min-h-screen"
                />
                <div
                className="contact-container"
                >
                    <h3
                    className="head-text"
                    >
                        Lets Talk
                    </h3>
                    <p
                    className="text-lg text-white-600 mt-3"
                    >
                        Whether you are trying to build a responsive website or mobile application or improve your existing platform, or bring a unique project idea to your life, I am here to help you!
                    </p>
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col space-y-7"
                    >
                        <label
                            className="space-y-3"
                        >
                            <span
                                className="field-label"
                            >
                                Full Name
                            </span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="Rahul Kumar"
                            />
                        </label>
                        <label
                            className="space-y-3"
                        >
                            <span
                                className="field-label"
                            >
                                Email
                            </span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="xxx@gmail.com"
                            />
                        </label>
                        <label
                            className="space-y-3"
                        >
                            <span
                                className="field-label"
                            >
                               Your Message
                            </span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="field-input"
                                placeholder="Hi, I am interested in..."
                            />
                        </label>
                        <button
                            className="field-btn"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                            <img
                                src="/assets/arrow-up.png"
                                alt="send"
                                className="field-btn_arrow"
                            />
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact