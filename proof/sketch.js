var mic;
var micOn;
var recorder;
var recording;
var soundFile1;
var soundFile2;
var soundFile3;
var soundFile4;
var soundFile5;
var soundFile6;
var soundFile7;
var soundFileAll;
var verse1;
var chorus1;
var verse2;
var chorus2;
var bridge;
var verse3;
var chorus3;
var playAll;
var saveAll;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  micOn = false;
   //creating a new recorder
  recorder = new p5.SoundRecorder();
   //setting the recorder to listen to the mic
  recorder.setInput(mic);
   //creating the new soundfiles to playback, and sending each sound file to the function to play the next in line upon ending
  soundFile1 = new p5.SoundFile();
  soundFile1.onended(playTwo);
  soundFile2 = new p5.SoundFile();
  soundFile2.onended(playThree);
  soundFile3 = new p5.SoundFile();
  soundFile3.onended(playFour);
  soundFile4 = new p5.SoundFile();
  soundFile4.onended(playFive);
  soundFile5 = new p5.SoundFile();
  soundFile5.onended(playSix);
  soundFile6 = new p5.SoundFile();
  soundFile6.onended(playSeven);
  soundFile7 = new p5.SoundFile();
  soundFile7.onended(saveAll);
  soundFileAll = new p5.SoundFile();
  //creating the buttons to record with
  verse1 = select('#verse1');
  verse1.mousePressed(recordVerse1);
  chorus1 = select('#chorus1');
  chorus1.mousePressed(recordChorus1);
  verse2 = select('#verse2');
  verse2.mousePressed(recordVerse2);
  chorus2 = select('#chorus2');
  chorus2.mousePressed(recordChorus2);
  bridge = select('#bridge');
  bridge.mousePressed(recordBridge);
  verse3 = select('#verse3');
  verse3.mousePressed(recordVerse3);
  chorus3 = select('#chorus3');
  chorus3.mousePressed(recordChorus3);
  playAll = select('#playme');
  playAll.mousePressed(fullSong);
  saveAll = select('#saveme');
  saveAll.mousePressed(saveFullSong);
}

function draw() {
  fill(255,0,0);
  textSize(70);
  stroke(0);
  soundFile1.setVolume(1);
}

//Below are the functions for each button to START and STOP recording

function recordVerse1() {
  micOn = !micOn;
	if (micOn) {
      mic.start();
      verse1.html('STOP Recording Verse 1');
      verse1.style('background:red');
      verse1.style('color:white');
      recorder.record(soundFile1);
	}
	else {
      mic.stop();
      verse1.html('START Recording Verse 1');
      verse1.style('background:white');
      verse1.style('color:black');
      recorder.stop();
	}
};

function recordChorus1() {
  micOn = !micOn;
	if (micOn) {
      mic.start();
      chorus1.html('STOP Recording Chorus 1');
      chorus1.style('background:red');
      chorus1.style('color:white');
      recorder.record(soundFile2);
	}
	else {
      mic.stop();
      chorus1.html('START Recording Chorus 1');
      chorus1.style('background:white');
      chorus1.style('color:black');
      recorder.stop();
	}
};

function recordVerse2() {
  micOn = !micOn;
	if (micOn) {
      mic.start();
      verse2.html('STOP Recording Verse 2');
      verse2.style('background:red');
      verse2.style('color:white');
      recorder.record(soundFile3);
	}
	else {
      mic.stop();
      verse2.html('START Recording Verse 2');
      verse2.style('background:white');
      verse2.style('color:black');
      recorder.stop();
	}
};

function recordChorus2() {
  micOn = !micOn;
	if (micOn) {
      mic.start();
      chorus2.html('STOP Recording Chorus 2');
      chorus2.style('background:red');
      chorus2.style('color:white');
      recorder.record(soundFile4);
	}
	else {
      mic.stop();
      chorus2.html('START Recording Chorus 2');
      chorus2.style('background:white');
      chorus2.style('color:black');
      recorder.stop();
	}
};

function recordBridge() {
  micOn = !micOn;
	if (micOn) {
      mic.start();
      bridge.html('STOP Recording Bridge');
      bridge.style('background:red');
      bridge.style('color:white');
      recorder.record(soundFile5);
	}
	else {
      mic.stop();
      bridge.html('START Recording Bridge');
      bridge.style('background:white');
      bridge.style('color:black');
      recorder.stop();
	}
};

function recordVerse3() {
  micOn = !micOn;
	if (micOn) {
      mic.start();
      verse3.html('STOP Recording Verse 3');
      verse3.style('background:red');
      verse3.style('color:white');
      recorder.record(soundFile6);
	}
	else {
      mic.stop();
      verse3.html('START Recording Verse 3');
      verse3.style('background:white');
      verse3.style('color:black');
      recorder.stop();
	}
};

function recordChorus3() {
  micOn = !micOn;
	if (micOn) {
      mic.start();
      chorus3.html('STOP Recording Final Chorus');
      chorus3.style('background:red');
      chorus3.style('color:white');
      recorder.record(soundFile7);
	}
	else {
      mic.stop();
      chorus3.html('START Recording Final Chorus');
      chorus3.style('background:white');
      chorus3.style('color:black');
      recorder.stop();
	}
};

//Below are the functions to kick off each next sound file after the one before has ended

function fullSong(){
	micOn = !micOn;
  	if (micOn) {
		soundFile1.play();
        mic.start();
	    playAll.style('background:red');
	    playAll.style('color:white');
        recorder.record(soundFileAll);
  	}
  	else {
        mic.stop();
		playAll.style('background:white');
		playAll.style('color:black');
        recorder.stop();
  	}
};

function playTwo(){
  soundFile2.play();
};

function playThree(){
  soundFile3.play();
};

function playFour(){
  soundFile4.play();
};

function playFive(){
  soundFile5.play();
};

function playSix(){
  soundFile6.play();
};

function playSeven(){
  soundFile7.play();
};

function saveFullSong(){
  saveSound(soundFileAll, 'mySound.wav');
}

