import type { FormEvent } from "react";
import { businessContact } from "../../data/BusinessContact";

const TestimonialForm = () => {
   const sendWhatsApp = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = new FormData(form);
      const location = form.querySelector<HTMLSelectElement>('[name="location"]');
      const message = [
         'New website request',
         '',
         `Name: ${data.get('user_name')}`,
         `Email: ${data.get('user_email')}`,
         `Phone: ${data.get('user_phone')}`,
         `Location: ${location?.selectedOptions[0]?.textContent ?? ''}`,
         `Date: ${data.get('date')}`,
      ].join('\n');

      window.location.assign(`${businessContact.whatsapp}?text=${encodeURIComponent(message)}`);
   };

   return (
      <form onSubmit={sendWhatsApp}>
         <div className="row">
            <div className="col-lg-12">
               <div className="contact__from-input mb-20">
                  <label>Your Name</label>
                  <input type="text" name="user_name" placeholder="Ralph Edwards" required />
               </div>
            </div>
            <div className="col-lg-6">
               <label>Your Email</label>
               <div className="contact__from-input mb-20">
                  <input type="email" name="user_email" placeholder="info@example.com" required />
               </div>
            </div>
            <div className="col-lg-6">
               <label>Your Phone</label>
               <div className="contact__from-input mb-20">
                  <input type="tel" name="user_phone" placeholder="+1253 457 7840" required />
               </div>
            </div>
            <div className="col-lg-6">
               <label>Location</label>
               <div className="contact__select mb-20">
                  <select name="location" defaultValue="" required>
                     <option value="" disabled>Select</option>
                     <option value="2">Location-1</option>
                     <option value="3">Location-2</option>
                     <option value="1">Location-3</option>
                  </select>
               </div>
            </div>
            <div className="col-lg-6">
               <label>Date</label>
               <div className="contact__from-input mb-20">
                  <input type="date" name="date" required />
               </div>
            </div>
            <div className="col-12">
               <div className="testimonials_btn text-center">
                  <p>Your details will open in WhatsApp. Press Send there to submit your request.</p>
                  <button type="submit" className="primary-btn-4 btn-hover">
                     Send via WhatsApp
                     <span style={{ top: "147.172px", left: "108.5px" }}></span>
                  </button>
               </div>
            </div>
         </div>
      </form>
   )
}

export default TestimonialForm
