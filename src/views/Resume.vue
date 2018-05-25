<template>
    <div class="resume">
        <v-btn class="print-no blue darken-3" fab absolute right @click="print()">
            <v-icon>print</v-icon>
        </v-btn>
        <v-container grid-list-md>
            <v-layout row wrap class="mb-1 pt-1" elevation-3>
                <v-flex xs12 text-xs-center>
                    <div>James Teer<br />
        			Santa Clara, CA<br />
        			U.S. citizen<br />
                    contact@james.io</div>
                    <div class="screen-no">http://james.io/  <v-icon dark>code</v-icon><v-icon dark>link</v-icon></div>
                    <div class="print-no pt-2">
                        <v-tooltip bottom>
                            <v-btn slot="activator" href="mailto:contact@james.io" fab dark small color="primary">
                                <v-icon dark>mail</v-icon>
                            </v-btn>
                            <span>Email</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <v-btn slot="activator" href="https://github.com/stormsaurus/" fab dark small color="primary">
                                <v-icon dark>code</v-icon>
                            </v-btn>
                            <span>Github (Private)</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <v-btn slot="activator" href="https://github.com/eiseins/" fab dark small color="primary">
                                <v-icon dark>code</v-icon>
                            </v-btn>
                            <span>Github (Public)</span>
                        </v-tooltip>
                        <v-tooltip bottom>
                            <v-btn slot="activator" href="https://www.linkedin.com/in/jteer" fab dark small color="primary">
                                <v-icon dark>link</v-icon>
                            </v-btn>
                            <span>LinkedIn</span>
                        </v-tooltip>
                    </div>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="mb-1 pl-2 pt-1" elevation-3>
                <v-flex xs12>
                    <p>I am primarily interested in working with a great group of people on compelling and interesting projects.  The particular tech stack or position, while relevant, is not the most important thing to me.  I can get up to speed on most stacks and have performed as needed in many roles.  Recently I have been digging deeper into machine learning and crytocurrency fintech.</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="mb-1 pl-2 pt-1" elevation-3>
                <v-flex xs12>
    				<h3>Innovation</h3>
                    <p>Have founded/co-founded a couple startups.  Experienced in wearing many hats including conception, hiring, and execution.</p>
    				<h3>Leadership</h3>
    				<p margin-left>Building consensus on a new path if the current one is not a productive one.</p>
    				<h3>Architect</h3>
    				<p margin-left>A broad understanding of the space and the technology tradeoffs between time to maturity, emergent technology, and when the window of opportunity is.</p>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="mb-1 pl-2 pt-1" elevation-3>
                <v-flex xs12>
                    <h3>Technical</h3>
                    <p>I started in science and then became fascinated with computer technologies.  Most of my technical computer experience is full stack with a heavy amount of java and javascript.  Various endevours have added experience in machine learning, medical devices/diagnostics, shipping management, geospatial analysis, electromechanical simulations, audio and video streaming, and writing world class APIs.</p><p>Currently I am looking into new languages again like go, exploring improvements in javascript typescript and es6, and digging deeper into machine learning.</p>
                    <v-layout row wrap class="mb-0 pl-3 print-together">
                        <v-flex class="print-no" xs12><v-divider></v-divider></v-flex>
                        <v-flex xs6>
                            <h4>Recent</h4>
                        </v-flex>
                        <v-flex xs6 text-xs-right>
                            <v-chip small outline>days</v-chip>
                        </v-flex>
                        <v-flex xs12>
                            <p>new machine learning algorithms, go, vue, veutify</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="mb-0 pl-3 print-together">
                        <v-flex class="print-no" xs12><v-divider></v-divider></v-flex>
                        <v-flex xs6>
                            <h4>Machine Learning</h4>
                        </v-flex>
                        <v-flex xs6 text-xs-right>
                            <v-chip small outline>2 years</v-chip>
                        </v-flex>
                        <v-flex xs12>
                            <p>cloudcompare, fast random forest, fiji, imagej, java, k-means clustering, linear regression, logistic regression, numpy, python, supervised decision trees, weka</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="mb-0 pl-3 print-together">
                        <v-flex class="print-no" xs12><v-divider></v-divider></v-flex>
                        <v-flex xs6>
                            <h4>Web</h4>
                        </v-flex>
                        <v-flex xs6 text-xs-right>
                            <v-chip small outline>10+ years</v-chip>
                        </v-flex>
                        <v-flex xs12>
                            <p>angular, bootstrap, css, html5, ionic, javascript, java, jasmine, karma, modernizr, momentjs, npm, rxjs, typescript, threejs, and others</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="mb-0 pl-3 print-together">
                        <v-flex class="print-no" xs12><v-divider></v-divider></v-flex>
                        <v-flex xs6>
                            <h4>Mobile</h4>
                        </v-flex>
                        <v-flex xs6 text-xs-right>
                            <v-chip small outline>1 year</v-chip>
                        </v-flex>
                        <v-flex xs12>
                            <p>hybrid apps using cordova, html5, ionic, typescript</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="mb-0 pl-3 print-together">
                        <v-flex class="print-no" xs12><v-divider></v-divider></v-flex>
                        <v-flex xs6>
                            <h4>Geospatial</h4>
                        </v-flex>
                        <v-flex xs6 text-xs-right>
                            <v-chip small outline>2 years</v-chip>
                        </v-flex>
                        <v-flex xs12>
                            <p>arcgis, cesiumjs, fugroviewer, geotools, grass, html5, java, javascript, lastools, leaflet, mapbox, openstreetmap, qgis, slippy, turf</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="mb-0 pl-3 print-together">
                        <v-flex class="print-no" xs12><v-divider></v-divider></v-flex>
                        <v-flex xs12><h4>General Tools</h4></v-flex>
                        <v-flex xs12>
                            <p>atom, aws including ec2, rds, s3, iam, jenkins, git, gitkraken, mysql, npm, postgresql, travis-ci</p>
                        </v-flex>
                    </v-layout>
                    <v-layout row wrap class="mb-0 pl-3 print-together">
                        <v-flex class="print-no" xs12><v-divider></v-divider></v-flex>
                        <v-flex xs12><h4>Dusty</h4></v-flex>
                        <v-flex xs12>
                            <p>Languages - c/c++, bash, fortran, javafx, lua, perl, php, tcl/tk</p><p>Tools - apache httpd, ant, audio/visual hardware encoders, bower, docker, eclipse as a platform, hibernate, iptables/ipchains, jetty, jnlp, jwplayer, kubernetes, maven, mercurial, mod_rewrite, mod_proxy, mod_ssl, nginx, spring, svn, tomcat, virtual hosting, weblogic </p><p>Other - D3, backbone, jquery, jquery ui, qunit, geronimo, pubsubjs, jpa via openjpa, openjpa, rmtp, smil, junit, testng, underscore, jabsorb, video/audio transcoding</p>
                        </v-flex>
                    </v-layout>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="mb-1 pl-2 pt-1" elevation-3>
                <v-flex xs12>
    				<h3>Experience - Selected</h3>
                    <p>Additional experience at <a href="/#/projects">http://james.io/#/projects</a> and <a href="https://www.linkedin.com/in/jteer">https://www.linkedin.com/in/jteer</a> .</p>
                    <v-layout row wrap class="mb-1 pl-3">
                        <v-flex xs12 mb-0 pb-0>
                            <h4>Machine Learning Engineer</h4>
                            <div class="mb-1">Sungevity, Inc. &nbsp;&nbsp;&nbsp; Jun 2014 – Jun 2016</div>
                        </v-flex>
                        <v-flex xs12>
                            <p>Justified and guided a new team that was responsible for creating an inexpensive automated parallelized machine learning pipeline capable of processing terabytes of data per hour for Sungevity and their customers.  Inputs included satellite imagery, aerial imagery, lidar, and others.  The outputs were various datasets enabling Sungevity to evaluate new markets and scale.</p>
                            <p>Accomplishments: Enabled moving from human created to machine learning created datasets and increasing potential sales leads at vastly less cost.</p>
                        </v-flex>
