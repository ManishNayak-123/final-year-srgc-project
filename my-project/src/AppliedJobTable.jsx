
import React from 'react';
import { useSelector } from 'react-redux';
import { Briefcase, Building2, Calendar, ChevronRight } from 'lucide-react';

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector(store => store.job);
  const {applicants} = useSelector(store => store.application);

  // Status Style Helper
  const getStatusStyles = (status) => {
    switch (status?.toLowerCase()) {
      case 'rejected':
        return 'bg-rose-50 text-rose-600 ring-rose-500/20';
      case 'pending':
        return 'bg-amber-50 text-amber-600 ring-amber-500/20';
      case 'accepted':
        return 'bg-emerald-50 text-emerald-600 ring-emerald-500/20';
      default:
        return 'bg-gray-50 text-gray-600 ring-gray-500/20';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-[-20px] p-10">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 px-2 gap-4">
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight">Application Tracking</h3>
          <p className="text-gray-500 text-sm mt-1">Keep track of your journey with top companies</p>
        </div>
        <div className="flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl border border-indigo-100 shadow-sm">
          <Briefcase size={18} className="animate-pulse" />
          <span className="font-bold text-sm tracking-wide">
            {allAppliedJobs?.length || 0} Total Applications
          </span>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 overflow-hidden">
        {/* Desktop View (Visible on md+) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Company</th>
                <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Role</th>
                <th className="px-8 py-5 text-left text-xs font-bold text-gray-400 uppercase tracking-widest">Applied Date</th>
                <th className="px-8 py-5 text-right text-xs font-bold text-gray-400 uppercase tracking-widest">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {allAppliedJobs && allAppliedJobs.length > 0 ? (
                allAppliedJobs.map((appliedJob) => (
                  <tr key={appliedJob._id} className="group hover:bg-indigo-50/30 transition-all duration-300">
                    {/* Company Info */}
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                          {appliedJob?.job?.company?.logo ? (
                            <img src={appliedJob.job.company.logo} alt="logo" className="w-8 h-8 object-contain" />
                          ) : (
                            <Building2 size={24} />
                          )}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900 text-base">{appliedJob.job?.company?.name}</p>
                          <p className="text-gray-400 text-xs font-medium">{appliedJob.job?.location || 'Remote'}</p>
                        </div>
                      </div>
                    </td>

                    {/* Job Title */}
                    <td className="px-8 py-6">
                      <p className="font-semibold text-gray-700">{appliedJob.job?.title}</p>
                    </td>

                    {/* Date */}
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2 text-gray-500 font-medium">
                        <Calendar size={14} />
                        <span className="text-sm">
                          {appliedJob?.createdAt 
    ? appliedJob.createdAt.split("T")[0] 
    : applicants?.createdAt?.split("T")[0]}
                          </span>
                      </div>
                    </td>

                    {/* Status Badge */}
                    <td className="px-8 py-6 text-right">
                      <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black ring-1 ring-inset tracking-wide shadow-sm ${getStatusStyles(appliedJob.status)}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${appliedJob.status === 'accepted' ? 'bg-emerald-600' : appliedJob.status === 'rejected' ? 'bg-rose-600' : 'bg-amber-600'}`} />
                        {appliedJob.status?.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))
              ) : null}
            </tbody>
          </table>
        </div>

        {/* Mobile View (Visible on <md) */}
        <div className="md:hidden divide-y divide-gray-100">
          {allAppliedJobs?.map((appliedJob) => (
            <div key={appliedJob._id} className="p-6 active:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-indigo-500 border border-gray-100">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{appliedJob.job?.title}</h4>
                    <p className="text-sm text-gray-500">{appliedJob.job?.company?.name}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-[10px] font-black ring-1 ring-inset ${getStatusStyles(appliedJob.status)}`}>
                  {appliedJob.status?.toUpperCase()}
                </span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar size={14} />
                  <span className="text-xs font-medium">{appliedJob?.createdAt?.split("T")[0]}</span>
                </div>
                <button className="text-indigo-600 text-xs font-bold flex items-center gap-1">
                  View Details <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {(!allAppliedJobs || allAppliedJobs.length === 0) && (
          <div className="py-20 flex flex-col items-center justify-center text-center px-4">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4 text-gray-300">
              <Briefcase size={40} />
            </div>
            <h4 className="text-lg font-bold text-gray-800">No applications yet</h4>
            <p className="text-gray-500 max-w-xs mx-auto mt-1">Start your career journey by applying to some amazing opportunities.</p>
            <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200">
              Explore Jobs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppliedJobTable;