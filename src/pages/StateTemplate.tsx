import React, { Suspense } from 'react';
import SEO from '@/src/components/SEO';
import Header from '@/src/components/Header';
import SocialIcons from '@/src/components/SocialIcons';
import QuickAnswerBox from '@/src/components/QuickAnswerBox';
import { useParams, Link } from 'react-router-dom';
import { statesData } from '@/src/data/statesData';

const Calculator = React.lazy(() => import('@/src/components/Calculator'));

interface StateConfig {
  avgFee: number;
  excerpt: string;
  cities: { name: string; avgFee: number; range: string }[];
  laws: string[];
}

const STATE_BLOG_GUIDES: Record<string, { url: string; title: string; desc: string }> = {
  arizona: {
    url: "/blog/hoa-fees-arizona",
    title: "Arizona HOA Fees: Laws, County Averages & Buyer's Guide",
    desc: "Read our comprehensive deep-dive into A.R.S. Title 33 regulations, Maricopa vs. Pima County dues, and desert pool/AC reserve requirements."
  },
  california: {
    url: "/blog/hoa-fees-california",
    title: "California HOA Fees: Davis-Stirling Act & Cost Analysis",
    desc: "In-depth analysis of Davis-Stirling Civil Code caps, 20% annual increase limits, and coastal condo reserve fund health."
  },
  texas: {
    url: "/blog/hoa-fees-texas",
    title: "Texas HOA Fees: Complete City-by-City Legal & Financial Guide",
    desc: "Texas Property Code Chapter 209 rules, North Dallas vs. West Houston vs. Austin master-planned amenities, and assessment limits."
  },
  florida: {
    url: "/blog/hoa-fees-florida",
    title: "Florida HOA & Condo Fees: Post-SB 4-D Milestone Inspection Guide",
    desc: "Critical guide to mandatory structural integrity reserve studies, hurricane insurance spikes, and special assessment prevention."
  },
  georgia: {
    url: "/blog/hoa-fees-georgia",
    title: "Georgia HOA Fees: POA Act & Metro Atlanta Cost Guide",
    desc: "Understanding the Georgia Property Owners' Association Act, voluntary vs. statutory HOAs, and Atlanta club amenities."
  },
  illinois: {
    url: "/blog/hoa-fees-illinois",
    title: "Illinois HOA & Condo Dues: Chicago High-Rise & Suburb Guide",
    desc: "Section 18.5 master associations, central heating utility reserves, and Cook County structural requirements."
  },
  nevada: {
    url: "/blog/hoa-fees-nevada",
    title: "Nevada HOA Fees: NRS 116 Rules & Las Vegas Valley Guide",
    desc: "NRS 116 super-priority liens, Ombudsman dispute arbitration, and master association fee layering in Clark County."
  },
  "new-york": {
    url: "/blog/average-hoa-fees-new-york",
    title: "New York HOA & Condo Common Charges Guide",
    desc: "NYC condominium common charges vs. co-op maintenance fees, local laws, and tax abatement expirations."
  },
  "north-carolina": {
    url: "/blog/hoa-fees-north-carolina",
    title: "North Carolina HOA Fees: Planned Community Act Guide",
    desc: "NCGS Chapter 47F requirements, Charlotte vs. Raleigh dues, and retention pond capital reserve budgeting."
  },
  virginia: {
    url: "/blog/hoa-fees-virginia",
    title: "Virginia HOA Fees: Property Owners' Association Act Guide",
    desc: "Title 55.1 Chapter 18 regulations, Northern Virginia (NOVA) vs. Richmond fee trends, and resale disclosure package rights."
  },
  washington: {
    url: "/blog/hoa-fees-washington-state",
    title: "Washington State HOA Fees: WUCIOA & Pacific Northwest Guide",
    desc: "RCW 64.90 (WUCIOA) mandatory reserve studies, Seattle King County dues, and moisture/earthquake remediation reserves."
  },
  colorado: {
    url: "/blog/hoa-fees-colorado",
    title: "Colorado HOA Fees: CCIOA & HB 22-1137 Guide",
    desc: "HB 22-1137 collection and foreclosure restrictions, Denver metro median dues, and mountain snow removal budgeting."
  },
  tennessee: {
    url: "/blog/hoa-fees-tennessee",
    title: "Tennessee HOA Fees: Nashville & Memphis Homeowner Guide",
    desc: "Navigating high-growth middle Tennessee dues, restrictive covenants, and property management oversight."
  },
  "new-jersey": {
    url: "/blog/hoa-fees-new-jersey",
    title: "New Jersey HOA Fees: PREDFDA & Radburn Law Guide",
    desc: "Radburn election regulations, NJ DCA oversight, and commuter corridor townhouse association reserves."
  }
};

const getStateData = (slug: string, displayName: string): StateConfig => {
  const normalized = slug.toLowerCase().trim();
  const stateRecord = statesData[normalized] || statesData['texas'];
  return {
    avgFee: stateRecord.avgFee,
    excerpt: stateRecord.intro,
    cities: stateRecord.cities,
    laws: stateRecord.laws
  };
};

