

import React, { useState } from 'react';

export default function () {
    const [loading, setLoading] = useState(false);
    const [link, setLink] = useState();
    const [showLink, setShowLink] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');

    const postFile = async (pic) => {
        setLoading(true);
        if (!pic) {
            window.alert("Empty field");
            setLoading(false);
            return;
        }

        try {
            const data = new FormData();
            data.append("file", pic);
            data.append("upload_preset", "EasyShare");
            data.append("cloud_name", "dxurcddoh");

            const res = await fetch("https://api.cloudinary.com/v1_1/dxurcddoh/raw/upload", {
                method: "POST",
                body: data
            });

            if (!res.ok) {
                console.log("Response not okay.");
                setLoading(false);
                return;
            }

            const response = await res.json();
            setLink(response.url);
            setLoading(false);
            setShowLink(true);

        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const copyToClipboard = () => {
        if (link) {
            navigator.clipboard.writeText(link).then(() => {
                setCopySuccess("Link copied to clipboard!");
                setTimeout(() => setCopySuccess(''), 3000);
            }).catch((error) => console.log(error));
        }
    };

    return (
        <div className='max-w-[1300px] m-auto'>
            <div className='flex flex-col justify-center items-center p-10'>
                <p className='text-[22px] md:text-[30px] text-center font-extrabold text-gray-800'>Upload the file you want to share</p>
                <p className='text-[16px] md:text-[20px] text-center text-red-500 font-medium'>File should not exceed 10MB</p>
                <form className='w-full mt-6'>
                    <label className="flex flex-col items-center w-full p-10 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-red-500 hover:bg-red-50">
                        {
                            !loading ? (
                                <>
                                    <input type="file" className="hidden" onChange={(e) => postFile(e.target.files[0])} />
                                    <svg
                                        className="w-12 h-12 mb-3 text-blue-400"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M16.5 6.5A1.5 1.5 0 0118 8v7.5A2.5 2.5 0 0115.5 18H4.5A2.5 2.5 0 012 15.5V8A1.5 1.5 0 013.5 6.5h13zm-6 6.75v-4h-2L10 8l1.5 1.25v4h2l-1 1h-1zm-5-7h10a.5.5 0 00.5-.5V4H5v1.75a.5.5 0 00.5.5z"
                                        />
                                    </svg>
                                    <span className="text-lg font-medium text-black">Upload a file</span>
                                    <span className="text-sm text-gray-500">or drag and drop</span>
                                </>
                            ) : (
                                <p className='text-[20px] font-semibold'>Uploading</p>
                            )
                        }
                    </label>
                </form>
                {
                    showLink && (
                        <div className='mt-4 flex flex-col justify-center items-center'>
                            <p className='text-[20px] font-medium'>Share this link to share the file</p>
                            <a href={link} className='text-red-500 font-medium' target='_blank' rel='noopener noreferrer'>{link}</a>
                            <button
                                onClick={copyToClipboard}
                                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Copy Link
                            </button>
                            {copySuccess && <p className='text-green-500 mt-2'>{copySuccess}</p>}
                        </div>
                    )
                }
            </div>
        </div>
    );
}

