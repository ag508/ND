import { useState, useEffect, type FormEvent } from 'react';
import { Menu, X, Star, MapPin, Clock, Instagram, ArrowRight, Music, Wind, Sun, Phone, User, CheckCircle, ChevronLeft, ChevronRight, ChevronUp } from 'lucide-react';

const App = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeHeroImage, setActiveHeroImage] = useState(0);
    const [isBookingOpen, setIsBookingOpen] = useState(false);
    const [bookingStep, setBookingStep] = useState(1);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

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
        setBookingStep(2);
        setTimeout(() => {
            setIsBookingOpen(false);
            setBookingStep(1);
        }, 3000);
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
                            {bookingStep === 1 ? (
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
                                            </select>
                                        </div>
                                    </div>
                                    <button type="submit" className="mt-4 w-full bg-[#C5A059] text-white py-3 rounded-full font-bold text-xs tracking-widest hover:bg-[#b08d4b] transition-colors shadow-lg">
                                        CONFIRM BOOKING
                                    </button>
                                </form>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle size={32} className="text-green-600" />
                                    </div>
                                    <h4 className="font-cormorant text-2xl text-[#1D4E4E]">Request Sent!</h4>
                                    <p className="font-inter text-sm text-gray-600 mt-2">We will contact you shortly to confirm your slot.</p>
                                </div>
                            )}
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
                        {['PRACTICE', 'INSTRUCTOR', 'WHY US', 'ABOUT', 'REVIEWS'].map((item) => (
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
                            onClick={() => setIsBookingOpen(true)}
                            className="px-6 py-2 rounded-full border border-[#1D4E4E] text-[#1D4E4E] text-xs font-bold tracking-widest hover:bg-[#1D4E4E] hover:text-white transition-all duration-300 shadow-sm"
                        >
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
                {['PRACTICE', 'INSTRUCTOR', 'WHY US', 'ABOUT', 'REVIEWS'].map((item) => (
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
                    onClick={() => { setMobileMenuOpen(false); setIsBookingOpen(true); }}
                    className="mt-4 px-8 py-3 rounded-full bg-[#1D4E4E] text-white text-sm font-bold tracking-widest"
                >
                    BOOK A SESSION
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
                        <div className="text-[#1D4E4E]/80 mt-4 mb-8 lg:max-w-md">
                            <div className="flex flex-col gap-6 pl-4 border-l-2 border-[#C5A059]/30">
                                <p className="font-cormorant text-xl italic leading-relaxed">
                                    "Rooted in ancient yogic tradition, Naad Yoga blends breath, vibration, and awareness to restore inner harmony."
                                </p>
                                <div className="flex items-center gap-2 text-xs font-inter tracking-widest uppercase opacity-70">
                                    <Wind size={14} /> <span>Pranayama</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-row gap-4 w-full sm:w-auto">
                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="group flex items-center gap-2.5 whitespace-nowrap px-7 py-3.5 bg-[#1D4E4E] text-white rounded-full font-inter text-xs font-bold tracking-widest transition-colors duration-400 hover:bg-[#C5A059] shadow-lg shadow-[#1D4E4E]/15"
                            >
                                <ArrowRight size={18} className="transition-colors duration-400" />
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
                    <div className="lg:col-span-4 flex flex-row lg:flex-col justify-center items-center lg:items-end gap-2 lg:gap-6 order-2 lg:order-3 w-full">
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
                                    flex flex-col lg:flex-row items-center lg:justify-end gap-1 lg:gap-4
                                    flex-1 lg:flex-none lg:w-full
                                    py-2 px-3 lg:py-0 lg:px-0 rounded-xl lg:rounded-none
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
                                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-500 border shrink-0 ${activeHeroImage === item.id ? 'bg-[#C5A059] text-white border-[#C5A059] scale-110' : 'bg-white/50 lg:bg-transparent text-[#1D4E4E] border-[#1D4E4E]/20'}`}>
                                    <item.icon size={18} />
                                </div>
                                {/* Mobile label - always visible, compact */}
                                <span className={`lg:hidden font-cormorant text-[11px] leading-tight text-center transition-colors duration-300 ${activeHeroImage === item.id ? 'text-[#C5A059] font-semibold' : 'text-[#1D4E4E]/70'}`}>
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
                        <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase">Your Instructor</span>
                        <h3 className="font-cormorant text-4xl lg:text-5xl mt-4 mb-6 leading-tight">
                            Certified Female Yoga Instructor At Home
                        </h3>
                        <p className="text-[#FAF7F2]/80 font-inter leading-relaxed mb-8">
                            Learn from a certified yoga teacher with 10+ years of experience. Specializing in Hatha, Vinyasa, and therapeutic yoga.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['10+ Years of Teaching Experience', 'Hatha, Vinyasa & Therapeutic Yoga', 'Personalized One-on-One Sessions', 'At-Home Convenience & Comfort'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm tracking-wide">
                                    <div className="w-2 h-2 rounded-full bg-[#C5A059]" /> {item}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setIsBookingOpen(true)} className="px-8 py-3 border border-[#C5A059] text-[#C5A059] rounded-full hover:bg-[#C5A059] hover:text-[#1D4E4E] transition-colors font-bold text-xs tracking-widest">
                            BOOK A SESSION
                        </button>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full h-[500px]">
                        <div className="w-full h-full rounded-t-full rounded-b-[200px] overflow-hidden border-2 border-[#C5A059]/30 p-2">
                            <img
                                src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2070&auto=format&fit=crop"
                                alt="Certified Female Yoga Instructor"
                                className="w-full h-full object-cover rounded-t-full rounded-b-[190px]"
                            />
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
                                    <p className="text-sm text-gray-600 mt-1">+91 99999 99999 (WhatsApp)</p>
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
                        <a href="https://www.instagram.com/naadyogastudio.goa?igsh=MWw1amZ2ZGlraW1qbw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">
                            <Instagram className="cursor-pointer" />
                        </a>
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
