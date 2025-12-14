import React from 'react';
import { 
  Camera, 
  FileText, 
  Smartphone, 
  Printer, 
  Layers, 
  User, 
  Keyboard, 
  Mail, 
  Fingerprint, 
  PenTool, 
  Globe 
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Why Us', href: '#features' },
  { name: 'Contact', href: '#contact' },
];

export const SERVICES = [
  {
    title: "Professional Photo Capture",
    description: "High-quality portrait and studio photography services.",
    icon: <Camera className="w-6 h-6" />,
  },
  {
    title: "Online App Processing",
    description: "Assistance with various online government and private applications.",
    icon: <Globe className="w-6 h-6" />,
  },
  {
    title: "Mobile Banking",
    description: "Secure bKash, Nagad, and other mobile financial services.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "Print & Photocopy",
    description: "High-speed color and B&W printing and photocopying.",
    icon: <Printer className="w-6 h-6" />,
  },
  {
    title: "Laminating & Binding",
    description: "Protect your documents with professional lamination and binding.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Passport Photo Editing",
    description: "Precise editing and resizing for passport and visa photos.",
    icon: <User className="w-6 h-6" />,
  },
  {
    title: "Document Typing",
    description: "Professional CV, Resume, and document composition services.",
    icon: <Keyboard className="w-6 h-6" />,
  },
  {
    title: "Email & Scanning",
    description: "High-resolution document scanning and email dispatch.",
    icon: <Mail className="w-6 h-6" />,
  },
  {
    title: "Birth Reg & NID",
    description: "Support for Birth Registration and National ID card issues.",
    icon: <Fingerprint className="w-6 h-6" />,
  },
  {
    title: "Student Form Fill-up",
    description: "Accurate form filling for schools, colleges, and universities.",
    icon: <PenTool className="w-6 h-6" />,
  },
  {
    title: "Internet Browsing",
    description: "High-speed internet access for browsing and downloads.",
    icon: <FileText className="w-6 h-6" />,
  },
];

export const CONTACT_INFO = {
  phone: "+880 1712-345678",
  address: "123 Green Valley Road, Digital Tower, Dhaka",
  email: "support@nextgenstudio.com",
  hours: "Sat - Thu: 9:00 AM - 10:00 PM",
};