<!--
                        <v-flex xs12 mb-0 pb-0>
                            <h4>Startup Research</h4>
                            <div class="mb-1">Jul 2013 – Apr 2014</div>
                        </v-flex>
                        <v-flex xs12>
                             <p>Explored potential startup ideas.  These technically involved angularjs, Unity, WebGL, three.js, and various other upcoming HTML5 features.</p>
                        </v-flex>
-->

                        <v-flex xs12 mb-0 pb-0>
                            <h4>Guardian of Forever</h4>
                            <div class="mb-1">CyDesign Labs, Inc. &nbsp;&nbsp;&nbsp; May 2012 – May 2013</div>
                        </v-flex>
                        <v-flex xs12>
                            <p>Development of a model-based design optimization platform for engineers. The software was first used by DARPA for the crowd sourced FANG competition awarding a million dollar prize.  It integrates requirements management, design space exploration, modeling, Modelica simulation, trade space studies, parametric optimization, verification and certification to arrive at better designs faster.  My work centered on architecting and implementing a modular html5 client, defining the services REST API, and guiding ongoing web client work.</p>
                            <p>Accomplishments: We were going to miss features for a key funding deadline due to prior technical decisions before my arrival.  Myself and two other new hires pitched in over the end of year holidays and rebuilt the entire web client and key server components to make that deadline.  This contributed to an eventual successful acquisition by ESI.</p>
                        </v-flex>
