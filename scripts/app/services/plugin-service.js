modules.serviceModule.service('$pluginService', function ($restService) {
    this.typeahead = function (options) {
        $(options.id).typeahead({
            source: function (query, process) {
                options.successCallback = function (data) {
                    process(['Audi', 'BMW', 'Bugatti', 'Ferrari', 'Ford', 'Lamborghini', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen']);
                }
                options.failCallback = function (data) {
                    process(['Fail', 'Fail', 'Fail', 'Fail', 'Fail', 'Fail', 'Mercedes Benz', 'Porsche', 'Rolls-Royce', 'Volkswagen']);
                }
                $restService.get(options);
            }
        });
    }

    this.carousel = function (object, options) {
        object.owlCarousel(options);
    }

    this.social = function (object,options) {
        $(object).share(options);
    }

    this.elasticGrid = function (options) {

        $(options.id).elastic_grid({
            'hoverDirection': false,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 500,
            'showAllText': "All",
            'items':
            [
                {
                    'thumbnail': ['images/school/3.jpg'],
                    'large': ['images/school/3.jpg'],
                    'button_list': [],
                    'tags': [ 'Library', 'Playground', 'Facility']
                },
                {

                    'thumbnail': ['images/school/4.jpg'],
                    'large': [],
                    'button_list': [],
                    'tags': ['Photoshop']
                },
                 {
                     'thumbnail': ['images/school/5.jpg'],
                     'large': [],
                     'button_list': [],
                     'tags': [ 'Library', 'Playground', 'Facility']
                 },
                  {
                      'thumbnail': ['images/school/6.jpg'],
                      'large': [],
                      'button_list': [],
                      'tags': [ 'Library', 'Playground', 'Facility']
                  },
                  {
                      'thumbnail': ['images/school/7.jpg'],
                      'large': [],
                      'button_list': [],
                      'tags': [ 'Library', 'Playground', 'Facility']
                  },
                  {
                      'thumbnail': ['images/school/8.jpg'],
                      'large': [],
                      'button_list': [],
                      'tags': [ 'Library', 'Playground', 'Facility']
                  },
                  {
                      'thumbnail': ['images/school/9.jpg'],
                      'large': [],
                      'button_list': [],
                      'tags': [ 'Library', 'Playground', 'Facility']
                  },
                  {
                      'thumbnail': ['images/school/11.jpg'],
                      'large': [],
                      'button_list': [],
                      'tags': [ 'Library', 'Playground', 'Facility']
                  },
                  {
                      'thumbnail': ['images/school/13.jpg'],
                      'large': [],
                      'button_list': [],
                      'tags': [ 'Library', 'Playground', 'Facility']
                  }
            ]
        });

        $(options.id).find("#og-grid a").each(function () {
            var anchor = $(this);
            anchor.addBack().off();
            var image = anchor.find("img");
            image.addBack().off();
            var href=image.attr("src");
            anchor.attr("href", href.replace("school","school/large"));
            anchor.addClass("gallery");
        });

        $('a.gallery').colorbox({ opacity: 0.5, rel: 'group1' });

        //$('#facility-background').captionjs({
        //    'class_name': 'facility-caption', // Class name for each <figure>
        //    'schema': true,        // Use schema.org markup (i.e., itemtype, itemprop)
        //    'mode': 'default',   // default | stacked | animated | hide
        //    'debug_mode': false,       // Output debug info to the JS console
        //    'force_dimensions': true,        // Force the dimensions in case they cannot be detected (e.g., image is not yet painted to viewport)
        //    'is_responsive': true,       // Ensure the figure and image change size when in responsive layout. Requires a container to control responsiveness!
        //    'inherit_styles': true        // Have the caption.js container inherit box-model properties from the original image
        //});
        //$("#home  figcaption").append($("#image-caption"));
     

    }

});