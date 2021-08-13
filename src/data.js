import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'categories',
    links: [
      { label: 'Smart Phones', icon: <FaCreditCard />, url: '/products' },
      { label: 'Tablets', icon: <FaCreditCard />, url: '/products' },
      { label: 'Accessories', icon: <FaCreditCard />, url: '/products' },
    ],
  },
  {
    page: 'services',
    links: [
      { label: 'maintenance', icon: <FaBook />, url: '/products' },
      { label: 'contact us', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'online paying', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'our vision', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];

export default sublinks;
