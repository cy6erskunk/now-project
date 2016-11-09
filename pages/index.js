import React from 'react'
import Link from 'next/link'

export default () => (
    <div>
    <div>Hello, %username%!</div>
    <Link href="/about">about!</Link>
    <Link href="/css">css!</Link>
    </div>
)
