import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

//functional components whenever we have a simple component 
//that takes some number of properties and return some amount of static jsx 
const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag}
				video={video} />
		)
	});

	return (
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
};

export default VideoList;