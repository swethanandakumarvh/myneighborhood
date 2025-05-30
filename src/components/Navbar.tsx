import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Businesses', href: '/businesses' },
  { name: 'Events', href: '/events' },
  { name: 'Complaints', href: '/complaints' },
  { name: 'Announcements', href: '/announcements' },
  { name: "Ladies' Corner", href: '/ladies-corner' },
  { name: 'Help Threads', href: '/help-threads' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="fixed w-full z-50 glass-effect">
      {({ open }) => (
        <>
          <div className="max-w-[1400px] mx-auto px-6">
            <div className="flex h-16 justify-between items-center">
              <div className="flex items-center gap-12">
                <Link to="/" className="flex-shrink-0">
                  <span className="text-2xl font-bold text-gradient">
                    ReBuild
                  </span>
                </Link>
                <div className="hidden lg:flex lg:gap-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm font-medium text-gray-300 hover:text-primary-400 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex lg:items-center lg:gap-6">
                <button
                  type="button"
                  className="rounded-full p-2 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                <Menu as="div" className="relative">
                  <Menu.Button className="flex rounded-full ring-2 ring-primary-400/20 transition-all hover:ring-primary-400/40">
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
                      alt=""
                    />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-dark-700 py-1 shadow-lg ring-1 ring-white/10">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-dark-600' : '',
                              'block px-4 py-2 text-sm text-gray-200'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-dark-600' : '',
                              'block px-4 py-2 text-sm text-gray-200'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-dark-600' : '',
                              'block px-4 py-2 text-sm text-gray-200'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-dark-700 hover:text-primary-400">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:bg-dark-700 hover:text-primary-400 rounded-lg"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}