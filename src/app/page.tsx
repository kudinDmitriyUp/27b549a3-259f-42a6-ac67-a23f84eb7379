"use client"

import { Shield, Linkedin, Send, Star, Twitter, Users, Youtube, Zap } from "lucide-react";
import ContactSplit from "@/components/sections/contact/ContactSplit";
import FeatureCardSeven from "@/components/sections/feature/FeatureCardSeven";
import FooterSocial from "@/components/sections/footer/FooterSocial";
import HeroBillboardScroll from "@/components/sections/hero/HeroBillboardScroll";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import TagAbout from "@/components/sections/about/TagAbout";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import NavbarStyleMinimal from "@/components/navbar/NavbarStyleMinimal";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="soft"
      contentWidth="large"
      sizing="medium"
      background="radialGradient"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/g4e5956123a8aeac6c980f40948cfae9a4a58fb7eeb778519e5ab54aee5a5d76df488d8d1d6a8b8d3e208b893eb802126be0ab4f46c218bc155b918157aa9ce03_1280.jpg"
          logoAlt="AeroTech Solutions Logo"
          brandName="AeroTech Solutions"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroBillboardScroll
          title="Professional Aerial Solutions"
          description="Advanced drone technology and expert pilots delivering precision aerial services for construction, agriculture, inspection, and photography projects across the nation."
          tag="FAA Certified"
          tagIcon={Shield}
          buttons={[
            {
              text: "Get Started",
              href: "contact"
            },
            {
              text: "Our Services",
              href: "services"
            }
          ]}
          imageSrc="https://pixabay.com/get/gfc45435c76930a80b3d9826d11d51798948095d71bf56ee498f46720df50ed280de0e2e1bbcfd696e0a8148a62e0ec9f0056c16a6f5ee69673e17c7c353039fd_1280.jpg"
          imageAlt="Professional drone aircraft in flight"
        />
      </div>
      
      <div id="about" data-section="about">
        <TagAbout
          tag="Why us"
          description="At AeroTech Solutions, we combine cutting-edge drone technology with certified pilots and years of aviation expertise. We deliver precision aerial services that help businesses make informed decisions, improve safety, and increase operational efficiency across multiple industries."
        />
      </div>
      
      <div id="services" data-section="services">
        <FeatureCardSeven
          title="Comprehensive Aerial Services"
          description="From aerial mapping to industrial inspections, our certified pilots deliver professional drone services tailored to your industry needs."
          tag="Services"
          tagIcon={Zap}
          textboxLayout="default"
          animationType="blur-reveal"
          features={[
            {
              id: "1",
              title: "Aerial Mapping & Surveying",
              description: "High-precision mapping solutions for construction, mining, and land development projects using advanced GPS and photogrammetry technology.",
              imageSrc: "https://pixabay.com/get/g1f94c4e3591eeb796814a35a0deddbabac7f6d6c5568ee3ebca076a2a3f79c5abcf49d3a4146d70508b35039ace79abee7520403d3b95c2d63364a630cc4c6af_1280.jpg",
              imageAlt: "Aerial mapping drone survey"
            },
            {
              id: "2",
              title: "Infrastructure Inspection",
              description: "Safe and efficient inspection of power lines, bridges, towers, and industrial facilities with detailed reporting and thermal imaging capabilities.",
              imageSrc: "https://pixabay.com/get/g749e8ec906f15982f58148da57e0bebf8f1a588c4de6568b67b986e9b3a115076930f6b53fce4b5e15227046eba7c49b2476d614309116211fde139da3f2a187_1280.jpg",
              imageAlt: "Industrial drone inspection"
            },
            {
              id: "3",
              title: "Aerial Photography & Video",
              description: "Professional cinematography and photography services for real estate, marketing, events, and construction progress documentation.",
              imageSrc: "https://pixabay.com/get/g939a62d97afe856453d208d1e1e89a60ca1db93932954c323adf084eb3d832138260d06c79f31161321027ea7029e9a84c886c612436aead52e0513babec5a6a_1280.jpg",
              imageAlt: "Aerial photography service"
            },
            {
              id: "4",
              title: "Security & Surveillance",
              description: "Advanced surveillance solutions for perimeter monitoring, crowd management, and security assessment with real-time streaming capabilities.",
              imageSrc: "https://pixabay.com/get/g7f8713368ac59eff373683c2862dbc2e28161edc5554d183437b13f02486838ff79ded1669896cd3d2c8a1b7b6d4f784ddef1cda3d638fbad8d2615bc488b44a_1280.jpg",
              imageAlt: "Aerial surveillance drone"
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Trusted by Industry Leaders"
          description="See what our clients say about our professional aerial services and commitment to excellence."
          tag="Client Success"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Michael Chen",
              role: "Project Manager",
              company: "Skyline Construction",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g243934622a411a3ed2501b333889d1ee4c2ab98f30ccdfedcd935b34d5a6e296591a5524457f5efe0cc3acc5614d70270e88cb35575e15a834becfffe87b8dee_1280.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Real Estate Developer",
              company: "Premier Properties",
              rating: 5,
              imageSrc: "https://pixabay.com/get/gfc7a8c25dd8706a65e5cdd0ca14df5d502eaf8b81cb95d3f6cdc32e913088ab705a80d0baf70ad267b32381d81199c45f5aeedf0c30d8a1b45cf9fe313698580_1280.jpg",
              imageAlt: "Sarah Williams portrait"
            },
            {
              id: "3",
              name: "David Rodriguez",
              role: "Insurance Adjuster",
              company: "SecureGuard Insurance",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g91e1939df59187567ae7750ae395b0aa80482fb1299ab2f4b748541d5ad8d0a28c6a93ee87e78cf8a26260b3caded9c1770c79c76a1f7c45a8caeee1e3d8c3c1_1280.jpg",
              imageAlt: "David Rodriguez portrait"
            },
            {
              id: "4",
              name: "Emily Thompson",
              role: "Operations Manager",
              company: "GreenField Agriculture",
              rating: 5,
              imageSrc: "https://pixabay.com/get/g9b0e476f00b64c742ca58ebe38a9b129898ec15621fdbb8ebd3a269f5b7a85fca9f302830da587d21cf57fad334c8f6c5fcf1fca51f92505542153963d3eb816_1280.jpg",
              imageAlt: "Emily Thompson portrait"
            }
          ]}
        />
      </div>
      
      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted Industry Partners"
          description="Proudly working with leading companies across aerospace, construction, and technology sectors."
          tag="Partners"
          tagIcon={Users}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g28d5af2b25ae7eddab9981ad3bc396458b73f81513dd7602e3bf6a8171a971c316a1e73d6f0df41299be8f125aaca4d9419f9478f04a3d00969aa17d77c1adee_1280.jpg",
            "https://pixabay.com/get/g0a797f098a30bc924ba9225364db9c58c5b7156d73cb6e1a947d7c119c6d680e27cf2677e55cfe686b3cf4b3896126b3143d2ffe7f1eecd7798a23d9e2da79a2_1280.jpg",
            "https://pixabay.com/get/g2d9606ab60117f6d2ce01ab5b789a14ff7c3f8e044d06eab017dbec80c3f14d1e35313a6fd0959239c8939733a5a7f61378855471199c3e7e91ef230ec64e658_1280.jpg",
            "https://pixabay.com/get/gb6a6c3996db1e1c9fda6d6c6e5db00ea6906132243f36409169fe3266344f231a0c85c68673da6d120b5fb1414b4573f100571888efa8f4c8d9f0fad099f7a0b_1280.jpg",
            "https://pixabay.com/get/g7788dedd665eac78c8491bde1ea2ae69f23da8cf44c1934663c7b79860d87222ffa4c19d5c00ed17b31b9dc0cc5e08d927bc7861c6387c8aa2948aa2ed2d9056_1280.jpg",
            "https://pixabay.com/get/ged19adf8695fcf46f86bbd357347c7af237a2091df7e2d310583155c80fdccfdbc2d1580706e455d345200e9be001eee83ff0ea134227dee04bac5f962d3e30d_1280.jpg",
            "https://pixabay.com/get/gf0807af9db33878e7345b12bb8cc5c3891a77ee36edccebf0146505e39eeb29b7bb6096060b737306cd4c8244891a298e8feb9b06fe93689414407e30f13ed92_1280.jpg"
          ]}
          speed={30}
          showCard={true}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Contact"
          title="Ready to Take Flight?"
          description="Get in touch with our team to discuss your aerial service needs. We'll provide a custom quote and timeline for your project."
          tagIcon={Send}
          inputPlaceholder="Enter your email"
          buttonText="Get Quote"
          termsText="By submitting, you agree to our privacy policy and terms of service."
          imageSrc="https://pixabay.com/get/gbbe747d62ce436df268a0849cffbd5bec5065e32c47f679dc8b7d0b59411a1294142ffde0139ce16829919be7e7bc6e10467c050a0da970af7564b9b8aed55af_1280.jpg"
          imageAlt="Professional aviation team"
          mediaPosition="right"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoSrc="https://pixabay.com/get/g4e5956123a8aeac6c980f40948cfae9a4a58fb7eeb778519e5ab54aee5a5d76df488d8d1d6a8b8d3e208b893eb802126be0ab4f46c218bc155b918157aa9ce03_1280.jpg"
          logoText="AeroTech Solutions"
          logoWidth={140}
          logoHeight={45}
          copyrightText="© 2025 AeroTech Solutions. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Aerial Mapping",
                  href: "services"
                },
                {
                  label: "Infrastructure Inspection",
                  href: "services"
                },
                {
                  label: "Photography & Video",
                  href: "services"
                },
                {
                  label: "Security Surveillance",
                  href: "services"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "careers"
                },
                {
                  label: "News",
                  href: "blog"
                }
              ]
            },
            {
              title: "Resources",
              items: [
                {
                  label: "Case Studies",
                  href: "portfolio"
                },
                {
                  label: "Safety Guidelines",
                  href: "safety"
                },
                {
                  label: "FAA Compliance",
                  href: "compliance"
                },
                {
                  label: "Support",
                  href: "support"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Linkedin,
              href: "https://linkedin.com/company/aerotech-solutions",
              ariaLabel: "LinkedIn"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/aerotechsolutions",
              ariaLabel: "Twitter"
            },
            {
              icon: Youtube,
              href: "https://youtube.com/aerotechsolutions",
              ariaLabel: "YouTube"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}