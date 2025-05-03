"use client";
import Link from "next/link";

export default function OnlineEducationTrends() {
  const sections = [
    {
      h3: "1. Hybrid Degrees Are the New Gold Standard",
      content: [
        {
          type: "text",
          value: "Gone are the days when online meant 100% digital. In 2025, hybrid education (online + in-person elements) is booming.",
        },
        {
          type: "list",
          value: [
            "Online lectures + workshops.",
            "Virtual classes + exam.",
            "Recorded theory + live practical sessions.",
          ],
        },
        {
          type: "text",
          value: "👉 Why It Matters: Employers prefer graduates with hands-on exposure — and hybrid models deliver both flexibility and credibility.",
        },
      ],
    },
    {
      h3: "2. AI-Powered Learning Platforms Are Everywhere",
      content: [
        {
          type: "text",
          value: "AI isn’t just ChatGPT. In education, it’s now personalizing everything:",
        },
        {
          type: "list",
          value: [
            "Adaptive learning paths based on your speed and style.",
            "Smart doubt resolution through AI tutors.",
            "Skill assessments that evolve with your performance.",
          ],
        },
        {
          type: "text",
          value: "Whether you’re studying for an online MBA or a coding course, AI is tailoring the experience to fit YOU.",
        },
      ],
    },
    {
      h3: "3. Micro-Credentials Are Taking Over Degrees",
      content: [
        {
          type: "text",
          value: "Welcome to the world of:",
        },
        {
          type: "list",
          value: ["Nano degrees", "Skill badges", "Certificate stacks"],
        },
        {
          type: "text",
          value: "Instead of long 2-year degrees, students are opting for modular learning. Want to become a digital marketer? Stack SEO + Analytics + Ad Strategy — done in 6 months.",
        },
        {
          type: "text",
          value: "💡 Pro Tip: Combine micro-courses with a full online degree to stand out from the crowd in your resume.",
        },
      ],
    },
    {
      h3: "4. Career-Linked Learning Is the New Default",
      content: [
        {
          type: "text",
          value: "In 2025, no one’s just “getting a degree.” They’re getting job-ready.",
        },
        {
          type: "text",
          value: "The best online programs now come with:",
        },
        {
          type: "list",
          value: [
            "Internship tie-ups",
            "Resume-building support",
            "Portfolio projects",
            "Real-time client work (yes, even in MBA!)",
          ],
        },
        {
          type: "text",
          value: "Universities have finally realized that placement is just as important as education — and students are demanding it.",
        },
      ],
    },
    {
      h3: "5. UGC-Approved Online Degrees Are Becoming the Norm",
      content: [
        {
          type: "text",
          value: "Especially in India, students used to wonder, “Will my online degree be valid?”",
        },
        {
          type: "text",
          value: "In 2025, the UGC (University Grants Commission) has approved dozens of online MBA, BBA, BCA, MA, and MCA programs — making them legally equivalent to traditional degrees.",
        },
        {
          type: "text",
          value: "✅ That means:",
        },
        {
          type: "list",
          value: [
            "You can apply for government jobs.",
            "Appear for competitive exams.",
            "Use your online degree abroad too (with proper attestation).",
          ],
        },
        {
          type: "text",
          value: "👉 Watch Out: Not all platforms are UGC-approved. UdemyGO helps you choose only valid, recognized programs.",
        },
      ],
    },
    {
      h3: "6. Soft Skills Are Being Taught (Finally!)",
      content: [
        {
          type: "text",
          value: "Online education used to be only about technical skills. Not anymore.",
        },
        {
          type: "text",
          value: "In 2025, leading online programs are including:",
        },
        {
          type: "list",
          value: [
            "Communication",
            "Leadership",
            "Emotional intelligence",
            "Cross-cultural collaboration",
          ],
        },
        {
          type: "text",
          value: "Why? Because employers are screaming for people who know more than just theory. And online education is finally listening.",
        },
      ],
    },
    {
      h3: "7. Subscription-Based Learning Is Replacing One-Time Payments",
      content: [
        {
          type: "text",
          value: "Think Netflix — but for education.",
        },
        {
          type: "text",
          value: "Now, many platforms let you:",
        },
        {
          type: "list",
          value: [
            "Pay a monthly fee (₹999–₹2999)",
            "Access a full range of degrees, courses, and certifications",
            "Cancel anytime or switch courses mid-way",
          ],
        },
        {
          type: "text",
          value: "Students love it because they can learn without breaking the bank — and still earn credentials over time.",
        },
      ],
    },
    {
      h3: "8. Global Classrooms, Local Access",
      content: [
        {
          type: "text",
          value: "You no longer need a visa to study at Harvard or London School of Economics.",
        },
        {
          type: "text",
          value: "Top universities now offer fully online international degrees — accessible to Indian students with just a laptop and Wi-Fi.",
        },
        {
          type: "text",
          value: "And yes, they’re recognized globally if the university is accredited.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen mt-32 bg-gradient-to-br from-blue-100 via-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="absolute -top-24 -right-24 w-56 h-56 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-in">
          Online Education Trends 2025: What Students Must Prepare For
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center max-w-3xl mx-auto animate-slide-up">
          In 2020, online education was a backup plan. In 2025, it’s the main highway to career growth — not just an alternative. The world of online learning has evolved massively in the last few years, and if you’re a student (or planning to become one), you need to know the trends before they shape your future. So let’s cut the fluff and break down the biggest online education trends of 2025 — and what smart students like you must do to stay ahead.
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6 text-center animate-slide-up">
          Online Learning in 2025 in Details
        </h2>

        {sections.map((section, index) => (
          <div
            key={index}
            className="mt-10 border-l-4 border-blue-500 pl-6 transform transition-all duration-500 hover:scale-[1.01] animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {section.h3}
            </h3>
            {section.content.map((item, idx) => (
              <div key={idx} className="mb-4">
                {item.type === "text" && (
                  <p
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                )}
                {item.type === "list" && (
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    {item.value.map((listItem, listIdx) => (
                      <li key={listIdx}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        ))}

        <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-6 text-center animate-slide-up">
          What Students Must Do to Prepare for This Future
        </h2>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-3xl mx-auto animate-slide-up">
          Here’s your personal action plan if you’re serious about succeeding in the 2025 online education landscape:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2 max-w-3xl mx-auto animate-slide-up">
          <li>Choose accredited programs only (UGC-approved in India, or globally recognized)</li>
          <li>Look for career-linked courses with internship or placement support</li>
          <li>Combine degrees + micro-courses for a standout resume</li>
          <li>Stay curious, not passive — keep learning new tools, trends, and tech</li>
          <li>Don’t fall for shiny platforms — talk to experts who know what’s real</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-6 text-center animate-slide-up">
          Final Thoughts on Online Degree
        </h2>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-3xl mx-auto animate-slide-up">
          The future of online education in 2025 isn’t coming — it’s already here. And it’s powerful, flexible, and full of opportunity for students who know where to look. So don’t get stuck with outdated information or random YouTube advice. Let UdemyGO’s expert consultants guide you toward smart, UGC-recognized online degrees that actually lead to jobs and growth.
        </p>
        <p className="text-lg text-blue-600 mb-8 text-center hover:underline transform transition-transform duration-300 hover:scale-105 animate-slide-up">
          <Link href="/explore-programs/online-mba">
            🔵 Book a Free Online Consultation Now ➔
          </Link>
        </p>
        <div className="text-center animate-slide-up">
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-full hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition duration-300 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 60;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}