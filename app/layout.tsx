import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Design System - Getting Started',
  description: '社内容デザインシステム',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-grey-900 text-grey-50">
        {children}
      </body>
    </html>
  )
} 