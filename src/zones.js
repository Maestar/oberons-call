const ZONES_MASTER = {
    titleScreen: {
        id: 0,
        zoneImage: 'images/titleScreen-img.png',
        zoneButtons: [
            {
                id: 0,
                text: 'New Game',
                function: 'playIntro',
                zoneConnection: 'crystalRoom'
            },
            {
                id: 1,
                text: 'Continue',
                function: 'loadSave',
                zoneConnection: ''
            }
        ]
    },
    crystalRoom: {
        id: 1,
        zoneImage: 'images/banner-oberon.png',
        zoneButtons: [
            {
                id: 0,
                text: 'Call Out',
                function: 'testFunc',
                zoneConnection: ''
            }
        ]
    }
}

export default ZONES_MASTER;