//  new corrected code

// import React, { useRef, useState } from 'react';
// import './ImageGenerator.css';
// import default_image from '../Assets/default_image.svg';

// const ImageGenerator = () => {
//     const [image_url, setImage_url] = useState(default_image);
//     const [loading, setLoading] = useState(false);
//     const inputRef = useRef(null);
    

//     const imageGenerator = async () => {
//         if (inputRef.current.value === "") {
//             return;
//         }
//         setLoading(true);
//         try {
//             const response = await fetch(
//                 "https://api.pexels.com/v1/search?query=" + inputRef.current.value,
//                 {
//                     method: "GET",
//                     headers: {
//                         "Authorization": "sQA2TCVQrJfq2yoy7IWm5Zof7FOqKoF17gkVNpbtPoOCxAiV9pLGuyOd"
//                     }
//                 }
//             );
//             if (!response.ok) {
//                 throw new Error('Failed to fetch images');
//             }
//             const data = await response.json();
//             const imageUrl = data.photos[0]?.src.medium; // Get the URL of the first image
//             setImage_url(imageUrl || default_image);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching images:', error);
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='ai-image-generator'>
//             <div className="header">AI Image <span>Generator</span></div>
//             <div className="img-loading">
//                 <div className="image">
//                     <img src={image_url} alt="Generated Image" style={{ width: '400px' }} />
//                     <div className="loading">
//                         <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
//                         <div className={loading ? "loading-text" : "display-none"}>Loading....</div>
//                     </div>
//                 </div>
//             </div>
//             <div className="search-box">
//                 <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want to see' />
//                 <div className='generate-btn' onClick={imageGenerator}>Generate</div>
//             </div>
//         </div>
//     );
// };

// export default ImageGenerator;

// six images code
import React, { useRef, useState } from 'react';
import './ImageGenerator.css';
import default_image from '../Assets/default_image.svg';

const ImageGenerator = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    const imageGenerator = async () => {
        if (inputRef.current.value === "") {
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(
                "https://api.pexels.com/v1/search?query=" + inputRef.current.value,
                {
                    method: "GET",
                    headers: {
                        "Authorization": "sQA2TCVQrJfq2yoy7IWm5Zof7FOqKoF17gkVNpbtPoOCxAiV9pLGuyOd"
                    }
                }
            );
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            const data = await response.json();
            const newImageUrls = data.photos.slice(0, 6).map(photo => photo.src.medium);
            setImageUrls(newImageUrls);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching images:', error);
            setLoading(false);
        }
    };

    return (
        <div className='ai-image-generator'>
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                {imageUrls.length > 0 && (
                    <div className="image-grid">
                        {imageUrls.map((imageUrl, index) => (
                            <div key={index} className="image-container">
                                <img src={imageUrl} alt={`Image ${index + 1}`} style={{ width: '200px' }} />
                            </div>
                        ))}
                    </div>
                )}
                <div className="loading">
                    <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
                    <div className={loading ? "loading-text" : "display-none"}>Loading....</div>
                </div>
            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want to see' />
                <div className='generate-btn' onClick={imageGenerator}>Generate</div>
            </div>
        </div>
    );
};

export default ImageGenerator;



/*import React, { useRef, useState } from 'react';
import './ImageGenerator.css';
import default_image from '../Assets/default_image.svg';

const ImageGenerator = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    const imageGenerator = async () => {
        if (inputRef.current.value === "") {
            return;
        }
        setLoading(true);
        try {
            // Code to fetch images goes here
        } catch (error) {
            console.error('Error fetching images:', error);
            setLoading(false);
        }
    };

    return (
        <div className='ai-image-generator'>
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                <div className="image-grid">
                    {imageUrls.length > 0 ? (
                        imageUrls.map((imageUrl, index) => (
                            <div key={index} className="image-container">
                                <img src={imageUrl} alt={`Image ${index + 1}`} style={{ width: '200px' }} />
                            </div>
                        ))
                    ) : (
                        <div className="image-container">
                            <img src={default_image} alt="Default Image" style={{ width: '200px' }} />
                        </div>
                    )}
                </div>
                <div className="loading">
                    <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
                    <div className={loading ? "loading-text" : "display-none"}>Loading....</div>
                </div>
            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want to see' />
                <div className='generate-btn' onClick={imageGenerator}>Generate</div>
            </div>
        </div>
    );
};

export default ImageGenerator;

*/





/*
import React, { useRef, useState } from 'react';
import './ImageGenerator.css';
import default_image from '../Assets/default_image.svg';
const sstk = require("shutterstock-api"); // Import Shutterstock API
const axios = require("axios"); // Import Axios

const ImageGenerator = () => {
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef(null);

    const imageGenerator = async () => {
        if (inputRef.current.value === "") {
            return;
        }
        setLoading(true);
        try {
            // Code 1: Shutterstock API using SDK
            const applicationConsumerId = "123abc456def";
            const applicationConsumerSecret = "1a2b3c4d";
            sstk.setBasicAuth(applicationConsumerId, applicationConsumerSecret);
            const imagesApi = new sstk.ImagesApi();
            const queryParams = {
                "query": inputRef.current.value,
                "image_type": "photo",
                "page": 1,
                "per_page": 6, // Adjust per_page according to your requirements
                "sort": "popular",
                "view": "minimal"
            };
            const { data } = await imagesApi.searchImages(queryParams);
            const newImageUrls = data.map(photo => photo.assets.preview.url);
            setImageUrls(newImageUrls);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching images from Shutterstock:', error);
            setLoading(false);
        }

        setLoading(false);
    };

    return (
        <div className='ai-image-generator'>
            <div className="header">AI Image <span>Generator</span></div>
            <div className="img-loading">
                {imageUrls.length > 0 && (
                    <div className="image-grid">
                        {imageUrls.map((imageUrl, index) => (
                            <div key={index} className="image-container">
                                <img src={imageUrl} alt={`Image ${index + 1}`} style={{ width: '200px' }} />
                            </div>
                        ))}
                    </div>
                )}
                <div className="loading">
                    <div className={loading ? "loading-bar-full" : "loading-bar"}></div>
                    <div className={loading ? "loading-text" : "display-none"}>Loading....</div>
                </div>
            </div>
            <div className="search-box">
                <input type="text" ref={inputRef} className='search-input' placeholder='Describe what you want to see' />
                <div className='generate-btn' onClick={imageGenerator}>Generate</div>
            </div>
        </div>
    );
};

export default ImageGenerator; 
with shutterstock api*/