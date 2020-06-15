import React from 'react'
import Cover from '../../components/Cover/Cover'

export default function Contact() {
    const post={
        image:"/assets/contact.png",
        text:"Contact us"
    }
    return (
        <div>
            <Cover post={post}> </Cover>
            
        </div>
    )
}
