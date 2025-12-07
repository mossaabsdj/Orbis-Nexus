"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Facebook,
  X,
} from "lucide-react";

export default function ContactModal({ isOpen, setIsOpen }) {
  // Contact information array
  const contacts = [
    {
      id: 1,
      icon: Mail,
      label: "Email",
      value: "orbis.nexus21@gmail.com",
      link: "mailto:orbis.nexus21@gmail.com",
    },
    {
      id: 2,
      icon: Phone,
      label: "Phone",
      value: "+213 563263315",
      link: "tel:+213563263315",
    },
    {
      id: 9,
      icon: Phone,
      label: "Phone",
      value: "+213 559528592",
      link: "tel:+213559528592",
    },
    {
      id: 3,
      icon: Instagram,
      label: "Instagram",
      value: "orbis_nexus21",
      link: "https://www.instagram.com/orbis_nexus21?igsh=YWtxanptMXhtMm1p",
    },
    {
      id: 4,
      icon: Facebook,
      label: "Facebook",
      value: "Orbis nexus",
      link: "https://www.facebook.com/share/1H5VhfZY9p/",
    },
  ];

  // Social media array
  const socialLinks = [];

  return (
    <div className="">
      {/* Trigger Button */}

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 self-center bg-black/90 flex items-center justify-center p-4 z-50 backdrop-blur-md">
          {/* Modal Container */}
          <div className="max-h-11/12 bg-gradient-to-br from-black via-gray-800 to-black rounded-2xl shadow-2xl max-w-2xl w-full border border-gray-900 relative overflow-hidden">
            {/* Gradient accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800"></div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors duration-200 p-2 hover:bg-gray-900 rounded-full"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="p-8 pb-6">
              <h2 className="text-3xl font-bold text-white mb-2">
                Get in Touch
              </h2>
              <p className="text-gray-500">
                Feel free to reach out through any of these channels
              </p>
            </div>

            {/* Contact Information */}
            <div className="px-8 pb-6 space-y-4">
              {contacts.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.id}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-gray-950 hover:bg-gray-900 transition-all duration-300 group border border-gray-900 hover:border-gray-800"
                  >
                    <div className="p-3 bg-gray-900 rounded-lg group-hover:bg-gray-800 transition-colors duration-300">
                      <IconComponent
                        className="text-gray-500 group-hover:text-white transition-colors duration-300"
                        size={20}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm mb-1">
                        {contact.label}
                      </p>
                      <p className="text-white font-medium">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="px-8 pb-8">
              <div className="border-t border-gray-900 pt-6">
                <p className="text-gray-600 text-sm mb-4">Connect with us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-950 rounded-lg hover:bg-gray-800 transition-all duration-300 group border border-gray-900 hover:border-gray-800"
                        aria-label={social.label}
                      >
                        <IconComponent
                          className="text-gray-500 group-hover:text-white transition-colors duration-300"
                          size={20}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
