import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

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

   const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm<FormData>({ resolver: yupResolver(schema), });

   const form = useRef<HTMLFormElement>(null);

   const sendEmail = async () => {
      if (!form.current) {
         toast.error('Contact form is unavailable. Please email mbuniversalhome@gmail.com.');
         return;
      }

      try {
         await emailjs.sendForm('service_6y6yqwk', 'template_l7vv1mg',
            form.current, '0Nl20_gGiZ8xlkEt9');
         toast.success('Message submitted successfully');
         reset();
      } catch (error) {
         console.error('Contact form submission failed:', error);
         toast.error('Message could not be sent. Please email mbuniversalhome@gmail.com.');
      }
   };

   return (
      <form ref={form} onSubmit={handleSubmit(sendEmail)}>
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
               <button type="submit" className="primary-btn-1 btn-hover" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Now"} &nbsp; | <i className="icon-right-arrow"></i>
                  <span style={{ top: "147.172px", left: "108.5px" }}></span>
               </button>
            </div>
         </div>
      </form>
   )
}

export default ContactForm
