const categories = [
    {
        _id: "technology",
        name: "Technology",
        description: "All fields related to technology, from software development to advanced hardware and innovation.",
        keywords: ["software", "hardware", "AI", "automation", "coding", "programming", "gadgets", "robotics", "innovation", "engineering"]
    },
    {
        _id: "health",
        name: "Health",
        description: "All topics related to physical and mental well-being, medicine, therapies, and healthcare.",
        keywords: ["medicine", "mental health", "wellness", "fitness", "nutrition", "therapy", "disease", "hospitals", "public health", "self-care"]
    },
    {
        _id: "education",
        name: "Education",
        description: "Learning methods, schools, educational technologies, pedagogy and academic research.",
        keywords: ["learning", "teaching", "schools", "university", "e-learning", "pedagogy", "academic research", "training", "knowledge", "curriculum"]
    },
    {
        _id: "science",
        name: "Science",
        description: "Pure and applied sciences, including physics, chemistry, biology, astronomy, and interdisciplinary research.",
        keywords: ["physics", "chemistry", "biology", "astronomy", "genetics", "nanotechnology", "space science", "mathematics", "research", "experiments"]
    },
    {
        _id: "society",
        name: "Society",
        description: "Culture, history, sociology, politics, rights, and human studies.",
        keywords: ["culture", "sociology", "social studies", "community", "ethics", "citizenship", "law", "justice", "human rights", "demographics"]
    },
    {
        _id: "environment",
        name: "Environment",
        description: "Ecology, climate change, sustainability, natural resources, and environmental protection.",
        keywords: ["ecology", "sustainability", "climate change", "conservation", "biodiversity", "pollution", "recycling", "natural resources", "wildlife", "green energy"]
    },
    {
        _id: "arts",
        name: "Arts",
        description: "Music, visual arts, performing arts, literature, and creative expressions.",
        keywords: ["music", "painting", "sculpture", "theater", "cinema", "dance", "literature", "design", "poetry", "photography"]
    },
    {
        _id: "business",
        name: "Business",
        description: "Commerce, entrepreneurship, corporate strategy, finance, and economic trends.",
        keywords: ["entrepreneurship", "finance", "investment", "startups", "marketing", "economy", "management", "leadership", "corporate", "sales"]
    },
    {
        _id: "sports",
        name: "Sports",
        description: "Athletics, team sports, individual sports, fitness, training, and competitions.",
        keywords: ["athletics", "football", "basketball", "gym", "yoga", "workout", "competitions", "Olympics", "martial arts", "training"]
    },
    {
        _id: "food",
        name: "Food",
        description: "Cuisine, culinary arts, nutrition, gastronomy, and global culinary traditions.",
        keywords: ["cuisine", "cooking", "gastronomy", "nutrition", "chefs", "recipes", "restaurants", "food science", "organic food", "gourmet"]
    },
    {
        _id: "travel",
        name: "Travel",
        description: "Tourism, destinations, travel experiences, cultures, and global exploration.",
        keywords: ["tourism", "destinations", "adventure", "hotels", "flights", "culture", "road trips", "exploration", "backpacking", "travel guides"]
    },
    {
        _id: "history",
        name: "History",
        description: "Events, civilizations, historical figures, periods, and archaeological discoveries.",
        keywords: ["ancient history", "modern history", "historical events", "civilizations", "archaeology", "wars", "historical figures", "chronology", "cultural heritage"]
    },
    {
        _id: "philosophy",
        name: "Philosophy",
        description: "Ethics, logic, metaphysics, epistemology, existential questions, and schools of thought.",
        keywords: ["ethics", "logic", "existentialism", "epistemology", "metaphysics", "philosophers", "morality", "rationalism", "idealism", "critical thinking"]
    },
    {
        _id: "religion",
        name: "Religion",
        description: "Spiritual beliefs, religious practices, traditions, rituals, and world religions.",
        keywords: ["spirituality", "faith", "beliefs", "theology", "rituals", "mythology", "world religions", "sacred texts", "prayers", "worship"]
    },
    {
        _id: "politics",
        name: "Politics",
        description: "Government systems, ideologies, political theory, governance, and international relations.",
        keywords: ["government", "ideologies", "elections", "policies", "geopolitics", "governance", "democracy", "diplomacy", "power", "law making"]
    },
    {
        _id: "law",
        name: "Law",
        description: "Legal systems, justice, legislation, regulations, and legal interpretation.",
        keywords: ["legal system", "justice", "criminal law", "human rights", "legislation", "contracts", "court", "constitutional law", "litigation", "attorneys"]
    },
    {
        _id: "economics",
        name: "Economics",
        description: "Economic theory, global markets, finance, economic policies, and development.",
        keywords: ["market", "finance", "economic growth", "global trade", "monetary policy", "investment", "inflation", "banks", "budgeting", "macroeconomics"]
    },
    {
        _id: "psychology",
        name: "Psychology",
        description: "Human behavior, cognitive processes, emotions, mental health, and therapies.",
        keywords: ["behavior", "mental health", "cognition", "therapy", "emotions", "psychoanalysis", "psychotherapy", "neuroscience", "self-help", "personality"]
    },
    {
        _id: "military",
        name: "Military",
        description: "Armed forces, defense strategies, military technology, and warfare history.",
        keywords: ["armed forces", "defense", "warfare", "weapons", "military strategy", "tactics", "navy", "army", "air force", "special forces"]
    },
    {
        _id: "space",
        name: "Space",
        description: "Astronomy, space exploration, extraterrestrial research, and cosmology.",
        keywords: ["astronomy", "cosmos", "planets", "stars", "rockets", "NASA", "black holes", "cosmology", "satellites", "interstellar"]
    },
    {
        _id: "transportation",
        name: "Transportation",
        description: "Land, air, sea, and space transportation systems, vehicles, and logistics.",
        keywords: ["vehicles", "trains", "cars", "aerospace", "airplanes", "shipping", "logistics", "urban transport", "railroads", "hyperloop"]
    },
    {
        _id: "entertainment",
        name: "Entertainment",
        description: "Film, television, gaming, streaming, performances, and pop culture.",
        keywords: ["movies", "TV shows", "gaming", "streaming", "theater", "pop culture", "music industry", "Hollywood", "comics", "animation"]
    },

    {
        _id: "fashion",
        name: "Fashion",
        description: "Clothing, accessories, fashion design, trends, and beauty culture.",
        keywords: ["clothing", "style", "trends", "design", "couture", "runway", "luxury", "beauty", "aesthetics", "textiles"]
    },
    {
        _id: "animals",
        name: "Animals",
        description: "Zoology, wildlife conservation, pet care, animal behavior, and veterinary science.",
        keywords: ["wildlife", "zoology", "pets", "veterinary", "animal behavior", "biodiversity", "conservation", "mammals", "birds", "marine life"]
    },
    {
        _id: "parenting",
        name: "Parenting",
        description: "Child development, family dynamics, education, health, and parenting strategies.",
        keywords: ["children", "family", "motherhood", "fatherhood", "parenting tips", "childcare", "raising kids", "child psychology", "early education", "parenting styles"]
    },
    {
        _id: "architecture",
        name: "Architecture",
        description: "Building design, urban planning, infrastructure, and construction techniques.",
        keywords: ["buildings", "urbanism", "design", "construction", "engineering", "landscape architecture", "infrastructure", "sustainability", "urban planning", "interior design"]
    },
    {
        _id: "energy",
        name: "Energy",
        description: "Renewable energy, fossil fuels, power generation, grids, and sustainability.",
        keywords: ["solar", "wind power", "fossil fuels", "electricity", "power grid", "nuclear", "hydropower", "energy efficiency", "sustainability", "green energy"]
    },
    {
        _id: "engineering",
        name: "Engineering",
        description: "Mechanical, civil, electrical, software, and cutting-edge engineering disciplines.",
        keywords: ["mechanical", "civil", "electrical", "software", "biomedical", "robotics", "nanotechnology", "construction", "automotive", "structural"]
    },
    {
        _id: "literature",
        name: "Literature",
        description: "Books, authors, literary analysis, poetry, fiction, and nonfiction.",
        keywords: ["books", "novels", "poetry", "fiction", "nonfiction", "writing", "authors", "publishing", "literary analysis", "storytelling"]
    },
    {
        _id: "languages",
        name: "Languages",
        description: "Linguistics, language learning, translation, and multilingualism.",
        keywords: ["linguistics", "multilingualism", "translation", "grammar", "syntax", "speech", "phonetics", "language learning", "dialects", "etymology"]
    },
    {
        _id: "media",
        name: "Media",
        description: "Journalism, broadcasting, social media, news analysis, and communication.",
        keywords: ["journalism", "news", "broadcasting", "social media", "public relations", "communication", "press", "digital media", "advertising", "TV"]
    },
    {
        _id: "wellness",
        name: "Wellness",
        description: "Holistic health, self-care, fitness, mindfulness, and lifestyle improvement.",
        keywords: ["self-care", "fitness", "mental health", "nutrition", "meditation", "holistic health", "yoga", "lifestyle", "therapy", "balance"]
    },
    {
        _id: "technology_and_ethics",
        name: "Technology & Ethics",
        description: "Ethical dilemmas in technology, AI ethics, bioethics, and digital rights.",
        keywords: ["AI ethics", "bioethics", "data privacy", "digital rights", "automation ethics", "cybersecurity ethics", "robot ethics", "philosophy of tech", "social impact", "moral dilemmas"]
    },
    {
        _id: "gender_studies",
        name: "Gender Studies",
        description: "Gender roles, feminism, LGBTQ+ rights, and sociocultural gender dynamics.",
        keywords: ["feminism", "LGBTQ+", "gender identity", "sexuality", "intersectionality", "women’s rights", "masculinity", "gender equality", "social roles", "diversity"]
    },
    {
        _id: "indigenous_cultures",
        name: "Indigenous Cultures",
        description: "Native traditions, indigenous knowledge, rights, and cultural preservation.",
        keywords: ["native cultures", "tribal", "indigenous rights", "ancestral knowledge", "folklore", "heritage", "traditional practices", "indigenous languages", "spirituality", "historical preservation"]
    },
    {
        _id: "psychology",
        name: "Psychology",
        description: "Study of the mind, behavior, emotions, mental health, therapies, and cognitive processes.",
        keywords: ["mental health", "cognition", "therapy", "behavior", "emotions", "neuroscience", "psychoanalysis", "counseling", "subconscious", "cognitive science"]
    },
    {
        _id: "agriculture",
        name: "Agriculture",
        description: "Farming, livestock, agronomy, crop science, and sustainable agricultural practices.",
        keywords: ["farming", "crops", "livestock", "agronomy", "organic farming", "sustainable agriculture", "irrigation", "soil science", "harvesting", "food production"]
    },
    {
        _id: "space_exploration",
        name: "Space Exploration",
        description: "Space missions, astronomy, extraterrestrial research, and planetary sciences.",
        keywords: ["NASA", "rockets", "planets", "moon landing", "cosmology", "astronomy", "space travel", "satellites", "telescopes", "exoplanets"]
    },
    {
        _id: "artificial_intelligence",
        name: "Artificial Intelligence",
        description: "Machine learning, neural networks, AI ethics, and intelligent systems.",
        keywords: ["machine learning", "deep learning", "AI ethics", "neural networks", "automation", "robotics", "data science", "natural language processing", "computer vision", "AGI"]
    },
    {
        _id: "cybersecurity",
        name: "Cybersecurity",
        description: "Data protection, hacking, encryption, and information security strategies.",
        keywords: ["hacking", "encryption", "data security", "firewalls", "malware", "phishing", "cyber threats", "ethical hacking", "penetration testing", "network security"]
    },
    {
        _id: "materials_science",
        name: "Materials Science",
        description: "Advanced materials, nanotechnology, polymers, and smart materials development.",
        keywords: ["nanotechnology", "polymers", "metallurgy", "composites", "biomaterials", "ceramics", "semiconductors", "carbon fibers", "alloys", "structural materials"]
    },
    {
        _id: "transportation_and_logistics",
        name: "Transportation & Logistics",
        description: "Logistics networks, transport systems, shipping, and global supply chains.",
        keywords: ["supply chain", "shipping", "freight", "logistics", "trucking", "aviation", "rail transport", "urban mobility", "transport networks", "warehousing"]
    },
    {
        _id: "human_rights",
        name: "Human Rights",
        description: "Civil rights, equality, global justice, and activism.",
        keywords: ["civil rights", "equality", "freedom", "social justice", "activism", "humanitarian aid", "gender equality", "UN", "amnesty", "law"]
    },
    {
        _id: "energy_and_resources",
        name: "Energy & Resources",
        description: "Renewable energy, mining, oil & gas, and sustainable resource management.",
        keywords: ["renewable energy", "oil", "gas", "mining", "resources", "sustainability", "energy policy", "nuclear energy", "fossil fuels", "natural resources"]
    },
    {
        _id: "oceanography",
        name: "Oceanography",
        description: "Marine biology, ocean ecosystems, climate impact on oceans, and exploration.",
        keywords: ["marine life", "ocean currents", "coral reefs", "climate change", "deep sea", "ocean conservation", "aquatic ecosystems", "ocean mapping", "hydrology", "marine research"]
    },
    {
        _id: "urban_development",
        name: "Urban Development",
        description: "Urban planning, smart cities, housing, and community infrastructure.",
        keywords: ["urban planning", "smart cities", "housing", "infrastructure", "sustainability", "city planning", "architecture", "real estate", "transportation", "public policy"]
    },
    {
        _id: "disaster_management",
        name: "Disaster Management",
        description: "Emergency response, risk mitigation, and disaster preparedness strategies.",
        keywords: ["emergency response", "risk mitigation", "natural disasters", "climate resilience", "disaster relief", "humanitarian aid", "crisis management", "preparedness", "flooding", "earthquakes"]
    },
    {
        _id: "ethics_and_philosophy",
        name: "Ethics & Philosophy",
        description: "Philosophical debates, moral dilemmas, logic, metaphysics, and ethics.",
        keywords: ["philosophy", "ethics", "morality", "metaphysics", "logic", "existentialism", "epistemology", "ethics of AI", "moral dilemmas", "political philosophy"]
    },
    {
        _id: "cultural_studies",
        name: "Cultural Studies",
        description: "Cultural identity, traditions, globalization impact, and cross-cultural analysis.",
        keywords: ["culture", "globalization", "identity", "traditions", "cultural heritage", "media", "ethnography", "society", "cross-cultural", "postcolonial studies"]
    },
    {
        _id: "robotics",
        name: "Robotics",
        description: "Automation, industrial robots, humanoid robotics, and advanced robotics research.",
        keywords: ["robotics", "automation", "humanoids", "industrial robots", "AI", "machine learning", "autonomous systems", "robot ethics", "robot design", "control systems"]
    },
    {
        _id: "bioengineering",
        name: "Bioengineering",
        description: "Genetic engineering, biotechnology, synthetic biology, and bioinformatics.",
        keywords: ["genetic engineering", "biotechnology", "synthetic biology", "bioinformatics", "biomedicine", "CRISPR", "biophysics", "bioethics", "pharmaceuticals", "genomics"]
    },
    {
        _id: "alternative_medicine",
        name: "Alternative Medicine",
        description: "Holistic therapies, traditional medicine, herbal remedies, and complementary health practices.",
        keywords: ["holistic medicine", "herbal medicine", "acupuncture", "homeopathy", "naturopathy", "traditional medicine", "integrative health", "alternative healing", "mind-body therapy", "medicinal plants"]
    },
    {
        _id: "migration_and_demographics",
        name: "Migration & Demographics",
        description: "Population studies, immigration, demographic shifts, and cultural integration.",
        keywords: ["immigration", "population studies", "demographics", "global migration", "census", "urbanization", "refugees", "social integration", "diaspora", "migration policies"]
    },
    {
        _id: "media_and_journalism",
        name: "Media & Journalism",
        description: "News reporting, investigative journalism, media ethics, and digital news platforms.",
        keywords: ["journalism", "news", "media ethics", "press freedom", "investigative journalism", "broadcasting", "digital media", "fact-checking", "reporting", "publishing"]
    },
    {
        _id: "games_and_gaming",
        name: "Games & Gaming",
        description: "Video games, board games, esports, game design, and gaming culture.",
        keywords: ["video games", "board games", "esports", "game design", "game development", "gaming culture", "VR gaming", "indie games", "MMORPG", "competitive gaming"]
    },
    {
        _id: "space_industry",
        name: "Space Industry",
        description: "Commercial space ventures, satellite technology, and space economy.",
        keywords: ["commercial space", "satellites", "space economy", "aerospace", "rockets", "space travel", "orbital mechanics", "astronautics", "Mars colonization", "private space companies"]
    },
    {
        _id: "aviation",
        name: "Aviation",
        description: "Air travel, aerospace engineering, airports, and aviation technology.",
        keywords: ["airplanes", "pilots", "aerospace", "air traffic control", "airports", "flight safety", "aviation history", "supersonic travel", "commercial airlines", "spaceplanes"]
    },
    {
        _id: "cryptocurrency_and_blockchain",
        name: "Cryptocurrency & Blockchain",
        description: "Digital currencies, blockchain technology, decentralized finance, and NFTs.",
        keywords: ["bitcoin", "ethereum", "blockchain", "decentralized finance", "smart contracts", "NFTs", "cryptographic security", "digital wallets", "crypto mining", "Web3"]
    },
    {
        _id: "mental_health",
        name: "Mental Health",
        description: "Depression, anxiety, therapy, counseling, and mental wellness initiatives.",
        keywords: ["mental wellness", "psychotherapy", "anxiety", "depression", "counseling", "psychiatry", "cognitive therapy", "mindfulness", "stress management", "emotional health"]
    },
    {
        _id: "climate_change",
        name: "Climate Change",
        description: "Global warming, environmental policies, carbon footprint, and climate adaptation.",
        keywords: ["global warming", "climate policy", "carbon emissions", "sustainability", "climate resilience", "renewable energy", "deforestation", "climate activism", "sea level rise", "climate science"]
    },
    {
        _id: "photography",
        name: "Photography",
        description: "The art, science, and practice of creating images by recording light, digital photography, film, and visual storytelling.",
        keywords: ["photography", "digital photography", "film photography", "visual storytelling", "photojournalism", "portrait photography", "landscape photography", "camera technology", "lighting", "composition"]
    },  
    {
        _id: "cinema",
        name: "Cinema",
        description: "Film industry, filmmaking, screenwriting, directing, editing, and cinematic arts.",
        keywords: ["film industry", "filmmaking", "screenwriting", "directing", "cinematic arts", "movies", "film production", "acting", "film editing", "cinematography"]
    },
    {
        _id: "writing",
        name: "Writing",
        description: "Creative writing, journalism, copywriting, technical writing, and publishing.",
        keywords: ["creative writing", "journalism", "copywriting", "technical writing", "publishing", "fiction", "nonfiction", "editing", "poetry", "manuscripts"]
    },
    {
        _id: "blogging",
        name: "Blogging",
        description: "Content creation, personal blogs, niche blogging, SEO writing, and digital presence.",
        keywords: ["blogging", "content creation", "SEO writing", "digital marketing", "social media", "niche blogging", "monetization", "influencers", "web writing", "online presence"]
    },
    {
        _id: "news",
        name: "News",
        description: "Current events, news agencies, investigative journalism, and global news reporting.",
        keywords: ["news", "journalism", "current events", "global news", "news agencies", "political reporting", "broadcast news", "media analysis", "press", "fact-checking"]
    },
    {
        _id: "advertising",
        name: "Advertising",
        description: "Marketing strategies, ad campaigns, digital advertising, branding, and media buying.",
        keywords: ["advertising", "marketing", "branding", "ad campaigns", "digital marketing", "media buying", "commercials", "sponsorships", "promotions", "consumer behavior"]
    },
    {
        _id: "public_relations",
        name: "Public Relations",
        description: "Reputation management, corporate communication, crisis communication, and media relations.",
        keywords: ["public relations", "reputation management", "corporate communication", "crisis management", "brand image", "press releases", "social responsibility", "stakeholder engagement", "PR campaigns", "media strategy"]
    },
    {
        _id: "culinary_arts",
        name: "Culinary Arts",
        description: "Professional cooking, gastronomy, culinary techniques, and global cuisines.",
        keywords: ["culinary arts", "gastronomy", "cooking", "chef", "restaurants", "culinary techniques", "food presentation", "fine dining", "world cuisines", "kitchen management"]
    },
    {
        _id: "craftsmanship",
        name: "Craftsmanship",
        description: "Traditional crafts, artisan products, handmade goods, and cultural craftsmanship.",
        keywords: ["craftsmanship", "artisan", "handmade", "woodworking", "leathercraft", "metalwork", "pottery", "textile arts", "traditional skills", "artisanal products"]
    },
    {
        _id: "construction",
        name: "Construction",
        description: "Building, infrastructure development, civil works, and project management.",
        keywords: ["construction", "civil engineering", "architecture", "urban development", "building materials", "real estate development", "infrastructure", "contracting", "renovation", "landscaping"]
    },
    {
        _id: "hospitality",
        name: "Hospitality",
        description: "Hotels, restaurants, tourism services, guest relations, and hospitality management.",
        keywords: ["hospitality", "hotels", "tourism", "guest relations", "restaurant management", "service industry", "luxury hospitality", "event planning", "customer service", "travel industry"]
    },
    {
        _id: "real_estate",
        name: "Real Estate",
        description: "Property development, real estate markets, urban planning, and investment properties.",
        keywords: ["real estate", "property development", "housing market", "urban planning", "mortgages", "commercial real estate", "property investment", "land ownership", "home buying", "rental market"]
    },
    {
        _id: "ecommerce",
        name: "E-commerce",
        description: "Online retail, digital marketplaces, dropshipping, and e-commerce technologies.",
        keywords: ["e-commerce", "online retail", "dropshipping", "digital marketplaces", "Amazon", "shopify", "electronic payments", "customer acquisition", "e-commerce platforms", "logistics"]
    },
    {
        _id: "telecommunications",
        name: "Telecommunications",
        description: "Communication networks, mobile technologies, internet infrastructure, and digital connectivity.",
        keywords: ["telecommunications", "mobile networks", "5G", "broadband", "fiber optics", "satellite communication", "network security", "wireless technology", "ISP", "telecom industry"]
    },
    {
        _id: "nonprofits",
        name: "Nonprofits",
        description: "Charitable organizations, social causes, humanitarian aid, and non-governmental organizations.",
        keywords: ["nonprofits", "charity", "humanitarian aid", "NGO", "fundraising", "social impact", "community development", "volunteering", "advocacy", "nonprofit management"]
    },
    {
        _id: "fisheries",
        name: "Fisheries",
        description: "Fishing industry, aquaculture, sustainable fisheries, and marine resources.",
        keywords: ["fisheries", "fishing industry", "aquaculture", "marine biology", "sustainable seafood", "ocean conservation", "commercial fishing", "fish farming", "marine economy", "water resources"]
    },
    {
        _id: "mining",
        name: "Mining",
        description: "Mineral exploration, extraction processes, mining technologies, and environmental impacts.",
        keywords: ["mining", "mineral extraction", "geology", "excavation", "natural resources", "metals", "mining technology", "rare earth minerals", "mining industry", "sustainable mining"]
    },
    {
        _id: "forestry",
        name: "Forestry",
        description: "Forest management, conservation, logging, and sustainable forestry practices.",
        keywords: ["forestry", "forest management", "logging", "wood industry", "sustainable forestry", "deforestation", "conservation", "tree planting", "reforestation", "wildlife habitats"]
    },
    {
        _id: "transport_and_logistics",
        name: "Transport & Logistics",
        description: "Supply chains, shipping, freight services, and logistics management.",
        keywords: ["transportation", "logistics", "shipping", "supply chain", "freight", "warehousing", "distribution", "delivery", "logistics optimization", "international trade"]
    },
    {
        _id: "waste_management",
        name: "Waste Management",
        description: "Recycling, waste reduction, environmental services, and circular economy.",
        keywords: ["waste management", "recycling", "landfills", "circular economy", "plastic waste", "waste treatment", "waste-to-energy", "environmental services", "pollution control", "green waste"]
    },
    {
        _id: "insurance",
        name: "Insurance",
        description: "Risk management, life insurance, health insurance, property insurance, and financial protection.",
        keywords: ["insurance", "risk management", "life insurance", "health insurance", "auto insurance", "property insurance", "financial protection", "reinsurance", "actuarial science", "policy coverage"]
    },
    {
        _id: "banking",
        name: "Banking",
        description: "Banking systems, financial services, digital banking, and investment banking.",
        keywords: ["banking", "financial services", "investment banking", "digital banking", "central banks", "credit unions", "loans", "monetary policy", "fintech", "bank regulations"]
    },
    {
        _id: "consulting",
        name: "Consulting",
        description: "Business consulting, management advisory, technology consulting, and strategic advice.",
        keywords: ["consulting", "business strategy", "management consulting", "technology consulting", "advisory services", "market research", "corporate strategy", "business growth", "process optimization", "consulting firms"]
    },
    {
        _id: "human_resources",
        name: "Human Resources",
        description: "Recruitment, talent management, workplace culture, and HR strategies.",
        keywords: ["human resources", "HR", "recruitment", "talent management", "employee engagement", "workplace culture", "performance evaluation", "career development", "HR technology", "labor laws"]
    },
    {
        _id: "space_commerce",
        name: "Space Commerce",
        description: "Commercial space exploration, satellite services, space tourism, and extraterrestrial industries.",
        keywords: ["space commerce", "commercial space", "satellites", "space industry", "private space companies", "space mining", "space tourism", "orbital infrastructure", "low earth orbit", "rocket industry"]
    },
    {
        _id: "biotech",
        name: "Biotechnology",
        description: "Biotech research, genetic engineering, pharmaceuticals, and life sciences innovation.",
        keywords: ["biotechnology", "genetic engineering", "biotech research", "pharmaceuticals", "biomedical", "CRISPR", "life sciences", "biotech startups", "synthetic biology", "drug development"]
    },
    {
        _id: "clean_technology",
        name: "Clean Technology",
        description: "Green innovations, renewable technologies, carbon capture, and environmental technologies.",
        keywords: ["clean technology", "green energy", "sustainability", "renewable energy", "carbon capture", "solar power", "wind energy", "sustainable materials", "eco-friendly innovations", "climate technology"]
    },
    {
        _id: "military_technology",
        name: "Military Technology",
        description: "Defense technologies, advanced weaponry, military innovations, and cybersecurity.",
        keywords: ["military technology", "defense", "weapons", "cyberwarfare", "AI in warfare", "missile defense", "military drones", "stealth technology", "warfare strategy", "naval technology"]
    },
    {
        _id: "meteorology",
        name: "Meteorology",
        description: "Weather science, climate modeling, extreme weather analysis, and atmospheric studies.",
        keywords: ["meteorology", "weather forecasting", "climate science", "atmosphere", "hurricanes", "storm tracking", "climate change", "weather patterns", "extreme weather", "meteorological research"]
    },
    {
        _id: "nanotechnology",
        name: "Nanotechnology",
        description: "Nano-scale science, materials engineering, molecular technologies, and advanced materials.",
        keywords: ["nanotechnology", "nanomaterials", "nanomedicine", "nano-engineering", "molecular science", "advanced materials", "quantum dots", "graphene", "self-assembling materials", "nanorobots"]
    },
    {
        _id: "government",
        name: "Government",
        description: "Public administration, government institutions, policymaking, governance, and civil service.",
        keywords: ["government", "public administration", "governance", "civil service", "bureaucracy", "policy making", "government agencies", "federal systems", "state governance", "public sector"]
    },
    {
        _id: "public_policy",
        name: "Public Policy",
        description: "Policy design, legislative processes, regulatory frameworks, and public programs.",
        keywords: ["public policy", "policy design", "legislation", "law making", "government regulations", "public administration", "economic policies", "regulatory frameworks", "social policies", "policy research"]
    },
    {
        _id: "civil_rights",
        name: "Civil Rights",
        description: "Rights of individuals, freedom protection, anti-discrimination laws, and equality measures.",
        keywords: ["civil rights", "human rights", "equality", "freedom", "anti-discrimination", "social justice", "civil liberties", "legal rights", "activism", "racial justice"]
    },
    {
        _id: "police",
        name: "Police",
        description: "Law enforcement agencies, crime prevention, investigations, and public safety.",
        keywords: ["police", "law enforcement", "public safety", "crime prevention", "policing strategies", "criminal investigations", "forensics", "community policing", "law enforcement agencies", "security"]
    },
    {
        _id: "justice_system",
        name: "Justice System",
        description: "Courts, judicial processes, legal interpretation, case law, and access to justice.",
        keywords: ["justice system", "courts", "judicial process", "legal interpretation", "case law", "criminal justice", "legal system", "court proceedings", "law enforcement", "civil law"]
    },
    {
        _id: "corrections",
        name: "Corrections",
        description: "Prisons, rehabilitation, parole, correctional facilities, and criminal justice reform.",
        keywords: ["corrections", "prison system", "rehabilitation", "parole", "criminal justice reform", "correctional facilities", "recidivism", "inmate rehabilitation", "prison management", "juvenile justice"]
    },
    {
        _id: "military_and_defense",
        name: "Military & Defense",
        description: "National defense strategies, armed forces, military technology, and veterans affairs.",
        keywords: ["military", "defense", "armed forces", "national security", "military strategy", "defense policy", "veterans affairs", "military conflicts", "geopolitical defense", "special operations"]
    },
    {
        _id: "public_health",
        name: "Public Health",
        description: "Epidemiology, health policies, disease prevention, and population health programs.",
        keywords: ["public health", "epidemiology", "disease prevention", "vaccination", "health policy", "pandemic response", "population health", "public health agencies", "WHO", "global health"]
    },
    {
        _id: "labor_and_employment",
        name: "Labor & Employment",
        description: "Workforce policies, labor rights, unions, employment laws, and workplace standards.",
        keywords: ["labor", "employment", "workforce", "unions", "labor rights", "wage laws", "workplace standards", "occupational safety", "employment policies", "job market"]
    },
    {
        _id: "taxation",
        name: "Taxation",
        description: "Tax policies, tax collection, fiscal systems, and compliance with tax regulations.",
        keywords: ["taxation", "fiscal policy", "tax laws", "tax collection", "corporate tax", "income tax", "VAT", "property tax", "taxation system", "revenue"]
    },
    {
        _id: "social_welfare",
        name: "Social Welfare",
        description: "Public assistance programs, welfare policies, social security, and poverty alleviation.",
        keywords: ["social welfare", "public assistance", "welfare programs", "social security", "poverty alleviation", "government aid", "basic income", "unemployment benefits", "food stamps", "welfare reform"]
    },
    {
        _id: "immigration",
        name: "Immigration",
        description: "Immigration policies, citizenship, asylum processes, and border control.",
        keywords: ["immigration", "citizenship", "asylum", "border control", "immigration policies", "visa policies", "refugee status", "naturalization", "migration laws", "global mobility"]
    },
    {
        _id: "public_infrastructure",
        name: "Public Infrastructure",
        description: "Public works, utilities, transportation networks, and government-managed infrastructure.",
        keywords: ["public infrastructure", "utilities", "transportation networks", "public works", "urban planning", "infrastructure development", "government projects", "water supply", "power grid", "telecommunications"]
    },
    {
        _id: "economic_development",
        name: "Economic Development",
        description: "National and regional economic planning, investments, trade policy, and growth initiatives.",
        keywords: ["economic development", "GDP growth", "investment policies", "trade agreements", "regional economies", "urban development", "financial planning", "public-private partnerships", "entrepreneurship", "global markets"]
    },
    {
        _id: "public_finance",
        name: "Public Finance",
        description: "Government budgets, public expenditure, fiscal policies, and debt management.",
        keywords: ["public finance", "government budget", "fiscal policy", "debt management", "public expenditure", "tax revenue", "monetary policy", "financial regulation", "central banks", "government spending"]
    },
    {
        _id: "public_safety",
        name: "Public Safety",
        description: "Emergency services, disaster preparedness, public health emergencies, and crisis response.",
        keywords: ["public safety", "emergency services", "disaster response", "fire departments", "police services", "public health emergencies", "crisis management", "hazard preparedness", "civil defense", "community safety"]
    },
    {
        _id: "housing_and_urban_development",
        name: "Housing & Urban Development",
        description: "Public housing programs, urban planning, affordable housing, and city management.",
        keywords: ["housing", "urban development", "affordable housing", "city planning", "real estate policies", "public housing", "homeownership", "rental laws", "smart cities", "sustainable housing"]
    },
    {
        _id: "environmental_policy",
        name: "Environmental Policy",
        description: "Environmental laws, conservation programs, climate regulations, and sustainability governance.",
        keywords: ["environmental policy", "climate regulations", "conservation laws", "sustainability", "carbon policies", "green legislation", "environmental impact", "pollution control", "eco-friendly policies", "climate action"]
    },
    {
        _id: "agricultural_policy",
        name: "Agricultural Policy",
        description: "Farming subsidies, food security programs, rural development, and land use policies.",
        keywords: ["agriculture policy", "farming subsidies", "food security", "rural development", "land use", "agribusiness", "organic farming", "sustainable agriculture", "agricultural exports", "crop insurance"]
    },
    {
        _id: "consumer_protection",
        name: "Consumer Protection",
        description: "Consumer rights, product safety, market regulation, and fair trade practices.",
        keywords: ["consumer protection", "consumer rights", "product safety", "market regulation", "fair trade", "false advertising", "consumer fraud", "business ethics", "warranty laws", "corporate responsibility"]
    },
    {
        _id: "public_transport",
        name: "Public Transport",
        description: "Government-run transportation systems, mobility plans, and transit policies.",
        keywords: ["public transport", "mass transit", "bus networks", "rail systems", "transport policies", "commuter services", "urban mobility", "transport subsidies", "infrastructure investment", "sustainable transit"]
    },
    {
        _id: "national_security",
        name: "National Security",
        description: "Intelligence services, counter-terrorism, cyber defense, and homeland security.",
        keywords: ["national security", "intelligence agencies", "counter-terrorism", "homeland security", "defense strategy", "cyber defense", "border security", "threat analysis", "geopolitics", "military intelligence"]
    },
    {
        _id: "census_and_statistics",
        name: "Census & Statistics",
        description: "Population data, statistical agencies, demographic analysis, and public surveys.",
        keywords: ["census", "statistics", "population data", "demographics", "survey research", "government data", "social statistics", "economic indicators", "public opinion", "global population trends"]
    },
    {
        _id: "diplomacy_and_foreign_relations",
        name: "Diplomacy & Foreign Relations",
        description: "International diplomacy, embassies, foreign policy, treaties, and global cooperation.",
        keywords: ["diplomacy", "foreign relations", "international policy", "treaties", "foreign affairs", "embassies", "geopolitics", "international cooperation", "diplomatic missions", "global negotiations"]
    },
    {
        _id: "municipal_government",
        name: "Municipal Government",
        description: "Local governance, city councils, community services, and local regulations.",
        keywords: ["municipal government", "local governance", "city management", "community services", "local elections", "town planning", "public utilities", "regional policies", "municipal finance", "urban law"]
    },
    {
        _id: "public_works",
        name: "Public Works",
        description: "Public construction projects, infrastructure maintenance, and utilities management.",
        keywords: ["public works", "government projects", "infrastructure maintenance", "construction", "civil engineering", "public utilities", "roads and bridges", "water supply", "public investment", "transportation projects"]
    },
    {
        _id: "judicial_reform",
        name: "Judicial Reform",
        description: "Court modernization, justice access initiatives, and legal system transparency.",
        keywords: ["judicial reform", "court modernization", "legal system", "access to justice", "criminal justice reform", "rule of law", "legal aid", "judicial independence", "court efficiency", "legal transparency"]
    },
    {
        _id: "ethics_in_government",
        name: "Ethics in Government",
        description: "Anti-corruption, transparency, accountability, and ethical governance practices.",
        keywords: ["ethics", "government", "anti-corruption", "transparency", "accountability", "public trust", "political ethics", "ethical governance", "good governance", "whistleblowing"]
    },
    {
        _id: "public_service_jobs",
        name: "Public Service Jobs",
        description: "Government employment, civil service careers, and public sector HR policies.",
        keywords: ["public service", "government jobs", "civil service", "bureaucracy", "public sector", "government hiring", "civil servants", "state employment", "public administration", "career in government"]
    },
    {
        _id: "loans_and_grants",
        name: "Loans & Grants",
        description: "Government financial aid, business grants, student loans, and public funding programs.",
        keywords: ["loans", "grants", "financial aid", "government funding", "student loans", "business grants", "scholarships", "public funding", "loan programs", "grant applications"]
    },
    {
        _id: "international_organizations",
        name: "International Organizations",
        description: "United Nations, World Bank, IMF, WHO, and global governance bodies.",
        keywords: ["international organizations", "UN", "World Bank", "IMF", "WHO", "global governance", "NGOs", "diplomatic relations", "international cooperation", "multilateral institutions"]
    },
    {
        _id: "administrative_law",
        name: "Administrative Law",
        description: "Regulations governing agencies, rulemaking processes, and administrative justice.",
        keywords: ["administrative law", "public administration", "government agencies", "regulatory law", "rulemaking", "bureaucratic procedures", "administrative courts", "public sector regulations", "legal frameworks", "governance law"]
    },
    {
        _id: "trade_policy",
        name: "Trade Policy",
        description: "International trade agreements, tariffs, export controls, and trade negotiations.",
        keywords: ["trade policy", "international trade", "tariffs", "trade agreements", "export controls", "trade negotiations", "free trade", "WTO", "import-export", "trade regulations"]
    },
    {
        _id: "criminal_law",
        name: "Criminal Law",
        description: "Criminal codes, law enforcement procedures, prosecution, and penal systems.",
        keywords: ["criminal law", "law enforcement", "crime", "criminal justice", "prosecution", "penal system", "criminal codes", "defense law", "judicial process", "legal penalties"]
    },
    {
        _id: "civil_law",
        name: "Civil Law",
        description: "Civil litigation, contracts, property law, family law, and tort law.",
        keywords: ["civil law", "contracts", "property law", "family law", "civil litigation", "tort law", "civil rights", "legal disputes", "private law", "legal remedies"]
    },
    {
        _id: "labor_law",
        name: "Labor Law",
        description: "Workplace regulations, collective bargaining, labor rights, and employment laws.",
        keywords: ["labor law", "employment laws", "workers' rights", "workplace regulations", "unions", "collective bargaining", "fair wages", "labor disputes", "worker protections", "occupational safety"]
    },
    {
        _id: "tax_law",
        name: "Tax Law",
        description: "Tax codes, tax litigation, international taxation, and tax compliance.",
        keywords: ["tax law", "tax codes", "IRS regulations", "taxation", "corporate taxes", "personal taxes", "tax compliance", "international tax", "financial law", "fiscal policy"]
    },
    {
        _id: "intellectual_property_law",
        name: "Intellectual Property Law",
        description: "Patents, copyrights, trademarks, trade secrets, and IP litigation.",
        keywords: ["intellectual property", "patents", "copyrights", "trademarks", "trade secrets", "IP law", "IP litigation", "digital rights", "innovation protection", "intellectual assets"]
    },
    {
        _id: "artificial_intelligence",
        name: "Artificial Intelligence",
        description: "All about AI, including machine learning, neural networks, and AI applications.",
        keywords: ["AI", "machine learning", "neural networks", "deep learning", "automation", "artificial general intelligence", "AI ethics", "computer vision", "AI applications", "robotics"]
    },
    {
        _id: "blockchain",
        name: "Blockchain",
        description: "Decentralized technologies, cryptocurrencies, smart contracts, and distributed ledgers.",
        keywords: ["blockchain", "decentralization", "cryptocurrencies", "Bitcoin", "Ethereum", "smart contracts", "distributed ledgers", "web3", "DeFi", "NFTs"]
    },
    {
        _id: "space_industry",
        name: "Space Industry",
        description: "Commercial space sector, private space companies, and orbital infrastructure.",
        keywords: ["space industry", "space exploration", "satellites", "NASA", "SpaceX", "orbital infrastructure", "private space companies", "space economy", "aerospace", "future of space"]
    },
    {
        _id: "bioethics",
        name: "Bioethics",
        description: "Ethical issues related to biotechnology, genetics, and medical research.",
        keywords: ["bioethics", "medical ethics", "genetics", "biotechnology", "human cloning", "organ transplantation", "medical research", "genetic modification", "AI in healthcare", "ethical dilemmas"]
    },
    {
        _id: "quantum_technology",
        name: "Quantum Technology",
        description: "Quantum computing, quantum communication, and emerging quantum applications.",
        keywords: ["quantum computing", "quantum mechanics", "quantum cryptography", "quantum AI", "entanglement", "superposition", "quantum communication", "future technology", "next-gen computing", "quantum applications"]
    },
    {
        _id: "cognitive_science",
        name: "Cognitive Science",
        description: "Interdisciplinary study of the mind, combining psychology, neuroscience, and AI.",
        keywords: ["cognitive science", "psychology", "neuroscience", "artificial intelligence", "human cognition", "mental processes", "behavioral science", "brain function", "linguistics", "learning theory"]
    },
    {
        _id: "cryptography",
        name: "Cryptography",
        description: "Encryption, data security, cryptographic algorithms, and digital privacy.",
        keywords: ["cryptography", "encryption", "cybersecurity", "data protection", "privacy", "blockchain security", "public-key cryptography", "secure communication", "digital signatures", "information security"]
    },
    {
        _id: "supply_chain",
        name: "Supply Chain",
        description: "Global supply networks, logistics, inventory management, and sourcing strategies.",
        keywords: ["supply chain", "logistics", "inventory management", "global trade", "manufacturing", "transportation", "warehousing", "procurement", "distribution networks", "supply chain disruptions"]
    },
    {
        _id: "circular_economy",
        name: "Circular Economy",
        description: "Economic systems designed to eliminate waste and reuse resources efficiently.",
        keywords: ["circular economy", "sustainability", "recycling", "waste reduction", "renewable resources", "eco-friendly industries", "green economy", "zero waste", "closed-loop systems", "sustainable business"]
    },
    {
        _id: "oceanography",
        name: "Oceanography",
        description: "Study of the oceans, including ecosystems, climate impact, and marine resources.",
        keywords: ["oceanography", "marine biology", "climate change", "ocean ecosystems", "coral reefs", "marine conservation", "deep-sea exploration", "ocean currents", "hydrology", "coastal science"]
    },
    {
        _id: "genomics",
        name: "Genomics",
        description: "Genome research, gene editing, and personalized medicine.",
        keywords: ["genomics", "DNA", "gene editing", "CRISPR", "genetic research", "personalized medicine", "biotechnology", "epigenetics", "genomic sequencing", "healthcare innovation"]
    },
    {
        _id: "neuroscience",
        name: "Neuroscience",
        description: "Brain science, neural processes, cognitive functions, and brain-machine interfaces.",
        keywords: ["neuroscience", "brain research", "cognitive science", "neural networks", "consciousness", "brain-machine interfaces", "neurology", "mental health", "behavioral neuroscience", "artificial neurons"]
    },
    {
        _id: "urban_planning",
        name: "Urban Planning",
        description: "City development, infrastructure planning, and smart cities.",
        keywords: ["urban planning", "smart cities", "infrastructure", "city design", "sustainable cities", "public transportation", "urbanization", "housing policies", "community planning", "metropolitan development"]
    },
    {
        _id: "cultural_preservation",
        name: "Cultural Preservation",
        description: "Protection of cultural heritage, artifacts, languages, and traditions.",
        keywords: ["cultural preservation", "heritage protection", "traditional knowledge", "indigenous cultures", "historical sites", "language preservation", "UNESCO", "archaeology", "folk traditions", "intangible heritage"]
    },
    {
        _id: "digital_rights",
        name: "Digital Rights",
        description: "Online privacy, data ownership, and freedom of expression in digital spaces.",
        keywords: ["digital rights", "internet freedom", "data privacy", "online security", "free speech", "cyber law", "digital ownership", "surveillance", "net neutrality", "human rights in tech"]
    },
    {
        _id: "social_innovation",
        name: "Social Innovation",
        description: "Innovative solutions to social and environmental challenges.",
        keywords: ["social innovation", "impact-driven solutions", "sustainability", "nonprofit innovation", "community development", "social entrepreneurship", "tech for good", "public sector innovation", "humanitarian technology", "grassroots initiatives"]
    },
    {
        _id: "alternative_energy",
        name: "Alternative Energy",
        description: "Innovative energy sources such as fusion, hydrogen, and synthetic fuels.",
        keywords: ["alternative energy", "renewable energy", "fusion energy", "hydrogen power", "clean technology", "solar energy", "wind power", "synthetic fuels", "decarbonization", "sustainable energy"]
    },
    {
        _id: "climate_resilience",
        name: "Climate Resilience",
        description: "Adaptation strategies to mitigate climate change impacts.",
        keywords: ["climate resilience", "climate adaptation", "disaster preparedness", "sustainable development", "green infrastructure", "carbon offset", "environmental planning", "extreme weather response", "community resilience", "eco-friendly policies"]
    },
    {
        _id: "humanitarian_aid",
        name: "Humanitarian Aid",
        description: "Disaster relief, emergency response, and aid delivery systems.",
        keywords: ["humanitarian aid", "disaster relief", "emergency response", "aid organizations", "crisis management", "refugee support", "medical aid", "relief funding", "international aid", "human rights"]
    },
    {
        _id: "geopolitics",
        name: "Geopolitics",
        description: "Global power dynamics, international relations, and strategic influence.",
        keywords: ["geopolitics", "international relations", "global power", "foreign policy", "diplomatic strategy", "national security", "territorial disputes", "economic influence", "geostrategy", "political economy"]
    },
    {
        _id: "philanthropy",
        name: "Philanthropy",
        description: "Charitable initiatives, grant funding, and global development programs.",
        keywords: ["philanthropy", "charity", "fundraising", "grant funding", "nonprofits", "social impact", "humanitarian work", "corporate social responsibility", "donations", "impact investing"]
    },
    {
        _id: "spirituality",
        name: "Spirituality",
        description: "Non-religious spiritual practices, meditation, and transcendental experiences.",
        keywords: ["spirituality", "meditation", "mindfulness", "inner peace", "consciousness", "holistic practices", "self-discovery", "esoteric studies", "well-being", "transcendence"]
    },
    {
        _id: "futurism",
        name: "Futurism",
        description: "Speculative scenarios, technological forecasting, and future studies.",
        keywords: ["futurism", "future studies", "speculative fiction", "technological trends", "singularity", "post-humanism", "innovation", "artificial intelligence", "space colonization", "long-term forecasting"]
    },
    {
        _id: "digital_health",
        name: "Digital Health",
        description: "Telemedicine, health apps, wearable devices, and personalized health tech.",
        keywords: ["digital health", "telemedicine", "health apps", "wearable devices", "remote healthcare", "personalized medicine", "AI in health", "health monitoring", "biohacking", "medical innovation"]
    },
    {
        _id: "behavioral_science",
        name: "Behavioral Science",
        description: "Analysis of human behavior in decision-making, habits, and societal trends.",
        keywords: ["behavioral science", "human behavior", "decision-making", "psychology", "cognitive bias", "social influence", "habit formation", "consumer psychology", "economic behavior", "neuroscience"]
    },
    {
        _id: "synthetic_biology",
        name: "Synthetic Biology",
        description: "Engineering biological systems for industrial and medical applications.",
        keywords: ["synthetic biology", "bioengineering", "biotech", "genetic modification", "bioinformatics", "biomanufacturing", "DNA synthesis", "biopharmaceuticals", "genomics", "biological systems"]
    },
    {
        _id: "marine_biology",
        name: "Marine Biology",
        description: "Study of marine ecosystems, species, and conservation efforts.",
        keywords: ["marine biology", "ocean ecosystems", "marine conservation", "marine life", "aquatic research", "coastal biodiversity", "marine pollution", "oceanography", "coral reefs", "underwater ecology"]
    },
    {
        _id: "precision_agriculture",
        name: "Precision Agriculture",
        description: "Smart farming technologies, IoT sensors, and data-driven agriculture.",
        keywords: ["precision agriculture", "smart farming", "IoT in agriculture", "agritech", "drones in farming", "automated irrigation", "data-driven agriculture", "soil monitoring", "sustainable farming", "crop optimization"]
    },
    {
        _id: "microbiology",
        name: "Microbiology",
        description: "Microorganisms, bacteria, viruses, and microbial ecosystems.",
        keywords: ["microbiology", "bacteria", "viruses", "fungi", "microorganisms", "pathogens", "antibiotics", "microbial ecosystems", "probiotics", "infectious diseases"]
    },
    {
        _id: "aging_and_longevity",
        name: "Aging & Longevity",
        description: "Anti-aging research, longevity science, and healthy aging practices.",
        keywords: ["aging", "longevity", "anti-aging", "biogerontology", "lifespan extension", "healthy aging", "gerontology", "life extension", "cellular aging", "aging biomarkers"]
    },
    {
        _id: "alternative_economies",
        name: "Alternative Economies",
        description: "Cooperative economies, local currencies, and non-monetary exchange systems.",
        keywords: ["alternative economies", "cooperative economy", "local currencies", "barter systems", "gift economy", "cryptocurrency", "solidarity economy", "time banking", "community trading", "decentralized markets"]
    },
    {
        _id: "space_policy",
        name: "Space Policy",
        description: "International agreements, space law, and governance of outer space.",
        keywords: ["space policy", "space law", "international treaties", "space governance", "satellite regulations", "private space industry", "government space agencies", "outer space treaties", "orbital security", "global cooperation"]
    },
    {
        _id: "disinformation_and_media_literacy",
        name: "Disinformation & Media Literacy",
        description: "Combating fake news, critical media analysis, and digital literacy.",
        keywords: ["disinformation", "media literacy", "fake news", "fact-checking", "digital misinformation", "propaganda", "news bias", "critical thinking", "media ethics", "online misinformation"]
    }
];

module.exports = categories;