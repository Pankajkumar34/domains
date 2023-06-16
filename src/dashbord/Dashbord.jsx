import React from 'react'
import '../dashbord/Dashbordstyle.css'
function Dashbord() {
    const multipledata = (e) => {
        e.preventDefault()
        window.open('https://www.google.com/');
        window.open('https://www.google.com/');
    }
    return (
        <>
            <div className="dashForm">
                <h4>dashbord home</h4>
                <form className='dashbordFormtext'>
                    <div className="formInput1">
                        <label htmlFor="title">Title</label>
                        <input className='dashInput' type="text" placeholder='Enter title' />
                    </div>
                    <div className="formInput1">
                        <label htmlFor="title">content</label>
                        <input type="text" className='dashInput' placeholder='Enter content' />
                    </div>
                    <div className="formInput1">
                        <label htmlFor="image">Image upload</label>
                        <input type="file" className='dashInputFile' placeholder='Enter image' />
                    </div>

                </form>

                <button className='uploadDatabtn' onClick={multipledata}>upload data</button>
            </div>

        </>
    )
}

export default Dashbord
