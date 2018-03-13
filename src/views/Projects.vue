<template>
    <div class="projects">
        <v-btn class="print-no blue darken-3" fab absolute right @click="print()">
            <v-icon>print</v-icon>
        </v-btn>
        <v-container fluid grid-list-xl>
            <v-layout row wrap class="print-break-after print-together">
                <v-flex (xs12|sm6|md4|lg3|xl2) v-for="p in projects" :key="p.id">
                    <v-card @click="p.show = !p.show" class="clickableCard">
                        <v-card-media class="print-together">
                            <v-carousel v-bind:hide-controls="p.images.length<2 ? true:false" v-bind:hide-delimiters="p.images.length<2 ? true:false">
                                <v-carousel-item v-for="(image, index) in p.images" v-bind:src="image" :key="p.id+'-'+index"></v-carousel-item>
                            </v-carousel>
                        </v-card-media>
                        <v-card-title @click="p.show = !p.show" class="pb-0">
                            <div class="headline">{{p.title}}</div>
                        </v-card-title>
                        <v-card-title @click="p.show = !p.show" class="pt-0 pb-0">
                            <div class="grey--text">{{p.summary}}</div>
                        </v-card-title>
                        <v-card-title @click="p.show = !p.show" class="pt-0">
                            <span v-for="d in p.domain" :key="p.id+'-'+d"><v-chip small outline disabled><span v-html="d"></span></v-chip></span>
                        </v-card-title>
                        <v-slide-y-transition>
                            <v-card-text v-show="p.show" @click="p.show = !p.show">
                                <div v-html="p.description"></div>
                                <div v-html="p.codeExample"></div>
                            </v-card-text>
                        </v-slide-y-transition>
                        <v-card-actions>
                            <v-btn small outline color="primary" class="print-no" v-if="p.git.length>0" v-bind:href="p.git">
                                <v-icon>code</v-icon>
                            </v-btn>
                            <span class="screen-no">{{p.git}}</span>
                            <v-btn small outline color="primary" class="print-no" v-if="p.download.name && p.download.href" v-bind:href="p.download.href">
                                <v-icon>file_download</v-icon>
                                http://james.io/{{p.download.name}}
                            </v-btn>
                            <span class="screen-no">{{p.download.href}}</span>
                            <v-spacer></v-spacer>
                            <v-btn icon flat class="print-no" @click="p.show = !p.show">
                                <v-icon>{{ p.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex (xs12|sm6|md4|lg3|xl2)>
                    <v-card @click="misc.show = !misc.show" class="clickableCard">
                        <v-card-media>
                            <v-carousel v-bind:hide-controls="misc.images.length<2 ? true:false" v-bind:hide-delimiters="misc.images.length<2 ? true:false">
                                <v-carousel-item v-for="(image, index) in misc.images" v-bind:src="image" :key="misc.id"></v-carousel-item>
                            </v-carousel>
                        </v-card-media>
                        <v-card-title @click="misc.show = !misc.show" class="pb-0">
                            <div class="headline">{{misc.title}}</div>
                        </v-card-title>
                        <v-card-title @click="misc.show = !misc.show" class="pt-0 pb-0">
                            <div class="grey--text">{{misc.summary}}</div>
                        </v-card-title>
                        <v-card-title @click="misc.show = !misc.show" class="pt-0">
                            <span v-for="d in misc.domain" :key="misc.id+'-'+d"><v-chip small outline disabled><span v-html="d"></span></v-chip></span>
                        </v-card-title>
                        <v-slide-y-transition>
                            <v-card-text v-show="misc.show" @click="misc.show = !misc.show">
                                <div v-html="misc.description"></div>
                                <span v-for="item in misc.items">
                                    <p>
                                        <v-btn small outline color="primary" class="print-no" v-bind:href="item.git">
                                            <v-icon>code</v-icon>
                                        </v-btn>
                                        <span class="screen-no">{{item.git}}<br /></span>
                                        <span>{{item.description}}</span>
                                    </p>
                                </span>
                            </v-card-text>
                        </v-slide-y-transition>
                        <v-card-actions>
<!--
                            <v-btn small outline color="primary" v-if="p.git.length>0" v-bind:href="p.git">
                                <v-icon>code</v-icon>
                            </v-btn>
                            <v-btn small outline color="primary" v-if="p.download.name && p.download.href" v-bind:href="p.download.href">
                                <v-icon>file_download</v-icon>
                                {{p.download.name}}
                            </v-btn>
                        -->
                            <v-spacer></v-spacer>
                            <v-btn icon flat class="print-no" @click="misc.show = !misc.show">
                                <v-icon>{{ misc.show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
                            </v-btn>
                        </v-card-actions>

                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<style>
    .clickableCard:hover { box-shadow: 2px 2px 8px 4px #131313; }
    .carousel__item { background-size: contain;}
</style>

<script>

export default {
    data: () => ({
        show: false,
        projects: [
                {id: 'sundesign',
                    title: 'Solar Machine Learning',
                    images: ['img/solarstudio/iiquote-300px.jpg',
                            'img/solarstudio/classified-light-300px.jpg',
                            'img/solarstudio/classified-dark-300px.jpg',
                            'img/solarstudio/classified-blue-300px.jpg',
                            'img/solarstudio/classified-sparse-300px.jpg',
                            'img/solarstudio/classified-dense-300px.jpg'],
                    summary:'Machine learning to support solar systems at city scale.',
                    domain: ['machine learning', 'terabyte datasets', 'geospatial', 'lidar', 'image analysis', '3d modeling'],
                    tools: 'sparkml, fiji, imagej, weka, scipy, numpy, threejs, cloudcompare, fugroviewer, lastools, arcgis, qgis, grass, geotools, javascript, html5',
                    description: '<p>Justified and guided a new team that was responsible for creating an inexpensive automated parallelized machine learning pipeline capable of processing terabytes of data per hour for Sungevity and their customers.  Inputs included satellite imagery, aerial imagery, lidar, and others.  The outputs were various datasets enabling Sungevity to evaluate new markets and scale.</p><p>Much of the early work was prototyping using weka\'s fiji plugin for image classification, as things became more sophisticated we moved to a headless instance of weka, and by then the full team was assembled and we threw out weka for licensing reasons and wrote our own classifiers on top of sparkml.</p>',
                    codeExample:'',
                    git:'',
                    download:{},
                    show: false
                },
                {id: 'jamesio',
                    title: 'james.io',
                    images: ['img/jamesio/jamesio-300px.jpg'],
                    summary:'Tropical paradise for my virtual collection of odds and ends.',
                    domain: ['web applications', 'responsive', 'progressive web app', 'ionic', 'vue'],
                    tools: 'typescript, angular, ionic',
                    description: '<p>This web site you are at.  Its relatively simplicity makes it a good candidate to periodically rewrite/update using newer technologies in part for learning.  It has been through phases of existance as custom javascript, yui, jquery, angular, ionic, and now vue.</p><p>It exercises several components of the vue framework such as carousel, grids/flex layout, and an assortment of basics like chips, cards, etc.</p><p>The previous version of this website was created in Ionic and was a spectacular failure.  Ionic has an unadvertised \'feature\' of being really really slow as a PWA on the phone while fine on the desktop.  Ionic is fast as a hybrid app on the phone which is it\'s forte.  But having to download an app to see my website makes no sense so I moved it over to Vue which I have been curious about.  But you can still see the Ionic version <a href="https://github.com/stormsaurus/io-james-www-ion">here</a></p>',
                    codeExample:'',
                    git:'https://github.com/stormsaurus/io-james-www-vue',
                    download:{},
                    show: false
                },
                {id: 'fang',
                    title: 'FANG',
                    images: ['img/fang/cydesign-studio-fang-300px.jpg','img/fang/ipad-ui-concept-300px.jpg'],
                    summary:'DARPA project to model and simulate large electromechanical system designs like a rocket by parametric optimization.',
                    domain: ['requirements management', 'design space exploration', 'modeling', 'modelica simulation', 'trade space studies', 'parametric optimization', 'verification and certification'],
                    tools: 'javascript, html5, java, postgres, underscore, bootstrap, momentjs',
                    description: '<p>DARPA had a crowd sourcing competition for a million dollars. I worked with one of the companies provided tooling for the competition, CyDesign Labs.  Eventually they were aquired by ESI. I architected, generally guided best practice for the html5 client, and designed the REST API services.</p><p>I also did security auditing up and down the stack pre-deploy.  I discovered several critical security vulnerabilities.</p>',
                    codeExample:'',
                    git:'',
                    download:{},
                    show: false
                },
                {id: 'ereader',
                    title: 'eReader',
                    images: ['img/ereader/book_selection-300px.jpg','img/ereader/startup-300px.jpg','img/ereader/login-300px.jpg','img/ereader/book_related-300px.jpg','img/ereader/book_reading-300px.jpg'],
                    summary:'JavaOne 2009 showcased eReader for JavaFX language developed by request of Simon & Schuster and Sun Microsystems.',
                    domain: ['multi platform', 'mobile', 'desktop', 'tv'],
                    tools: 'javafx, java',
                    description: '<p>Sun Microsystems partnered with Simon & Schuster to prototype an ebook reader for Java One. It explored the capabilities of the javafx platform and the possibility of publishing media on a device independent platform. It demonstrated publishing media on a device independant platform.  I developed this prototype starting two weeks before the conference including learning the language allowing them to fulfill previously created commitments.  It was created using JavaFX and designed for desktop, mobile, and tv.</p>',
                    codeExample:'',
                    git:'',
                    download:{},
                    show: false
                },
                {id: 'jfxstyleeditor',
                    title: 'Style Editor',
                    images: ['img/style_editor/style_editor-300px.jpg'],
                    summary:'CSS theming of JavaFX applications.  Featured #1 on Oracle\'s developer network.',
                    domain: ['best practice', 'teaching code'],
                    tools: 'css, javafx',
                    description: '<p>I was asked to develop a sample application that showcases the CSS features new to version 1.3. I created a style editor which lets the user select from pre-built themes for different devices such as mobile, tv, and desktop as well as edit them.</p>',
                    codeExample:'',
                    git:'',
                    download:{},
                    show: false
                },
                {id: 'jfxscenebuilder',
                    title: 'JFX Scene Builder',
                    images: ['img/scene_builder/scene_builder_4-300px.jpg','img/scene_builder/scene_builder_2-300px.jpg','img/scene_builder/scene_builder_3-300px.jpg'],
                    summary:'Better performance for large JavaFX scene graphs.',
                    domain: ['scene graph', 'performance'],
                    tools : 'javafx',
                    description: `<p>One performance problem of javafx was discovered realitivly early on; large scene graphs cause slow startups.  And javafx tends to have most nodes in the scene pre-defined at instantiation.  A solution was to defer object creation and place it in a separate process so your UI could launch quickly.</p><p>The main file demonstrates how you can instantiate over 62000 nodes but still have quick rendering of the application. It adds a custom SceneBuilder and SceneWorker object to acheive this. There is also a preliminary version of a modal dialog.</p><p>Once I started creating large scene graphs in javafx I needed an easier way to manage scene graph instantiation. This is because large scene graphs can cause the program to appear to be unresponsive at startup. This generally occurs when the scene definition is all in one statement. The solution is to instantiate parts of the scene graph at a time. This requires breaking the definition up into different blocks and defering the creation of the next block until the previous block and it\'s peer objects have been rendered. There is no built in mechanism do this.</p>`,
                    codeExample:`<p>SceneBuilder relies on recursively calling FX.deferAction() to instantiate groups of Nodes. Groups of nodes are wrapped in SceneWorkers and they are added to the SceneBuilder. The SceneWorker objects have an init function and a target to insert the nodes into. You can either have SceneBuilder append groups of nodes or you can specify a target container.</p><div class="code"><pre>
Stage{
    scene = Scene{
        content: [ visuals ]
    }
}

SceneBuilder{
    scene: scene
    nodes: [
        SceneWorker{
            init: function(){
                [ \/*nodes for item 1*\/ ]
            }
        },
        SceneWorker{
            init: function(){
                [ \/*nodes for item 2*\/ ]
            }
        }
    ]
}.start();
                    </div></span><br/><p>To run:
                    <span class="code">javafx -cp SceneBuilder.jar scenebuilder.Main</span></p><p>Alternate if javafx is on your classpath:<span class="code">java -jar SceneBuilder.jar</span></p>`,
                    git:'',
                    download:{},
                    show: false
                },
                {id: 'kikistream',
                    title: 'Kiki Stream',
                    images: ['img/kikistream/tv_kikistream-about-300px.jpg'],
                    summary: 'Video streaming hardware and services.',
                    domain: ['audio/visual hardware encoders','jwplayer', 'rmtp', 'video/audio transcoding'],
                    tools: '',
                    description: '<p>Partnering with a region Audio Visual company I repackaged white label video streaming services to work with custom hardware configurations such as mics, monitors, and hardware encoders.  The service and the custom hardware were then sold as a turn key package for boardrooms, conventions, houses of worship, etc.</p><p>Eventually the video streaming market become commoditized via companies like youtube on the consumer end and companies like ooyala on the enterprise end and the company was closed.</p>',
                    codeExample:'',
                    git:'',
                    download:{},
                    show: false
                },
                {id: 'golem',
                    title: 'Golem',
                    images: ['img/golem/300px_golem.jpg'],
                    summary:'Library for user authentication and registration.',
                    domain: ['user session management', 'registration', 'email verification'],
                    tools: 'java, openjpa, testng, apache commons, libs from apache geronimo',
                    description: '<p>It manages login, logout, registration, email authentication, and session management.</p><p>I was prototyping a new project and was tired of reimplementing user login, yet again. I had been using Hibernate for awhile and decided I wanted to experiment with OpenJPA. I put together some code as a standalone JPA enabled library which implements the basic user login and session management functions.  Of course the need for something like this has been greatly reduced given the rising popularity of OAuth.  It is very much alpha software.</p><p>It is not for CAPTCHA or permissions. Verifying that a new user is human can be done using the built in email verification or you can implement a CAPTCHA test prior to calling the registration function. Permission should be handled by your application separately using the unique returned keys or user names.</p><p>This project has been retired.</p>',
                    codeExample:'',
                    git:'https://github.com/stormsaurus/golem',
                    download:{},
                    show: false
                },
                {id: 'imageprocessor',
                    title: 'Image Processor',
                    images: ['img/image_processor/image001-300px.jpg','img/image_processor/image002-300px.jpg','img/image_processor/image003-300px.jpg','img/image_processor/image004-300px.jpg'],
                    summary:'Image and signal processor including a specialized implementation of the Legendre-Fenchel transform.',
                    domain: ['image transforms', 'scientific computing'],
                    tools: 'java, fortran',
                    description: '<p>This is one of my first useful but quite dated Java program prior to professionally coding.  It was developed to support research into two dimensional monolayer domain growth. It\'s a port of several routines previously written by a collaborator in Fortran with some new functions and a UI put on top and batch processing added.</p><p>More details <a href="/#/dissertation">here</a></p>',
                    codeExample:'<p><span class="code">java -jar IP_3_0_2a.jar</span></p>',
                    git:'https://github.com/stormsaurus/ip',
                    download:{name:'IP_3_0_2a.jar', href:'files/IP_3_0_2a.jar'},
                    show: false
                },
                {id: 'catalyst',
                    title: 'Catalyst',
                    images: ['img/catalyst/WatcherEditor-300px.jpg','img/catalyst/WatcherMain-300px.jpg'],
                    summary:'External Gaming Chat Relay',
                    domain: ['gaming', 'moding'],
                    tools: 'java, jabsorb, apache commons, jpa via openjpa, pirc, apache tomcat, mysql, jnlp launcher',
                    description: `<p>For fun I wrote a partial program for communicating with people while not logged into a game provided they also had the program. The idea is to parse chat logs and relay it to an IRC or SMS server. An IRC bot would sit in the channel and relay back to a network of game clients through a mod. Duplicate messages and unauthorized traffic would be filtered on the server. This two way communication would let you participate in chat from outside the game from protocols and devices like IRC, IM, email, SMS, even your cell phone.</p><p>Can be used for other log file operations such of combat stats, player locations, and interclient communication if custom channels can be created.</p><p>This required an in game mod, a local JNLP swing client for parsing called the Watcher, a server for sending and receiving the messages called Carousel, as well a specialized IRC bot. Unfortunately the most easily modded game at the time (World of Warcraft) is designed such that real time logging would violating the EULA. I wanted real time chat.  The are other potential uses, for example it could just as easily parse combat logs.</p><p>The local jnlp application. Launchs from a web page and normally sits in the system tray.</p><p>Project has been retired.</p>`,
                    codeExample:'',
                    git:'https://github.com/stormsaurus/catalyst',
                    download:{},
                    show: false
                }
            ],
        misc:
            {id: 'misc-util',
                title: 'Miscellaneous',
                images: ['img/utilities/wg-encrypt-screenshot-300px.jpg'],
                summary:'Collection of miscellaneous utilities.',
                domain: ['libraries', 'utilities', 'Java', 'Batch Files', 'Vue'],
                description: ``,
                items: [
                    {
                        name: 'wg-encrypt',
                        description: 'Open source batch files to recursively gpg encrypt/decrypt files.  Because some things that are easy to do in *nix are hard to do in Windows.  And sometimes you don\'t have a choice.',
                        git: 'https://github.com/eiseins/wg-encrypt'
                    },
                    {
                        name: 'vue-print-styles',
                        description: 'Open source CSS rules for better printing from a Vue app.',
                        git: 'https://github.com/eiseins/vue-print-styles'
                    },
                    {
                        name: 'Mailer',
                        description: 'A simple mailer that allows web forms on a website to send emails through a server.  It throttles total traffic by hour and day.',
                        git: 'https://github.com/stormsaurus/form-mailer'
                    },
                    {
                        name: 'Klepto',
                        description: 'A syndication feed reader that makes the feed available to javascript from a server.  Was used in a previous personal website iteration to create a news feed reader.',
                        git: 'https://github.com/stormsaurus/klepto'
                    }
                ],
                show: true
            }


    }),
    props: {

    },
    methods:{
        print: function(){
            window.print();
        }
    }
}

</script>
