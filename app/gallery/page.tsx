"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, X } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const events = [
    {
      id: 1,
      title: "Community Education Outreach",
      date: "March 2024",
      location: "Rural Communities, Nigeria",
      description: "Educational workshops and classroom support programs reaching hundreds of students.",
      images: [
        { src: "/images/gallery/classroom-students.jpg", alt: "Students in classroom learning" },
        { src: "/images/gallery/teacher-presentation.jpg", alt: "Teacher presenting to students" },
        { src: "/images/gallery/classroom-teaching.jpg", alt: "Interactive classroom session" },
      ],
      participants: "200+ students",
      category: "Education",
    },
    {
      id: 2,
      title: "Health Screening & Medical Outreach",
      date: "March 2019",
      location: "Multiple Communities",
      description: "Comprehensive health screenings and medical consultations for community members of all ages.",
      images: [{ src: "/images/gallery/health-screening.jpg", alt: "Health screening in progress" }],
      participants: "150+ patients",
      category: "Healthcare",
    },
    {
      id: 3,
      title: "Community Registration & Documentation",
      date: "March 2019",
      location: "Community Centers",
      description: "Helping community members with documentation and registration processes.",
      images: [{ src: "/images/gallery/community-registration.jpg", alt: "Community registration event" }],
      participants: "100+ families",
      category: "Community Development",
    },
    {
      id: 4,
      title: "Youth Achievement Ceremony",
      date: "May 2018",
      location: "Local Schools",
      description: "Celebrating outstanding achievements of young people in our programs.",
      images: [
        { src: "/images/gallery/certificate-ceremony.jpg", alt: "Students receiving certificates" },
        { src: "/images/gallery/student-presentation.jpg", alt: "Student presentation" },
      ],
      participants: "50+ youth",
      category: "Youth Empowerment",
    },
    {
      id: 5,
      title: "Strategic Planning Session",
      date: "August 2018",
      location: "KCODE Offices",
      description: "Team planning and strategy development for upcoming community programs.",
      images: [
        { src: "/images/gallery/planning-meeting.jpg", alt: "Team planning meeting" },
        { src: "/images/gallery/team-selfie.jpg", alt: "Team members" },
      ],
      participants: "Team members",
      category: "Internal",
    },
  ]

  const categories = ["All", "Education", "Healthcare", "Community Development", "Youth Empowerment", "Internal"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredEvents =
    selectedCategory === "All" ? events : events.filter((event) => event.category === selectedCategory)

  const allImages = events.flatMap((event) =>
    event.images.map((img) => ({ ...img, event: event.title, category: event.category })),
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-amber-100 text-amber-800 mb-4">Events & Gallery</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Work in <span className="text-amber-600">Action</span>
            </h1>
            <p className="text-xl text-gray-600">
              Explore our recent events, community activities, and the real impact we're making together in communities
              across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                className={
                  selectedCategory === category
                    ? "bg-amber-500 hover:bg-amber-600 text-white"
                    : "border-amber-500 text-amber-600 hover:bg-amber-50"
                }
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1 p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge className="bg-amber-100 text-amber-800">{event.category}</Badge>
                    </div>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-2xl text-gray-900">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">{event.participants}</span>
                        </div>
                      </div>
                      <CardDescription className="text-gray-600">{event.description}</CardDescription>
                    </CardContent>
                  </div>

                  <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-2 gap-4 p-6">
                      {event.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer"
                          onClick={() => setSelectedImage({ ...image, event: event.title })}
                        >
                          <Image
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                            <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity text-center px-4">
                              Click to view larger
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold">{selectedImage.event}</h3>
              <p className="text-gray-300">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
