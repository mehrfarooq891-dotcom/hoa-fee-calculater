import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Calculator from '@/src/components/Calculator';
import SEO from '@/src/components/SEO';

interface NeighborhoodData {
  type: string;
  monthly: number;
  annual: number;
  included: string;
}

interface FAQData {
  q: string;
  a: string;
}

interface CityConfig {
  cityName: string;
  stateName: string;
  intro: string;
  tableData: NeighborhoodData[];
  faqs: FAQData[];
}

const citiesData: Record<string, CityConfig> = {
  'austin-texas': {
    cityName: 'Austin',
    stateName: 'Texas',
    intro: 'The Austin real estate market has seen explosive growth in master-planned communities across suburban areas and high-rise developments downtown. This rise has led to higher average HOA fees, which are used to maintain neighborhood parks, gated entries, and premium community pools in areas like West Lake Hills, Steiner Ranch, and Mueller. Navigating these fees is critical for buyers who need to balance their mortgage estimates with escalating monthly dues. Homeowners associations in Travis County have also implemented stricter design guidelines to protect home values amid rapid suburban sprawl.',
    tableData: [
      { type: 'Downtown Condo', monthly: 520, annual: 6240, included: '24/7 concierge, rooftop pool, fitness center, secure garage parking, water & trash utilities' },
      { type: 'Master-Planned Suburban', monthly: 145, annual: 1740, included: 'Steiner Ranch style pools, community center, tennis courts, playground maintenance, common area landscaping' },
      { type: 'Mid-Rise Townhome', monthly: 280, annual: 3360, included: 'Exterior building insurance, roof maintenance, private road upkeep, gated entry control' },
      { type: 'Standard Suburban HOA', monthly: 65, annual: 780, included: 'Common area green belt mowing, neighborhood streetlights, basic architectural review panel' }
    ],
    faqs: [
      { q: 'Are HOA fees rising fast in Austin?', a: 'Yes, several Austin communities are experiencing post-pandemic fee increases of 4% to 8% to counter rising labor costs for landscaping, pool services, and construction materials.' },
      { q: 'What are the rules regarding drought landscaping and HOAs in Travis County?', a: 'Texas Property Code explicitly prevents HOAs from banning drought-resistant landscaping (xeriscaping) or artificial turf. However, Austin associations can still require you to submit aesthetic layouts for architectural approval before planting.' },
      { q: 'Do Steiner Ranch neighborhoods have separate HOA fees?', a: 'Steiner Ranch has a master association fee covering the extensive parks, pools, and community centers, but certain subdivisions may have localized sub-association fees on top of the master assessment.' },
      { q: 'Are municipal fees separate from HOA fees in Austin?', a: 'Yes. Austin Water and Austin Energy utility bills are independent city fees, unless you are in a downtown Austin condo where the association includes water/trash in its monthly maintenance.' }
    ]
  },
  'houston-texas': {
    cityName: 'Houston',
    stateName: 'Texas',
    intro: 'Houston\'s expansive suburban developments, particularly in areas like Katy, The Woodlands, and Sugar Land, rely heavily on master-planned HOAs to maintain custom drainage systems, security patrols, and community center amenities. Because Houston lacks traditional zoning laws, residential HOAs here play a vital role of setting deed restrictions and architectural codes. Fees can range from very low for simple suburban streets to substantial for custom master-planned enclaves. Understanding the long-term impact of these monthly dues is essential for buyers calculating their overall housing expense ratio in Harris County.',
    tableData: [
      { type: 'Ultra-Luxury High-Rise', monthly: 750, annual: 9000, included: '24/7 security, valet services, heated pool, private gym, structural reserve funds, trash & water' },
      { type: 'Master-Planned (Katy/Woodlands)', monthly: 125, annual: 1500, included: 'Resort-style water parks, miles of hiking trails, clubhouse access, security patrols, community events' },
      { type: 'Midtown Condo/Townhome', monthly: 310, annual: 3720, included: 'Gated driveway maintenance, building exterior painting, siding insurance, landscape care' },
      { type: 'Suburban Deed-Restricted HOA', monthly: 45, annual: 540, included: 'Deed restriction enforcement, basic neighborhood monument sign maintenance, park space care' }
    ],
    faqs: [
      { q: 'Why are HOA deed restrictions so important in Houston?', a: 'Because Houston has no formal zoning laws, HOA deed restrictions are the primary legal mechanism governing what can be built, commercial activities, and aesthetic regulations in residential neighborhoods.' },
      { q: 'How did Hurricane insurance affect Houston HOAs?', a: 'In recent years, rising property insurance costs along the Gulf Coast have forced many Houston associations to increase their monthly maintenance fees to cover skyrocketing premiums.' },
      { q: 'Are HOA trash services provided by Harris County?', a: 'In many unincorporated suburbs (like Katy or Cypress), the HOA hires private waste management companies and aggregates the fee into your monthly/annual dues, rather than relying on city services.' },
      { q: 'Can HOAs in Sugar Land issue fines for unkept lawns?', a: 'Yes. Sugar Land area HOAs set strict lawn care rules. Unsecured trash bins, overgrown weeds, and unapproved paint colors are common violations that attract warnings first, then recurring fines.' }
    ]
  },
  'miami-florida': {
    cityName: 'Miami',
    stateName: 'Florida',
    intro: 'In Miami, high-rise luxury condo towers dominate the skyline, carrying some of the highest HOA and maintenance fees in the country. These high-end developments in areas like Brickell, South Beach, and Sunny Isles Beach offer premium amenities such as rooftop pools, valet parking, private security, and direct beach access, which drive up operating budgets. Additionally, coastal exposure means substantial portions of Miami HOA board budgets are spent on mandatory structural building inspections, seawall maintenance, and escalating property insurance. Buyers must carefully analyze the financial stability of any Miami condo association\'s reserve fund to avoid massive surprise special assessments.',
    tableData: [
      { type: 'Brickell Luxury High-Rise', monthly: 890, annual: 10680, included: 'Ocean-front rooftop pools, high-speed elevators, valet, 24/7 front desk, structural insurance, seawall maintenance' },
      { type: 'Gated Waterfront Community', monthly: 420, annual: 5040, included: 'Guarded gatehouse, community boat ramp, canal dredging, private road maintenance, shared club amenities' },
      { type: 'Suburban Master-Planned', monthly: 185, annual: 2220, included: 'Clubhouse pool, modern fitness gym, playground upkeep, community landscaping, security patrols' },
      { type: 'Standard Townhome Community', monthly: 240, annual: 2880, included: 'Siding & roof maintenance, lawn irrigation, common walkways lighting, building hazard insurance' }
    ],
    faqs: [
      { q: 'What is Florida\'s SB 4-D and how does it impact Miami HOA fees?', a: 'Following the Surfside tragedy, Florida passed legislation requiring structural integrity reserve studies and full funding of reserves for buildings over three stories. This has caused Miami master condo fees to double or triple in some older towers.' },
      { q: 'How much of Miami HOA fees go towards insurance?', a: 'For oceanfront condominiums, master property insurance can eat up as much as 30% to 50% of the entire association\'s annual budget, contributing to severe monthly rate increases.' },
      { q: 'Do Miami townhomes have lower HOA fees than high-rise condos?', a: 'Generally yes. Since townhomes have fewer shared interior facilities (no elevators, interior corridors, or extensive parking garages), their dues are much lower than luxury Brickell apartments.' },
      { q: 'Are beachfront HOAs in Miami responsible for sea-wall repair?', a: 'Yes. Communities directly facing Biscayne Bay or the Atlantic are responsible for private shoreline defenses, making reserve funds for marine engineering vital.' }
    ]
  },
  'orlando-florida': {
    cityName: 'Orlando',
    stateName: 'Florida',
    intro: 'Orlando\'s tourism-driven economy has fostered unique vacation-home communities and resort-style neighborhoods that feature comprehensive HOAs managing short-term rent rules, massive clubhouse lazy rivers, and tennis complexes. Areas like Lake Nona and Baldwin Park require steady fees to keep shared landscapes pristine year-round. These communities often feature dual-layered fees to cover both the master association and local subdivision maintenance. Potential buyers should consider how Orlando\'s high-humidity climate affects shared exterior maintenance and long-term community reserves.',
    tableData: [
      { type: 'Resort-Style Short-Term Rental', monthly: 480, annual: 5760, included: 'Water park lazy river, daily pool cleaning, clubhouse bar access, gated security guards, cable & high-speed internet' },
      { type: 'Master-Planned Suburban', monthly: 160, annual: 1920, included: 'Lake Nona style community farm, pools, dog parks, playground maintenance, fiber-to-the-home prep' },
      { type: 'Standard Condominium', monthly: 340, annual: 4080, included: 'Exterior hazard master insurance, roof replacement reserves, water & waste utility, pool upkeep' },
      { type: 'Suburban Single-Family', monthly: 70, annual: 840, included: 'Common area lawn care, monument upkeep, subdivision entry lighting, architectural control administration' }
    ],
    faqs: [
      { q: 'Are golf-commute cart paths maintained by Orlando HOAs?', a: 'In resort communities like Reunion or Lake Nona, cart path maintenance, signal systems, and landscaping are funded via dedicated HOA master fees, keeping them private and well-kept.' },
      { q: 'How do short-term rentals affect Orlando HOA budgets?', a: 'Short-term rental communities suffer much higher wear-and-tear on amenities (pools, resort gyms). As a result, Orlando resort-style HOAs set aside significantly higher maintenance reserves.' },
      { q: 'Does Orange County water utility cover my lawn watering?', a: 'Most master-planned Orlando HOAs enforce smart irrigation using reclaimed water, which is managed and billed directly through the HOA master system, rather than individual utility accounts.' },
      { q: 'Do older Orlando condos have special assessments?', a: 'Yes. Due to Florida\'s Senate Bill 4-D, older condo complexes in Central Florida are facing robust mandatory building evaluations, forcing associations to catch up on underfunded roofs and concrete repair projects.' }
    ]
  },
  'los-angeles-california': {
    cityName: 'Los Angeles',
    stateName: 'California',
    intro: 'The Los Angeles metro area presents a diverse HOA landscape, from high-rise condo developments in Downtown LA and Century City to exclusive gated estates in Calabasas and Bel Air. Given the high cost of California land, shared common areas are extremely valuable and demand premium landscape maintenance, private security, and strict architectural oversight. Additionally, seismic insurance and structural retrofitting rules in Los Angeles County play a big role in driving monthly condo association dues up. Navigating these steep monthly dues is a vital step for homebuyers trying to secure a mortgage in Southern California.',
    tableData: [
      { type: 'Century City Luxury Condo', monthly: 950, annual: 11400, included: 'Earthquake insurance rider, 24/7 doorman, heated lap pool, fitness club, secure gate control, water & gas utilities' },
      { type: 'Gated Hills Community', monthly: 350, annual: 4200, included: 'Guarded entry, perimeter security, fire brush clearance, private road repaving, clubhouse' },
      { type: 'Modern SF Condo / Loft', monthly: 410, annual: 4920, included: 'Courtyard fire pits, security cams, secure parking space, roof deck upkeep, high-speed trash disposal' },
      { type: 'Suburban Master-Planned', monthly: 190, annual: 2280, included: 'Pool, spa, tennis courts, master greenway landscaping, local perimeter wall maintenance' }
    ],
    faqs: [
      { q: 'Does California\'s Davis-Stirling Act affect LA HOAs?', a: 'Yes, the Davis-Stirling Act is the primary civil code of California regulating HOAs, defining strict limits on how much boards can raise regular dues (capped at 20% per year without member votes).' },
      { q: 'Why are condo association fees so high in Downtown LA?', a: 'High-rise towers in DTLA carry extensive carrying costs, including expensive seismic structural insurance, 24/7 security staff, automated valet stackers, and strict city safety rules.' },
      { q: 'Can LA HOAs restrict electric vehicle charging?', a: 'California Civil Code protects your right to install an EV charger in your designated parking space. However, the HOA can dictate where cables run and require you to obtain personal liability insurance of $1 million.' },
      { q: 'Does fire hazard zoning apply to Los Angeles suburban HOAs?', a: 'Yes. HOAs in high-fire risk zones (like the Santa Monica Mountains or Calabasas) are required by law to complete yearly brush clearance, a cost passed directly into monthly homeowner assessments.' }
    ]
  },
  'san-diego-california': {
    cityName: 'San Diego',
    stateName: 'California',
    intro: 'San Diego offers breathtaking coastal and valley neighborhoods where master-planned associations are extremely popular for their resort-style pools, hiking trail systems, and ocean breezes. Communities like Carmel Valley, Eastlake, and Pacific Highlands Ranch require consistent HOA dues to sustain pristine common areas, water-efficient landscaping, and fire preventative clearing. For near-beach condo properties in downtown or La Jolla, parking garages and elevator maintenance represent significant recurring expenses. San Diego buyers must evaluate the association\'s annual reserve studies before closing on a home.',
    tableData: [
      { type: 'La Jolla Oceanfront Condo', monthly: 820, annual: 9840, included: 'Coastal structural upkeep, elevator service, heated pool, direct beach access, gated underground parking, master building insurance' },
      { type: 'Master-Planned Suburban', monthly: 155, annual: 1860, included: 'Carmel Valley style pools, recreation courts, extensive trail system, common area landscaping, regular security patrols' },
      { type: 'Urban Condo / Loft', monthly: 480, annual: 5760, included: 'Rooftop lounge, fitness center, bicycle storage room, 24-hr security cameras, building structural reserves' },
      { type: 'Suburban Townhouse', monthly: 290, annual: 3480, included: 'Exterior painting, roofing repairs, landscape irrigation, private trash collection, gated entry' }
    ],
    faqs: [
      { q: 'How do San Diego solar laws affect HOA rules?', a: 'Under CA law, San Diego HOAs are forbidden from prohibiting solar panels on roofs. They can, however, require standard aesthetic reviews to ensure wiring is hidden and panel placement meets simple guidelines.' },
      { q: 'Why does coastal exposure increase San Diego HOA fees?', a: 'Salty ocean air accelerates structural decay of stucco, wood, and concrete. Waterfront properties in Pacific Beach and La Jolla require frequent exterior paint coatings and glass corrosion treatments.' },
      { q: 'Are hiking trails in Carmel Valley maintained by the city or HOA?', a: 'While some trails are public, main trail systems within community boundaries are owned and maintained by the master HOA, funded directly by residents\' monthly dues.' },
      { q: 'Can my HOA in San Diego limit water use during dry seasons?', a: 'No. CA legislation prevents HOAs from fining residents who reduce watering or let their lawns go brown during declared state water emergencies. Many HOAs now fund turf replacement incentives.' }
    ]
  },
  'phoenix-arizona': {
    cityName: 'Phoenix',
    stateName: 'Arizona',
    intro: 'Phoenix\'s rapid desert expansion has resulted in thousands of master-planned communities that use HOA fees to manage desert-adaptive xeriscaping, community splash pads, and essential air-conditioned clubhouses. Given the intense summer heat, maintaining shared pool structures and shade sails is a major expense for associations in Scottsdale, Gilbert, and Peoria. Arizona law provides robust protections for homeowners regarding HOA regulation of solar panels and xeriscaping, but monthly dues continue to climb. Buyers in the Valley of the Sun should carefully calculate how monthly HOA payments affect their long-term homeownership budget.',
    tableData: [
      { type: 'North Scottsdale Master-Planned', monthly: 210, annual: 2520, included: 'Desert-adaptive landscape maintenance, resort pool, clubhouse AC gym, guarded entry gate, golf course coordination' },
      { type: 'Suburban Master-Planned', monthly: 115, annual: 1380, included: 'Splash pads, shade play areas, pool upkeep, community park space mowing, greenway maintenance' },
      { type: 'Tempe Modern Condo', monthly: 360, annual: 4320, included: 'Community pool cooling systems, building exterior, parking structure maintenance, master insurance, water' },
      { type: 'Standard Single-Family HOA', monthly: 60, annual: 720, included: 'Common property weed control, community monument signs, community website and architectural reviews' }
    ],
    faqs: [
      { q: 'Can Phoenix HOAs prevent xeriscaping or desert lawns?', a: 'No. Arizona state law prohibits HOAs from banning desert-friendly xeriscaping or forcing homeowners to maintain water-intensive real grass, helping homeowners slash utility costs.' },
      { q: 'Why can cooling system failures burden Phoenix condo HOAs?', a: 'Many Phoenix condo towers use centralized chiller cooling plants to air-condition the entire building. If a cooling tower fails in July, emergency repair costs can trigger instant structural special assessments.' },
      { q: 'Are gated communities in Scottsdale significantly more expensive?', a: 'Gated entrances (especially staffed gates) require secure infrastructure maintenance, private asphalt paving, and security personnel, raising Scottsdale HOA dues by $100-$300 monthly.' },
      { q: 'Is pool heating a major expense for Maricopa County HOAs?', a: 'Yes. While summers are hot, residents expect year-round pool access, requiring expensive natural gas heating systems through winter months, which is a major recurring expense.' }
    ]
  },
  'las-vegas-nevada': {
    cityName: 'Las Vegas',
    stateName: 'Nevada',
    intro: 'As one of the fastest-growing modern metros, Las Vegas is rich with master-planned communities like Summerlin and Green Valley that demand professional HOAs to manage extensive recreation spaces, gated access, and custom golf-course buffers. With strict desert water conservation mandates in Clark County, HOAs invest heavily in turf conversion and smart irrigation projects. High-rise condo complexes on or near the Las Vegas Strip feature top-tier services like concierge desks and fitness centers that are supported by high monthly dues. Homebuyers must factor these fixed carrying costs into their affordability index when exploring Nevada real estate.',
    tableData: [
      { type: 'High-Rise Strip Condo', monthly: 780, annual: 9360, included: 'Strip-view pools, valet parking, concierge services, indoor fitness, security guards, waste & water fees' },
      { type: 'Summerlin Master-Planned', monthly: 140, annual: 1680, included: 'Multiple community pools, tennis courts, miles of walking trails, desert landscaping, community events coordinator' },
      { type: 'Gated Golf-Course Community', monthly: 295, annual: 3540, included: 'Dual security guard gates, golf course perimeter landscaping, private roads, shared community facilities' },
      { type: 'Standard Suburban HOA', monthly: 55, annual: 660, included: 'Entry monument wall maintenance, pocket park landscaping, architectural review board, basic insurance' }
    ],
    faqs: [
      { q: 'How are Vegas HOAs responding to Southern NV water authority rules?', a: 'The SNWA enforces strict grass bans on decorative lawns. Las Vegas HOAs are actively spending reserve funds to convert grass areas to desert xeriscaping, which lowers their water bills long-term but requires upfront capital.' },
      { q: 'Are Summerlin master association fees separate from local subdivision fees?', a: 'Yes, Summerlin residents pay a primary master association fee for regional parks, and a second localized subdivision fee for neighborhood gating, alleys, or dedicated pools.' },
      { q: 'Do high-rise tower fees on the Strip include resort parking?', a: 'Yes, high-rise buildings (such as Veer Towers or Panorama) integrate secure garage space structures, secure access controls, and valet costs directly inside your monthly HOA dues.' },
      { q: 'Can a Las Vegas HOA fine you for storing an RV?', a: 'Almost all Vegas associations have strict deed restrictions banning the long-term parking of RVs, boats, or commercial trucks in driveways, resulting in quick active fining procedures.' }
    ]
  },
  'charlotte-north-carolina': {
    cityName: 'Charlotte',
    stateName: 'North Carolina',
    intro: 'The real estate market in Charlotte features a blend of historic tree-lined townhome developments in Dilworth and sprawling master-planned subdivisions in Ballantyne and nearby Huntersville. HOAs in the Queen City are tasked with maintaining community aesthetic standards, pocket parks, and swim clubs that attract families to the region. While North Carolina\'s HOA regulations are relatively balanced, recent inflation has pushed up the costs of regular asphalt repaving and pool operations, leading to higher monthly assessments. Prospective buyers should review the past five years of financial minutes of any Charlotte association to check for pending capital projects.',
    tableData: [
      { type: 'Uptown Mid-Rise Loft', monthly: 430, annual: 5160, included: 'Secure parking, elevator maintenance, roof deck pool, secure card reader access, building exterior insurance, trash/water' },
      { type: 'Ballantyne Suburban HOA', monthly: 95, annual: 1140, included: 'Swim club pool, playground maintenance, neighborhood tennis courts, common area landscape care' },
      { type: 'Suburban Townhouse Community', monthly: 230, annual: 2760, included: 'Roof repair and siding painting, gutter cleaning, lawn mowing, common parking repaving' },
      { type: 'Standard Single-Family Subdivision', monthly: 50, annual: 600, included: 'Neighborhood entrance signs, regulatory filing fees, decorative streetlighting, basic park space mowing' }
    ],
    faqs: [
      { q: 'How does the NC Planned Community Act protect Charlotte buyers?', a: 'The North Carolina Planned Community Act limits an HOA\'s power to fine homeowners to a maximum of $100 per day per violation and outlines clear notice and hearing rights before liens can be placed.' },
      { q: 'Why are tree canopy roots a cost factor for Charlotte HOAs?', a: 'Charlotte\'s dense willow oak canopy is beautiful, but growing roots frequently buckle shared community sidewalks and private neighborhood roads, prompting consistent HOA repaving bills.' },
      { q: 'Are Ballantyne HOA fees lower than Midtown Charlotte loft fees?', a: 'Yes. Sprawling single-family subdivisions in Ballantyne don\'t have building shells, elevators, or central fire life-safety structures to insure and maintain, resulting in dramatically lower dues.' },
      { q: 'What happens if a Charlotte neighborhood pool needs major repair?', a: 'If the reserve fund is underfunded, the board must vote for a \'special assessment\' (a lump-sum fee charged to all homeowners) or take out a bank loan amortized across future monthly dues.' }
    ]
  },
  'atlanta-georgia': {
    cityName: 'Atlanta',
    stateName: 'Georgia',
    intro: 'Atlanta’s beautiful, heavily wooded suburbs and modern mid-rise condos in Midtown feature robust homeowners and condo associations that oversee shared spaces. In neighborhoods like Buckhead, Alpharetta, and Inman Park, HOA dues are leveraged to manage private swim and tennis clubs, gated entries, and professional landscaping under massive forest canopies. Stormwater management and tree preservation are major concerns for Fulton and Cobb County associations, forming a substantial slice of annual budgets. Atlanta homebuyers need to carefully assess how recurring HOA fees will affect their long-term property appreciation and mortgage pre-approval status.',
    tableData: [
      { type: 'Midtown Condo Tower', monthly: 510, annual: 6120, included: 'Concierge pool, secure garage parking, secure elevator, fitness gym, structural maintenance reserves, water/sewer' },
      { type: 'Buckhead Luxury Gated Estates', monthly: 380, annual: 4560, included: 'Guarded gatehouse, street sweeping, private cul-de-sac paving, tennis court center, private security guard' },
      { type: 'Alpharetta Swim & Tennis HOA', monthly: 135, annual: 1620, included: 'Junior Olympic pool, multiple tennis courts, pavilion, playground, master landscape maintenance' },
      { type: 'Standard Metro-Atlanta Subdivision', monthly: 75, annual: 900, included: 'Wooded walking trails, retention pond management, neighborhood entry signs, architectural control enforcement' }
    ],
    faqs: [
      { q: 'Is storm runoff pond maintenance required by Atlanta HOAs?', a: 'Yes. Fulton County mandates that HOAs maintain professional retention and detention ponds to control stormwater, which requires regular dredging and clearing, adding to common HOA expenses.' },
      { q: 'How do Buckhead gated-community pave costs work?', a: 'Since gated streets are private and not maintained by the City of Atlanta, the local HOA must establish long-term reserve structures to cover 100% of future repaving and milling costs.' },
      { q: 'Can my HOA in Atlanta fine me for removing a pine tree?', a: 'Yes, Atlanta metro areas have strict city arbor rules, and local HOAs often impose even stricter rules to maintain tree cover. Unapproved clearing can result in hefty HOA and municipal fines.' },
      { q: 'Are swimming pool lifeguards included in Alpharetta HOA fees?', a: 'Most standard neighborhood HOAs operate \'swim at your own risk\' pools to avoid skyrocketing insurance liability rates, keeping monthly dues significantly more affordable.' }
    ]
  }
};

