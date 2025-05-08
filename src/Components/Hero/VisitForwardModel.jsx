import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function VisitFormModal({ isOpen, setIsOpen }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
          leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
              leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all backdrop-blur-lg">
    <Dialog.Title className="text-xl font-bold text-gray-800 mb-2">
      Discover Your Dream Home in the Heart of Dubai
    </Dialog.Title>
                <p className="text-sm text-gray-600 mb-6">
                  Luxurious Apartments, Townhouses & Villas, Starting from 3 Crore – Where Comfort Meets Elegance
                </p>

                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="+91"
                      className="w-1/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-2/3 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
                    />
                  </div>
                  <textarea
                    placeholder="Leave a message..."
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#C0A062]"
                    rows={4}
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#C0A062] text-black font-semibold py-2 rounded-md hover:bg-black hover:text-white transition"
                  >
                    Submit
                  </button>
                </form>

                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-3 right-4 text-gray-400 hover:text-gold text-6xl cursor-pointer"
                >
                  &times;
                </button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
