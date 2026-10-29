import React, { Suspense } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import SocialIcons from '@/src/components/SocialIcons';

const Calculator = React.lazy(() => import('@/src/components/Calculator'));

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

const CITY_FEE_DRIVERS: Record<string, string> = {
  "atlanta-georgia": "Atlanta fees reflect its wooded, amenity-heavy suburbs. Heavily treed lots in Buckhead, Alpharetta, and Inman Park mean ongoing tree care, stormwater management, and leaf and debris removal that flatter, newer suburbs never face. Swim and tennis clubs, gated entries, and private security add staffing and upkeep, while Midtown condo towers carry concierge service, secure garage parking, elevators, and structural reserves. Older neighborhoods with aging pools and tennis courts tend to cost more than new subdivisions where those systems are still young, so two Atlanta HOAs a few miles apart can charge very different dues for very different reasons.",
  "austin-texas": "Austin fees are shaped by fast growth and new construction. Master-planned suburbs around the city bundle trails, pools, parks, and amenity centers into dues, and many outer suburbs sit inside Municipal Utility Districts whose infrastructure costs ride along with the HOA bill. Downtown condo towers add concierge, security, garage, and elevator costs, while older central neighborhoods with mature trees and aging systems face rising maintenance. Because so much of the city is newly built, reserve funding for the first round of major replacements is the factor buyers most often overlook.",
  "charlotte-north-carolina": "Charlotte fees track its suburban, amenity-led pattern. South Charlotte and lake-area communities bundle golf, pools, tennis, clubhouses, and extensive common-area landscaping into dues, and guard-gated sections add security staffing. Uptown condo towers carry elevator, garage, and building-envelope costs that single-family subdivisions never see. Newer suburbs with young amenities tend to charge less than established neighborhoods facing their first major round of pool, road, and clubhouse renewals.",
  "houston-texas": "Houston fees reflect a city without zoning, where deed restrictions and associations do the work zoning does elsewhere. Master-planned suburbs bundle lakes, trails, parks, and recreation centers, and many sit inside Municipal Utility Districts that fund water, sewer, and drainage infrastructure. Flood control matters here: detention ponds, drainage, and stormwater systems are real budget lines, and coastal-area condos add windstorm insurance and salt-air building upkeep. Large lot sizes and long private road networks also push maintenance costs above denser cities.",
  "las-vegas-nevada": "Las Vegas fees follow its master-planned, desert pattern. Large communities bundle golf courses, clubhouses, pools, and miles of common-area desert landscaping, with water management a constant budget item despite xeriscaping. Guard-gated sections add security costs, and high-rise condos near the resort corridor carry elevator, garage, and full-service staffing. Summer heat is its own cost driver: pools, cooling for common buildings, and sun damage to exterior surfaces all shorten maintenance cycles compared with milder climates.",
  "los-angeles-california": "Los Angeles fees reflect old buildings, hills, and coast. Much of the condo stock is decades old, so elevator modernization, plumbing, and seismic retrofitting regularly appear in budgets, and California law requires associations to plan reserves for major components. Hillside communities add slope maintenance and fire-brush clearance, coastal buildings face salt-air corrosion, and parking structures in dense neighborhoods are expensive to maintain. Earthquake insurance for shared structures is another cost that inland cities rarely face.",
  "miami-florida": "Miami fees are dominated by towers, storms, and state safety rules. High-rise condos carry elevator, garage, security, and full-service staffing, and Florida milestone inspection and reserve requirements mean older towers must fund structural repairs on a set schedule rather than deferring them. Hurricane exposure drives windstorm insurance for shared buildings, and coastal salt air shortens the life of exteriors, railings, and mechanical systems. Luxury buildings with pools, spas, and concierge service sit at the top of the range, while older towers facing milestone-driven work can surprise buyers.",
  "orlando-florida": "Orlando fees reflect tourism, new suburbs, and storms. Resort-style communities bundle water features, golf, clubhouses, and extensive landscaping, and vacation-home and short-term-rental sections add management and security costs. New suburbs with young amenities tend to charge less than established ones facing pool and road renewals, and every community budgets for hurricane preparation, drainage, and storm cleanup. Gated sections and private road networks add further maintenance that ungated neighborhoods avoid.",
  "phoenix-arizona": "Phoenix fees follow desert living and active-adult scale. Large communities bundle golf courses, clubhouses, pools, and miles of desert landscaping, with irrigation and dust control as constant costs. Guard-gated sections add security, and active-adult communities add lifestyle staffing and programming. Summer heat shortens the life of pools, paint, and exterior surfaces, and Scottsdale-area luxury sections with private parks and extensive amenities run higher than basic subdivisions. Water conservation rules also shape what landscaping an association must maintain.",
  "san-diego-california": "San Diego fees reflect coast, canyons, and water costs. Coastal condos face salt-air corrosion, and hillside and canyon communities budget for brush clearance and slope maintenance in fire-prone areas. Master-planned inland suburbs bundle pools, parks, and trails, while older coastal buildings deal with elevator and plumbing renewals plus California reserve planning requirements. Water is expensive here, so irrigation for common areas is a larger budget line than in wetter climates, and parking structures in dense neighborhoods add ongoing upkeep.",
};