<!--
                        <v-flex xs12 mb-0 pb-0>
                            <h4>Founder</h4>
                            <div class="mb-1">Kiki Streaming &nbsp;&nbsp;&nbsp; Jan 2011 – May 2012</div>
                        </v-flex>
                        <v-flex xs12>
                            <p>Founded a video streaming company which provides solutions for broadcasting and signage in boardrooms, hospitals, entertainment venues, local government, and others.</p>
                        </v-flex>
-->
                        <v-flex xs12 mb-0 pb-0>
                            <h4>Consultant</h4>
                            <div class="mb-1">Oracle &nbsp;&nbsp;&nbsp; Aug 2009 – Sept 2010</div>
                        </v-flex>
                        <v-flex xs12>
                             <p>Worked with the JavaFX team which included developers of swing and java's now lead architect. Created localized accessible stylable UI widgets that operated across multiple devices (desktop/phone/tablet/tv/etc).  Lead a separate team porting and creating best practice sample <a href="/#/projects">code</a> highlighted on javafx.com and Oracle's developer network.  Performed as team scrum master and was responsible for code integration with other teams for master builds of the platform.</p>  <p>Accomplishments: Reduced build times by 15% and footprint by 75+%.  Created new javafx components for their worldclass API.</p>
                        </v-flex>
                        <v-flex xs12 mb-0 pb-0>
                            <h4>Consultant</h4>
                            <div class="mb-1">Sun Microsystems &nbsp;&nbsp;&nbsp; May 2009 – Aug 2009</div>
                        </v-flex>
                        <v-flex xs12>
                             <p>Sun Microsystems partnered with Simon &amp; Schuster to prototype a software ebook reader for Java One. It demonstrated publishing media on a device independent platform. Then they were bought and Oracle continued the arrangement.</p>
                             <p>Accomplishments: I developed the prototype starting two weeks before the conference including learning the language allowing them to fulfill previously created commitments.</p>
                        </v-flex>
<!--
                        <v-flex xs12 mb-0 pb-0>
                            <h4>Consultant</h4>
                            <div class="mb-1">IQBio Labs, Inc. &nbsp;&nbsp;&nbsp; Mar 2009 – May 2009</div>
                        </v-flex>
                        <v-flex xs12>
                            <p>Modified software and instrumentation to provide personal diagnostics for improving employee health.  The real time system was comprised several linked diagnostic stations, arrays of wearable patient sensors connected via bluetooth sending multi-gigabyte data sets, and a master clinic station rending data in 3d on the eclipse platform.  The original programmers were no longer available and they needed critical features added to their undocumented system for investors within a couple months.</p>
                        </v-flex>
                        <v-flex xs12 mb-0 pb-0>
                            <h4>Startup Research</h4>
                            <div class="mb-1">May 2006 – Mar 2009</div>
                        </v-flex>
                        <v-flex xs12>
                            <p>Explored potential startup ideas.  One turned into <a href="http://www.kikistream.tv/">www.kikistream.tv</a> a few years later.</p>
                        </v-flex>
