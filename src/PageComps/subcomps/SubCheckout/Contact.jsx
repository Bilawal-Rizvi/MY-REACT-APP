import React from 'react'

function Contact() {
  return (
<>
<div className="w-full flex flex-col  gap-3 mb-2">
          <input
            type="email "
            placeholder="Email"
            className="border border-gray-400 w-full h-12 rounded-xl p-3"
          />
          <div className="flex items-center gap-1">
            <input type="checkbox" name="s" id="s" />
            <label for="s" className="s text-center">
              Email me with news and offers
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-1 bg-gray-100 p-3 rounded-md border border-gray-300">
            <div className="flex items-center">
          <i class="fa-solid fa-info s border rounded-full border-gray-400 text-gray-400 "></i>
          <h1 className="s">International Website</h1>
          </div>
          <p className="s pl-4.5">
            To deliver products outside of Pakistan visit our International
            Website: <span className="underline "> https://baroque.com.pk</span>
          </p>
        </div>
</>
  )
}

export default Contact