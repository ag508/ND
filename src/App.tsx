import { useState, useEffect, type FormEvent } from 'react';
import { Menu, X, Star, MapPin, Clock, Instagram, ArrowRight, Music, Wind, Sun, Phone, User, ChevronLeft, ChevronRight, ChevronUp, Heart, Smile, Sparkles } from 'lucide-react';

// Custom WhatsApp icon using the official logo SVG
const WhatsAppIcon = ({ size = 24, className = '' }: { size?: number; className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeHeroImage, setActiveHeroImage] = useState(0);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

    // WhatsApp booking function
    const handleWhatsAppBooking = () => {
        const phoneNumber = '918408836881';
        const message = encodeURIComponent('Hi! I am interested in booking a yoga session at Naad Yoga Studio. Could you please share the available slots and details?');
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            // Direct WhatsApp app deep link for mobile
            window.open(`whatsapp://send?phone=${phoneNumber}&text=${message}`, '_blank');
        } else {
            // WhatsApp Web for desktop
            window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, '_blank');
        }
    };

    // Real images inspired by the Goa studio vibe
    const heroImages = [
        {
            src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=2070&auto=format&fit=crop", // Yoga Practice
            label: "Yoga Practice",
            desc: "Rooted in tradition"
        },
        {
            src: "https://images.unsplash.com/photo-1602192509154-0b900ee1f851?q=80&w=2069&auto=format&fit=crop", // Sound Healing Ceremony
            label: "Sound Healing",
            desc: "Vibration & Frequency"
        },
        {
            src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop",
            label: "Breathwork",
            desc: "Pranayama flow"
        },
        {
            src: "https://images.unsplash.com/photo-1528319725582-ddc096101511?q=80&w=2069&auto=format&fit=crop",
            label: "Meditation",
            desc: "Inner silence"
        }
    ];

    const reviews = [
        {
            text: "An amazing experience! The sound healing session was very relaxing and effective. The studio vibe is peaceful and perfect for meditation.",
            author: "Priya S.",
            tag: "Sound Healing"
        },
        {
            text: "Sir is very experienced and explains everything very nicely. One of the best places for yoga practice in Goa. Highly recommended!",
            author: "Rahul M.",
            tag: "Yoga Practice"
        },
        {
            text: "A hidden gem in Chimbel. The personalized attention to posture and breathwork has truly transformed my daily routine.",
            author: "Sarah J.",
            tag: "Wellness"
        },
        {
            text: "The ambiance is just magical. As soon as you step in, you feel a sense of calm. The morning classes are the best way to start the day.",
            author: "David K.",
            tag: "Atmosphere"
        },
        {
            text: "I've tried many studios in Goa, but Naad Yoga feels the most authentic. No showing off, just pure practice and breath.",
            author: "Elena R.",
            tag: "Authenticity"
        }
    ];

    // Auto-scroll reviews
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [reviews.length]);

    const nextReview = () => setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
    const prevReview = () => setCurrentReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    // Handle scroll for navbar transparency effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleBookingSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Redirect to WhatsApp with booking details
        handleWhatsAppBooking();
        setIsBookingOpen(false);
    };

    return (
        <div className="min-h-screen w-full relative bg-[#FAF7F2] text-[#1A2E2E] font-sans selection:bg-[#C5A059] selection:text-white">
            {/* --- Global Styles & Fonts --- */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 100px;
        }

        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        
        .organic-mask {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          transition: border-radius 8s ease-in-out; 
          animation: morph 8s ease-in-out infinite;
        }
        
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }

        /* Hero background texture - grain/noise */
        .hero-grain::after {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.035;
          z-index: 1;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-repeat: repeat;
          background-size: 180px 180px;
        }

        /* Radial dot grid pattern */
        .hero-dots::before {
          content: '';
          position: absolute;
          inset: 0;
          opacity: 0.04;
          z-index: 1;
          pointer-events: none;
          background-image: radial-gradient(circle, #1D4E4E 1px, transparent 1px);
          background-size: 40px 40px;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(29,78,78,0.3), 0 0 30px rgba(29,78,78,0.1); }
          50% { box-shadow: 0 0 25px rgba(29,78,78,0.5), 0 0 50px rgba(29,78,78,0.2); }
        }

        @keyframes pinBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        @keyframes shimmerSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* Hide scrollbar for review carousel on mobile if needed */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>

            {/* --- Booking Modal --- */}
            {isBookingOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1D4E4E]/40 backdrop-blur-sm p-4 animate-fade-in">
                    <div className="bg-[#FAF7F2] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden">
                        <div className="bg-[#1D4E4E] p-6 text-center relative">
                            <h3 className="font-cormorant text-2xl text-white">Book Your Session</h3>
                            <p className="text-[#A8Caba] text-xs font-inter tracking-widest mt-1">NAAD YOGA STUDIO</p>
                            <button onClick={() => setIsBookingOpen(false)} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="p-8">
                            <form onSubmit={handleBookingSubmit} className="flex flex-col gap-4">
                                <div>
                                    <label className="block text-xs font-bold tracking-widest text-[#1D4E4E] mb-2 uppercase">Your Name</label>
                                    <div className="flex items-center border-b border-[#1D4E4E]/20 pb-2">
                                        <User size={16} className="text-[#C5A059] mr-3" />
                                        <input type="text" required placeholder="Jane Doe" className="w-full bg-transparent outline-none font-inter text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold tracking-widest text-[#1D4E4E] mb-2 uppercase">Phone Number</label>
                                    <div className="flex items-center border-b border-[#1D4E4E]/20 pb-2">
                                        <Phone size={16} className="text-[#C5A059] mr-3" />
                                        <input type="tel" required placeholder="+91 99999 99999" className="w-full bg-transparent outline-none font-inter text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold tracking-widest text-[#1D4E4E] mb-2 uppercase">Session Type</label>
                                    <div className="flex items-center border-b border-[#1D4E4E]/20 pb-2">
                                        <Music size={16} className="text-[#C5A059] mr-3" />
                                        <select className="w-full bg-transparent outline-none font-inter text-sm">
                                            <option>Yoga Practice (Group)</option>
                                            <option>Sound Healing (Private)</option>
                                            <option>Breathwork Session</option>
                                            <option>Kids Yoga</option>
                                        </select>
                                    </div>
                                </div>
                                <button type="submit" className="mt-4 w-full flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-full font-bold text-xs tracking-widest hover:bg-[#1ebe5d] transition-colors shadow-lg">
                                    <WhatsAppIcon size={16} />
                                    BOOK VIA WHATSAPP
                                </button>
                                <p className="text-center text-[10px] text-gray-400 font-inter">You'll be redirected to WhatsApp to confirm your booking</p>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* --- Navigation Bar --- */}
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out px-6 lg:px-12 py-4 ${isScrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-[1400px] mx-auto flex items-center justify-between">
                    {/* Left: Logo */}
                    <div className="flex flex-col z-50 shrink-0">
                        <h1 className="font-cormorant text-2xl lg:text-3xl font-bold tracking-widest text-[#1D4E4E]">NAAD YOGA</h1>
                        <span className="text-[10px] lg:text-xs font-inter tracking-[0.2em] uppercase text-[#6B7C7C] mt-1">
                            Sound • Breath • Awareness
                        </span>
                    </div>

                    {/* Center: Navigation Links */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-12 font-inter text-xs tracking-widest font-medium text-[#1D4E4E] absolute left-1/2 -translate-x-1/2">
                        {['PRACTICE', 'INSTRUCTOR', 'KIDS YOGA', 'WHY US', 'ABOUT', 'REVIEWS'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase().replace(' ', '-')}`}
                                className="relative group py-2 hover:text-[#C5A059] transition-colors"
                            >
                                {item}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C5A059] transition-all duration-300 group-hover:w-1/2"></span>
                            </a>
                        ))}
                    </div>

                    {/* Right: CTA */}
                    <div className="hidden lg:flex items-center shrink-0">
                        <button
                            onClick={handleWhatsAppBooking}
                            className="group flex items-center gap-2 px-6 py-2 rounded-full border border-[#1D4E4E] text-[#1D4E4E] text-xs font-bold tracking-widest hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 shadow-sm"
                        >
                            <WhatsAppIcon size={14} className="group-hover:animate-pulse" />
                            BOOK A SESSION
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden z-50 text-[#1D4E4E]"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

            </nav>

            {/* Mobile Menu Overlay - placed outside nav to prevent backdrop-blur stacking context issues */}
            <div className={`fixed inset-0 bg-[#FAF7F2] z-[55] flex flex-col items-center justify-center gap-8 transition-all duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-5 right-6 text-[#1D4E4E] z-[56]"
                >
                    <X size={24} />
                </button>
                {['PRACTICE', 'INSTRUCTOR', 'KIDS YOGA', 'WHY US', 'ABOUT', 'REVIEWS'].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-cormorant text-3xl text-[#1D4E4E]"
                    >
                        {item}
                    </a>
                ))}
                <button
                    onClick={() => { setMobileMenuOpen(false); handleWhatsAppBooking(); }}
                    className="mt-4 flex items-center gap-2 px-8 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold tracking-widest hover:bg-[#1ebe5d] transition-colors"
                >
                    <WhatsAppIcon size={18} />
                    BOOK VIA WHATSAPP
                </button>
            </div>

            {/* --- Main Hero Section --- */}
            <header className="relative w-full min-h-screen pt-24 pb-12 lg:pt-28 flex flex-col items-center justify-center overflow-hidden hero-grain hero-dots">
                {/* Background Gradient & Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-[#F0EDE5] to-[#E6EFEA] z-0" />

                {/* Decorative gradient orbs for texture */}
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#C5A059]/[0.06] rounded-full blur-[100px] z-0 pointer-events-none" />
                <div className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] bg-[#1D4E4E]/[0.04] rounded-full blur-[120px] z-0 pointer-events-none" />
                <div className="absolute top-[40%] left-[60%] w-[300px] h-[300px] bg-[#A8CAba]/[0.08] rounded-full blur-[80px] z-0 pointer-events-none" />

                {/* Large OM watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06] text-[#1D4E4E] pointer-events-none select-none z-0">
                    <span className="text-[40vw] font-cormorant leading-none">ॐ</span>
                </div>

                {/* Subtle ring decoration */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full border border-[#1D4E4E]/[0.04] z-0 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full border border-[#C5A059]/[0.05] z-0 pointer-events-none" />

                <div className="max-w-[1400px] w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center px-6 lg:px-12 relative">

                    {/* Left: Headline & Intro */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left order-3 lg:order-1">

                        {/* Introduction Text Block */}
                        <div className="text-[#1D4E4E] mt-4 mb-8 lg:max-w-md">
                            <div className="flex flex-col gap-6 pl-4 border-l-2 border-[#C5A059]/30">
                                <p className="font-cormorant text-xl italic leading-relaxed text-[#1A2E2E] font-semibold">
                                    "Rooted in ancient yogic tradition, Naad Yoga blends breath, vibration, and awareness to restore inner harmony."
                                </p>
                                <div className="flex items-center gap-2 text-xs font-inter tracking-widest uppercase text-[#1D4E4E]/90 font-semibold">
                                    <Wind size={14} /> <span>Pranayama</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-row gap-4 w-full sm:w-auto">
                            <button
                                onClick={handleWhatsAppBooking}
                                className="group flex items-center gap-2.5 whitespace-nowrap px-7 py-3.5 bg-[#1D4E4E] text-white rounded-full font-inter text-xs font-bold tracking-widest transition-colors duration-400 hover:bg-[#C5A059] shadow-lg shadow-[#1D4E4E]/15"
                            >
                                <WhatsAppIcon size={18} className="transition-colors duration-400" />
                                START JOURNEY
                            </button>
                            <a
                                href="#about"
                                className="group flex items-center gap-2.5 whitespace-nowrap px-7 py-3.5 border-2 border-[#1D4E4E]/25 text-[#1D4E4E] rounded-full font-inter text-xs font-bold tracking-widest transition-colors duration-400 hover:bg-[#1D4E4E] hover:text-white hover:border-[#1D4E4E]"
                            >
                                <MapPin size={18} className="transition-colors duration-400" />
                                LOCATION
                            </a>
                        </div>
                    </div>

                    {/* Center: Dynamic Visual */}
                    <div className="lg:col-span-4 flex justify-center items-center relative order-1 lg:order-2 h-[45vh] lg:h-auto">
                        {/* The Blob Container */}
                        <div className="relative w-[280px] h-[360px] lg:w-[400px] lg:h-[500px]">
                            {/* Image Layer - Crossfade Stack */}
                            <div className="absolute inset-0 organic-mask overflow-hidden shadow-2xl">
                                {heroImages.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img.src}
                                        alt={img.label}
                                        className={`absolute inset-0 w-full h-full object-cover transform scale-105 transition-opacity duration-700 ease-in-out ${idx === activeHeroImage ? 'opacity-100' : 'opacity-0'}`}
                                    />
                                ))}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1D4E4E]/40 to-transparent"></div>
                            </div>

                            {/* Visible OM Overlay - Increased Opacity */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay opacity-50">
                                <span className="text-[150px] text-white font-cormorant">ॐ</span>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 right-0 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 max-w-[180px] transition-all duration-500">
                                <p className="font-cormorant text-lg italic text-[#1D4E4E] leading-none">
                                    "{heroImages[activeHeroImage].desc}"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Pillars */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col justify-center items-center lg:items-end gap-4 lg:gap-6 order-2 lg:order-3 w-full px-2 lg:px-0">
                        {[
                            { icon: Music, label: "Sound Healing", id: 1 },
                            { icon: Wind, label: "Breathwork", id: 2 },
                            { icon: Sun, label: "Meditation", id: 3 }
                        ].map((item, index) => (
                            <div
                                key={index}
                                onClick={() => setActiveHeroImage(activeHeroImage === item.id ? 0 : item.id)}
                                onMouseEnter={() => setActiveHeroImage(item.id)}
                                onMouseLeave={() => setActiveHeroImage(0)}
                                className={`group cursor-pointer transition-all duration-500 ease-in-out
                                    flex flex-col lg:flex-row items-center lg:justify-end gap-1.5 lg:gap-4
                                    flex-1 lg:flex-none lg:w-full min-w-0
                                    py-3 px-2 lg:py-0 lg:px-0 rounded-xl lg:rounded-none
                                    ${activeHeroImage === item.id ? 'bg-white/60 lg:bg-transparent lg:translate-x-[-10px]' : 'bg-transparent'}`}
                            >
                                {/* Desktop label */}
                                <div className="hidden lg:block text-right">
                                    <h4 className={`font-cormorant text-2xl lg:text-3xl transition-colors duration-500 ${activeHeroImage === item.id ? 'text-[#C5A059]' : 'text-[#1D4E4E]'}`}>
                                        {item.label}
                                    </h4>
                                    <p className={`text-[10px] tracking-widest uppercase transition-all duration-500 overflow-hidden ${activeHeroImage === item.id ? 'opacity-100 max-h-5 mt-1' : 'opacity-0 max-h-0 mt-0'}`}>
                                        Explore Practice
                                    </p>
                                </div>
                                {/* Icon circle */}
                                <div className={`w-11 h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-500 border shrink-0 ${activeHeroImage === item.id ? 'bg-[#C5A059] text-white border-[#C5A059] scale-110' : 'bg-white/50 lg:bg-transparent text-[#1D4E4E] border-[#1D4E4E]/20'}`}>
                                    <item.icon size={18} />
                                </div>
                                {/* Mobile label - always visible */}
                                <span className={`lg:hidden font-cormorant text-[13px] leading-tight text-center transition-colors duration-300 whitespace-nowrap ${activeHeroImage === item.id ? 'text-[#C5A059] font-semibold' : 'text-[#1D4E4E]/70'}`}>
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* --- Practice Section --- */}
            <section id="practice" className="py-20 px-6 bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase">Our Classes</span>
                        <h3 className="font-cormorant text-4xl lg:text-5xl text-[#1D4E4E] mt-2">Yoga for Every Soul</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Hatha Yoga", desc: "Classic postures to align body and mind.", img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop" },
                            { title: "Vinyasa Flow", desc: "Dynamic movement synchronized with breath.", img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=2026&auto=format&fit=crop" },
                            { title: "Restorative", desc: "Deep relaxation and stress release.", img: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1979&auto=format&fit=crop" }
                        ].map((cls, idx) => (
                            <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer">
                                <img src={cls.img} alt={cls.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1D4E4E] via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h4 className="font-cormorant text-2xl text-white mb-2">{cls.title}</h4>
                                    <p className="text-white/80 text-sm font-inter leading-relaxed">{cls.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Certified Yoga Instructor Section --- */}
            <section id="instructor" className="py-20 px-6 bg-[#1D4E4E] text-[#FAF7F2] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C5A059] rounded-full mix-blend-overlay filter blur-[120px] opacity-20 pointer-events-none" />

                <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase">Your Instructors</span>
                        <h3 className="font-cormorant text-4xl lg:text-5xl mt-4 mb-6 leading-tight">
                            Certified Male & Female Yoga Instructors At Home
                        </h3>
                        <p className="text-[#FAF7F2]/80 font-inter leading-relaxed mb-8">
                            Learn from our certified male and female yoga teachers, each with 10+ years of experience. Specializing in Hatha, Vinyasa, therapeutic yoga, and sound healing — personalized sessions tailored to your needs.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['10+ Years of Teaching Experience', 'Hatha, Vinyasa & Therapeutic Yoga', 'Male & Female Instructors Available', 'Personalized One-on-One Sessions', 'At-Home Convenience & Comfort'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm tracking-wide">
                                    <div className="w-2 h-2 rounded-full bg-[#C5A059]" /> {item}
                                </li>
                            ))}
                        </ul>
                        <button onClick={handleWhatsAppBooking} className="group inline-flex items-center gap-2 px-8 py-3 border border-[#C5A059] text-[#C5A059] rounded-full hover:bg-[#C5A059] hover:text-[#1D4E4E] transition-colors font-bold text-xs tracking-widest">
                            <WhatsAppIcon size={16} />
                            BOOK A SESSION
                        </button>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full h-[500px]">
                        <div className="w-full h-full rounded-t-full rounded-b-[200px] overflow-hidden border-2 border-[#C5A059]/30 p-2">
                            <img
                                src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2064&auto=format&fit=crop"
                                alt="Certified Yoga Instructor"
                                className="w-full h-full object-cover rounded-t-full rounded-b-[190px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Kids Yoga Section --- */}
            <section id="kids-yoga" className="py-20 px-6 bg-gradient-to-br from-[#FFF8F0] via-[#FFF5E6] to-[#F0EDE5] relative overflow-hidden">
                {/* Playful background decorations */}
                <div className="absolute top-[10%] right-[5%] w-[200px] h-[200px] bg-[#FFD166]/[0.12] rounded-full blur-[60px] pointer-events-none" />
                <div className="absolute bottom-[10%] left-[5%] w-[250px] h-[250px] bg-[#06D6A0]/[0.08] rounded-full blur-[70px] pointer-events-none" />
                <div className="absolute top-[50%] left-[50%] w-[180px] h-[180px] bg-[#EF476F]/[0.06] rounded-full blur-[50px] pointer-events-none" />

                {/* Subtle floating shapes for playfulness */}
                <div className="absolute top-12 left-[15%] text-[#FFD166]/20 pointer-events-none select-none">
                    <Star size={40} fill="currentColor" />
                </div>
                <div className="absolute bottom-20 right-[10%] text-[#06D6A0]/20 pointer-events-none select-none">
                    <Heart size={35} fill="currentColor" />
                </div>
                <div className="absolute top-[30%] right-[20%] text-[#EF476F]/15 pointer-events-none select-none">
                    <Sparkles size={30} />
                </div>

                <div className="max-w-[1200px] mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#EF476F] uppercase">
                            <Smile size={14} />
                            For Little Yogis
                        </span>
                        <h3 className="font-cormorant text-4xl lg:text-5xl text-[#1D4E4E] mt-3 leading-tight">
                            Kids Yoga — Fun, Flexible
                            <br className="hidden sm:block" />
                            & Full of Joy
                        </h3>
                        <p className="text-[#1D4E4E]/70 font-inter mt-4 max-w-2xl mx-auto leading-relaxed">
                            Introduce your children to the wonderful world of yoga! Our specially designed kids classes combine playful movement,
                            creative storytelling, and mindfulness exercises to help children grow strong, flexible, and confident.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Image Collage */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                                        <img
                                            src="https://images.unsplash.com/photo-1625675412062-fe9a2bced591?q=80&w=2070&auto=format&fit=crop"
                                            alt="Kids doing yoga poses"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="rounded-2xl bg-[#FFD166] p-5 text-center shadow-md">
                                        <Smile size={28} className="text-[#1D4E4E] mx-auto mb-2" />
                                        <p className="font-cormorant text-lg font-bold text-[#1D4E4E]">Ages 4–12</p>
                                        <p className="text-xs font-inter text-[#1D4E4E]/90">All levels welcome</p>
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="rounded-2xl bg-[#06D6A0]/20 p-5 text-center shadow-md">
                                        <Heart size={28} className="text-[#1D4E4E] mx-auto mb-2" />
                                        <p className="font-cormorant text-lg font-bold text-[#1D4E4E]">Small Groups</p>
                                        <p className="text-xs font-inter text-[#1D4E4E]/90">Max 8 kids per class</p>
                                    </div>
                                    <div className="rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                                        <img
                                            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop"
                                            alt="Children practicing yoga"
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>
                            {/* Decorative ring */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-2 border-[#FFD166]/30 pointer-events-none hidden lg:block" />
                            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-2 border-[#06D6A0]/30 pointer-events-none hidden lg:block" />
                        </div>

                        {/* Right: Benefits & Info */}
                        <div>
                            <div className="space-y-6 mb-10">
                                {[
                                    {
                                        icon: Sparkles,
                                        title: 'Builds Confidence',
                                        desc: 'Through fun poses and encouraging guidance, children learn to trust their bodies and celebrate their unique abilities.',
                                        color: '#EF476F'
                                    },
                                    {
                                        icon: Wind,
                                        title: 'Improves Focus & Calm',
                                        desc: 'Simple breathing exercises and mindfulness activities help kids manage stress and improve concentration in school.',
                                        color: '#06D6A0'
                                    },
                                    {
                                        icon: Heart,
                                        title: 'Develops Flexibility & Strength',
                                        desc: 'Age-appropriate poses improve coordination, balance, and physical development in a safe, non-competitive environment.',
                                        color: '#FFD166'
                                    },
                                    {
                                        icon: Smile,
                                        title: 'Creative & Playful Learning',
                                        desc: 'Each class is an adventure — with animal poses, yoga stories, partner games, and relaxation techniques kids actually enjoy.',
                                        color: '#118AB2'
                                    }
                                ].map((benefit, idx) => (
                                    <div key={idx} className="group flex gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#C5A059]/20">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300" style={{ backgroundColor: `${benefit.color}15` }}>
                                            <benefit.icon size={22} style={{ color: benefit.color }} />
                                        </div>
                                        <div>
                                            <h4 className="font-cormorant text-xl font-bold text-[#1D4E4E] mb-1">{benefit.title}</h4>
                                            <p className="text-sm text-gray-500 font-inter leading-relaxed">{benefit.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Schedule CTA */}
                            <div className="bg-[#1D4E4E] rounded-2xl p-6 text-white text-center">
                                <Smile size={28} className="text-[#FFD166] mx-auto mb-3" />
                                <h4 className="font-cormorant text-2xl mb-2">Ready to Get Started?</h4>
                                <p className="text-white/60 font-inter text-sm mb-5">Message us on WhatsApp to schedule a class and learn more about our kids yoga program.</p>
                                <button
                                    onClick={handleWhatsAppBooking}
                                    className="w-full flex items-center justify-center gap-2 bg-[#C5A059] text-white py-3 rounded-full font-bold text-xs tracking-widest hover:bg-[#b08d4b] transition-colors shadow-lg"
                                >
                                    <WhatsAppIcon size={16} />
                                    SCHEDULE A CLASS
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Why Choose Us Section --- */}
            <section id="why-us" className="py-20 px-6 bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-14">
                        <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase">Why Choose Us</span>
                        <h3 className="font-cormorant text-4xl lg:text-5xl text-[#1D4E4E] mt-3 leading-tight">
                            More Than Just Yoga —<br />A Complete Experience
                        </h3>
                        <p className="text-gray-500 font-inter mt-4 max-w-xl mx-auto leading-relaxed">
                            Naad Yoga goes beyond asanas. We combine sound, breath, and movement into a holistic journey designed around you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Music, title: 'Holistic Approach', desc: 'Yoga, sound healing, and breathwork woven together for deeper wellness.' },
                            { icon: User, title: 'Tailored Programs', desc: 'Every session is customized to your body, goals, and comfort level.' },
                            { icon: Sun, title: 'Rooted in Tradition', desc: 'Authentic practices passed down through a Goan yogic lineage.' },
                            { icon: Star, title: 'Lasting Transformation', desc: 'Not just fitness — real change in mind, body, and spirit over time.' }
                        ].map((item, idx) => (
                            <div key={idx} className="group bg-[#FAF7F2] rounded-2xl p-8 text-center hover:bg-[#1D4E4E] transition-colors duration-400">
                                <div className="w-14 h-14 rounded-full bg-[#1D4E4E]/10 group-hover:bg-[#C5A059]/20 flex items-center justify-center mx-auto mb-5 transition-colors duration-400">
                                    <item.icon size={24} className="text-[#1D4E4E] group-hover:text-[#C5A059] transition-colors duration-400" />
                                </div>
                                <h4 className="font-cormorant text-xl font-bold text-[#1D4E4E] group-hover:text-white mb-2 transition-colors duration-400">{item.title}</h4>
                                <p className="text-sm text-gray-500 font-inter group-hover:text-[#FAF7F2]/70 transition-colors duration-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- About & Location Section --- */}
            <section id="about" className="py-20 px-6 bg-[#FAF7F2]">
                <div className="max-w-[1000px] mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
                    <div className="lg:w-1/2 bg-[#E6EFEA] relative min-h-[350px]">
                        {/* Working Iframe Embed */}
                        <iframe
                            src="https://maps.google.com/maps?q=Naad+Yog+Studio+Chimbel+Goa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            className="w-full h-full absolute inset-0 border-0 filter grayscale hover:grayscale-0 transition-all duration-500"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Naad Yog Studio Location"
                        ></iframe>
                    </div>

                    <div className="lg:w-1/2 p-10 lg:p-12 flex flex-col justify-center">
                        <h3 className="font-cormorant text-3xl text-[#1D4E4E] mb-6">Visit Our Sanctuary</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="text-[#C5A059] shrink-0" />
                                <div>
                                    <h5 className="font-bold text-xs uppercase tracking-widest text-[#1D4E4E]">Address</h5>
                                    <p className="text-sm text-gray-600 mt-1">Naad Yog Studio, Kadamba Plateau,<br />Velha, Chimbel, Goa 403006</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="text-[#C5A059] shrink-0" />
                                <div>
                                    <h5 className="font-bold text-xs uppercase tracking-widest text-[#1D4E4E]">Contact</h5>
                                    <a href="tel:+918408836881" className="block text-sm text-gray-600 mt-1 hover:text-[#1D4E4E] transition-colors">+91 84088 36881 (WhatsApp)</a>
                                    <a href="tel:+918408835527" className="block text-sm text-gray-600 mt-0.5 hover:text-[#1D4E4E] transition-colors">+91 84088 35527</a>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Clock className="text-[#C5A059] shrink-0" />
                                <div>
                                    <h5 className="font-bold text-xs uppercase tracking-widest text-[#1D4E4E]">Hours</h5>
                                    <p className="text-sm text-gray-600 mt-1">Mon - Sat: 06:00 AM - 09:00 PM</p>
                                </div>
                            </div>
                        </div>
                        <a
                            href="https://g.co/kgs/dnmgZPn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#1D4E4E] text-white rounded-full text-xs font-bold tracking-widest hover:bg-[#C5A059] transition-colors"
                        >
                            <Star size={14} />
                            VIEW ON GOOGLE
                        </a>
                    </div>
                </div>
            </section>

            {/* --- Rolling Reviews Section --- */}
            <section id="reviews" className="py-20 px-6 bg-white border-t border-gray-100">
                <div className="max-w-[900px] mx-auto text-center">
                    <h3 className="font-cormorant text-4xl text-[#1D4E4E] mb-12">Words from Our Community</h3>

                    <div className="relative bg-[#FAF7F2] rounded-3xl p-8 lg:p-12 shadow-sm border border-[#E6EFEA]">
                        {/* Controls */}
                        <button
                            onClick={prevReview}
                            className="absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#1D4E4E] flex items-center justify-center shadow-md hover:bg-[#1D4E4E] hover:text-white transition-all z-20"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={nextReview}
                            className="absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-[#1D4E4E] flex items-center justify-center shadow-md hover:bg-[#1D4E4E] hover:text-white transition-all z-20"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* Carousel Content */}
                        <div className="overflow-hidden">
                            <div className="flex flex-col items-center animate-fade-in key={currentReviewIndex}">
                                <div className="flex text-[#C5A059] mb-6">
                                    {[1, 2, 3, 4, 5].map(star => <Star key={star} size={18} fill="currentColor" />)}
                                </div>
                                <p className="font-cormorant text-xl lg:text-2xl text-[#1D4E4E] italic mb-8 leading-relaxed px-4 lg:px-16">
                                    "{reviews[currentReviewIndex].text}"
                                </p>
                                <div className="flex flex-col items-center gap-1">
                                    <span className="font-bold text-sm text-[#1D4E4E] font-inter uppercase tracking-widest">{reviews[currentReviewIndex].author}</span>
                                    <span className="text-[10px] uppercase tracking-wider text-[#A8Caba] font-bold">{reviews[currentReviewIndex].tag}</span>
                                </div>
                            </div>
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {reviews.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentReviewIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentReviewIndex ? 'bg-[#C5A059] w-4' : 'bg-gray-300'}`}
                                />
                            ))}
                        </div>
                    </div>

                    <a href="https://maps.app.goo.gl/bFFYGQEhDYSQp74a8" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-12 text-[#1D4E4E] font-bold text-xs tracking-widest border-b border-[#1D4E4E] pb-1 hover:text-[#C5A059] hover:border-[#C5A059] transition-colors">
                        READ ALL GOOGLE REVIEWS <ArrowRight size={14} />
                    </a>
                </div>
            </section>

            {/* --- Instagram Feed Section --- */}
            <section className="py-20 px-6 bg-[#E6EFEA] relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#C5A059]/[0.06] rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-[-15%] left-[-5%] w-[400px] h-[400px] bg-[#1D4E4E]/[0.04] rounded-full blur-[80px] pointer-events-none" />

                <div className="max-w-[1200px] mx-auto relative z-10">

                    {/* Desktop: side-by-side layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left: Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase">Follow Our Journey</span>
                            <h3 className="font-cormorant text-4xl lg:text-5xl text-[#1D4E4E] mt-3 leading-tight">
                                Join Our Community on Instagram
                            </h3>
                            <p className="text-[#1D4E4E]/70 font-inter mt-4 leading-relaxed max-w-md mx-auto lg:mx-0">
                                Follow us for daily inspiration, behind-the-scenes moments from our studio, class schedules, and wellness tips from our instructors.
                            </p>

                            {/* Stats row */}
                            <div className="flex justify-center lg:justify-start gap-8 mt-8 mb-8">
                                {[
                                    { value: 'Daily', label: 'New Content' },
                                    { value: 'Live', label: 'Class Updates' },
                                    { value: 'Tips', label: '& Tutorials' }
                                ].map((stat, idx) => (
                                    <div key={idx} className="text-center">
                                        <div className="font-cormorant text-2xl font-bold text-[#1D4E4E]">{stat.value}</div>
                                        <div className="text-[10px] font-inter tracking-widest uppercase text-[#1D4E4E]/50 mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            {/* Handle + Follow CTA */}
                            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
                                <a
                                    href="https://www.instagram.com/naadyogastudio.goa?igsh=MWw1amZ2ZGlraW1qbw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 whitespace-nowrap px-7 py-3.5 bg-[#1D4E4E] text-white rounded-full font-inter text-xs font-bold tracking-widest transition-colors duration-400 hover:bg-[#C5A059]"
                                >
                                    <Instagram size={18} />
                                    FOLLOW US
                                </a>
                                <a
                                    href="https://www.instagram.com/naadyogastudio.goa?igsh=MWw1amZ2ZGlraW1qbw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-cormorant text-xl text-[#1D4E4E] hover:text-[#C5A059] transition-colors"
                                >
                                    @naadyogastudio.goa
                                </a>
                            </div>
                        </div>

                        {/* Right: Instagram Widget */}
                        <div className="relative order-1 lg:order-2">
                            {/* Frame decoration */}
                            <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-[#C5A059]/20 pointer-events-none hidden lg:block" />

                            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl">
                                {/* Top bar with branding */}
                                <div className="bg-[#1D4E4E] px-5 py-3 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Instagram size={16} className="text-[#C5A059]" />
                                        <span className="text-white/90 font-inter text-xs font-medium tracking-wider">NAAD YOGA STUDIO</span>
                                    </div>
                                    <a
                                        href="https://www.instagram.com/naadyogastudio.goa?igsh=MWw1amZ2ZGlraW1qbw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-[#C5A059] text-[10px] font-inter font-bold tracking-widest hover:text-white transition-colors"
                                    >
                                        VIEW PROFILE →
                                    </a>
                                </div>

                                {/* Iframe - taller on desktop, shorter on mobile */}
                                <iframe
                                    src="https://www.instagram.com/naadyogastudio.goa/embed"
                                    className="w-full border-0 h-[450px] lg:h-[550px]"
                                    loading="lazy"
                                    title="Naad Yoga Studio Instagram"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="bg-[#1D4E4E] text-[#FAF7F2] py-12 px-6">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="font-cormorant text-2xl font-bold tracking-widest mb-2">NAAD YOGA</h2>
                        <p className="text-xs opacity-60 font-inter max-w-xs">Restoring harmony through breath, movement, and sound.</p>
                    </div>
                    <div className="flex gap-6 items-center">
                        <a href="https://www.instagram.com/naadyogastudio.goa?igsh=MWw1amZ2ZGlraW1qbw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors" aria-label="Instagram">
                            <Instagram className="cursor-pointer" />
                        </a>
                        <button onClick={handleWhatsAppBooking} className="hover:text-[#25D366] transition-colors" aria-label="WhatsApp">
                            <WhatsAppIcon size={24} className="cursor-pointer" />
                        </button>
                        <div className="h-6 w-[1px] bg-white/20"></div>
                        <span className="text-xs opacity-60 self-center">© {new Date().getFullYear()} Naad Yoga Studio</span>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[#1D4E4E] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#C5A059] ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                aria-label="Scroll to top"
            >
                <ChevronUp size={20} />
            </button>
        </div>
    );
};

export default App;
