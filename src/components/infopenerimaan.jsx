import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ArrowPathIcon, FingerPrintIcon } from '@heroicons/react/24/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const navigation = [
  { name: 'Cybersecurity Bootcamp', href: '/course', current: false },
  { name: 'Cloud Bootcamp', href: '/coursecloud', current: false },
  { name: 'Course Sertifikasi', href: '/coursesertif', current: false },
  { name: 'Sertifikasi Internasional', href: '/global', current: false },
  { name: 'Info Penerimaan', href: '/infopenerimaan', current: true },
  { name: 'Job Connect', href: '/job', current: false },
  { name: 'Merch', href: '/merchandise', current: false },
]

const userNavigation = [

  { name: 'Your Profile', href: '/profile' },
  { name: 'EXP', href: '/xp' },
  { name: 'Settings', href: '/setting' },
  { name: 'Sign out', href: '/' },
]

const features = [
  {
    name: 'Tahap Peratama Pendaftaran',
    description: 'Daftar program pelatihan Pijar Campdisini. Setelah itu kamu akan tergabung ke grup Telegram Pijar Camp untuk diberikan soal seleksi yang wajib dikerjakan dalam waktu yang ditentukan.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Tahap Kedua Seleksi dan Pembayaran',
    description: 'Tim Pijar Camp akan memeriksa jawaban soal seleksi dan syarat awal administrasi yang telah kamu berikan. Kamu juga diperkenankan untuk bertanya lebih lanjut mengenai program bootcamp. Jika lulus seleksi, Tim Pijar Camp akan menghubungi kamu untuk melanjutkan ke proses pembayaran dan memberikan informasi terkait prosedur pembayaran.',
    icon: LockClosedIcon,
  },
  {
    name: 'Tahap Ketiga Pelatihan Hard Skill & Soft Skill',
    description: 'Setelah menyetujui syarat dan ketentuan dari Pijar Camp, kamu akan mengikuti pelatihan sesuai dengan waktu dan kurikulum yang telah ditentukan. Selain itu, kamu juga akan mendapatkan kelas persiapan untuk memasuki dunia kerja.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Tahap Keempat Penyelesaian dan Sertifikasi',
    description: 'Setelah menyelesaikan pelatihan, kamu akan mengerjakan post test untuk menilai kemampuanmu, menyusun CV, dan membuat portofolio. Nantinya di akhir bootcamp kamu akan mendapatkan sertifikat dari Pijar Camp. Jika kamu mampu mendapatkan nilai diatas 75 atau B, kamu akan mendapatkan tambahan sertifikat kompetensi dari Pijar Camp. Nilai 75 atau B ini didapatkan dari gabungan nilai minggu pertama hingga terakhir.',
    icon: FingerPrintIcon,
  },
]

