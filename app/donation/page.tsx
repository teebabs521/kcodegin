import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Award, Target, Eye, Lightbulb, Globe, ArrowRight, Star, Gift, Package, ShoppingBag, Stethoscope, UserRoundPen } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function DonationPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section id="donations" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Heart className="h-12 w-12 text-amber-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Gift Can Change a Life Today</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At KCODEGIN, every donation—whether big or small—is a seed of hope planted in the heart of a struggling community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Making Impact Through Giving</h3>
            <p className="text-lg text-gray-700 mb-6">
              Your support fuels our mission to build healthier, happier, and more resilient lives across Africa through grassroots health, education, and development projects.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Heart className="h-6 w-6 text-red-500" />
                <span className="text-gray-700">Fund medical outreaches in underserved communities</span>
              </div>
              <div className="flex items-center space-x-3">
                <Star className="h-6 w-6 text-yellow-500" />
                <span className="text-gray-700">Support youth development and mentorship programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Gift className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Empower women through livelihood programs</span>
              </div>
              <div className="flex items-center space-x-3">
                <Package className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Donate Sanitary Pad for prison Inmate across prisons</span>
              </div>
              <div className="flex items-center space-x-3">
                <ShoppingBag className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Provide school supplies for children 5 or more</span>
              </div>
              <div className="flex items-center space-x-3">
                <Stethoscope className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Fund health screening for 10 people or more </span>
              </div>
              <div className="flex items-center space-x-3">
                <UserRoundPen className="h-6 w-6 text-green-500" />
                <span className="text-gray-700">Support KCODEGIN project tagged commonwealth of collaborative community</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Ways to Donate</h3>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">General Donation</h4>
                <p className="text-gray-600">Support our overall mission and let us direct funds where they're needed most.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Project-Specific Donation</h4>
                <p className="text-gray-600">Choose a specific program or initiative you'd like to support directly.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Monthly Giving</h4>
                <p className="text-gray-600">Become a monthly supporter for sustained impact in communities.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl mb-12">
          <div className="text-center">
            <Gift className="h-12 w-12 text-amber-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Give an Honor, Tribute, or Memorial Donation</h3>
            <p className="text-lg text-gray-700 mb-6">
              Celebrate a life. Honor a legacy. Whether you're marking a birthday, celebrating a milestone, or remembering a loved one, an honorary donation is a meaningful way to give back.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 italic">
                "In your honor, a child was treated. A family was healed. A community was restored."
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
            <p className="text-lg mb-6">
              Every contribution, no matter the size, creates ripples of positive change across communities in Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:kcodegin@gmail.com"
                className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200"
              >
                Contact for Donation Info
              </a>
              <a
                href="#contact"
                className="bg-amber-600 text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  )
}
