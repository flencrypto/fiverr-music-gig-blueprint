// Fiverr Music Gig Blueprint - Complete Stage Data
const stagesData = [
    {
        id: 0,
        title: "Prep Your Assets",
        subtitle: "Before you open Fiverr",
        timeEstimate: "2-3 hours",
        description: "You'll move much faster on Fiverr if you prep this stuff first.",
        sections: [
            {
                heading: "Decide Your Branding",
                content: `
                    <strong>Artist/Seller Name:</strong> Mr.FLEN (for artist credit)<br>
                    <strong>Fiverr Display Name:</strong> Mr FLEN Music / MrFLEN_Official etc.
                `
            },
            {
                heading: "Create Profile Picture",
                content: "Clean headshot or stylised image of you. Square, clear, not too busy."
            },
            {
                heading: "Draft Your Short Bio",
                content: `I'm a music producer and writer who turns real stories into custom songs using a mix of live production and advanced AI tools. Birthdays, anniversaries, roasts, wedding anthems – if you can describe it, I can turn it into a track with your names, jokes, and memories baked in.`
            }
        ],
        checklist: [
            "Choose artist/seller name",
            "Choose Fiverr display name",
            "Create/find profile picture",
            "Write 2-3 sentence bio",
            "Save all branding assets"
        ]
    },
    {
        id: 1,
        title: "Create Fiverr Account & Profile",
        subtitle: "Setting up your seller presence",
        timeEstimate: "1-2 hours",
        description: "Go to Fiverr and create an account as a Seller. This is your foundation.",
        sections: [
            {
                heading: "Fill in Profile Information",
                content: `
                    <ul>
                        <li><strong>Display name</strong> - Your chosen name</li>
                        <li><strong>Profile photo</strong> - The image you prepared</li>
                        <li><strong>Description</strong> - Use the bio you drafted</li>
                        <li><strong>Languages</strong> - English (Native/Bilingual)</li>
                    </ul>
                `
            },
            {
                heading: "Set Your Skills & Category",
                content: `
                    <ul>
                        <li><strong>Category:</strong> Music & Audio</li>
                        <li><strong>Subcategories:</strong> Singer-Songwriter, Producers & Composers, Custom Songs</li>
                        <li><strong>Link socials:</strong> Spotify, YouTube, TikTok (optional but recommended)</li>
                    </ul>
                `
            }
        ],
        checklist: [
            "Create Fiverr seller account",
            "Upload profile picture",
            "Fill in profile description",
            "Set language preference",
            "Add category: Music & Audio",
            "Link social media (optional)",
            "Verify email address"
        ]
    },
    {
        id: 2,
        title: "Build Your First Gig",
        subtitle: "The Money-Maker Gig",
        timeEstimate: "2-3 hours",
        description: "You'll create one main gig that includes all tiers - Basic, Standard, Premium, and Ultra as add-ons.",
        sections: [
            {
                heading: "Gig Category & Title",
                content: `
                    <strong>Category:</strong> Music & Audio<br>
                    <strong>Service:</strong> Custom Songs<br><br>
                    <strong>Gig Title (pick one):</strong><br>
                    • "I will create a personalised song with your story in it"<br>
                    • "I will make a custom song, cover art and video for your loved one"
                `
            },
            {
                heading: "Search Tags (5 max)",
                content: `
                    • custom song<br>
                    • personalised music<br>
                    • birthday song<br>
                    • love song<br>
                    • rap song / wedding song (pick based on your main niche)
                `
            }
        ],
        checklist: [
            "Go to Create Gig on Fiverr",
            "Select Music & Audio category",
            "Write compelling gig title",
            "Add 5 relevant search tags",
            "Upload gig gallery images",
            "Save gig basics (don't publish yet)"
        ]
    },
    {
        id: 3,
        title: "Set Up Pricing Packages",
        subtitle: "Three Tiers: Basic → Standard → Premium",
        timeEstimate: "1-2 hours",
        description: "Fiverr uses a 3-tier pricing model. Set up packages that guide buyers to your Standard tier.",
        sections: [
            {
                heading: "Package Structure",
                content: `
                    <div class="pricing-grid">
                        <div class="pricing-card">
                            <h4>🎵 Basic</h4>
                            <p class="price">£20-30</p>
                            <ul>
                                <li>60-90 second song</li>
                                <li>1 verse + hook</li>
                                <li>1 genre</li>
                                <li>MP3 + lyrics</li>
                                <li>3-5 days delivery</li>
                                <li>1 revision</li>
                            </ul>
                        </div>
                        <div class="pricing-card recommended">
                            <h4>⭐ Standard</h4>
                            <p class="price">£40-60</p>
                            <ul>
                                <li>2-3 minute song</li>
                                <li>2 verses + chorus</li>
                                <li>2 genres blended</li>
                                <li>MP3 + lyrics</li>
                                <li>Simple cover art</li>
                                <li>4-7 days delivery</li>
                                <li>2 revisions</li>
                            </ul>
                        </div>
                        <div class="pricing-card">
                            <h4>🎬 Premium</h4>
                            <p class="price">£80-120</p>
                            <ul>
                                <li>3-4 minute song</li>
                                <li>3 verses + bridge</li>
                                <li>Multiple genre influences</li>
                                <li>MP3 + WAV + lyrics</li>
                                <li>Custom cover art</li>
                                <li>7-10 days delivery</li>
                                <li>3 revisions</li>
                            </ul>
                        </div>
                    </div>
                `
            },
            {
                heading: "Video & Art Add-ons (Gig Extras)",
                content: `
                    Fiverr shows 3 main packages, so offer video as extras:<br><br>
                    <strong>Full Music Video Add-on:</strong> £120-250<br>
                    Full music video (lyric or story style), vertical or horizontal<br><br>
                    <strong>Short Social Video:</strong> £40-60<br>
                    30-60 second social media version<br><br>
                    <strong>Extra Format Video:</strong> £20-30<br>
                    Vertical + landscape versions
                `
            }
        ],
        checklist: [
            "Set Basic package (£20-30)",
            "Set Standard package (£40-60) - MAKE THIS THE FOCUS",
            "Set Premium package (£80-120)",
            "Add 1 revision to Basic",
            "Add 2 revisions to Standard",
            "Add 3 revisions to Premium",
            "Create 3 Gig Extras for video",
            "Set realistic delivery times"
        ]
    },
    {
        id: 4,
        title: "Write Gig Description & FAQs",
        subtitle: "Converting browsers into buyers",
        timeEstimate: "2-3 hours",
        description: "A compelling description is your sales copy. Make it clear, benefit-focused, and build trust.",
        sections: [
            {
                heading: "Main Description",
                content: `
                    <div class="template-box">
                        <h4>✍️ Copy This Template (Customize to Your Style)</h4>
                        <p><strong>Do you want a song that actually mentions real names, real stories and inside jokes – not just some generic template?</strong></p>
                        <p>I create fully personalised songs using pro-level writing and modern AI tools. You tell me who it's for and what they mean to you, and I turn that into a track you can play at parties, weddings, birthdays or send as a surprise gift.</p>
                        <p><strong>🎵 What I Offer:</strong></p>
                        <ul>
                            <li>Custom-written lyrics with your story, names and memories</li>
                            <li>Range of styles: rap, UK grime, pop, R&B, house, acoustic & more</li>
                            <li>Professionally generated music and vocal performance</li>
                            <li>MP3 (and WAV on higher tiers) + full lyrics</li>
                        </ul>
                        <p><strong>🎨 Visual Options:</strong></p>
                        <ul>
                            <li>Simple or detailed cover artwork based on your photos, places and themes</li>
                            <li>Typography integrated into the art (like a real single cover)</li>
                            <li>Optional full video to match the song (lyric video or story-style)</li>
                        </ul>
                    </div>
                `
            },
            {
                heading: "FAQ Section (Add these Q&As)",
                content: `
                    <strong>Q: Can you keep it clean / family-friendly?</strong><br>
                    A: Yes – you can choose "family-friendly", "mild language", or "no limit" in my form. I stick to your choice.<br><br>
                    <strong>Q: Can you include specific names, places and stories?</strong><br>
                    A: Definitely. The form asks for key facts, funny stories, names and locations. The more detail you give, the more "this is really for me" reactions you'll get.<br><br>
                    <strong>Q: Do you also make the cover art and video?</strong><br>
                    A: Yes. Standard/Premium include cover art options. You can add a full music video as a Gig Extra – lyric-style, story scenes, or photo montage.<br><br>
                    <strong>Q: What tools do you use?</strong><br>
                    A: I use a mix of professional DAW work and AI tools (like Suno for the song and modern AI art/video tools for visuals), guided by your brief.<br><br>
                    <strong>Q: Do I own the song?</strong><br>
                    A: You have full rights to use it for personal and social media use. For commercial usage, message me and we'll set up a custom offer.
                `
            }
        ],
        checklist: [
            "Write compelling opening hook",
            "List all benefits (✅ format)",
            "Explain the process clearly",
            "Mention genre/style options",
            "Address FAQs comprehensively",
            "Proofread for typos",
            "Copy from this stage or write custom"
        ]
    },
    {
        id: 5,
        title: "Build Your Online Form",
        subtitle: "Capture all the details you need",
        timeEstimate: "2-3 hours",
        description: "Use Google Forms (free) or Typeform to collect buyer info. This keeps storytelling details in one place.",
        sections: [
            {
                heading: "Form Platform",
                content: "<strong>Fastest:</strong> Google Forms (free, easy, linkable)<br><br>Create a new form titled: <strong>Custom Song, Artwork & Video Brief – Mr.FLEN</strong>"
            },
            {
                heading: "Form Structure (7 Sections)",
                content: `
                    <div class="template-box">
                        <h4>Section 1: Buyer & Recipient Basics</h4>
                        <ul>
                            <li>Buyer's name</li>
                            <li>Recipient's name</li>
                            <li>Your relationship to recipient</li>
                            <li>Occasion (birthday, wedding, anniversary, etc.)</li>
                            <li>Occasion date</li>
                        </ul>
                        <br>
                        <h4>Section 2: Tone, Mood & Content Limits</h4>
                        <ul>
                            <li>Overall vibe (funny, emotional, celebratory, romantic, etc.)</li>
                            <li>Explicit content level (family-friendly, mild, no limit)</li>
                            <li>Emotional vs funny tone</li>
                            <li>Topics to avoid</li>
                        </ul>
                        <br>
                        <h4>Section 3: Musical Style</h4>
                        <ul>
                            <li>Primary genre (pop, rap, R&B, rock, etc.)</li>
                            <li>Secondary genre influences</li>
                            <li>Tempo preference</li>
                            <li>Vocal style</li>
                            <li>Reference songs/artists</li>
                        </ul>
                        <br>
                        <h4>Section 4: Story Details</h4>
                        <ul>
                            <li>How long you've known them</li>
                            <li>3-5 key facts about them</li>
                            <li>Funny stories or inside jokes (2-3)</li>
                            <li>Core message of the song</li>
                            <li>Other names to mention</li>
                        </ul>
                    </div>
                `
            },
            {
                heading: "Form Sections 5-7",
                content: `
                    <strong>Section 5: Technical & Delivery Preferences</strong><br>
                    • Preferred song length<br>
                    • Song title style preference<br>
                    • Any specific title wording<br>
                    • Additional notes<br><br>
                    <strong>Section 6: Artwork & Cover Design</strong><br>
                    • Artwork level desired<br>
                    • Where they'll use it<br>
                    • Reference photos/places/themes<br>
                    • Mood and style preferences<br>
                    • Color preferences<br>
                    • Text/title to include<br><br>
                    <strong>Section 7: Full Video (Ultra/Extra)</strong><br>
                    • Video type (lyric video, story, montage)<br>
                    • Platform/aspect ratio<br>
                    • Video length<br>
                    • Video feel/style<br>
                    • Key scenes/moments<br>
                    • On-screen text preferences
                `
            }
        ],
        checklist: [
            "Create Google Forms account",
            "Create new form",
            "Add Section 1: Basics (5 questions)",
            "Add Section 2: Tone/Mood (4 questions)",
            "Add Section 3: Musical Style (5 questions)",
            "Add Section 4: Story Details (5 questions)",
            "Add Section 5: Technical (4 questions)",
            "Add Section 6: Artwork (6 questions)",
            "Add Section 7: Video (6 questions)",
            "Mark key questions as REQUIRED",
            "Add confirmation message",
            "Test form yourself",
            "Copy shareable link"
        ]
    },
    {
        id: 6,
        title: "Connect Form to Fiverr Gig",
        subtitle: "Link requirements & confirm submission",
        timeEstimate: "30 minutes",
        description: "In your Fiverr gig Requirements section, add your form link and a confirmation checkbox.",
        sections: [
            {
                heading: "Set Requirements on Fiverr",
                content: `
                    When you edit your gig, go to <strong>Requirements</strong> (what do I need from the buyer?):
                    <div class="code-block">
To start your order, please:
1. Fill in my custom brief form here: [PASTE FORM LINK]
2. Confirm here that you've submitted it.

Without the form, I can't begin your song, artwork or video.
                    </div>
                `
            },
            {
                heading: "Add Confirmation Question",
                content: `
                    Add a required checkbox like:
                    <div class="code-block">
Question: "Have you submitted the form?"
Type: Yes/No (REQUIRED)
                    </div>
                    This keeps all the storytelling detail in one place (Google Forms), but Fiverr still has a record that you asked for info.
                `
            }
        ],
        checklist: [
            "Go to your gig editing page",
            "Find Requirements section",
            "Paste form link in requirements",
            "Add form submission instruction text",
            "Add confirmation checkbox (required)",
            "Save changes",
            "Test by placing an order yourself",
            "Verify form link works from buyer's end"
        ]
    },
    {
        id: 7,
        title: "Transform Form Responses Into Prompts",
        subtitle: "Building Suno v5, Art, and Video Prompts",
        timeEstimate: "1-2 hours per order",
        description: "For each new order, grab their form responses and build detailed AI prompts.",
        sections: [
            {
                heading: "Suno v5 Song Prompt Template",
                content: `
                    <div class="template-box">
                        <h4>Copy This Template & Fill In From Their Form</h4>
                        <div class="code-block">
[Title]: {{SONG_TITLE}}
[Artist]: Mr.FLEN
[Genre]: {{MAIN_GENRE}} {{SECONDARY_GENRES}}
[Mood]: {{OVERALL_VIBE}} for a {{OCCASION_DESCRIPTION}}
[Tempo]: {{TEMPO}}
[Vocal Style]: {{VOCAL_STYLE}}
[Instrumentation]: {{INSTRUMENT_NOTES}}

[Lyrics & Story Brief]:
Write a fully personalised song for {{RECIPIENT_NAME}} from {{BUYER_NAME}}
for {{OCCASION}}.

Key details to mention:
- {{KEY_FACT_1}}
- {{KEY_FACT_2}}
- {{FUNNY_STORY}}

Core message: {{MAIN_MESSAGE}}
Explicit content level: {{EXPLICIT_CHOICE}}
                        </div>
                    </div>
                `
            },
            {
                heading: "Artwork Prompt Template",
                content: `
                    <strong>Pull from their form:</strong><br>
                    • Their relationship + description of recipient<br>
                    • Photos/places/themes they mentioned<br>
                    • Mood, style, colour, text requests<br><br>
                    <strong>Example prompt for art generator:</strong><br>
                    "Create album cover art for a custom song called [TITLE]. The mood is [MOOD]. The recipient is a [DESCRIPTION]. Include [THEME/PLACES]. Colors: [COLORS]. Typography: [TEXT]. Style: [STYLE]."
                `
            },
            {
                heading: "Video Prompt (If They Ordered Video Extra)",
                content: `
                    <strong>Extract from form:</strong><br>
                    • Aspect ratio (square, vertical, horizontal)<br>
                    • Video feel (lyric video, story scenes, montage)<br>
                    • Key moments/scenes<br>
                    • On-screen text<br><br>
                    <strong>Example:</strong><br>
                    "Create a [ASPECT_RATIO] music video for [SONG_TITLE]. Style: [VIDEO_FEEL]. Include scenes showing [KEY_MOMENTS]. Text overlay: [ON_SCREEN_TEXT]. Mood: [MOOD]. Music provided."
                `
            }
        ],
        checklist: [
            "Check Fiverr message for form confirmation",
            "Open Google Forms responses",
            "Find their specific response",
            "Build Suno prompt from template",
            "Fill in all {{VARIABLES}} from their form",
            "Build artwork prompt",
            "If video ordered: build video prompt",
            "Paste Suno prompt into Suno v5",
            "Generate 3-5 takes",
            "Choose best version",
            "Export MP3 + lyrics file"
        ]
    },
    {
        id: 8,
        title: "Delivery Flow on Fiverr",
        subtitle: "Packaging & delivering your work",
        timeEstimate: "1-2 hours per delivery",
        description: "What to deliver for each package, and how to write your delivery message.",
        sections: [
            {
                heading: "Deliverables by Package",
                content: `
                    <div class="template-box">
                        <h4>📦 Basic Package Includes:</h4>
                        <ul>
                            <li>MP3 of song</li>
                            <li>Lyrics in .txt or .pdf</li>
                            <li>Short note describing what you included</li>
                        </ul>
                        <h4>📦 Standard Package Includes:</h4>
                        <ul>
                            <li>Everything in Basic, PLUS</li>
                            <li>Cover art image (PNG/JPEG, square 1:1)</li>
                        </ul>
                        <h4>📦 Premium Package Includes:</h4>
                        <ul>
                            <li>Everything in Standard, PLUS</li>
                            <li>Higher-quality WAV file</li>
                            <li>More polished cover art</li>
                        </ul>
                        <h4>📦 Video Extra Includes:</h4>
                        <ul>
                            <li>MP4 in agreed aspect ratio</li>
                            <li>If short + long ordered: separate files</li>
                        </ul>
                    </div>
                `
            },
            {
                heading: "Delivery Message Template",
                content: `
                    <div class="template-box">
                        <div class="code-block">
Here's your personalised song for {{RECIPIENT_NAME}} 🎵

I've attached:
• The song file
• The lyrics
• The cover art {{and video if ordered}}

I've included the details you mentioned, like:
– {{Key detail 1}}
– {{Key detail 2}}
– {{Funny story or inside joke}}

Let me know if you'd like to use your included revisions for any wording or small changes in tone.

Once you're happy, I'd really appreciate a quick review – it helps me keep making these for other people too.

Thanks! 🎸
                        </div>
                    </div>
                `
            }
        ],
        checklist: [
            "Export song as MP3 (good quality)",
            "Export song as WAV (if Premium)",
            "Export lyrics as .pdf or .txt",
            "Export cover art as PNG/JPEG (square)",
            "Export video as MP4 (if ordered)",
            "Rename files clearly",
            "Upload all files to Fiverr delivery",
            "Write personalized delivery message",
            "Mention specific details from their form",
            "Invite them to request revisions",
            "Ask for review",
            "Hit 'Deliver Order'"
        ]
    },
    {
        id: 9,
        title: "Polish, Portfolio & Reviews",
        subtitle: "Building social proof & showcasing your work",
        timeEstimate: "Ongoing",
        description: "After your first few orders, update your gig with samples and ask for reviews to build authority.",
        sections: [
            {
                heading: "Build Your Portfolio",
                content: `
                    <strong>After 2-3 orders:</strong><br>
                    <ul>
                        <li>Ask buyers (non-pushy) to leave a review</li>
                        <li>Request permission to use a 15-30s snippet (no private details)</li>
                        <li>Collect high-quality cover art examples</li>
                        <li>Create a 30-45s audio sample reel</li>
                    </ul>
                `
            },
            {
                heading: "Update Your Gig",
                content: `
                    <strong>Add to your gig:</strong><br>
                    <ul>
                        <li>Audio samples in the Gallery (30-45s highlights)</li>
                        <li>Mock-up covers in images so people visually understand art options</li>
                        <li>If you've done video: add a short teaser</li>
                        <li>Testimonial quotes from happy buyers</li>
                    </ul>
                `
            },
            {
                heading: "Review & Testimonials",
                content: `
                    <strong>Encourage reviews with:</strong><br>
                    "If you're happy with your song, a quick review helps me keep making these for other people. Thanks! 🙏"<br><br>
                    <strong>Target:</strong><br>
                    • 5-star reviews
                    • Specific testimonials mentioning what made it special
                    • Use reviews in updated gig description
                `
            }
        ],
        checklist: [
            "After delivery: politely ask for review",
            "Request permission to use snippet/cover",
            "Log song details (length, vibe, tools)",
            "Collect best audio clips (45s each)",
            "Edit teaser reel",
            "Screenshot best testimonials",
            "Create 2-3 mock-up cover designs",
            "Update gig gallery with samples",
            "Add testimonial quotes to description",
            "Highlight 5-star reviews"
        ]
    },
    {
        id: 10,
        title: "Daily Operating Routine",
        subtitle: "Your repeating weekly workflow",
        timeEstimate: "Varies by orders",
        description: "Once live, follow this routine daily to stay organized and deliver consistently.",
        sections: [
            {
                heading: "Daily Checklist",
                content: `
                    <div class="template-box">
                        <h4>Morning (15 mins)</h4>
                        <ul>
                            <li>Check Fiverr messages + new orders</li>
                            <li>Confirm buyers completed form submission</li>
                            <li>If not: send form link + pause order</li>
                            <li>Update delivery timeline if needed</li>
                        </ul>
                        <h4>Per Order (1-3 hours depending on package)</h4>
                        <ul>
                            <li>Open their form response</li>
                            <li>Build Suno prompt from template</li>
                            <li>Generate track in Suno v5 (3-5 takes)</li>
                            <li>Choose best version</li>
                            <li>Build artwork prompt</li>
                            <li>Generate cover art (refine if needed)</li>
                            <li>If video ordered: build + generate video</li>
                            <li>Export all files (MP3, WAV, JPG, MP4)</li>
                            <li>Deliver with personalized message</li>
                        </ul>
                        <h4>End of Day (10 mins)</h4>
                        <ul>
                            <li>Log what you did (song length, vibe, tools used)</li>
                            <li>Note any tricks that worked well</li>
                            <li>Check for revision requests</li>
                            <li>Respond to any Fiverr messages</li>
                        </ul>
                    </div>
                `
            },
            {
                heading: "Weekly Tasks",
                content: `
                    <ul>
                        <li><strong>Monday:</strong> Review all past week's orders + client feedback</li>
                        <li><strong>Wednesday:</strong> Update gig if needed (prices, description, samples)</li>
                        <li><strong>Friday:</strong> Check reviews + follow up on pending ones</li>
                        <li><strong>Anytime:</strong> Respond to inquiries within 24 hours (boosts ranking)</li>
                    </ul>
                `
            },
            {
                heading: "Monthly Check-In",
                content: `
                    <ul>
                        <li>Review earnings and profitability</li>
                        <li>Check competitor pricing</li>
                        <li>Collect customer feedback themes</li>
                        <li>Plan any price increases (small increments work best)</li>
                        <li>Update portfolio with new samples</li>
                    </ul>
                `
            }
        ],
        checklist: [
            "Create a daily checklist template",
            "Set phone reminders for morning check",
            "Create a Suno prompt template file",
            "Prepare your art prompt template",
            "Prepare your video prompt template",
            "Set up a simple log/spreadsheet for orders",
            "Test full workflow with a mock order",
            "Fine-tune timing estimates",
            "Schedule weekly review time",
            "Plan first price increase (after 10 reviews)"
        ]
    }
];

