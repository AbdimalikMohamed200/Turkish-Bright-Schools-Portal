import React, { useState } from 'react';
import { X, CheckCircle2, ChevronRight, ChevronLeft, User, Phone, MapPin, Calendar, Building, Sparkles, Download, MessageSquare } from 'lucide-react';
import { EnrollmentFormData } from '../types';

interface AdmissionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLevel?: string;
}

export const AdmissionsModal: React.FC<AdmissionsModalProps> = ({
  isOpen,
  onClose,
  initialLevel,
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [formData, setFormData] = useState<EnrollmentFormData>({
    studentFirstName: '',
    studentLastName: '',
    dateOfBirth: '',
    gender: 'male',
    programLevel: (initialLevel as any) || 'primary',
    targetGrade: 'Grade 1',
    previousSchool: '',
    parentFullName: '',
    parentPhone: '+252 ',
    parentEmail: '',
    district: 'Hodan',
    campusPreference: 'hodan',
    requestedTour: false,
    notes: '',
  });

  const [applicationId, setApplicationId] = useState('');
  const [submittedTime, setSubmittedTime] = useState('');
  const todayInputValue = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .split('T')[0];

  if (!isOpen) return null;

  const handleLevelChange = (level: 'kindergarten' | 'primary' | 'high_school') => {
    let defaultGrade = 'Grade 1';
    if (level === 'kindergarten') defaultGrade = 'Placement on request';
    if (level === 'primary') defaultGrade = 'Grade 1';
    if (level === 'high_school') defaultGrade = 'Confirm with admissions';

    setFormData({
      ...formData,
      programLevel: level,
      targetGrade: defaultGrade,
      campusPreference: level === 'high_school' ? 'hodan' : 'daarusalaam',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const refId = `TBS-INQ-${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    const message = encodeURIComponent(
      [
        'Hello Turkish Bright Schools admissions.',
        `Inquiry reference: ${refId}`,
        `Student: ${formData.studentFirstName} ${formData.studentLastName}`,
        `Date of birth: ${formData.dateOfBirth}`,
        `Programme: ${formData.programLevel}`,
        `Grade: ${formData.targetGrade}`,
        `Guardian: ${formData.parentFullName}`,
        `Guardian phone: ${formData.parentPhone}`,
        `District: ${formData.district}`,
        `Preferred location: ${formData.campusPreference === 'hodan' ? 'Hodan' : 'Daarusalaam'}`,
        formData.notes ? `Notes: ${formData.notes}` : '',
      ].filter(Boolean).join('\n')
    );
    window.open(`https://wa.me/252610757575?text=${message}`, '_blank');
    setApplicationId(refId);
    setSubmittedTime(new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }));
    setStep(4);
  };

  const handleWhatsAppNotify = () => {
    const message = encodeURIComponent(
      `Hello Turkish Bright Schools admissions. Inquiry reference: ${applicationId}. Student: ${formData.studentFirstName} ${formData.studentLastName}. Grade: ${formData.targetGrade}. Guardian phone: ${formData.parentPhone}. Please guide me on the next steps.`
    );
    window.open(`https://wa.me/252610757575?text=${message}`, '_blank');
  };

  const validateStudentDetails = () => {
    if (!formData.studentFirstName || !formData.studentLastName) {
      alert('Please enter student first and last name');
      return false;
    }
    if (!formData.dateOfBirth) {
      alert('Please enter the student date of birth');
      return false;
    }
    if (formData.dateOfBirth > todayInputValue) {
      alert('Date of birth cannot be in the future');
      return false;
    }
    return true;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-surface rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl border border-outline-variant/40 my-8">
        {/* Header */}
        <div className="bg-primary text-white p-5 sm:p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 bg-secondary/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-tertiary-fixed" />
            <span>Admissions & Placement</span>
          </div>

          <h2 className="text-2xl font-bold font-h3 text-white">
            Student Enrollment Application
          </h2>
          <p className="text-xs sm:text-sm text-primary-fixed-dim mt-1">
            Ask about current placement at Turkish Bright Schools Mogadishu locations
          </p>

          {/* Stepper (Steps 1-3) */}
          {step < 4 && (
            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-white/15 text-xs font-semibold">
              <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-tertiary-fixed' : 'text-white/50'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 1 ? 'bg-tertiary-fixed text-primary font-bold' : 'bg-white/20 text-white'}`}>1</span>
                <span>Student</span>
              </div>
              <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-tertiary-fixed' : 'text-white/50'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 2 ? 'bg-tertiary-fixed text-primary font-bold' : 'bg-white/20 text-white'}`}>2</span>
                <span>Guardian</span>
              </div>
              <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-tertiary-fixed' : 'text-white/50'}`}>
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${step >= 3 ? 'bg-tertiary-fixed text-primary font-bold' : 'bg-white/20 text-white'}`}>3</span>
                <span>Review</span>
              </div>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {step === 1 && (
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                <User className="w-5 h-5 text-secondary" />
                <span>Student Details</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mahad"
                    value={formData.studentFirstName}
                    onChange={(e) => setFormData({ ...formData, studentFirstName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Last Name / Surname *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Warsame"
                    value={formData.studentLastName}
                    onChange={(e) => setFormData({ ...formData, studentLastName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    max={todayInputValue}
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Gender *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>

              {/* Program Level Select */}
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-2">
                  Academic Program Level *
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => handleLevelChange('kindergarten')}
                    className={`py-3 px-2 text-center rounded-xl border font-semibold text-xs sm:text-sm cursor-pointer transition-all ${
                      formData.programLevel === 'kindergarten'
                        ? 'border-primary bg-primary text-white shadow-xs'
                        : 'border-outline-variant bg-white text-on-surface hover:bg-surface-container-low'
                    }`}
                  >
                    Early Learning
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLevelChange('primary')}
                    className={`py-3 px-2 text-center rounded-xl border font-semibold text-xs sm:text-sm cursor-pointer transition-all ${
                      formData.programLevel === 'primary'
                        ? 'border-secondary bg-secondary text-white shadow-xs'
                        : 'border-outline-variant bg-white text-on-surface hover:bg-surface-container-low'
                    }`}
                  >
                    Primary & Middle School
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLevelChange('high_school')}
                    className={`py-3 px-2 text-center rounded-xl border font-semibold text-xs sm:text-sm cursor-pointer transition-all ${
                      formData.programLevel === 'high_school'
                        ? 'border-primary-container bg-primary-container text-white shadow-xs'
                        : 'border-outline-variant bg-white text-on-surface hover:bg-surface-container-low'
                    }`}
                  >
                    Secondary Placement
                  </button>
                </div>
              </div>

              {/* Target Grade */}
              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Grade Applying For *
                </label>
                <select
                  value={formData.targetGrade}
                  onChange={(e) => setFormData({ ...formData, targetGrade: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                >
                  {formData.programLevel === 'kindergarten' && (
                    <>
                      <option value="Placement on request">Placement on request</option>
                    </>
                  )}
                  {formData.programLevel === 'primary' && (
                    <>
                      <option value="Grade 1">Grade 1 (Primary)</option>
                      <option value="Grade 2">Grade 2 (Primary)</option>
                      <option value="Grade 3">Grade 3 (Primary)</option>
                      <option value="Grade 4">Grade 4 (Primary)</option>
                      <option value="Grade 5">Grade 5 (Primary)</option>
                      <option value="Grade 6">Grade 6 (Middle/Upper Primary)</option>
                      <option value="Grade 7">Grade 7 (Middle/Upper Primary)</option>
                      <option value="Grade 8">Grade 8 (Middle/Upper Primary)</option>
                    </>
                  )}
                  {formData.programLevel === 'high_school' && (
                    <>
                      <option value="Confirm with admissions">Confirm with admissions</option>
                    </>
                  )}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Previous School Attended (If Applicable)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mogadishu International Academy"
                  value={formData.previousSchool}
                  onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                />
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    if (validateStudentDetails()) setStep(2);
                  }}
                  className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-container active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Next: Guardian Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                <Phone className="w-5 h-5 text-secondary" />
                <span>Parent / Guardian Information</span>
              </h3>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Parent / Guardian Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Ahmed Hassan Warsame"
                  value={formData.parentFullName}
                  onChange={(e) => setFormData({ ...formData, parentFullName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+252 61 XXX XXXX"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                  />
                  <span className="text-[11px] text-on-surface-variant mt-1 block">
                    Admissions updates and interview invites sent here via WhatsApp.
                  </span>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="parent@example.com"
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    District in Mogadishu *
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                  >
                    <option value="Hodan">Hodan District</option>
                    <option value="Daarusalaam">Daarusalaam</option>
                    <option value="Hamar Weyne">Hamar Weyne</option>
                    <option value="Hawl Wadag">Hawl Wadag</option>
                    <option value="Waberi">Waberi District</option>
                    <option value="Bondhere">Bondhere</option>
                    <option value="Yaqshid">Yaqshid</option>
                    <option value="Karan">Karan</option>
                    <option value="Daresalam">Daresalam City</option>
                    <option value="Daynile">Daynile</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                    Preferred Campus
                  </label>
                  <select
                    value={formData.campusPreference}
                    onChange={(e) => setFormData({ ...formData, campusPreference: e.target.value as any })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                  >
                    <option value="hodan">Hodan Main Campus (Digfeer Road)</option>
                    <option value="daarusalaam">Daarusalaam location (near Buruuji)</option>
                  </select>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/50 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="tour-check"
                  checked={formData.requestedTour}
                  onChange={(e) => setFormData({ ...formData, requestedTour: e.target.checked })}
                  className="w-4 h-4 rounded text-secondary focus:ring-secondary"
                />
                <label htmlFor="tour-check" className="text-xs sm:text-sm font-semibold text-primary cursor-pointer">
                  Please contact me about visiting the most convenient school location.
                </label>
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 border border-outline-variant text-on-surface font-semibold rounded-xl hover:bg-surface-container-high transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.parentFullName || !formData.parentPhone) {
                      alert('Please enter guardian name and phone number');
                      return;
                    }
                    setStep(3);
                  }}
                  className="px-6 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-container active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Review Application</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg text-primary flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                <span>Confirm & Send Inquiry</span>
              </h3>

              <div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/60 flex flex-col gap-3 text-sm">
                <div className="flex justify-between border-b border-outline-variant/40 pb-2">
                  <span className="text-on-surface-variant font-medium">Student:</span>
                  <span className="font-bold text-primary">{formData.studentFirstName} {formData.studentLastName} ({formData.gender})</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/40 pb-2">
                  <span className="text-on-surface-variant font-medium">Applying For:</span>
                  <span className="font-bold text-secondary">{formData.targetGrade} • {formData.programLevel.toUpperCase().replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/40 pb-2">
                  <span className="text-on-surface-variant font-medium">Parent / Guardian:</span>
                  <span className="font-semibold text-primary">{formData.parentFullName}</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant/40 pb-2">
                  <span className="text-on-surface-variant font-medium">Contact Phone:</span>
                  <span className="font-semibold text-primary">{formData.parentPhone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant font-medium">Campus & District:</span>
                  <span className="font-semibold text-primary">{formData.campusPreference === 'hodan' ? 'Hodan location' : 'Daarusalaam location'} ({formData.district})</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-on-surface-variant uppercase mb-1">
                  Additional Notes or Special Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention any health notes, placement questions, or siblings already enrolled..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-outline-variant focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none text-sm bg-white"
                />
              </div>

              <div className="p-3 bg-secondary/10 border border-secondary/20 rounded-xl text-xs text-secondary leading-relaxed">
                <strong>Next Step Notice:</strong> Your details will open in WhatsApp. Send the prepared message so the admissions team can confirm availability and guide you about the next steps.
              </div>

              <div className="pt-4 flex justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 border border-outline-variant text-on-surface font-semibold rounded-xl hover:bg-surface-container-high transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-8 py-3.5 bg-tertiary-fixed text-on-tertiary-fixed font-bold rounded-xl hover:bg-tertiary-fixed-dim active:scale-95 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Send Details to WhatsApp</span>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="flex flex-col items-center text-center py-4 gap-4 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-full bg-secondary/15 flex items-center justify-center text-secondary mb-1">
                <CheckCircle2 className="w-10 h-10 text-secondary" />
              </div>

              <span className="text-xs font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-3 py-1 rounded-full">
                WhatsApp Inquiry Prepared
              </span>

              <h3 className="text-2xl font-bold text-primary font-h3">
                Continue in WhatsApp
              </h3>

              <p className="text-sm text-on-surface-variant max-w-md">
                Your admission details are ready to send to Turkish Bright Schools. WhatsApp will open so the admissions team can confirm availability and the next steps.
              </p>

              {/* Reference Card */}
              <div className="w-full bg-surface-container-low border border-outline-variant/60 rounded-xl p-4 my-2 text-left flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs text-on-surface-variant">
                  <span>Inquiry Reference</span>
                  <span className="font-mono bg-white px-2 py-0.5 rounded border border-outline-variant font-bold text-primary">
                    {applicationId}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs text-on-surface-variant">
                  <span>Submission Date</span>
                  <span className="font-semibold text-primary">{submittedTime}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-on-surface-variant">
                  <span>Assigned Campus</span>
                  <span className="font-semibold text-primary">
                    {formData.campusPreference === 'hodan' ? 'Hodan location' : 'Daarusalaam location'}
                  </span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full mt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppNotify}
                  className="flex-1 bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Details on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 bg-surface-container-high text-primary font-bold rounded-xl hover:bg-surface-variant transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
