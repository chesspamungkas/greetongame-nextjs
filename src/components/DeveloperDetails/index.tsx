import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { Developer } from '@/types'
import closeIcon from '../../assets/icons/close.png'

interface DeveloperDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  developer: Developer;
}

const DeveloperDetails = ({ isOpen, closeModal, developer }: DeveloperDetailsProps) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as='div' className='relative z-10' onClose={closeModal}>
      <Transition.Child
        as={Fragment}
        enter='ease-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in duration-200'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <div className='fixed inset-0 bg-black bg-opacity-25' />
      </Transition.Child>

      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-out duration-300'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Dialog.Panel className='relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-gradient-to-r from-rose-100 to-teal-100 p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
              <button
                type='button'
                className='absolute top-5 right-5 z-10 w-fit bg-primary-blue-100 rounded-full'
                onClick={closeModal}
              >
                <Image
                  src={closeIcon}
                  alt='close'
                  width={30}
                  height={30}
                />
              </button>

              <div className="flex-1 flex flex-col gap-2">
                <h2 className='font-semibold text-xl capitalize'>
                  {developer.title}
                </h2>

                <div className='mt-3 flex flex-wrap gap-2'>
                  {Object.entries(developer).map(([key, value]) => (
                    <div className='flex justify-between gap-3 w-full' key={key} >
                      <h4 className='text-black-100 font-semibold capitalize text-sm'>
                        {key.split("_").join(" ")}
                      </h4>
                      <p className='text-grey font-semibold text-right text-sm text-ellipsis overflow-hidden'>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

export default DeveloperDetails;