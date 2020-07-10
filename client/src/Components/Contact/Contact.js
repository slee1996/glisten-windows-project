import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Contact = () => {
    const [message, setMessage] = useState('default')
    const [name, setName] = useState('')
    const [phoneNum, setPhoneNum] = useState('')
    const [address, setAddress] = useState('')
    const [sent, setSent] = useState(false)

    const submit = () => {
        const message = `Name: ${name}, Number: ${phoneNum}, Address: ${address}`

        axios.post('http://localhost:4000/api/send', { body: message })
            .then(res => console.log(res.data))
            .then( setName(''), setPhoneNum(''), setAddress(''), setSent(true) )
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if(sent){
            alert('Message Sent!')
        }
    }, [sent])

    const onSubmit = () => {
        const message = {
            Name: name, 
            Number: phoneNum, 
            Address: address
        }

        fetch('/api/send', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
          })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    return(
        <>
        <div id='motto-box' 
            style= {{
                backgroundImage: 'url(https://glisten-windows-cleaning.s3.us-east-2.amazonaws.com/background-photos/lake-background.jpg)'
            }}
        >
        </div>
        <div id='contact'>
            <form id='contact-form' > 
                <h1>Text Us Now</h1>
                <p>
                    Enter your name, phone number, and address, and a rep will be in contact with you within 24 hours.
                </p>
                <label>Name: </label>
                <input
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <label>Phone Number: </label>
                <input
                    type='text'
                    value={phoneNum}
                    onChange={e => setPhoneNum(e.target.value)}
                />
                <label>Address: </label>
                <input
                    type='text'
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                />
                
            </form>
            <button onClick={submit} >
                Submit
            </button>
            <h1>Contact Us</h1>
            <h2>Phone Number</h2>
            <h2>(385)-999-9481</h2>
            <h2>Email Address</h2>
            <h2>glistenwindowcleaning@gmail.com</h2>
        </div>
        </>
    )
}

export default Contact