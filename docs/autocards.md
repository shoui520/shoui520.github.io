# One-Click Anime Cards - Autocards
<video style="width: 100%; height: auto;" controls>
  <source src="/img/autocards.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

An **all-in-one** solution for making cards from subtitled content, such as anime (WITH picture + sentence audio + context) with one click.  

No clunky setup required. NO REWINDING. NO MANUAL RECORDING. NO MANUAL COPY AND PASTING.   
Just run, watch, look up a word, and click 1 button to make a full, complete card.  

Compatible with existing Yomitan setups. No need for another framework.  

## Prerequisites
- Windows  
- Anki ([Quick Setup Guide](/mining))
- AnkiConnect (add-on ID: `2055492159`)  
- Yomitan (guide [here](/yomichan))  
- Note type with fields for "Expression", "Picture", "Sentence" & "SentenceAudio". Lapis is compatible. Find it [here](https://github.com/donkuri/lapis). ([Quick Setup Guide](/mining))
- Yomitan already set up for card creation. (minimum requirements: `Expression` & `Sentence`. Autocards will take care of the rest. [Quick Setup Guide](/mining))  
- Subtitle files available (etc., .srt files), find them at [Jimaku.cc](https://jimaku.cc/).    

## Download

[➡Download Link](https://mega.nz/file/wZUR3ASL#5sWwyZs88wKyCCiekG7C_W4ypkMYdV-09Xcw8h-1z7E)
## Initial setup

- Download the `.zip` file  
- Extract the `.zip` file and run the bundled ![mpv_icon](img/mpv_icon.png) `mpv.exe` application.  
- Drag and drop a video file ([with synced subs](https://github.com/shoui520/auto-sub-retimer-easy?tab=readme-ov-file#auto-sub-retimer-easy)) onto the MPV window.
- The web interface will launch in the default browser, the address is `http://127.0.0.1:6969/`. This is where your subtitle lines will appear. 
- Click the **settings gear icon** in the top right. Configure your settings:
    * **Mining Deck**: `"YOUR DECK IN QUOTES"` — Keep the quotes, put your Anki deck's name down *exactly*. e.g. for the deck name *Mining Deck*, you would write `"Mining Deck"`. This should be the same deck Yomitan will add cards to.  
    * **Sentence Field**: `Sentence` — preconfigured for Lapis.
    * **Expression Field**: `Expression` — preconfigured for Lapis.
    * **Picture Field**: `Picture` — preconfigured for Lapis.
    * **Sentence Audio Field**: `SentenceAudio` — preconfigured for Lapis.
    * **Previous Sentences**: `0` — How many lines of previous context do you want on the card? 
    * **Next Sentences**: `0` — How many lines of further context do you want on the card? 
- Click "Update" to save.  

Initial setup is now complete! Now start watching and make cards!  

## Adding a card

- Watch your video with subs. When you want to mine a new word, go to [the web UI](http://127.0.0.1:6969/) and use Yomitan to hover over the word, then press the green + button. You're done. That's it! 

Sentence audio, picture (video frame) and context (if you wanted it) will automatically be added! Your card is complete! No fuss.

## Tips

- Want to watch raw but mine when you need to? Just press `v` to toggle the subs display to hide the subs. Mine later in the web UI (`http://127.0.0.1:6969/`).  
- Want to stream a video? Ctrl-C Ctrl-V a hianime.to **episode link** into mpv, and then just drag and drop your .srt subtitle onto mpv. Use `z` / `Z` to adjust subtitle sync.  
- It's not just for Japanese. If you want to use it for another language, just edit the language codes in `portable_config\mpv.conf`  
- MPV is so hard to use? I hear you. They want you to [read the manual](https://mpv.io/manual/master/). The most fundamental feature (pause/play) is not achieved through a button, but through either ++space++ or right-click.  

## Troubleshooting
- The subs aren't appearing in the web UI! — if the subs are embedded, it could take a while for the subs to appear because it needs to extract the subs from the video first. It does this in the background. 
- mpv closes when I paste a hianime link — make sure your IP address isn't being blocked by hianime | make sure it's an **episode link** | make sure Windows is not blocking the included `yt-dlp`. Check Smart App Control, is it "On"? It should be Off. Right click the file > properties, check if it says "This file came from another computer" (mark of the web), if so, click "Unblock".  
- Can't see the "Update" button in the Autocards settings menu — zoom out!  
- `[thumbfast] ERROR! cannot create mpv subprocess` — you can ignore this. It's a weird error that doesn't matter.  
- Picture & sentence audio not being added to card — this can happen if you look at the card preview too quickly. Also check your Yomitan Anki integration settings and Autocards settings menu: is the deck name correct?  
- Sentence not being captured correctly — ensure 'Layout-aware scanning' is enabled in Yomitan advanced settings.   


## Syncing subs
!!! tip "On the fly syncing"
	Too lazy to sync the files themselves? You can adjust the subtitle timings within mpv using the `z` and `Z` keys (- and + respectively.)  

If your subtitles are out of sync, here's how to sync the subtitle files to your video.  

Download it here at GitHub: [auto-sub-retimer-easy](https://github.com/shoui520/auto-sub-retimer-easy)  

A fork of a fork of Anacreon's auto-sub-retimer, aimed to make it as easy as possible to run.  
Using 9b046695's fork of Anacreon's sub retimer for its all-in-one implementation.  

### Intended environment
- Windows
- Local videos on-disk. (e.g. anime downloaded as .mkv)
- Japanese subtitle files available in the same directory.
- For the main resyncing method (option 1), embedded soft-subs are expected. People with raw files (no embedded subs) can use audio-based syncing (option 2).
### Installation 

1. Install Python. Download it [here.](https://www.python.org/ftp/python/3.14.2/python-3.14.2-amd64.exe)
2. Download this project by clicking the green "**Code**" button on the top, then click "**Download ZIP**"
3. In the file manager, *extract* the .zip file by clicking "**Extract all**".
4. In the extracted folder, there will be another folder with the name "`auto-sub-retimer-easy-master`"
5. This folder (`auto-sub-retimer-easy-master`) contains other files. Move this folder, (containing all the files) to the `C:\` directory (directly inside Local Disk C:) **This is the important step!**  
   ・Your directory should look something like this: `C:\auto-sub-retimer-easy-master`, with `Install.reg`, `ffmpeg` etc. viewable inside.     
   ・NOT `C:\auto-sub-retimer-easy-master\auto-sub-retimer-easy-master`!  
7. Install the program by *double clicking* the `.reg` file "`Install.reg`". Press "Yes" to the dialog boxes. This requires administrator privileges.

### Usage

1. Place subtitle files (such as those downloaded from Jimaku.cc) in the same directory as video files. Ensure the number of subs match the number of episodes. (e.g. 24 episodes, 24 subs.)  
3. In File Explorer, right click on the folder containing your video+subs, then click "Show more options". (if using Windows 11)  
4. Hover over "Retime/Rename Subs" then click "RetimeSubs"  
5. A terminal window will open saying this:  
  [1] Retime using embedded subs. (Default)  
  [2] Retime using audio.
    
6. Type the number (e.g. 1) then press Enter for the desired option. `[1]` works fine for most cases*.  
7. Then it will ask you for the "Split Penalty". Ignore this. Just press Enter.  
8. After that, wait for the script to do its magic**, when it's done the terminal window will say "Success!"  

*You may run into edge cases where the English subs and Japanese subs don't contain the same information (e.g. English subs translate signs & songs, while the Japanese subs contain hard-of-hearing closed captions for sounds.). In that case, use audio syncing. If you download raws you need to use option `[2]` anyway.  

**If you have videos with stylized English subs (signs/songs/top+bottom subs etc.) you may be prompted to choose what "styles to keep". The default settings `(Enter)` work fine in most cases.


## Acknowledgements

Autocards was made possible by open source software and the work of its contributors. The following software is bundled in the package: 

* Autocards standalone script (made by かにふぁん. Contributors: shoui, Gilfar & manhhao) -  GPL-3.0  
* [mpv](https://github.com/mpv-player/mpv) - GPL-2.0  
* [ffmpeg](https://github.com/FFmpeg/FFmpeg) - LGPL-2.1  
* [thumbfast](https://github.com/po5/thumbfast) - MPL-2.0  
* [uosc](https://github.com/tomasklaen/uosc) - LGPL-2.1  
* [Microsoft, curl.exe](https://curl.se/windows/microsoft.html) - MIT   
* [yt-dlp](https://github.com/yt-dlp/yt-dlp) - Unlicense  
* [yt-dlp-hianime](https://github.com/pratikpatel8982/yt-dlp-hianime) - Unlicense
* [Python embeddable package](https://www.python.org/downloads/release/python-31311/) - PSF-2.0  

By downloading the Autocards package, you accept the above license agreements.  