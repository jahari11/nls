import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { preLoaderAnim } from '../animations/animations'
import Home from '../Pages/Home'


const Preloader = () => {
  useEffect(()=> {
    preLoaderAnim()
  }, [])
  return (
    <>
    <Link to='/home'>
    <div className='preloader'>
      <div className="preload-text-container">
        <span>Neverland Supply</span>
      </div>
    </div>
    </Link>
    </>
  )
}

export default Preloader