import Link from 'next/link';
import React from 'react';
// import { useUser } from '../../../context/UseContext';


export function WidgetOne({ cls,style_2 }: { cls: string;style_2?:boolean }) {
  return (
    <div className={`${cls} mb-20`}>
      <h5 className={`footer-title ${style_2?'text-white':''}`}>Services​</h5>
      <ul className="footer-nav-link style-none">
        <li><Link href="/job-grid">Browse Jobs</Link></li>
        <li><Link href="/company-view">Companies</Link></li>
        <li><Link href="/candidates-view">Candidates</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
      </ul>
    </div>
  )
}

export function WidgetTwo({ cls,style_2 }: { cls: string;style_2?:boolean }) {
  return (
    <div className={`${cls} mb-20`}>
      <h5 className={`footer-title ${style_2?'text-white':''}`}>Company</h5>
      <ul className="footer-nav-link style-none">
        <li><Link href="/about-us">About us</Link></li>
        <li><Link href="/blog">Blogs</Link></li>
        <li><Link href="/faq">FAQ’s</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}

export function WidgetThree({ cls,style_2 }: { cls: string;style_2?:boolean }) {
  return (
    <div className={`${cls} mb-20`}>
      <h5 className={`footer-title ${style_2?'text-white':''}`}>Support</h5>
      <ul className="footer-nav-link style-none">
        <li><Link href='/termsofuse'>Terms of use</Link></li>
        <li><Link href='/terms&condition'>Terms & conditions</Link></li>
        <li><Link href='/privacy'>Privacy</Link></li>
        <li><Link href='/cookies'>Cookie policy</Link></li>
      </ul>
    </div>
  )
}

