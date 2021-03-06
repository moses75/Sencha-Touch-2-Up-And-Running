var data = [{ 
    title: 'Bare Bones App',
    url: 'Chapter_01_Bare_Bones',
    chapter: '1. Getting Started',
    chapterNumber: 1,
    order: 1
}, { 
    title: 'Sencha Cmd App',
    url: 'Chapter_01_Sencha_Cmd',
    chapter: '1. Getting Started',
    chapterNumber: 1,
    order: 2
}, { 
    title: 'Foundation Classes',
    url: 'Chapter_02_Class_System',
    chapter: '2. Class System',
    chapterNumber: 2,
    order: 1
}, { 
    title: 'Views Catalogue',
    url: 'Chapter_03_Views',
    chapter: '3. Views',
    chapterNumber: 3,
    order: 1
}, { 
    title: 'Layouts and Templates',
    url: 'Chapter_03_Layouts',
    chapter: '3. Views',
    chapterNumber: 3,
    order: 2
}, { 
    title: 'Data Browser App',
    url: 'Chapter_04_Data',
    chapter: '4. Data',
    chapterNumber: 4,
    order: 1
}, { 
    title: 'Server Side HTML',
    url: 'Chapter_04_Data/Server/index.php',
    chapter: '4. Data',
    chapterNumber: 4,
    order: 2
}, { 
    title: 'Server Side JSON',
    url: 'Chapter_04_Data/Server/index.php?format=json',
    chapter: '4. Data',
    chapterNumber: 4,
    order: 3
}, { 
    title: 'Server Side XML',
    url: 'Chapter_04_Data/Server/index.php?format=xml',
    chapter: '4. Data',
    chapterNumber: 4,
    order: 4
}, { 
    title: 'Local Storage',
    url: 'Chapter_04_LocalStorage',
    chapter: '4. Data',
    chapterNumber: 4,
    order: 5
}, { 
    title: 'Data Views',
    url: 'Chapter_04_DataViews',
    chapter: '4. Data',
    chapterNumber: 4,
    order: 6
}, { 
    title: 'Forms',
    url: 'Chapter_05_Forms',
    chapter: '5. Forms',
    chapterNumber: 5,
    order: 1
}, { 
    title: 'Controllers',
    url: 'Chapter_06_Controllers',
    chapter: '6. Controllers',
    chapterNumber: 6,
    order: 1
}, { 
    title: 'Sencha Default',
    url: 'Chapter_07_Styles/default_sencha.html',
    chapter: '7. Styling Applications',
    chapterNumber: 7,
    order: 1
}, { 
    title: 'iOS Style',
    url: 'Chapter_07_Styles/default_apple.html',
    chapter: '7. Styling Applications',
    chapterNumber: 7,
    order: 2
}, { 
    title: 'Android Style',
    url: 'Chapter_07_Styles/default_android.html',
    chapter: '7. Styling Applications',
    chapterNumber: 7,
    order: 3
}, { 
    title: 'BlackBerry 6 Style',
    url: 'Chapter_07_Styles/default_bb6.html',
    chapter: '7. Styling Applications',
    chapterNumber: 7,
    order: 4
}, { 
    title: 'Custom Styles with SASS',
    url: 'Chapter_07_Styles',
    chapter: '7. Styling Applications',
    chapterNumber: 7,
    order: 5
}, { 
    title: 'To Do App',
    url: 'Chapter_08_ToDoApp',
    chapter: '8. Testing and Debugging',
    chapterNumber: 8,
    order: 1
}, { 
    title: 'Jasmine Tests',
    url: 'Chapter_08_Jasmine/SpecRunner.html',
    chapter: '8. Testing and Debugging',
    chapterNumber: 8,
    order: 2
}, { 
    title: 'Siesta Tests',
    url: 'Chapter_08_Siesta',
    chapter: '8. Testing and Debugging',
    chapterNumber: 8,
    order: 3
}, { 
    title: 'JSDuck output',
    url: 'Chapter_08_JSDuck/#!/api/AkoLib.view.SplitView',
    chapter: '8. Testing and Debugging',
    chapterNumber: 8,
    order: 4
}, { 
    title: 'Architect',
    url: 'Chapter_09_Architect/ToDoList/app.html',
    chapter: '9. Sencha Architect',
    chapterNumber: 9,
    order: 1
}, { 
    title: 'Device Profiles',
    url: 'Chapter_10_Profiles',
    chapter: '10. Deployment in Devices',
    chapterNumber: 10,
    order: 1
}, { 
    title: 'Device APIs Demo',
    url: 'Chapter_10_Device',
    chapter: '10. Deployment in Devices',
    chapterNumber: 10,
    order: 2
}, { 
    title: 'Universal Application',
    url: 'Chapter_10_Universal_App',
    chapter: '10. Deployment in Devices',
    chapterNumber: 10,
    order: 3
}];

var store = Ext.create('Ext.data.Store', {
    data: data,
    grouper: {
        groupFn: function(record) {
            return record.get('chapter');
        },
        sortProperty: 'chapterNumber'
    },
    sorters: [{
        property: 'chapterNumber',
        direction: 'ASC'
    }, {
        property: 'order',
        direction: 'ASC'
    }]
});

Ext.application({
    name: 'SenchaTouch2UpAndRunning',
    icon: {
        57: 'img/Icon.png',
        72: 'img/Icon-iPad.png',
        114: 'img/Icon@2x.png',     // Retina iPhone
        144: 'img/Icon-iPad@2x.png' // Retina iPad
    },

    // http://www.sencha.com/forum/showthread.php?199382-phoneStartupScreen-doesn-t-work
    startupImage: {
        '320x460': 'img/Default.png',
        '640x920': 'img/Default@2x.png', // Retina iPhone
        '640x1096': 'img/Default-568@2x.png', // Retina 4-inch iPhone
        '768x1004': 'img/Default-Portrait.png',
        '748x1024': 'img/Default-Landscape.png',
        '1536x2008': 'img/Default-Portrait@2x.png', // Retina iPad, Portrait
        '1496x2048': 'img/Default-Landscape@2x.png' // Retina iPad, Landscape
    },

    launch: function () {
        Ext.Viewport.add({
            xtype: 'list',
            pinHeaders: false,
            fullscreen: true,
            itemTpl: '{title}',
            store: store,
            grouped: true,
            indexBar: {
                letters: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
            },
            items: [{
                xtype: 'titlebar',
                docked: 'top',
                title: 'Sencha Touch 2 Book Code'
            }, {
                xtype: 'titlebar',
                docked: 'bottom',
                title: 'by Adrian Kosmaczewski'
            }],
            ui: 'round',
            listeners: {
                itemtap: function(list, index, target, record, e, eOpts) {
                    location.href = record.get('url');
                }
            }
        });
    }
});