-->
                        <v-flex xs12 mb-0 pb-0>
                            <h4>Co-Founder</h4>
                            <div class="mb-1">SitePen, Inc. &nbsp;&nbsp;&nbsp; July 2001 – May 2006</div>
                        </v-flex>
                        <v-flex xs12>
                            <p>Developed web applications for a wide variety of customers.  Selected client projects listed below.</p>

    						<!--<p>Medical Staffing - SaaS product where employees, employers, and staffing agencies could place workers for temporary jobs which involves a three party commit. Some components were licensed as open source.</p>-->

    						<p>Ambassador Media Group - SaaS product for selling and managing ad campaigns on ad networks including Google, Yahoo, MSN, Ask, Looksmart, and SuperPages. I architected the integration with their existing software, developed load projections, specifying and requisitioned hardware, and general project management.</p>

    						<p>GreenPlum Monitor - A browser based monitoring application which provided a continuously updated graphical representation of the status and activity of Greenplum databases and their underlying system resources such as cluster and machine status; table size and skew; and CPU, disk, memory, and network utilization.</p>

                            <p>Accomplishments: Co-Founded the company and wore many hats.</p>
                        </v-flex>
<!--
                        <v-flex xs12 mb-0 pb-0>
                            <h4>Consultant</h4>
                            <div class="mb-1">Vizional Technologies &nbsp;&nbsp;&nbsp; April 2003 – June 2003</div>
                        </v-flex>
                        <v-flex xs12>
                            <p>Helped deliver to <a rel="gallery" href="http://www.maersk.com/">A.P. Moller Group/Maersk</a> a replacement for their supply chain and logistics software. They have holdings in companies that operate container, tanker, bulk, and offshore supply shipping as well as offshore drilling and related activities such as Maersk Sealand, which accounts for sixty percent of worldwide shipping.</p>
                        </v-flex>
-->
                    </v-layout>
                </v-flex>
            </v-layout>

            <v-layout row wrap class="print-together mb-1 pl-2 pt-1" elevation-3>
                <v-flex xs12>
                    <h3>Education</h3>
                    <v-list three-line class="restoregrey">
                        <v-list-tile class="restoregrey">
                            <v-list-tile-content class="restoregrey">
                                <div>Ph.D. Physical Chemistry</div>
                                <div class="ml-5"><a href="http://www.chem.ucla.edu/">University of California</a>, Los Angeles</div>
                                <div class="ml-5">March, 2002</div>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>
                                <div>B.S. Chemistry</div>
                                <div class="ml-5"><a href="http://www.chem.ufl.edu/">University of Florida</a>, Gainesville</div>
                                <div class="ml-5">December, 1991</div>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-list-tile>
                            <v-list-tile-content>
                                <div>Un Programme d'Étude du Travail (work study)</div>
                                <div class="ml-5"><a href="https://en.wikipedia.org/wiki/Rh%C3%B4ne-Poulenc">Rhône Poulenc</a>, France</div>
                                <div class="ml-5">Summer, 1990</div>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-flex>
            </v-layout>

            <v-layout row wrap class="mb-0 pl-2 pt-1" elevation-3>
                <v-flex xs12>
                    <h3>Publications</h3>
                    <p>Purely scientific <a href="/#/publications">publications</a> can be found in the following journals.</p>
                    <ul class="restoregrey ml-4">
                        <div>Physical Review E</div>
                        <div>Colloids and Surfaces A</div>
                        <div>Journal of Physical Chemistry</div>
                        <div>Journal of Chemical Physics</div>
                    </ul>
                </v-flex>
            </v-layout>
            <v-layout row wrap class="mb-0 pl-2 pt-1 screen-no" elevation-3>
                <v-flex xs12>
                    <h3>Other</h3>
                    <p class="screen-no">For social media, projects, and github sites see my personal website at <a href="http://james.io/">http://james.io/</a></p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
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

<style scoped>
    @media screen{
        .restoregrey { background-color: #313131 !important; }
    }
    h3 { margin-bottom: 1em; }
    h4 { display:inline; }
    p { margin-left: 1.5em; }
</style>
