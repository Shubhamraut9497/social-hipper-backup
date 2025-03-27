import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Globe, ChevronRight, Target, Filter, MapPin, Wallet, Layout, Users } from 'lucide-react';

const PreviewLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Glass Header */}
      <div className="sticky top-0 backdrop-blur-md bg-white/70 border-b border-white/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Campaign Preview
              </h1>
              <p className="text-gray-500 text-sm">Last updated: 26 Nov, 2024</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="border-2">
                <Phone className="mr-2 h-4 w-4" />
                Contact
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Wallet className="mr-2 h-4 w-4" />
                Pay Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Basic Information */}
            <Card className="backdrop-blur-lg bg-white/60 border-0 shadow-lg">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg font-semibold">Basic Information</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/40 to-white/80 backdrop-blur-sm border border-white/20">
                    <p className="text-sm text-gray-500 mb-1">Full Name</p>
                    <p className="font-medium text-gray-900">Aniket Pradhan</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/40 to-white/80 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-500" />
                      <p className="font-medium text-gray-900">aniket@shootorder.in</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/40 to-white/80 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-500" />
                      <p className="font-medium text-gray-900">9437751812</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/40 to-white/80 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-blue-500" />
                      <p className="font-medium text-gray-900">www.shootorder.in</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Campaign Details */}
            <Card className="backdrop-blur-lg bg-white/60 border-0 shadow-lg">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <Target className="h-5 w-5 text-purple-600" />
                  </div>
                  <h2 className="text-lg font-semibold">Campaign Details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/40 to-white/80 backdrop-blur-sm border border-white/20">
                    <p className="text-sm text-gray-500 mb-1">Campaign Name</p>
                    <p className="font-medium text-gray-900">Test Campaign</p>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/40 to-white/80 backdrop-blur-sm border border-white/20">
                    <p className="text-sm text-gray-500 mb-1">Objective</p>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-500"></span>
                      <p className="font-medium text-gray-900">Brand Awareness</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/40 to-white/80 backdrop-blur-sm border border-white/20">
                    <p className="text-sm text-gray-500 mb-1">Network</p>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
                      <p className="font-medium text-gray-900">Websites</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Targeting Details */}
            <Card className="backdrop-blur-lg bg-white/60 border-0 shadow-lg">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-green-100">
                    <Filter className="h-5 w-5 text-green-600" />
                  </div>
                  <h2 className="text-lg font-semibold">Targeting Details</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/40 to-white/80 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <MapPin className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Locations</p>
                        <p className="font-medium text-gray-900">All Regions</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-br from-white/40 to-white/80 backdrop-blur-sm border border-white/20">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <Globe className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Languages</p>
                        <p className="font-medium text-gray-900">All Languages</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Summary Section */}
          <div className="lg:col-span-4">
            <Card className="sticky top-24 backdrop-blur-lg bg-white/60 border-0 shadow-lg">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Layout className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-lg font-semibold">Campaign Summary</h2>
                </div>

                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                    <p className="text-sm font-medium text-gray-600">Campaign Type</p>
                    <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      OTT
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10">
                    <p className="text-sm font-medium text-gray-600">Minimum Budget</p>
                    <p className="text-2xl font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      ₹5,000
                    </p>
                  </div>

                  <div className="border-t border-gray-200/50 pt-4">
                    <h3 className="text-sm font-medium text-gray-600 mb-3">Selected Ad Option</h3>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-white/40 to-white/80 backdrop-blur-sm border border-white/20">
                      <p className="font-medium text-gray-900">MX Local Masthead</p>
                      <p className="text-sm text-gray-500">Display Banner (320x50)</p>
                      <div className="mt-3 space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">CPM</span>
                          <span className="font-medium text-gray-900">70 INR</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">CPV</span>
                          <span className="font-medium text-gray-900">70 INR</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                      Proceed to Payment
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="w-full h-12">
                      Contact Support
                      <Phone className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewLayout;
