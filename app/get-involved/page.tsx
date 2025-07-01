import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Handshake, Clock, Gift, ArrowRight, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GetInvolvedPage() {
  const ways = [
    {
      icon: Heart,
      title: "Make a Donation",
      description: "Your financial support directly funds our programs and helps us reach more communities in need.",
      features: [
        "One-time or monthly donations",
        "Sponsor a child's education",
        "Fund a health screening program",
        "Support community infrastructure",
      ],
      cta: "Donate Now",
      color: "bg-red-100 text-red-600",
    },
    {
      icon: Users,
      title: "Volunteer Your Time",
      description: "Join our team of dedicated volunteers and contribute your skills to make a direct impact.",
      features: [
        "Field work opportunities",
        "Professional skills volunteering",
        "Event support and coordination",
        "Mentorship programs",
      ],
      cta: "Become a Volunteer",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Organizations and businesses can partner with us to amplify impact and reach more communities.",
      features: [
        "Corporate social responsibility",
        "Skill-based partnerships",
        "Resource sharing",
        "Joint program development",
      ],
      cta: "Explore Partnerships",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Gift,
      title: "In-Kind Donations",
      description: "Donate goods, services, or equipment that directly support our programs and operations.",
      features: [
        "Educational materials and supplies",
        "Medical equipment and supplies",
        "Technology and computers",
        "Professional services",
      ],
      cta: "Donate Goods",
      color: "bg-purple-100 text-purple-600",
    },
  ]

  const donationLevels = [
    {
      amount: "$25",
      impact: "Provides school supplies for 5 students",
      icon: "📚",
    },
    {
      amount: "$50",
      impact: "Funds health screening for 10 people",
      icon: "🏥",
    },
    {
      amount: "$100",
      impact: "Sponsors a child's education for one month",
      icon: "🎓",
    },
    {
      amount: "$250",
      impact: "Supports a community workshop program",
      icon: "👥",
    },
    {
      amount: "$500",
      impact: "Funds a mobile health clinic visit",
      icon: "🚑",
    },
    {
      amount: "$1000",
      impact: "Establishes a new program in a community",
      icon: "🌟",
    },
  ]

  const volunteerRoles = [
    {
      title: "Education Volunteer",
      commitment: "4-6 hours/week",
      description: "Support teaching, tutoring, and educational program delivery in communities.",
    },
    {
      title: "Health Program Assistant",
      commitment: "6-8 hours/week",
      description: "Assist with health screenings, education, and community health initiatives.",
    },
    {
      title: "Community Outreach Coordinator",
      commitment: "5-7 hours/week",
      description: "Help build relationships with communities and coordinate program activities.",
    },
    {
      title: "Administrative Support",
      commitment: "3-5 hours/week",
      description: "Provide office support, data entry, and program documentation assistance.",
    },
    {
      title: "Event Coordinator",
      commitment: "Flexible",
      description: "Help organize fundraising events, community gatherings, and awareness campaigns.",
    },
    {
      title: "Professional Mentor",
      commitment: "2-4 hours/week",
      description: "Mentor youth and community members in your area of professional expertise.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-amber-100 text-amber-800 mb-4">Get Involved</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our Mission to <span className="text-amber-600">Transform Lives</span>
            </h1>
            <p className="text-xl text-gray-600">
              There are many ways to support our work and make a meaningful difference in communities. Every
              contribution, big or small, helps us create lasting positive change.
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Get Involved */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ways to Make a Difference</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the way that best fits your interests, skills, and availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ways.map((way, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-3 rounded-lg ${way.color}`}>
                      <way.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-gray-900">{way.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">{way.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="mb-6">
                    {way.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    {way.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Donation Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your contribution directly translates into positive change in communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donationLevels.map((level, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{level.icon}</div>
                <h3 className="text-2xl font-bold text-amber-600 mb-2">{level.amount}</h3>
                <p className="text-gray-600">{level.impact}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
              <Heart className="mr-2 h-5 w-5" />
              Make a Donation
            </Button>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find a volunteer role that matches your skills, interests, and availability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-gray-900 text-lg">{role.title}</CardTitle>
                  <div className="flex items-center space-x-2 text-amber-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm font-medium">{role.commitment}</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 text-sm">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
              <Users className="mr-2 h-5 w-5" />
              Apply to Volunteer
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Partner With Us</h2>
              <p className="text-gray-600 mb-6">
                We believe in the power of collaboration. By partnering with businesses, organizations, and
                institutions, we can amplify our impact and reach more communities in need.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Corporate Social Responsibility programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Employee volunteer programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Skill-based partnerships and pro bono services</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Joint program development and implementation</span>

                  <span className="text-gray-700">Joint program development and implementation</span>
                </div>
              </div>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                <Link href="/contact">
                  <Handshake className="mr-2 h-5 w-5" />
                  Discuss Partnership
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/gallery/planning-meeting.jpg"
                alt="Partnership meeting"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Every action counts. Whether you donate, volunteer, or partner with us, you're helping create positive
            change in communities that need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white">
              <Heart className="mr-2 h-5 w-5" />
              Start Supporting Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              asChild
            >
              <Link href="/contact">Have Questions?</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
