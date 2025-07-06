import React, { useEffect } from 'react'
import { useState, useRef } from 'react'

import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

import copyIcon from '../assets/copy.svg'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/delete.svg'

const Manager = () => {
  const [status, setStatus] = useState(false)
  const [pwType, setPwType] = useState(false)

  const showPassword = () => {
    setStatus(!status)
    setPwType(!pwType)
  }


  const [form, setform] = useState({ site: "", username: "", password: "" })

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  const [credientialArray, setCredientialArray] = useState([])

  const getCredentials = async ()=>{
    let req = await fetch("http://localhost:3000/")
    let credentials = await req.json()
    setCredientialArray(credentials)
    console.log("hi there" + credentials)
  }

  useEffect(() => {
    getCredentials()
  }, [])

  const saveCredential = async() => {
    setCredientialArray([...credientialArray, {...form, id: uuidv4()}])

    let res = await fetch("http://localhost:3000/", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({...form, id: uuidv4()})})
    // localStorage.setItem("passwords", JSON.stringify([...credientialArray, {...form, id: uuidv4()}]))
    // console.log([...credientialArray, form])
    
    toast.success('Saved!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });
  }

  const editCrediential = (id) => {
    setform(credientialArray.filter(item=>item.id === id)[0])
    setCredientialArray(credientialArray.filter(item=>item.id !== id))
  }

  const deleteCrediential = async (id) => {
    let c = confirm("want to delete")
    if (c) {
      setCredientialArray(credientialArray.filter(item=>item.id !== id))

      let res = await fetch("http://locathost:3000/", {method: "DELETE", headers: {"Content-Type": "application/json"}, body: JSON.stringify(credientialArray.filter(item=>item.id !== id))})
      // localStorage.setItem("passwords", JSON.stringify(credientialArray.filter(item=>item.id !== id)))
      // console.log([...credientialArray, form])
      
      toast.success('Deleted!', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
      });
    }
  }

  const copyText = (text) => {
    toast.success('Copied!', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark"
    });

    navigator.clipboard.writeText(text)
  }


  return (
    <>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className='bg-black w-dvw flex flex-col items-center gap-20 flex-grow pb-20'>
        <div className=' w-1/2 flex flex-col gap-8 mt-20'>
          <span className='text-[26px] font-bold text-center text-white mb-[-30px]'>Don't ever remember your passwords</span>
          <span className='text-[18px] text-center text-slate-200 pb-20'>just PassHub it...</span>

          <input value={form.site} onChange={handleChange} className='text-white w-full border-2 border-white rounded-md p-4 py-2 text-xl ' type="text" placeholder='Website URL' name='site' />

          <div className='relative flex flex-row gap-4'>
            <input value={form.username} onChange={handleChange} className='text-white w-1/2 border-2 border-white rounded-md p-4 py-2 text-xl' type="text" placeholder='Username' name='username' />
            <input value={form.password} onChange={handleChange} className='text-white w-1/2 border-2 border-white rounded-md p-4 py-2 text-xl' type={pwType ? 'text' : 'password'} placeholder='Password' name='password' />
            <span className='absolute top-3 right-4 text-slate-300 hover:text-white cursor-pointer' onClick={showPassword}>
              <h5>{status ? 'hide' : 'show'}</h5>
            </span>
          </div>

          <button className='w-fit text-white border-2 border-green-400 rounded-lg px-3 py-2 active:border-white' onClick={saveCredential}>
            Save credentials
          </button>

        </div>

        {/* <div className='overflow-x-auto w-1/2 pb-20'> */}
        {credientialArray.length === 0 && <div className='text-white'>Save your first password</div>}
        {credientialArray.length != 0 && <table className="table-auto w-[70%] text-white ">
          <thead className='font-bold text-xl border-b-2 bg-slate-600'>
            <tr>
              <th className='border-r-2 py-2'>Site</th>
              <th className='border-r-2 py-2'>Username</th>
              <th className='border-r-2 py-2'>Password</th>
              <th className='py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {credientialArray.map((item, index) => {
              if (!item.site && !item.username && !item.password) return null;

              return <tr key={index}>
                <td className='relative text-center w-1/3 border-1 border-gray-800 py-2'>
                  <a href={item.site} target='_blank'>{item.site}</a>
                  <button className='absolute right-3 top-3 w-4 cursor-pointer' onClick={() => { copyText(item.site) }}>
                    <img src={copyIcon} alt="" />
                  </button>
                </td>

                <td className='relative text-center w-1/4 border-1 border-gray-800 py-2'>
                  {item.username}
                  <button className='absolute right-3 top-3 w-4 cursor-pointer' onClick={() => { copyText(item.username) }}>
                    <img src={copyIcon} alt="" />
                  </button>
                </td>

                <td className='relative text-center w-1/4 border-1 border-gray-800 py-2'>
                  {item.password}
                  <button className='absolute right-3 top-3 w-4 cursor-pointer' onClick={() => { copyText(item.password) }}>
                    <img src={copyIcon} alt="" />
                  </button>
                </td>

                <td className='relative text-center w-full border-1 border-gray-800 py-2 flex items-center justify-evenly'>
                  <button onClick={()=>{editCrediential(item.id)}}>
                    <img className='w-5' src={editIcon} alt="" />
                  </button>
                  <button onClick={()=>{deleteCrediential(item.id)}}>
                    <img className='w-5' src={deleteIcon} alt="" />
                  </button>
                </td>
              </tr>
            })}
          </tbody>
        </table>}
      </div>
      {/* </div> */}
    </>
  )
}

export default Manager