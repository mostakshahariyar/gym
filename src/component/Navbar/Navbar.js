import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../img/logo/gym logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Example() {

  // use firebase
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const handelSignUp = () =>{
    navigate('/signup')
  }

  const currentLocation = window.location.pathname;
  const [navigation, setNavigation] = useState([
    { name: 'Home', href: '/home' },
    { name: 'Course', href: '/course' },
    { name: 'Service', href: '/service' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]);
  const handleItemClick = (item) => {
    // // Update the clicked item
    const updatedNavigation = navigation.map((item, i) =>
      i === item ? { ...item } : { ...item });

    setNavigation(updatedNavigation);
  };
  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* image and nav text */}
              <div className="flex flex-auto justify-center sm:items-center sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/home">
                    <img
                      className="h-[5rem] w-auto"
                      src={logo}
                      alt="Strong Body"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => handleItemClick()}
                        className={classNames(
                          (item.href === currentLocation) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/* button */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      {user.email && user?.photoURL ? <img className='w-8 h-8 rounded-full' src={user?.photoURL} /> : user.email && !user?.photoURL ? <i className="fa-regular fa-user h-6 w-6 flex justify-center items-center text-white"></i> : <button onClick={handelSignUp}  className="pointer text-sm font-medium text-gray-800 bg-gray-300 rounded  px-3 py-2 mx-2">Sign up</button>
                      }

                    </Menu.Button>
                  </div>
                 {user.email ?  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/profile"
                            className={classNames(active ? 'bg-gray-100 text-center' : '', 'block px-4 py-2 text-sm text-gray-700 text-center')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                          onClick={logOut}
                            className={classNames(active ? 'bg-gray-100 w-full' : '', 'block px-4 py-2 text-sm text-gray-700 w-full')}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition> : <span></span>}
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    (item.href === currentLocation) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <Link
                    to={item.href}
                    onClick={() => handleItemClick()}
                  >
                    {item.name}
                  </Link>

                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
};
