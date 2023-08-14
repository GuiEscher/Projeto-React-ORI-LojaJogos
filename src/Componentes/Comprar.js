import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import { useLocation } from "react-router-dom"; //recebe prop de outra rota

function Comprar() {
    const videoUrl = "https://www.youtube.com/watch?v=wOEHUANP-vo&t=16s";

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const sliderRef = useRef(null);
    const location = useLocation();
    const selectedGame = location.state?.jogoSelecionado;

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
        background: "#2e2d30",
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
            <h1 style={{ fontWeight: "bold", color: "white" }}>{selectedGame.nome}</h1>
        )}
            <div style={videoContainerStyle}>
                <ReactPlayer url={videoUrl} playing controls width="640px" height="360px" />
            </div>
            <div style={sliderContainerStyle}>
                <Slider ref={sliderRef} {...sliderSettings}>
                    <div
                        style={imageContainerStyle}
                        onClick={() =>
                            openModal(
                                "https://th.bing.com/th/id/OIP.iRhiJUSODDIa59jiOBG7YQHaEK?pid=ImgDet&rs=1"
                            )
                        }
                    >
                        <img
                            src="https://th.bing.com/th/id/OIP.iRhiJUSODDIa59jiOBG7YQHaEK?pid=ImgDet&rs=1"
                            alt="Lute!"
                            style={imageStyle}
                        />
                    </div>
                    <div
                        style={imageContainerStyle}
                        onClick={() =>
                            openModal(
                                "https://th.bing.com/th/id/OIP.Vwdb-Lvif9zxsFTm4Yl2qwHaEo?pid=ImgDet&rs=1"
                            )
                        }
                    >
                        <img
                            src="https://th.bing.com/th/id/OIP.Vwdb-Lvif9zxsFTm4Yl2qwHaEo?pid=ImgDet&rs=1"
                            alt="Encare!"
                            style={imageStyle}
                        />
                    </div>
                    <div
                        style={imageContainerStyle}
                        onClick={() =>
                            openModal(
                                "https://th.bing.com/th/id/R.d8a202de894e2b42c8eafc1e921f0d3f?rik=iqd2J6QtRYI5KA&pid=ImgRaw&r=0"
                            )
                        }
                    >
                        <img
                            src="https://th.bing.com/th/id/R.d8a202de894e2b42c8eafc1e921f0d3f?rik=iqd2J6QtRYI5KA&pid=ImgRaw&r=0"
                            alt="Encare!"
                            style={imageStyle}
                        />
                    </div>
                    <div
                        style={imageContainerStyle}
                        onClick={() =>
                            openModal(
                                "https://th.bing.com/th/id/R.d8a202de894e2b42c8eafc1e921f0d3f?rik=iqd2J6QtRYI5KA&pid=ImgRaw&r=0"
                            )
                        }
                    >
                        <img
                            src="https://th.bing.com/th/id/R.d8a202de894e2b42c8eafc1e921f0d3f?rik=iqd2J6QtRYI5KA&pid=ImgRaw&r=0"
                            alt="Encare!"
                            style={imageStyle}
                        />
                    </div>
                    <div
                        style={imageContainerStyle}
                        onClick={() =>
                            openModal(
                                "https://cdn1.dotesports.com/wp-content/uploads/2022/02/01205504/c7d86e64a1539e6a593d2de2d03ae530.jpg"
                            )
                        }
                    >
                        <img
                            src="https://cdn1.dotesports.com/wp-content/uploads/2022/02/01205504/c7d86e64a1539e6a593d2de2d03ae530.jpg"
                            alt="Encare!"
                            style={imageStyle}
                        />
                    </div>
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
        </div>
    );
}

export default Comprar;
