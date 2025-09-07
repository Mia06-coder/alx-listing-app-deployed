import type { BookingFormData } from "@/types/booking";

type BookingFormProps = {
  formData: BookingFormData;
  setFormData: React.Dispatch<React.SetStateAction<BookingFormData>>;
};

const BookingForm = ({ formData, setFormData }: BookingFormProps) => (
  <>
    {/* Contact Information */}
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label>First Name</label>
        <input
          type="text"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          className="border p-2 w-full mt-2"
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          className="border p-2 w-full mt-2"
        />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div>
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="border p-2 w-full mt-2"
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          value={formData.phoneNumber}
          onChange={(e) =>
            setFormData({ ...formData, phoneNumber: e.target.value })
          }
          className="border p-2 w-full mt-2"
        />
      </div>
    </div>

    {/* Payment Information */}
    <h2 className="text-xl font-semibold mt-6">Pay with</h2>
    <div className="mt-4">
      <label>Card Number</label>
      <input
        type="text"
        value={formData.cardNumber}
        onChange={(e) =>
          setFormData({ ...formData, cardNumber: e.target.value })
        }
        className="border p-2 w-full mt-2"
      />
    </div>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div>
        <label>Expiration Date</label>
        <input
          type="date"
          value={formData.expirationDate}
          onChange={(e) =>
            setFormData({ ...formData, expirationDate: e.target.value })
          }
          className="border p-2 w-full mt-2"
        />
      </div>
      <div>
        <label>CVV</label>
        <input
          type="text"
          value={formData.cvv}
          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
          className="border p-2 w-full mt-2"
        />
      </div>
    </div>

    {/* Billing Address */}
    <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
    <div className="mt-4">
      <label>Street Address</label>
      <input
        type="text"
        value={formData.streetAdress}
        onChange={(e) =>
          setFormData({ ...formData, streetAdress: e.target.value })
        }
        className="border p-2 w-full mt-2"
      />
    </div>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div>
        <label>City</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          className="border p-2 w-full mt-2"
        />
      </div>
      <div>
        <label>State</label>
        <input
          type="text"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          className="border p-2 w-full mt-2"
        />
      </div>
    </div>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div>
        <label>Zip Code</label>
        <input
          type="text"
          value={formData.zipCode}
          onChange={(e) =>
            setFormData({ ...formData, zipCode: e.target.value })
          }
          className="border p-2 w-full mt-2"
        />
      </div>
      <div>
        <label>Country</label>
        <input
          type="text"
          value={formData.country}
          onChange={(e) =>
            setFormData({ ...formData, country: e.target.value })
          }
          className="border p-2 w-full mt-2"
        />
      </div>
    </div>
  </>
);

export default BookingForm;
