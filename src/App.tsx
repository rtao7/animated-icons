function App() {
  return (
    <div className="h-full flex flex-col gap-4 py-16">
      <div
        id="header"
        className="flex flex-row items-center justify-between gap-4 pb-4"
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-black">Animated & simple icons</h1>
          <p className="text-xl font-black text-muted-foreground">
            Made with simple shapes.
          </p>
        </div>
        <div className="flex gap-4">
          <div className="border w-fit p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-twitter"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </div>
          <div className="border w-fit p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon />
        <Icon /> <Icon />
        <Icon />
        <Icon />
        <Icon /> <Icon />
        <Icon />
        <Icon />
        <Icon /> <Icon />
        <Icon />
        <Icon />
        <Icon /> <Icon />
        <Icon />
        <Icon />
        <Icon /> <Icon />
        <Icon />
        <Icon />
        <Icon /> <Icon />
        <Icon />
        <Icon />
        <Icon /> <Icon />
        <Icon />
        <Icon />
        <Icon />
      </div>
    </div>
  );
}

export default App;

function Icon() {
  return (
    <div className="flex items-center gap-8">
      <div className="bg-red-50 hover:z-10 rounded-lg transition duration-700 ease-in-out w-fit border border-red-50 group">
        <svg
          width="160"
          height="160"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.1619 19.599C31.5762 18.8815 31.3303 17.9642 30.6129 17.55L26.9756 15.45C26.2582 15.0358 25.3408 15.2815 24.9265 15.999L23.7265 18.0775C23.3123 18.7949 22.3949 19.0407 21.6775 18.6265L19.599 17.4265C18.8816 17.0123 17.9643 17.2581 17.55 17.9756L15.45 21.6129C15.0358 22.3303 15.2816 23.2477 15.999 23.6619L18.0775 24.8619C18.7949 25.2761 19.0408 26.1935 18.6265 26.911L17.4265 28.9894C17.0123 29.7068 17.2582 30.6243 17.9756 31.0385L21.6129 33.1385C22.3303 33.5527 23.2477 33.3068 23.6619 32.5894L24.8619 30.511C25.2762 29.7935 26.1935 29.5477 26.911 29.9619L28.9894 31.1619C29.7068 31.5761 30.6243 31.3303 31.0385 30.6129L33.1385 26.9756C33.5527 26.2581 33.3068 25.3407 32.5894 24.9265L30.511 23.7265C29.7935 23.3123 29.5477 22.3949 29.9619 21.6775L31.1619 19.599Z"
            fill="url(#paint0_linear_92_66)"
            style={{ transformOrigin: "24px 24px" }}
            className="group-hover:scale-50 group-hover:ease-in-out group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:rotate-45 duration-500 transition"
          />
          <path
            d="M32 35C32 33.3431 33.3431 32 35 32C36.6569 32 38 33.3431 38 35C38 36.6568 36.6569 38 35 38C33.3431 38 32 36.6568 32 35Z"
            fill="url(#paint1_linear_92_66)"
            style={{ transformOrigin: "35px 35px" }}
            className="group-hover:scale-[3] duration-500 group-hover:-translate-x-[11px] group-hover:-translate-y-[11px] transition"
          />
          <defs>
            <linearGradient
              id="paint0_linear_92_66"
              x1="36.5885"
              y1="21"
              x2="12"
              y2="27.5885"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFF8FC" />
              <stop offset="0.333333" stop-color="#E2A4C4" />
              <stop offset="0.666667" stop-color="#D5458D" />
              <stop offset="1" stop-color="#7B7B7B" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_92_66"
              x1="33.125"
              y1="14.1876"
              x2="15.1252"
              y2="32.1877"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FFF8FC" />
              <stop offset="0.333333" stop-color="#E2A4C4" />
              <stop offset="0.666667" stop-color="#D5458D" />
              <stop offset="1" stop-color="#7B7B7B" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// function Download() {
//   return (
//     <div>
//       <button className="focus-visible:outline-sky-50 m-auto flex items-center w-[180px] gap-2 text-sm px-4 py-4 bg-white border-1 border-black/10">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="20"
//           height="20"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           stroke-width="2"
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           class="lucide lucide-file-down"
//         >
//           <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
//           <path d="M14 2v4a2 2 0 0 0 2 2h4" />
//           <path d="M12 18v-6" />
//           <path d="m9 15 3 3 3-3" />
//         </svg>
//         SVG
//       </button>
//     </div>
//   );
// }
