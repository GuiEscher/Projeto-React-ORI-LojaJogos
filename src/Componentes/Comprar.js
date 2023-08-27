import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom"; //recebe prop de outra rota
import { useNavigate } from 'react-router-dom';

function Comprar() {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const sliderRef = useRef(null);
    const location = useLocation();
    const selectedGame = location.state?.jogoSelecionado; // recebe a prop vinda do onClick
    const videoUrl = selectedGame.video;

    const openModal = (image) => {
        if(!modalOpen){
             setSelectedImage(image);
        setModalOpen(true);
        }
       
    };

    const closeModal = () => {
        setSelectedImage("");
        setModalOpen(false);
    };

    const arrowStyle = {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 1,
        background: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
    };

    const sliderSettings = {
        dots: true,
        infinite: true,
        swipe:false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        prevArrow: <button style={arrowStyle}>Previous</button>,
        nextArrow: <button style={arrowStyle}>Next</button>,
        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    justifyContent: "center",
                    color: "white",
                }}
            >
                {dots.map((dot, index) => (
                    <button
                        key={index}
                        style={{
                            width: "10px",
                            height: "10px",
                            margin: "0 5px",
                            borderRadius: "50%",
                            backgroundColor: "white",
                            cursor: "pointer",
                            border: "none",
                        }}
                        onClick={() => sliderRef.current.slickGoTo(index)}
                    ></button>
                ))}
            </div>
        ),
    };

    const containerStyle = {
        background: "#1a191b",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    const videoContainerStyle = {
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
    };

    const sliderContainerStyle = {
        width: "100%",
        marginTop: "20px",
    };

    const imageContainerStyle = {
        padding: "0 10px",
        width: "20vw",
        height: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
    };

    const imageStyle = {
        maxWidth: "100%",
        height: "auto",
        cursor: "pointer",
    };

    const opts = {
        height: "360",
        width: "640",
        playerVars: {
            autoplay: 0,
        },
    };

    const handleImageClick = (image) => {
        if (!modalOpen) {
            openModal(image);
        }
    };

    return (
        <div style={containerStyle}>
            {selectedGame && (
            <h1 style={{ fontWeight: "bold", color: "white", fontFamily: 'Arial' }}>{selectedGame.nome}</h1>
        )}
            <div style={videoContainerStyle}>
                <ReactPlayer url={videoUrl} playing controls width="640px" height="360px" />
            </div>
            <div style={sliderContainerStyle}>
            <Slider ref={sliderRef} {...sliderSettings}>
                {selectedGame.imagensSlider.map((imagem, index) => (
                 <div
                    key={index}
                    style={imageContainerStyle}
                    onClick={() => openModal(imagem)}
                >
                <img src={imagem} alt={`Imagem ${index}`} style={imageStyle} />
                </div>
            ))}
            </Slider>
            </div>
            {modalOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.7)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 9999,
                    }}
                    onClick={closeModal}
                >
                    <img
                        src={selectedImage}
                        alt="Imagem Ampliada"
                        style={{ maxWidth: "90%", maxHeight: "90%", cursor: "pointer" }}
                    />
                </div>
            )}
            <div style={{
                background:'#2e2d30',
                padding: '40px',
                marginLeft:'25px',
                marginRight:'25px',
                marginTop:'25px',
                border: '15px solid #333',
                borderRadius:'10px'

            }}>
                <h1 style={{
                        color:"white",
                        fontWeight:'500',
                        fontSize:'3.7vh',
                        marginBottom:'20px',
                        padding: '20px'
                    }}>
                        
                        Descrição<br/>
                        
                </h1>

                    <p style={{
                        color:"white",
                        fontWeight:'500',
                        fontSize:'2.8vh',
                        padding: '15px',
                        fontFamily: 'Arial'

                    }}>{selectedGame.desc}</p>


            <button 
                style={{ 
                    padding: '10px 25px', 
                    borderRadius: '5px', 
                    backgroundColor: '#9391c5', 
                    border: '2px solid #ccc', 
                    color: 'white', 
                    fontWeight: 'bold', 
                    cursor: 'pointer', 
                    textShadow: '1px 1px #555', 
                    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' 
                    }}
                    onClick={() => navigate('/pagar')}
                    
                    >
                        
                        finalizar compra
                    
                 </button>

            </div>
        </div>
    );
}

export default Comprar;
