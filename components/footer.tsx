import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="KCODE International Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold">KCODEGIN International</h3>
                <p className="text-sm text-amber-400">Happy People, Healthy Nation</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empowering communities through education, healthcare, and sustainable development programs.
            </p>
            <div className="flex space-x-3">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-amber-400 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-amber-400 cursor-pointer" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-amber-400 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-amber-400 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-amber-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-amber-400">
                  Our Programs
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-amber-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-amber-400">
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-amber-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs#education" className="text-gray-400 hover:text-amber-400">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/programs#health" className="text-gray-400 hover:text-amber-400">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/programs#community" className="text-gray-400 hover:text-amber-400">
                  Community Development
                </Link>
              </li>
              <li>
                <Link href="/programs#youth" className="text-gray-400 hover:text-amber-400">
                  Youth Empowerment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-amber-400" />
                <span className="text-gray-400">kcodegin@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-amber-400" />
                <span className="text-gray-400">+2348136795490</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span className="text-gray-400">Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 KCODEGIN International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
