# One-Click Anime Cards - Autocards

An all-in-one solution for making cards (WITH picture + sentence audio) with one click.  
No clunky setup required. NO MANUAL RECORDING. NO MANUAL COPY AND PASTING. Compatible with existing Yomitan setups.

## Prerequisites
- Windows
- Anki
- AnkiConnect (extension id: `2055492159`)
- Yomitan (guide [here](/yomichan))
- Card type with fields for "Expression", "Picture" "Sentence" & "SentenceAudio". Lapis is compatible. Find it [here](https://github.com/donkuri/lapis).
- Yomitan already set up for card creation (minimum requirements: `Expression` & `Sentence`. Autocards will take care of the rest.)  
- Local video (e.g. .mkv) with local subtitles (e.g. .srt or embedded).      

## Download

[Download link]
## Initial setup
- Download the file `Autocards.zip`
- Extract the .zip file and run the bundled `mpv.exe`
- Drag and drop a video file ([with synced subs](https://github.com/shoui520/auto-sub-retimer-easy?tab=readme-ov-file#auto-sub-retimer-easy)) onto the MPV window.
- The web interface will launch in the default browser, the address is `http://127.0.0.1:6969/`. This is where your subtitle lines will appear. 
- Click the settings gear icon in the top right. Configure your settings:
    * **Mining Deck**: `"YOUR DECK IN QUOTES"` — Keep the quotes, put your Anki deck's name down *exactly*. e.g. for the deck name *Shoui cards*, you would write `"Shoui cards"` 
    * **Sentence Field**: `Sentence` — preconfigured for Lapis.
    * **Expression Field**: `Expression` — preconfigured for Lapis.
    * **Picture Field**: `Picture` — preconfigured for Lapis.
    * **Sentence Audio Field**: `SentenceAudio` — preconfigured for Lapis.
    * **Previous Sentences**: `0` — How many lines of previous context do you want on the card? 
    * **Next Sentences**: `0` — How many lines of further context do you want on the card? 
- Click "Update" to save. Initial setup is now complete.

## Adding a card

- Use the bundled MPV to watch your video with subs. When you want to mine a new word, go to the web UI and use Yomitan to hover over the word, then press the green + button. You're done. That's it! 

Sentence audio, picture (video frame) and context (if you wanted it) will automatically be added! Your card is complete! No fuss.

## Tips

- Want to watch raw but mine when you need to? Just press `v` to toggle the subs display to hide the subs. When you want to mine something, just Alt-Tab to the browser window of the web UI (`http://127.0.0.1:6969/`), add the card and go back to watching.   

## Troubleshooting
- The subs aren't appearing in the web UI! — if the subs are embedded, it could take a while for the subs to appear because it needs to extract the subs from the video first. It does this in the background. 
- [thumbfast] ERROR! cannot create mpv subprocess — you can ignore this. It's a weird error that doesn't matter.  
- Picture & sentence audio not being added to card — this can happen if you look at the card preview too quickly.  

## Acknowledgements

Autocards was made possible by open source software and the work of its contributors. The following software is bundled in the package: 

* Autocards script (made by かにふぁん & Gilfar) -  GPL-3.0  
* [mpv](https://github.com/mpv-player/mpv) - GPL-2.0  
* [ffmpeg](https://github.com/FFmpeg/FFmpeg) - LGPL-2.1  
* [thumbfast](https://github.com/po5/thumbfast) - MPL-2.0  
* [uosc](https://github.com/tomasklaen/uosc) - LGPL-2.1  
* [Microsoft, curl.exe](https://curl.se/windows/microsoft.html) - MIT   
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Unlicense  
* [Python embeddable package](https://www.python.org/downloads/release/python-31311/) - PSF-2.0