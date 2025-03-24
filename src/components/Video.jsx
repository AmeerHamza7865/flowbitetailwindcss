export default function Video() {
    return(
        <div className='container mx-auto px-4 py-8'>


            <video class="w-full h-80" controls>
        <source src="../video.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
        </video>

      
    </div>
    )
}