import React,{Component} from 'react';
import MAP_STYLE from './map-style-v8.json';
import MAP_STYLE1 from './satellite-v9.json'
import MAP_STYLE2 from './bright-v9.json'
import MAP_STYLE3 from './empty-v9.json'
import ReactMapGL, {Marker, Popup, NavigationControl } from 'react-map-gl';
import CITIES from './markers.json';
import CityInfo from './city-info'
import CityPin from './city-pin'
import bartStations from './bart-station.json';
import MARKER_STYLE from './marker-style';
import {json as requestJson} from 'd3-request';
import Iframe from 'react-iframe'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


class Map extends Component {

  constructor(props) {
    super(props)
    this.state= {
      viewport: {
        width: 1200,
        height: 550,
        latitude: 12.974922,
        longitude: 77.57733,
        zoom: 9,
      },
      showm:{disp:'none'},
      mapstyle:"",
      category:"",
      mark:""
    };
    this.setState=this.setState.bind(this)
  }
  
  _loadData = (map,data) => {
    map.addLayer(data)
  };

  componentDidMount(){
    const map = this.reactMap.getMap();
    map.on('load', function () {

        requestJson('bang.json', (error, response) => {
            if (!error) {
              this._loadData(response);
            }
          });

            map.addLayer( {
                'id': 'yeshwantpur',
                'type': 'fill',
                'source': {
                'type': 'geojson',
                'data': {
                'type': 'Feature',
                'geometry': {
                'type': 'Polygon',
                  "coordinates": [
                    [
                      [
                        77.53944396972656,
                        13.040682977573546
                      ],
                      [
                        77.53463745117188,
                        13.01961056559762
                      ],
                      [
                        77.54425048828125,
                        13.00422322784486
                      ],
                      [
                        77.56587982177734,
                        12.998870886590765
                      ],
                      [
                        77.58304595947266,
                        13.013255041853022
                      ],
                      [
                        77.58167266845703,
                        13.036000374375663
                      ],
                      [
                        77.53944396972656,
                        13.040682977573546
                      ]
                    ]
                ]
                }
                }},'layout': {},
                'paint': {
                'fill-color': '#088',
                'fill-opacity': 0.4
                }
                });

                
            map.addLayer( {
                'id': 'whitefield',
                'type': 'fill',
                'source': {
                'type': 'geojson',
                'data': {
                'type': 'Feature',
                'geometry': {
                'type': 'Polygon',
                "coordinates": [
                    [
                      [
                        77.71076202392578,
                        13.016934575463706
                      ],
                      [
                        77.69668579101562,
                        13.01191701608992
                      ],
                      [
                        77.6949691772461,
                        12.995860143908684
                      ],
                      [
                        77.70389556884766,
                        12.981140431998927
                      ],
                      [
                        77.73479461669922,
                        12.970434639348912
                      ],
                      [
                        77.7444076538086,
                        12.97846402705198
                      ],
                      [
                        77.74681091308594,
                        12.996194672676623
                      ],
                      [
                        77.74887084960936,
                        13.012586029874111
                      ],
                      [
                        77.71076202392578,
                        13.016934575463706
                      ]
                    ]
                  ]
                }
                }},'layout': {},
                'paint': {
                'fill-color': '#088',
                'fill-opacity': 0.4
                }
                });

                map.addLayer( {
                    'id': 'majestic',
                    'type': 'fill',
                    'source': {
                    'type': 'geojson',
                    'data': {
                    'type': 'Feature',
                    'geometry': {
                    'type': 'Polygon',
                    "coordinates": [
                        [
                          [
                            77.56587982177734,
                            12.998201835817282
                          ],
                          [
                            77.552490234375,
                            12.981140431998927
                          ],
                          [
                            77.56227493286133,
                            12.960564828571133
                          ],
                          [
                            77.57566452026367,
                            12.956884459972992
                          ],
                          [
                            77.58459091186523,
                            12.972609290782918
                          ],
                          [
                            77.58441925048828,
                            12.983649535462737
                          ],
                          [
                            77.57806777954102,
                            12.993852961834985
                          ],
                          [
                            77.56587982177734,
                            12.998201835817282
                          ]
                        ]
                      ]
                    }
                    }},'layout': {},
                    'paint': {
                    'fill-color': '#088',
                    'fill-opacity': 0.4
                    }
                    });

                    map.addLayer( {
                        'id': 'lalbagh',
                        'type': 'fill',
                        'source': {
                        'type': 'geojson',
                        'data': {
                        'type': 'Feature',
                        'geometry': {
                        'type': 'Polygon',
                        "coordinates": [
                            [
                              [
                                77.5802993774414,
                                12.96457971408171
                              ],
                              [
                                77.56725311279297,
                                12.94701411205675
                              ],
                              [
                                77.57926940917969,
                                12.934801106649838
                              ],
                              [
                                77.59283065795898,
                                12.931789588745032
                              ],
                              [
                                77.61085510253906,
                                12.946846814654458
                              ],
                              [
                                77.59540557861328,
                                12.958055492245812
                              ],
                              [
                                77.58819580078125,
                                12.96725626844151
                              ],
                              [
                                77.5802993774414,
                                12.96457971408171
                              ]
                            ]
                          ]
                        }
                        }},'layout': {},
                        'paint': {
                        'fill-color': '#088',
                        'fill-opacity': 0.4
                        }
                        });

                        map.addLayer( {
                            'id': 'silkboard',
                            'type': 'fill',
                            'source': {
                            'type': 'geojson',
                            'data': {
                            'type': 'Feature',
                            'geometry': {
                            'type': 'Polygon',
                            "coordinates": [
                                [
                                  [
                                    77.62021064758301,
                                    12.92308944399496
                                  ],
                                  [
                                    77.61445999145508,
                                    12.9158948645401
                                  ],
                                  [
                                    77.61978149414062,
                                    12.91120991072029
                                  ],
                                  [
                                    77.62578964233398,
                                    12.907612475859958
                                  ],
                                  [
                                    77.62948036193848,
                                    12.913552398609209
                                  ],
                                  [
                                    77.62845039367676,
                                    12.920914360434463
                                  ],
                                  [
                                    77.62021064758301,
                                    12.92308944399496
                                  ]
                                ]
                              ]
                            }
                            }},'layout': {},
                            'paint': {
                            'fill-color': '#088',
                            'fill-opacity': 0.4
                            }
                            });

                            
                        map.addLayer( {
                            'id': 'mgroad',
                            'type': 'fill',
                            'source': {
                            'type': 'geojson',
                            'data': {
                            'type': 'Feature',
                            'geometry': {
                            'type': 'Polygon',
                            "coordinates": [
                                [
                                  [
                                    77.59265899658202,
                                    12.995358349911545
                                  ],
                                  [
                                    77.58407592773438,
                                    12.982980443682667
                                  ],
                                  [
                                    77.58459091186523,
                                    12.972107449831796
                                  ],
                                  [
                                    77.5799560546875,
                                    12.964077856934454
                                  ],
                                  [
                                    77.5883674621582,
                                    12.967423552133118
                                  ],
                                  [
                                    77.59883880615234,
                                    12.965416140411577
                                  ],
                                  [
                                    77.61480331420898,
                                    12.967088984637462
                                  ],
                                  [
                                    77.61857986450195,
                                    12.973780249064331
                                  ],
                                  [
                                    77.61531829833984,
                                    12.986325884566712
                                  ],
                                  [
                                    77.60450363159178,
                                    12.992849364713313
                                  ],
                                  [
                                    77.59300231933592,
                                    12.99468928967105
                                  ],
                                  [
                                    77.59265899658202,
                                    12.995358349911545
                                  ]
                                ]
                              ]
                            }
                            }},'layout': {},
                            'paint': {
                            'fill-color': '#088',
                            'fill-opacity': 0.4
                            }
                            });

                                   
                        map.addLayer( {
                            'id': 'attiguppe',
                            'type': 'fill',
                            'source': {
                            'type': 'geojson',
                            'data': {
                            'type': 'Feature',
                            'geometry': {
                                "coordinates": [
                                    [
                                      [
                                        77.53043174743652,
                                        12.981307706351258
                                      ],
                                      [
                                        77.52339363098145,
                                        12.963826927981339
                                      ],
                                      [
                                        77.53498077392578,
                                        12.950276388953625
                                      ],
                                      [
                                        77.54227638244629,
                                        12.958975585168197
                                      ],
                                      [
                                        77.54639625549316,
                                        12.970267357681905
                                      ],
                                      [
                                        77.54193305969238,
                                        12.981307706351258
                                      ],
                                      [
                                        77.53043174743652,
                                        12.981307706351258
                                      ]
                                    ]
                                  ]
                            }
                            }},'layout': {},
                            'paint': {
                            'fill-color': '#088',
                            'fill-opacity': 0.4
                            }
                            });

                            map.addLayer( {
                                'id': 'nagabhavi',
                                'type': 'fill',
                                'source': {
                                'type': 'geojson',
                                'data': {
                                'type': 'Feature',
                                'geometry': {
                                'type': 'Polygon',
                                "coordinates": [
                                    [
                                      [
                                        77.50897407531738,
                                        12.980973157534004
                                      ],
                                      [
                                        77.49910354614258,
                                        12.966085279451407
                                      ],
                                      [
                                        77.50648498535156,
                                        12.955211547173878
                                      ],
                                      [
                                        77.52184867858887,
                                        12.960564828571133
                                      ],
                                      [
                                        77.52553939819336,
                                        12.969430947659568
                                      ],
                                      [
                                        77.52184867858887,
                                        12.978714941239877
                                      ],
                                      [
                                        77.50897407531738,
                                        12.980973157534004
                                      ]
                                    ]
                                  ]
                                }
                                }},'layout': {},
                                'paint': {
                                'fill-color': '#088',
                                'fill-opacity': 0.4
                                }
                                });

                                
                                map.addLayer( {
                                    'id': 'chamrajpete',
                                    'type': 'fill',
                                    'source': {
                                    'type': 'geojson',
                                    'data': {
                                    'type': 'Feature',
                                    'geometry': {
                                    'type': 'Polygon',
                                    "coordinates": [
                                        [
                                          [
                                            77.55017280578613,
                                            12.975453037045146
                                          ],
                                          [
                                            77.54631042480467,
                                            12.970936483674985
                                          ],
                                          [
                                            77.54227638244629,
                                            12.95905922981074
                                          ],
                                          [
                                            77.55274772644043,
                                            12.94701411205675
                                          ],
                                          [
                                            77.56390571594238,
                                            12.944839237067944
                                          ],
                                          [
                                            77.56708145141602,
                                            12.946846814654458
                                          ],
                                          [
                                            77.57463455200195,
                                            12.956968105317966
                                          ],
                                          [
                                            77.56218910217285,
                                            12.960648472679763
                                          ],
                                          [
                                            77.55240440368652,
                                            12.981140431998927
                                          ],
                                          [
                                            77.55017280578613,
                                            12.975453037045146
                                          ]
                                        ]
                                      ]
                                    }
                                    }},'layout': {},
                                    'paint': {
                                    'fill-color': '#088',
                                    'fill-opacity': 0.4
                                    }
                                    });

                                    
                                    map.addLayer( {
                                        'id': 'jpnagar',
                                        'type': 'fill',
                                        'source': {
                                        'type': 'geojson',
                                        'data': {
                                        'type': 'Feature',
                                        'geometry': {
                                        'type': 'Polygon',
                                        "coordinates": [
                                            [
                                              [
                                                77.58630752563477,
                                                12.922922130547533
                                              ],
                                              [
                                                77.56708145141602,
                                                12.906524869083215
                                              ],
                                              [
                                                77.5741195678711,
                                                12.895146545397603
                                              ],
                                              [
                                                77.58424758911133,
                                                12.889289853571185
                                              ],
                                              [
                                                77.60004043579102,
                                                12.901337756300377
                                              ],
                                              [
                                                77.6022720336914,
                                                12.916731454193258
                                              ],
                                              [
                                                77.59368896484375,
                                                12.925933755447648
                                              ],
                                              [
                                                77.58630752563477,
                                                12.922922130547533
                                              ]
                                            ]
                                          ]
                                        }
                                        }},'layout': {},
                                        'paint': {
                                        'fill-color': '#088',
                                        'fill-opacity': 0.4
                                        }
                                        });

                                        
                                        map.addLayer( {
                                            'id': 'jayanagar',
                                            'type': 'fill',
                                            'source': {
                                            'type': 'geojson',
                                            'data': {
                                            'type': 'Feature',
                                            'geometry': {
                                            'type': 'Polygon',
                                            "coordinates": [
                                                [
                                                  [
                                                    77.5978946685791,
                                                    12.93613954738338
                                                  ],
                                                  [
                                                    77.59274482727051,
                                                    12.931705934951028
                                                  ],
                                                  [
                                                    77.57935523986816,
                                                    12.934801106649838
                                                  ],
                                                  [
                                                    77.57497787475586,
                                                    12.939485617796052
                                                  ],
                                                  [
                                                    77.57583618164062,
                                                    12.924595259976796
                                                  ],
                                                  [
                                                    77.57180213928223,
                                                    12.910791607001212
                                                  ],
                                                  [
                                                    77.59394645690918,
                                                    12.926017411176307
                                                  ],
                                                  [
                                                    77.59695053100585,
                                                    12.922587503316352
                                                  ],
                                                  [
                                                    77.59523391723633,
                                                    12.92877803449454
                                                  ],
                                                  [
                                                    77.5978946685791,
                                                    12.93613954738338
                                                  ]
                                                ]
                                              ]
                                            }
                                            }},'layout': {},
                                            'paint': {
                                            'fill-color': '#088',
                                            'fill-opacity': 0.4
                                            }
                                            });

                                            
                                            map.addLayer( {
                                                'id': 'bannerghata',
                                                'type': 'fill',
                                                'source': {
                                                'type': 'geojson',
                                                'data': {
                                                'type': 'Feature',
                                                'geometry': {
                                                'type': 'Polygon',
                                                "coordinates": [
                                                    [
                                                      [
                                                        77.60690689086914,
                                                        12.94383544221124
                                                      ],
                                                      [
                                                        77.59798049926758,
                                                        12.935470327914269
                                                      ],
                                                      [
                                                        77.59523391723633,
                                                        12.928443415112369
                                                      ],
                                                      [
                                                        77.59729385375977,
                                                        12.922252875636763
                                                      ],
                                                      [
                                                        77.60210037231445,
                                                        12.916062182694839
                                                      ],
                                                      [
                                                        77.61480331420898,
                                                        12.916062182694839
                                                      ],
                                                      [
                                                        77.62029647827147,
                                                        12.922754816987997
                                                      ],
                                                      [
                                                        77.60690689086914,
                                                        12.94383544221124
                                                      ]
                                                    ]
                                                  ]
                                                }
                                                }},'layout': {},
                                                'paint': {
                                                'fill-color': '#088',
                                                'fill-opacity': 0.4
                                                }
                                                });

                                                
                                                map.addLayer( {
                                                    'id': 'banashankari',
                                                    'type': 'fill',
                                                    'source': {
                                                    'type': 'geojson',
                                                    'data': {
                                                    'type': 'Feature',
                                                    'geometry': {
                                                    'type': 'Polygon',
                                                    "coordinates": [
                                                        [
                                                          [
                                                            77.55266189575195,
                                                            12.94663769274367
                                                          ],
                                                          [
                                                            77.54193305969238,
                                                            12.933462658735326
                                                          ],
                                                          [
                                                            77.54596710205077,
                                                            12.926184722549516
                                                          ],
                                                          [
                                                            77.55163192749023,
                                                            12.919324864314307
                                                          ],
                                                          [
                                                            77.56261825561523,
                                                            12.916062182694839
                                                          ],
                                                          [
                                                            77.57326126098631,
                                                            12.915225590800675
                                                          ],
                                                          [
                                                            77.57566452026367,
                                                            12.924929884517253
                                                          ],
                                                          [
                                                            77.57497787475586,
                                                            12.938983710096016
                                                          ],
                                                          [
                                                            77.56725311279297,
                                                            12.946512219512973
                                                          ],
                                                          [
                                                            77.56416320800781,
                                                            12.944839237067944
                                                          ],
                                                          [
                                                            77.55266189575195,
                                                            12.94663769274367
                                                          ]
                                                        ]
                                                      ]
                                                    }
                                                    }},'layout': {},
                                                    'paint': {
                                                    'fill-color': '#088',
                                                    'fill-opacity': 0.4
                                                    }
                                                    });

                                                    
                                                    map.addLayer( {
                                                        'id': 'halasuru',
                                                        'type': 'fill',
                                                        'source': {
                                                        'type': 'geojson',
                                                        'data': {
                                                        'type': 'Feature',
                                                        'geometry': {
                                                        'type': 'Polygon',
                                                        "coordinates": [
                                                            [
                                                              [
                                                                77.62252807617188,
                                                                12.990758524349273
                                                              ],
                                                              [
                                                                77.61531829833984,
                                                                12.986409520011689
                                                              ],
                                                              [
                                                                77.618408203125,
                                                                12.97419844711443
                                                              ],
                                                              [
                                                                77.6250171661377,
                                                                12.96457971408171
                                                              ],
                                                              [
                                                                77.63772010803221,
                                                                12.971772888635215
                                                              ],
                                                              [
                                                                77.63257026672363,
                                                                12.984151353115545
                                                              ],
                                                              [
                                                                77.62707710266113,
                                                                12.990758524349273
                                                              ],
                                                              [
                                                                77.62252807617188,
                                                                12.990758524349273
                                                              ]
                                                            ]
                                                          ]
                                                        }
                                                        }},'layout': {},
                                                        'paint': {
                                                        'fill-color': '#088',
                                                        'fill-opacity': 0.4
                                                        }
                                                        });
                                                        map.addLayer( {
                                                            'id': 'indiranagara',
                                                            'type': 'fill',
                                                            'source': {
                                                            'type': 'geojson',
                                                            'data': {
                                                            'type': 'Feature',
                                                            'geometry': {
                                                            'type': 'Polygon',
                                                            "coordinates": [
                                                                [
                                                                  [
                                                                    77.63068199157715,
                                                                    12.986827696814244
                                                                  ],
                                                                  [
                                                                    77.63257026672363,
                                                                    12.983649535462737
                                                                  ],
                                                                  [
                                                                    77.63772010803221,
                                                                    12.972107449831796
                                                                  ],
                                                                  [
                                                                    77.6341152191162,
                                                                    12.969598229889
                                                                  ],
                                                                  [
                                                                    77.63566017150879,
                                                                    12.959310163569734
                                                                  ],
                                                                  [
                                                                    77.6436424255371,
                                                                    12.959979319023999
                                                                  ],
                                                                  [
                                                                    77.6542854309082,
                                                                    12.9641614998626
                                                                  ],
                                                                  [
                                                                    77.65179634094238,
                                                                    12.976038510179967
                                                                  ],
                                                                  [
                                                                    77.6392650604248,
                                                                    12.993936594745351
                                                                  ],
                                                                  [
                                                                    77.63068199157715,
                                                                    12.986827696814244
                                                                  ]
                                                                ]
                                                              ]
                                                            }
                                                            }},'layout': {},
                                                            'paint': {
                                                            'fill-color': '#088',
                                                            'fill-opacity': 0.4
                                                            }
                                                            });

                                                            map.addLayer( {
                                                                'id': 'marathahalli',
                                                                'type': 'fill',
                                                                'source': {
                                                                'type': 'geojson',
                                                                'data': {
                                                                'type': 'Feature',
                                                                'geometry': {
                                                                'type': 'Polygon',
                                                                "coordinates": [
                                                                    [
                                                                      [
                                                                        77.70200729370117,
                                                                        12.971438326988622
                                                                      ],
                                                                      [
                                                                        77.68346786499023,
                                                                        12.958390071883693
                                                                      ],
                                                                      [
                                                                        77.70097732543945,
                                                                        12.93982022236821
                                                                      ],
                                                                      [
                                                                        77.7253532409668,
                                                                        12.945675729694095
                                                                      ],
                                                                      [
                                                                        77.72209167480469,
                                                                        12.965583425340219
                                                                      ],
                                                                      [
                                                                        77.70269393920898,
                                                                        12.97511848034919
                                                                      ],
                                                                      [
                                                                        77.70200729370117,
                                                                        12.971438326988622
                                                                      ]
                                                                    ]
                                                                  ]
                                                                }
                                                                }},'layout': {},
                                                                'paint': {
                                                                'fill-color': '#088',
                                                                'fill-opacity': 0.4
                                                                }
                                                                });

                                                                map.addLayer( {
                                                                    'id': 'hennur',
                                                                    'type': 'fill',
                                                                    'source': {
                                                                    'type': 'geojson',
                                                                    'data': {
                                                                    'type': 'Feature',
                                                                    'geometry': {
                                                                    'type': 'Polygon',
                                                                    "coordinates": [
                                                                        [
                                                                          [
                                                                            77.62956619262695,
                                                                            13.039177864782022
                                                                          ],
                                                                          [
                                                                            77.61068344116211,
                                                                            13.026802145870064
                                                                          ],
                                                                          [
                                                                            77.62338638305664,
                                                                            13.010244473731893
                                                                          ],
                                                                          [
                                                                            77.6348876953125,
                                                                            13.006397583498742
                                                                          ],
                                                                          [
                                                                            77.65050888061523,
                                                                            13.019945062332502
                                                                          ],
                                                                          [
                                                                            77.6429557800293,
                                                                            13.038174451167263
                                                                          ],
                                                                          [
                                                                            77.62956619262695,
                                                                            13.039177864782022
                                                                          ]
                                                                        ]
                                                                      ]
                                                                    }
                                                                    }},'layout': {},
                                                                    'paint': {
                                                                    'fill-color': '#088',
                                                                    'fill-opacity': 0.4
                                                                    }
                                                                    });

                                                                    map.addLayer( {
                                                                        'id': 'coxtown',
                                                                        'type': 'fill',
                                                                        'source': {
                                                                        'type': 'geojson',
                                                                        'data': {
                                                                        'type': 'Feature',
                                                                        'geometry': {
                                                                        'type': 'Polygon',
                                                                        "coordinates": [
                                                                            [
                                                                              [
                                                                                77.6179790496826,
                                                                                13.010662610379068
                                                                              ],
                                                                              [
                                                                                77.6059627532959,
                                                                                13.001128919635747
                                                                              ],
                                                                              [
                                                                                77.61016845703125,
                                                                                12.990674890368561
                                                                              ],
                                                                              [
                                                                                77.61531829833984,
                                                                                12.986409520011689
                                                                              ],
                                                                              [
                                                                                77.62261390686035,
                                                                                12.990758524349273
                                                                              ],
                                                                              [
                                                                                77.62733459472656,
                                                                                12.990758524349273
                                                                              ],
                                                                              [
                                                                                77.63583183288574,
                                                                                12.994103860481585
                                                                              ],
                                                                              [
                                                                                77.63299942016602,
                                                                                13.005477666124948
                                                                              ],
                                                                              [
                                                                                77.62390136718749,
                                                                                13.009742708824602
                                                                              ],
                                                                              [
                                                                                77.6179790496826,
                                                                                13.010662610379068
                                                                              ]
                                                                            ]
                                                                          ]
                                                                        }
                                                                        }},'layout': {},
                                                                        'paint': {
                                                                        'fill-color': '#088',
                                                                        'fill-opacity': 0.4
                                                                        }
                                                                        });

                                                                        map.addLayer( {
                                                                            'id': 'baiyappanahalli',
                                                                            'type': 'fill',
                                                                            'source': {
                                                                            'type': 'geojson',
                                                                            'data': {
                                                                            'type': 'Feature',
                                                                            'geometry': {
                                                                            'type': 'Polygon',
                                                                            "coordinates": [
                                                                                [
                                                                                  [
                                                                                    77.6179790496826,
                                                                                    13.010662610379068
                                                                                  ],
                                                                                  [
                                                                                    77.6059627532959,
                                                                                    13.001128919635747
                                                                                  ],
                                                                                  [
                                                                                    77.61016845703125,
                                                                                    12.990674890368561
                                                                                  ],
                                                                                  [
                                                                                    77.61531829833984,
                                                                                    12.986409520011689
                                                                                  ],
                                                                                  [
                                                                                    77.62261390686035,
                                                                                    12.990758524349273
                                                                                  ],
                                                                                  [
                                                                                    77.62733459472656,
                                                                                    12.990758524349273
                                                                                  ],
                                                                                  [
                                                                                    77.63583183288574,
                                                                                    12.994103860481585
                                                                                  ],
                                                                                  [
                                                                                    77.63299942016602,
                                                                                    13.005477666124948
                                                                                  ],
                                                                                  [
                                                                                    77.62390136718749,
                                                                                    13.009742708824602
                                                                                  ],
                                                                                  [
                                                                                    77.6179790496826,
                                                                                    13.010662610379068
                                                                                  ]
                                                                                ]
                                                                              ]
                                                                            }
                                                                            }},'layout': {},
                                                                            'paint': {
                                                                            'fill-color': '#088',
                                                                            'fill-opacity': 0.4
                                                                            }
                                                                            });
                                                                            map.addLayer( {
                                                                                'id': 'cvramannagar',
                                                                                'type': 'fill',
                                                                                'source': {
                                                                                'type': 'geojson',
                                                                                'data': {
                                                                                'type': 'Feature',
                                                                                'geometry': {
                                                                                'type': 'Polygon',
                                                                                "coordinates": [
                                                                                    [
                                                                                      [
                                                                                        77.65986442565918,
                                                                                        12.988500396985364
                                                                                      ],
                                                                                      [
                                                                                        77.64690399169922,
                                                                                        12.984820441742858
                                                                                      ],
                                                                                      [
                                                                                        77.65205383300781,
                                                                                        12.975954871245108
                                                                                      ],
                                                                                      [
                                                                                        77.66578674316406,
                                                                                        12.969765512005967
                                                                                      ],
                                                                                      [
                                                                                        77.6777172088623,
                                                                                        12.971605607868163
                                                                                      ],
                                                                                      [
                                                                                        77.67977714538574,
                                                                                        12.985238621220006
                                                                                      ],
                                                                                      [
                                                                                        77.66647338867188,
                                                                                        12.992096664210194
                                                                                      ],
                                                                                      [
                                                                                        77.65986442565918,
                                                                                        12.988500396985364
                                                                                      ]
                                                                                    ]
                                                                                  ]
                                                                                }
                                                                                }},'layout': {},
                                                                                'paint': {
                                                                                'fill-color': '#088',
                                                                                'fill-opacity': 0.4
                                                                                }
                                                                                });

                                                                                map.addLayer( {
                                                                                    'id': 'mahadevpura',
                                                                                    'type': 'fill',
                                                                                    'source': {
                                                                                    'type': 'geojson',
                                                                                    'data': {
                                                                                    'type': 'Feature',
                                                                                    'geometry': {
                                                                                    'type': 'Polygon',
                                                                                    "coordinates": [
                                                                                        [
                                                                                          [
                                                                                            77.68793106079102,
                                                                                            12.999874459369373
                                                                                          ],
                                                                                          [
                                                                                            77.68097877502441,
                                                                                            12.99268209813202
                                                                                          ],
                                                                                          [
                                                                                            77.68003463745117,
                                                                                            12.984904077694598
                                                                                          ],
                                                                                          [
                                                                                            77.68389701843262,
                                                                                            12.981893165697903
                                                                                          ],
                                                                                          [
                                                                                            77.69659996032713,
                                                                                            12.979216768855913
                                                                                          ],
                                                                                          [
                                                                                            77.70003318786621,
                                                                                            12.987162237749484
                                                                                          ],
                                                                                          [
                                                                                            77.6949691772461,
                                                                                            12.996027408348994
                                                                                          ],
                                                                                          [
                                                                                            77.68793106079102,
                                                                                            12.999874459369373
                                                                                          ]
                                                                                        ]
                                                                                      ]
                                                                                    }
                                                                                    }},'layout': {},
                                                                                    'paint': {
                                                                                    'fill-color': '#088',
                                                                                    'fill-opacity': 0.4
                                                                                    }
                                                                                    });

                                                                                    map.addLayer( {
                                                                                        'id': 'krpura',
                                                                                        'type': 'fill',
                                                                                        'source': {
                                                                                        'type': 'geojson',
                                                                                        'data': {
                                                                                        'type': 'Feature',
                                                                                        'geometry': {
                                                                                        'type': 'Polygon',
                                                                                        "coordinates": [
                                                                                            [
                                                                                              [
                                                                                                77.68655776977539,
                                                                                                13.013255041853022
                                                                                              ],
                                                                                              [
                                                                                                77.67848968505858,
                                                                                                13.008739175964257
                                                                                              ],
                                                                                              [
                                                                                                77.67145156860352,
                                                                                                12.99970719752142
                                                                                              ],
                                                                                              [
                                                                                                77.67806053161621,
                                                                                                12.998870886590765
                                                                                              ],
                                                                                              [
                                                                                                77.68818855285645,
                                                                                                13.000125351929944
                                                                                              ],
                                                                                              [
                                                                                                77.69514083862305,
                                                                                                12.996361936891546
                                                                                              ],
                                                                                              [
                                                                                                77.69651412963867,
                                                                                                13.01166613545545
                                                                                              ],
                                                                                              [
                                                                                                77.68655776977539,
                                                                                                13.013255041853022
                                                                                              ]
                                                                                            ]
                                                                                          ]
                                                                                        }
                                                                                        }},'layout': {},
                                                                                        'paint': {
                                                                                        'fill-color': '#088',
                                                                                        'fill-opacity': 0.4
                                                                                        }
                                                                                        });

                                                                                        map.addLayer( {
                                                                                            'id': 'rammurthynagar',
                                                                                            'type': 'fill',
                                                                                            'source': {
                                                                                            'type': 'geojson',
                                                                                            'data': {
                                                                                            'type': 'Feature',
                                                                                            'geometry': {
                                                                                            'type': 'Polygon',
                                                                                            "coordinates": [
                                                                                                [
                                                                                                  [
                                                                                                    77.66853332519531,
                                                                                                    13.018774321784901
                                                                                                  ],
                                                                                                  [
                                                                                                    77.66321182250977,
                                                                                                    13.013255041853022
                                                                                                  ],
                                                                                                  [
                                                                                                    77.66355514526367,
                                                                                                    13.005895810808672
                                                                                                  ],
                                                                                                  [
                                                                                                    77.67170906066895,
                                                                                                    12.999790828459487
                                                                                                  ],
                                                                                                  [
                                                                                                    77.67883300781249,
                                                                                                    13.009073687368925
                                                                                                  ],
                                                                                                  [
                                                                                                    77.68638610839842,
                                                                                                    13.01308778902755
                                                                                                  ],
                                                                                                  [
                                                                                                    77.68235206604004,
                                                                                                    13.019276068411179
                                                                                                  ],
                                                                                                  [
                                                                                                    77.66853332519531,
                                                                                                    13.018774321784901
                                                                                                  ]
                                                                                                ]
                                                                                              ]
                                                                                            }
                                                                                            }},'layout': {},
                                                                                            'paint': {
                                                                                            'fill-color': '#088',
                                                                                            'fill-opacity': 0.4
                                                                                            }
                                                                                            });

                                                                                            map.addLayer( {
                                                                                                'id': 'doorvaninagar',
                                                                                                'type': 'fill',
                                                                                                'source': {
                                                                                                'type': 'geojson',
                                                                                                'data': {
                                                                                                'type': 'Feature',
                                                                                                'geometry': {
                                                                                                'type': 'Polygon',
                                                                                                "coordinates": [
                                                                                                    [
                                                                                                      [
                                                                                                        77.67119407653809,
                                                                                                        12.999958090251068
                                                                                                      ],
                                                                                                      [
                                                                                                        77.6638126373291,
                                                                                                        13.000961658633285
                                                                                                      ],
                                                                                                      [
                                                                                                        77.66561508178711,
                                                                                                        12.993852961834985
                                                                                                      ],
                                                                                                      [
                                                                                                        77.66939163208008,
                                                                                                        12.990674890368561
                                                                                                      ],
                                                                                                      [
                                                                                                        77.67471313476562,
                                                                                                        12.988333127475098
                                                                                                      ],
                                                                                                      [
                                                                                                        77.67986297607422,
                                                                                                        12.98540589281379
                                                                                                      ],
                                                                                                      [
                                                                                                        77.68115043640137,
                                                                                                        12.993183897537897
                                                                                                      ],
                                                                                                      [
                                                                                                        77.68758773803711,
                                                                                                        12.999874459369373
                                                                                                      ],
                                                                                                      [
                                                                                                        77.67831802368164,
                                                                                                        12.998787255342709
                                                                                                      ],
                                                                                                      [
                                                                                                        77.67119407653809,
                                                                                                        12.999958090251068
                                                                                                      ]
                                                                                                    ]
                                                                                                  ]
                                                                                                }
                                                                                                }},'layout': {},
                                                                                                'paint': {
                                                                                                'fill-color': '#088',
                                                                                                'fill-opacity': 0.4
                                                                                                }
                                                                                                });

                                                                                                map.addLayer( {
                                                                                                    'id': 'hal',
                                                                                                    'type': 'fill',
                                                                                                    'source': {
                                                                                                    'type': 'geojson',
                                                                                                    'data': {
                                                                                                    'type': 'Feature',
                                                                                                    'geometry': {
                                                                                                    'type': 'Polygon',
                                                                                                    "coordinates": [
                                                                                                        [
                                                                                                          [
                                                                                                            77.65531539916992,
                                                                                                            12.972191090060631
                                                                                                          ],
                                                                                                          [
                                                                                                            77.65437126159668,
                                                                                                            12.964496071294105
                                                                                                          ],
                                                                                                          [
                                                                                                            77.64467239379883,
                                                                                                            12.954207794100693
                                                                                                          ],
                                                                                                          [
                                                                                                            77.63875007629395,
                                                                                                            12.943668142675493
                                                                                                          ],
                                                                                                          [
                                                                                                            77.65737533569336,
                                                                                                            12.944253690559432
                                                                                                          ],
                                                                                                          [
                                                                                                            77.6718807220459,
                                                                                                            12.945759378802302
                                                                                                          ],
                                                                                                          [
                                                                                                            77.68698692321777,
                                                                                                            12.944755587650944
                                                                                                          ],
                                                                                                          [
                                                                                                            77.68389701843262,
                                                                                                            12.957971847266093
                                                                                                          ],
                                                                                                          [
                                                                                                            77.68192291259766,
                                                                                                            12.965834352522323
                                                                                                          ],
                                                                                                          [
                                                                                                            77.66595840454102,
                                                                                                            12.969765512005967
                                                                                                          ],
                                                                                                          [
                                                                                                            77.6572036743164,
                                                                                                            12.972860210878759
                                                                                                          ],
                                                                                                          [
                                                                                                            77.65531539916992,
                                                                                                            12.972191090060631
                                                                                                          ]
                                                                                                        ]
                                                                                                      ]
                                                                                                    }
                                                                                                    }},'layout': {},
                                                                                                    'paint': {
                                                                                                    'fill-color': '#088',
                                                                                                    'fill-opacity': 0.4
                                                                                                    }
                                                                                                    });

                                                                                                    map.addLayer( {
                                                                                                        'id': 'bellandur',
                                                                                                        'type': 'fill',
                                                                                                        'source': {
                                                                                                        'type': 'geojson',
                                                                                                        'data': {
                                                                                                        'type': 'Feature',
                                                                                                        'geometry': {
                                                                                                        'type': 'Polygon',
                                                                                                        "coordinates": [
                                                                                                            [
                                                                                                              [
                                                                                                                77.6513671875,
                                                                                                                12.944170040945936
                                                                                                              ],
                                                                                                              [
                                                                                                                77.63505935668945,
                                                                                                                12.929781889949297
                                                                                                              ],
                                                                                                              [
                                                                                                                77.6513671875,
                                                                                                                12.923591383664585
                                                                                                              ],
                                                                                                              [
                                                                                                                77.67797470092773,
                                                                                                                12.919073890318037
                                                                                                              ],
                                                                                                              [
                                                                                                                77.68861770629883,
                                                                                                                12.932793432085438
                                                                                                              ],
                                                                                                              [
                                                                                                                77.68758773803711,
                                                                                                                12.94433734014486
                                                                                                              ],
                                                                                                              [
                                                                                                                77.67059326171874,
                                                                                                                12.945508431393435
                                                                                                              ],
                                                                                                              [
                                                                                                                77.6513671875,
                                                                                                                12.944170040945936
                                                                                                              ]
                                                                                                            ]
                                                                                                          ]
                                                                                                        }
                                                                                                        }},'layout': {},
                                                                                                        'paint': {
                                                                                                        'fill-color': '#088',
                                                                                                        'fill-opacity': 0.4
                                                                                                        }
                                                                                                        });
    
    
    
                                                                                                        map.addLayer( {
                                                                                                            'id': 'koramanagala',
                                                                                                            'type': 'fill',
                                                                                                            'source': {
                                                                                                            'type': 'geojson',
                                                                                                            'data': {
                                                                                                            'type': 'Feature',
                                                                                                            'geometry': {
                                                                                                            'type': 'Polygon',
                                                                                                            "coordinates": [
                                                                                                                [
                                                                                                                  [
                                                                                                                    77.62304306030273,
                                                                                                                    12.95337133011648
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.61128425598145,
                                                                                                                    12.946679517139852
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.60750770568848,
                                                                                                                    12.943751792457405
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.61763572692871,
                                                                                                                    12.92693762234132
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.6290512084961,
                                                                                                                    12.927355899022224
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.63514518737793,
                                                                                                                    12.927355899022224
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.6348876953125,
                                                                                                                    12.929949198799196
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.63591766357422,
                                                                                                                    12.942329742347692
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.62304306030273,
                                                                                                                    12.95337133011648
                                                                                                                  ]
                                                                                                                ]
                                                                                                              ]
                                                                                                            }
                                                                                                            }},'layout': {},
                                                                                                            'paint': {
                                                                                                            'fill-color': '#088',
                                                                                                            'fill-opacity': 0.4
                                                                                                            }
                                                                                                            });

                                                                                                            
                                                                                                    map.addLayer( {
                                                                                                        'id': 'sarjapura',
                                                                                                        'type': 'fill',
                                                                                                        'source': {
                                                                                                        'type': 'geojson',
                                                                                                        'data': {
                                                                                                        'type': 'Feature',
                                                                                                        'geometry': {
                                                                                                        'type': 'Polygon',
                                                                                                        "coordinates": [
                                                                                                            [
                                                                                                              [
                                                                                                                77.61746406555176,
                                                                                                                12.926770311472724
                                                                                                              ],
                                                                                                              [
                                                                                                                77.62038230895996,
                                                                                                                12.922838473781772
                                                                                                              ],
                                                                                                              [
                                                                                                                77.62819290161131,
                                                                                                                12.921165332581365
                                                                                                              ],
                                                                                                              [
                                                                                                                77.6290512084961,
                                                                                                                12.916898771787722
                                                                                                              ],
                                                                                                              [
                                                                                                                77.63626098632812,
                                                                                                                12.916062182694839
                                                                                                              ],
                                                                                                              [
                                                                                                                77.64510154724121,
                                                                                                                12.915978523631482
                                                                                                              ],
                                                                                                              [
                                                                                                                77.65007972717285,
                                                                                                                12.921081675227088
                                                                                                              ],
                                                                                                              [
                                                                                                                77.64956474304198,
                                                                                                                12.92409332232521
                                                                                                              ],
                                                                                                              [
                                                                                                                77.64192581176758,
                                                                                                                12.927355899022224
                                                                                                              ],
                                                                                                              [
                                                                                                                77.63471603393555,
                                                                                                                12.927188588433975
                                                                                                              ],
                                                                                                              [
                                                                                                                77.61746406555176,
                                                                                                                12.926770311472724
                                                                                                              ]
                                                                                                            ]
                                                                                                          ]
                                                                                                        }
                                                                                                        }},'layout': {},
                                                                                                        'paint': {
                                                                                                        'fill-color': '#088',
                                                                                                        'fill-opacity': 0.4
                                                                                                        }
                                                                                                        });

                                                                                                        
                                                                                                    map.addLayer( {
                                                                                                        'id': 'hsrlayout',
                                                                                                        'type': 'fill',
                                                                                                        'source': {
                                                                                                        'type': 'geojson',
                                                                                                        'data': {
                                                                                                        'type': 'Feature',
                                                                                                        'geometry': {
                                                                                                        'type': 'Polygon',
                                                                                                        "coordinates": [
                                                                                                            [
                                                                                                              [
                                                                                                                77.62999534606934,
                                                                                                                12.914054357443035
                                                                                                              ],
                                                                                                              [
                                                                                                                77.62733459472656,
                                                                                                                12.909954997462895
                                                                                                              ],
                                                                                                              [
                                                                                                                77.63102531433105,
                                                                                                                12.90468429299146
                                                                                                              ],
                                                                                                              [
                                                                                                                77.64209747314453,
                                                                                                                12.899748135686973
                                                                                                              ],
                                                                                                              [
                                                                                                                77.65368461608887,
                                                                                                                12.904349641337435
                                                                                                              ],
                                                                                                              [
                                                                                                                77.65377044677734,
                                                                                                                12.9138870379438
                                                                                                              ],
                                                                                                              [
                                                                                                                77.6517105102539,
                                                                                                                12.920914360434463
                                                                                                              ],
                                                                                                              [
                                                                                                                77.64527320861815,
                                                                                                                12.916062182694839
                                                                                                              ],
                                                                                                              [
                                                                                                                77.63239860534668,
                                                                                                                12.91648047759144
                                                                                                              ],
                                                                                                              [
                                                                                                                77.62922286987305,
                                                                                                                12.916898771787722
                                                                                                              ],
                                                                                                              [
                                                                                                                77.62999534606934,
                                                                                                                12.914054357443035
                                                                                                              ]
                                                                                                            ]
                                                                                                          ]
                                                                                                        }
                                                                                                        }},'layout': {},
                                                                                                        'paint': {
                                                                                                        'fill-color': '#088',
                                                                                                        'fill-opacity': 0.4
                                                                                                        }
                                                                                                        });

                                                                                                        
                                                                                                    map.addLayer( {
                                                                                                        'id': 'avalahalli',
                                                                                                        'type': 'fill',
                                                                                                        'source': {
                                                                                                        'type': 'geojson',
                                                                                                        'data': {
                                                                                                        'type': 'Feature',
                                                                                                        'geometry': {
                                                                                                        'type': 'Polygon',
                                                                                                        "coordinates": [
                                                                                                            [
                                                                                                              [
                                                                                                                77.54000186920166,
                                                                                                                12.94960720743095
                                                                                                              ],
                                                                                                              [
                                                                                                                77.53339290618896,
                                                                                                                12.94504836048765
                                                                                                              ],
                                                                                                              [
                                                                                                                77.53772735595703,
                                                                                                                12.937938065809975
                                                                                                              ],
                                                                                                              [
                                                                                                                77.5435209274292,
                                                                                                                12.936348678099293
                                                                                                              ],
                                                                                                              [
                                                                                                                77.54785537719727,
                                                                                                                12.94195331596093
                                                                                                              ],
                                                                                                              [
                                                                                                                77.54601001739502,
                                                                                                                12.945843027882455
                                                                                                              ],
                                                                                                              [
                                                                                                                77.54000186920166,
                                                                                                                12.94960720743095
                                                                                                              ]
                                                                                                            ]
                                                                                                          ]
                                                                                                        }
                                                                                                        }},'layout': {},
                                                                                                        'paint': {
                                                                                                        'fill-color': '#088',
                                                                                                        'fill-opacity': 0.4
                                                                                                        }
                                                                                                        });

                                                                                                        
                                                                                                    map.addLayer( {
                                                                                                        'id': 'peenya',
                                                                                                        'type': 'fill',
                                                                                                        'source': {
                                                                                                        'type': 'geojson',
                                                                                                        'data': {
                                                                                                        'type': 'Feature',
                                                                                                        'geometry': {
                                                                                                        'type': 'Polygon',
                                                                                                        "coordinates": [
                                                                                                            [
                                                                                                              [
                                                                                                                77.52236366271973,
                                                                                                                13.050716828775348
                                                                                                              ],
                                                                                                              [
                                                                                                                77.52270698547363,
                                                                                                                13.050884056178823
                                                                                                              ],
                                                                                                              [
                                                                                                                77.52253532409668,
                                                                                                                13.050382373628981
                                                                                                              ],
                                                                                                              [
                                                                                                                77.50991821289062,
                                                                                                                13.045281876580876
                                                                                                              ],
                                                                                                              [
                                                                                                                77.50219345092773,
                                                                                                                13.038258069123922
                                                                                                              ],
                                                                                                              [
                                                                                                                77.51266479492188,
                                                                                                                13.022453773449994
                                                                                                              ],
                                                                                                              [
                                                                                                                77.52811431884766,
                                                                                                                13.018188949436896
                                                                                                              ],
                                                                                                              [
                                                                                                                77.53575325012207,
                                                                                                                13.025464193256362
                                                                                                              ],
                                                                                                              [
                                                                                                                77.53523826599121,
                                                                                                                13.040515743271143
                                                                                                              ],
                                                                                                              [
                                                                                                                77.52236366271973,
                                                                                                                13.050716828775348
                                                                                                              ]
                                                                                                            ]
                                                                                                          ]
                                                                                                        }
                                                                                                        }},'layout': {},
                                                                                                        'paint': {
                                                                                                        'fill-color': '#088',
                                                                                                        'fill-opacity': 0.4
                                                                                                        }
                                                                                                        });

                                                                                                        map.addLayer( {
                                                                                                            'id': 'jalahalli',
                                                                                                            'type': 'fill',
                                                                                                            'source': {
                                                                                                            'type': 'geojson',
                                                                                                            'data': {
                                                                                                            'type': 'Feature',
                                                                                                            'geometry': {
                                                                                                            'type': 'Polygon',
                                                                                                            "coordinates": [
                                                                                                                [
                                                                                                                  [
                                                                                                                    77.52691268920897,
                                                                                                                    13.064429100005883
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.53120422363281,
                                                                                                                    13.044445719485713
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.55077362060547,
                                                                                                                    13.039679570063303
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.57266044616699,
                                                                                                                    13.049379005474742
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.56982803344727,
                                                                                                                    13.06760622494917
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.56004333496094,
                                                                                                                    13.077806191753977
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.54322052001953,
                                                                                                                    13.07354232249462
                                                                                                                  ],
                                                                                                                  [
                                                                                                                    77.52691268920897,
                                                                                                                    13.064429100005883
                                                                                                                  ]
                                                                                                                ]
                                                                                                              ]
                                                                                                            }
                                                                                                            }},'layout': {},
                                                                                                            'paint': {
                                                                                                            'fill-color': '#088',
                                                                                                            'fill-opacity': 0.4
                                                                                                            }
                                                                                                            });

                                                                                                            map.addLayer( {
                                                                                                                'id': 'chikkabanavara',
                                                                                                                'type': 'fill',
                                                                                                                'source': {
                                                                                                                'type': 'geojson',
                                                                                                                'data': {
                                                                                                                'type': 'Feature',
                                                                                                                'geometry': {
                                                                                                                'type': 'Polygon',
                                                                                                                "coordinates": [
                                                                                                                    [
                                                                                                                      [
                                                                                                                        77.49841690063477,
                                                                                                                        13.08825653992866
                                                                                                                      ],
                                                                                                                      [
                                                                                                                        77.48957633972168,
                                                                                                                        13.07680293502934
                                                                                                                      ],
                                                                                                                      [
                                                                                                                        77.50476837158203,
                                                                                                                        13.064011054206444
                                                                                                                      ],
                                                                                                                      [
                                                                                                                        77.51232147216797,
                                                                                                                        13.072371835689
                                                                                                                      ],
                                                                                                                      [
                                                                                                                        77.51584053039551,
                                                                                                                        13.0800635044635
                                                                                                                      ],
                                                                                                                      [
                                                                                                                        77.50734329223633,
                                                                                                                        13.085748496767406
                                                                                                                      ],
                                                                                                                      [
                                                                                                                        77.49841690063477,
                                                                                                                        13.08825653992866
                                                                                                                      ]
                                                                                                                    ]
                                                                                                                  ]
                                                                                                                }
                                                                                                                }},'layout': {},
                                                                                                                'paint': {
                                                                                                                'fill-color': '#088',
                                                                                                                'fill-opacity': 0.4
                                                                                                                }
                                                                                                                });

                                                                                                                map.addLayer( {
                                                                                                                    'id': 'yelahanka',
                                                                                                                    'type': 'fill',
                                                                                                                    'source': {
                                                                                                                    'type': 'geojson',
                                                                                                                    'data': {
                                                                                                                    'type': 'Feature',
                                                                                                                    'geometry': {
                                                                                                                    'type': 'Polygon',
                                                                                                                    "coordinates": [
                                                                                                                        [
                                                                                                                          [
                                                                                                                            77.58450508117676,
                                                                                                                            13.12211262258572
                                                                                                                          ],
                                                                                                                          [
                                                                                                                            77.57223129272461,
                                                                                                                            13.110409812147285
                                                                                                                          ],
                                                                                                                          [
                                                                                                                            77.574462890625,
                                                                                                                            13.094192140383715
                                                                                                                          ],
                                                                                                                          [
                                                                                                                            77.58527755737305,
                                                                                                                            13.08290601700134
                                                                                                                          ],
                                                                                                                          [
                                                                                                                            77.60107040405273,
                                                                                                                            13.081150351361938
                                                                                                                          ],
                                                                                                                          [
                                                                                                                            77.60570526123047,
                                                                                                                            13.103220666812025
                                                                                                                          ],
                                                                                                                          [
                                                                                                                            77.60381698608398,
                                                                                                                            13.119772105058695
                                                                                                                          ],
                                                                                                                          [
                                                                                                                            77.58450508117676,
                                                                                                                            13.12211262258572
                                                                                                                          ]
                                                                                                                        ]
                                                                                                                      ]
                                                                                                                    }
                                                                                                                    }},'layout': {},
                                                                                                                    'paint': {
                                                                                                                    'fill-color': '#088',
                                                                                                                    'fill-opacity': 0.4
                                                                                                                    }
                                                                                                                    });

                                                                                                                    map.addLayer( {
                                                                                                                        'id': 'jakkur',
                                                                                                                        'type': 'fill',
                                                                                                                        'source': {
                                                                                                                        'type': 'geojson',
                                                                                                                        'data': {
                                                                                                                        'type': 'Feature',
                                                                                                                        'geometry': {
                                                                                                                        'type': 'Polygon',
                                                                                                                        "coordinates": [
                                                                                                                            [
                                                                                                                              [
                                                                                                                                77.60536193847656,
                                                                                                                                13.094986329597175
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.60201454162598,
                                                                                                                                13.085539492018661
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.60098457336426,
                                                                                                                                13.081066747924423
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.59222984313965,
                                                                                                                                13.080439721239658
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.58969783782958,
                                                                                                                                13.075966884641723
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.59660720825194,
                                                                                                                                13.06509797181275
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.61703491210938,
                                                                                                                                13.075298042291475
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.61823654174805,
                                                                                                                                13.089176149359496
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.60536193847656,
                                                                                                                                13.094986329597175
                                                                                                                              ]
                                                                                                                            ]
                                                                                                                          ]
                                                                                                                        }
                                                                                                                        }},'layout': {},
                                                                                                                        'paint': {
                                                                                                                        'fill-color': '#088',
                                                                                                                        'fill-opacity': 0.4
                                                                                                                        }
                                                                                                                        });

                                                                                                                        
                                                                                                                    map.addLayer( {
                                                                                                                        'id': 'hebbal',
                                                                                                                        'type': 'fill',
                                                                                                                        'source': {
                                                                                                                        'type': 'geojson',
                                                                                                                        'data': {
                                                                                                                        'type': 'Feature',
                                                                                                                        'geometry': {
                                                                                                                        'type': 'Polygon',
                                                                                                                        "coordinates": [
                                                                                                                            [
                                                                                                                              [
                                                                                                                                77.58321762084961,
                                                                                                                                13.051552964661301
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.5799560546875,
                                                                                                                                13.036083993067004
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.58956909179688,
                                                                                                                                13.02696938943853
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.60381698608398,
                                                                                                                                13.032739223376266
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.60175704956055,
                                                                                                                                13.046452491764127
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.5880241394043,
                                                                                                                                13.052054644835154
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.58321762084961,
                                                                                                                                13.051552964661301
                                                                                                                              ]
                                                                                                                            ]
                                                                                                                          ]
                                                                                                                        }
                                                                                                                        }},'layout': {},
                                                                                                                        'paint': {
                                                                                                                        'fill-color': '#088',
                                                                                                                        'fill-opacity': 0.4
                                                                                                                        }
                                                                                                                        });

                                                                                                                        
                                                                                                                    map.addLayer( {
                                                                                                                        'id': 'banaswadi',
                                                                                                                        'type': 'fill',
                                                                                                                        'source': {
                                                                                                                        'type': 'geojson',
                                                                                                                        'data': {
                                                                                                                        'type': 'Feature',
                                                                                                                        'geometry': {
                                                                                                                        'type': 'Polygon',
                                                                                                                        "coordinates": [
                                                                                                                            [
                                                                                                                              [
                                                                                                                                77.65059471130371,
                                                                                                                                13.019945062332502
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.64714002609253,
                                                                                                                                13.014154023856749
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.65012264251709,
                                                                                                                                13.00984724326401
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.65407085418701,
                                                                                                                                13.009450012159826
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.66050815582275,
                                                                                                                                13.011436161317501
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.66070127487183,
                                                                                                                                13.016349198770198
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.65628099441528,
                                                                                                                                13.019903250265331
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.65059471130371,
                                                                                                                                13.019945062332502
                                                                                                                              ]
                                                                                                                            ]
                                                                                                                          ]
                                                                                                                        }
                                                                                                                        }},'layout': {},
                                                                                                                        'paint': {
                                                                                                                        'fill-color': '#088',
                                                                                                                        'fill-opacity': 0.4
                                                                                                                        }
                                                                                                                        });

                                                                                                                        
                                                                                                                    map.addLayer( {
                                                                                                                        'id': 'rrnagar',
                                                                                                                        'type': 'fill',
                                                                                                                        'source': {
                                                                                                                        'type': 'geojson',
                                                                                                                        'data': {
                                                                                                                        'type': 'Feature',
                                                                                                                        'geometry': {
                                                                                                                        'type': 'Polygon',
                                                                                                                        "coordinates": [
                                                                                                                            [
                                                                                                                              [
                                                                                                                                77.5253677368164,
                                                                                                                                12.918404625095159
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.5253677368164,
                                                                                                                                12.901003100168575
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.53841400146483,
                                                                                                                                12.897991174836472
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.54922866821289,
                                                                                                                                12.909369369120046
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.54150390625,
                                                                                                                                12.92660300049197
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.52588272094727,
                                                                                                                                12.927439554274308
                                                                                                                              ],
                                                                                                                              [
                                                                                                                                77.5253677368164,
                                                                                                                                12.918404625095159
                                                                                                                              ]
                                                                                                                            ]
                                                                                                                          ]
                                                                                                                        }
                                                                                                                        }},'layout': {},
                                                                                                                        'paint': {
                                                                                                                        'fill-color': '#088',
                                                                                                                        'fill-opacity': 0.4
                                                                                                                        }
                                                                                                                        });

       /* map.addLayer({
        "id": "route",
        "type": "line",
        "source": {
        "type": "geojson",
        "data": {
        "type": "Feature",
        "properties": {},
        "geometry": {
        "type": "LineString",
        "coordinates": [
            [
              77.66932725906372,
              12.990162631622217
            ],
            [
              77.66930580139159,
              12.990852612543895
            ],
            [
              77.66868352890015,
              12.990842158301806
            ],
            [
              77.6674497127533,
              12.993277984813618
            ],
            [
              77.6671814918518,
              12.994271126105149
            ],
            [
              77.66663432121277,
              12.995588338952796
            ]
          ]
        }
        }
        },
        "layout": {
        "line-join": "round",
        "line-cap": "round"
        },
        "paint": {
        "line-color": "#888",
        "line-width": 8,
        }
        });*/
        });
  }

