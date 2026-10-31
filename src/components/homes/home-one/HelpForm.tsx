import type { FormEvent } from "react";
import { businessContact } from "../../../data/BusinessContact";

const HelpForm = () => {
  const sendWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "New project request",
      "",
      `Name: ${data.get("user_name")}`,
      `Phone: ${data.get("user_phone")}`,
    ].join("\n");

    window.location.assign(`${businessContact.whatsapp}?text=${encodeURIComponent(message)}`);
  };

  return (
    <section
      className="help-form-section section-space-small p-relative"
      style={{ background: `#102370` }}
    >
      <div
        className="bg-shape"
        style={{ backgroundImage: `url(/assets/imgs/shapes/shape-38.png)` }}
      ></div>
      <div className="small-container">
        <div className="row">
          <div className="col-xxl-4 col-xl-4 col-lg-4">
            <div
              className="image-area w-img"
              style={{ width: 735, height: 369 }}
            >
              <img
                src="/assets/imgs/resources/help-form.jpeg"
                alt=""
                width={735}
                height={369}
              />
            </div>
          </div>
          <div className="col-xxl-8 col-xl-8 col-lg-8">
            <div className="help-form-area">
              <h3 className="section-title mb-40 text-white">
                Ready to start next project together? Let's get in touch!
              </h3>
              <div className="inner p-relative">
                <form onSubmit={sendWhatsApp}>
                  <div className="row">
                    <div className="col-lg-4 col-md-12 mb-20">
                      <input type="text" name="user_name" placeholder="Your Name" required />
                    </div>
                    <div className="col-lg-4 col-md-12 mb-20">
                      <input type="tel" name="user_phone" placeholder="Your Phone" required />
                    </div>
                    <div className="col-lg-4 col-md-12">
                      <button type="submit" className="primary-btn-1 btn-hover">
                        Send via WhatsApp
                        <span
                          style={{ top: "147.172px", left: "108.5px" }}
                        ></span>
                      </button>
                    </div>
                  </div>
                  <p className="text-white mt-20">Your details will open in WhatsApp. Press Send there to submit your request.</p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpForm;
