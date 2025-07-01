"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Heart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "info@kcodeinternational.org",
      description: "Send us an email and we'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+234 XXX XXX XXXX",
      description: "Speak directly with our team during business hours",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Nigeria",
      description: "Schedule a visit to learn more about our work",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Fri: 9AM - 5PM",
      description: "We're available during regular business hours",
    },
  ]

  const inquiryTypes = [
    { value: "general", label: "General Inquiry", icon: MessageSquare },
    { value: "volunteer", label: "Volunteer Opportunities", icon: Users },
    { value: "donation", label: "Donations & Support", icon: Heart },
    { value: "partnership", label: "Partnership", icon: Users },
    { value: "media", label: "Media & Press", icon: MessageSquare },
  ]

  const offices = [
    {
      name: "Main Office",
      address: "123 Community Street, Lagos, Nigeria",
      phone: "+234 XXX XXX XXXX",
      email: "lagos@kcodeinternational.org",
    },
    {
      name: "Regional Office - North",
      address: "456 Development Avenue, Abuja, Nigeria",
      phone: "+234 XXX XXX XXXX",
      email: "abuja@kcodeinternational.org",
    },
    {
      name: "Field Office - East",
      address: "789 Community Road, Enugu, Nigeria",
      phone: "+234 XXX XXX XXXX",
      email: "enugu@kcodeinternational.org",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-amber-100 text-amber-800 mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Work <span className="text-amber-600">Together</span>
            </h1>
            <p className="text-xl text-gray-600">
              Have questions about our programs? Want to get involved? We'd love to hear from you. Reach out and let's
              discuss how we can create positive change together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-amber-600 font-medium mb-2">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </Card>
            ))}
          </div>

          {/* Contact Form and Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <CardDescription className="text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Information */}
            <div className="space-y-8">
              {/* Quick Response */}
              <Card className="p-6 bg-amber-50 border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-3">Quick Response Guarantee</h3>
                <p className="text-gray-600 text-sm mb-4">
                  We understand that your time is valuable. Our team is committed to responding to all inquiries within
                  24 hours during business days.
                </p>
                <div className="flex items-center space-x-2 text-amber-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">Average response time: 4 hours</span>
                </div>
              </Card>

              {/* Office Locations */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <Card key={index} className="p-4">
                      <h4 className="font-medium text-gray-900 mb-2">{office.name}</h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-3 w-3" />
                          <span>{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-3 w-3" />
                          <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-3 w-3" />
                          <span>{office.email}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Emergency Contact */}
              <Card className="p-6 bg-red-50 border-red-200">
                <h3 className="font-semibold text-gray-900 mb-3">Emergency Contact</h3>
                <p className="text-gray-600 text-sm mb-3">
                  For urgent matters related to ongoing programs or community emergencies:
                </p>
                <div className="flex items-center space-x-2 text-red-600">
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">+234 XXX XXX XXXX</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Available 24/7 for emergencies only</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our programs and how to get involved.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How can I volunteer with KCODE International?",
                answer:
                  "We welcome volunteers with various skills and availability. Visit our Get Involved page to see current opportunities, or contact us directly to discuss how your skills can contribute to our mission.",
              },
              {
                question: "Where do donations go and how are they used?",
                answer:
                  "All donations directly support our programs in education, healthcare, and community development. We maintain full transparency with regular impact reports showing exactly how funds are utilized.",
              },
              {
                question: "Can organizations partner with KCODE International?",
                answer:
                  "Yes! We actively seek partnerships with businesses, NGOs, and institutions. Partnerships can include funding, resource sharing, skill-based volunteering, or joint program development.",
              },
              {
                question: "How do you select communities for your programs?",
                answer:
                  "We work with communities that demonstrate need and readiness for our programs. Selection is based on factors like accessibility, community engagement, and potential for sustainable impact.",
              },
              {
                question: "Do you provide internship opportunities?",
                answer:
                  "We offer internship programs for students and recent graduates interested in development work. Internships are available in various departments including program management, communications, and field operations.",
              },
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