export default function StateTemplate() {
  const { stateName = 'texas' } = useParams();
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);
  
  // Format state name for display
  const cleanSlug = (stateName || 'texas').toLowerCase().trim();
  const displayName = cleanSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Fetch data specifically for this state
  const stateData = getStateData(cleanSlug, displayName);
  const stateGuide = STATE_BLOG_GUIDES[cleanSlug];

  // Custom State Overrides for Flagship States
  const STATE_CUSTOM_FAQS: Record<string, { q: string; a: string }[]> = {
    "texas": [
      {
        q: "What is the average HOA fee in Texas in 2026?",
        a: "In Texas, average monthly HOA fees typically range from $180 to $450 per month, with suburban single-family master-planned developments in Collin, Denton, Williamson, and Fort Bend counties averaging between $100 and $220 monthly. Urban condominium high-rises in downtown Austin, Dallas Uptown, and Houston Galleria command higher assessments, frequently ranging from $500 to $950 per month to cover comprehensive building envelope maintenance, professional on-site management, and centralized utilities."
      },
      {
        q: "Can a Texas HOA foreclose on your house for unpaid dues?",
        a: "Yes, under Texas Property Code § 209.0092, an HOA can foreclose on a property for unpaid regular or special assessments, but they must first obtain an expedited judicial court order. State law strictly forbids non-judicial foreclosures on residential subdivisions without a judge's ruling, and associations are legally barred from foreclosing if the outstanding balance consists solely of architectural fines or legal fees. Additionally, Texas homeowners retain a 180-day statutory right of redemption following any HOA foreclosure sale."
      },
      {
        q: "What is the TREC resale certificate requirement in Texas, and how much can an HOA charge?",
        a: "Under Texas Property Code § 207.003 and Senate Bill 1588, property owners associations are legally capped at charging a maximum of $375 to assemble and deliver an official resale certificate disclosure package, and no more than $75 for an update. The packet discloses current regular assessment amounts, pending special assessments, active violations, and reserve balances. Texas standard purchase contracts provide buyers a 3-to-7 day statutory right of cancellation upon receipt."
      },
      {
        q: "Can Texas HOAs ban solar panels, security cameras, or perimeter fencing?",
        a: "No, Chapter 202 of the Texas Property Code explicitly prevents HOAs from enforcing blanket prohibitions on these items. Under § 202.010, homeowners can install roof-mounted solar energy devices within reasonable pitch parameters. Under § 202.023, associations cannot ban front or perimeter security cameras, motion floodlights, or boundary security fencing. Under § 202.007, drought-tolerant xeriscaping and rainwater harvesting barrels are also statutorily protected."
      },
      {
        q: "What is the MUD and PID tax impact on Texas master-planned communities?",
        a: "Under Texas Water Code § 49.452, sellers are legally required to deliver a statutory Municipal Utility District (MUD) notice to buyers prior to contract execution. MUD and Public Improvement District (PID) assessments fund neighborhood infrastructure bonds and appear directly on annual county property tax bills, often adding $2,000 to $5,000+ per year on top of standard HOA dues."
      }
    ],
    "california": [
      {
        q: "What is the average HOA fee in California in 2026?",
        a: "California has some of the highest HOA fees in the nation, with statewide averages ranging from $350 to $700 per month, and coastal metros like San Francisco, Silicon Valley, and West Los Angeles routinely exceeding $800 to $1,400 per month. These elevated costs stem directly from union construction labor rates, seismic compliance mandates, strict municipal codes, and surging master hazard and earthquake insurance premiums."
      },
      {
        q: "How much can an HOA raise dues each year in California under Davis-Stirling?",
        a: "Under California Civil Code § 5605(b) of the Davis-Stirling Act, an HOA board of directors cannot increase regular annual assessments by more than 20% over the previous fiscal year's dues without the affirmative approval of a majority of a quorum of voting homeowners. The only exception is an extraordinary emergency situation—such as a court-ordered repair or immediate life-safety structural hazard declared by an engineer or municipal building inspector."
      },
      {
        q: "What are SB 326 and SB 721 balcony inspection laws in California?",
        a: "Senate Bill 326 (for condominiums) and Senate Bill 721 (for multi-family housing) mandate that all buildings with three or more residential units containing wood exterior elevated elements (such as balconies, exterior stairs, decks, and walkways) must undergo destructive or visual structural inspections by a licensed architect or engineer. If dry-rot or waterproofing failures are uncovered, associations must execute immediate repairs, which has triggered widespread $15,000 to $40,000 per-unit special assessments across aging coastal developments."
      },
      {
        q: "Can California HOAs ban rentals or Accessory Dwelling Units (ADUs)?",
        a: "No, California state law strictly protects rental and ADU rights. Under Civil Code § 4741 (enacted via AB 3182), common interest developments cannot prohibit or restrict rentals unless the restriction allows at least 25% of all units to be rented. Furthermore, under Civil Code § 4751, any CC&R rule that prohibits or unreasonably restricts the construction of a permitted ADU or Junior ADU is void and unenforceable as a matter of law."
      },
      {
        q: "What are buyers' statutory disclosure rights during California HOA escrow?",
        a: "Under California Civil Code § 4525, prospective buyers are entitled to receive a comprehensive package of association records within 10 days of request, including the annual reserve study summary, current operating budget, 12 months of board meeting minutes, any pending construction litigation, and proof of master insurance. California purchase contracts grant buyers an explicit contingency review period to examine these documents and cancel escrow with a full return of earnest money if liabilities are identified."
      }
    ],
    "florida": [
      {
        q: "What is the average HOA and condo fee in Florida in 2026?",
        a: "Average HOA fees in Florida range from $150 to $350 per month for suburban single-family homes, and $400 to $900+ per month for multi-family condominiums in coastal metros like Miami, Fort Lauderdale, Tampa, and St. Petersburg. Condo dues have surged significantly due to mandatory post-Surfside structural integrity reserve requirements and skyrocketing commercial property insurance rates."
      },
      {
        q: "What is the Senate Bill 4-D Milestone Inspection law in Florida?",
        a: "Under Florida Statute § 553.899 enacted via Senate Bill 4-D and SB 154, residential condominium buildings 3 stories or taller must undergo a comprehensive structural Milestone Inspection once the building reaches 30 years of age (or 25 years if located within three miles of the coastline). A licensed structural engineer or architect inspects primary load-bearing elements, foundations, and building envelopes to certify structural safety."
      },
      {
        q: "Can Florida condo associations still vote to waive reserve funding?",
        a: "No. Under Florida Statute § 718.112 as amended by SB 4-D, condominium associations can no longer vote to waive or reduce reserve funding for structural integrity components (roof, load-bearing walls, fireproofing, plumbing, electrical, waterproofing, and structural items over $10,000). Associations must complete a mandatory Structural Integrity Reserve Study (SIRS) every 10 years and fully fund replacement reserves based on recommended schedules."
      },
      {
        q: "What is a Florida Estoppel Certificate and what is the fee limit?",
        a: "Under Florida Statutes § 718.116 (condos) and § 720.30851 (HOAs), an estoppel certificate is a legally binding statement from the association detailing the unit's financial standing, including current assessment rates, outstanding delinquent balances, and scheduled special assessments. The statutory preparation fee is capped at $299 for accounts in good standing, and the certificate legally shields the buyer from inheriting past-due balances not disclosed in the document."
      }
    ],
    "new-york": [
      {
        q: "What is the average HOA or maintenance fee in New York?",
        a: "In New York, fees vary widely by property structure and location. NYC co-op maintenance averages $1,200 to $1,800+ per month (bundling building property taxes and underlying mortgages), while condominium common charges average $800 to $1,500/month. Long Island gated communities average $400 to $850/month, and Upstate New York single-family HOAs in Albany, Buffalo, and Rochester average $150 to $350/month."
      },
      {
        q: "What is Local Law 11 (FISP) in New York City?",
        a: "Under NYC's Facade Inspection Safety Program (FISP, formerly Local Law 11), all buildings exceeding six stories must undergo an intensive exterior wall inspection by a Qualified Exterior Wall Inspector (QEWI) every five years. Discovered defects require immediate pedestrian shed scaffolding and masonry repairs, frequently triggering special assessments of $10,000 to $40,000 per unit if capital reserves are insufficient."
      },
      {
        q: "How does Local Law 97 impact New York building carrying costs?",
        a: "NYC Local Law 97 establishes strict greenhouse gas emission caps on buildings over 25,000 square feet, penalizing non-compliant properties $268 per metric ton over the threshold. Associations are actively funding major capital upgrades—such as converting from #4 fuel oil to electric heat pump systems—through reserve increases and special assessments."
      }
    ]
  ,
    "alabama": [
      { q: "What is the average HOA fee in Alabama in 2026?", a: "The estimated average HOA fee in Alabama is around $210 per month. Fees vary by city, from around $170 per month in Montgomery to around $250 per month in Mobile. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Alabama?", a: "Alabama Homeowners Association Act governs registration requirements and corporate transparency. See the laws section above for the full list of Alabama rules." },
      { q: "Which Alabama cities have the highest HOA fees?", a: "Mobile (around $250 per month) and Birmingham (around $215 per month) tend to run highest in Alabama. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Alabama HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Alabama communities before you offer." }
    ],
    "alaska": [
      { q: "What is the average HOA fee in Alaska in 2026?", a: "The estimated average HOA fee in Alaska is around $400 per month. Fees vary by city, from around $250 per month in Wasilla to around $460 per month in Sitka. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Alaska?", a: "Alaska Common Interest Ownership Act regulates consumer disclosure boundaries for properties. See the laws section above for the full list of Alaska rules." },
      { q: "Which Alaska cities have the highest HOA fees?", a: "Sitka (around $460 per month) and Juneau (around $425 per month) tend to run highest in Alaska. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Alaska HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Alaska communities before you offer." }
    ],
    "arizona": [
      { q: "What is the average HOA fee in Arizona in 2026?", a: "The estimated average HOA fee in Arizona is around $290 per month. Fees vary by city, from around $235 per month in Mesa to around $430 per month in Scottsdale. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Arizona?", a: "Arizona Revised Statutes (ARS Title 33) govern the baseline rules for active HOAs. See the laws section above for the full list of Arizona rules." },
      { q: "Which Arizona cities have the highest HOA fees?", a: "Scottsdale (around $430 per month) and Phoenix (around $290 per month) tend to run highest in Arizona. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Arizona HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Arizona communities before you offer." }
    ],
    "arkansas": [
      { q: "What is the average HOA fee in Arkansas in 2026?", a: "The estimated average HOA fee in Arkansas is around $170 per month. Fees vary by city, from around $145 per month in Fort Smith to around $200 per month in Fayetteville. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Arkansas?", a: "Arkansas Horizontal Property Act dictates multi-unit condominium division rules. See the laws section above for the full list of Arkansas rules." },
      { q: "Which Arkansas cities have the highest HOA fees?", a: "Fayetteville (around $200 per month) and Little Rock (around $180 per month) tend to run highest in Arkansas. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Arkansas HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Arkansas communities before you offer." }
    ],
    "colorado": [
      { q: "What is the average HOA fee in Colorado in 2026?", a: "The estimated average HOA fee in Colorado is around $310 per month. Fees vary by city, from around $240 per month in Fort Collins to around $415 per month in Boulder. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Colorado?", a: "Colorado Common Interest Ownership Act (CCIOA) regulates structural budget approvals. See the laws section above for the full list of Colorado rules." },
      { q: "Which Colorado cities have the highest HOA fees?", a: "Boulder (around $415 per month) and Denver (around $335 per month) tend to run highest in Colorado. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Colorado HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Colorado communities before you offer." }
    ],
    "connecticut": [
      { q: "What is the average HOA fee in Connecticut in 2026?", a: "The estimated average HOA fee in Connecticut is around $380 per month. Fees vary by city, from around $290 per month in Waterbury to around $550 per month in Stamford. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Connecticut?", a: "Connecticut Common Interest Ownership Act provides standard unit resale warranties. See the laws section above for the full list of Connecticut rules." },
      { q: "Which Connecticut cities have the highest HOA fees?", a: "Stamford (around $550 per month) and Bridgeport (around $400 per month) tend to run highest in Connecticut. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Connecticut HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Connecticut communities before you offer." }
    ],
    "delaware": [
      { q: "What is the average HOA fee in Delaware in 2026?", a: "The estimated average HOA fee in Delaware is around $290 per month. Fees vary by city, from around $205 per month in Middletown to around $415 per month in Rehoboth Beach. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Delaware?", a: "Delaware Uniform Common Interest Ownership Act establishes a dedicated Ombudsman office. See the laws section above for the full list of Delaware rules." },
      { q: "Which Delaware cities have the highest HOA fees?", a: "Rehoboth Beach (around $415 per month) and Wilmington (around $290 per month) tend to run highest in Delaware. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Delaware HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Delaware communities before you offer." }
    ],
    "georgia": [
      { q: "What is the average HOA fee in Georgia in 2026?", a: "The estimated average HOA fee in Georgia is around $250 per month. Fees vary by city, from around $180 per month in Columbus to around $335 per month in Savannah. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Georgia?", a: "Georgia Property Owners' Association Act (POA) grants automatic statutory lien powers. See the laws section above for the full list of Georgia rules." },
      { q: "Which Georgia cities have the highest HOA fees?", a: "Savannah (around $335 per month) and Atlanta (around $280 per month) tend to run highest in Georgia. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Georgia HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Georgia communities before you offer." }
    ],
    "hawaii": [
      { q: "What is the average HOA fee in Hawaii in 2026?", a: "The estimated average HOA fee in Hawaii is around $790 per month. Fees vary by city, from around $525 per month in Hilo to around $825 per month in Honolulu. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Hawaii?", a: "Hawaii HRS Chapter 514B regulates the structural safety and insurance of dense multi-unit condominiums. See the laws section above for the full list of Hawaii rules." },
      { q: "Which Hawaii cities have the highest HOA fees?", a: "Honolulu (around $825 per month) and Kahului (around $715 per month) tend to run highest in Hawaii. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Hawaii HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Hawaii communities before you offer." }
    ],
    "idaho": [
      { q: "What is the average HOA fee in Idaho in 2026?", a: "The estimated average HOA fee in Idaho is around $180 per month. Fees vary by city, from around $150 per month in Idaho Falls to around $240 per month in Coeur d'Alene. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Idaho?", a: "Idaho Code Title 55 Chapter 15 details mandatory covenants and public filings. See the laws section above for the full list of Idaho rules." },
      { q: "Which Idaho cities have the highest HOA fees?", a: "Coeur d'Alene (around $240 per month) and Boise (around $195 per month) tend to run highest in Idaho. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Idaho HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Idaho communities before you offer." }
    ],
    "illinois": [
      { q: "What is the average HOA fee in Illinois in 2026?", a: "The estimated average HOA fee in Illinois is around $320 per month. Fees vary by city, from around $200 per month in Rockford to around $475 per month in Chicago. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Illinois?", a: "Illinois Condominium Property Act sets strict rules for board records disclosure. See the laws section above for the full list of Illinois rules." },
      { q: "Which Illinois cities have the highest HOA fees?", a: "Chicago (around $475 per month) and Naperville (around $290 per month) tend to run highest in Illinois. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Illinois HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Illinois communities before you offer." }
    ],
    "indiana": [
      { q: "What is the average HOA fee in Indiana in 2026?", a: "The estimated average HOA fee in Indiana is around $190 per month. Fees vary by city, from around $160 per month in Fort Wayne to around $240 per month in Carmel. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Indiana?", a: "Indiana Code Title 32 regulates HOA registration and lien collection caps. See the laws section above for the full list of Indiana rules." },
      { q: "Which Indiana cities have the highest HOA fees?", a: "Carmel (around $240 per month) and Indianapolis (around $190 per month) tend to run highest in Indiana. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Indiana HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Indiana communities before you offer." }
    ],
    "iowa": [
      { q: "What is the average HOA fee in Iowa in 2026?", a: "The estimated average HOA fee in Iowa is around $180 per month. Fees vary by city, from around $150 per month in Sioux City to around $220 per month in Iowa City. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Iowa?", a: "Iowa Horizontal Real Property Act regulates master plans for common developments. See the laws section above for the full list of Iowa rules." },
      { q: "Which Iowa cities have the highest HOA fees?", a: "Iowa City (around $220 per month) and Des Moines (around $205 per month) tend to run highest in Iowa. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Iowa HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Iowa communities before you offer." }
    ],
    "kansas": [
      { q: "What is the average HOA fee in Kansas in 2026?", a: "The estimated average HOA fee in Kansas is around $180 per month. Fees vary by city, from around $165 per month in Wichita to around $235 per month in Overland Park. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Kansas?", a: "Kansas Uniform Common Interest Owners Bill of Rights Act protects individual member guidelines. See the laws section above for the full list of Kansas rules." },
      { q: "Which Kansas cities have the highest HOA fees?", a: "Overland Park (around $235 per month) and Kansas City (around $205 per month) tend to run highest in Kansas. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Kansas HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Kansas communities before you offer." }
    ],
    "kentucky": [
      { q: "What is the average HOA fee in Kentucky in 2026?", a: "The estimated average HOA fee in Kentucky is around $190 per month. Fees vary by city, from around $150 per month in Owensboro to around $250 per month in Covington. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Kentucky?", a: "Kentucky Horizontal Property Law governs general building associations. See the laws section above for the full list of Kentucky rules." },
      { q: "Which Kentucky cities have the highest HOA fees?", a: "Covington (around $250 per month) and Louisville (around $220 per month) tend to run highest in Kentucky. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Kentucky HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Kentucky communities before you offer." }
    ],
    "louisiana": [
      { q: "What is the average HOA fee in Louisiana in 2026?", a: "The estimated average HOA fee in Louisiana is around $260 per month. Fees vary by city, from around $190 per month in Shreveport to around $385 per month in New Orleans. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Louisiana?", a: "Louisiana Homeowners Association Act establishes rules for registry and operations. See the laws section above for the full list of Louisiana rules." },
      { q: "Which Louisiana cities have the highest HOA fees?", a: "New Orleans (around $385 per month) and Baton Rouge (around $235 per month) tend to run highest in Louisiana. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Louisiana HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Louisiana communities before you offer." }
    ],
    "maine": [
      { q: "What is the average HOA fee in Maine in 2026?", a: "The estimated average HOA fee in Maine is around $260 per month. Fees vary by city, from around $220 per month in Auburn to around $330 per month in Portland. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Maine?", a: "Maine Condominium Act regulates general common interest properties. See the laws section above for the full list of Maine rules." },
      { q: "Which Maine cities have the highest HOA fees?", a: "Portland (around $330 per month) and South Portland (around $310 per month) tend to run highest in Maine. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Maine HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Maine communities before you offer." }
    ],
    "maryland": [
      { q: "What is the average HOA fee in Maryland in 2026?", a: "The estimated average HOA fee in Maryland is around $270 per month. Fees vary by city, from around $210 per month in Frederick to around $345 per month in Annapolis. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Maryland?", a: "Maryland Homeowners Association Act mandates detailed initial buyer disclosure booklets. See the laws section above for the full list of Maryland rules." },
      { q: "Which Maryland cities have the highest HOA fees?", a: "Annapolis (around $345 per month) and Rockville (around $325 per month) tend to run highest in Maryland. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Maryland HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Maryland communities before you offer." }
    ],
    "massachusetts": [
      { q: "What is the average HOA fee in Massachusetts in 2026?", a: "The estimated average HOA fee in Massachusetts is around $390 per month. Fees vary by city, from around $250 per month in Springfield to around $550 per month in Boston. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Massachusetts?", a: "Massachusetts General Laws Chapter 183A governs condominiums. See the laws section above for the full list of Massachusetts rules." },
      { q: "Which Massachusetts cities have the highest HOA fees?", a: "Boston (around $550 per month) and Cambridge (around $500 per month) tend to run highest in Massachusetts. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Massachusetts HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Massachusetts communities before you offer." }
    ],
    "michigan": [
      { q: "What is the average HOA fee in Michigan in 2026?", a: "The estimated average HOA fee in Michigan is around $230 per month. Fees vary by city, from around $220 per month in Warren to around $305 per month in Detroit. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Michigan?", a: "Michigan Condominium Act establishes rules for co-ownership assets. See the laws section above for the full list of Michigan rules." },
      { q: "Which Michigan cities have the highest HOA fees?", a: "Detroit (around $305 per month) and Ann Arbor (around $285 per month) tend to run highest in Michigan. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Michigan HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Michigan communities before you offer." }
    ],
    "minnesota": [
      { q: "What is the average HOA fee in Minnesota in 2026?", a: "The estimated average HOA fee in Minnesota is around $290 per month. Fees vary by city, from around $250 per month in Rochester to around $340 per month in Minneapolis. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Minnesota?", a: "Minnesota Common Interest Ownership Act (MCIOA) governs most associations formed after 1994. See the laws section above for the full list of Minnesota rules." },
      { q: "Which Minnesota cities have the highest HOA fees?", a: "Minneapolis (around $340 per month) and Saint Paul (around $325 per month) tend to run highest in Minnesota. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Minnesota HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Minnesota communities before you offer." }
    ],
    "mississippi": [
      { q: "What is the average HOA fee in Mississippi in 2026?", a: "The estimated average HOA fee in Mississippi is around $160 per month. Fees vary by city, from around $145 per month in Meridian to around $240 per month in Gulfport. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Mississippi?", a: "Mississippi Nonprofit Corporation Act governs the organizational model of local HOAs. See the laws section above for the full list of Mississippi rules." },
      { q: "Which Mississippi cities have the highest HOA fees?", a: "Gulfport (around $240 per month) and Biloxi (around $230 per month) tend to run highest in Mississippi. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Mississippi HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Mississippi communities before you offer." }
    ],
    "missouri": [
      { q: "What is the average HOA fee in Missouri in 2026?", a: "The estimated average HOA fee in Missouri is around $180 per month. Fees vary by city, from around $150 per month in Saint Joseph to around $240 per month in Saint Louis. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Missouri?", a: "Missouri statutes regulate non-profit HOA corporate registration requirements. See the laws section above for the full list of Missouri rules." },
      { q: "Which Missouri cities have the highest HOA fees?", a: "Saint Louis (around $240 per month) and Kansas City (around $210 per month) tend to run highest in Missouri. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Missouri HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Missouri communities before you offer." }
    ],
    "montana": [
      { q: "What is the average HOA fee in Montana in 2026?", a: "The estimated average HOA fee in Montana is around $210 per month. Fees vary by city, from around $205 per month in Great Falls to around $330 per month in Bozeman. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Montana?", a: "Montana Unit Ownership Act governs structures under co-ownership models. See the laws section above for the full list of Montana rules." },
      { q: "Which Montana cities have the highest HOA fees?", a: "Bozeman (around $330 per month) and Missoula (around $265 per month) tend to run highest in Montana. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Montana HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Montana communities before you offer." }
    ],
    "nebraska": [
      { q: "What is the average HOA fee in Nebraska in 2026?", a: "The estimated average HOA fee in Nebraska is around $180 per month. Fees vary by city, from around $145 per month in Grand Island to around $195 per month in Omaha. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Nebraska?", a: "Nebraska Condominium Act sets rules for multi-unit structural reserves. See the laws section above for the full list of Nebraska rules." },
      { q: "Which Nebraska cities have the highest HOA fees?", a: "Omaha (around $195 per month) and Lincoln (around $175 per month) tend to run highest in Nebraska. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Nebraska HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Nebraska communities before you offer." }
    ],
    "nevada": [
      { q: "What is the average HOA fee in Nevada in 2026?", a: "The estimated average HOA fee in Nevada is around $260 per month. Fees vary by city, from around $245 per month in North Las Vegas to around $315 per month in Reno. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Nevada?", a: "Nevada Revised Statutes Chapter 116 governs all common-interest properties. See the laws section above for the full list of Nevada rules." },
      { q: "Which Nevada cities have the highest HOA fees?", a: "Reno (around $315 per month) and Henderson (around $285 per month) tend to run highest in Nevada. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Nevada HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Nevada communities before you offer." }
    ],
    "new-hampshire": [
      { q: "What is the average HOA fee in New Hampshire in 2026?", a: "The estimated average HOA fee in New Hampshire is around $290 per month. Fees vary by city, from around $250 per month in Derry to around $325 per month in Nashua. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in New Hampshire?", a: "New Hampshire Condominium Act regulates governance and sales disclosures. See the laws section above for the full list of New Hampshire rules." },
      { q: "Which New Hampshire cities have the highest HOA fees?", a: "Nashua (around $325 per month) and Manchester (around $310 per month) tend to run highest in New Hampshire. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a New Hampshire HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in New Hampshire communities before you offer." }
    ],
    "new-jersey": [
      { q: "What is the average HOA fee in New Jersey in 2026?", a: "The estimated average HOA fee in New Jersey is around $340 per month. Fees vary by city, from around $310 per month in Paterson to around $580 per month in Jersey City. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in New Jersey?", a: "New Jersey Radburn Law guarantees fair, democratic voting procedures in all communities. See the laws section above for the full list of New Jersey rules." },
      { q: "Which New Jersey cities have the highest HOA fees?", a: "Jersey City (around $580 per month) and Newark (around $415 per month) tend to run highest in New Jersey. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a New Jersey HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in New Jersey communities before you offer." }
    ],
    "new-mexico": [
      { q: "What is the average HOA fee in New Mexico in 2026?", a: "The estimated average HOA fee in New Mexico is around $190 per month. Fees vary by city, from around $160 per month in Roswell to around $305 per month in Santa Fe. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in New Mexico?", a: "New Mexico Homeowner Association Act sets rules for mandatory disclosure cards. See the laws section above for the full list of New Mexico rules." },
      { q: "Which New Mexico cities have the highest HOA fees?", a: "Santa Fe (around $305 per month) and Albuquerque (around $205 per month) tend to run highest in New Mexico. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a New Mexico HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in New Mexico communities before you offer." }
    ],
    "north-carolina": [
      { q: "What is the average HOA fee in North Carolina in 2026?", a: "The estimated average HOA fee in North Carolina is around $220 per month. Fees vary by city, from around $185 per month in Winston-Salem to around $230 per month in Charlotte. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in North Carolina?", a: "North Carolina Planned Community Act dictates board budget publication requirements. See the laws section above for the full list of North Carolina rules." },
      { q: "Which North Carolina cities have the highest HOA fees?", a: "Charlotte (around $230 per month) and Raleigh (around $220 per month) tend to run highest in North Carolina. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a North Carolina HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in North Carolina communities before you offer." }
    ],
    "north-dakota": [
      { q: "What is the average HOA fee in North Dakota in 2026?", a: "The estimated average HOA fee in North Dakota is around $190 per month. Fees vary by city, from around $190 per month in Minot to around $220 per month in Fargo. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in North Dakota?", a: "North Dakota Condominium Property Act regulates land use rules in planned projects. See the laws section above for the full list of North Dakota rules." },
      { q: "Which North Dakota cities have the highest HOA fees?", a: "Fargo (around $220 per month) and Grand Forks (around $210 per month) tend to run highest in North Dakota. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a North Dakota HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in North Dakota communities before you offer." }
    ],
    "ohio": [
      { q: "What is the average HOA fee in Ohio in 2026?", a: "The estimated average HOA fee in Ohio is around $210 per month. Fees vary by city, from around $190 per month in Toledo to around $270 per month in Cleveland. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Ohio?", a: "Ohio Planned Community Act regulates HOA enforcement structures and lien tools. See the laws section above for the full list of Ohio rules." },
      { q: "Which Ohio cities have the highest HOA fees?", a: "Cleveland (around $270 per month) and Cincinnati (around $240 per month) tend to run highest in Ohio. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Ohio HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Ohio communities before you offer." }
    ],
    "oklahoma": [
      { q: "What is the average HOA fee in Oklahoma in 2026?", a: "The estimated average HOA fee in Oklahoma is around $170 per month. Fees vary by city, from around $150 per month in Broken Arrow to around $205 per month in Edmond. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Oklahoma?", a: "Oklahoma Real Estate License Code mandates specific sales disclosure packets. See the laws section above for the full list of Oklahoma rules." },
      { q: "Which Oklahoma cities have the highest HOA fees?", a: "Edmond (around $205 per month) and Oklahoma City (around $180 per month) tend to run highest in Oklahoma. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Oklahoma HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Oklahoma communities before you offer." }
    ],
    "oregon": [
      { q: "What is the average HOA fee in Oregon in 2026?", a: "The estimated average HOA fee in Oregon is around $240 per month. Fees vary by city, from around $220 per month in Salem to around $315 per month in Portland. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Oregon?", a: "Oregon Planned Community Act governs guidelines for all registered developers. See the laws section above for the full list of Oregon rules." },
      { q: "Which Oregon cities have the highest HOA fees?", a: "Portland (around $315 per month) and Hillsboro (around $255 per month) tend to run highest in Oregon. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Oregon HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Oregon communities before you offer." }
    ],
    "pennsylvania": [
      { q: "What is the average HOA fee in Pennsylvania in 2026?", a: "The estimated average HOA fee in Pennsylvania is around $280 per month. Fees vary by city, from around $220 per month in Reading to around $390 per month in Philadelphia. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Pennsylvania?", a: "Pennsylvania Uniform Planned Community Act governs suburban developments. See the laws section above for the full list of Pennsylvania rules." },
      { q: "Which Pennsylvania cities have the highest HOA fees?", a: "Philadelphia (around $390 per month) and Pittsburgh (around $310 per month) tend to run highest in Pennsylvania. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Pennsylvania HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Pennsylvania communities before you offer." }
    ],
    "rhode-island": [
      { q: "What is the average HOA fee in Rhode Island in 2026?", a: "The estimated average HOA fee in Rhode Island is around $320 per month. Fees vary by city, from around $295 per month in Pawtucket to around $380 per month in Providence. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Rhode Island?", a: "Rhode Island Condominium Amendment Act mandates structural insurance configurations. See the laws section above for the full list of Rhode Island rules." },
      { q: "Which Rhode Island cities have the highest HOA fees?", a: "Providence (around $380 per month) and Warwick (around $330 per month) tend to run highest in Rhode Island. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Rhode Island HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Rhode Island communities before you offer." }
    ],
    "south-carolina": [
      { q: "What is the average HOA fee in South Carolina in 2026?", a: "The estimated average HOA fee in South Carolina is around $250 per month. Fees vary by city, from around $190 per month in Rock Hill to around $360 per month in Charleston. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in South Carolina?", a: "South Carolina Homeowners Association Act mandates that all rules must be registered. See the laws section above for the full list of South Carolina rules." },
      { q: "Which South Carolina cities have the highest HOA fees?", a: "Charleston (around $360 per month) and Mount Pleasant (around $335 per month) tend to run highest in South Carolina. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a South Carolina HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in South Carolina communities before you offer." }
    ],
    "south-dakota": [
      { q: "What is the average HOA fee in South Dakota in 2026?", a: "The estimated average HOA fee in South Dakota is around $170 per month. Fees vary by city, from around $150 per month in Watertown to around $205 per month in Rapid City. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in South Dakota?", a: "South Dakota Real Estate Code outlines specific property sale disclosure lines. See the laws section above for the full list of South Dakota rules." },
      { q: "Which South Dakota cities have the highest HOA fees?", a: "Rapid City (around $205 per month) and Sioux Falls (around $195 per month) tend to run highest in South Dakota. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a South Dakota HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in South Dakota communities before you offer." }
    ],
    "tennessee": [
      { q: "What is the average HOA fee in Tennessee in 2026?", a: "The estimated average HOA fee in Tennessee is around $190 per month. Fees vary by city, from around $175 per month in Clarksville to around $255 per month in Nashville. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Tennessee?", a: "Tennessee Horizontal Property Act governs high-density developments. See the laws section above for the full list of Tennessee rules." },
      { q: "Which Tennessee cities have the highest HOA fees?", a: "Nashville (around $255 per month) and Memphis (around $220 per month) tend to run highest in Tennessee. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Tennessee HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Tennessee communities before you offer." }
    ],
    "utah": [
      { q: "What is the average HOA fee in Utah in 2026?", a: "The estimated average HOA fee in Utah is around $230 per month. Fees vary by city, from around $225 per month in West Jordan to around $285 per month in Salt Lake City. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Utah?", a: "Utah Community Association Act regulates the standard governance of local HOAs. See the laws section above for the full list of Utah rules." },
      { q: "Which Utah cities have the highest HOA fees?", a: "Salt Lake City (around $285 per month) and Provo (around $250 per month) tend to run highest in Utah. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Utah HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Utah communities before you offer." }
    ],
    "vermont": [
      { q: "What is the average HOA fee in Vermont in 2026?", a: "The estimated average HOA fee in Vermont is around $280 per month. Fees vary by city, from around $250 per month in Barre to around $360 per month in Burlington. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Vermont?", a: "Vermont Common Interest Ownership Act manages consumer development protocols. See the laws section above for the full list of Vermont rules." },
      { q: "Which Vermont cities have the highest HOA fees?", a: "Burlington (around $360 per month) and South Burlington (around $330 per month) tend to run highest in Vermont. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Vermont HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Vermont communities before you offer." }
    ],
    "virginia": [
      { q: "What is the average HOA fee in Virginia in 2026?", a: "The estimated average HOA fee in Virginia is around $260 per month. Fees vary by city, from around $220 per month in Richmond to around $425 per month in Arlington. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Virginia?", a: "Virginia Property Owners' Association Act sets parameters for corporate reporting. See the laws section above for the full list of Virginia rules." },
      { q: "Which Virginia cities have the highest HOA fees?", a: "Arlington (around $425 per month) and Norfolk (around $285 per month) tend to run highest in Virginia. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Virginia HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Virginia communities before you offer." }
    ],
    "washington": [
      { q: "What is the average HOA fee in Washington in 2026?", a: "The estimated average HOA fee in Washington is around $280 per month. Fees vary by city, from around $220 per month in Spokane to around $390 per month in Bellevue. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Washington?", a: "Washington Uniform Common Interest Ownership Act (WUCIOA) governs all registered subdivisions. See the laws section above for the full list of Washington rules." },
      { q: "Which Washington cities have the highest HOA fees?", a: "Bellevue (around $390 per month) and Seattle (around $365 per month) tend to run highest in Washington. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Washington HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Washington communities before you offer." }
    ],
    "west-virginia": [
      { q: "What is the average HOA fee in West Virginia in 2026?", a: "The estimated average HOA fee in West Virginia is around $180 per month. Fees vary by city, from around $175 per month in Parkersburg to around $220 per month in Morgantown. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in West Virginia?", a: "West Virginia Uniform Common Interest Ownership Act protects condominium properties. See the laws section above for the full list of West Virginia rules." },
      { q: "Which West Virginia cities have the highest HOA fees?", a: "Morgantown (around $220 per month) and Charleston (around $205 per month) tend to run highest in West Virginia. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a West Virginia HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in West Virginia communities before you offer." }
    ],
    "wisconsin": [
      { q: "What is the average HOA fee in Wisconsin in 2026?", a: "The estimated average HOA fee in Wisconsin is around $220 per month. Fees vary by city, from around $220 per month in Green Bay to around $315 per month in Milwaukee. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Wisconsin?", a: "Wisconsin Condominium Ownership Act governs general association subdivisions. See the laws section above for the full list of Wisconsin rules." },
      { q: "Which Wisconsin cities have the highest HOA fees?", a: "Milwaukee (around $315 per month) and Madison (around $280 per month) tend to run highest in Wisconsin. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Wisconsin HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Wisconsin communities before you offer." }
    ],
    "wyoming": [
      { q: "What is the average HOA fee in Wyoming in 2026?", a: "The estimated average HOA fee in Wyoming is around $190 per month. Fees vary by city, from around $165 per month in Rock Springs to around $220 per month in Cheyenne. Your actual fee depends on the community amenities, building age, and reserve funding." },
      { q: "Which law governs HOAs in Wyoming?", a: "Wyoming Nonprofit Corporation Act governs the business model of HOAs. See the laws section above for the full list of Wyoming rules." },
      { q: "Which Wyoming cities have the highest HOA fees?", a: "Cheyenne (around $220 per month) and Laramie (around $205 per month) tend to run highest in Wyoming. See the city table above for the full comparison." },
      { q: "What should buyers check before purchasing in a Wyoming HOA?", a: "Ask for the current budget, the most recent reserve study, meeting minutes, and whether any special assessment is planned or pending. Confirm the exact monthly fee in the seller resale packet, since listing figures are sometimes outdated, and check what the fee covers in Wyoming communities before you offer." }
    ]
  };

  const faqs = STATE_CUSTOM_FAQS[cleanSlug] || [
    {
      q: `How much are average HOA fees in ${displayName}?`,
      a: `The estimated average HOA fee in ${displayName} is around $${stateData.avgFee} per month. However, actual monthly costs vary significantly by city, with high-demand urban areas and master-planned golf communities skewing higher, while rural or older subdivisions have much lower dues.`
    },
    {
      q: `What are the primary homeowners association laws in ${displayName}?`,
      a: `HOAs in ${displayName} are governed by specific state regulations designed to ensure financial transparency and protect homeowner rights. These statutes typically mandate that associations hold open board meetings, maintain detailed financial records, and provide reasonable access to books for all active members.`
    },
    {
      q: `Can ${displayName} HOAs restrict solar panels or xeriscaping?`,
      a: `While associations can enforce aesthetic standards, ${displayName} laws often protect homeowners' rights to install solar energy systems or low-water xeriscaping. However, you should always consult your specific community's bylaws and CC&Rs, as reasonable aesthetic guidelines can still be enforced by the board.`
    },
    {
      q: `What happens if a homeowner defaults on HOA fees in ${displayName}?`,
      a: `If a homeowner defaults on dues in ${displayName}, the association has the legal authority to impose late fees, apply interest penalties, and suspend access to communal amenities. If the delinquency remains unpaid, the HOA can place a lien on the property, which can ultimately lead to foreclosure.`
    }
  ];

  const faqSchema = {
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

  const pageSchema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `${displayName} HOA Fees 2026 | Average Costs & Calculator`,
      "description": `Calculate HOA fees in ${displayName}. See average costs by city, legal rules, and estimate your lifetime HOA expenses.`,
      "url": `https://www.hoafeecalculator.com/states/${cleanSlug}`,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".aeo-quick-answer"]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Place",
      "name": `${displayName}, United States`,
      "description": `Homeowners association fee averages, statutory regulations, and city-by-city housing cost data for ${displayName}.`
    },
    faqSchema
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title={`${displayName} HOA Fees 2026 | Average Costs & Calculator`}
        description={`Calculate HOA fees in ${displayName}. See average costs by city, legal rules, and estimate your lifetime HOA expenses.`}
        canonical={`/states/${cleanSlug}`}
        schema={pageSchema}
      />

      {/* Header */}
      <Header />

      <main className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-10">
            <Link to="/states" className="text-accent font-bold hover:underline mb-4 inline-block">← Back to All States</Link>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
              {displayName} HOA Fee Calculator & Guide 2026
            </h1>
            <p className="text-xl text-primary opacity-70 max-w-3xl leading-relaxed">
              Thinking about buying in {displayName}? Here's what you need to know about local HOA laws, average costs, and how to avoid overpaying.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-primary opacity-80 uppercase font-bold tracking-wider mt-4">
              <span>Updated: September 2026</span>
              <span>•</span>
              <span className="text-accent normal-case font-bold">Compiled by HOAFeeCalculator.com</span>
            </div>
          </header>

          {/* AEO Quick Answer Box */}
          <div className="mb-12">
            <QuickAnswerBox
              title={`Quick Answer: Average HOA Fees in ${displayName}`}
              answer={`In ${displayName}, average monthly HOA fees typically range from $${stateData.avgFee > 250 ? Math.round(stateData.avgFee * 0.65) : 100} to $${Math.round(stateData.avgFee * 1.5)}+ per month, with an estimated statewide median of approximately $${stateData.avgFee}/month. In major metropolitan centers, luxury high-rises and amenity-rich master-planned communities frequently exceed this average, whereas older single-family subdivisions maintain significantly lower dues. State statutes govern budget adoption, reserve fund disclosures, and open meeting transparency.`}
              highlights={[
                { label: `${displayName} Average`, value: `$${stateData.avgFee} / mo` },
                { label: "City Variations", value: `${stateData.cities.length} Metros Analyzed` },
                { label: "Governing Laws", value: "State Statutes Apply" },
                { label: "Data Updated", value: "October 29, 2026" }
              ]}
              className="not-prose"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <section className="card border-none shadow-xl">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8 underline decoration-accent decoration-4 underline-offset-8">HOA Fees by City in {displayName}</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="py-4 font-bold text-primary uppercase text-xs tracking-wider">City</th>
                        <th className="py-4 font-bold text-primary uppercase text-xs tracking-wider">Estimated Average HOA Fee Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {stateData.cities.map((city) => (
                        <tr key={city.name} className="hover:bg-bg-light transition-colors">
                          <td className="py-6 font-bold text-primary">{city.name}</td>
                          <td className="py-6 text-accent font-bold">{city.range}/mo</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <article className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">{displayName} HOA Laws You Must Know</h2>
                <div className="space-y-6 text-primary opacity-80 text-lg leading-relaxed font-sans">
                  <p>
                    {stateData.excerpt}
                  </p>
                  <p>
                    In {displayName}, HOAs are governed by specific state statutes that protect both the association and individual homeowners (compare these statutory protections with our 50-state analysis of <Link to="/blog/hoa-laws-by-state" className="text-accent underline font-bold hover:text-accent/80">HOA laws by state</Link> and nationwide <Link to="/blog/average-hoa-fees-by-state" className="text-accent underline font-bold hover:text-accent/80">average HOA fees by state</Link>). It's critical to understand your rights before you sign on the dotted line.
                  </p>
                  <p>
                    One of the most important aspects of local laws is transparency. HOA boards are typically required to hold open, announced meetings and provide clear, itemized access to financial records and meeting minutes.
                  </p>
                  <ul className="list-disc pl-6 space-y-3">
                    {stateData.laws.map((law, index) => (
                      <li key={index} className="text-primary/90 font-medium font-sans">
                        {law}
                      </li>
                    ))}
                  </ul>
                  <div className="bg-bg-light p-8 rounded-2xl border-l-4 border-accent italic mt-6 font-serif">
                    "Always review the 'Master Deed' and 'Bylaws' specific to your community. These documents often override general state guidelines regarding architectural controls and fine structures."
                  </div>

                  {/* Flagship Custom Real-World Case Studies */}
                  {cleanSlug === 'texas' && (
                    <div className="my-8 bg-amber-50/70 border border-amber-300 rounded-2xl p-6 md:p-8 not-prose">
                      <span className="bg-amber-200/80 text-amber-900 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">
                        Texas Homebuyer Illustrative Example: Collin County MUD &amp; Sub-HOA Costs
                      </span>
                      <h4 className="text-xl font-serif font-bold text-primary mb-3">
                        Suburban Dallas Reality: The $450,000 Celina Dual-Assessment
                      </h4>
                      <p className="text-primary/80 text-sm leading-relaxed mb-4">
                        A buyer relocating to North Texas purchased a home in a Celina master-planned development with an advertised $110/month HOA fee. Upon receiving the first tax bill, the homeowner realized the neighborhood sat within an active Municipal Utility District (MUD) levying a 1.18% debt-service assessment ($5,310/yr), plus a separate gated enclave fee of $85/month.
                      </p>
                      <div className="bg-white p-4 rounded-xl border border-amber-200 text-xs sm:text-sm space-y-1.5 font-sans mb-3">
                        <div className="flex justify-between"><span className="text-primary/70">Master HOA Dues:</span><span className="font-bold text-primary">$110 / month</span></div>
                        <div className="flex justify-between"><span className="text-primary/70">MUD Bond Surcharge:</span><span className="font-bold text-primary">$442.50 / month</span></div>
                        <div className="flex justify-between"><span className="text-primary/70">Enclave Gate Maintenance:</span><span className="font-bold text-primary">$85 / month</span></div>
                        <div className="border-t border-border pt-1.5 flex justify-between font-bold text-accent"><span>Total Monthly Carrying Fees:</span><span>$637.50 / month</span></div>
                      </div>
                      <p className="text-primary/75 text-xs sm:text-sm leading-relaxed">
                        Texas buyers should always review the Title Commitment for MUD/PID tax notices and obtain TREC Form 37-5 before waiving option periods.
                      </p>
                    </div>
                  )}

                  {cleanSlug === 'california' && (
                    <div className="my-8 bg-amber-50/70 border border-amber-300 rounded-2xl p-6 md:p-8 not-prose">
                      <span className="bg-amber-200/80 text-amber-900 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block">
                        California Homebuyer Illustrative Example: West LA SB 326 Deck Assessment
                      </span>
                      <h4 className="text-xl font-serif font-bold text-primary mb-3">
                        Palms 14-Unit Building: The $32,000 Special Assessment
                      </h4>
                      <p className="text-primary/80 text-sm leading-relaxed mb-4">
                        A buyer in West Los Angeles closed on a two-bedroom condo with monthly dues of $425. Within nine months, the association completed its mandatory Senate Bill 326 elevated walkway inspection, uncovering severe waterproofing failure and cantilever rot.
                      </p>
                      <div className="bg-white p-4 rounded-xl border border-amber-200 text-xs sm:text-sm space-y-1.5 font-sans mb-3">
                        <div className="flex justify-between"><span className="text-primary/70">Pre-Purchase Monthly Dues:</span><span className="font-bold text-primary">$425 / month</span></div>
                        <div className="flex justify-between"><span className="text-primary/70">Reserve Study Funding Level:</span><span className="font-bold text-red-600">24% (Severely Underfunded)</span></div>
                        <div className="flex justify-between"><span className="text-primary/70">Mandatory Balcony Special Assessment:</span><span className="font-bold text-primary">$32,000 / unit</span></div>
                        <div className="border-t border-border pt-1.5 flex justify-between font-bold text-accent"><span>New Monthly Dues Post-Repair:</span><span>$590 / month (+38.8%)</span></div>
                      </div>
                      <p className="text-primary/75 text-xs sm:text-sm leading-relaxed">
                        Under Civil Code § 5605, California associations with depleted reserves can levy emergency assessments when life-safety repairs are required by municipal inspectors.
                      </p>
                    </div>
                  )}

                  {stateGuide ? (
                    <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-bg-light border-2 border-accent/30 rounded-2xl p-6 md:p-8 mt-10 shadow-sm not-prose">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div className="space-y-2">
                          <span className="inline-block bg-accent/20 text-accent font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                            Featured Research Guide
                          </span>
                          <h3 className="text-2xl font-serif font-bold text-primary">
                            {stateGuide.title}
                          </h3>
                          <p className="text-primary/80 text-sm md:text-base max-w-2xl leading-relaxed font-sans">
                            {stateGuide.desc}
                          </p>
                        </div>
                        <Link 
                          to={stateGuide.url}
                          className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white font-bold py-3.5 px-6 rounded-full text-sm transition-all whitespace-nowrap shadow-md hover:scale-105 active:scale-95"
                        >
                          Read Full Guide →
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-bg-light border border-border rounded-2xl p-6 md:p-8 mt-10 not-prose">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                        <div>
                          <span className="inline-block bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                            National Benchmark
                          </span>
                          <h3 className="text-xl font-serif font-bold text-primary">
                            How Do {displayName} HOA Fees Compare Nationally?
                          </h3>
                          <p className="text-primary/70 text-sm mt-1 font-sans">
                            See how {displayName} stacks up against all 50 states in our nationwide fee and legislation report.
                          </p>
                        </div>
                        <Link 
                          to="/blog/average-hoa-fees-by-state"
                          className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-full text-sm transition-all whitespace-nowrap"
                        >
                          View 50-State Ranking →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </article>

              <section id="calculator" className="pt-8 border-t border-border">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">Calculate Your Custom {displayName} Lifetime HOA Cost</h2>
                <Suspense fallback={
                  <div className="min-h-[500px] flex flex-col items-center justify-center bg-bg-light/50 rounded-3xl border border-border/50 p-8 shadow-sm">
                    <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-sm text-primary/60 font-medium">Loading HOA Fee Calculator...</p>
                  </div>
                }>
                  <Calculator />
                </Suspense>
              </section>

              <section className="pt-16 mt-8 border-t border-border">
                <h2 className="text-3xl font-serif font-bold text-primary mb-8">{displayName} HOA Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => {
                    const isOpen = openFaq === index;
                    return (
                      <div key={index} className="border border-border/60 rounded-2xl overflow-hidden transition-all duration-200">
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : index)}
                          className="w-full text-left px-6 py-5 bg-bg-light hover:bg-bg-light/80 flex justify-between items-center transition-colors font-sans cursor-pointer focus:outline-none"
                        >
                          <span className="font-bold text-primary text-lg pr-4">{faq.q}</span>
                          <span className={`text-accent font-bold transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 border-t border-border/40' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                          <p className="px-6 py-5 text-primary opacity-80 leading-relaxed font-sans text-base">{faq.a}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>

              <div className="bg-bg-light p-8 rounded-2xl border border-border flex flex-col md:flex-row items-center justify-between gap-6 mt-12">
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2">Need a Comprehensive Property Budget?</h3>
                  <p className="text-primary/70 text-sm font-sans">Compare multiple properties side-by-side or calculate complex inflation-adjusted lifetime HOA costs.</p>
                </div>
                <Link to="/" className="btn bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-bold transition-all text-center whitespace-nowrap font-sans">
                  ← Go to Home Page Calculator
                </Link>
              </div>
            </div>

            <aside className="space-y-8">
              {stateGuide && (
                <div className="card bg-accent/10 border-2 border-accent/30 shadow-md">
                  <span className="text-xs uppercase font-bold tracking-wider text-accent block mb-2">Detailed State Report</span>
                  <h4 className="font-serif text-lg font-bold text-primary mb-2">
                    {stateGuide.title}
                  </h4>
                  <p className="text-primary/75 text-xs font-sans leading-relaxed mb-4">
                    {stateGuide.desc}
                  </p>
                  <Link 
                    to={stateGuide.url}
                    className="inline-flex items-center gap-1.5 text-accent font-bold hover:underline text-sm font-sans"
                  >
                    Read State Analysis →
                  </Link>
                </div>
              )}

              <div className="card bg-primary text-white border-none">
                <h4 className="font-serif text-xl font-bold mb-6 text-accent font-sans">Related State Guides</h4>
                <ul className="space-y-4">
                  {['Florida', 'California', 'Arizona', 'Texas'].filter(s => s.toLowerCase() !== stateName.toLowerCase()).slice(0, 3).map((s) => (
                    <li key={s}>
                      <Link 
                        to={`/states/${s.toLowerCase()}`} 
                        className="flex justify-between items-center group"
                      >
                        <span className="group-hover:text-accent transition-colors font-bold font-sans">{s} HOA Guide</span>
                        <span className="text-accent">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card shadow-md border border-border">
                <h4 className="font-serif text-lg font-bold text-primary mb-4 font-sans">Essential Buyer Guides</h4>
                <ul className="space-y-3 text-sm font-sans">
                  <li>
                    <Link to="/blog/hoa-reserve-fund" className="text-primary/80 hover:text-accent font-medium block">
                      • HOA Reserve Fund Guide for Buyers
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/questions-before-buying-hoa" className="text-primary/80 hover:text-accent font-medium block">
                      • 10 Questions to Ask Before Buying
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/hoa-document-red-flags" className="text-primary/80 hover:text-accent font-medium block">
                      • Red Flags in HOA Resale Documents
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog/average-hoa-fees-by-state" className="text-primary/80 hover:text-accent font-medium block">
                      • Average HOA Fees by State (Ranked)
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="card shadow-lg border-none">
                <div className="flex items-center gap-4 mb-6">
                   <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xl">💡</div>
                   <h4 className="font-serif text-xl font-bold text-primary">Good to Know</h4>
                </div>
                <p className="text-primary opacity-70 leading-relaxed italic font-sans text-base">
                  "In {displayName}, property values are highly tied to HOA financial health. A poorly funded{' '}
                  <Link to="/blog/hoa-reserve-fund" className="text-accent underline hover:text-accent/80 not-italic font-semibold">
                    reserve fund
                  </Link>{' '}
                  can trigger five-figure{' '}
                  <Link to="/blog/hoa-special-assessment" className="text-accent underline hover:text-accent/80 not-italic font-semibold">
                    special assessments
                  </Link>{' '}
                  that destroy home equity overnight."
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <footer className="bg-primary py-12 px-6 text-white/75 mt-auto border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-6">
          <Link to="/" className="flex items-center">
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
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <p className="text-sm font-sans">© 2026 All Rights Reserved. Data for {displayName} updated September 2026.</p>
            <SocialIcons />
          </div>
        </div>
      </footer>
    </div>
  );
}
