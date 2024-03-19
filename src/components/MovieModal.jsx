import { useEffect, useState } from "react";
import * as MovieApi from '../api/api';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MovieModal = ({ movieId, onClose }) => {
    const [movieSummary, setMovieSummary] = useState();

    useEffect(() => {
        const fetchSummary = async () => {
            try {
                const summary = await MovieApi.getMovieSummary(movieId);
                setMovieSummary(summary);
            } catch (error) {
                console.log(error);
            }
        };
        fetchSummary();
    }, [movieId])

    if (!movieSummary) {
        return <></>
    }

    return (
        <>
            <Modal
                show={true} onHide={onClose} closeButton scrollable={true}
                aria-labelledby="contained-modal-title-vcenter"
                data-bs-theme="dark" 
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {movieSummary.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>{movieSummary.release_date}</h6>
                    <p>{movieSummary.overview}</p>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default MovieModal;