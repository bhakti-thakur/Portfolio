import { connections } from "@/data/connections";
import { timeline } from "@/data/timeline";
import emailjs from "@emailjs/browser"
import { useRef } from "react"
import powerapps from "@/assets/powerapps.svg";
import react from "@/assets/react.svg";
import LinkedInIcon from "@/assets/linkedin.svg";
import GitHubIcon from "@/assets/github.svg";

const ConnectSection = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formRef.current) return

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!")
          formRef.current?.reset()
        },
        (error) => {
          console.error(error)
          alert("Failed to send message. Please try again.")
        }
      )
  }

  // Local icon map for connections - mirrors TechStackSection pattern
  const IconMap: Record<string, string> = {
    linkedin: LinkedInIcon,
    github: GitHubIcon,
    powerapps: powerapps,
    react: react,
  };

  return (
    <div id="connect" className="scroll-mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left Column */}
        <div className="space-y-4">
          {/* Primary Contact Channels */}
          <div className="power-card p-4">
            <h3 className="power-section-title mb-4">PRIMARY CONTACT CHANNELS</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-xs text-muted-foreground block mb-1">PREFERRED CONTACT</label>
                <div className="p-2 bg-muted/30 border border-border rounded text-sm flex items-center justify-between">
                  <span>LinkedIn</span>
                </div>
              </div>
              
              <div>
                <label className="text-xs text-muted-foreground block mb-1">RESPONSE TIME</label>
                <div className="p-2 bg-muted/30 border border-border rounded text-sm flex items-center justify-between">
                  <span> 24 - 48 hours</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-muted-foreground">
                    <path d="M3.5 1A1.5 1.5 0 002 2.5v11A1.5 1.5 0 003.5 15h9a1.5 1.5 0 001.5-1.5v-11A1.5 1.5 0 0012.5 1h-9zM8 14a1 1 0 110-2 1 1 0 010 2z"/>
                  </svg>
                </div>
              </div>
              
              <div>
                <label className="text-xs text-muted-foreground block mb-1">AVAILABILITY</label>
                <div className="p-2 bg-success/10 border border-success/20 rounded text-sm flex items-center gap-2 text-success">
                  <div className="w-2 h-2 rounded-full bg-success"></div>
                  Available for new projects
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">CONTACT FORM</h3>
              <button className="p-1 hover:bg-muted rounded text-muted-foreground">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M7 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM7 8a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"/>
                </svg>
              </button>
            </div>            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground block mb-1" htmlFor="contact-name">Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    required
                    className="w-full p-2 bg-muted/30 border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label className="text-xs text-muted-foreground block mb-1" htmlFor="contact-email">Email *</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    className="w-full p-2 bg-muted/30 border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="you@example.com"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label className="text-xs text-muted-foreground block mb-1" htmlFor="contact-message">Message (optional)</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className="w-full p-2 bg-muted/30 border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tell me about your requirements"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-primary text-primary-foreground rounded font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
            </form>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Connect Options */}
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">CONNECT OPTIONS</h3>
              <button className="text-sm text-accent flex items-center gap-1 ">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 1a.5.5 0 01.5.5v4h4a.5.5 0 010 1h-4v4a.5.5 0 01-1 0v-4h-4a.5.5 0 010-1h4v-4A.5.5 0 016 1z"/>
                </svg>
                Add Connection
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {connections.map((conn, index) => (
                <a href={conn.link} target="_blank" >
                  <div key={index} className="border border-border rounded p-3 hover:border-primary/30 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-10 h-10 bg-muted rounded flex items-center justify-center">
                        <img 
                          src={IconMap[conn.icon]} 
                          alt={conn.icon}
                          width="40"
                          height="40"
                        />
                      </div>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="text-muted-foreground">
                        <path d="M3 3h5v1H4v6h6V5h1v5.5a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-7a.5.5 0 01.5-.5zm6 0h2.5v2.5h-1V4.2L7.2 7.5l-.7-.7 3.3-3.3H8.5v-1z"/>
                      </svg>
                    </div>
                    <h4 className="font-medium text-sm">{conn.name}</h4>
                    <p className="text-xs text-muted-foreground">{conn.subtitle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="power-card p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="power-section-title">TIMELINE</h3>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-muted rounded text-muted-foreground">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 1a.5.5 0 01.5.5v5h5a.5.5 0 010 1h-5v5a.5.5 0 01-1 0v-5h-5a.5.5 0 010-1h5v-5A.5.5 0 017 1z"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-muted rounded text-muted-foreground">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M1.75 3a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H1.75zm2 4a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${item.active ? "bg-primary" : "bg-muted-foreground"}`}></div>
                  <div className="flex-1">
                    <div className="text-xs text-muted-foreground">{item.date}</div>
                    <div className="mt-1 p-3 bg-muted/30 rounded">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <img 
                          src={IconMap[item.icon]} 
                          alt={item.icon}
                          width="14"
                          height="14"
                        />
                        {item.title}
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-center">
              {/*<a href="#" className="power-link text-sm">View more activities</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectSection;


{/* THIS IS NETWORK GRAPH PLACEHOLDER
  <div className="h-40 flex flex-col items-center justify-center text-muted-foreground">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="24" cy="14" r="4"/>
                <circle cx="12" cy="34" r="4"/>
                <circle cx="36" cy="34" r="4"/>
                <path d="M24 18v8M20 26l-6 6M28 26l6 6"/>
              </svg>
              <p className="text-sm mt-2">Connect to view shared networks</p>
            </div> */}