// Initialize the app
function initApp() {
    renderStages();
    renderSidebarNav();
    attachEventListeners();
    updateProgress();
    
    // Show first stage by default
    showStage(0);
}

// Render all stages
function renderStages() {
    const container = document.getElementById('stagesContainer');
    container.innerHTML = '';
    
    stagesData.forEach((stage, index) => {
        const stageEl = document.createElement('div');
        stageEl.className = 'stage';
        stageEl.id = `stage-${stage.id}`;
        stageEl.setAttribute('data-stage-id', stage.id);
        
        let checklistHTML = '';
        if (stage.checklist && stage.checklist.length > 0) {
            checklistHTML = `
                <div class="stage-content-box">
                    <h3>✓ Checklist</h3>
                    <div class="checklist">
                        ${stage.checklist.map((item, i) => `
                            <div class="checklist-item" data-item="${stage.id}-${i}">
                                <div class="checklist-checkbox">✓</div>
                                <div class="checklist-text">${item}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }
        
        let sectionsHTML = stage.sections.map(section => `
            <div class="stage-content-box">
                <h3>${section.heading}</h3>
                <p>${section.content}</p>
            </div>
        `).join('');
        
        stageEl.innerHTML = `
            <div class="stage-number">${stage.id}</div>
            <h2>${stage.title}</h2>
            <p class="stage-subtitle">⏱️ ${stage.subtitle} (${stage.timeEstimate})</p>
            <p>${stage.description}</p>
            ${sectionsHTML}
            ${checklistHTML}
            <div class="stage-actions">
                ${stage.id > 0 ? `<button class="btn-secondary" onclick="showStage(${stage.id - 1})">← Previous Stage</button>` : ''}
                ${stage.id < stagesData.length - 1 ? `<button class="btn-primary" onclick="showStage(${stage.id + 1})">Next Stage →</button>` : '<button class="btn-success" onclick="completeBlueprint()">🎉 Complete Blueprint</button>'}
            </div>
        `;
        
        container.appendChild(stageEl);
    });
}

