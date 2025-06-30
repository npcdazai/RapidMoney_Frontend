"use client"

import React from 'react'
import styles from "./contact-map.module.scss"

export default function ContactMap() {
  return (
    <div className={styles.mapWrapper}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69483.08549547623!2d72.84588643398429!3d19.243612933593045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d0d3ad9ebd%3A0xea2f66f6a2145e90!2sBorivali!5e1!3m2!1sen!2sin!4v1751270555515!5m2!1sen!2sin"
        width="100%"
        height="550"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}