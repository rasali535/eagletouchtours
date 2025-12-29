import React from 'react';
import { Mail, Phone, Globe, Smartphone } from 'lucide-react';
import { activities } from '@/data/activities';

const PriceList = React.forwardRef((props, ref) => {
  const comboPackages = [
    { name: 'Adventure Pass 1', price: 360, items: ['A Sunset Cruise + chose any 2 below:', 'Highwire pass', '12/13 minute Helicopter', 'Night Drive'] },
    { name: 'Adventure Pass 2', price: 300, items: ['A Sunset Cruise + chose any 2 below:', 'Elephant Encounter', 'Solo Zip line or Gorge swing', 'White water Rafting'] },
    { name: 'Safari Pass 1', price: 326, items: ['A Chobe day trip + chose any 1 below:', 'Highwire pass', '12/13 minute Helicopter', 'Night Drive'] },
    { name: 'Safari Pass 2', price: 290, items: ['A Chobe day trip + chose any 1 below:', 'Elephant Encounter', 'Solo Zip line or Gorge swing', 'White water Rafting'] },
    { name: 'Vic Falls Classic', price: 53, items: ['Falls Tour + Lunch at Lookout Cafe'] },
    { name: 'The Eagle Classic', price: 215, items: ['Helicopter + Falls Tour + Sundowner Cruise', '+ Add lookout Lunch $245'] },
    { name: 'Zambezi Classic', price: 77, items: ['Falls Tour + Sundowner Cruise', '+ Add Lookout Lunch $98'] },
  ];

  const allSections = {
    River: activities.water,
    Safari: activities.safari,
    Adrenaline: activities.adrenaline,
    Air: activities.air,
    Tours: activities.land,
    Culture: activities.culture,
  };

  return (
    <div ref={ref} className="bg-white text-black p-6 font-sans" style={{ width: '210mm' }}>
      <div className="relative" style={{ minHeight: '297mm' }}>
        <div className="content-wrapper pb-32"> {/* Padding bottom to avoid overlap with footer */}
          <header className="flex justify-between items-center mb-4 border-b border-gray-300 pb-3">
            <div className="flex items-center">
              <img src="/logo.png" alt="Eagle Touch Tours Logo" className="h-20 mr-4" />
            </div>
            <div className="text-right text-xs">
              <div className="flex items-center justify-end mb-1"><Phone className="h-3 w-3 mr-2 text-gray-600" /><span>+263 71 309 3820</span></div>
              <div className="flex items-center justify-end mb-1"><Mail className="h-3 w-3 mr-2 text-gray-600" /><span>reservations@eagletouchtours.com</span></div>
              <div className="flex items-center justify-end mb-1"><Globe className="h-3 w-3 mr-2 text-gray-600" /><span>www.eagletouchtours.com</span></div>
              <div className="flex items-center justify-end"><Smartphone className="h-3 w-3 mr-2 text-green-600" /><span>+263 77 273 4176 (WhatsApp)</span></div>
            </div>
          </header>

          <div className="bg-yellow-400 text-black text-center py-1 my-3 rounded-sm">
            <h2 className="text-base font-bold">COMBO PACKAGES</h2>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
            {comboPackages.map(pkg => (
              <div key={pkg.name} className="bg-gray-100 p-2 rounded relative border border-gray-200 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-center text-sm text-gray-800 mb-1">{pkg.name}</h3>
                  {pkg.items.map((item, index) => (
                    <p key={index} className={`text-[9px] text-gray-700 ${index > 0 ? 'pl-2' : ''}`}>{item}</p>
                  ))}
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-2 bg-yellow-400 text-black rounded-full h-10 w-10 flex flex-col items-center justify-center text-[10px] font-bold text-center p-0.5">
                  <span>${pkg.price}</span>
                  <span className="text-[6px] leading-none tracking-tighter">(Excl. Park Fees)</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-x-4 text-xs">
            {Object.entries(allSections).map(([sectionTitle, sectionActivities]) => (
              <div key={sectionTitle}>
                <h3 className="text-sm font-bold bg-gray-200 p-1 mb-2 text-center rounded-sm text-gray-800">{sectionTitle.toUpperCase()}</h3>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-400">
                      <th className="text-left font-semibold pb-1 text-[10px]">Activity</th>
                      <th className="text-right font-semibold pb-1 text-[10px]">US$</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sectionActivities.map(act => (
                      <tr key={act.id} className="border-b border-gray-300 align-top">
                        <td className="py-1 text-gray-800 text-[9px]">{act.title}</td>
                        <td className="py-1 text-right text-gray-800 text-[9px] font-semibold flex flex-col items-end">
                          <span>${act.price}</span>
                           <span className="text-[7px] leading-none font-normal">(Excl. Fees)</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>

        <footer className="absolute bottom-4 left-6 right-6 text-center text-[8px] text-gray-600">
          <p className="font-bold bg-red-500 text-white py-1 rounded-sm text-[9px]">ALL PRICES EXCLUDE NATIONAL PARK FEES. ALL ACTIVITIES SUBJECT TO AVAILABILITY.</p>
          <p className="mt-1">All prices are US$ and per person. Rates subject to change. All prices exclude National Parks / Visa fees / Zambia transfers. Seasonal Availability dependant on river level.</p>
          <div className="mt-1 flex justify-center gap-4">
            <p><span className="font-bold text-gray-800">Green Season:</span> 6 Jan - high water closedate, 1 - 15 Dec</p>
            <p><span className="font-bold text-gray-800">High Season:</span> 1 Jan - 5 Jan, 1 July - 30 Nov, 16 - 31 Dec, dependent on river levels</p>
          </div>
        </footer>
      </div>
    </div>
  );
});

PriceList.displayName = "PriceList";
export default PriceList;