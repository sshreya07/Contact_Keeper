import React from 'react'

const ContactItem = ({ contact }) => {

    const { id, name, email, phone, type } = contact;

    return (
        <div className="card bg-light">
            <h3 className="text-left text-primary">
                {name} 
                <span style={{float:'right', blockSize:'20px', fontSize:'12px'}} className={'badge ' + (type === 'professional' ? 'badge-success' : 'badge-primary')} >
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </span> 
            </h3>

            <h5>
            <ul className="list">
                    {email && (
                        <li><i class="far fa-envelope-open"></i>&ensp;{email}</li>
                    )}
                    {phone && (
                        <li><i class="fas fa-phone"></i>&ensp;{phone}</li>
                    )}
            </ul>
            </h5>
        </div>
    )
}

export default ContactItem
