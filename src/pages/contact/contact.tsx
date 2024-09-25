import React from "react";
import {
  Card,
} from "@/components/ui/card";
import {
  Input,
} from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export const contactInfo = {
  email: "your.email@example.com",
  phone: "+81 90-1234-5678",
  address: "東京都渋谷区〇〇〇〇",
  social: [
    { name: "GitHub", icon: FaGithub, link: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: FaLinkedin, link: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/yourusername" },
  ],
};

// src/pages/Contact.jsx

export const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // フォーム送信の処理をここに実装
    alert("メッセージが送信されました！");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <Card className="max-w-4xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 左側: コンタクト情報 */}
          <div>
            <Card className="bg-gray-50 p-6 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
              <div className="flex items-center mb-4">
                <FaEnvelope className="w-6 h-6 text-gray-700 mr-4" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FaPhone className="w-6 h-6 text-gray-700 mr-4" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-700 hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="w-6 h-6 text-gray-700 mr-4" />
                <span className="text-gray-700">{contactInfo.address}</span>
              </div>
              <div className="mt-6 flex space-x-4">
                {contactInfo.social.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.name}
                    className="text-gray-700 hover:text-primary transition-colors duration-200"
                  >
                    <platform.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </Card>
          </div>

          {/* 右側: コンタクトフォーム */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <Input
                  id="message"
                  placeholder="Your message..."
                  required
                  className="w-full h-32"
                />
              </div>
              <div className="text-center">
                <Button type="submit" className="bg-primary text-white hover:bg-blue-700">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};
