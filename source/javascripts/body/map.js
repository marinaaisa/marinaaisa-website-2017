var map = AmCharts.makeChart("mapdiv",{
type: "map",
theme: "light",
projection: "mercator",
panEventsEnabled : false,
backgroundColor : "#FFFFFF",
backgroundAlpha : 1,
zoomControl: {
zoomControlEnabled : false,
homeButtonEnabled : false
},
dataProvider : {
map : "worldHigh",
getAreasFromMap : true,
areas :
[
	{
		"id": "AT",
		"showAsSelected": true
	},
	{
		"id": "BE",
		"showAsSelected": true
	},
	{
		"id": "BG",
		"showAsSelected": true
	},
	{
		"id": "CZ",
		"showAsSelected": true
	},
	{
		"id": "EE",
		"showAsSelected": true
	},
	{
		"id": "FI",
		"showAsSelected": true
	},
	{
		"id": "FR",
		"showAsSelected": true
	},
	{
		"id": "DE",
		"showAsSelected": true
	},
	{
		"id": "HU",
		"showAsSelected": true
	},
	{
		"id": "IE",
		"showAsSelected": true
	},
	{
		"id": "IT",
		"showAsSelected": true
	},
	{
		"id": "NL",
		"showAsSelected": true
	},
	{
		"id": "NO",
		"showAsSelected": true
	},
	{
		"id": "RU",
		"showAsSelected": true
	},
	{
		"id": "ES",
		"showAsSelected": true
	},
	{
		"id": "SE",
		"showAsSelected": true
	},
	{
		"id": "CH",
		"showAsSelected": true
	},
	{
		"id": "UA",
		"showAsSelected": true
	},
	{
		"id": "GB",
		"showAsSelected": true
	},
	{
		"id": "CN",
		"showAsSelected": true
	},
	{
		"id": "ID",
		"showAsSelected": true
	},
	{
		"id": "MY",
		"showAsSelected": true
	},
	{
		"id": "TH",
		"showAsSelected": true
	},
	{
		"id": "VN",
		"showAsSelected": true
	}
]
},
areasSettings : {
autoZoom : false,
color : "#e4e4e4",
colorSolid : "#84ADE9",
selectedColor : "#5a46ff",
outlineColor : "#666666",
rollOverColor : "#b5acff",
rollOverOutlineColor : "#000000"
}
});
