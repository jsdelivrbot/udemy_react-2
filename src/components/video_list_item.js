import React from 'react';

//adding {video} is the same as 
//
// const VideoListItem = (props) => {
// 	const video = props.video;
// 	return (
// 		<li>Video</li>
// 	);
// };
// the props in the function is replaced by {video} which is saying 'set the props to be video'
//can also add multipe vars like onVideoSelect separated by a comma
const VideoListItem = ({video, onVideoSelect}) => {
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="list-video media">
				<div className="media-left">
					<img className="media-object" src={imageUrl}/>
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	)
}

export default VideoListItem;