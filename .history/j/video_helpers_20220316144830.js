/** video_helpers.js
 *  
 * Helper functions for controlling the video element.
 * by Troy Bennett 7-2010
 *
 */
 

	function selectVideo(e, clip) 
	{
		clip.src = e.target.value;
		clip.load();
		playVideo(clip);
	}

	function playVideo(clip) 
	{
		clip.play();
	}

	function seekVideo(clip, position) 
	{
		if(!position) position = 0;
		clip.currentTime = position;
		clip.play();
	}

	function pauseVideo(clip) 
	{
		clip.pause();
	}

	function muteVid(clip) 
	{
		clip.muted = true;
	}

	function unmuteVid(clip) 
	{
		clip.muted = false;
	}

	function onFinished(clip) 
	{
		clip.currentTime = 0;
	}

	function change_vol(clip)
{
 clip.volume=document.getElementById("change_vol").value;
}
const progress = document.getElementById("progress");
 const timer = document.getElementById("timer");
function progressLoop(clip) {
	setInterval(function () {
	  progress.value = Math.round((video.currentTime / video.duration) * 100)(clip);
	  timer.innerHTML = Math.round(video.currentTime) + " seconds"(clip);
	});
  }
  


	// rate can be a positive integer
	// .5 is half speed, 1 is normal speed,
	// 2 is double speed, etc.
	//Only Safari supports negative values (backwards)
	function playRate(clip, rate) 
	{
		clip.playbackRate = rate;
	}

