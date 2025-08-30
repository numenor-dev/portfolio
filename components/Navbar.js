import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import userData from "@constants/data";

export default function Navbar() {
  const router = useRouter();
  console.log(router.asPath);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  }

  console.log("Theme: ", theme);

  return (
    <div className="lg:max-w-6xl lg:mx-auto px-4 pt-20">
      <div className="flex flex-row justify-between">
        <div className="flex flow-col items-center">
          <Link href="/">
            <div className="hidden lg:block cursor-pointer hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>

          </Link>
        </div>

        <div className="hidden lg:block lg:flex lg:flex-row lg:space-x-8">
          <Link
            href="/about"
            className={`text-base ${router.asPath === "/about"
              ? "text-gray-800 font-bold dark:text-gray-400"
              : "text-gray-600 dark:text-gray-300 font-normal"
              }`}
          >
            <h2 className="hover:translate-x-1 transition duration-300">About</h2>
            {router.asPath === "/about" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </Link>
          <Link
            href="/projects"
            className={`text-base  ${router.asPath === "/projects"
              ? "text-gray-800 font-bold dark:text-gray-400"
              : "text-gray-600 dark:text-gray-300 font-normal"
              }`}
          >
            <h2 className="hover:translate-x-1 transition duration-300">Projects</h2>
            {router.asPath === "/projects" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </Link>
          <Link
            href="/experience"
            className={`text-base ${router.asPath === "/experience"
              ? "text-gray-800 font-bold dark:text-gray-400"
              : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
          >
            <h2 className="hover:translate-x-1 transition duration-300">Experience</h2>
            {router.asPath === "/experience" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </Link>
          <Link
            href="/contact"
            className={`text-base  ${router.asPath === "/contact"
              ? "text-gray-800 font-bold dark:text-gray-400"
              : "text-gray-600 dark:text-gray-300 font-normal "
              }`}
          >
            <h2 className="hover:translate-x-1 transition duration-300">Contact</h2>
            {router.asPath === "/contact" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-down inline-block h-3 w-3"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                />
              </svg>
            )}
          </Link>
        </div>

        <div className="space-x-2 flex flex-row items-center">
          <Link href={userData.socialLinks.github}
            className="h-16 w-16 lg:h-10 lg:w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github h-10 w-10 lg:h-5 lg:w-5"
              viewBox="0 0 100 100"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
            </svg>
          </Link>
          <Link
            href={userData.socialLinks.linkedin}
            className="h-16 w-16 lg:h-10 lg:w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-linkedin h-10 w-10 lg:h-5 lg:w-5"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </Link>
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="h-14 w-14 lg:h-10 lg:w-10 p-1 lg:p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-12 h-12 lg:w-4 lg:h-4 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="-mt-16 lg:-mt-8 lg:hidden">
        <button
          onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="0.7" stroke="currentColor" className="w-20 h-20 -mt-2 lg:mt-0 lg:w-6 lg:h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              className={toggle ? 'hidden' : 'block'}
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"
              className={toggle ? 'block' : 'hidden'}
            />
          </svg>
        </button>

        {/* Mobile menu toggle */}
        <div className={toggle ?
          'relative flex flex-col space-y-12 mt-5 w-40 transform transition-transform translate-x-10 duration-1000' : ''}
        >
          <Link
            href="/"
            className={toggle ?
              'text-2xl transition-opacity opacity-80 duration-300 hover:text-sky-700 hover:dark:text-slate-400'
              : 'transition-opacity opacity-0 duration-0'}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={
              toggle ?
                'text-2xl transition-opacity opacity-80 duration-500 hover:text-sky-700 hover:dark:text-slate-400'
                : 'transition-opacity opacity-0 duration-0'
            }
          >
            About
          </Link>
          <Link
            href="/projects"
            className={
              toggle ?
                'text-2xl transition-opacity opacity-80 duration-700 hover:text-sky-700 hover:dark:text-slate-400'
                : 'transition-opacity opacity-0 duration-0'
            }
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className={
              toggle ?
                'text-2xl transition-opacity opacity-80 duration-1000 hover:text-sky-700 hover:dark:text-slate-400'
                : 'transition-opacity opacity-0 duration-0'
            }
          >
            Experience
          </Link>
          <Link
            href="/contact"
            className={
              toggle ?
                'text-2xl transition-opacity opacity-80 duration-1000 hover:text-sky-700 hover:dark:text-slate-400'
                : 'transition-opacity opacity-0 duration-0'
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </div >
  );
}