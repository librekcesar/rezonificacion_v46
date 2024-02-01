var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_station_code_rezonif_v46_1 = new ol.format.GeoJSON();
var features_station_code_rezonif_v46_1 = format_station_code_rezonif_v46_1.readFeatures(json_station_code_rezonif_v46_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_station_code_rezonif_v46_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_station_code_rezonif_v46_1.addFeatures(features_station_code_rezonif_v46_1);
var lyr_station_code_rezonif_v46_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_station_code_rezonif_v46_1, 
                style: style_station_code_rezonif_v46_1,
                interactive: true,
    title: 'station_code_rezonif_v46<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_0.png" /> <br />\
    <img src="styles/legend/station_code_rezonif_v46_1_1.png" /> AGU1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_2.png" /> CJS1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_3.png" /> COA1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_4.png" /> COA2<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_5.png" /> CUL1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_6.png" /> CUN1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_7.png" /> CUU1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_8.png" /> CV1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_9.png" /> CVM1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_10.png" /> ESE1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_11.png" /> GDL1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_12.png" /> GTO1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_13.png" /> GTO2<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_14.png" /> MAM1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_15.png" /> MCH1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_16.png" /> MCH2<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_17.png" /> MHXQ<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_18.png" /> MTY1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_19.png" /> MX1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_20.png" /> MX2<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_21.png" /> MX4<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_22.png" /> MXL1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_23.png" /> OAX1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_24.png" /> PB1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_25.png" /> QER1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_26.png" /> REX1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_27.png" /> SLP1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_28.png" /> SPCAM1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_29.png" /> SPCUN1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_30.png" /> SPCUN2<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_31.png" /> SPGDL1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_32.png" /> SPGR1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_33.png" /> SPGR2<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_34.png" /> SPMX1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_35.png" /> SPMX10<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_36.png" /> SPMX11<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_37.png" /> SPMX2<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_38.png" /> SPMX3<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_39.png" /> SPMX4<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_40.png" /> SPMX5<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_41.png" /> SPMX6<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_42.png" /> SPMX7<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_43.png" /> SPMX9<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_44.png" /> SPPCH1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_45.png" /> SPPCH2<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_46.png" /> SPPCH3<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_47.png" /> SPSIN1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_48.png" /> SPSIN2<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_49.png" /> SPTPQ1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_50.png" /> SPVLL1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_51.png" /> SPYUC1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_52.png" /> TAM1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_53.png" /> TGZ1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_54.png" /> TIJ1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_55.png" /> TLC1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_56.png" /> VER1<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_57.png" /> VER2<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_58.png" /> VER3<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_59.png" /> VER4<br />\
    <img src="styles/legend/station_code_rezonif_v46_1_60.png" /> VSA1<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_station_code_rezonif_v46_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_station_code_rezonif_v46_1];
lyr_station_code_rezonif_v46_1.set('fieldAliases', {'country': 'country', 'state': 'state', 'station_code': 'station_code', 'region': 'region', 'station_name': 'station_name', 'JOIN_SPS_service_partner': 'JOIN_SPS_service_partner', });
lyr_station_code_rezonif_v46_1.set('fieldImages', {'country': 'TextEdit', 'state': 'TextEdit', 'station_code': 'TextEdit', 'region': 'TextEdit', 'station_name': 'TextEdit', 'JOIN_SPS_service_partner': 'TextEdit', });
lyr_station_code_rezonif_v46_1.set('fieldLabels', {'country': 'header label', 'state': 'header label', 'station_code': 'header label', 'region': 'header label', 'station_name': 'header label', 'JOIN_SPS_service_partner': 'header label', });
lyr_station_code_rezonif_v46_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});