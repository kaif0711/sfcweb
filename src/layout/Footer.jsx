import { IoIosMail } from "react-icons/io";
import Button from "../components/ui/Button";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-400">
      <div className="max-w-7xl mx-auto px-6 pt-15">
        {/* NEWSLETTER */}
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex flex-col md:flex-row justify-between border-gray-700 pb-10 mb-20 gap-6">
            
            {/* TEXT */}
            <div className="text-center md:text-left">
              <p className="text-white">
                Don't miss any updates! Subscribe to our newsletter for
              </p>
              <p className="text-white">
                special offers, artist reveals, and early ticket access.
              </p>
            </div>

            {/* INPUT + BUTTON */}
            <div className="flex flex-col sm:flex-row items-center gap-4 relative w-full md:w-auto">
              
              {/* INPUT WRAPPER FOR ICON */}
              <div className="relative w-full sm:w-80">
                <input
                  className="bg-[#111111] w-full pl-10 pr-4 text-white py-3 placeholder-gray-500 outline-none border-b-2 border-gray-700"
                  placeholder="Email Address"
                />
                <IoIosMail className="absolute top-1/2 -translate-y-1/2 left-3 text-xl text-yellow-400" />
              </div>

              {/* BUTTON */}
              <Button
                text="Subscribe"
                extraClasses="sm:w-auto"
                radius="rounded-tl-xl rounded-br-xl"
              />
            </div>
          </div>
        </div>

        {/* LINKS */}
        <div className="flex flex-col md:flex-row justify-between gap-10 text-sm px-2">
          
          {/* COLUMN 1 */}
          <div>
            <p className="text-white font-bold mb-3">Solar Fight Club</p>
            <ul className="space-y-2 text-gray-300">
              <li>Home</li>
              <li>Events</li>
              <li>Tickets</li>
              <li>Gallery</li>
              <li>Non-Profit</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <p className="text-white font-bold mb-3">JOIN THE COMMUNITY</p>
            <ul className="space-y-2 text-gray-300">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>YouTube</li>
              <li>Twitter</li>
              <li>TikTok</li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="md:w-1/3">
            <p className="text-white font-bold mb-3">CONTACT</p>
            <ul className="space-y-2 text-gray-300">
              <li>123 Event Street, New York</li>
              <li>contact@sfc-events.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 py-6 mt-10 flex flex-col md:flex-row items-center justify-between text-xs gap-4 text-gray-400">
          
          <div className="text-center md:text-left">
            © 2025 Solar Fight Club. All rights reserved.
          </div>

          <ul className="flex gap-6 md:gap-10 text-center md:text-left">
            <li>Terms of use</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
