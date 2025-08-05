import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import type { FeatureCollection, Point as GeoJsonPoint } from 'geojson';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';

interface ParkProperties {
    name: string;
    description: string;
    image_url?: string;
    website_url?: string;
}

interface NpsPark {
    id: string;
    fullName: string;
    description: string;
    latitude: string;
    longitude: string;
    url: string;
    designation: string;
    images: {
        url: string;
        altText: string;
    }[];
}

const nationalParkIcon = new Icon({
    iconUrl: '/images/marker.png',
    iconSize: [40, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

const attributionText = 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC';


const NationalParksMap: React.FC = () => {
    const [parksData, setParksData] = useState<FeatureCollection<GeoJsonPoint, ParkProperties>>({
        type: "FeatureCollection",
        features: []
    });

    useEffect(() => {
        const fetchParkData = async () => {
            const apiKey = import.meta.env.VITE_NPS_API_KEY;
            const url = `https://developer.nps.gov/api/v1/parks?limit=500&api_key=${apiKey}`;

            try {
                const response = await axios.get<{ data: NpsPark[] }>(url);
                const npsParks = response.data.data;
                const formattedFeatures = npsParks
                    .filter(park =>
                        park.designation === "National Park" &&
                        park.latitude &&
                        park.longitude &&
                        park.images &&
                        park.images.length > 0
                    )
                    .map(park => ({
                        type: "Feature" as const,
                        properties: {
                            name: park.fullName,
                            description: park.description,
                            image_url: park.images[0].url,
                            website_url: park.url,
                        },
                        geometry: {
                            type: "Point" as const,
                            coordinates: [parseFloat(park.longitude), parseFloat(park.latitude)],
                        },
                    }));

                setParksData({
                    type: "FeatureCollection",
                    features: formattedFeatures,
                });
            } catch (error) {
                console.error("Error fetching National Park data:", error);
            }
        };

        fetchParkData();
    }, []);

    return (
        <div className="w-11/12 mx-auto flex p-4 justify-center rounded-xl">
            <div className="h-[70vh] w-11/12 rounded-xl shadow-2xl  border-black border-4 overflow-hidden">
                <MapContainer
                    center={[39.8283, -98.5795]}
                    zoom={4}
                    scrollWheelZoom={true}
                    className="h-full w-full z-0"
                >
                    <TileLayer
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
                    />

                    {parksData.features.map((parkFeature) => {
                        const { name, description, image_url, website_url } = parkFeature.properties;
                        const [longitude, latitude] = parkFeature.geometry.coordinates;

                        return (
                            <Marker
                                key={name}
                                position={[latitude, longitude]}
                                icon={nationalParkIcon}
                                eventHandlers={{
                                    click: (e) => {
                                        e.target.openPopup();
                                    },
                                }}
                            >
                                <Popup closeButton={true} autoPan={true}>
                                    <div className="p-1 bg-white rounded-lg shadow-lg max-w-xs text-sm leading-tight font-sans">
                                        <h3 className="mt-0 mb-2 text-base font-semibold text-gray-800">{name}</h3>
                                        {image_url && (
                                            <img
                                                src={image_url}
                                                alt={name}
                                                className="max-w-[150px] h-auto block mb-2 rounded"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        )}
                                        <p className="mb-2 text-gray-700 text-xs">{description.substring(0, 150)}...</p>
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
                <div>
                    <p 
                className="text-xs text-black mt-2"
                dangerouslySetInnerHTML={{ __html: attributionText }}
                    />
                </div>
                
            </div>
        </div>
    );
};

export default NationalParksMap;