interface TableData {
  [key: string]: ProductData[]
}

interface ProductData {
  [key: string]: string | number
}

interface TreeData {
  id: string,
  name: string,
  selectable?: boolean,
  children?: null | TreeData[],
}

const DATA: TableData = {
  "2.2": [
  {"brand": "brand 1", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
  {"brand": "brand 2", "year": 2011, "color": "Black", "vin": "gwregre345"},
  {"brand": "brand 3", "year": 2005, "color": "Gray", "vin": "h354htr"}
  ],
  "4": [
  {"brand": "brand 4", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
  {"brand": "brand 1", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
  {"brand": "brand 15", "year": 2005, "color": "Black", "vin": "jejtyj"},
  {"brand": "brand 12", "year": 2012, "color": "Yellow", "vin": "g43gr"},
  {"brand": "brand 11", "year": 2013, "color": "Orange", "vin": "greg34"},
  {"brand": "brand 19", "year": 2000, "color": "Black", "vin": "h54hw5"},
  {"brand": "brand 17", "year": 2013, "color": "Red", "vin": "245t2s"}
  ],
  "2.1": [
  {"brand": "brand 1", "year": 2011, "color": "Black", "vin": "gwregre345"},
  {"brand": "brand 23", "year": 2005, "color": "Gray", "vin": "h354htr"},
  {"brand": "brand 21", "year": 2012, "color": "Yellow", "vin": "g43gr"},
  {"brand": "brand 101", "year": 2013, "color": "Orange", "vin": "greg34"},
  {"brand": "brand 12", "year": 2000, "color": "Black", "vin": "h54hw5"},
  {"brand": "brand 23", "year": 2013, "color": "Red", "vin": "245t2s"}
  ]
  };

  const NO_DATA: ProductData[] = [{"brand": "Данные отсутствуют", "year": "Данные отсутствуют", "color": "Данные отсутствуют", "vin": "Данные отсутствуют"}];

  const TREE_DATA: TreeData[] = [
    {
      "id": "1",
      "name": " 1",
      "children": [
        {
          "id": "1.1",
          "name": " 1.1",
          "children": [
            {
              "id": "1.1.1",
              "name": " 1.1.1",
              "children": [
                {
                  "id": "1.1.1.1",
                  "name": " 1.1.1.1"
                },
                {
                  "id": "1.1.1.2",
                  "name": " 1.1.1.2"
                }
              ]
            },
            {
              "id": "1.1.2",
              "name": " 1.1.2"
            },
            {
              "id": "1.1.3",
              "name": " 1.1.3",
              "selectable": false
            }
          ]
        },
        {
          "id": "1.2",
          "name": " 1.2",
          "children": [
            {
              "id": "1.2.1",
              "name": " 1.2.1",
              "children": [
                {
                  "id": "1.2.1.1",
                  "name": " 1.2.1.1"
                },
                {
                  "id": "1.2.1.2",
                  "name": " 1.2.1.2"
                }
              ]
            },
            {
              "id": "1.2.2",
              "name": " 1.2.2"
            }
          ]
        }
      ]
    },
    {
      "id": "2",
      "name": " 2",
      "children": [
        {
          "id": "2.1",
          "name": " 2.1"
        },
        {
          "id": "2.2",
          "name": " 2.2"
        },
        {
          "id": "2.3",
          "name": " 2.3",
          "selectable": false
        },
        {
          "id": "2.4",
          "name": " 2.4",
          "selectable": false,
          "children": []
        }
      ]
    },
    {
      "id": "3",
      "name": " 3",
      "children": [
        {
          "id": "3.1",
          "name": " 3.1"
        },
        {
          "id": "3.2",
          "name": " 3.2"
        }
      ]
    },
    {
      "id": "4",
      "name": " 4",
      "children": null
    }
  ];

  export {DATA, NO_DATA, TableData, ProductData, TREE_DATA, TreeData}
