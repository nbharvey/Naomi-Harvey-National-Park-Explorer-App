import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon, DivIcon, Point } from 'leaflet';
import type { FeatureCollection, Feature, Point as GeoJsonPoint } from 'geojson';
import 'leaflet/dist/leaflet.css';

interface ParkProperties {
    name: string;
    description: string;
    image_url?: string;
    website_url?: string;
}
const nationalParksData: FeatureCollection<GeoJsonPoint, ParkProperties> = {
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: {
                name: "Yellowstone National Park",
                description: "Established in 1872, Yellowstone is the world's first national park, famous for its geothermal features like Old Faithful.",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Old_Faithful_geyser.jpg/160px-Old_Faithful_geyser.jpg",
                website_url: "https://www.nps.gov/yell/"
            },
            geometry: {
                type: "Point",
                coordinates: [-110.5885, 44.4280]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Grand Canyon National Park",
                description: "A majestic canyon carved by the Colorado River, showcasing immense geological history.",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Grand_Canyon_from_Mather_Point.jpg/160px-Grand_Canyon_from_Mather_Point.jpg",
                website_url: "https://www.nps.gov/grca/"
            },
            geometry: {
                type: "Point",
                coordinates: [-112.1129, 36.1069]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Zion National Park",
                description: "Known for Zion Canyon's towering sandstone cliffs and narrow slot canyons.",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Zion_National_Park%2C_Utah.jpg/160px-Zion_National_Park%2C_Utah.jpg",
                website_url: "https://www.nps.gov/zion/"
            },
            geometry: {
                type: "Point",
                coordinates: [-113.0586, 37.2982]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Yosemite National Park",
                description: "Famous for its giant sequoia trees, Yosemite Valley, and stunning waterfalls.",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Yosemite_Valley_from_Tunnel_View.jpg/160px-Yosemite_Valley_from_Tunnel_View.jpg",
                website_url: "https://www.nps.gov/yose/"
            },
            geometry: {
                type: "Point",
                coordinates: [-119.5383, 37.8651]
            }
        },
        {
            type: "Feature",
            properties: {
                name: "Rocky Mountain National Park",
                description: "Features majestic mountain peaks, alpine lakes, and abundant wildlife.",
                image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Longs_Peak_from_Trail_Ridge_Road.jpg/160px-Longs_Peak_from_Trail_Ridge_Road.jpg",
                website_url: "https://www.nps.gov/romo/"
            },
            geometry: {
                type: "Point",
                coordinates: [-105.5888, 40.3428]
            }
        }
    ]
};

//From Leaflet Docs: icon and icon placement on map
const nationalParkIcon = new Icon({
    iconUrl: '/images/mountain-icon.png', 
    iconSize: [40, 32], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

//From Leaflet Docs:
const NationalParksMap: React.FC = () => {
    return (
        <div className="w-11/12 mx-auto flex bg-green p-4 justify-center rounded-xl">
            <div className="h-[50vh] w-11/12 rounded-xl shadow-2xl overflow-hidden">
                <MapContainer
                    center={[39.8283, -98.5795]} // Center of the US
                    zoom={3}
                    scrollWheelZoom={false}
                    className="h-full w-full z-0"
                >
               
                     <TileLayer
                        attribution='Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC;
; <a href="https://www.esri.com/en-us/legal/overview">Esri.NatGeoWorldMap</a> contributors'
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
                    />

                
                    {nationalParksData.features.map((parkFeature, index) => {
                        const { name, description, image_url, website_url } = parkFeature.properties;
                        const [longitude, latitude] = parkFeature.geometry.coordinates;

                        return (
                            <Marker
                                key={index}
                                position={[latitude, longitude]}
                                icon={nationalParkIcon}
                                eventHandlers={{
                                    mouseover: (e) => {
                                        // Open the popup on mouseover
                                        e.target.openPopup();
                                    },
                                    mouseout: (e) => {
                                        setTimeout(() => {
                                            if (!e.target.getPopup()._isOpen || !e.target.getPopup()._container.contains(document.activeElement)) {
                                                e.target.closePopup();
                                            }
                                        }, 50);
                                    },
                                }}
                            >
                                <Popup closeButton={false} autoPan={false}>
                                    <div className="p-3 bg-white rounded-lg shadow-lg max-w-xs text-sm leading-tight font-sans">
                                        <h3 className="mt-0 mb-2 text-base font-semibold text-gray-800">{name}</h3>
                                        {image_url && (
                                            <img
                                                src={image_url}
                                                alt={name}
                                                className="max-w-[150px] h-auto block mb-2 rounded"
                                                onError={(e) => {
                                                    e.currentTarget.src = `https://placehold.co/150x100/CCCCCC/333333?text=Image+Not+Found`;
                                                }}
                                            />
                                        )}
                                        <p className="mb-2 text-gray-700">{description || 'No description available.'}</p>
                                        {website_url && (
                                            <a href={website_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-bold">
                                                Learn More
                                            </a>
                                        )}
                                    </div>
                                </Popup>
                            </Marker>
                        );
                    })}
                </MapContainer>
            </div>
        </div>
    );
};

export default NationalParksMap;
