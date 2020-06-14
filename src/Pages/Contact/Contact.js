import React from 'react'
import Cover from '../../components/Cover/Cover'

export default function Contact() {
    const post={
        image:"https://images.unsplash.com/photo-1562534352-3a9f3c8b9698?ixlib=rb-1.2.1&auto=format&fit= crop&w=753&q=80",
        text:"Contact us"
    }
    return (
        <div>
            <Cover post={post}> </Cover>
            
        </div>
    )
}
