import homerResume from '../assets/homerSimposonResume.pdf'
import React from 'react';

const Resume = () => {

  return (
    <>
      <h1>Resume</h1>
      <p>Not My Actual Resume</p>
      <iframe src={homerResume} style={{ width: '100%', height: '800px' }}></iframe>
    </>
  )
}

export default Resume
