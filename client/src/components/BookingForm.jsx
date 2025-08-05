import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookingForm() {
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    contactInfo: { name: "", email: "", phone: "" },
  });
  const [errors, setErrors] = useState({});
  const form = useRef();

  const validateForm = () => {
    const newErrors = {};
    if (!formData.service) newErrors.service = "Service is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.time) newErrors.time = "Time is required";
    if (!formData.contactInfo.name) newErrors.name = "Name is required";
    if (
      !formData.contactInfo.email ||
      !/\S+@\S+\.\S+/.test(formData.contactInfo.email)
    )
      newErrors.email = "Valid email is required";
    if (!formData.contactInfo.phone) newErrors.phone = "Phone is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await emailjs.sendForm(
        "service_yuk9rgs",
        "template_v6gn2g7",
        form.current,
        "wJvTC3Wn0sZTvvsFC"
      );
      toast.success("Booking submitted successfully!");
      setFormData({
        service: "",
        date: "",
        time: "",
        contactInfo: { name: "", email: "", phone: "" },
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Error submitting booking");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("contactInfo.")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        contactInfo: { ...formData.contactInfo, [field]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    setErrors({ ...errors, [name.split(".")[1] || name]: "" });
  };

  return (
    <>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-8 p-8 bg-gradient-to-tr from-pink-500 via-purple-600 to-pink-500 dark:from-purple-900 dark:via-pink-800 dark:to-purple-900 rounded-3xl shadow-2xl backdrop-blur-xl border border-pink-400/30 dark:border-purple-700/80"
      >
        <h2 className="text-center text-4xl font-extrabold text-white mb-6 drop-shadow-lg tracking-wide">
          Book Your Appointment
        </h2>

        {/* Custom Select Service */}
        <div>
          <label className="block mb-1 text-sm font-medium text-white">
            Select Service
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg dark:bg-gray-900 bg-white text-black dark:text-white focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select Service</option>

            <optgroup label="💇‍♂ Hair Services">
              <option value="Classic Haircut">Classic Haircut</option>
              <option value="Beard Styling">Beard Styling</option>
              <option value="Hair Coloring (Global & Highlights)">
                Hair Coloring (Global & Highlights)
              </option>
              <option value="Hair Smoothening">Hair Smoothening</option>
              <option value="Keratin Treatment">Keratin Treatment</option>
              <option value="Head Massage (Oil Based)">
                Head Massage (Oil Based)
              </option>
              <option value="Hair Spa">Hair Spa</option>
              <option value="Kids Haircut">Kids Haircut</option>
              <option value="Mullet Cut">Mullet Cut</option>
              <option value="Fade Cut">Fade Cut</option>
            </optgroup>

            <optgroup label="💆‍♀ Skin & Facial Services">
              <option value="Fruit Facial">Fruit Facial</option>
              <option value="Gold Facial">Gold Facial</option>
              <option value="Diamond Facial">Diamond Facial</option>
              <option value="Detan Pack">Detan Pack</option>
              <option value="Cleanup (Normal to Oily Skin)">
                Cleanup (Normal to Oily Skin)
              </option>
              <option value="Anti-Acne Treatment">Anti-Acne Treatment</option>
              <option value="Bridal Glow Facial">Bridal Glow Facial</option>
              <option value="Skin Polishing">Skin Polishing</option>
              <option value="Skin Brightening Facial">
                Skin Brightening Facial
              </option>
              <option value="Anti-Aging Facial">Anti-Aging Facial</option>
            </optgroup>

            <optgroup label="💅 Grooming & Other Services">
              <option value="Threading (Eyebrow, Upper Lip)">
                Threading (Eyebrow, Upper Lip)
              </option>
              <option value="Waxing (Full Arm, Half Leg, Underarm)">
                Waxing (Full Arm, Half Leg, Underarm)
              </option>
              <option value="Manicure">Manicure</option>
              <option value="Pedicure">Pedicure</option>
              <option value="Bleach (Face / Neck)">Bleach (Face / Neck)</option>
              <option value="Mehendi Design (Hand/Bridal)">
                Mehendi Design (Hand/Bridal)
              </option>
              <option value="Body Polishing">Body Polishing</option>
              <option value="Back Massage">Back Massage</option>
              <option value="Nail Art (Basic)">Nail Art (Basic)</option>
              <option value="Makeup (Party / Bridal)">
                Makeup (Party / Bridal)
              </option>
            </optgroup>

            <optgroup label="👰 Bridal / Groom Packages">
              <option value="Full Bridal Package (Makeup, Hairstyle, Saree Draping)">
                Full Bridal Package (Makeup, Hairstyle, Saree Draping)
              </option>
              <option value="Groom Makeover (Facial + Haircut + Beard)">
                Groom Makeover (Facial + Haircut + Beard)
              </option>
              <option value="Engagement Look">Engagement Look</option>
              <option value="Haldi + Mehendi Makeup">
                Haldi + Mehendi Makeup
              </option>
              <option value="Reception Look">Reception Look</option>
            </optgroup>

            <optgroup label="🚿 Hair Wash & Treatments">
              <option value="Shampoo + Conditioner">
                Shampoo + Conditioner
              </option>
              <option value="Anti-Dandruff Treatment">
                Anti-Dandruff Treatment
              </option>
              <option value="Hair Fall Control Treatment">
                Hair Fall Control Treatment
              </option>
              <option value="Scalp Detox">Scalp Detox</option>
              <option value="Split End Repair">Split End Repair</option>
            </optgroup>
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm mt-1">{errors.service}</p>
          )}
        </div>

        {/* Date, Time & Contact Fields */}
        {[
          {
            label: "Select Date",
            name: "date",
            type: "date",
            errorKey: "date",
          },
          {
            label: "Select Time",
            name: "time",
            type: "time",
            errorKey: "time",
          },
          {
            label: "Full Name",
            name: "contactInfo.name",
            type: "text",
            errorKey: "name",
            placeholder: "John Doe",
          },
          {
            label: "Email Address",
            name: "contactInfo.email",
            type: "email",
            errorKey: "email",
            placeholder: "you@example.com",
          },
          {
            label: "Phone Number",
            name: "contactInfo.phone",
            type: "tel",
            errorKey: "phone",
            placeholder: "9876543210",
          },
        ].map(({ label, name, type, errorKey, placeholder }) => (
          <div key={name} className="flex flex-col">
            <label className="mb-2 text-white font-semibold text-lg drop-shadow-md">
              {label}
            </label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={
                formData[name.includes(".") ? name.split(".")[1] : name] || ""
              }
              onChange={handleChange}
              className={`p-4 rounded-xl outline-none focus:ring-4 transition duration-300 bg-white/80 dark:bg-gray-900/80 border ${
                errors[errorKey]
                  ? "border-red-500 focus:ring-red-400"
                  : "border-transparent focus:ring-yellow-400"
              } text-gray-900 dark:text-white`}
            />
            {errors[errorKey] && (
              <p className="mt-1 text-red-500 font-medium drop-shadow-md">
                {errors[errorKey]}
              </p>
            )}
          </div>
        ))}

       <button
  type="submit"
  className="w-full py-4 rounded-full bg-gradient-to-r from-pink-600 via-purple-700 to-pink-600 text-white font-extrabold shadow-lg hover:shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-70 active:scale-95"
>
  Submit Booking
</button>

      </form>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
      />
    </>
  );
}

export default BookingForm;
