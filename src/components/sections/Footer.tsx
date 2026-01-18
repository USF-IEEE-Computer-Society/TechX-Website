export default function Footer() {
  return (
    <div className={'w-full h-auto pb-[3rem] bg-[#101724] flex flex-col items-center'}>
      <div className={'w-[50%] flex justify-center items-center pt-[2rem] gap-[2rem]'}>
        <a href="mailto:akurnikova@usf.edu?subject=Inquiry%20from%20Website" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C9C9C9"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        </a>

        <a href="https://www.instagram.com/ieeecs_usf/?hl=en" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c9c9c9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-instagram-icon lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>

        <a href="https://www.linkedin.com/company/ieee-cs-at-usf/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c9c9c9"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-linkedin-icon lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>

        <a href="https://linktr.ee/ieeecsusf" target="_blank" rel="noopener noreferrer">
          <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Linktree--Streamline-Simple-Icons" height="24" width="24">
            <desc>Linktree Streamline Icon: https://streamlinehq.com </desc>
            <title>Linktree</title>
            <path
              d="m13.73635 5.85251 4.00467 -4.11665 2.3248 2.3808 -4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766 -2.3248 2.3338L12.0005 12.099l-5.74052 5.76852 -2.3248 -2.3248 4.22864 -4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248 -2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z"
              fill="#c9c9c9"
              stroke-width="1"
            ></path>
          </svg>
        </a>
      </div>

      <h2 className={'w-[100%] text-lg text-[#C9C9C9] text-center text-balance mt-[2rem]'}>
        {' '}
        © 2026 TechX Florida. All rights reserved. No commercial use without permission.{' '}
      </h2>
    </div>
  )
}
