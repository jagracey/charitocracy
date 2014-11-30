// target elements with the "draggable" class
    interact('.draggable')
        .draggable({
            // allow dragging of multple elements at the same time
            max: Infinity,

            // call this function on every dragmove event
            onmove: function (event) {
                var target = event.target,
                    // keep the dragged position in the data-x/data-y attributes
                    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
                
                
                // translate the element
                target.style.webkitTransform =
                target.style.transform =
                    'translate(' + x + 'px, ' + y + 'px)';

                // update the posiion attributes
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            },
            // call this function on every dragend event
            onend: function (event) {
                var textEl = event.target.querySelector('p');
                
                textEl && (textEl.textContent =
                    'moved a distance of '
                    + (Math.sqrt(event.dx * event.dx +
                                 event.dy * event.dy)|0) + 'px');
            }
        })
        // enable inertial throwing
        .inertia(true)
        // keep the element within the area of it's parent
        .restrict({
            //drag: "parent",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        });

        // allow more than one interaction at a time
        interact.maxInteractions(Infinity);
    
    /* The dragging code for '.draggable' from the demo above
     * applies to this demo as well so it doesn't have to be repeated. */

    // enable draggables to be dropped into this
    interact('.dropzone').dropzone({
        // only accept elements matching this CSS selector
        accept: '#dropItem',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.66,

        // listen for drop related events:

        ondropactivate: function (event) {
            // add active dropzone feedback
            event.target.classList.add('drop-active');
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;

            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target');
            draggableElement.classList.add('can-drop');
            //draggableElement.textContent = 'Dragged in';
        },
        ondragleave: function (event) {
            // remove the drop feedback style
            event.target.classList.remove('drop-target');
            event.relatedTarget.classList.remove('can-drop');
            //event.relatedTarget.textContent = 'Dragged out';
        },
        ondrop: function (event) {
            //event.relatedTarget.textContent = 'Dropped';
            event.relatedTarget.classList.add('dropped');
            var name = event.target.children[0].innerText;
            var pic = event.target.children[1].src;
            $('.bs-example-modal-lg').modal('hide')
            $('body').prepend( ich.thanks({name: name, pic: pic }) );
            
            // DATA COLLECTION
            $.post('/pushVote',{name:name});
            if ( typeof _kmq !== 'undefined' )
              _kmq.push(['record', 'Charitocracy', {'name': name}]);
            
            
        },
        ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove('drop-active');
            event.target.classList.remove('drop-target');
        }
    });


/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  */


      var gf=[
          {
            "pic": {
              "href": "http://www.gofundme.com/beautyworld?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2674383_1417051753.4069.jpeg",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/beautyworld?pc=trend ",
              "text": "$7,685"
            },
            "description": {
              "href": "http://www.gofundme.com/beautyworld?pc=trend ",
              "text": "Beauty World: Ferguson, MO"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=63135&country=US",
              "text": "Saint Louis, MO"
            }
          },
          {
            "pic": {
              "href": "http://www.gofundme.com/hujtmg?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2671382_1417028006.916.png",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/hujtmg?pc=trend ",
              "text": "$12,030"
            },
            "description": {
              "href": "http://www.gofundme.com/hujtmg?pc=trend ",
              "text": "Justin & Brendan Dyer Funeral Fund"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=45601&country=US",
              "text": "Chillicothe, OH"
            }
          },
          {
            "pic": {
              "href": "http://www.gofundme.com/EdCampana?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2683670_1417202687.9869.jpg",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/EdCampana?pc=trend ",
              "text": "$15,120"
            },
            "description": {
              "href": "http://www.gofundme.com/EdCampana?pc=trend ",
              "text": "Memorial Fund for Idilio Campana"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=60707&country=US",
              "text": "Elmwood Park, IL"
            }
          },
          {
            "pic": {
              "href": "http://www.gofundme.com/NataliesCakesnMore?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2663770_1417273038.5227.jpg",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/NataliesCakesnMore?pc=trend ",
              "text": "$260,390"
            },
            "description": {
              "href": "http://www.gofundme.com/NataliesCakesnMore?pc=trend ",
              "text": "Natalie's Cakes and More Fund"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=63135&country=US",
              "text": "Saint Louis, MO"
            }
          },
          {
            "pic": {
              "href": "http://www.gofundme.com/fashionsr?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2663118_1417142799.485.png",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/fashionsr?pc=trend ",
              "text": "$16,395"
            },
            "description": {
              "href": "http://www.gofundme.com/fashionsr?pc=trend ",
              "text": "Rebuild Juanita's Ferguson Boutique"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=63033&country=US",
              "text": "Florissant, MO"
            }
          },
          {
            "pic": {
              "href": "http://www.gofundme.com/hjx040?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2627172_1416632417.2747.jpg",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/hjx040?pc=trend ",
              "text": "$95,236"
            },
            "description": {
              "href": "http://www.gofundme.com/hjx040?pc=trend ",
              "text": "Ryan Maudlen needs our help!"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=V5N3E3&country=CA",
              "text": "Vancouver, BC"
            }
          },
          {
            "pic": {
              "href": "http://www.gofundme.com/htnohk?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2667670_1416966539.4514.jpg",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/htnohk?pc=trend ",
              "text": "$9,410"
            },
            "description": {
              "href": "http://www.gofundme.com/htnohk?pc=trend ",
              "text": "Cathy's Kitchen & J & C BBQ Repairs"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=63135&country=US",
              "text": "Saint Louis, MO"
            }
          },
          {
            "pic": {
              "href": "http://www.gofundme.com/hunocc?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2671827_1417031568.6578.jpg",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/hunocc?pc=trend ",
              "text": "$28,550"
            },
            "description": {
              "href": "http://www.gofundme.com/hunocc?pc=trend ",
              "text": "Ferguson Market Fund"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=63136&country=US",
              "text": "Saint Louis, MO"
            }
          },
          {
            "pic": {
              "href": "http://www.gofundme.com/hw28u4?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2677667_1417107493.6248.jpg",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/hw28u4?pc=trend ",
              "text": "$68,397"
            },
            "description": {
              "href": "http://www.gofundme.com/hw28u4?pc=trend ",
              "text": "New Vintage Farm Fire Fund"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=30188&country=US",
              "text": "Woodstock, GA"
            }
          },
          {
            "pic": {
              "href": "http://www.gofundme.com/helptheShaw-039-s?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2667074_1416964213.3466.jpg",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/helptheShaw-039-s?pc=trend ",
              "text": "$6,212"
            },
            "description": {
              "href": "http://www.gofundme.com/helptheShaw-039-s?pc=trend ",
              "text": "Help save my home from the cliff"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=98290&country=US",
              "text": "Snohomish, WA"
            }
          },
          {
            "pic": {
              "href": "http://www.gofundme.com/hpczrc?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2649806_1416860274.7955.jpg",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/hpczrc?pc=trend ",
              "text": "$55,785"
            },
            "description": {
              "href": "http://www.gofundme.com/hpczrc?pc=trend ",
              "text": "The Swink Family for Chandler"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=48307&country=US",
              "text": "Rochester, MI"
            }
          },
          {
            "pic": {
              "href": "http://www.gofundme.com/freebassem?pc=trend ",
              "src": "https://44cd8574c19e363b1af4-9bfca67f877491754ae0570b8c65e031.ssl.cf1.rackcdn.com/2673875_1417047333.9554.png",
              "text": ""
            },
            "amount": {
              "href": "http://www.gofundme.com/freebassem?pc=trend ",
              "text": "$15,386"
            },
            "description": {
              "href": "http://www.gofundme.com/freebassem?pc=trend ",
              "text": "#FreeBassem: Let Ferguson Report"
            },
            "location": {
              "href": "http://www.gofundme.com/mvc.php?route=search&term=20008&country=US",
              "text": "Washington, DC"
            }
          }
        ];

      var charity_data= [
                {
                  name: 'United Way',
                  img: 'http://www.doitbestcorp.com/AboutDIB/PublishingImages/Logos/United_Way_Logo.png',
                  amount:'4.3 Trillion Revenue',
                },
                {
                  name: 'Salvation Army',
                  img: 'https://s3.amazonaws.com/cache.salvationarmy.org/resources/img/ihq-logo.jpg',
                  amount:'4.1 Trillion Revenue',
                },
                {
                  name: 'Task Force for Global Health',
                  img: 'http://www.taskforce.org/sites/all/themes/taskforce/images/taskforce-logo.png',
                  amount:'1.7 Trillion Revenue',
                },
                {
                  name: 'Food for the poor',
                  img: 'http://www.jamaicaobserver.com/assets/11124930/food-for-the-poor.jpg',
                  amount:'0.9 Trillion Revenue',
                },
                {
                  name: 'World vision',
                  img: 'http://www.carterschord.com/content/img/logo-world-vision.png',
                  amount:'1.0 Trillion Revenue',
                }
              ];  
    
