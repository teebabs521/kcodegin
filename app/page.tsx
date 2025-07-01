import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, BookOpen, Stethoscope, ArrowRight, TrendingUp, Globe, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const stats = [
    { number: "1000+", label: "Lives Impacted", icon: Users },
    { number: "50+", label: "Communities Served", icon: Globe },
    { number: "25+", label: "Programs Launched", icon: Target },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
  ]

  const programs = [
    {
      icon: BookOpen,
      title: "Education Programs",
      description: "Quality education and learning opportunities for children and youth.",
      image: "/images/gallery/classroom-students.jpg",
    },
    {
      icon: Stethoscope,
      title: "Health Initiatives",
      description: "Community health screenings and medical outreach programs.",
      image: "/images/gallery/health-screening.jpg",
    },
    {
      icon: Users,
      title: "Community Development",
      description: "Empowering communities through capacity building and skills training.",
      image: "/images/gallery/community-registration.jpg",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Community Leader",
      content:
        "KCODE International has transformed our community. The education programs have given our children hope for a better future.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Dr. Michael Adebayo",
      role: "Healthcare Partner",
      content:
        "Their health initiatives have reached the most remote areas, providing essential medical care to those who need it most.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-amber-100 text-amber-800 mb-4">Making a Difference Since 2015</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Building <span className="text-amber-600">Happy Communities</span> for a Healthy Nation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                KCODE International is dedicated to empowering communities through education, healthcare, and
                sustainable development programs that create lasting positive change across Nigeria and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href="/get-involved">
                    <Heart className="mr-2 h-5 w-5" />
                    Support Our Mission
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-500 text-amber-600 hover:bg-amber-50"
                  asChild
                >
                  <Link href="/about">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/gallery/classroom-students.jpg"
                alt="Students in classroom"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">1000+</p>
                    <p className="text-gray-600">Lives Impacted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Impact Areas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We focus on key areas that create the most significant and lasting impact in communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={program.image || "/placeholder.svg"} alt={program.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-amber-100 p-2 rounded-lg">
                      <program.icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <CardTitle className="text-gray-900">{program.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">{program.description}</CardDescription>
                  <Button variant="outline" size="sm" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
              <Link href="/programs">
                View All Programs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from community members and partners about the impact of our work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join us in our mission to create positive change. Every contribution, big or small, makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
              <Link href="/get-involved">Get Involved Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
