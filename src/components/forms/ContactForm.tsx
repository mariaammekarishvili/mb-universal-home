import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { businessContact } from "../../data/BusinessContact";

interface FormData {
   user_name: string;
   user_email: string;
   subject: string;
   user_phone: string;
   message: string;
}

const schema = yup
   .object({
      user_name: yup.string().required().label("Name"),
      user_email: yup.string().required().email().label("Email"),
      subject: yup.string().required().label("Subject"),
      user_phone: yup.string()
         .required('Phone number is required')
         .test('phone-length', 'Enter a valid phone number', (value) => {
            const digits = value?.replace(/\D/g, '').length ?? 0;
            return digits >= 7 && digits <= 15;
         }),
      message: yup.string().required().label("Message"),
   })
   .required();

const ContactForm = () => {

   const { register, handleSubmit, formState: { errors, isSubmitting }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const sendEmail = (data: FormData) => {
      const subject = `Website inquiry: ${data.subject}`;
      const body = [
         `Name: ${data.user_name}`,
         `Email: ${data.user_email}`,
         `Phone: ${data.user_phone}`,
         `Subject: ${data.subject}`,
         '',
         data.message,
      ].join('\n');

      window.location.assign(`${businessContact.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
   };

   return (
      <form onSubmit={handleSubmit(sendEmail)}>
         <div className="row">
            <div className="col-lg-6">
               <label>Your Name*</label>
               <input type="text" {...register("user_name")} placeholder="Your Name*" />
               <p className="form_error">{errors.user_name?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>Your Email*</label>
               <input type="email" {...register("user_email")} placeholder="Your Email*" />
               <p className="form_error">{errors.user_email?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>Your Phone*</label>
               <input type="tel" {...register("user_phone")} placeholder="Your Phone*" />
               <p className="form_error">{errors.user_phone?.message}</p>
            </div>
            <div className="col-lg-6">
               <label>Subject*</label>
               <input type="text" {...register("subject")} placeholder="Subject"  />
               <p className="form_error">{errors.subject?.message}</p>
            </div>
            <div className="col-lg-12">
               <label>Your Message*</label>
               <textarea {...register("message")} placeholder="Write Message"></textarea>
               <p className="form_error">{errors.message?.message}</p>
            </div>
            <div className="col-lg-12">
               <p>Your details will open in your email app. Press Send there to submit your inquiry.</p>
               <button type="submit" className="primary-btn-1 btn-hover" disabled={isSubmitting}>
                  {isSubmitting ? "Opening email..." : "Send via Email"} &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </button>
            </div>
         </div>
      </form>
   )
}

export default ContactForm
