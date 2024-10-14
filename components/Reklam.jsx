import React from 'react';

const Reklam = () => {
  return (
    <div className="relative font-roboto overflow-hidden pt-16 pb-32 space-y-24">
      <div className="relative lg:max-w-7xl lg:grid lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-12 lg:px-8 mx-auto">
        <div className="max-w-xl px-6 lg:py-16 lg:px-0">
          <div className="flex items-center justify-center rounded-xl bg-pink-500 h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 mt-4">
            Yüksək Sürətli İnternet:
          </h2>
          <p className="mt-2 text-gray-800">
          Birnet fiber optik infrastrukturu ilə sürətli və fasiləsiz internet xidməti təklif edir. Həmişə onlayn qalın!
          </p>
          <div className="mt-4">
            <a
              className="uppercase py-2 px-3 sm:px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-sm sm:text-md mr-4 hover:bg-pink-400"
              href="/internet"
            >
              Qoşul
            </a>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <img
            loading="lazy"
            width="647"
            height="486"
            className="w-full rounded-xl shadow-lg ring-1 ring-black ring-opacity-5"
            src="https://images.unsplash.com/photo-1569144157591-c60f3f82f137"
            alt="İnternet"
          />
        </div>
      </div>

      <div className="relative lg:max-w-7xl lg:grid lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-12 lg:px-8 mx-auto">
        <div className="max-w-xl px-6 lg:py-16 lg:px-0 lg:col-start-2">
          <div className="flex items-center justify-center rounded-xl bg-pink-500 h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 mt-4">
            TV:
          </h2>
          <p className="mt-2 text-gray-800">
          Birnet TV sevimli kanallarınızı yüksək dəqiqliklə izləmək zövqünü təqdim edir. Filmləri, serialları və idman kanallarını qaçırmayın!
          </p>
          <div className="mt-4">
            <a
              className="uppercase py-2 px-3 sm:px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-sm sm:text-md mr-4 hover:bg-pink-400"
              href="/tv"
            >
              Qoşul
            </a>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <img
            alt="TV"
            loading="lazy"
            width="647"
            height="486"
            className="w-full rounded-xl shadow-lg ring-1 ring-black ring-opacity-5"
            src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
          />
        </div>
      </div>

      <div className="relative lg:max-w-7xl lg:grid lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-12 lg:px-8 mx-auto">
        <div className="max-w-xl px-6 lg:py-16 lg:px-0">
          <div className="flex items-center justify-center rounded-xl bg-pink-500 h-12 w-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-gray-800 mt-4">
          Korporativ Həllər
          </h2>
          <p className="mt-2 text-gray-800">
          Birnet Telecom şirkətinizin bütün rabitə və internet ehtiyaclarına uyğun həllər təklif edir. Biznesinizi inkişaf etdirmək üçün bizimlə əlaqə saxlayın.
          </p>
          <div className="mt-4">
            <a
              className="uppercase py-2 px-3 sm:px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-sm sm:text-md mr-4 hover:bg-pink-400"
              href="/corporate"
            >
              Qoşul
            </a>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <img
            alt="Kurumsal"
            loading="lazy"
            width="647"
            height="486"
            className="w-full rounded-xl shadow-lg ring-1 ring-black ring-opacity-5"
            src="https://images.unsplash.com/photo-1722316805351-d5a56965f926?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </div>
  );
};

export default Reklam;
