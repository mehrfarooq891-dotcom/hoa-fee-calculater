export interface StateDataDetail {
  avgFee: number;
  intro: string;
  cities: { name: string; avgFee: number; range: string }[];
  laws: string[];
}

export const statesData: Record<string, StateDataDetail> = {
  "alabama": {
    avgFee: 210,
    intro: "Homeowners associations are increasingly common in Alabama's master-planned suburbs and coastal resort regions. Average fees tend to skew lower than the national average, centering around $150 to $280 per month. Understanding the specific Covenant, Conditions, and Restrictions (CC&Rs) is critical before purchasing, as developer transitions can lead to sudden dues increases.",
    cities: [
      { name: "Birmingham", avgFee: 215, range: "$150 - $280" },
      { name: "Montgomery", avgFee: 170, range: "$120 - $220" },
      { name: "Mobile", avgFee: 250, range: "$180 - $320" },
      { name: "Huntsville", avgFee: 200, range: "$140 - $260" },
      { name: "Tuscaloosa", avgFee: 185, range: "$130 - $240" }
    ],
    laws: [
      "Alabama Homeowners Association Act governs registration requirements and corporate transparency.",
      "Associations must file their bylaws and covenants in the county real estate records.",
      "Homeowners hold statutory audit rights to review annual operating ledgers."
    ]
  },
  "alaska": {
    avgFee: 400,
    intro: "In Alaska, HOA developments are concentrated primarily in urban centers like Anchorage and Juneau. Due to severe northern winters, snow removal, roof maintenance, and structural heating represent significant operational expenses. Homeowners should closely scrutinize the association's reserve studies to ensure they can handle high winter expenditures without levying sudden special assessments.",
    cities: [
      { name: "Anchorage", avgFee: 350, range: "$250 - $450" },
      { name: "Juneau", avgFee: 425, range: "$300 - $550" },
      { name: "Fairbanks", avgFee: 290, range: "$200 - $380" },
      { name: "Sitka", avgFee: 460, range: "$320 - $600" },
      { name: "Wasilla", avgFee: 250, range: "$180 - $320" }
    ],
    laws: [
      "Alaska Common Interest Ownership Act regulates consumer disclosure boundaries for properties.",
      "Associations can levy emergency snow-clearance fees with broad authority.",
      "A detailed physical reserve assessment is required every five years."
    ]
  },
  "arizona": {
    avgFee: 290,
    intro: "Arizona offers extensive master-planned active adult and desert communities with unique landscaping and clubhouse amenities. Water conservation directives and Xeriscaping guidelines are heavily integrated into local association requirements under state statute. Homeowners should plan for consistent operational expenses to maintain community pools and dust control.",
    cities: [
      { name: "Phoenix", avgFee: 290, range: "$200 - $380" },
      { name: "Tucson", avgFee: 250, range: "$180 - $320" },
      { name: "Mesa", avgFee: 235, range: "$170 - $300" },
      { name: "Scottsdale", avgFee: 430, range: "$280 - $580" },
      { name: "Tempe", avgFee: 270, range: "$190 - $350" }
    ],
    laws: [
      "Arizona Revised Statutes (ARS Title 33) govern the baseline rules for active HOAs.",
      "Open meeting laws strictly prohibit executive board secret votes on budget levels or penalty fees.",
      "The association cannot outlaw Xeriscaping (drought-tolerant landscaping layouts)."
    ]
  },
  "arkansas": {
    avgFee: 170,
    intro: "Arkansas HOA associations reside mostly in modern single-family subdivisions and scenic lake communities like Hot Springs. Average monthly assessments are among the lowest in the nation, but maintaining shared private roads and utility lines represents a core liability. Buyers should verify if the community water systems are privately operated or connected to municipal grids.",
    cities: [
      { name: "Little Rock", avgFee: 180, range: "$120 - $240" },
      { name: "Fort Smith", avgFee: 145, range: "$100 - $190" },
      { name: "Fayetteville", avgFee: 200, range: "$140 - $260" },
      { name: "Springdale", avgFee: 180, range: "$130 - $230" },
      { name: "Jonesboro", avgFee: 160, range: "$110 - $210" }
    ],
    laws: [
      "Arkansas Horizontal Property Act dictates multi-unit condominium division rules.",
      "Amendments to neighborhood covenants require an absolute 67% majority vote.",
      "Delinquency liens are restricted from structural home foreclosure without clear court hearings."
    ]
  },
  "california": {
    avgFee: 450,
    intro: "California handles association properties under the comprehensive Davis-Stirling Common Interest Development Act. Driven by high property values and strict environmental/fire mitigation mandates, California features some of the highest monthly HOA averages. Homeowners must stay informed about solar rights, emergency fire assessments, and long-term reserve planning requirements.",
    cities: [
      { name: "Los Angeles", avgFee: 500, range: "$350 - $650" },
      { name: "San Francisco", avgFee: 650, range: "$450 - $850" },
      { name: "San Diego", avgFee: 440, range: "$300 - $580" },
      { name: "San Jose", avgFee: 470, range: "$320 - $620" },
      { name: "Sacramento", avgFee: 320, range: "$220 - $420" }
    ],
    laws: [
      "Davis-Stirling Common Interest Development Act governs all California residential association rules.",
      "Boards cannot prohibit homeowners from planting low-water landscaping/Xeriscaping or installing solar panels.",
      "Annual financial reserve disclosure reports must be delivered to every active member synchronously."
    ]
  },
  "colorado": {
    avgFee: 310,
    intro: "Colorado's alpine climate and expansive suburban rings make snow routing and fire mitigation central HOA priorities. Dues vary considerably between flatland single-family areas and high-altitude mountain ski complexes. Understanding the Colorado Common Interest Ownership Act (CCIOA) is vital for tracking manager certification and dispute mediation.",
    cities: [
      { name: "Denver", avgFee: 335, range: "$220 - $450" },
      { name: "Colorado Springs", avgFee: 265, range: "$180 - $350" },
      { name: "Aurora", avgFee: 285, range: "$190 - $380" },
      { name: "Fort Collins", avgFee: 240, range: "$160 - $320" },
      { name: "Boulder", avgFee: 415, range: "$280 - $550" }
    ],
    laws: [
      "Colorado Common Interest Ownership Act (CCIOA) regulates structural budget approvals.",
      "Homeowners possess absolute statutory rights to display political signs and national flags.",
      "Boards must adopt formal policies regarding covenant collections and structural disputes."
    ]
  },
  "connecticut": {
    avgFee: 380,
    intro: "In Connecticut, common interest communities are highly structured under the Common Interest Ownership Act (CIOA). Dues skew higher than national levels due to aging historic infrastructure, coastal winterization needs, and professional management service premiums. Homeowners should inspect public offering statements and resale certificates rigorously.",
    cities: [
      { name: "Bridgeport", avgFee: 400, range: "$280 - $520" },
      { name: "New Haven", avgFee: 365, range: "$250 - $480" },
      { name: "Hartford", avgFee: 350, range: "$240 - $460" },
      { name: "Stamford", avgFee: 550, range: "$380 - $720" },
      { name: "Waterbury", avgFee: 290, range: "$200 - $380" }
    ],
    laws: [
      "Connecticut Common Interest Ownership Act provides standard unit resale warranties.",
      "Associations can compile superpriority liens for nine months of unpaid dues.",
      "Formal financial audits are required annually if budget guidelines cross $50,000."
    ]
  },
  "delaware": {
    avgFee: 290,
    intro: "Delaware's favorable tax structure has accelerated the growth of retirement and coastal communities with active HOAs. Monthly dues directly fund private beach access, community clubhouses, and stormwater management ponds. Understanding Delaware's Unit Property Act provides buyers with clear boundaries surrounding board authority and reserve requirements.",
    cities: [
      { name: "Wilmington", avgFee: 290, range: "$200 - $380" },
      { name: "Dover", avgFee: 215, range: "$150 - $280" },
      { name: "Newark", avgFee: 235, range: "$160 - $310" },
      { name: "Middletown", avgFee: 205, range: "$140 - $270" },
      { name: "Rehoboth Beach", avgFee: 415, range: "$280 - $550" }
    ],
    laws: [
      "Delaware Uniform Common Interest Ownership Act establishes a dedicated Ombudsman office.",
      "Boards are prohibited from charging disproportionate master document copying fees.",
      "Annual budget votes are certified unless a full majority of owners actively vetoes."
    ]
  },
  "florida": {
    avgFee: 410,
    intro: "Florida's HOA and condominium landscape is heavily defined by high-rise coastal living and master-planned golf course subdivisions. Escalating commercial property insurance premiums and extensive new structural integrity safety mandates play major roles in HOA finances. Prospective buyers must pay close attention to structural reserve studies and statutory milestone inspections.",
    cities: [
      { name: "Miami", avgFee: 565, range: "$380 - $750" },
      { name: "Orlando", avgFee: 320, range: "$220 - $420" },
      { name: "Tampa", avgFee: 365, range: "$250 - $480" },
      { name: "Fort Lauderdale", avgFee: 485, range: "$320 - $650" },
      { name: "Jacksonville", avgFee: 270, range: "$180 - $360" }
    ],
    laws: [
      "Senate Bill 4-D mandates detailed Structural Integrity Reserve Studies (SIRS) for buildings over 3 stories high.",
      "In Florida, boards are legally prohibited from underfunding or waiving reserve accounts for vital components.",
      "Transfer disclosures are strictly required before any property deed title undergoes real estate closing."
    ]
  },
  "georgia": {
    avgFee: 250,
    intro: "Georgia's growing suburban layout features thousands of master-planned developments with swim, tennis, and park amenities. Associations generally operate under either the Georgia Property Owners' Association Act (POA) or basic covenants. Homeowners must understand the legal distinction between these frameworks, particularly regarding lien rights and assessment rules.",
    cities: [
      { name: "Atlanta", avgFee: 280, range: "$180 - $380" },
      { name: "Savannah", avgFee: 335, range: "$220 - $450" },
      { name: "Augusta", avgFee: 195, range: "$130 - $260" },
      { name: "Athens", avgFee: 210, range: "$140 - $280" },
      { name: "Columbus", avgFee: 180, range: "$120 - $240" }
    ],
    laws: [
      "Georgia Property Owners' Association Act (POA) grants automatic statutory lien powers.",
      "Amendments to older, pre-existing covenants require full homeowner compliance ballots.",
      "Boards are prohibited from banning solar systems or outdoor clothing clotheslines."
    ]
  },
  "hawaii": {
    avgFee: 790,
    intro: "Hawaii presents unique real estate parameters, with extreme shipping costs, intensive salt-air exposure, and high-density resorts contributing to the highest HOA averages in the United States. Dues are heavily weighted toward seawall integrity, multi-million-dollar plumbing retrofits, and state-mandated property insurance. A detailed review of association reserves is an absolute necessity here.",
    cities: [
      { name: "Honolulu", avgFee: 825, range: "$550 - $1,100" },
      { name: "Kahului", avgFee: 715, range: "$480 - $950" },
      { name: "Kailua", avgFee: 675, range: "$450 - $900" },
      { name: "Kaneohe", avgFee: 635, range: "$420 - $850" },
      { name: "Hilo", avgFee: 525, range: "$350 - $700" }
    ],
    laws: [
      "Hawaii HRS Chapter 514B regulates the structural safety and insurance of dense multi-unit condominiums.",
      "Boards are strictly mandated to maintain high property casualty and hurricane coverage master premiums.",
      "Extensive reserve studies must show active funding path projections for shoreline protections and concrete remediation."
    ]
  },
  "idaho": {
    avgFee: 180,
    intro: "Idaho's housing expansion features a rich influx of community associations in Boise and the scenic Coeur d'Alene area. While Idaho laws keep association capabilities highly consumer-friendly, tracking irrigation water access and private street maintenance remains crucial. Buyers should audit annual budgets to confirm that infrastructure reserves match future repaving projections.",
    cities: [
      { name: "Boise", avgFee: 195, range: "$130 - $260" },
      { name: "Meridian", avgFee: 180, range: "$120 - $240" },
      { name: "Nampa", avgFee: 160, range: "$110 - $210" },
      { name: "Idaho Falls", avgFee: 150, range: "$100 - $200" },
      { name: "Coeur d'Alene", avgFee: 240, range: "$160 - $320" }
    ],
    laws: [
      "Idaho Code Title 55 Chapter 15 details mandatory covenants and public filings.",
      "Associations are prohibited from enacting retroactively restrictive rental cap rules.",
      "Lien enforcement for unpaid dues requires strict written notices and judicial reviews."
    ]
  },
  "illinois": {
    avgFee: 320,
    intro: "Illinois hosts a dense variety of residential associations, particularly in the Chicago metropolitan area, regulated by the Illinois Condominium Property Act. Snow removal, boiler maintenance, and historic brick tuckpointing skew northern Illinois dues significantly higher than Central state single-family averages. Buyers should check for deferred maintenance backlogs and open building code violations.",
    cities: [
      { name: "Chicago", avgFee: 475, range: "$300 - $650" },
      { name: "Aurora", avgFee: 260, range: "$180 - $340" },
      { name: "Naperville", avgFee: 290, range: "$200 - $380" },
      { name: "Rockford", avgFee: 200, range: "$140 - $260" },
      { name: "Joliet", avgFee: 220, range: "$150 - $290" }
    ],
    laws: [
      "Illinois Condominium Property Act sets strict rules for board records disclosure.",
      "Budget increases exceeding 115% of the prior year require an owner petition ballot.",
      "Special assessments for structural emergencies must follow formal, noticed hearings."
    ]
  },
  "indiana": {
    avgFee: 190,
    intro: "Indiana HOAs reside mostly in peaceful suburban subdivisions and modern master-planned neighborhoods. Monthly dues typically keep pace with surrounding Midwestern states, providing for basic lawn maintenance, trash removal, and local playground safety. Understanding the custom builder transition covenants ensures buyers aren't surprised by subsequent fee escalations.",
    cities: [
      { name: "Indianapolis", avgFee: 190, range: "$130 - $250" },
      { name: "Fort Wayne", avgFee: 160, range: "$110 - $210" },
      { name: "Evansville", avgFee: 175, range: "$120 - $230" },
      { name: "South Bend", avgFee: 180, range: "$125 - $240" },
      { name: "Carmel", avgFee: 240, range: "$160 - $320" }
    ],
    laws: [
      "Indiana Code Title 32 regulates HOA registration and lien collection caps.",
      "Boards must offer a formal, good-faith conference before initiating a foreclosure.",
      "Associations are required to support flag displays and military insignia."
    ]
  },
  "iowa": {
    avgFee: 180,
    intro: "Iowa community associations operate with a firm focus on winter snow clearance, shared agricultural runoff management, and community center care. The state's real estate environment keeps average monthly HOA fees highly affordable compared to coastal metropolitan regions. It remains crucial to evaluate reserve funds carefully to verify the association has sufficient longevity planning.",
    cities: [
      { name: "Des Moines", avgFee: 205, range: "$140 - $270" },
      { name: "Cedar Rapids", avgFee: 190, range: "$130 - $250" },
      { name: "Davenport", avgFee: 180, range: "$120 - $240" },
      { name: "Sioux City", avgFee: 150, range: "$105 - $200" },
      { name: "Iowa City", avgFee: 220, range: "$150 - $290" }
    ],
    laws: [
      "Iowa Horizontal Real Property Act regulates master plans for common developments.",
      "Associations must grant continuous access to minutes, rosters, and tax forms.",
      "Covenants cannot place unconstitutional caps on property rentals."
    ]
  },
  "kansas": {
    avgFee: 180,
    intro: "Kansas features single-family and townhome associations focusing on neighborhood park preservation and common-area windstorm damage repairs. With unpredictable Midwestern weather patterns, associations must carry comprehensive storm and hail insurance extensions. Buyers should investigate the architectural committee's enforcement rules regarding exterior siding materials.",
    cities: [
      { name: "Wichita", avgFee: 165, range: "$110 - $220" },
      { name: "Overland Park", avgFee: 235, range: "$160 - $310" },
      { name: "Kansas City", avgFee: 205, range: "$140 - $270" },
      { name: "Topeka", avgFee: 175, range: "$120 - $235" },
      { name: "Lawrence", avgFee: 195, range: "$135 - $260" }
    ],
    laws: [
      "Kansas Uniform Common Interest Owners Bill of Rights Act protects individual member guidelines.",
      "Boards must provide 10 business days' notice for regular and strategic meetings.",
      "Property owners can dispute extreme collections and architectural fine models."
    ]
  },
  "kentucky": {
    avgFee: 190,
    intro: "In Kentucky, homeowners associations manage numerous condominium developments and horse-country estates with private acreage roads. Fees generally stay close to national medians, managing security gates, fencing, and equestrian common spaces in specialized subdivisions. Buyers should review state consumer protections regarding late penalties and board voting limits.",
    cities: [
      { name: "Louisville", avgFee: 220, range: "$150 - $295" },
      { name: "Lexington", avgFee: 210, range: "$145 - $280" },
      { name: "Bowling Green", avgFee: 165, range: "$115 - $220" },
      { name: "Owensboro", avgFee: 150, range: "$105 - $200" },
      { name: "Covington", avgFee: 250, range: "$170 - $330" }
    ],
    laws: [
      "Kentucky Horizontal Property Law governs general building associations.",
      "Boards must compile yearly budget plans with detailed common expense outlines.",
      "Delinquent accounts can only trigger foreclosure if basic dispute steps are exhausted."
    ]
  },
  "louisiana": {
    avgFee: 260,
    intro: "Louisiana HOAs often manage unique historic French Quarter courtyards, coastal bayou developments, and modern single-family developments. Storm surge protection, heavy moisture rot prevention, and elevated structural insurance premiums represent permanent budget items in southern parishes. Homeowners must verify water clearance and common drainage pump maintenance rules.",
    cities: [
      { name: "New Orleans", avgFee: 385, range: "$250 - $520" },
      { name: "Baton Rouge", avgFee: 235, range: "$160 - $310" },
      { name: "Shreveport", avgFee: 190, range: "$130 - $250" },
      { name: "Lafayette", avgFee: 205, range: "$140 - $270" },
      { name: "Lake Charles", avgFee: 220, range: "$150 - $290" }
    ],
    laws: [
      "Louisiana Homeowners Association Act establishes rules for registry and operations.",
      "Building restrictions are governed under Civil Code Articles and require strict notice.",
      "Dues liens expire unless filed in courthouse records within five years of the assessment."
    ]
  },
  "maine": {
    avgFee: 260,
    intro: "Maine's association developments focus heavily on rugged coastal condominiums and cozy lakeside vacation communities. Extreme seasonal changes require substantial winter storm responses, dock maintenance, and comprehensive private road sanding services. Buyers should double-check the winter parking regulations and seasonal shutter mandates prior to acquiring any deed.",
    cities: [
      { name: "Portland", avgFee: 330, range: "$220 - $440" },
      { name: "Lewiston", avgFee: 235, range: "$160 - $310" },
      { name: "Bangor", avgFee: 225, range: "$155 - $300" },
      { name: "South Portland", avgFee: 310, range: "$210 - $410" },
      { name: "Auburn", avgFee: 220, range: "$150 - $290" }
    ],
    laws: [
      "Maine Condominium Act regulates general common interest properties.",
      "Associations can claim up to six months of unpaid assessments as superliens.",
      "Boards are prohibited from forbidding clotheslines or small wind turbines."
    ]
  },
  "maryland": {
    avgFee: 270,
    intro: "Maryland's homeowners associations represent a main vehicle for residential growth, acting under the Maryland Homeowners Association Act. Coastal storm management, park reserves, and high community center maintenance are common in master-planned Annapolis and Baltimore-corridor cities. Buyers are legally entitled to receive complete disclosure packages with the right of cancellation.",
    cities: [
      { name: "Baltimore", avgFee: 280, range: "$180 - $380" },
      { name: "Frederick", avgFee: 210, range: "$145 - $280" },
      { name: "Rockville", avgFee: 325, range: "$220 - $430" },
      { name: "Gaithersburg", avgFee: 310, range: "$210 - $410" },
      { name: "Annapolis", avgFee: 345, range: "$230 - $460" }
    ],
    laws: [
      "Maryland Homeowners Association Act mandates detailed initial buyer disclosure booklets.",
      "Homeowners enjoy a 5-day statutory right of rescission after receiving resale packages.",
      "Covenant rules must be filed in local county records to maintain legal validity."
    ]
  },
  "massachusetts": {
    avgFee: 390,
    intro: "In Massachusetts, condominium and homeowner properties operate under Chapter 183A of the General Laws. Boston's historic brownstones and Cape Cod summer communities generate higher-than-average monthly assessments due to aging brick facades, strict historic preservation rules, and snow clearing. Resale certificates called Section 6(d) packages must confirm a clean account balance.",
    cities: [
      { name: "Boston", avgFee: 550, range: "$350 - $750" },
      { name: "Worcester", avgFee: 280, range: "$190 - $370" },
      { name: "Springfield", avgFee: 250, range: "$170 - $330" },
      { name: "Cambridge", avgFee: 500, range: "$320 - $680" },
      { name: "Lowell", avgFee: 265, range: "$180 - $350" }
    ],
    laws: [
      "Massachusetts General Laws Chapter 183A governs condominiums.",
      "Section 6(d) certificates are mandatory for confirming a property has zero unpaid dues.",
      "Superpriority liens apply to six months of developer or owner maintenance debts."
    ]
  },
  "michigan": {
    avgFee: 230,
    intro: "Michigan HOAs are highly active across suburban Detroit and along the expansive Great Lakes coastlines. Winter storm mitigation, private beach path preservation, and marina slip maintenance represent major focal points for association planning. Homeowners should understand the Michigan Condominium Act to safely track co-owner responsibilities and assessment bylaws.",
    cities: [
      { name: "Detroit", avgFee: 305, range: "$200 - $410" },
      { name: "Grand Rapids", avgFee: 235, range: "$160 - $310" },
      { name: "Warren", avgFee: 220, range: "$150 - $290" },
      { name: "Sterling Heights", avgFee: 225, range: "$155 - $300" },
      { name: "Ann Arbor", avgFee: 285, range: "$190 - $380" }
    ],
    laws: [
      "Michigan Condominium Act establishes rules for co-ownership assets.",
      "Bylaws must explicitly define the responsibility splits for common vs. private utilities.",
      "Formal audits are triggered if requested by at least 25% of active voting members."
    ]
  },
  "minnesota": {
    avgFee: 290,
    intro: "Regulated under the Minnesota Common Interest Ownership Act (MCIOA), local associations face severe northern winters. High heating costs, structural snow loads, and regular ice dam mitigation represent permanent components of the annual budget sheets. Buyers should evaluate the strength of the reserves to ensure they match asphalt damage projections caused by extreme freeze-thaw cycles.",
    cities: [
      { name: "Minneapolis", avgFee: 340, range: "$220 - $465" },
      { name: "Saint Paul", avgFee: 325, range: "$210 - $440" },
      { name: "Rochester", avgFee: 250, range: "$170 - $330" },
      { name: "Duluth", avgFee: 285, range: "$190 - $380" },
      { name: "Bloomington", avgFee: 270, range: "$180 - $360" }
    ],
    laws: [
      "Minnesota Common Interest Ownership Act (MCIOA) governs most associations formed after 1994.",
      "Annual operating budgets must allocate at least 10% of funding toward active capitalization reserves.",
      "Associations can foreclose on properties using power-of-sale systems for delinquent dues."
    ]
  },
  "mississippi": {
    avgFee: 160,
    intro: "Mississippi associations skew on the lower end of the national cost index, focusing on basic residential entrance safety and park maintenance. Coastal Mississippi properties near the Gulf require much higher insurance reserves to offset hurricane damage liabilities. Buyers should analyze the local board's late payment and collection processes to avoid property encumbrances.",
    cities: [
      { name: "Jackson", avgFee: 160, range: "$110 - $210" },
      { name: "Gulfport", avgFee: 240, range: "$160 - $320" },
      { name: "Biloxi", avgFee: 230, range: "$155 - $310" },
      { name: "Hattiesburg", avgFee: 165, range: "$115 - $220" },
      { name: "Meridian", avgFee: 145, range: "$100 - $190" }
    ],
    laws: [
      "Mississippi Nonprofit Corporation Act governs the organizational model of local HOAs.",
      "Covenants are legally binding real property ties that run with the land deed.",
      "Lien enforcement actions require transparent notice filings at the local court recorder."
    ]
  },
  "missouri": {
    avgFee: 180,
    intro: "Missouri features dynamic homeowners associations in suburban St. Louis and Kansas City, as well as vacation clubs in Lake of the Ozarks. Assessments address basic neighborhood pond control, swimming facility safety, and road care. Reviewing the board's liability insurance coverage is an sensible step for tracking shared common elements.",
    cities: [
      { name: "Kansas City", avgFee: 210, range: "$140 - $280" },
      { name: "Saint Louis", avgFee: 240, range: "$160 - $320" },
      { name: "Springfield", avgFee: 160, range: "$110 - $210" },
      { name: "Columbia", avgFee: 175, range: "$120 - $230" },
      { name: "Saint Joseph", avgFee: 150, range: "$105 - $195" }
    ],
    laws: [
      "Missouri statutes regulate non-profit HOA corporate registration requirements.",
      "A 10-day formal warning is required before issuing code fines to a resident.",
      "Meetings must follow traditional corporate rules, offering physical or electronic ballots."
    ]
  },
  "montana": {
    avgFee: 210,
    intro: "Montana HOAs are situated mostly in expanding mountain communities and modern subdivisions with private utility lines. Dues skew toward severe mountain snow routing, common park protection, and well-water monitoring. Real estate buyers must inspect developer transition codes to understand when the developer's liability shifts to the local owners.",
    cities: [
      { name: "Billings", avgFee: 235, range: "$160 - $310" },
      { name: "Missoula", avgFee: 265, range: "$180 - $350" },
      { name: "Great Falls", avgFee: 205, range: "$140 - $270" },
      { name: "Bozeman", avgFee: 330, range: "$220 - $440" },
      { name: "Helena", avgFee: 220, range: "$150 - $290" }
    ],
    laws: [
      "Montana Unit Ownership Act governs structures under co-ownership models.",
      "Associations are limited in blocking residential home agricultural and energy modifications.",
      "Reserve updates are strongly recommended but not strictly mandated on fixed calendars."
    ]
  },
  "nebraska": {
    avgFee: 180,
    intro: "Nebraska community associations exist mostly in developing suburban subdivisions and townhome communities. Budgets manage general park upkeep, private street care, and winter storm clearance. Prospective residents should verify the rules regarding outbuildings, fences, and recreational trailers before signing agreements.",
    cities: [
      { name: "Omaha", avgFee: 195, range: "$130 - $260" },
      { name: "Lincoln", avgFee: 175, range: "$120 - $235" },
      { name: "Bellevue", avgFee: 160, range: "$110 - $210" },
      { name: "Grand Island", avgFee: 145, range: "$100 - $190" },
      { name: "Kearney", avgFee: 150, range: "$105 - $200" }
    ],
    laws: [
      "Nebraska Condominium Act sets rules for multi-unit structural reserves.",
      "Associations must file their organizational paperwork with the local Secretary of State.",
      "Property architectural review timelines are capped at 30 days under many modern codes."
    ]
  },
  "nevada": {
    avgFee: 260,
    intro: "Nevada is home to thousands of common-interest communities, particularly in the rapidly growing Las Vegas and Reno areas, governed under NRS Chapter 116. High-density master-planned layouts make HOA living a standard option, with fees managing extensive desert landscaping and community clubhouse recreation. Nevada features strict guidelines surrounding superpriority lien rights and foreclosure processes.",
    cities: [
      { name: "Las Vegas", avgFee: 270, range: "$180 - $360" },
      { name: "Henderson", avgFee: 285, range: "$190 - $380" },
      { name: "Reno", avgFee: 315, range: "$210 - $420" },
      { name: "North Las Vegas", avgFee: 245, range: "$165 - $330" },
      { name: "Sparks", avgFee: 255, range: "$170 - $340" }
    ],
    laws: [
      "Nevada Revised Statutes Chapter 116 governs all common-interest properties.",
      "HOA dues liens represent 'superpriority' status over first mortgage positions for 9 months.",
      "Boards must provide full resale disclosure packets which are executable within 10 days of request."
    ]
  },
  "new-hampshire": {
    avgFee: 290,
    intro: "New Hampshire association communities provide vital amenities for both year-round commuters and seasonal mountain travelers. Winter operations, exterior wood preservation, and roofing cycles represent expensive local components. Review the state statutes to understand the specific reserve study parameters and common area boundary models.",
    cities: [
      { name: "Manchester", avgFee: 310, range: "$210 - $410" },
      { name: "Nashua", avgFee: 325, range: "$220 - $430" },
      { name: "Concord", avgFee: 265, range: "$180 - $350" },
      { name: "Derry", avgFee: 250, range: "$170 - $330" },
      { name: "Dover", avgFee: 285, range: "$190 - $380" }
    ],
    laws: [
      "New Hampshire Condominium Act regulates governance and sales disclosures.",
      "Associations can secure liens for up to six months of past-due structural maintenance costs.",
      "A written corporate warning must be delivered to owners 30 days before fines execute."
    ]
  },
  "new-jersey": {
    avgFee: 340,
    intro: "New Jersey developments feature active homeowners and condominium associations, highly scrutinized under corporate governance laws and the Radburn Act. Dues skew higher than national medians owing to professional management costs, state-mandated safety inspections, and high population densities. Buyers must request complete administrative disclosures to look for past-due litigation.",
    cities: [
      { name: "Newark", avgFee: 415, range: "$280 - $550" },
      { name: "Jersey City", avgFee: 580, range: "$380 - $780" },
      { name: "Paterson", avgFee: 310, range: "$210 - $410" },
      { name: "Elizabeth", avgFee: 340, range: "$230 - $450" },
      { name: "Clifton", avgFee: 370, range: "$250 - $490" }
    ],
    laws: [
      "New Jersey Radburn Law guarantees fair, democratic voting procedures in all communities.",
      "The Planned Real Estate Development Full Disclosure Act requires public offering reports.",
      "Boards are prohibited from charging punitive fines without offering formal internal ADR steps."
    ]
  },
  "new-mexico": {
    avgFee: 190,
    intro: "New Mexico features unique HOA developments with Adobe aesthetic requirements, solar panel regulations, and strict Xeriscaping directives. Associations operate under the New Mexico Homeowner Association Act, which dictates board transparency and record inspection parameters. Homeowners should understand the rules regarding color swatches and exterior stucco preservation.",
    cities: [
      { name: "Albuquerque", avgFee: 205, range: "$140 - $270" },
      { name: "Las Cruces", avgFee: 175, range: "$120 - $230" },
      { name: "Rio Rancho", avgFee: 190, range: "$130 - $250" },
      { name: "Santa Fe", avgFee: 305, range: "$200 - $410" },
      { name: "Roswell", avgFee: 160, range: "$110 - $210" }
    ],
    laws: [
      "New Mexico Homeowner Association Act sets rules for mandatory disclosure cards.",
      "Meetings represent public forums and must provide clear homeowner commentary periods.",
      "Water conservation limits and xeriscaping properties are protected from board blocks."
    ]
  },
  "new-york": {
    avgFee: 480,
    intro: "New York's real estate environment features cooperative boards and master-planned condominium associations with substantial regulatory oversight. High municipal fees, building employee union contracts, and seasonal boiler fuel explain why New York dues represent some of the highest in the country. Homeowners should check the offering plan and state Attorney General filings for compliance issues.",
    cities: [
      { name: "New York City", avgFee: 700, range: "$450 - $950" },
      { name: "Buffalo", avgFee: 265, range: "$180 - $350" },
      { name: "Rochester", avgFee: 250, range: "$170 - $330" },
      { name: "Albany", avgFee: 310, range: "$210 - $410" },
      { name: "Syracuse", avgFee: 235, range: "$160 - $310" }
    ],
    laws: [
      "Condominium and Cooperative boards operate with enormous power, including buyer interview approvals.",
      "State consumer statutes demand fully audited, publicly consultable ledger sheets and corporate minutes.",
      "Continuous non-payment can lead to speedy statutory foreclosure actions targeting unit deeds."
    ]
  },
  "north-carolina": {
    avgFee: 220,
    intro: "North Carolina HOA properties are widely distributed from coastal beach subdivisions to the growing outer rings of Charlotte and Raleigh. The North Carolina Planned Community Act governs association transparency, dispute resolution, and lien enforcement boundaries. Coastal buyers must evaluate hurricane insurance reserves prior to completing a home close.",
    cities: [
      { name: "Charlotte", avgFee: 230, range: "$150 - $310" },
      { name: "Raleigh", avgFee: 220, range: "$145 - $300" },
      { name: "Greensboro", avgFee: 195, range: "$130 - $260" },
      { name: "Durham", avgFee: 210, range: "$140 - $285" },
      { name: "Winston-Salem", avgFee: 185, range: "$125 - $250" }
    ],
    laws: [
      "North Carolina Planned Community Act dictates board budget publication requirements.",
      "Associations must offer 15 days' notice before reviewing exterior home modifications.",
      "Lien filings can result in judicial foreclosure if assessments remain unpaid for 90+ days."
    ]
  },
  "north-dakota": {
    avgFee: 190,
    intro: "North Dakota homeowners associations manage numerous active subdivisions and townhome properties designed to handle severe northern winters. Operating budgets are highly focused on heavy snow mechanical removal and asphalt protection against deep ground frost. Checking the association's annual reserve fund strength helps verify whether specialized assessments are likely in the future.",
    cities: [
      { name: "Fargo", avgFee: 220, range: "$150 - $290" },
      { name: "Bismarck", avgFee: 205, range: "$140 - $275" },
      { name: "Grand Forks", avgFee: 210, range: "$145 - $280" },
      { name: "Minot", avgFee: 190, range: "$130 - $250" },
      { name: "West Fargo", avgFee: 195, range: "$135 - $260" }
    ],
    laws: [
      "North Dakota Condominium Property Act regulates land use rules in planned projects.",
      "Boards must compile annual statements outlining reserve funding targets.",
      "Covenants cannot restrict homeowners from flying regional or national flagpoles."
    ]
  },
  "ohio": {
    avgFee: 210,
    intro: "Ohio associations exist mostly in expanding single-family suburbs and urban condominium complexes. Dues generally track moderate Midwestern averages, financing community pools, storm gutters, and neighborhood entryways. Review the Ohio Planned Community Act (Chapter 5312) to trace fine limits and board assessment authorities.",
    cities: [
      { name: "Columbus", avgFee: 210, range: "$140 - $280" },
      { name: "Cleveland", avgFee: 270, range: "$180 - $360" },
      { name: "Cincinnati", avgFee: 240, range: "$160 - $320" },
      { name: "Toledo", avgFee: 190, range: "$130 - $250" },
      { name: "Akron", avgFee: 200, range: "$135 - $265" }
    ],
    laws: [
      "Ohio Planned Community Act regulates HOA enforcement structures and lien tools.",
      "Board records must be made available for inspection by any homeowner.",
      "Lien validity is capped at five years unless active court filings initiate foreclosure."
    ]
  },
  "oklahoma": {
    avgFee: 170,
    intro: "Oklahoma's homeowners associations manage beautiful single-family suburbs and gated communities throughout the state. Given the region's intense storm history, maintaining comprehensive common facility storm insurance represents an absolute priority. Buyers should inspect board archives to confirm that shared windstorm damage deductibles are properly funded.",
    cities: [
      { name: "Oklahoma City", avgFee: 180, range: "$120 - $240" },
      { name: "Tulsa", avgFee: 170, range: "$115 - $230" },
      { name: "Norman", avgFee: 160, range: "$110 - $210" },
      { name: "Broken Arrow", avgFee: 150, range: "$105 - $200" },
      { name: "Edmond", avgFee: 205, range: "$140 - $270" }
    ],
    laws: [
      "Oklahoma Real Estate License Code mandates specific sales disclosure packets.",
      "Storm shelters and generator modifications must be reviewed with reasonable allowances.",
      "A 30-day grace period is federally mandated for initial past-due notices."
    ]
  },
  "oregon": {
    avgFee: 240,
    intro: "Oregon's planned communities are heavily active across the lush Willamette Valley and coastal areas, regulated under the Oregon Planned Community Act. Wet weather management, roof mold abatement, and private wetland reserves represent critical budgetary considerations. Homeowners should track rules regarding tree removal, xeriscaping, and external rain harvesting installations.",
    cities: [
      { name: "Portland", avgFee: 315, range: "$210 - $420" },
      { name: "Eugene", avgFee: 235, range: "$160 - $310" },
      { name: "Salem", avgFee: 220, range: "$150 - $295" },
      { name: "Gresham", avgFee: 230, range: "$155 - $305" },
      { name: "Hillsboro", avgFee: 255, range: "$175 - $340" }
    ],
    laws: [
      "Oregon Planned Community Act governs guidelines for all registered developers.",
      "Associations must fund and publish detailed annual reserve studies.",
      "Guidelines cannot prohibit drought-resistant yards or electric vehicle chargers."
    ]
  },
  "pennsylvania": {
    avgFee: 280,
    intro: "In Pennsylvania, planned communities and developments operate under the state Uniform Planned Community Act. Aging historic brickwork, winter road salting, and aging storm lines require structured investment from local association funds. Resale certificates, commonly called Section 5407 statements, are required to detail existing structural building issues.",
    cities: [
      { name: "Philadelphia", avgFee: 390, range: "$260 - $520" },
      { name: "Pittsburgh", avgFee: 310, range: "$210 - $410" },
      { name: "Allentown", avgFee: 250, range: "$170 - $330" },
      { name: "Erie", avgFee: 235, range: "$160 - $310" },
      { name: "Reading", avgFee: 220, range: "$150 - $295" }
    ],
    laws: [
      "Pennsylvania Uniform Planned Community Act governs suburban developments.",
      "Section 5407 outlines the buyer's right to receive full corporate financials.",
      "Unpaid fees can trigger a sheriff sale foreclosure through standard judicial reviews."
    ]
  },
  "rhode-island": {
    avgFee: 320,
    intro: "Rhode Island's small geography features high coastal condominium density and structured planned developments. The Rhode Island Condominium Act sets parameters for board financial reporting, reserve accounts, and structural insurance policies. High saltwater corrosion and coastal winterization demand structured reserve planning from the board.",
    cities: [
      { name: "Providence", avgFee: 380, range: "$250 - $510" },
      { name: "Warwick", avgFee: 330, range: "$220 - $440" },
      { name: "Cranston", avgFee: 315, range: "$210 - $420" },
      { name: "Pawtucket", avgFee: 295, range: "$200 - $395" },
      { name: "East Providence", avgFee: 320, range: "$215 - $430" }
    ],
    laws: [
      "Rhode Island Condominium Amendment Act mandates structural insurance configurations.",
      "Resale certificates must list all pending capital assessments coming due.",
      "Dues superliens have six months of structural priority over standard mortgages."
    ]
  },
  "south-carolina": {
    avgFee: 250,
    intro: "South Carolina's master-planned developments span high-traffic coastal resorts and spacious inland single-family neighborhoods. The South Carolina Homeowners Association Act demands board directory registration and absolute transparency in financial audits. Coastal buyers must evaluate wind and hail insurance deductibles thoroughly before closing their purchase.",
    cities: [
      { name: "Charleston", avgFee: 360, range: "$240 - $480" },
      { name: "Columbia", avgFee: 205, range: "$140 - $275" },
      { name: "North Charleston", avgFee: 240, range: "$160 - $320" },
      { name: "Mount Pleasant", avgFee: 335, range: "$220 - $450" },
      { name: "Rock Hill", avgFee: 190, range: "$130 - $250" }
    ],
    laws: [
      "South Carolina Homeowners Association Act mandates that all rules must be registered.",
      "Boards are prohibited from enforcing guidelines that weren't filed publicly first.",
      "Magistrate court is designated to resolve minor covenant fee disputes quickly."
    ]
  },
  "south-dakota": {
    avgFee: 170,
    intro: "South Dakota associations are primarily situated in active suburban developments and beautiful Black Hills acreage communities. Dues target intensive blizzard management, shared water systems, and local property boundary preservation. Homeowners should analyze reserve schedules to confirm the association can handle future roadway repaving costs.",
    cities: [
      { name: "Sioux Falls", avgFee: 195, range: "$130 - $260" },
      { name: "Rapid City", avgFee: 205, range: "$140 - $275" },
      { name: "Aberdeen", avgFee: 165, range: "$115 - $220" },
      { name: "Brookings", avgFee: 160, range: "$110 - $210" },
      { name: "Watertown", avgFee: 150, range: "$105 - $200" }
    ],
    laws: [
      "South Dakota Real Estate Code outlines specific property sale disclosure lines.",
      "Associations must follow non-profit corporate codes for records inspections.",
      "The collection of past-due balances requires court-approved warning files."
    ]
  },
  "tennessee": {
    avgFee: 190,
    intro: "Tennessee's housing expansion incorporates a major footprint of swim-and-tennis developments and mountainous cabins. Dues generally track the national average, maintaining gating, private paving, and hillside drainage systems. Prospective buyers should explore the difference between voluntary neighborhood groups and true mandatory-assessment HOAs.",
    cities: [
      { name: "Nashville", avgFee: 255, range: "$170 - $340" },
      { name: "Memphis", avgFee: 220, range: "$150 - $295" },
      { name: "Knoxville", avgFee: 205, range: "$140 - $275" },
      { name: "Chattanooga", avgFee: 215, range: "$145 - $285" },
      { name: "Clarksville", avgFee: 175, range: "$120 - $230" }
    ],
    laws: [
      "Tennessee Horizontal Property Act governs high-density developments.",
      "Boards must issue 10 days' warning before introducing formal administrative fines.",
      "Associations can claim dues liens but cannot execute power-of-sale foreclosures."
    ]
  },
  "texas": {
    avgFee: 275,
    intro: "Texas features thousands of expansive master-planned single-family subdivisions. Local guidelines dictate everything from brick composition ratios to landscape safety restrictions. Texas Property Code Chapter 209 sets extensive consumer protection limits on board collection powers, requiring multiple warning steps before any property lien foreclosure can initiate.",
    cities: [
      { name: "Austin", avgFee: 290, range: "$200 - $380" },
      { name: "Dallas", avgFee: 265, range: "$180 - $350" },
      { name: "Houston", avgFee: 255, range: "$175 - $340" },
      { name: "San Antonio", avgFee: 220, range: "$150 - $290" },
      { name: "Fort Worth", avgFee: 225, range: "$155 - $300" }
    ],
    laws: [
      "Texas Property Code Chapter 209 sets extensive consumer protection limits on board collection powers.",
      "Homeowners enjoy a statutory 180-day 'right to redemption' after non-payment HOA foreclosures occur.",
      "Subdivisions must permit religious door displays, active security cameras, and solar modules."
    ]
  },
  "utah": {
    avgFee: 230,
    intro: "In Utah, homeowners associations operate under the Community Association Act, managing hillside developments and master-planned urban rings. Mountain snow clearance, secondary water shares, and architectural compliance are core aspects of local HOA planning. Homeowners should verify whether the board maintains separate earthquake reserves.",
    cities: [
      { name: "Salt Lake City", avgFee: 285, range: "$190 - $380" },
      { name: "West Valley City", avgFee: 235, range: "$160 - $310" },
      { name: "Provo", avgFee: 250, range: "$170 - $330" },
      { name: "West Jordan", avgFee: 225, range: "$155 - $300" },
      { name: "Orem", avgFee: 240, range: "$165 - $320" }
    ],
    laws: [
      "Utah Community Association Act regulates the standard governance of local HOAs.",
      "Associations are prohibited from banning solar panels, clotheslines, or water-saving setups.",
      "Resale registration certificates must declare all outstanding association balances."
    ]
  },
  "vermont": {
    avgFee: 280,
    intro: "Vermont's association properties consist primarily of high-altitude alpine ski developments and charming small-town condominium complexes. Winter storm management, firewood supplies, and rigorous exterior weatherproofing drive local dues above general rural averages. Review the Common Interest Ownership Act for guidelines on board capital project voting limits.",
    cities: [
      { name: "Burlington", avgFee: 360, range: "$240 - $485" },
      { name: "South Burlington", avgFee: 330, range: "$220 - $440" },
      { name: "Rutland", avgFee: 265, range: "$180 - $350" },
      { name: "Barre", avgFee: 250, range: "$170 - $330" },
      { name: "Winooski", avgFee: 310, range: "$210 - $415" }
    ],
    laws: [
      "Vermont Common Interest Ownership Act manages consumer development protocols.",
      "Budgets must be formally delivered to all residents and are validated unless vetoed.",
      "Solar modifications and vehicle chargers must be reviewed with good-cause exemptions."
    ]
  },
  "virginia": {
    avgFee: 260,
    intro: "Virginia master-planned communities are heavily regulated under the comprehensive Virginia Property Owners' Association Act (POAA). Budget plans address historic brick paths, high-density clubhouse maintenance, and extensive private park systems in the Washington metro region. Resale disclosure rules give the buyer a powerful, statutory right to cancel a contract.",
    cities: [
      { name: "Virginia Beach", avgFee: 255, range: "$175 - $340" },
      { name: "Norfolk", avgFee: 285, range: "$190 - $380" },
      { name: "Chesapeake", avgFee: 235, range: "$160 - $315" },
      { name: "Richmond", avgFee: 220, range: "$150 - $295" },
      { name: "Arlington", avgFee: 425, range: "$280 - $570" }
    ],
    laws: [
      "Virginia Property Owners' Association Act sets parameters for corporate reporting.",
      "Buyers possess a powerful 3-day rescission period upon receiving disclosure binders.",
      "Late assessment fees are kept at a statutory maximum of 10% under general rules."
    ]
  },
  "washington": {
    avgFee: 280,
    intro: "Washington homeowners associations manage dynamic suburban developments and waterfront communities under the Washington Uniform Common Interest Ownership Act (WUCIOA). Budgets focus heavily on persistent wet-weather mold mitigation, structural tree management, and complex stormwater drainage. Buyers should track the rules regarding native plant gardening and rain barrel collection.",
    cities: [
      { name: "Seattle", avgFee: 365, range: "$240 - $495" },
      { name: "Spokane", avgFee: 220, range: "$150 - $295" },
      { name: "Tacoma", avgFee: 265, range: "$180 - $350" },
      { name: "Vancouver", avgFee: 235, range: "$160 - $315" },
      { name: "Bellevue", avgFee: 390, range: "$260 - $520" }
    ],
    laws: [
      "Washington Uniform Common Interest Ownership Act (WUCIOA) governs all registered subdivisions.",
      "Associations must conduct regular, detailed mathematical reserve study reports.",
      "Rules cannot prevent homeowners from maintaining native, drought-resistant land layouts."
    ]
  },
  "west-virginia": {
    avgFee: 180,
    intro: "West Virginia associations exist primarily in peaceful mountain resorts and growing Eastern Panhandle commuter communities. Key expense targets include hillside road salting, private sewage treatment maintenance, and retaining-wall structural monitoring. Prospective buyers should confirm the legal responsibility boundaries over private bridges and drainage ditches.",
    cities: [
      { name: "Charleston", avgFee: 205, range: "$140 - $275" },
      { name: "Huntington", avgFee: 190, range: "$130 - $250" },
      { name: "Morgantown", avgFee: 220, range: "$150 - $295" },
      { name: "Parkersburg", avgFee: 175, range: "$120 - $230" },
      { name: "Wheeling", avgFee: 180, range: "$125 - $240" }
    ],
    laws: [
      "West Virginia Uniform Common Interest Ownership Act protects condominium properties.",
      "Boards must host open-door meetings, allowing homeowners regular audio rights.",
      "Fines can trigger legal liens only when detailed in initial bylaws paperwork."
    ]
  },
  "wisconsin": {
    avgFee: 220,
    intro: "Wisconsin's association developments focus on lakefront communities, urban condominiums, and active single-family suburbs. Intense freeze-thaw cycles necessitate regular driveway asphalt repaving investments from the board's structural reserve fund. Homeowners should examine the Wisconsin Condominium Ownership Act to understand how utility costs are allocated.",
    cities: [
      { name: "Milwaukee", avgFee: 315, range: "$210 - $420" },
      { name: "Madison", avgFee: 280, range: "$190 - $370" },
      { name: "Green Bay", avgFee: 220, range: "$150 - $295" },
      { name: "Kenosha", avgFee: 235, range: "$160 - $310" },
      { name: "Racine", avgFee: 225, range: "$155 - $300" }
    ],
    laws: [
      "Wisconsin Condominium Ownership Act governs general association subdivisions.",
      "The board must deliver an administrative 'executive summary' of fees prior to unit sale.",
      "Associations can claim structural damage liens for overdue maintenance bills."
    ]
  },
  "wyoming": {
    avgFee: 190,
    intro: "In Wyoming, homeowners associations manage scenic mountain estates and developments with shared water wells. Dues skew toward snow removal, wildland fire mitigation, and unpaved private road maintenance. Buyers should check if the association holds dedicated easements for horse trails and natural gas pipelines.",
    cities: [
      { name: "Cheyenne", avgFee: 220, range: "$150 - $295" },
      { name: "Casper", avgFee: 195, range: "$130 - $260" },
      { name: "Laramie", avgFee: 205, range: "$140 - $275" },
      { name: "Gillette", avgFee: 175, range: "$120 - $235" },
      { name: "Rock Springs", avgFee: 165, range: "$115 - $220" }
    ],
    laws: [
      "Wyoming Nonprofit Corporation Act governs the business model of HOAs.",
      "Real estate covenants must be filed physically within regional registry record sheets.",
      "Covenant rules must align and coordinate with surrounding county environmental water acts."
    ]
  }
};
