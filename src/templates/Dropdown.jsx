import React from 'react'

const Dropdown = ({ title, options }) => {
  return (

    <div className='select'>
      <select defaultValue="0" name="format" id="format">
        <option value="0" disabled>
          {title}

        </option>


        {options.map((e) => (
          <div>

            <option value={e} >
              {e.value}
            </option>
          </div>
        ))}
      </select>

    </div>
  )
}

export default Dropdown
