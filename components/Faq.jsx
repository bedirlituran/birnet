"use client";
import React, { useState } from "react";

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFaq(openFaq === index ? null : index); // Eğer aynı FAQ açılmışsa kapat, değilse aç
  };

  return (
    <div>
      <div className="py-24 px-8 w-full mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-center basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">Saul-cavab!</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            BirNet-e tez-tez
            <br /> <span>ünvanlanan suallar!</span>
          </p>
        </div>
        <ul className="basis-1/2">
          {/* FAQ Item 1 */}
          <li>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
              aria-expanded={openFaq === 1}
              onClick={() => toggleFAQ(1)}
            >
              <span className="flex-1 text-base-content">Birnet istifadəçisi olmaq üçün nə etməliyəm?</span>
              <svg
                className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition-transform ${
                  openFaq === 1 ? "rotate-90" : ""
                }`}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="7" width="16" height="2" rx="1"></rect>
                <rect y="7" width="16" height="2" rx="1" className="rotate-90"></rect>
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openFaq === 1 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{ transition: "max-height 0.3s ease-in-out 0s, opacity 0.3s ease-in-out" }}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">
                  Bunun üçün sadəcə sağ alt küncdə WHATSAPP iconuna toxunmaq kifayət edər.
                </div>
              </div>
            </div>
          </li>

          {/* FAQ Item 2 */}
          <li>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
              aria-expanded={openFaq === 2}
              onClick={() => toggleFAQ(2)}
            >
              <span className="flex-1 text-base-content">Aylıq xidmət haqqını necə ödəyə bilərəm?</span>
              <svg
                className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition-transform ${
                  openFaq === 2 ? "rotate-90" : ""
                }`}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="7" width="16" height="2" rx="1"></rect>
                <rect y="7" width="16" height="2" rx="1" className="rotate-90"></rect>
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openFaq === 2 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{ transition: "max-height 0.3s ease-in-out 0s, opacity 0.3s ease-in-out" }}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">
                  Xidmət haqqını sizə rahat olan üsulla ödəmək mümkündür: saytımız vasitəsilə onlayn ödəniş; ödəmə terminalları vasitəsilə ödəniş; bank mobil tətbiqləri ilə ödəniş; onlayn ödəniş saytları ilə.
                </div>
              </div>
            </div>
          </li>

          {/* FAQ Item 3 */}
          <li>
            <button
              className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
              aria-expanded={openFaq === 3}
              onClick={() => toggleFAQ(3)}
            >
              <span className="flex-1 text-base-content">Qoşulma edilən zaman hansisa avadanlıq almalıyam?</span>
              <svg
                className={`flex-shrink-0 w-4 h-4 ml-auto fill-current transform transition-transform ${
                  openFaq === 3 ? "rotate-90" : ""
                }`}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="7" width="16" height="2" rx="1"></rect>
                <rect y="7" width="16" height="2" rx="1" className="rotate-90"></rect>
              </svg>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openFaq === 3 ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
              style={{ transition: "max-height 0.3s ease-in-out 0s, opacity 0.3s ease-in-out" }}
            >
              <div className="pb-5 leading-relaxed">
                <div className="space-y-2 leading-relaxed">
                  Router pulsuz verilir.Tv üçün isə əgər Televizorunuz smartdırsa vəya andoroid tv boxunuz varsa xeyir.
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Faq;
