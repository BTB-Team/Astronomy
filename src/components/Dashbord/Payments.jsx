import React from 'react'

function Payments() {
  return (
    <div>{activeTab === "payments" && (

  <div className="space-y-6">

    <div className="bg-red-50 border border-red-200 p-6 rounded-2xl">

      <h2 className="font-bold text-red-700">
        وضعیت پرداخت
      </h2>

      <p className="mt-2">
        مبلغ: 1000 AFN
      </p>

      <p>
        وضعیت: در انتظار پرداخت
      </p>

      <button
        onClick={() => setShowPaymentModal(true)}
        className="mt-4 bg-red-600 text-purple-700 px-5 py-2 rounded-xl"
      >
        پرداخت اکنون
      </button>

    </div>

  </div>

)}</div>
  )
}

export default Payments