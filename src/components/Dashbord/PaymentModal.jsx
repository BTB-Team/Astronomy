import React from 'react'

function PaymentModal() {
  return (
    <div>
      {showPaymentModal && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

    <div className="bg-white w-full max-w-lg p-6 rounded-3xl">

      <h2 className="text-xl font-bold mb-5">
        ثبت پرداخت
      </h2>

      <select className="w-full border p-3 rounded-xl mb-4">
        <option>AtomaPay</option>
        <option>MTN MoMo</option>
      </select>

      <input
        type="text"
        placeholder="شماره تراکنش"
        className="w-full border p-3 rounded-xl mb-4"
      />

      <input
        type="file"
        className="w-full border p-3 rounded-xl mb-4"
      />

      <div className="flex gap-3">

        <button className="bg-green-600 text-purple-700 px-5 py-2 rounded-xl">
          ارسال برای بررسی
        </button>

        <button
          onClick={() => setShowPaymentModal(false)}
          className="border px-5 py-2 rounded-xl"
        >
          بستن
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  )
}

export default PaymentModal