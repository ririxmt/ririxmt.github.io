import React from 'react';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function Settings() {
  return (
    <form>
      <div className="">
        {/* Profile Section */}
        {/* Change Password Section */}
        <div>
          <h2 className="text-base font-semibold leading-10 text-gray-900">Change Password</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
            Ensure your password is at least 8 characters and contains a mix of letters, numbers, and symbols.
          </p>

          <div className="mt-10 space-y-10 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="current-password" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Current password
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="password"
                  name="current-password"
                  id="current-password"
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="new-password" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                New password
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="password"
                  name="new-password"
                  id="new-password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6">
              <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5">
                Confirm new password
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  autoComplete="new-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-indigo-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
