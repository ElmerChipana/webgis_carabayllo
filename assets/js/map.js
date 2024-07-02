var map = L.map('map', {
    center: [-11.847043428690375, -77.00190633578318],
    zoom: 18,
    minZoom: 6,
    maxZoom: 30,
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{ maxZoom: 20,
subdomains:['mt0','mt1','mt2','mt3'] });
googleSat.addTo(map);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{ maxZoom: 20,
	subdomains:['mt0','mt1','mt2','mt3'] });
	googleHybrid.addTo(map);
	

var carabayllo = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_carabayllo/wms", {
	   layers: "webgis_carabayllo:carabayllo", //gisweb:carabayllo
       format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
carabayllo.addTo(map);

var provincia_lima = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_carabayllo/wms", {
	layers: "webgis_carabayllo:provincia_lima", //gisweb:carabayllo
	format: 'image/png',
	transparent: true,
	version: '1.1.1',
	attribution: "SENCICO"
 });
provincia_lima.addTo(map);

var departamento_lima = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_carabayllo/wms", {
	layers: "webgis_carabayllo:departamento_lima", //gisweb:carabayllo
	format: 'image/png',
	transparent: true,
	version: '1.1.1',
	attribution: "SENCICO"
 });
departamento_lima.addTo(map);

var bancos = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_carabayllo/wms", {
	layers: "webgis_carabayllo:bancos", //gisweb:carabayllo
	format: 'image/png',
	transparent: true,
	version: '1.1.1',
	attribution: "SENCICO"
 });
bancos.addTo(map);

var clinicas = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_carabayllo/wms", {
	layers: "webgis_carabayllo:clinicas", //gisweb:carabayllo
	format: 'image/png',
	transparent: true,
	version: '1.1.1',
	attribution: "SENCICO"
 });
clinicas.addTo(map);

var escuelas = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_carabayllo/wms", {
	layers: "webgis_carabayllo:escuelas", //gisweb:carabayllo
	format: 'image/png',
	transparent: true,
	version: '1.1.1',
	attribution: "SENCICO"
 });
escuelas.addTo(map);

var farmacias = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_carabayllo/wms", {
	layers: "webgis_carabayllo:farmacias", //gisweb:carabayllo
	format: 'image/png',
	transparent: true,
	version: '1.1.1',
	attribution: "SENCICO"
 });
farmacias.addTo(map);

var gasolinera = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_carabayllo/wms", {
	layers: "webgis_carabayllo:gasolinera", //gisweb:carabayllo
	format: 'image/png',
	transparent: true,
	version: '1.1.1',
	attribution: "SENCICO"
 });
gasolinera.addTo(map);

var mercados = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_carabayllo/wms", {
	layers: "webgis_carabayllo:mercados", //gisweb:carabayllo
	format: 'image/png',
	transparent: true,
	version: '1.1.1',
	attribution: "SENCICO"
 });
mercados.addTo(map);

var restaurantes = L.tileLayer.wms("http://localhost:8080/geoserver/webgis_carabayllo/wms", {
	layers: "webgis_carabayllo:restaurantes", //gisweb:carabayllo
	format: 'image/png',
	transparent: true,
	version: '1.1.1',
	attribution: "SENCICO"
 });
restaurantes.addTo(map);

var baseMaps = {
    "OpenStretMap": basemapOSM,
    "Mapa Hibrido": googleHybrid,
    "Google Satelite": googleSat
};

var overlayMaps = {
    "Distrito Carabayllo": carabayllo,
    "Provincia de Lima": provincia_lima,
    "Departamento de Lima": departamento_lima,
    "Salud": clinicas,
    "Bancos": bancos,
    "Colegios": escuelas,
    "Farmacias": farmacias,
    "Gasolineras": gasolinera,
	"Mercados": mercados,
	"Restaurantes": restaurantes
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
    imperial: false
  }).addTo(map);
  