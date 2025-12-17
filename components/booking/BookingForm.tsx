const BookingForm = () => (
  <div className="bg-white p-6 shadow-md rounded-lg">
    <h2 className="text-xl font-bold text-black">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="font-bold text-black">First Name</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label className="font-bold text-black">Last Name</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="font-bold text-black">Email</label>
          <input type="email" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label className="font-bold text-black">Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-bold text-black mt-6">Pay with</h2>
      <div className="mt-4">
        <label className="font-bold text-black">Card Number</label>
        <input type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="font-bold text-black">Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label className="font-bold text-black">CVV</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-bold text-black mt-6">Billing Address</h2>
      <div className="mt-4">
        <label className="font-bold text-black">Street Address</label>
        <input type="text" className="border p-2 w-full mt-2" />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="font-bold text-black">City</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label className="font-bold text-black">State</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label className="font-bold text-black">Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
        <div>
          <label className="font-bold text-black">Country</label>
          <input type="text" className="border p-2 w-full mt-2" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;