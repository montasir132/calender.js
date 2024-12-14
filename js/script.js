/*================= js ==================*/ 




/*================= jq ==================*/
$(document).ready(function(){
    $('#calendar').evoCalendar({
        theme: "Midnight Blue",
        calendarEvents: [
            {
              id: 'New-Year', // Event's ID (required)
              name: "New Year", // Event name (required)
              date: "January/1/2024", // Event date (required)
              description:"The heart touching greetings witt make feet anyone very special. Wish your near and dear one with our special greeti ngs. " ,
              type: "holiday", // Event type (required)
              everyYear: true // Same event every year (optional)
            },

            {
                id: 'sem', // Event's ID (required)
                name: "Shab-e-Meraj", // Event name (required)
                date: "January/28/2025", // Event date (required)
                description:"The Israʾ and Miʿraj (Arabic: الإسراء والمعراج, al-’Isrā’ wal-Miʿrāj) are the two parts of a Night Journey that Muslims believe the Islamic prophet Muhammad (AD 570–632) took during a single night around the year AD 621 (1 BH – 0 BH). Within Islam, the majority of Islamic scholars claim that the journey was both a physical and spiritual one.[1][2] Islamic tradition believes a brief mention of the story is found in the 17th surah (chapter) of the Quran, called al-Isra',[3] while details of the story are found in the hadith (the later collections of the reports, teachings, deeds and sayings of Muhammad). " ,
                type: "holiday", // Event type (required)
                everyYear: false // Same event every year (optional)
              },
              {
                id: 'SEb', // Event's ID (required)
                name: "Shab-e-Barat", // Event name (required)
                date: "February/15/2025", // Event date (required)
                description:"Shab-e-Barat (lit. 'Barat Night'), Cheragh-e-Barat, Berat Kandili, or Nisfu Syaaban (Southeastern Asian Muslims) is a Mid-Sha'ban related cultural celebration celebrated in many South Asian, Central Asian, South East Asian and Middle Eastern Muslim countries, on the 15th night (the night on 15th only) of the month of Sha'ban, the eighth month of the Islamic calendar.[1] " ,
                type: "holiday", // Event type (required)
                everyYear: false // Same event every year (optional)
              },
              {
                id: 'Language Day', // Event's ID (required)
                name: "International Mother Language Day", // Event name (required)
                date: "February/21/1952", // Event date (required)
                description:"International Mother Language Day is a worldwide annual observance held on 21 February to promote awareness of linguistic and cultural diversity and to promote multilingualism. First announced by UNESCO on 17 November 1999,[1] it was formally recognized by the United Nations General Assembly with the adoption of UN resolution 56/262[2] in 2002." ,
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
              },
              {
                id: 'Workers Day', // Event's ID (required)
                name: "International Worker's Day", // Event name (required)
                date: "	May/1/2025", // Event date (required)
                description:"International Workers' Day, also known as Labour Day in some countries[1] and often referred to as May Day,[2][3] is a celebration of labourers and the working classes that is promoted by the international labour movement and occurs every year on 1 May,[4][5] or the first Monday in May. " ,
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
              },
              {
                id: 'independence', // Event's ID (required)
                name: "Independence Day", // Event name (required)
                date: "March/26/1971", // Event date (required)
                description:"In the 1970 Pakistani general election, under the military government of President Yahya Khan, the largest political party Awami League, led by Sheikh Mujibur Rahman, won a clear majority in East Pakistan national seats as well as provincial assembly. Zulfikar Ali Bhutto conspired with Yahya Khan and changed their position, refusing to hand over power to Sheikh Mujib.[1] Negotiations began between the two sides, however the ruling West Pakistani leadership did not trust Sheikh Mujib, due to instances such as the Agartala conspiracy case. When it became evident that the promises made by the West Pakistan government were not going to be kept, many East Pakistani Bangla-speaking Muslims and Hindus began a spirited struggle for independence. On 7 March 1971, Sheikh Mujib gave his famous speech at the Ramna Racecourse, in which he called for a non-cooperation movement.[2] " ,
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
              },
            {
                id: 'intellectuals Day', // Event's ID (required)
                name: "Martyred Intellectuals Day", // Event name (required)
                date: "December/14/1971", // Event date (required)
                description:"Martyred Intellectuals Day (Bengali: শহীদ বুদ্ধিজীবী দিবস, romanized: Śôhīd Buddhijībī Dibôs) is observed on 14 December in Bangladesh to commemorate the large number of Bangladeshi intellectuals killed by Pakistani forces and their collaborators during the Bangladesh Liberation War, particularly on 25 March and 14 December 1971.[1][2] The killings were undertaken with the goal of annihilating the intellectual class of what was then East Pakistan. On 16 December, Bangladesh became independent through the surrender of Pakistani forces.[3]" ,
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
            },
            {
                id: 'victory', // Event's ID (required)
                name: "Victory Day", // Event name (required)
                date: "December/16/1971", // Event date (required)
                description:"Victory Day (Bengali: বিজয় দিবস Bijôy Dibôś) is a national holiday in Bangladesh celebrated on 16 December to commemorate the defeat of the Pakistan Armed Forces in the Bangladesh Liberation War in 1971 and the Independence of Bangladesh. It commemorates the Pakistani Instrument of Surrender, wherein the commander of the Pakistani Forces, General A. A. K. Niazi, surrendered to the Mukti Bahini and their Indian allies, ending the nine-month[1] Bangladesh Liberation War and 1971 Bangladesh genocide and marking the official secession of East Pakistan to become the new state of Bangladesh." ,
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
            },
            {
                id: 'christmas', // Event's ID (required)
                name: "Christmas Day", // Event name (required)
                date: "December/25/2024", // Event date (required)
                description:"Christmas is an annual festival commemorating the birth of Jesus Christ, observed primarily on December 25[a] as a religious and cultural celebration among billions of people around the world. A liturgical feast central to Christianity, preparation for Christmas begins on the First Sunday of Advent and it is followed by Christmastide, which historically in the West lasts twelve days and culminates on Twelfth Night. Christmas Day is a public holiday in many countries, is celebrated religiously by a majority of Christians, as well as culturally by many non-Christians, and forms an integral part of the holiday season surrounding it." ,
                type: "holiday", // Event type (required)
                everyYear: true // Same event every year (optional)
            },
            
            {
                name: "Vacation Leave",
                badge: "March/26/2025", // Event badge (optional)
                date: ["March/26/2025", "April/3/2025"], // Date range
                description: "Vacation leave for 9 days.", // Event description (optional)
                type: "event",
                color: "#63d867" // Event custom color (optional)
            }
          ]
    })
    
});
