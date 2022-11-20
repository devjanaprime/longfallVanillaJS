const posts =  [
    {
        id: 15,
        type: 'video',
        title: 'Underground in a City of Skyscrapers (music video)',
        date: '2022-09-05',
        youtube_id: 'GiyQ1iEU8z8',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
        links: [ { text: `Longfall youtube`, url: `https://www.youtube.com/channel/UCYqnn6MIU-vEqDp9blQ4Abw` } ]
    }, 
    {
        id: 14,
        type: 'image',
        title: 'Live @ the Treasury: 4-15-2022 (audio)',
        date: '2022-04-15',
        image: 'images/liveAtTreasury_4-15-2022.jpg',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
        links: [ 
            { text: `Longfall on Soundcloud`, url: `http://google.com` }, 
            { text: "The Treasury St Paul", url: 'https://thetreasurystp.com/' }, 
            { text: 'A Light In The Ocean on Facebook', url: 'https://www.facebook.com/thelightintheocean/' }, 
            { text: "White Line Darko", url: 'https://whitelinedarko.com/' } ]
    }, 
    {
        id: 13,
        type: 'music',
        date: '2020-01-02',
        title: 'What We Found EP',
        appleMusicUrl: 'https://embed.music.apple.com/us/album/what-we-found/1492961027',
        spotifyUrl: 'https://open.spotify.com/embed/album/2xiTZMXThFDUYokKsbZH58?utm_source=generator',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elfasd awer fawer we` ],
        links: [ { text: `google`, url: `http://google.com` } ]
    }, 
    {
        id: 12,
        type: 'video',
        title: 'Underground in a City of Skyscrapers (music video)',
        date: '2022-09-05',
        youtube_id: 'GiyQ1iEU8z8',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
        links: [ { text: `Longfall youtube`, url: `https://www.youtube.com/channel/UCYqnn6MIU-vEqDp9blQ4Abw` } ]
    }, 
    {
        id: 11,
        type: 'image',
        title: 'Live @ the Treasury: 4-15-2022 (audio)',
        date: '2022-04-15',
        image: 'images/liveAtTreasury_4-15-2022.jpg',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
        links: [ 
            { text: `Longfall on Soundcloud`, url: `http://google.com` }, 
            { text: "The Treasury St Paul", url: 'https://thetreasurystp.com/' }, 
            { text: 'A Light In The Ocean on Facebook', url: 'https://www.facebook.com/thelightintheocean/' }, 
            { text: "White Line Darko", url: 'https://whitelinedarko.com/' } ]
    }, 
    {
        id: 10,
        type: 'music',
        date: '2020-01-02',
        title: 'What We Found EP',
        appleMusicUrl: 'https://embed.music.apple.com/us/album/what-we-found/1492961027',
        spotifyUrl: 'https://open.spotify.com/embed/album/2xiTZMXThFDUYokKsbZH58?utm_source=generator',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elfasd awer fawer we` ],
        links: [ { text: `google`, url: `http://google.com` } ]
    }, 
    {
        id: 9,
        type: 'video',
        title: 'Underground in a City of Skyscrapers (music video)',
        date: '2022-09-05',
        youtube_id: 'GiyQ1iEU8z8',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
        links: [ { text: `Longfall youtube`, url: `https://www.youtube.com/channel/UCYqnn6MIU-vEqDp9blQ4Abw` } ]
    }, 
    {
        id: 8,
        type: 'image',
        title: 'Live @ the Treasury: 4-15-2022 (audio)',
        date: '2022-04-15',
        image: 'images/liveAtTreasury_4-15-2022.jpg',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
        links: [ 
            { text: `Longfall on Soundcloud`, url: `http://google.com` }, 
            { text: "The Treasury St Paul", url: 'https://thetreasurystp.com/' }, 
            { text: 'A Light In The Ocean on Facebook', url: 'https://www.facebook.com/thelightintheocean/' }, 
            { text: "White Line Darko", url: 'https://whitelinedarko.com/' } ]
    }, 
    {
        id: 7,
        type: 'music',
        date: '2020-01-02',
        title: 'What We Found EP',
        appleMusicUrl: 'https://embed.music.apple.com/us/album/what-we-found/1492961027',
        spotifyUrl: 'https://open.spotify.com/embed/album/2xiTZMXThFDUYokKsbZH58?utm_source=generator',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elfasd awer fawer we` ],
        links: [ { text: `google`, url: `http://google.com` } ]
    }, 
    {
        id: 6,
        type: 'video',
        title: 'Underground in a City of Skyscrapers (music video)',
        date: '2022-09-05',
        youtube_id: 'GiyQ1iEU8z8',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
        links: [ { text: `Longfall youtube`, url: `https://www.youtube.com/channel/UCYqnn6MIU-vEqDp9blQ4Abw` } ]
    }, 
    {
        id: 5,
        type: 'image',
        title: 'Live @ the Treasury: 4-15-2022 (audio)',
        date: '2022-04-15',
        image: 'images/liveAtTreasury_4-15-2022.jpg',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
        links: [ 
            { text: `Longfall on Soundcloud`, url: `http://google.com` }, 
            { text: "The Treasury St Paul", url: 'https://thetreasurystp.com/' }, 
            { text: 'A Light In The Ocean on Facebook', url: 'https://www.facebook.com/thelightintheocean/' }, 
            { text: "White Line Darko", url: 'https://whitelinedarko.com/' } ]
    }, 
    {
        id: 4,
        type: 'music',
        date: '2020-01-02',
        title: 'What We Found EP',
        appleMusicUrl: 'https://embed.music.apple.com/us/album/what-we-found/1492961027',
        spotifyUrl: 'https://open.spotify.com/embed/album/2xiTZMXThFDUYokKsbZH58?utm_source=generator',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elfasd awer fawer we` ],
        links: [ { text: `google`, url: `http://google.com` } ]
    }, 
    {
        id: 3,
        type: 'video',
        title: 'Underground in a City of Skyscrapers (music video)',
        date: '2022-09-05',
        youtube_id: 'GiyQ1iEU8z8',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
        links: [ { text: `Longfall youtube`, url: `https://www.youtube.com/channel/UCYqnn6MIU-vEqDp9blQ4Abw` } ]
    }, 
    {
        id: 2,
        type: 'image',
        title: 'Live @ the Treasury: 4-15-2022 (audio)',
        date: '2022-04-15',
        image: 'images/liveAtTreasury_4-15-2022.jpg',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.` ],
        links: [ 
            { text: `Longfall on Soundcloud`, url: `http://google.com` }, 
            { text: "The Treasury St Paul", url: 'https://thetreasurystp.com/' }, 
            { text: 'A Light In The Ocean on Facebook', url: 'https://www.facebook.com/thelightintheocean/' }, 
            { text: "White Line Darko", url: 'https://whitelinedarko.com/' } ]
    }, 
    {
        id: 1,
        type: 'music',
        date: '2020-01-02',
        title: 'What We Found EP',
        appleMusicUrl: 'https://embed.music.apple.com/us/album/what-we-found/1492961027',
        spotifyUrl: 'https://open.spotify.com/embed/album/2xiTZMXThFDUYokKsbZH58?utm_source=generator',
        text: [ `Lorem ipsum dolor sit amet, consectetur adipiscing elfasd awer fawer we` ],
        links: [ { text: `google`, url: `http://google.com` } ]
    }, 
];