  _updateViewport = viewport => {
    this.setState({viewport});
  };

  _renderMarker(station, i) {
    const {name, coordinates} = station;
    return (
      <Marker
        key={i}
        longitude={coordinates[0]}
        latitude={coordinates[1]}
        captureDrag={false}
        captureDoubleClick={false}
      >
        <div className="station">
          <span>{name}</span>
        </div>
      </Marker>
    );
  }

  _renderCityMarker = (city, index) => {
    return (
      <Marker key={`marker-${index}`} longitude={city.longitude} latitude={city.latitude}>
        <CityPin size={20} onClick={() => this.setState({popupInfo: city})} />
      </Marker>
    );
  };

  _rendermap = (info) => {
    const map = this.reactMap.getMap();

    map.removeLayer('jpnagar')

    map.addLayer({
      "id": "route",
      "type": "line",
      "source": {
      "type": "geojson",
      "data": {
      "type": "Feature",
      "properties": {},
      "geometry": {
      "type": "LineString",
      "coordinates": [
          [
            77.66932725906372,
            12.990162631622217
          ],
          [
            77.66930580139159,
            12.990852612543895
          ],
          [
            77.66868352890015,
            12.990842158301806
          ],
          [
            77.6674497127533,
            12.993277984813618
          ],
          [
            77.6671814918518,
            12.994271126105149
          ],
          [
            77.66663432121277,
            12.995588338952796
          ]
        ]
      }
      }
      },
      "layout": {
      "line-join": "round",
      "line-cap": "round"
      },
      "paint": {
      "line-color": "#888",
      "line-width": 8,
      }
      });
      this.setState({showm:{disp:'block'}})
    alert(info)

  }

