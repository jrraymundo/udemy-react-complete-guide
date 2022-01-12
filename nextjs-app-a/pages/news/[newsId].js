import React from 'react'
import { useRouter } from 'next/router'

/**
 * Dynamic Page
 * domain-name.com/news/[newsId]
 */

export default function DetailPage() {
    const router = useRouter()
    
    // We are able to access newsId based on what we named this [file]
    const newsId = router.query.newsId 
    console.log(newsId)

    return <h1>The Detail Page</h1>
}