import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "New Education Initiative Launches in 5 Communities",
      excerpt:
        "We're excited to announce the launch of our comprehensive education program in five new rural communities, reaching over 300 students.",
      content:
        "This month marks a significant milestone as we expand our education initiatives to five additional rural communities across Nigeria. The program will provide educational resources, teacher training, and infrastructure support to over 300 students who previously had limited access to quality education.",
      image: "/images/gallery/classroom-students.jpg",
      author: "Sarah Adebayo",
      date: "March 15, 2024",
      category: "Education",
      readTime: "3 min read",
    },
    {
      id: 2,
      title: "Health Screening Program Reaches 500 Patients Milestone",
      excerpt:
        "Our mobile health clinic has successfully provided medical screenings and consultations to over 500 community members.",
      content:
        "We're proud to announce that our mobile health screening program has reached a significant milestone, providing essential medical services to over 500 patients across 15 communities. The program has been instrumental in early detection and prevention of various health conditions.",
      image: "/images/gallery/health-screening.jpg",
      author: "Dr. Michael Okafor",
      date: "March 10, 2024",
      category: "Healthcare",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Youth Leadership Program Graduates 25 Young Leaders",
      excerpt:
        "Our first cohort of youth leaders completed their training program, ready to drive positive change in their communities.",
      content:
        "Twenty-five young people have successfully completed our intensive youth leadership program, equipping them with the skills and knowledge needed to become change agents in their communities. The program focused on leadership development, civic engagement, and entrepreneurship.",
      image: "/images/gallery/certificate-ceremony.jpg",
      author: "Grace Nwosu",
      date: "March 5, 2024",
      category: "Youth Empowerment",
      readTime: "5 min read",
    },
    {
      id: 4,
      title: "Partnership with Local Government Strengthens Community Programs",
      excerpt:
        "New partnership agreement will enhance our ability to deliver sustainable development programs across the region.",
      content:
        "We've entered into a strategic partnership with local government authorities to strengthen our community development programs. This collaboration will enhance resource allocation, improve program sustainability, and expand our reach to underserved areas.",
      image: "/images/gallery/planning-meeting.jpg",
      author: "Dr. Emmanuel Kalu",
      date: "February 28, 2024",
      category: "Partnerships",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Annual Impact Report: 1000+ Lives Transformed",
      excerpt:
        "Our 2023 annual report highlights the significant impact we've made across education, healthcare, and community development.",
      content:
        "Our 2023 annual impact report showcases the remarkable achievements of our organization and the communities we serve. With over 1000 lives directly impacted through our various programs, we continue to make meaningful progress toward our vision of happy, healthy communities.",
      image: "/images/gallery/community-registration.jpg",
      author: "KCODE Team",
      date: "February 20, 2024",
      category: "Impact Report",
      readTime: "8 min read",
    },
    {
      id: 6,
      title: "Volunteer Appreciation: Celebrating Our Community Heroes",
      excerpt:
        "Recognizing the incredible dedication and impact of our volunteer team members who make our work possible.",
      content:
        "This month, we celebrate the outstanding contributions of our volunteer team. Their dedication, skills, and passion have been instrumental in the success of our programs. From field work to administrative support, our volunteers are the backbone of our organization.",
      image: "/images/gallery/team-selfie.jpg",
      author: "Grace Nwosu",
      date: "February 15, 2024",
      category: "Volunteers",
      readTime: "4 min read",
    },
  ]

  const categories = [
    "All",
    "Education",
    "Healthcare",
    "Youth Empowerment",
    "Partnerships",
    "Impact Report",
    "Volunteers",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-50 to-yellow-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-amber-100 text-amber-800 mb-4">News & Updates</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Latest News & <span className="text-amber-600">Impact Stories</span>
            </h1>
            <p className="text-xl text-gray-600">
              Stay updated with our latest programs, achievements, and the positive changes happening in communities
              across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Badge className="bg-amber-100 text-amber-800 mb-4">Featured Story</Badge>
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto relative">
                  <Image src={news[0].image || "/placeholder.svg"} alt={news[0].title} fill className="object-cover" />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <Badge variant="outline" className="border-amber-500 text-amber-600">
                      {news[0].category}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{news[0].date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{news[0].readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{news[0].title}</h2>
                  <p className="text-gray-600 mb-6">{news[0].content}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{news[0].author}</span>
                    </div>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Recent Updates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover more stories about our impact, programs, and the communities we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(1).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-amber-500 text-amber-600 text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-gray-900 line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <Button variant="outline" size="sm" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stay Connected</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest updates about our programs, impact stories, and
              opportunities to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
