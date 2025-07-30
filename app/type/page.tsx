'use client';
import React from 'react';
import { redirect } from 'next/navigation';

export default function TypePage() {
  // TypeページはTypography ENにリダイレクト
  redirect('/type/typography-en');
}