const months = [
  {
    name: 'September',
    days: [
      { date: '2024-12-27' },
      { date: '2024-12-28' },
      { date: '2021-12-29' },
      { date: '2021-12-30' },
      { date: '2021-12-31' },
      { date: '2024-09-01', isCurrentMonth: true },
      { date: '2022-01-02', isCurrentMonth: true },
      { date: '2022-01-03', isCurrentMonth: true },
      { date: '2022-01-04', isCurrentMonth: true },
      { date: '2022-01-05', isCurrentMonth: true },
      { date: '2022-01-06', isCurrentMonth: true },
      { date: '2022-01-07', isCurrentMonth: true },
      { date: '2022-01-08', isCurrentMonth: true },
      { date: '2022-01-09', isCurrentMonth: true },
      { date: '2022-01-10', isCurrentMonth: true },
      { date: '2022-01-11', isCurrentMonth: true },
      { date: '2022-01-12', isCurrentMonth: true, isToday: true },
      { date: '2022-01-13', isCurrentMonth: true, isToday: true },
      { date: '2022-01-14', isCurrentMonth: true, isToday: true },
      { date: '2022-01-15', isCurrentMonth: true, isToday: true },
      { date: '2022-01-16', isCurrentMonth: true, isToday: true },
      { date: '2022-01-17', isCurrentMonth: true },
      { date: '2022-01-18', isCurrentMonth: true },
      { date: '2022-01-19', isCurrentMonth: true, isToday: true },
      { date: '2022-01-20', isCurrentMonth: true, isToday: true },
      { date: '2022-01-21', isCurrentMonth: true, isToday: true },
      { date: '2022-01-22', isCurrentMonth: true, isToday: true },
      { date: '2022-01-23', isCurrentMonth: true },
      { date: '2022-01-24', isCurrentMonth: true, isToday: true },
      { date: '2022-01-25', isCurrentMonth: true, isToday: true },
      { date: '2022-01-26', isCurrentMonth: true, isToday: true },
      { date: '2022-01-27', isCurrentMonth: true, isToday: true },
      { date: '2022-01-28', isCurrentMonth: true, isToday: true },
      { date: '2022-01-29', isCurrentMonth: true },
      { date: '2022-01-30', isCurrentMonth: true },
      { date: '2022-01-31' },
      { date: '2022-02-01' },
      { date: '2022-02-02' },
      { date: '2022-02-03' },
      { date: '2022-02-04' },
      { date: '2022-02-05' },
      { date: '2022-02-06' },
    ],
  },
  {
    name: 'October',
    days: [
      { date: '2022-01-31' },
      { date: '2022-02-01', isCurrentMonth: true, isToday: true },
      { date: '2022-02-02', isCurrentMonth: true, isToday: true },
      { date: '2022-02-03', isCurrentMonth: true, isToday: true },
      { date: '2022-02-04', isCurrentMonth: true, isToday: true },
      { date: '2022-02-05', isCurrentMonth: true },
      { date: '2022-02-06', isCurrentMonth: true },
      { date: '2022-02-07', isCurrentMonth: true, isToday: true },
      { date: '2022-02-08', isCurrentMonth: true, isToday: true },
      { date: '2022-02-09', isCurrentMonth: true, isToday: true },
      { date: '2022-02-10', isCurrentMonth: true, isToday: true },
      { date: '2022-02-11', isCurrentMonth: true, isToday: true },
      { date: '2022-02-12', isCurrentMonth: true },
      { date: '2022-02-13', isCurrentMonth: true },
      { date: '2022-02-14', isCurrentMonth: true },
      { date: '2022-02-15', isCurrentMonth: true },
      { date: '2022-02-16', isCurrentMonth: true },
      { date: '2022-02-17', isCurrentMonth: true },
      { date: '2022-02-18', isCurrentMonth: true },
      { date: '2022-02-19', isCurrentMonth: true },
      { date: '2022-02-20', isCurrentMonth: true },
      { date: '2022-02-21', isCurrentMonth: true, isToday: true },
      { date: '2022-02-22', isCurrentMonth: true, isToday: true },
      { date: '2022-02-23', isCurrentMonth: true, isToday: true },
      { date: '2022-02-24', isCurrentMonth: true, isToday: true },
      { date: '2022-02-25', isCurrentMonth: true, isToday: true },
      { date: '2022-02-26', isCurrentMonth: true },
      { date: '2022-02-27', isCurrentMonth: true },
      { date: '2022-02-28', isCurrentMonth: true },
      { date: '2022-02-29', isCurrentMonth: true },
      { date: '2022-02-30', isCurrentMonth: true },
      { date: '2022-02-31', isCurrentMonth: true },
      { date: '2022-03-01' },
      { date: '2022-03-02' },
      { date: '2022-03-03' },
      { date: '2022-03-04' },
      { date: '2022-03-05' },
      { date: '2022-03-06' },
      { date: '2022-03-07' },
      { date: '2022-03-08' },
      { date: '2022-03-09' },
      { date: '2022-03-10' },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="border-b border-gray-200 bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 justify-between">
                  <div className="flex">
                    <div className="flex flex-shrink-0 items-center">
                      <img
                        className="block h-8 w-auto lg:hidden"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                      />
                      <img
                        className="hidden h-8 w-auto lg:block"
                        src="./src/assets/landing/imagepijar.png"
                        alt="Your Company"
                      />
                    </div>
                    <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'border-indigo-500 text-gray-900'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <button
                      type="button"
                      className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          <span className="sr-only">Open user menu</span>
                          <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="-mr-2 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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

              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 pb-3 pt-2">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800',
                        'block border-l-4 py-2 pl-3 pr-4 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                  <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium text-gray-800">{user.name}</div>
                      <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Penerimaan Peserta Bootcamp</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to know
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Untuk menikmati semua keuntungan mengikuti bootcamp ada beberapa tahap yang harus kamu lakukan.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                      <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div>
      <div className="relative grid grid-cols-1 gap-x-14 md:grid-cols-2">
        <button
          type="button"
          className="absolute -left-1.5 -top-1 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="absolute -right-1.5 -top-1 flex items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        {months.map((month, monthIdx) => (
          <section
            key={monthIdx}
            className={classNames(monthIdx === months.length - 1 && 'hidden md:block', 'text-center')}
          >
            <h2 className="text-sm font-semibold text-gray-900">{month.name}</h2>
            <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
              <div>S</div>
            </div>
            <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
              {month.days.map((day, dayIdx) => (
                <button
                  key={day.date}
                  type="button"
                  className={classNames(
                    day.isCurrentMonth ? 'bg-white text-gray-900' : 'bg-gray-50 text-gray-400',
                    dayIdx === 0 && 'rounded-tl-lg',
                    dayIdx === 6 && 'rounded-tr-lg',
                    dayIdx === month.days.length - 7 && 'rounded-bl-lg',
                    dayIdx === month.days.length - 1 && 'rounded-br-lg',
                    'relative py-1.5 hover:bg-gray-100 focus:z-10'
                  )}
                >
                  <time
                    dateTime={day.date}
                    className={classNames(
                      day.isToday && 'bg-indigo-600 font-semibold text-white',
                      'mx-auto flex h-7 w-7 items-center justify-center rounded-full'
                    )}
                  >
                    {day.date.split('-').pop().replace(/^0/, '')}
                  </time>
                </button>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="text-base font-semibold leading-6 text-gray-900">Upcoming events</h2>
        <ol className="mt-2 divide-y divide-gray-200 text-sm leading-6 text-gray-500">
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-17" className="w-28 flex-none">
              12 - 16, September 2024
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Pendaftaran Bootcamp</p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-19" className="w-28 flex-none">
            19 - 22, September 2024
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Seleksi dan Pembayaran</p>
            <p className="flex-none sm:ml-6">
              <time dateTime="2022-01-13T14:30">08.00 WIB</time> - <time dateTime="2022-01-13T16:30">16.00 WIB</time>
            </p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-20" className="w-28 flex-none">
              24 Septemnber - October 2024
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Pelatihan Traning Hardskill dan Softskill</p>
            <p className="flex-none sm:ml-6">
              <time dateTime="2022-01-17T10:00">10.00 WIB</time> - <time dateTime="2022-01-17T10:15">16.00 WIB</time>
            </p>
          </li>
          <li className="py-4 sm:flex">
            <time dateTime="2022-01-18" className="w-28 flex-none">
              21 - 25 October 2024
            </time>
            <p className="mt-2 flex-auto font-semibold text-gray-900 sm:mt-0">Penyelesaian dan Sertifikasi</p>
            <p className="flex-none sm:ml-6">
              <time dateTime="2022-01-17T10:00">00.00 WIB</time> - <time dateTime="2022-01-17T10:15">24.00 WIB</time>
            </p>
          </li>
        </ol>
      </section>
    </div>
    </>
  )
}
