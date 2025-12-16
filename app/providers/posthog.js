// app/providers.js
'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PHProvider({ children }) {
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    const apiHost =
      process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com'

    if (!apiKey) {
      if (process.env.NODE_ENV !== 'production') {
        console.warn(
          '[PostHog] NEXT_PUBLIC_POSTHOG_KEY missing. Skipping PostHog initialization.'
        )
      }
      return
    }

    posthog.init(apiKey, {
      api_host: apiHost,
      person_profiles: 'identified_only',
      capture_pageview: false, // Disable automatic pageview capture, as we capture manually,
      capture_pageleave: true
    })
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}