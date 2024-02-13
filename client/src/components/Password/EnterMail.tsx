import React, { useState } from 'react'

type PropsEmailInputType = {
    email: string
}

export default function EnterMail() {
    const [emailInput, setEmailInput] = useState<PropsEmailInputType>({
        email: ''
    });
  return (
    <div>EnterMail</div>
  )
}