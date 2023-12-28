import React, { useState } from 'react'
import SignInBox from '../components/SignIn'
import SignUpBox from '../components/SignUp'

const Home: React.FC = () => {
    const [register, setRegister] = useState(0);
    return (
        <>
            {
                register ?
                    <SignInBox setRegister={setRegister} /> :
                    <SignUpBox setRegister={setRegister} />
            }
        </>
    )
}

export default Home
