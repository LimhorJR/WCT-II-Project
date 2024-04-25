import React from 'react'


const SportCategory = () => {
    return (
        <div>
            <form class="w-80 mx-auto  p-6 rounded-xl ">
        <select
          id="underline_select"
          class="block w-full py-2 px-3 text- bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-indigo-500 transition ease-in-out duration-150"
        >
          <option selected disabled>
            Sport Categrory
          </option>
          <option value="US">Volleyball</option>
          <option value="CA">Football</option>
          <option value="FR">Basketball</option>
          <option value="DE">Tennis</option>
          <option value="DE">Running</option>
        </select>
      </form>
        </div>
      )
}
const ProductCategory = () => {
    return (
        <div>
            <form class="w-80 mx-auto  p-6 rounded-xl ">
        <select
          id="underline_select"
          class="block w-full py-2 px-3 text- bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-indigo-500 transition ease-in-out duration-150"
        >
          <option selected disabled>
            Product Categrory
          </option>
          <option value="US">T-Shirt</option>
          <option value="CA">Short</option>
          <option value="FR">Pants</option>
          <option value="DE">Shoes</option>
          <option value="DE">Socks</option>
        </select>
      </form>
        </div>
      )
}
const Gender = () => {
    return (
        <div>
            <form class="w-80 mx-auto  p-6 rounded-xl ">
        <select
          id="underline_select"
          class="block w-full py-2 px-3 text- bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-indigo-500 transition ease-in-out duration-150"
        >
          <option selected disabled>
            Gender
          </option>
          <option value="US">Male</option>
          <option value="CA">Female</option>
        </select>
      </form>
        </div>
      )
}
const Size = () => {
    return (
        <div>
            <form class="w-80 mx-auto  p-6 rounded-xl ">
        <select
          id="underline_select"
          class="block w-full py-2 px-3 text- bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-indigo-500 transition ease-in-out duration-150"
        >
          <option selected disabled>
            Size
          </option>
          <option value="US">34/38</option>
          <option value="CA">39/40</option>
          <option value="FR">S</option>
          <option value="DE">M</option>
          <option value="DE">L</option>
          <option value="DE">XL</option>
          <option value="DE">2XL</option>
          <option value="DE">3XL</option>
        </select>
      </form>
        </div>
      )
}
const Brands = () => {
    return (
        <div>
            <form class="w-80 mx-auto  p-6 rounded-xl ">
        <select
          id="underline_select"
          class="block w-full py-2 px-3 text- bg-transparent border-b-2 border-gray-300 appearance-none focus:outline-none focus:border-indigo-500 transition ease-in-out duration-150"
        >
          <option selected disabled>
            Brands
          </option>
          <option value="US">Nike</option>
          <option value="CA">Adidas</option>
          <option value="FR">Puma</option>
          <option value="DE">New Balance</option>
          <option value="DE">Under Armour</option>
        </select>
      </form>
        </div>
      )
}

function Sidebar() {
  return (
    <>
            <SportCategory />
            <ProductCategory />
            <Gender />
            <Size />
            <Brands />
     </>  
  )
}

export default Sidebar