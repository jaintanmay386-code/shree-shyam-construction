import React, { useState } from 'react';
import { COMPANY, JAIPUR_POPULAR_AREAS, getWhatsAppUrl } from '../constants/company.ts';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  User,
  Mail,
  Home,
  IndianRupee,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';

interface ConsultationFormProps {
  initialService?: string;
}

export const ConsultationForm: React.FC<ConsultationFormProps> = ({ initialService }) => {
  // Get today's date in YYYY-MM-DD for min date attribute
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    plotLocation: 'Mansarovar',
    customLocation: '',
    plotSize: '150 Gaj (1350 sq. ft.)',
    workType: initialService || 'Complete House Construction',
    budgetRange: '₹35 Lakhs - ₹55 Lakhs',
    siteVisitDate: '',
    preferredTime: 'Morning (10:00 AM - 1:00 PM)',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);

  // Sync if initialService changes
  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, workType: initialService }));
    }
  }, [initialService]);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter a valid name.';
    }

    // Validate 10-digit Indian Mobile Number
    const cleanedPhone = formData.mobileNumber.replace(/\D/g, '');
    if (!cleanedPhone) {
      errs.mobileNumber = 'Mobile number is required.';
    } else if (!/^[6-9]\d{9}$/.test(cleanedPhone)) {
      errs.mobileNumber = 'Please enter a valid 10-digit Indian mobile number (e.g. 9610448836).';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (formData.plotLocation === 'Other Area in Jaipur' && !formData.customLocation.trim()) {
      errs.customLocation = 'Please specify your plot area in Jaipur.';
    }

    if (formData.siteVisitDate && formData.siteVisitDate < today) {
      errs.siteVisitDate = 'Site visit date cannot be in the past.';
    }

    if (!formData.consent) {
      errs.consent = 'Please check the box to permit our team to contact you.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean client-side submission without backend claims
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
    }, 600);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      plotLocation: 'Mansarovar',
      customLocation: '',
      plotSize: '150 Gaj (1350 sq. ft.)',
      workType: 'Complete House Construction',
      budgetRange: '₹35 Lakhs - ₹55 Lakhs',
      siteVisitDate: '',
      preferredTime: 'Morning (10:00 AM - 1:00 PM)',
      message: '',
      consent: false,
    });
    setErrors({});
  };

  const generateWhatsAppFromSubmission = (data: typeof formData) => {
    const location =
      data.plotLocation === 'Other Area in Jaipur' ? data.customLocation : data.plotLocation;

    const text = `*New House Construction Enquiry - Shree Shyam Constructions*
*Name:* ${data.fullName}
*Phone:* ${data.mobileNumber}
${data.email ? `*Email:* ${data.email}\n` : ''}*Plot Location:* ${location}, Jaipur
*Plot Size:* ${data.plotSize || 'Not specified'}
*Type of Work:* ${data.workType}
*Budget Range:* ${data.budgetRange || 'Not specified'}
${data.siteVisitDate ? `*Requested Site Visit:* ${data.siteVisitDate} (${data.preferredTime})\n` : ''}*Requirements:* ${data.message || 'Ready to discuss project'}`;

    return getWhatsAppUrl(text);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B0B0B] text-[#F5F1E8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            Let&apos;s Build Together
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F1E8] mb-4">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-base sm:text-lg text-[#A7A7A7] leading-relaxed">
            Tell us about your plot and your vision. Let&apos;s discuss the next steps for your construction project with honest estimates and professional guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Phone & Office Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#14151B] border border-[#D4AF37]/30 rounded-xl p-6 sm:p-8">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F1E8] mb-4">
                Direct Contact Details
              </h3>
              <p className="text-xs sm:text-sm text-[#A7A7A7] mb-6 leading-relaxed">
                Prefer speaking directly to our construction management team? Give us a call or reach us on WhatsApp.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={COMPANY.phoneTel}
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#0E0F14] border border-[#262833] hover:border-[#D4AF37] transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7A7A7] block">
                      Direct Phone
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#F5F1E8] group-hover:text-[#D4AF37] transition-colors">
                      {COMPANY.displayPhone}
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-[#0E0F14] border border-[#262833] hover:border-[#25D366] transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7A7A7] block">
                      Instant WhatsApp
                    </span>
                    <span className="text-base sm:text-lg font-bold text-[#25D366] group-hover:brightness-110 transition-colors">
                      +91 96104 48836
                    </span>
                  </div>
                </a>

                {/* Office Location */}
                <div className="flex items-start gap-4 p-4 rounded-lg bg-[#0E0F14] border border-[#262833]">
                  <div className="w-10 h-10 rounded bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#A7A7A7] block">
                      Office Address
                    </span>
                    <span className="text-sm font-medium text-[#F5F1E8] block">
                      {COMPANY.officeAddress}
                    </span>
                    <span className="text-xs text-[#A7A7A7] block mt-1">
                      {COMPANY.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Box */}
            <div className="bg-[#121318] border border-[#2A2B36] rounded-xl p-6">
              <h4 className="text-xs uppercase font-mono tracking-wider text-[#D4AF37] font-semibold mb-3">
                Our Customer Consultation Policy
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#A7A7A7]">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>No pushy sales calls; only technical &amp; structural guidance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Free initial plot inspection within Jaipur municipal limits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>Transparent item-by-item BOQ quotation with material brand lists.</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Site-Visit Form */}
          <div className="lg:col-span-7 bg-[#14151C] border border-[#D4AF37]/35 rounded-xl p-6 sm:p-10 shadow-2xl relative">
            
            {submittedData ? (
              /* Demonstration Submission Success State */
              <div className="text-center py-6 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F1E8] mb-2">
                  Enquiry Prepared Successfully!
                </h3>

                <p className="text-sm text-[#A7A7A7] max-w-lg mx-auto mb-6">
                  Thank you, <strong className="text-[#F5F1E8]">{submittedData.fullName}</strong>. 
                  Your project requirements for your plot in <strong className="text-[#D4AF37]">{submittedData.plotLocation === 'Other Area in Jaipur' ? submittedData.customLocation : submittedData.plotLocation}</strong> have been reviewed.
                </p>

                {/* Demonstration Mode Honest Notice */}
                <div className="p-4 rounded-lg bg-[#0B0C10] border border-[#D4AF37]/40 text-left mb-6 text-xs text-[#A7A7A7] space-y-2">
                  <p className="text-[#D4AF37] font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    Frontend Demonstration Mode Notice
                  </p>
                  <p>
                    Because this first version does not store records in an automated cloud database, click the button below to instantly transmit your exact details to our team on WhatsApp, or call us directly!
                  </p>
                </div>

                {/* Summary Box */}
                <div className="bg-[#0E0F14] border border-[#252733] rounded-lg p-4 mb-6 text-left text-xs sm:text-sm space-y-1.5">
                  <div className="flex justify-between text-[#A7A7A7]">
                    <span>Mobile:</span>
                    <span className="font-mono text-[#F5F1E8]">{submittedData.mobileNumber}</span>
                  </div>
                  <div className="flex justify-between text-[#A7A7A7]">
                    <span>Type of Work:</span>
                    <span className="text-[#F5F1E8]">{submittedData.workType}</span>
                  </div>
                  {submittedData.siteVisitDate && (
                    <div className="flex justify-between text-[#A7A7A7]">
                      <span>Requested Site Visit:</span>
                      <span className="text-[#D4AF37] font-medium">
                        {submittedData.siteVisitDate} ({submittedData.preferredTime})
                      </span>
                    </div>
                  )}
                </div>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                  <a
                    href={generateWhatsAppFromSubmission(submittedData)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#25D366] text-white text-sm font-semibold hover:brightness-105 transition-all shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Details to WhatsApp Now</span>
                  </a>

                  <a
                    href={COMPANY.phoneTel}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 text-sm font-semibold transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call To Confirm: 9610448836</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-[#A7A7A7] hover:text-[#F5F1E8] underline mt-3 cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              /* The Form */
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#F5F1E8] mb-1">
                    Plot Consultation &amp; Site-Visit Form
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A7A7A7]">
                    Fields marked with <span className="text-[#D4AF37]">*</span> are required.
                  </p>
                </div>

                <div className="space-y-4">
                  
                  {/* Full Name & Mobile Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5">
                        Full Name <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Rajesh Sharma"
                          className={`w-full bg-[#0E0F14] border ${
                            errors.fullName ? 'border-red-500' : 'border-[#2D2E3B] focus:border-[#D4AF37]'
                          } rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E8] placeholder-[#666] outline-none transition-colors`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5">
                        Mobile Number <span className="text-[#D4AF37]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          maxLength={10}
                          value={formData.mobileNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              mobileNumber: e.target.value.replace(/\D/g, ''),
                            })
                          }
                          placeholder="10-digit number (e.g. 9610448836)"
                          className={`w-full bg-[#0E0F14] border ${
                            errors.mobileNumber ? 'border-red-500' : 'border-[#2D2E3B] focus:border-[#D4AF37]'
                          } rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E8] placeholder-[#666] outline-none transition-colors font-mono`}
                        />
                      </div>
                      {errors.mobileNumber && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.mobileNumber}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Plot Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5">
                        Email Address <span className="text-[#A7A7A7] text-[10px] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@example.com"
                        className={`w-full bg-[#0E0F14] border ${
                          errors.email ? 'border-red-500' : 'border-[#2D2E3B] focus:border-[#D4AF37]'
                        } rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E8] placeholder-[#666] outline-none transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5">
                        Plot Location in Jaipur <span className="text-[#D4AF37]">*</span>
                      </label>
                      <select
                        value={formData.plotLocation}
                        onChange={(e) => setFormData({ ...formData, plotLocation: e.target.value })}
                        className="w-full bg-[#0E0F14] border border-[#2D2E3B] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E8] outline-none transition-colors"
                      >
                        {JAIPUR_POPULAR_AREAS.map((area) => (
                          <option key={area} value={area} className="bg-[#14151B]">
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Custom location field if "Other Area" chosen */}
                  {formData.plotLocation === 'Other Area in Jaipur' && (
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5">
                        Specify Your Locality / Colony in Jaipur <span className="text-[#D4AF37]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.customLocation}
                        onChange={(e) => setFormData({ ...formData, customLocation: e.target.value })}
                        placeholder="e.g. Shyam Nagar, Ajmer Road"
                        className={`w-full bg-[#0E0F14] border ${
                          errors.customLocation ? 'border-red-500' : 'border-[#2D2E3B] focus:border-[#D4AF37]'
                        } rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E8] placeholder-[#666] outline-none transition-colors`}
                      />
                      {errors.customLocation && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.customLocation}</span>
                        </p>
                      )}
                    </div>
                  )}

                  {/* Plot Size & Type of Work */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5">
                        Plot Size <span className="text-[#A7A7A7] text-[10px] font-normal">(Optional)</span>
                      </label>
                      <select
                        value={formData.plotSize}
                        onChange={(e) => setFormData({ ...formData, plotSize: e.target.value })}
                        className="w-full bg-[#0E0F14] border border-[#2D2E3B] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E8] outline-none transition-colors"
                      >
                        <option value="100 Gaj (900 sq. ft.)">100 Gaj (900 sq. ft.)</option>
                        <option value="150 Gaj (1350 sq. ft.)">150 Gaj (1350 sq. ft.)</option>
                        <option value="200 Gaj (1800 sq. ft.)">200 Gaj (1800 sq. ft.)</option>
                        <option value="250 Gaj (2250 sq. ft.)">250 Gaj (2250 sq. ft.)</option>
                        <option value="300+ Gaj (2700+ sq. ft.)">300+ Gaj (Large Villa Plot)</option>
                        <option value="Under 100 Gaj">Under 100 Gaj (Compact Plot)</option>
                        <option value="Plot details to be discussed">To be discussed</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5">
                        Type of Work Required
                      </label>
                      <select
                        value={formData.workType}
                        onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
                        className="w-full bg-[#0E0F14] border border-[#2D2E3B] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E8] outline-none transition-colors"
                      >
                        <option value="Complete House Construction">Complete House Construction (Turnkey)</option>
                        <option value="Foundation and Structural Work">Foundation &amp; Structural (RCC Frame)</option>
                        <option value="Brickwork and Plastering">Brickwork &amp; Plastering</option>
                        <option value="Flooring, Painting and Finishing">Flooring, Painting &amp; Finishing</option>
                        <option value="Renovation and Home Improvement">Renovation / Floor Extension</option>
                        <option value="Construction Consultation">Construction Consultation &amp; BOQ</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget & Site Visit Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5">
                        Approximate Budget Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full bg-[#0E0F14] border border-[#2D2E3B] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E8] outline-none transition-colors"
                      >
                        <option value="₹20 Lakhs - ₹35 Lakhs">₹20 Lakhs – ₹35 Lakhs</option>
                        <option value="₹35 Lakhs - ₹55 Lakhs">₹35 Lakhs – ₹55 Lakhs</option>
                        <option value="₹55 Lakhs - ₹80 Lakhs">₹55 Lakhs – ₹80 Lakhs</option>
                        <option value="₹80 Lakhs - ₹1.2 Crore">₹80 Lakhs – ₹1.2 Crore</option>
                        <option value="₹1.2 Crore+ (Luxury Villa)">₹1.2 Crore+ (Luxury Villa)</option>
                        <option value="Flexible / To be estimated">Flexible / Needs Assessment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5">
                        Preferred Site Visit Date <span className="text-[#A7A7A7] text-[10px] font-normal">(Optional)</span>
                      </label>
                      <input
                        type="date"
                        min={today}
                        value={formData.siteVisitDate}
                        onChange={(e) => setFormData({ ...formData, siteVisitDate: e.target.value })}
                        className={`w-full bg-[#0E0F14] border ${
                          errors.siteVisitDate ? 'border-red-500' : 'border-[#2D2E3B] focus:border-[#D4AF37]'
                        } rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E8] outline-none transition-colors font-mono`}
                      />
                      {errors.siteVisitDate && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 shrink-0" />
                          <span>{errors.siteVisitDate}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Preferred Time Slot */}
                  {formData.siteVisitDate && (
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5">
                        Preferred Time Window for Site Visit
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-[#0E0F14] border border-[#2D2E3B] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E8] outline-none transition-colors"
                      >
                        <option value="Morning (10:00 AM - 1:00 PM)">Morning (10:00 AM – 1:00 PM)</option>
                        <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM – 4:00 PM)</option>
                        <option value="Evening (4:00 PM - 7:00 PM)">Evening (4:00 PM – 7:00 PM)</option>
                      </select>
                      <p className="text-[11px] text-[#A7A7A7]/80 mt-1">
                        * Note: Requested site visit slots will be confirmed with you via phone call or WhatsApp before our engineer arrives.
                      </p>
                    </div>
                  )}

                  {/* Message / Requirements */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5">
                      Project Details / Special Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your plot orientation, family needs (e.g. 3BHK duplex, car parking, Vastu preference), or specific questions."
                      className="w-full bg-[#0E0F14] border border-[#2D2E3B] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-sm text-[#F5F1E8] placeholder-[#666] outline-none transition-colors"
                    />
                  </div>

                  {/* Follow-up Consent Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded bg-[#0E0F14] border-[#2D2E3B] text-[#D4AF37] focus:ring-[#D4AF37] accent-[#D4AF37]"
                      />
                      <span className="text-xs text-[#A7A7A7] leading-relaxed">
                        I consent to Shree Shyam Constructions contacting me via phone call or WhatsApp regarding my residential plot construction in Jaipur.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] text-[#0B0B0B] text-sm font-bold tracking-wide hover:brightness-105 active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer shadow-lg shadow-[#D4AF37]/15"
                    >
                      {isSubmitting ? (
                        <span>Processing Consultation Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#0B0B0B]" />
                          <span>Submit Consultation Request</span>
                        </>
                      )}
                    </button>
                  </div>

                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