  _renderPopup() {
    const {popupInfo} = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({popupInfo: null})}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    return (
        <div>
     <center>
       
      <div>
          <AppBar position="static">
    <Toolbar variant="dense">
      <IconButton/>
      <Typography variant="h6" color="inherit">Trans-Bit</Typography>
    </Toolbar>
  </AppBar>
          <center>
        <FormControl>
          <InputLabel shrink id="demo-simple-select-placeholder-label-label">
            Map Style
          </InputLabel>
          <Select
            labelId="demo-simple-select-placeholder-label-label"
            id="demo-simple-select-placeholder-label"
            onChange={(event)=>{
              alert(event.target.value)
              this.setState({mapstyle:event.target.value})
            }}
          >
            <MenuItem value="">
              <em>Vanilla</em>
            </MenuItem>
            <MenuItem value={'vanilla'}>Vanilla</MenuItem>
            <MenuItem value={'dracula'}>Dracula</MenuItem>
            <MenuItem value={'custstyle1'}>Custom Style 1</MenuItem>
            <MenuItem value={'custstyle2'}>Custom Style 2</MenuItem>
          </Select>
          <FormHelperText>Select any one map style</FormHelperText>
        </FormControl>
       
      
      
        <FormControl>
          <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            onChange={(event)=>{
              alert(event.target.value)
              this.setState({category:event.target.value})
            }}
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'senior'}>Senior Citizen</MenuItem>
            <MenuItem value={'female'}>Female Sensitive</MenuItem>
            <MenuItem value={'disabled'}>Differentially abled</MenuItem>
            <MenuItem value={'child'}>Child Sensitive</MenuItem>
          </Select>
          <FormHelperText>Select category for better service</FormHelperText>
        </FormControl>
        <FormControl >
          <Select onChange={(event)=>{
            alert(event.target.value)
            this.setState({mark:event.target.value})
          }} displayEmpty>
            <MenuItem value="" disabled>
              Mark
            </MenuItem>
            <MenuItem value={'poly'}>Block Polygon Regions</MenuItem>
            <MenuItem value={'ward'}>Wards</MenuItem>
            <MenuItem value={'route'}>Route</MenuItem>
            <MenuItem value={'heat'}>Heatmaps</MenuItem>
            <MenuItem value={'fatal'}>Fatal Spots</MenuItem>
            <MenuItem value={'dens'}>Traffic Density</MenuItem>
            <MenuItem value={'sig'}>Signals</MenuItem>
            <MenuItem value={'net'}>Road Networks</MenuItem>
            <MenuItem value={'crime'}>Crime polygons</MenuItem>
            <MenuItem value={'acci'}>Accident polygons</MenuItem>
          </Select>
          <FormHelperText>Select a category for better service</FormHelperText>
        </FormControl>   
        </center>     
      </div>
      <ReactMapGL
      ref={(reactMap) => this.reactMap = reactMap}
      mapboxApiAccessToken={"pk.eyJ1IjoibmltaXNoYm9uZ2FsZSIsImEiOiJjazNrOHd5NHgwOHhqM2xwOWk3MjhncndhIn0.QYVzDZcRD_w4d70I5kLUIA"}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})
    }
    
    mapStyle={this.state.mapstyle=='vanilla'?MAP_STYLE:this.state.mapstyle=='dracula'?MAP_STYLE1:this.state.mapstyle=='custstyle1'?MAP_STYLE2:MAP_STYLE3}>
      
      {CITIES.map(this._renderCityMarker)}
      {this._renderPopup()}
      <style>{MARKER_STYLE}</style>
        {bartStations.map(this._renderMarker)}
        <div style={{position: 'absolute', right: 0}}>
          <NavigationControl />
        </div>
    </ReactMapGL>
    </center>
    <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display={this.state.showm.disp}
        position="relative"/>
    </div>
      );
  }
}

export default Map;