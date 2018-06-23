export const config = {
  "version": "v1",
  "config": {
    "visState": {
      "filters": [],
      "layers": [
        {
          "id": "y9msy6u",
          "type": "arc",
          "config": {
            "dataId": "forward_data",
            "label": "load port -> dsch port arc",
            "color": [
              146,
              38,
              198
            ],
            "columns": {
              "lat0": "Load Port LAT",
              "lng0": "Load Port LON",
              "lat1": "Dsch Port LAT",
              "lng1": "Dsch Port LON"
            },
            "isVisible": true,
            "visConfig": {
              "opacity": 0.8,
              "thickness": 2,
              "colorRange": {
                "name": "Uber Viz Diverging 1.5",
                "type": "diverging",
                "category": "Uber",
                "colors": [
                  "#00939C",
                  "#5DBABF",
                  "#BAE1E2",
                  "#F8C0AA",
                  "#DD7755",
                  "#C22E00"
                ],
                "reversed": false
              },
              "sizeRange": [
                0,
                2
              ],
              "targetColor": null,
              "hi-precision": true
            }
          },
          "visualChannels": {
            "colorField": {
              "name": "Item Shipped Wgt",
              "type": "real"
            },
            "colorScale": "quantile",
            "sizeField": null,
            "sizeScale": "linear"
          }
        }
      ],
      "interactionConfig": {
        "tooltip": {
          "fieldsToShow": {
            "forward_data": [
              "Load Port",
              "ETD",
              "Dsch Port"
            ]
          },
          "enabled": true
        },
        "brush": {
          "size": 0.5,
          "enabled": false
        }
      },
      "layerBlending": "normal",
      "splitMaps": []
    },
    "mapState": {
      "bearing": 0,
      "dragRotate": false,
      "latitude": 24.2289352825334,
      "longitude": 54.645478858495565,
      "pitch": 0,
      "zoom": 2.2859552223003266,
      "isSplit": false
    },
    "mapStyle": {
      "styleType": "dark",
      "topLayerGroups": {},
      "visibleLayerGroups": {
        "label": true,
        "road": true,
        "border": false,
        "building": true,
        "water": true,
        "land": true
      },
      "mapStyles": {}
    }
  }
}