export default function CityTemplate() {
  const { cityName: paramCityName } = useParams<{ cityName?: string }>();
  const location = useLocation();

  // Extract slug from URL path if param is missing (e.g. /cities/houston-texas)
  const pathSlug = location.pathname.replace(/^\/cities\/?/, '').replace(/\/$/, '');
  const cityName = (paramCityName || pathSlug || 'austin-texas').toLowerCase().trim();

  // Fetch the city data or default to Austin
  const cityData = citiesData[cityName] || citiesData['austin-texas'];
  const { cityName: displayCity, stateName: displayState, intro, tableData, faqs } = cityData;
  // Shared AEO-style FAQs appended to each city's own FAQs (no overlap with city-specific ones)
  const sharedFaqs: FAQData[] = [
    {
      q: `Are HOA fees in ${displayCity} tax deductible?`,
      a: `In most cases, HOA fees on a home you live in are not tax deductible. The IRS treats dues on a primary residence as a personal expense, similar to maintenance you pay for directly. If the property is a rental or investment, HOA fees are generally deductible as a rental expense against rental income. Separate from taxes, remember that HOA dues never include your property taxes or your personal homeowners insurance policy — those are billed and paid independently. Tax rules change and individual situations differ, so check with a qualified tax professional before filing.`
    },
    {
      q: `Can an HOA in ${displayState} foreclose on my home?`,
      a: `This is the question that surprises many first-time buyers, and the short answer is: in many states, yes, an HOA has strong collection powers. When you buy into an HOA community, unpaid assessments typically become a lien on your property — automatically or after a court filing — and depending on ${displayState} law, the association may be able to foreclose that lien, sometimes even ahead of other claims. The exact process, notice requirements, and redemption rights vary widely by state, so current ${displayState} statutes are the source of truth here. The practical takeaway is simple: HOA dues are not optional, and withholding payment during a dispute almost always backfires. Pay the assessment on time, then dispute the underlying issue through the board's process or legal channels.`
    },
    {
      q: `Do HOA fees in ${displayCity} include property taxes and homeowners insurance?`,
      a: `No. This is one of the most common points of confusion for ${displayCity} buyers, so let's be precise. Your HOA dues cover shared community costs: common-area maintenance, amenities, the association's master insurance policy, and reserve contributions. They do not include your county property taxes, which are billed separately, and they do not replace your personal homeowners insurance (an HO-6 policy for condos or an HO-3 policy for houses). In condos, the master policy usually covers the building shell and common areas, while you insure everything from the walls in — plus liability. When you budget for a ${displayCity} home, line up all four costs: mortgage, property taxes, your own insurance, and HOA dues.`
    },
    {
      q: `Should I buy a home with an HOA in ${displayCity}?`,
      a: `There is no universal answer — it depends on how you want to live and what the specific community offers. The case for HOA living in ${displayCity} is real: professionally maintained common areas, pools and fitness centers you could never afford alone, consistent neighborhood standards that protect property values, and a lifestyle where exterior maintenance is someone else's job. The trade-offs are equally real: a fixed monthly cost that rises over time, rules about paint colors, pets, parking, and rentals, and the risk of special assessments if reserves are thin. Before deciding, read the community's CC&Rs and house rules, review the last few years of budgets and meeting minutes, and ask when the last special assessment was levied. If the numbers work and the lifestyle fits, an HOA community in ${displayCity} can be a great buy — just go in with eyes open.`
    }
  ];
  const allFaqs: FAQData[] = [...faqs, ...sharedFaqs];

  // Group the city table rows into broad property types for the "How much" comparison table
  const condoRows = tableData.filter(r => /condo|loft|high-rise/i.test(r.type));
  const townhomeRows = tableData.filter(r => !/condo|loft|high-rise/i.test(r.type) && /townhome|townhouse/i.test(r.type));
  const resortRows = tableData.filter(r => /resort|short-term/i.test(r.type));
  const singleRows = tableData.filter(r => !/condo|loft|high-rise|townhome|townhouse|resort|short-term/i.test(r.type));

  const fmtMonthlyRange = (rows: NeighborhoodData[]) => {
    const ms = rows.map(r => r.monthly);
    const lo = Math.min(...ms);
    const hi = Math.max(...ms);
    return lo === hi ? `$${lo}` : `$${lo}–$${hi}`;
  };
  const fmtAnnualRange = (rows: NeighborhoodData[]) => {
    const ms = rows.map(r => r.monthly);
    const lo = Math.min(...ms) * 12;
    const hi = Math.max(...ms) * 12;
    return lo === hi ? `$${lo.toLocaleString()}` : `$${lo.toLocaleString()}–$${hi.toLocaleString()}`;
  };

  const comparisonRows = [
    { rows: condoRows, label: 'Condos & high-rise units', note: 'Elevators, lobbies, parking structures, and master building insurance push these to the top of the range.' },
    { rows: townhomeRows, label: 'Townhomes', note: 'Shared roofs, siding, and exteriors keep dues between condo and single-family levels.' },
    { rows: singleRows, label: 'Single-family & master-planned communities', note: 'Mostly common-area landscaping and amenities — no shared building shell to maintain.' },
    { rows: resortRows, label: 'Resort & specialty communities', note: 'Heavy amenity use and on-site staffing push these toward the top of the range.' }
  ].filter(c => c.rows.length > 0);


  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": allFaqs.map(faq => ({
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
        title={`HOA Fee Calculator ${displayCity}, ${displayState} 2026`}
        description={`Calculate HOA fees in ${displayCity}, ${displayState}. See average monthly costs, neighborhood comparisons, and estimate your lifetime HOA expenses.`}
        canonical={`/cities/${cityName}`}
        schema={[pageSchema]}
      />

      {/* Header */}
      <Header />

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


          {/* What HOA Fees Cover Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
              What Do HOA Fees Cover in {displayCity}?
            </h2>
            <p className="text-primary/70 leading-relaxed mb-8">
              When you pay HOA dues in {displayCity}, you are funding the operating budget of a small nonprofit
              corporation — your community. The money does not disappear into a black hole; it pays for very concrete
              things, from mowed entryways to the insurance policy on the clubhouse. While every community's budget is
              different, nearly all {displayCity} associations spend dues across four broad categories. Understanding
              the breakdown helps you judge whether a community's fees are reasonable — or a red flag.
            </p>
            <div className="space-y-6">
              <div className="bg-bg-light/50 border border-border/60 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Common-Area Maintenance</h3>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base">
                  This is usually the largest day-to-day line item. It covers landscaping and irrigation for shared green
                  spaces, upkeep of entry monuments and lighting, cleaning of private streets, pool and spa servicing,
                  elevator and garage maintenance in taller buildings, and routine repairs to clubhouses, fences, and
                  walking trails. In {displayCity}, local conditions show up here too — irrigation through dry stretches,
                  storm-drain clearing in wet seasons, and tree care where canopies are dense. A community with extensive
                  grounds simply costs more to run, which is why dues track closely with how much shared land and how many
                  shared structures an association owns.
                </p>
              </div>
              <div className="bg-bg-light/50 border border-border/60 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Amenities and Staffing</h3>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base">
                  Pools, fitness centers, tennis courts, clubhouses, and dog parks do not maintain themselves. Dues pay
                  for the people and contracts behind them: lifeguards or attendants where communities employ them,
                  front-desk and concierge staff in high-rise buildings, security patrols and gate attendants in gated
                  neighborhoods, and the management company that handles billing, vendor contracts, and resident
                  communications. The more services a community offers, the higher this slice climbs — it is the main
                  reason a luxury tower's dues can run several times higher than a basic suburban HOA in the same city.
                </p>
              </div>
              <div className="bg-bg-light/50 border border-border/60 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Master Insurance Policies</h3>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base">
                  Every HOA carries insurance on what it owns: common buildings, lobbies, elevators, pools, and shared
                  structures, plus liability coverage if someone is injured in a common area. In condos, the master policy
                  typically covers the building exterior and shared systems while owners insure their own interiors. This
                  coverage is one reason dues have risen in many markets — when a master policy renews at a higher premium,
                  the increase lands directly in the next budget. Remember that the master policy never replaces your own
                  homeowners insurance; you still need coverage for your unit's interior, your belongings, and personal
                  liability.
                </p>
              </div>
              <div className="bg-bg-light/50 border border-border/60 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-serif font-bold text-primary mb-3">Reserve Funds for Future Repairs</h3>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base">
                  Well-run associations set aside part of every dues payment for big-ticket future work: roof replacements,
                  repaving, elevator modernization, pool resurfacing, and structural repairs. This is the reserve fund, and
                  it is the line item buyers most often overlook. A community with healthy reserves can handle a roof
                  replacement without billing owners extra. One with thin reserves will reach for a special assessment — a
                  lump-sum charge levied on every owner, sometimes running into thousands of dollars. Always ask for the
                  reserve study before buying in {displayCity}; it is the single best predictor of surprise costs.
                </p>
              </div>
            </div>
          </section>

          {CITY_FEE_DRIVERS[cityName] && (
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                What Drives HOA Fees Higher in {displayCity}?
              </h2>
              <p className="text-primary/70 leading-relaxed">
                {CITY_FEE_DRIVERS[cityName]}
              </p>
              <p className="text-xs text-primary/50 mt-4">Last updated: October 29, 2026.</p>
            </section>
          )}
          {/* How Much Are HOA Fees - Comparison Table Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
              How Much Are HOA Fees in {displayCity}?
            </h2>
            <p className="text-primary/70 leading-relaxed mb-8">
              No two communities charge the same dues, even within the same zip code — the age of the buildings, the level
              of amenities, and staffing all move the number. The table below groups the neighborhood averages shown above
              into broad property types so you can compare at a glance. Treat these as typical ranges, not quotes: actual
              dues vary widely by community, and the only number that matters for your purchase is the one in the seller's
              disclosure.
            </p>
            <div className="bg-white border border-border/80 rounded-2xl shadow-sm p-6 md:p-8 overflow-hidden">
              <div className="overflow-x-auto -mx-6 md:mx-0">
                <table className="w-full text-left min-w-[600px]">
                  <thead>
                    <tr className="bg-bg-light border-b border-border">
                      <th className="px-6 py-4 font-bold text-primary text-xs uppercase tracking-wider">Property Type</th>
                      <th className="px-6 py-4 font-bold text-primary text-xs uppercase tracking-wider text-right">Typical Monthly Range</th>
                      <th className="px-6 py-4 font-bold text-primary text-xs uppercase tracking-wider text-right">Annual Equivalent</th>
                      <th className="px-6 py-4 font-bold text-primary text-xs uppercase tracking-wider">Why the Range Exists</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {comparisonRows.map((row, index) => (
                      <tr key={index} className="hover:bg-bg-light/50 transition-colors">
                        <td className="px-6 py-5 font-bold text-primary">{row.label}</td>
                        <td className="px-6 py-5 text-right font-bold text-accent">{fmtMonthlyRange(row.rows)}/mo</td>
                        <td className="px-6 py-5 text-right font-semibold text-primary/70">{fmtAnnualRange(row.rows)}/yr</td>
                        <td className="px-6 py-5 text-sm text-primary/60 leading-relaxed max-w-sm">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-primary/50 mt-4 leading-relaxed">
                Ranges are derived from the community averages in the table above. Your actual dues depend on the specific
                community, its budget, and its reserve health.
              </p>
            </div>
          </section>

          {/* AEO: Are HOA fees negotiable */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
              Are HOA Fees Negotiable in {displayCity}?
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Here is the honest answer: the monthly amount itself is almost never negotiable. Dues are set by the HOA board
              through an annual budget that covers real, contracted costs — landscaping, insurance, reserves — and the board
              cannot simply waive your share, because every owner pays the same rate. What you <em>can</em> negotiate is
              everything around the fees. Sellers in {displayCity} sometimes agree to credits that offset a year of dues,
              or to cover transfer fees and move-in deposits at closing. You can also negotiate on timing — asking a seller
              to cover a known upcoming special assessment, for example.
            </p>
            <p className="text-primary/70 leading-relaxed">
              And you hold the ultimate leverage before you buy: choosing between communities. Two similar homes in
              {displayCity} can carry wildly different dues, so comparing communities is where the real savings happen. If a
              listing's dues feel high, ask the listing agent for the budget breakdown before assuming the worst — a higher
              fee that includes water, trash, and a healthy reserve contribution is often a better deal than a low fee that
              hides deferred maintenance.
            </p>
          </section>

          {/* AEO: Do HOA fees go up every year */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
              Do HOA Fees Go Up Every Year?
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Not every year, and not by law — but over a long enough timeline, yes, dues trend upward in most
              {displayCity} communities. The drivers are unglamorous: insurance premiums renew higher, landscaping and pool
              contracts reprice, utilities cost more, and reserve contributions grow as buildings age. Boards typically
              revisit the budget annually, and in a normal year many communities land on a modest increase that roughly
              tracks inflation.
            </p>
            <p className="text-primary/70 leading-relaxed">
              The painful jumps come from specific events: a master insurance policy that doubles at renewal, a reserve
              study that reveals years of underfunding, or deferred maintenance that can no longer wait. Some states cap how
              much a board can raise regular assessments without a homeowner vote, which is worth checking under
              {displayState} law. Before buying, ask for the last three to five years of dues history — the pattern tells
              you far more than any single number.
            </p>
          </section>

          {/* AEO: What happens if you don't pay */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
              What Happens If You Don't Pay HOA Fees in {displayState}?
            </h2>
            <p className="text-primary/70 leading-relaxed mb-4">
              Missing HOA payments triggers a process that escalates faster than most owners expect. First come late fees
              and interest, which the association's governing documents authorize automatically. If the balance remains
              unpaid, the HOA can send the account to collections and place a lien on your property — a legal claim that
              clouds your title and must be cleared before you can sell or refinance.
            </p>
            <p className="text-primary/70 leading-relaxed">
              In many states, HOAs also have the power to foreclose on that lien, and the exact rules — notice periods,
              redemption rights, and whether the lien has priority over your mortgage — vary by state, so {displayState}
              statutes are the source of truth here. One critical warning: never withhold dues because you are angry at the
              board. Courts treat dues as an independent obligation; pay first, then dispute the issue through the board's
              process or legal channels.
            </p>
          </section>

          {/* State HOA Laws Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
              {displayState} HOA Laws: What {displayCity} Buyers Should Know
            </h2>
            <p className="text-primary/70 leading-relaxed mb-6">
              Homeowners associations in {displayCity} operate under {displayState} law, and those statutes set the ground
              rules for everything from how boards meet to how dues are collected. Because statutes are amended regularly
              and interpretations vary, treat the following as general guidance only — for anything binding, check current
              {displayState} statutes or consult a local attorney.
            </p>
            <ul className="space-y-4 mb-6">
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">•</span>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base"><strong className="text-primary">Board governance:</strong> how directors are elected, how meetings are called, and whether owners can attend and speak.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">•</span>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base"><strong className="text-primary">Financial transparency:</strong> your right to inspect budgets, reserve studies, meeting minutes, and vendor contracts before and after you buy.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">•</span>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base"><strong className="text-primary">Assessment rules:</strong> how dues and special assessments are levied, and — in some states — caps on annual increases without a member vote.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">•</span>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base"><strong className="text-primary">Fines and enforcement:</strong> notice and hearing requirements before the association can fine you or restrict common-area access.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">•</span>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base"><strong className="text-primary">Liens and foreclosure:</strong> the process an HOA must follow to secure and enforce unpaid assessments against a property.</p>
              </li>
              <li className="flex gap-3">
                <span className="text-accent font-bold mt-0.5">•</span>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base"><strong className="text-primary">Dispute resolution:</strong> whether {displayState} requires mediation or another process before owners and boards end up in court.</p>
              </li>
            </ul>
            <p className="text-primary/70 leading-relaxed">
              State law is the floor, not the ceiling — a community's own CC&Rs and bylaws can add stricter rules on top.
              Read both before you buy, and pay special attention to rental restrictions, pet policies, and architectural
              review rules, which are the most common sources of owner-board conflict in {displayCity}.
            </p>
          </section>

          {/* How to Estimate Total Cost Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
              How to Estimate Your Total Cost of Owning an HOA Home in {displayCity}
            </h2>
            <p className="text-primary/70 leading-relaxed mb-6">
              A home's sticker price only tells half the story in an HOA community. Follow these four steps to see the full
              picture before you make an offer in {displayCity}.
            </p>
            <ol className="space-y-5 mb-6 list-none">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">1</span>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base"><strong className="text-primary">Start with real dues, not guesses.</strong> Use the neighborhood averages above as a starting point, then get the actual current dues — plus the last three years of increases — from the seller or listing agent.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">2</span>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base"><strong className="text-primary">Stack every recurring cost.</strong> Add dues to your estimated mortgage payment, property taxes, homeowners insurance, and utilities. Lenders count HOA dues in your debt-to-income ratio, so they directly affect how much home you can borrow for.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">3</span>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base"><strong className="text-primary">Project the dues forward, not just month one.</strong> Dues rise over time, and the lifetime number is what matters. Try the <a href="#calculator" className="text-accent font-bold hover:underline">HOA cost calculator below</a>: enter the monthly dues and an assumed annual increase, and it projects what you will pay over 5, 10, or 30 years in {displayCity}.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">4</span>
                <p className="text-primary/70 leading-relaxed text-sm md:text-base"><strong className="text-primary">Stress-test for special assessments.</strong> Ask for the reserve study and the community's history of special assessments. A well-funded reserve with no recent assessments is a far safer bet than a community deferring major maintenance.</p>
              </li>
            </ol>
            <p className="text-primary/70 leading-relaxed">
              Do those four steps before every offer, and no HOA bill in {displayCity} will ever surprise you.
            </p>
          </section>

          {/* Embedded Main Calculator Section */}
          <section id="calculator" className="scroll-mt-24 mb-16">
            <div className="border border-border/60 rounded-3xl p-1 shadow-sm overflow-hidden bg-bg-light/30">
              <div className="px-6 py-8 md:px-10 md:py-10 bg-white rounded-[22px]">
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-8">
                  Calculate Your Future HOA Costs in Real-Time
                </h2>
                <Suspense fallback={
                  <div className="min-h-[400px] flex flex-col items-center justify-center bg-bg-light/50 rounded-2xl border border-border/50 p-6 shadow-sm">
                    <div className="w-10 h-10 border-4 border-accent border-t-transparent rounded-full animate-spin mb-3"></div>
                    <p className="text-xs text-primary/60 font-medium">Loading Calculator Engine...</p>
                  </div>
                }>
                  <Calculator />
                </Suspense>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8 text-center">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="space-y-4">
              {allFaqs.map((faq, index) => (
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
                 alt="HOAFeeCalculator.com" 
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
                 HOAFee<span className="text-accent">Calculator</span>.com
               </span>
             </Link>
             <p className="max-w-sm text-sm opacity-80 leading-relaxed">A free HOA cost calculator for US homebuyers.</p>
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
            <div className="mt-6 pt-4 border-t border-white/10">
              <span className="block text-xs uppercase tracking-widest text-white/60 mb-2.5 font-bold">Connect With Us</span>
              <SocialIcons />
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-accent transition-colors">Terms of Service</Link></li>
              <li><Link to="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-accent transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
           <span>&copy; 2026 HOAFeeCalculator.com. All Rights Reserved.</span>
           <div className="flex gap-8">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms</Link>
              <Link to="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
           </div>
        </div>
      </footer>
    </div>
  );
}
