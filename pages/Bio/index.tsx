import React from 'react';
import Image from 'next/image';

export default function About() {
    return (
        <div className="text-center mt-10 p-4">
            <h1 className="text-3xl font-bold mb-8">Bio</h1>
            <div className="inline-block text-left border border-gray-300 p-8 rounded-lg">
                <Image src="/artist.png" alt="Big-Jacc" width={500} height={500} />
                <p className="text-lg mt-8">Big-Jacc is a talented music producer known for his unique style and innovative productions.</p>
                <p className="text-lg mb-4">Follow Big-Jacc on:</p>
                <ul className="list-none p-0">
                    <li className="mb-2"><a href="https://music.apple.com/us/artist/big-jacc/1511886331" target="_blank" rel='noopener' className="text-blue-500 hover:text-blue-700">Apple Music</a></li>
                    <li className="mb-2"><a href="https://open.spotify.com/artist/2G7HIjVezNF3OdKgrKmLzv?si=t_YyPsAJTFirZQMGccJq6w&nd=1&dlsi=f275380cb32a47b8" target="_blank" rel='noopener' className="text-blue-500 hover:text-blue-700">Spotify</a></li>
                    <li className="mb-2"><a href="https://www.youtube.com/channel/UCh-wiqQ9GQ-mioQlgHlW09A" target="_blank" rel='noopener' className='text-blue-500 hover:text-blue-700'>YouTube</a></li>
                </ul>
            </div>
        </div>
    );
}
