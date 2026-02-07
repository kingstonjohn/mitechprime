import { Star, Quote, User, CheckCircle } from 'lucide-react';
import Navbar from '../layout/navbar';
import Footer from '../layout/footer';
import { Link } from 'react-router-dom';

export default function Reviews({ isPage = false }) {

    const reviews = [
        {
            id: 1,
            name: "Michael Rodriguez",
            role: "Forex Trader",
            rating: 5,
            date: "2 months ago",
            content: "Fizohedge's copy trading feature has completely transformed my investment strategy. Mirroring expert trades helped me achieve consistent 15% monthly returns while learning from the best. The platform's intuitive interface makes complex trading accessible to beginners.",
            verified: true,
            avatarColor: "bg-blue-500"
        },
        {
            id: 2,
            name: "Sarah Chen",
            role: "Beginner Investor",
            rating: 5,
            date: "1 month ago",
            content: "I recently joined this platform and everything has been seamless. Depositing and withdrawing funds is as easy as using any trusted crypto wallet or exchange. After my first successful withdrawal, I felt confident enough to upgrade my plan and invest more",
            verified: true,
            avatarColor: "bg-purple-500"
        },
        {
            id: 3,
            name: "David Williams",
            role: "Options Trader",
            rating: 4,
            date: "3 weeks ago",
            content: "The low fees and comprehensive market analysis tools are game-changers. I've reduced my trading costs by 40% compared to my previous broker. The 24/7 customer support is responsive and genuinely helpful.",
            verified: true,
            avatarColor: "bg-green-500"
        },
        {
            id: 4,
            name: "Priya Sharma",
            role: "Financial Analyst",
            rating: 5,
            date: "2 weeks ago",
            content: "I just joined this platform and already made my first investment and successful withdrawal. The process was smooth and trustworthy, and I’m confident enough to upgrade my plan and invest more.",
            verified: true,
            avatarColor: "bg-pink-500"
        },
        {
            id: 5,
            name: "James Wilson",
            role: "Copy Trading Enthusiast",
            rating: 5,
            date: "4 days ago",
            content: "The mirror trading system with 90% capital protection is brilliant. I've been able to grow my account steadily while minimizing risks. The automated risk controls provide peace of mind I haven't found elsewhere.",
            verified: true,
            avatarColor: "bg-orange-500"
        },
        {
            id: 6,
            name: "Emma Thompson",
            role: "Long-term Investor",
            rating: 4,
            date: "1 week ago",
            content: "Excellent platform for both active trading and long-term investing. The wide range of asset classes including futures, forex, and oil stocks allows for true portfolio diversification. Very satisfied with the experience.",
            verified: true,
            avatarColor: "bg-teal-500"
        },
        {
            id: 7,
            name: "Alex Morgan",
            role: "Crypto Investor",
            rating: 5,
            date: "2 days ago",
            content: "Fizohedge made investing stress-free for me. Deposits and withdrawals are fast and simple, just like any top crypto exchange. After my first successful withdrawal, I knew this was a platform I could trust and grow with.",
            verified: true,
            avatarColor: "bg-indigo-500"
        },
        {
            id: 8,
            name: "David Beckham",
            role: "Crypto Trader",
            rating: 5,
            date: "5 days ago",
            content: "Fizohedge stands out for its reliability. Deposits and withdrawals are smooth and fast, just like using a trusted crypto wallet. My first withdrawal gave me full confidence to invest more.",
            verified: true,
            avatarColor: "bg-emerald-500"
        },
        {
            id: 9,
            name: "Linda Peterson",
            role: "Passive Investor",
            rating: 5,
            date: "1 week ago",
            content: "I was impressed by how easy Fizohedge made everything. Funding my account and withdrawing profits was straightforward and stress-free. This platform truly delivers on its promises.",
            verified: true,
            avatarColor: "bg-rose-500"
        },
    ];

    const stats = [
        { value: "4.8/5", label: "Platform Rating", sublabel: "Based on 12,540 reviews" },
        { value: "94%", label: "Customer Satisfaction", sublabel: "Would recommend to others" },
        { value: "1M+", label: "Active Traders", sublabel: "Trusted community" },
        { value: "<24h", label: "Support Response", sublabel: "Average resolution time" }
    ];

    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, index) => (
            <Star
                key={index}
                className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <>
            {
                isPage && (
                    <Navbar />
                )
            }
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full mb-4">
                            <Quote className="w-4 h-4" />
                            <span className="text-sm font-medium">Trusted Reviews</span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            What Our <span className="text-blue-600">Traders Say</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Join over 1 million users who trust Fizohedge for their investment journey.
                            Hear from real traders about their experiences with our platform.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl hover:shadow-sm border border-gray-100 text-center">
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <div className="text-gray-900 font-semibold">{stat.label}</div>
                                <div className="text-sm text-gray-500">{stat.sublabel}</div>
                            </div>
                        ))}
                    </div>

                    {/* Review Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {
                            isPage ?
                                reviews.map((review) => (
                                    <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center`}>
                                                    <User className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                                    <p className="text-sm text-gray-500">{review.role}</p>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                {renderStars(review.rating)}
                                            </div>
                                        </div>
                                        <p className="text-[14px] text-gray-700 mb-4">{review.content}</p>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <span>{review.date}</span>
                                            {review.verified && (
                                                <span className="flex items-center gap-1 text-green-600">
                                                    <CheckCircle className="w-4 h-4" />
                                                    Verified
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )) :
                                reviews.slice(0, 6).map((review) => (
                                    <div key={review.id} className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-10 h-10 rounded-full ${review.avatarColor} flex items-center justify-center`}>
                                                    <User className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                                    <p className="text-sm text-gray-500">{review.role}</p>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                {renderStars(review.rating)}
                                            </div>
                                        </div>
                                        <p className="text-[14px] text-gray-700 mb-4">{review.content}</p>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <span>{review.date}</span>
                                            {review.verified && (
                                                <span className="flex items-center gap-1 text-green-600">
                                                    <CheckCircle className="w-4 h-4" />
                                                    Verified
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </section>
            {
                !isPage && (
                    <div className="bg-gradient-to-r from-emerald-700 to-teal-700 text-center  p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4">Ready to Start Your Success Story?</h3>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of successful traders who trust Fizohedge for their investment journey.
                            Start with as little as $1,000 and experience the difference.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to='/register' className="bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
                                Sign Up Free
                            </Link>
                            <Link to='/reviews' className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                                View All Reviews
                            </Link>
                        </div>
                        <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                <span>FCA Regulated</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                <span>FSCS Protected</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                <span>24/7 Support</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                <span>1M+ Users</span>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                isPage && (
                    <Footer />
                )
            }
        </>
    );
}