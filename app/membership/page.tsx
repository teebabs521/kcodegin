import Image from "next/image";
import { Heart, Users, Award, ArrowRight, CheckCircle, Globe } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function MembershipPage() {

        const benefits = [
          "Be Part of a Purpose-Driven Network",
          "Contribute to Life-Changing Projects",
          "Gain Valuable Experience Through Volunteering & Outreach",
          "Receive Opportunities for Local & International Collaboration",
          "Get Recognized as a Change Ambassador in Your Community",
          "Access Trainings, Events, Certificates & Mentorship"
        ];
      
        const memberTypes = [
          "Volunteers",
          "Healthcare professionals",
          "Students",
          "Educators",
          "Entrepreneurs",
          "Philanthropists",
          "Private and public organizations"
        ];
      
        const involvement = [
          "Join a medical outreach team",
          "Support rural development projects",
          "Lend your skills in media, health, education or logistics",
          "Advocate for equity and sustainability",
          "Organize local fundraising drives",
          "Partner with us through your organization or brand"
        ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

       <section id="membership" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Join the Movement. Be the Difference.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At KCODEGIN, meaningful change does not happen in isolation—it begins with people. People like you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Can Become a Member?</h3>
            <p className="text-gray-700 mb-6">Membership is open to all—regardless of background, profession, or location:</p>
            <ul className="space-y-3">
              {memberTypes.map((type, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0" />
                  <span className="text-gray-700">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Become a Member?</h3>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How You Can Get Involved</h3>
            <ul className="space-y-4">
              {involvement.map((way, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-amber-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{way}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-xl text-white text-center">
          <Globe className="h-12 w-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">We Believe in You. We Believe in Teamwork. We Believe in Love.</h3>
          <p className="text-lg mb-6">
            KCODEGIN isn't just an organization—it's a family of dreamers, doers, and change agents. Whether you're a professional with years of experience or someone with only time and heart to give, you matter here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kcodegin@yahoo.com"
              className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200"
            >
              Send Expression of Interest
            </a>
            <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
          </div>
        </div>
      </div>
    </section>

      <Footer />
    </div>
  );
}
