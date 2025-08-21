import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Info } from "lucide-react";

interface MapLocationProps {
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  embedUrl?: string;
  directions?: string;
  parkingInfo?: string;
  officeHours?: string[];
}

const MapLocation = ({
  address = "6161 Savoy Dr #610",
  city = "Houston",
  state = "TX",
  zip = "77036",
  embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.4876111380313!2d-95.49860492392756!3d29.72386597564055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c19c3d6b30a9%3A0x3bd7a4edc78b2ae1!2s6161%20Savoy%20Dr%20%23610%2C%20Houston%2C%20TX%2077036!5e0!3m2!1sen!2sus!4v1693248938619!5m2!1sen!2sus",
  directions = "Located in the Savoy Office Park, Building 6161, Suite 610. Entrance is on the east side of the building.",
  parkingInfo = "Free parking available in the office complex parking lot.",
  officeHours = [
    "Monday: 9:00 AM - 5:00 PM",
    "Tuesday: 9:00 AM - 5:00 PM",
    "Wednesday: 9:00 AM - 5:00 PM",
    "Thursday: 9:00 AM - 5:00 PM",
    "Friday: 9:00 AM - 5:00 PM",
    "Saturday - Sunday: Closed",
  ],
}: MapLocationProps) => {
  const fullAddress = `${address}, ${city}, ${state} ${zip}`;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullAddress)}`;

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Map Embed */}
        <div className="w-full lg:w-3/5">
          <div className="aspect-video w-full h-full rounded-lg overflow-hidden border border-gray-200 min-h-[300px] md:min-h-[400px]">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="AP CPA PLLC Office Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Location Information */}
        <div className="w-full lg:w-2/5">
          <Card className="h-full">
            <CardContent className="pt-6">
              <div className="space-y-6">
                {/* Address Section */}
                <div className="space-y-2">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg">Our Office</h3>
                      <p className="text-gray-700">{address}</p>
                      <p className="text-gray-700">
                        {city}, {state} {zip}
                      </p>
                    </div>
                  </div>
                  <div className="pl-7">
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 text-blue-600 min-h-[44px] px-4"
                      onClick={() => window.open(googleMapsUrl, "_blank")}
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg">Office Hours</h3>
                      <ul className="text-gray-700 space-y-1">
                        {officeHours.map((hours, index) => (
                          <li key={index}>{hours}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-lg">
                        Visitor Information
                      </h3>
                      <p className="text-gray-700">{directions}</p>
                      <p className="text-gray-700 mt-2">{parkingInfo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MapLocation;
