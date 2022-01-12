// domain-name.com/news

import Link from 'next/link'
import { Fragment } from 'react';

export default function NewsPage() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href='/news/yoooo'>
                        Yo
                    </Link>
                </li>
                <li>
                    <Link href='/news/something-else'>
                        Something Else
                    </Link>
                </li>
            </ul>
        </Fragment>
    )
}
