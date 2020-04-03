# Video_Streaming

# Usage
```bash
git clone https://github.com/Steven-Chang1114/Video_Streaming.git
cd client
npm start
cd ..
cd JSON-server
npm start
cd ..
cd RTMP-server
npm start
```

# Publishing live streams
## From OBS
>Settings -> Stream

Service : Custom..

URL : rtmp://localhost/live

Stream key : id of the stream (You can find the id of the stream in the url: http://localhost:3000/#/streams/{id})


>Back to the main page -> Start Streaming
