export default function MessagingPlatforms() {
  const platforms = [
    { 
      name: "Website", 
      icon: "🌐", 
      description: "Seamless web chat integration with customizable themes", 
      features: ["Responsive Design", "Custom Branding", "Live Chat Widget", "Analytics Dashboard"] 
    },
    { 
      name: "Slack", 
      icon: "💬", 
      description: "Professional team communication with AI-powered assistance", 
      features: ["Bot Integration", "Slash Commands", "Channel Management", "Workflow Automation"] 
    },
    { 
      name: "Telegram", 
      icon: "✈️", 
      description: "Secure messaging with advanced bot capabilities", 
      features: ["Bot API", "Group Management", "File Sharing", "Inline Keyboards"] 
    },
    { 
      name: "WhatsApp", 
      icon: "📱", 
      description: "Business messaging with global reach and reliability", 
      features: ["Business API", "Automated Responses", "Media Support", "Templates"] 
    },
    { 
      name: "Discord", 
      icon: "🎮", 
      description: "Community engagement with interactive bot features", 
      features: ["Server Bots", "Voice Integration", "Custom Commands", "Role Management"] 
    },
    { 
      name: "Facebook Messenger", 
      icon: "👥", 
      description: "Social media integration with rich messaging experiences", 
      features: ["Chatbots", "Quick Replies", "Persistent Menu", "Rich Media"] 
    },
    { 
      name: "Email", 
      icon: "📧", 
      description: "Intelligent email automation and response management", 
      features: ["SMTP Integration", "Template System", "Bulk Sending", "A/B Testing"] 
    },
    { 
      name: "Twilio", 
      icon: "☁️", 
      description: "Multi-channel communication platform integration", 
      features: ["Voice API", "SMS Gateway", "Video Calling", "Programmable Chat"] 
    },
    { 
      name: "SMS", 
      icon: "💬", 
      description: "Direct mobile messaging with high delivery rates", 
      features: ["Bulk Messaging", "Two-Way SMS", "Delivery Reports", "Shortcodes"] 
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 1,000 messages/month",
        "3 platform integrations",
        "Basic analytics",
        "Email support",
        "AI response training"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 messages/month",
        "All platform integrations",
        "Advanced analytics",
        "Priority support",
        "Custom AI training",
        "API access",
        "White-label options"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited messages",
        "All platforms + custom integrations",
        "Real-time analytics",
        "24/7 dedicated support",
        "Advanced AI customization",
        "Full API access",
        "Custom deployment",
        "SLA guarantee"
      ],
      popular: false,
      color: "green"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Platforms Section */}
      <div id="platforms" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              🚀 Integrate with Every Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect your AI chatbot across all major messaging platforms with a single, unified dashboard. 
              Manage conversations, analyze performance, and scale your customer engagement effortlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="text-center mb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{platform.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{platform.name}</h3>
                  <p className="text-gray-600">{platform.description}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-blue-600 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {platform.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-700 flex items-center">
                        <span className="text-green-500 mr-3">✓</span>{feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full mt-6 bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-700 py-3 px-4 rounded-xl transition-all font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              💼 Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core AI features, 
              with scalable options as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-purple-500 transform scale-105' 
                    : 'border-gray-200 hover:border-blue-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-500 mr-3">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include 14-day free trial • No setup fees • Cancel anytime</p>
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Need a custom plan? Contact our sales team →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
