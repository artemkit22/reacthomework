import React from 'react'
import Company from './usersComponent/company'
import UserAddress from './usersComponent/userAdress'
import UserDetails from './usersComponent/userDetails'
const Users = ({ user }) => {
    return (
        <>
            {user?.map(value => (
                <div key={value.id}>
                    <UserDetails user={value} />
                    <UserAddress address={value.address} />
                    <Company company={value.company} />
                </div>
            ))}
        </>
    )
}

export default Users