// Render sidebar navigation
function renderSidebarNav() {
    const nav = document.getElementById('stageNav');
    nav.innerHTML = '';
    
    stagesData.forEach(stage => {
        const btn = document.createElement('button');
        btn.className = 'stage-btn';
        btn.textContent = `Stage ${stage.id}: ${stage.title.substring(0, 20)}...`;
        btn.onclick = () => showStage(stage.id);
        btn.setAttribute('data-stage', stage.id);
        
        // Check if completed
        const completed = localStorage.getItem(`stage-${stage.id}-completed`);
        if (completed === 'true') {
            btn.classList.add('completed');
        }
        
        nav.appendChild(btn);
    });
    
    document.getElementById('totalCount').textContent = stagesData.length;
}

// Show specific stage
function showStage(id) {
    // Hide all stages
    document.querySelectorAll('.stage').forEach(s => s.classList.remove('active'));
    
    // Show selected stage
    const stage = document.getElementById(`stage-${id}`);
    if (stage) {
        stage.classList.add('active');
    }
    
    // Update sidebar
    document.querySelectorAll('.stage-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`[data-stage="${id}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Attach event listeners
function attachEventListeners() {
    // Checklist items
    document.addEventListener('click', (e) => {
        if (e.target.closest('.checklist-item')) {
            const item = e.target.closest('.checklist-item');
            const itemKey = item.getAttribute('data-item');
            
            item.classList.toggle('checked');
            
            // Save to localStorage
            const isChecked = item.classList.contains('checked');
            localStorage.setItem(`checklist-${itemKey}`, isChecked);
            
            updateProgress();
        }
    });
}

// Update progress bar
function updateProgress() {
    let completed = 0;
    let total = 0;
    
    // Count checklists
    stagesData.forEach(stage => {
        if (stage.checklist) {
            stage.checklist.forEach((item, i) => {
                total++;
                const key = `checklist-${stage.id}-${i}`;
                if (localStorage.getItem(key) === 'true') {
                    completed++;
                }
            });
        }
    });
    
    const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = percentage + '% Complete';
    document.getElementById('completedCount').textContent = completed;
    
    // Restore checklist states
    document.querySelectorAll('.checklist-item').forEach(item => {
        const key = `checklist-${item.getAttribute('data-item')}`;
        if (localStorage.getItem(key) === 'true') {
            item.classList.add('checked');
        }
    });
}

// Complete blueprint
function completeBlueprint() {
    const message = `🎉 Congratulations!\n\nYou've completed the Fiverr Music Gig Blueprint!\n\nYour next step:\n1. Go to Fiverr.com\n2. Create your seller account\n3. Follow Stage 1 to get live\n4. Start receiving orders!\n\nGood luck! 🚀`;
    
    alert(message);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initApp);
