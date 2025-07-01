import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Target, Eye, Lightbulb, Globe, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We approach every community with empathy and understanding, recognizing the unique challenges they face.",
    },
    {
      icon: Users,
      title: "Community-Centered",
      description:
        "Our programs are designed with and for the communities we serve, ensuring local ownership and sustainability.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for the highest standards in all our programs and maintain transparency in our operations.",
    },
    {
      icon: Target,
      title: "Impact-Driven",
      description: "Every initiative is measured by its real-world impact on the lives of individuals and communities.",
    },
  ]

  const team = [
    {
      name: "Dr. Emmanuel Kalu",
      role: "Executive Director",
      bio: "With over 15 years in community development, Dr. Kalu leads our strategic vision and program implementation.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Adebayo",
      role: "Program Manager",
      bio: "Sarah oversees our education and youth empowerment programs, bringing 10 years of educational expertise.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Michael Okafor",
      role: "Health Director",
      bio: "Dr. Okafor leads our health initiatives with extensive experience in community healthcare and public health.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Grace Nwosu",
      role: "Community Outreach Coordinator",
      bio: "Grace builds relationships with communities and ensures our programs meet local needs and priorities.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const milestones = [
    { year: "2015", event: "KCODE International founded with a vision to transform communities" },
    { year: "2016", event: "First education program launched in rural communities" },
    { year: "2018", event: "Health initiative expanded to serve 10 communities" },
    { year: "2020", event: "Reached milestone of 500 lives directly impacted" },
    { year: "2022", event: "Launched youth empowerment and skills development programs" },
    { year: "2024", event: "Celebrating 1000+ lives transformed across 50+ communities" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About KCODEGIN</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2015 with a powerful belief: love, dignity, and opportunity should not be reserved for a privileged few—but shared with all.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In a world fractured by inequality, isolation, and inherited limitations, Kings Community Development Global Initiative (KCODEGIN) was founded with a single, powerful belief: love, dignity, and opportunity should not be reserved for a privileged few—but shared with all.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are a non-governmental, people-centered movement committed to building compassionate, inclusive, and resilient communities through education, healthcare, social integration, and empowerment initiatives.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At our core, we are bridge-builders, linking problems with solutions, pain with hope, and people with one another.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-fade-in">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focused</h3>
                <p className="text-gray-600 text-sm">Building stronger communities together</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Love-Driven</h3>
                <p className="text-gray-600 text-sm">Compassion at the heart of everything</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Globe className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600 text-sm">Impacting communities across Africa</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Target className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Impact Driven</h3>
                <p className="text-gray-600 text-sm">Sustainable and measurable change</p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To awaken the spirit of humanity by mobilizing individuals, institutions, and networks to transform communities through love-driven service, shared knowledge, and sustainable development.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                A world where every human, regardless of background, can access the tools, opportunities, and support needed to live a life of dignity, health, purpose, and peace.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-2xl text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg mb-6 opacity-90">
              Be part of the change you want to see in the world. Together, we can build stronger, more resilient communities.
            </p>
            <Link
              href="/membership"
              className="inline-flex items-center space-x-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Get Involved</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
