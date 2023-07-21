import { LatLngTuple } from "leaflet";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { Input } from "@material-tailwind/react";

// Define a custom type for the location data
type PetLocation = {
  id: number;
  name: string;
  location: LatLngTuple; // Use LatLngTuple instead of number[]
};

const ICON = icon({
  iconUrl: "/cat-icon.png",
  iconSize: [32, 32],
});

const Map: React.FC = () => {
  const [searchedPet, setSearchedPet] = useState<string>("");
  const [selectedPetLocation, setSelectedPetLocation] =
    useState<LatLngTuple | null>(null);
  const indonesiaCenter: LatLngTuple = [-2.5489, 118.0149]; // Center of Indonesia

  // Dummy data for user pets in Indonesia
  const dummyData: PetLocation[] = [
    { id: 1, name: "Fluffy", location: [-6.1751, 106.865] },
    { id: 2, name: "Buddy", location: [-7.2593, 112.7437] },
    { id: 3, name: "Max", location: [-8.3405, 115.091] },
    { id: 4, name: "Charlie", location: [-6.2088, 106.8456] },
    { id: 5, name: "Bella", location: [-7.2575, 112.7521] },
    { id: 6, name: "Luna", location: [-8.6525, 115.2193] },
    { id: 7, name: "Cooper", location: [-6.9147, 107.6098] },
    { id: 8, name: "Lucy", location: [-6.9271, 107.6076] },
    { id: 9, name: "Rocky", location: [-7.7971, 110.3688] },
    { id: 10, name: "Milo", location: [-8.6714, 115.211] },
  ];

  // Handle search input changes
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchedPet(searchTerm);

    // Find the first matching pet based on the search term
    const matchingPet = dummyData.find((pet) =>
      pet.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // If there's a matching pet, show its location on the map
    if (matchingPet) {
      setSelectedPetLocation(matchingPet.location);
    } else {
      setSelectedPetLocation(null);
    }
  };

  return (
    <div className="mt-14 mb-14 p-14">
      {/* <input
        type="text"
        placeholder="Search pet"
        value={searchedPet}
        onChange={handleSearchInputChange}
        className="border border-black"
      /> */}
      <div className="w-28 mb-2">
        <Input
          label="Find your pets"
          value={searchedPet}
          onChange={handleSearchInputChange}
        />
      </div>
      <MapContainer
        center={indonesiaCenter}
        zoom={5}
        style={{
          height: "400px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Show the selected pet's location on the map */}
        {selectedPetLocation && (
          <Marker position={selectedPetLocation} icon={ICON}>
            <Popup>You selected a pet here!</Popup>
          </Marker>
        )}
        {/* Show the pet's location on the map when there's a search term */}
        {searchedPet && selectedPetLocation && (
          <Marker position={selectedPetLocation} icon={ICON}>
            <Popup>You searched for a pet named {searchedPet} here!</Popup>
          </Marker>
        )}
        {/* Show all pets' locations on the map */}
        {dummyData
          .filter(
            (pet) =>
              !searchedPet ||
              (searchedPet &&
                pet.name.toLowerCase().includes(searchedPet.toLowerCase()))
          )
          .map((pet) => (
            <Marker key={pet.id} position={pet.location} icon={ICON}>
              <Popup>{pet.name}</Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
};

export default Map;