export default function CityTemplate() {
  const { cityName = 'austin-texas' } = useParams<{ cityName: string }>();

  // Fetch the city data or default to Austin
  const cityData = citiesData[cityName.toLowerCase()] || citiesData['austin-texas'];
  const { cityName: displayCity, stateName: displayState, intro, tableData, faqs } = cityData;

  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title={`HOA Fee Calculator ${displayCity}, ${displayState} 2026 | Average Costs & Estimates`}
        description={`Calculate HOA fees in ${displayCity}, ${displayState}. See average monthly costs, neighborhood comparisons, and estimate your lifetime HOA expenses.`}
        canonical={`https://hoafeecalculator.com/cities/${cityName}`}
        schema={[pageSchema]}
      />

      {/* Header */}
      <header className="border-b border-border py-4 px-6 fixed top-0 w-full bg-white/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img 
              src="/hoa_calculator_logo.svg" 
              alt="HOA Fee Calculator" 
              width="180" height="45" style={{height: '45px', width: '180px'}}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                if (e.currentTarget.nextElementSibling) {
                  (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                }
              }}
            />
            <span 
              className="font-serif text-2xl font-bold text-primary"
              style={{display: 'none'}}
            >
              HOA<span className="text-accent">Calculator</span>.com
            </span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center text-sm font-bold uppercase tracking-wider">
            <Link to="/states" className="hover:text-accent transition-colors">States</Link>
            <Link to="/compare" className="hover:text-accent transition-colors">Compare</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
            <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            <a href="#calculator" className="bg-primary hover:bg-primary/90 text-white py-2 px-6 rounded-full font-bold transition-all active:scale-95 inline-flex items-center justify-center text-sm">Calculate</a>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link to="/states" className="text-accent font-bold hover:underline inline-flex items-center gap-1">
              ← Back to States
            </Link>
          </div>

          {/* Heading Section */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
              {displayCity}, {displayState} HOA Fee Calculator 2026
            </h1>
            <p className="text-lg md:text-xl text-primary/85 leading-relaxed font-sans font-medium">
              {intro}
            </p>
          </header>

          {/* Data Table Section */}
          <section className="bg-white border border-border/80 rounded-2xl shadow-sm p-6 md:p-8 mb-16 overflow-hidden">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6">
              Average HOA Fees in {displayCity} by Neighborhood Type
            </h2>
            <div className="overflow-x-auto -mx-6 md:mx-0">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="bg-bg-light border-b border-border">
                    <th className="px-6 py-4 font-bold text-primary text-xs uppercase tracking-wider">Property Type</th>
                    <th className="px-6 py-4 font-bold text-primary text-xs uppercase tracking-wider text-right">Average Monthly Fee</th>
                    <th className="px-6 py-4 font-bold text-primary text-xs uppercase tracking-wider text-right">Annual Cost</th>
                    <th className="px-6 py-4 font-bold text-primary text-xs uppercase tracking-wider">What's Included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {tableData.map((row, index) => (
                    <tr key={index} className="hover:bg-bg-light/50 transition-colors">
                      <td className="px-6 py-5 font-bold text-primary">{row.type}</td>
                      <td className="px-6 py-5 text-right font-bold text-accent">${row.monthly}/mo</td>
                      <td className="px-6 py-5 text-right font-semibold text-primary/70">${row.annual.toLocaleString()}/yr</td>
                      <td className="px-6 py-5 text-sm text-primary/60 leading-relaxed max-w-sm">{row.included}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Embedded Main Calculator Section */}
          <section id="calculator" className="scroll-mt-24 mb-16">
            <div className="border border-border/60 rounded-3xl p-1 shadow-sm overflow-hidden bg-bg-light/30">
              <div className="px-6 py-8 md:px-10 md:py-10 bg-white rounded-[22px]">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-8">
                  Calculate Your Future HOA Costs in Real-Time
                </h2>
                <Calculator />
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8 text-center">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="group border border-border rounded-xl bg-white p-0 overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <summary className="px-6 py-5 cursor-pointer list-none flex justify-between items-center font-bold text-primary text-base md:text-lg focus:outline-none">
                    {faq.q}
                    <span className="text-accent text-2xl group-open:rotate-45 transition-transform flex-shrink-0 ml-4">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-primary/70 leading-relaxed border-t border-border/60 mt-0 pt-4 font-sans text-sm md:text-base">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Custom CTA Box linking to Homepage Calculator */}
          <section className="bg-bg-light border border-border/80 rounded-3xl p-8 text-center max-w-3xl mx-auto shadow-sm">
            <h3 className="text-2xl font-serif font-bold text-primary mb-3">
              Looking for Full Multi-Property Comparisons?
            </h3>
            <p className="text-primary/70 mb-6 max-w-lg mx-auto leading-relaxed text-sm md:text-base">
              Use our advanced homepage comparison engine to pit multiple properties, tax rates, and fee structures against each other.
            </p>
            <Link 
              to="/" 
              className="bg-primary hover:bg-primary/95 text-white font-bold py-3 px-8 rounded-full transition-all inline-flex items-center gap-2 text-sm md:text-base cursor-pointer shadow-md"
            >
              ← Open Home Page Calculator
            </Link>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/10 py-20 px-6 text-white/80 mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
             <Link to="/" className="inline-flex items-center mb-6">
               <img 
                 src="/hoa_calculator_logo.svg" 
                 alt="HOA Fee Calculator" 
                 width="180" height="45" style={{height: '45px', width: '180px'}}
                 onError={(e) => {
                   e.currentTarget.style.display = 'none';
                   if (e.currentTarget.nextElementSibling) {
                     (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'block';
                   }
                 }}
               />
               <span 
                 className="font-serif text-2xl font-bold text-white"
                 style={{display: 'none'}}
               >
                 HOA<span className="text-accent">Calculator</span>.com
               </span>
             </Link>
             <p className="max-w-sm text-sm opacity-80 leading-relaxed">A detailed HOA fee calculation tool for US homebuyers. Trusted by homeowners in all 50 states.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Tools</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/states" className="hover:text-accent transition-colors">State Guides</Link></li>
              <li><Link to="/compare" className="hover:text-accent transition-colors">Compare Costs</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">HOA Articles</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
              <li><Link to="/sitemap" className="hover:text-accent transition-colors">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
           <span>&copy; 2026 HOACalculator.com. US Real Estate Data Partners. All Rights Reserved.</span>
           <div className="flex gap-8">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
           </div>
        </div>
      </footer>
    </div>
  );
}
