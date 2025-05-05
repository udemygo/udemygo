"use client"
import Link from 'next/link';

export default function OnlineMBA() {
  const sections = [
    {
      h3: "1. The Rising Popularitzy of Online MBAs",
      content: [
        "The online MBA revolution is real — and booming. According to industry reports, enrollment in online MBA programs surged by over 30% in the last two years alone. The reasons are simple: busy professionals want flexibility without hitting pause on their careers, and the pandemic-era mindset of remote learning has become the new normal.",
        "Even top global universities like Stanford, Wharton, and IIMs are now offering online or hybrid MBA programs — and students are loving it."
      ]
    },
    {
      h3: "2. What Makes Online MBAs Attractive in 2025?",
      content: [
        {
          type: "text",
          value: "Here’s why online MBAs are stealing the spotlight:"
        },
        {
          type: "list",
          value: [
            "Flexibility at Your Fingertips: Learn at your own pace, from anywhere in the world.",
            "Cost-Effective: Save on travel, accommodation, and tuition fees compared to a full-time MBA.",
            "Access to Global Opportunities: Study from prestigious universities without relocating.",
            "Career Continuity: No need to quit your job — study while you earn.",
            "Personalized Learning Paths: Choose specializations and electives that truly match your career goals."
          ]
        }
      ]
    },
    {
      h3: "3. The Real Value of an Online MBA (The Good Part)",
      content: [
        {
          type: "text",
          value: "When done right, an online MBA can unlock some serious career doors:"
        },
        {
          type: "list",
          value: [
            "Skill Enhancement: Master management, leadership, finance, marketing — critical skills for career growth.",
            "Career Switch: Transition into management, consulting, or entrepreneurship roles more smoothly.",
            "Salary Uplift: On average, online MBA graduates see a 20–30% salary increase within 1–2 years post-completion.",
            "Entrepreneurial Edge: If you’re launching a startup, an online MBA provides a strong business foundation without draining your resources."
          ]
        },
        {
          type: "text",
          value: "In short: You get the power of an MBA without the heavy baggage of a full-time program."
        }
      ]
    },
    {
      h3: "4. The “Hidden” Drawbacks Nobody Tells You",
      content: [
        {
          type: "text",
          value: "It’s not all sunshine, though. Here’s what many won’t tell you upfront:"
        },
        {
          type: "list",
          value: [
            "Networking Gaps: Online programs may not offer the same intense peer networking as on-campus MBAs.",
            "Employer Bias (Still Exists — Slightly): Some old-school employers may still prefer traditional MBAs, but this is shrinking fast with online education gaining more credibility.",
            "Self-Discipline Is a Must: Without fixed schedules, procrastination can kill your momentum.",
            "Internship Opportunities: Some online programs offer limited in-person internships — crucial for career changers."
          ]
        }
      ]
    },
    {
      h3: "5. Online MBA vs Traditional MBA: Key Differences",
      content: [
        {
          type: "table",
          value: [
            { factor: "Cost", online: "₹60,000 – ₹3 lakh", traditional: "₹10 lakh – ₹25 lakh" },
            { factor: "Flexibility", online: "Study anytime", traditional: "Fixed classes" },
            { factor: "Networking", online: "Virtual", traditional: "In-person, stronger" },
            { factor: "Global Access", online: "High", traditional: "Moderate" },
            { factor: "Recognition (2025)", online: "High if accredited", traditional: "Always high" }
          ]
        },
        {
          type: "text",
          value: "👉 <span className='font-semibold'>Tip:</span> Always choose an accredited and UGC-recognized online MBA to match the traditional degree value."
        }
      ]
    },
    {
      h3: "6. How to Make Sure Your Online MBA Is Worth It",
      content: [
        {
          type: "text",
          value: "Maximize your ROI by following these golden rules:"
        },
        {
          type: "list",
          value: [
            "Pick Accredited Programs: Only go for UGC-approved or internationally accredited universities.",
            "Look for Career Support: Programs offering career counseling, internships, and alumni networks add huge value.",
            "Stay Active in Networking: Use LinkedIn, online events, alumni circles, and webinars to build your professional circle.",
            "Focus on Practical Learning: Prioritize programs that include capstone projects, real-world case studies, and hands-on experiences."
          ]
        }
      ]
    },
    {
      h3: "7. Who Should (and Should NOT) Do an Online MBA?",
      content: [
        {
          type: "text",
          value: "Online MBA is best suited for:"
        },
        {
          type: "list",
          value: [
            "Working professionals aiming for promotions or career switches.",
            "Entrepreneurs wanting to upgrade their business skills.",
            "Individuals who prefer flexible learning models."
          ]
        },
        {
          type: "text",
          value: "Online MBA may not be ideal for:"
        },
        {
          type: "list",
          value: [
            "Fresher who have not completed graduation.",
            "Students looking for on-campus placement drives."
          ]
        }
      ]
    },
    {
      h3: "8. Final Verdict: Is It Worth It?",
      content: [
        {
          type: "text",
          value: "Short answer? <br /> 👉 <span className='font-semibold'>YES</span>, an online MBA is absolutely worth it in 2025 — if you choose the right program and stay committed."
        },
        {
          type: "text",
          value: "The business world is evolving fast. Today, skills, experience, and attitude matter far more than where you sat in a classroom. An online MBA gives you the right tools — and if leveraged smartly, it can transform your career and open global doors."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen mt-32 bg-gradient-to-br from-blue-100 via-indigo-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
        <div className="absolute -top-24 -right-24 w-56 h-56 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-56 h-56 bg-indigo-200 rounded-full opacity-20 animate-pulse"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 animate-fade-in">
          Is an Online MBA Worth It in 2025? Here’s What Nobody Tells You
        </h1>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed text-center max-w-3xl mx-auto animate-slide-up">
          Thinking about pursuing an online MBA? You’re not alone. In 2025, online MBAs have become one of the fastest-growing trends in higher education. But here’s the real question: Is it truly worth your time, money, and effort — or is it just another overrated buzzword?
        </p>

        <h2 className="text-3xl font-bold text-gray-800 mt-12 mb-6 text-center animate-slide-up">
          Truths, benefits, and hidden drawbacks that most people won’t tell you.
        </h2>

        {sections.map((section, index) => (
          <div
            key={index}
            className="mt-10 border-l-4 border-blue-500 pl-6 transform transition-all duration-500 hover:scale-[1.01] animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{section.h3}</h3>
            {section.content.map((item, idx) => (
              <div key={idx} className="mb-4">
                {item.type === 'text' && (
                  <p
                    className="text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                )}
                {item.type === 'list' && (
                  <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                    {item.value.map((listItem, listIdx) => (
                      <li key={listIdx}>{listItem}</li>
                    ))}
                  </ul>
                )}
                {item.type === 'table' && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse bg-white shadow-xl rounded-xl">
                      <thead>
                        <tr className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
                          <th className="p-4 font-semibold">Factor</th>
                          <th className="p-4 font-semibold">Online MBA</th>
                          <th className="p-4 font-semibold">Traditional MBA</th>
                        </tr>
                      </thead>
                      <tbody>
                        {item.value.map((row, rowIdx) => (
                          <tr key={rowIdx} className="border-b hover:bg-gray-50 transition">
                            <td className="p-4 text-gray-700">{row.factor}</td>
                            <td className="p-4 text-gray-700">{row.online}</td>
                            <td className="p-4 text-gray-700">{row.traditional}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}

        <h2 className="text-3xl font-bold text-gray-800 mt-16 mb-6 text-center animate-slide-up">
          Ready to Choose the Perfect Online MBA for Your Career?
        </h2>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-3xl mx-auto animate-slide-up">
          Don’t gamble with your future. Let UdemyGO’s experts guide you toward the best online MBA programs tailored to your career goals.
        </p>
        <p className="text-lg text-blue-600 mb-8 text-center hover:underline transform transition-transform duration-300 hover:scale-105 animate-slide-up">
          <Link href="/explore-programs/online-mba">🔵 Book Your Free Consultation with UdemyGO Now ➔</Link>
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