import Image from "next/image";
import { Heart, Users, Award, ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Ajayi Segun Ebenezer",
      role: "Founder & Executive Director",
      subtitle: "Medical Doctor | Global Health Enthusiast | Social Reformer",
      description:
        "With a deep passion for grassroots transformation and health equity, Dr. Ajayi leads KCODEGIN's vision with clarity, compassion, and conviction. As a practicing medical doctor and Medical Director of a multi-branch hospital group, he brings vast expertise in healthcare systems, community engagement, and leadership.",
    },
    {
      name: "Dr. Fadiora David Opeoluwa",
      role: "Director of Programs",
      subtitle: "Engineer | Strategic Planner | Community Advocate",
      description:
        "Brings a dynamic approach to program development and execution. Technical expertise, combined with organizational discipline and community empathy, makes him the engine behind KCODEGIN's successful program delivery and logistics management.",
    },
    {
      name: "Esther Erhebere",
      role: "Secretary",
      subtitle: "Administrative Coordinator",
      description:
        "Ensures smooth organizational operations through effective documentation, correspondence, and administrative coordination. She supports strategic planning, maintains official records, and serves as a key link between the leadership team, partners, and stakeholders.",
    },
    {
      name: "Dr. Aworanti Funmi",
      role: "Community Liaison Lead",
      subtitle: "Public Enlightenment Specialist",
      description:
        "Amplifies grassroots voices and cultural sensitivity in our programs—essential for inclusive international policymaking.",
    },
    {
      name: "Dr. Mary Oyeleke Oluwadunsin",
      role: "Health & Wellness Coordinator",
      subtitle: "Registered Nurse | Mental Health Advocate",
      description:
        "Leads medical logistics and ensures underserved populations receive holistic health support.",
    },
    {
      name: "Engr. Olayiwola Ayobami Ayoola",
      role: "IT and Digital Strategist",
      subtitle: "Technology Innovation Lead",
      description:
        "Leads the development and deployment of digital systems that enhance impact, efficiency, and global engagement. He manages digital infrastructure, streamlines data systems, and ensures technology aligns with our mission.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At the heart of KCODEGIN is a passionate, purpose-driven team of change-makers, community builders, public health professionals, educators, advocates, and volunteers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.subtitle}</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Kings Healing Hands Volunteer Corps</h3>
              <p className="text-lg text-gray-700 mb-6">
                Our most valued treasure: an ever-growing network of dedicated volunteers, nurses, doctors, educators, media professionals, and social workers, who give their time, energy, and expertise to bring our vision to life across cities, towns, and rural communities.
              </p>
              <p className="text-lg text-gray-700">
                They are the true heroes of our story.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <Users className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Volunteers</h4>
                <p className="text-gray-600">Dedicated community heroes</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg text-center">
                <Award className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Professionals</h4>
                <p className="text-gray-600">Expert medical & social workers</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 rounded-xl text-white">
              <Heart className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Together, We Are More</h3>
              <p className="text-lg mb-6">
                What makes our team special isn't just the titles—it's our shared heartbeat. Every campaign, every outreach, every life touched is a result of our united effort to build a healthier, happier, and more humane society.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Get Involved</span>
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
