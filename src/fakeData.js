const bikes=[
    {
        id: 1,
        name: "Kawasaki Ninja H2/R",
        intro: {
            
            ClaimedPeakPower:	"322 bhp",
            EstimatedDryWeight:	"193 kg",
            PowerPerWeight:	"1.585 bhp/kg"
        },
        description: "The king is dead… long live the king. Last time out the astonishing, £49,000, supercharged H2/R came out top and, although the competition is closing in, it remains there today – just. Kawasaki set out to produce the world’s most powerful production machine and it achieved just that. In full bore, track only ‘R’ trim, the Kawasaki is claimed to produce a whopping 306bhp, rising to 322bhp with ram air effect. That, combined with a lightweight, tubular steel trellis chassis (although that 193 dry figure is a guesstimate based on its published 216kg wet figure) is what keeps it on top. If you’re going to quibble about its legality, the road legal H2 Carbon (£28,500) produces 240bhp with a heftier 215kg estimated dry weight although that would leave it outside the top 10 here…",
        price: 20100,

        img:"https://i.ibb.co/HzhV4vF/bike-1.jpg"
    },
    {
        id: 2,
        name: "Ducati Superleggera V4",
        intro: {
            
            ClaimedPeakPower:	"234 bhp",
            EstimatedDryWeight:	"152.2 kg",
            PowerPerWeight:	"1.537 bhp/kg"
        },
        description: "Just when you thought Ducatis couldn’t get any more exotic and potent than the astonishing Panigale V4 R (see above), the Bolognese firm unveiled its most exotic and potent machine ever for 2020. ‘Superleggera’ is the name applied to Ducati’s limited edition, ‘superlight’ versions of its flagship superbike and, with a full 234bhp (with race exhaust) and just a 152.2kg dry weight due to its lashings of carbon fibre, it’s certainly their most powerful and lightest yet. And, with a price tag of €100,000 (£84,000) it’s also their most expensive. Why don’t they race it in WSB? They can’t. The class has a price ceiling of €40,000 (£35,000), which also helps explain the price of the V4 R…",
        price: 18100,

        img:"https://i.ibb.co/mTL9wy6/bike-2.jpg"
    },
    {
        id: 3,
        name: "Ducati Panigale V4 R",
        intro: {
            
            ClaimedPeakPower:	"221 bhp",
            EstimatedDryWeight:	"172 kg",
            PowerPerWeight:	"1.285 bhp/kg"
        },
        description: "The WSB-homologation special (but road legal) version of Ducati’s astonishing, all-new V4 superbike arrived last year and immediately blitzed all-comers, winning BSB first time out with Scott Redding. (Arguably, it should have done the same in WSB, too, but that’s another story). In short, it has it all: monster power (up from the S’s 214) from the MotoGP-inspired V4, an ultra-lightweight monocoque chassis, the very best of cycle parts, world pioneering ‘aero’ aids, lashings of exotic Italian styling and poster appeal and the £34,995 price to match.",
        price: 23150,

        img:"https://i.ibb.co/J39B6wJ/bike-3.jpg"
    },
    {
        id: 4,
        name: "Aprilia RSV4 1100 Factory",
        intro: {
            
            ClaimedPeakPower:	"217 bhp",
            EstimatedDryWeight:	"177 kg",
            PowerPerWeight:	"1.226 bhp/kg"
        },
        description: "It’s been a while since Aprilia’s original, revolutionary, power-packed, compact and electronics-laden first RSV4 1000 was competitive at world superbikes level (it did originally come out in 2010 after all) which is why, in 2019, they uprated it into 1100cc form using the enlarged engine from the 1100 Tuono. And the result, although not WSB-compliant, is simply phenomenal – especially in top spec ‘Factory’ form. The engine is powerful and grunty; its tiny chassis sweet-handling and its sophisticated electronics and classy cycle parts up with the very best. Those proportions mean it won’t suit larger riders, but if it fits, there are few finer road sportsters.",
        price: 19100,

        img:"https://i.ibb.co/Hzvpp5x/bike-4.jpg"
    },
    {
        id: 5,
        name: "2020 Honda Fireblade SP",
        intro: {
            
            ClaimedPeakPower:	"215 bhp",
            EstimatedDryWeight:	"180 kg",
            PowerPerWeight:	"1.194 bhp/kg"
        },
        description: "Tricky to be sure about this one, as no official dry weight figures have been released, so we’ve had to use a guesstimate. Based on a claimed kerb weight of 201.3kg and a 16litre-tank of fuel weighing around 12kg, the dry SP will be at most 180kg. That, coupled with its 215bhp output, puts it in S1000RR MSport territory, which is probably about right seeing as this is the most powerful, extreme and track-orientated Fireblade ever and one that’s been built specifically to win WSB. But it may be better still.",
        price: 20100,

        img:"https://i.ibb.co/nz2J60R/bike-5.jpg"
    },
    {
        id: 6,
        name: "BMW S1000RR M Sport",
        intro: {
            
            ClaimedPeakPower:	"207 bhp",
            EstimatedDryWeight:	"173.3 kg",
            PowerPerWeight:	"1.194 bhp/kg"
        },
        description: "A bike that just goes to show what a difference a few years make. The ‘old’ S1000RR was already a monster performer, famed for its 199bhp and placed 10th on our old ‘fastest’ list, yet wouldn’t even feature here. But its all-new replacement is not only more powerful, more sophisticated, more nimble and yet, also, more rideable, it’s also downright quicker, too. In M Sport trim (including loud pipe and carbon wheels, the relevant numbers are 207bhp and 173.3kg, respectively, but that also adds up to a starting price of £19,995.",
        price: 20100,

        img:"https://i.ibb.co/1vWH3ny/bike-6.jpg"
    },
    {
        id: 7,
        name: "Suzuki GSX-R1000R",
        intro: {
            
            ClaimedPeakPower:	"199.2 bhp",
            EstimatedDryWeight:	"171.1 kg",
            PowerPerWeight:	"1.164 bhp/kg"
        },
        description: "Oddly, just about the only survivor from our previous ‘Top 10 Fastest’ – although that’s mostly due to the fact it alone has barely changed, we wanted to include another Japanese superbike for comparison with the new Fireblade and it’s difficult to be sure about the ZX-10R and R1M as their dry weight figures aren’t available. In truth, the Suzuki sports flagship complete with variable valve timing has actually moved up the rankings slightly but that’s more down to narrowing our selection to bikes currently available, ruling out previous oddballs like the old PGM V8 and MTT Y2K turbine bike.",
        price: 20100,

        img:"https://i.ibb.co/mJfj6bz/bike-7.jpg"
    },
    {
        id: 8,
        name: " 2020 MV Agusta Brutale 1000 Serie Oro",
        intro: {
            
            ClaimedPeakPower:	"212 bhp",
            EstimatedDryWeight:	"184 kg",
            PowerPerWeight:	"1.152 bhp/kg"
        },
        description: "Yes, another from MV, and one to perhaps take more seriously. The Italian firm’s Brutale 1000 RR has been heavily reworked for 2020 and this initial, limited edition ‘Serie Oro’ version, complete with four extra bhp (thanks to a different exhaust/ECU) and reduced weight (due to its carbon fibre wheels) is claimed by MV themselves to be ‘The fastest naked bike in the world’. Its price is an equally mind-bending £38,000.",
        price: 20100,

        img:"https://i.ibb.co/WtdDF4N/bike-8.jpg"
    },
    {
        id: 9,
        name: "2020 MV Agusta Rush",
        intro: {
            
            ClaimedPeakPower:	"208 bhp",
            EstimatedDryWeight:	"186 kg",
            PowerPerWeight:	"1.118 bhp/kg"
        },
        description: "Another new bike delayed by all this Covid-19 stuff but it promises to be worth the wait. MV announced this week that the 300 limited edition, carbon-bedecked Rush, the concept bike-styled roadster based on the Brutale 1000, while now start being delivered in June and it’s so wacky and potent it had to be included here. MV claim 205bhp from its 998cc four (208 with race pipe), a dry weight of 186kg, a top speed ‘over 300kph’ (if you can hang on) to go with its oddball looks, twin pipes and £29,680 price.",
        price: 20100,

        img:"https://i.ibb.co/cxL8nnX/bike-9.jpg"
    },
    {
        id: 10,
        name: "Norton V4 RR",
        intro: {
            
            ClaimedPeakPower:	"200 bhp",
            EstimatedDryWeight:	"179 kg",
            PowerPerWeight:	"1.117 bhp/kg"
        },
        description: "There’s no denying the Norton V4, ‘launched’ 2017, is surrounded by more than its fair share of controversy but the news this week that new owners TVS are looking for production staff, the fact that it is still available to order and the performance it promises demand that it’s included here. The relevant numbers are: a claimed 200bhp from its home-brewed (but Aprilia-inspired) 1200cc, 72-degree V4, a dry weight of 179kg from its aluminium tube frame and cycle parts including Ohlins suspension and Brembo brakes and more.. We’re just not sure when you might be able to get one…",
        price: 20100,

        img:"https://i.ibb.co/34CzR3V/bike-10.jpg"
    },
    {
        id: 11,
        name: "Yamaha r15",
        intro: {
            
            ClaimedPeakPower:	"322 bhp",
            EstimatedDryWeight:	"183 kg",
            PowerPerWeight:	"1.585 bhp/kg"
        },
        description: "The king is dead… long live the king. Last time out the astonishing, £49,000, supercharged H2/R came out top and, although the competition is closing in, it remains there today – just. Kawasaki set out to produce the world’s most powerful production machine and it achieved just that. In full bore, track only ‘R’ trim, the Kawasaki is claimed to produce a whopping 306bhp, rising to 322bhp with ram air effect. That, combined with a lightweight, tubular steel trellis chassis (although that 193 dry figure is a guesstimate based on its published 216kg wet figure) is what keeps it on top. If you’re going to quibble about its legality, the road legal H2 Carbon (£28,500) produces 240bhp with a heftier 215kg estimated dry weight although that would leave it outside the top 10 here…",
        price: 20100,

        img:"https://i.ibb.co/WybpBgM/bike-11.jpg"
    },
    {
        id: 12,
        name: "Honda XXL",
        intro: {
            
            ClaimedPeakPower:	"180 bhp",
            EstimatedDryWeight:	"118 kg",
            PowerPerWeight:	"1.525 bhp/kg"
        },
        description: "There’s no denying the Norton V4, ‘launched’ 2017, is surrounded by more than its fair share of controversy but the news this week that new owners TVS are looking for production staff, the fact that it is still available to order and the performance it promises demand that it’s included here. The relevant numbers are: a claimed 200bhp from its home-brewed (but Aprilia-inspired) 1200cc, 72-degree V4, a dry weight of 179kg from its aluminium tube frame and cycle parts including Ohlins suspension and Brembo brakes and more.. We’re just not sure when you might be able to get one…",
        price: 20100,

        img:"https://i.ibb.co/sszxhfP/bike-12.jpg"
    }
]