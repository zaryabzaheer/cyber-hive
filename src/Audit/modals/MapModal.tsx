import React, { useState, useCallback } from 'react';
import { Modal, Form } from 'react-bootstrap';
import { GoogleMap, useLoadScript, Marker, Libraries } from '@react-google-maps/api';

interface MapModalProps {
    mapShow: boolean;
    handleMapClose: () => void;
}

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 40.69834,
    lng: -74.00553
};

const libraries: Libraries = ['places'];

const MapModal: React.FC<MapModalProps> = ({ mapShow, handleMapClose }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
        libraries,
    });

    const [markerPosition, setMarkerPosition] = useState(center);

    const onMapClick = useCallback((e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
            setMarkerPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
        }
    }, []);

    if (!isLoaded) return <div>Loading...</div>;
    if (loadError) return <div>Error loading maps</div>;

    return (
        <Modal className='map-modal' show={mapShow} onHide={handleMapClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Map</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="mb-3 search-input-container">
                    <Form.Control type="text" placeholder="Search for a place" />
                    <i className="fa fa-search"></i>
                </div>
                <div className="mb-3">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                        onClick={onMapClick}
                    >
                        <Marker
                            position={markerPosition}
                            draggable={true}
                            onDragEnd={onMapClick}
                        />
                    </GoogleMap>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <Form.Group className="mb-3" controlId="formLatitude">
                            <Form.Label>Latitude</Form.Label>
                            <Form.Control type="text" value={markerPosition.lat} readOnly />
                        </Form.Group>

                    </div>
                    <div className='col-md-6'>
                        <Form.Group className="mb-3" controlId="formLongitude">
                            <Form.Label>Longitude</Form.Label>
                            <Form.Control type="text" value={markerPosition.lng} readOnly />
                        </Form.Group>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn border cancel-btn' onClick={handleMapClose}>
                    Cancel
                </button>
                <button className="btn btn-primary" onClick={handleMapClose}>
                    Apply
                </button>
            </Modal.Footer>
        </Modal>
    );
};

export default MapModal;
