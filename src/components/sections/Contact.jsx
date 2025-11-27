import Swal from "sweetalert2";
import Button from "../ui/Button";
import { FaPaperPlane } from "react-icons/fa6";
import { useRef } from "react";

export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "fcbdad40-c934-4c66-b214-fb77cde36dfc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";

        Swal.fire({
          title: "Sent!",
          text: "Message delivered successfully",
          icon: "success",
          theme: "dark",
        });
        return;
      }

      // If success = false → throw the error message from API
      throw new Error("An unexpected error occurred");
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "error",
        confirmButtonText: "Try Again",
        theme: "dark",
      });
    }
  };

  return (
    <section id="contact" className="p-6">
      <div className="contact__left">
        <h2 className="font-title tracking-wide text-2xl text-text font-[600] mb-6 md:text-3xl">
          Contact
        </h2>
        <p className="font-body mb-4 text-[1rem] text-text/80">
          Feel free to get in touch, I'll try my best to reply.
        </p>

        <form
          className="bg-secondary rounded-sm p-2 flex flex-col gap-4 md:w-[90%] md:m-auto lg:w-[80%] lg:m-0"
          onSubmit={onSubmit}
        >
          <div>
            <input
              className="w-full h-full p-2 border-b-2 border-primary capitalize bg-transparent/15 text-[1rem] text-white outline-none placeholder:opacity-75 placeholder:font-body focus:placeholder:opacity-90 transition"
              type="text"
              name="name"
              ref={nameRef}
              placeholder="Name"
              required
            />
          </div>

          <div>
            <input
              className="w-full h-full p-2 border-b-2 border-primary bg-transparent/15 text-[1rem] text-white outline-none placeholder:opacity-75  placeholder:font-body focus:placeholder:opacity-90 transition"
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Email"
              required
            />
          </div>

          <div>
            <textarea
              className="w-full h-36 p-2 border-b-2 border-primary bg-transparent/15 text-[1rem] text-white outline-none placeholder:opacity-75 placeholder:font-body focus:placeholder:opacity-90 transition md:h-28 lg:h-24"
              type="text"
              name="message"
              ref={messageRef}
              placeholder="Message"
              required
            />
          </div>

          <div>
            <Button type="form">
              Send <FaPaperPlane />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
