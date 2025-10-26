# Mobile Reading Setup
This is currently for Android only, iPadOS setups are planned, but are less than ideal at this point in time.  
This will walk you through how to set up the following on your Android (8+) device:

- [Yomitan](https://microsoftedge.microsoft.com/addons/detail/yomitan-popup-dictionary/idelnfbbmikgfiejhgmddlbkfgiifnnn)
- [An ebook reader with vertical text support](https://reader.ttsu.app/)
- [AnkiConnect](https://github.com/KamWithK/AnkiconnectAndroid)
- [(Optional) Local audio](https://github.com/yomidevs/local-audio-yomichan)
- (Optional) OCR for games.  

The two best options for browsers that support Yomitan on Android are **Edge Canary** and **Firefox**.  
Whichever one you use mostly boils down to personal preference, but Edge Canary has much better performance, so this guide will walk you through the steps on getting Edge Canary set up on your Android device.  
The main advantages of each option is as follows:  
## Browsers
### Edge Canary  

Advantages:  

- it's faster than Firefox.  
- it supports the entire Chrome extension ecosystem.   

Disadvantages:  

- As the name suggests, it's for beta testers so things can break with updates. (Solution: install a known-good version from .apk)   
- Extra steps required to enable full extension support.  
- Version 140 only supports Android 10 and above.  
- Not open source, so "Required" diagnostic data is collected and sent to Microsoft. 
### Firefox

Advantages:

- Yomitan is supported on the stable version and with no tinkering required. Things are less likely to break with updates.
- Latest version still supports Android 8 and 9.
- It's open source so you have more control over what data gets sent to Mozilla.

Disadvantages:

- It's slow. Like, really really slow on older devices. 
- Colour picker is bad. Can't make a custom ッツ reader theme.
- Only supports "Firefox for Android" extensions. A large number of extensions are still supported, and Yomitan works with no issues, but less extensions can be used nonetheless.

## Setup (Edge Canary)
These steps will use Edge Canary, version 139.0.3378.0, but if you want to use Firefox you can. The Yomitan and ッツ Reader experience is pretty much the same anyway.  

??? info "Why not use the latest version from the Play Store?"
    "Canary" means it is more unstable than Edge Beta and Edge Dev, so it includes bleeding-edge changes that are unstable and experimental, and it is assumed that people who use Canary are signing up to be beta testers and are ready to expect their workflows to break, which was the case for many in version 142. To avoid this, we will be using Edge Canary, version 139.0.3378.0, which has been tested as working well by me, and it works on older devices running Android 8 and 9 too.  

### Install Edge Canary
1. Download an .apk of Edge Canary, version 139.0.3378.0, link I'm using here: [Download](https://www.apkmirror.com/apk/microsoft-corporation/microsoft-edge-canary/microsoft-edge-canary-139-0-3378-0-release/)
2. Open your device's file manager and tap on the downloaded .apk. Allow the permission for the file manager app to install unknown apps if prompted.
3. Tap "Install" once permission is granted.
4. Then go to the Google Play Store, find Edge Canary and in the 3 dots in top-right corner, turn off "Enable auto-update".

### Set up Edge Canary
Launch Edge Canary. In the out of box experience, tap "Not Now" to everything. 
??? info "Recommended Settings for Edge"
    1. In the New Tab page, tap the settings icon in the top-right corner. Disable everything here. Keep Shortcuts if you find them useful.  
    2. Open the settings page by tapping the three-lines icon and then "Settings". 
    3. In Privacy & security, disable optional diagnostic data in Diagnostics and Defender SmartScreen.  
    4. In Microsoft services, disable Copilot, "personalize your browsing" and "improve quality of shortcuts".  
    5. In Search, change the Search engine to Google.  
    6. In New tab page, enable "Continue browsing where I left off". Disable Weather & News feed if the setting is available.  
    7. In Languages, disable Microsoft Translator, and optionally change the language to Japanese or add Japanese as an app language.  
    8. In Notifications, disable Allow notifications.    

Here's how to set up Yomitan on Edge Canary:  

Before continuing, please make sure your device is not running low on storage space.  

1. Open the settings page by tapping the three-lines icon and then "Settings".
2. Scroll down to "About Microsoft Edge", and tap the little "Privacy and Terms" link at the bottom. 
3. Enable developer options by tapping "Edge Canary 139.0.3378.0" multiple times until you see a notification saying "Developer options are now enabled"  
4. Go back to the Settings menu and go into Developer options.
5. Find "Extension install by id" and copy and paste the Edge extension ID for Yomitan: ( `idelnfbbmikgfiejhgmddlbkfgiifnnn` ) and click OK, then "Add" when prompted.  
6. Access Yomitan Settings by tapping the three-lines icon and then find "Extensions", then tap on Yomitan Popup Dictionary, then tap its cog settings icon.  
7. You can import your preferred dictionaries here. All Yomitan dictionaries work on Android too, but please note that dictionary imports can take a really long time on mobile devices. Please be patient, make sure the screen stays on or stick to smaller dictionaries. Refer to [Yomitan Setup Tutorial](/yomichan) if you need help with Yomitan.  

??? info "(Optional) Custom CSS"
    The custom CSS I personally use on my tablet is here, courtesy of Ruri:  
    ```css
            /* Colorways inspired from Rudnam, Marv.n, 10ten Japanese Reader and Colorhunt */

    :root {
    --text-color: #1d1a19;
    --background-color: rgb(254, 254, 244);
    --accent-color: #eee8d5;
    --tag-color: #eee8d5;
    --tag-dictionary-background-color: #eee8d5;
    --tag-frequency-background-color: #eee8d5;
    --tag-default-background-color: #eee8d5;
    --tag-name-background-color: #eee8d5;
    --tag-expression-background-color: #eee8d5;
    --tag-popular-background-color: #79a9ec;
    --tag-frequent-background-color: #4c8ce6;
    --tag-archaism-background-color: #533642;
    --link-color: blue;
    --tag-border-color: #b1ad96;
    }

    /* Set the font to use */
    * {
    font-family: "Times New Roman","FOT-DNPShueiMinPr6N", serif;
    }

    body {
    --input-background-color: color-mix(in srgb,
        var(--background-color),
        #fff 5%);
    }


    /* Tidy Tags */
    .tag-label-content {
    font-weight: 600 !important;
    font-family: "Noto Serif", "Source Han Serif", serif;
    }

    /* Style tags (light-theme) */
    html[data-theme="light"] .tag * {
    color: var(--text-color) !important;
    }
    html[data-theme="light"] .tag[data-category="frequent"] * {
    color: white !important;
    }
    html[data-theme="light"] ol .tag-label {
    border: 1px var(--tag-border-color) solid;
    background-color: var(--tag-default-background-color) !important;
    }
    html[data-theme="light"] .frequency-group-tag {
    border-radius: 3.5px;
    border: 1px var(--tag-border-color) solid !important;
    }

    /* Tidy definitions */
    .definition-list {
    padding: 0;
    }
    .entry .definition-item {
    display: block;
    margin-bottom: 5px;
    border-bottom: 1px solid;
    margin: 0 calc(0px - var(--entry-horizontal-padding));
    padding: 5px calc(var(--entry-horizontal-padding)) 5px calc(var(--entry-horizontal-padding));

    /* Only show the first PA Dict  */
    li.pronunciation-group:first-child~* {
    display: none;
    }

    ol.pronunciation-group-list:not([data-count="1"]) {
    list-style: none;
    padding: 0;
    }

    /* Show on hover */
    li.pronunciation-group:first-child:has(.tag:hover)~* {
    display: block;
    }
    /* Only shows the first 2 frequency lists */
    span.frequency-group-item:nth-child(n + 3) {
    display: none;
    }
    /* Show on hover */
    span.frequency-group-item:first-child:hover ~ * {
    transition: all 1s ease-out;
    display: inline-block;
    }

    /* Don't show progress bar on top */
    .top-progress-bar-container {
    display: none;
    }

    /* Hides Scrollbar */
    ::-webkit-scrollbar {
    display: none;
    }

    /* remove misc dict classifications/codepoints/stats */
    .kanji-glyph-data > tbody > tr:nth-child(n + 3) {
    display: none;
    }

    /* remove stroke diagram, freq, header for next entries */
    div.entry[data-type='kanji']:nth-child(n + 2) .kanji-glyph-container,
    div.entry[data-type='kanji']:nth-child(n + 2) [data-section-type='frequencies'],
    div.entry[data-type='kanji']:nth-child(n + 2) table.kanji-glyph-data > tbody > tr:first-child {
    display: none;
    }

    /* remove 'No data found' */
    .kanji-info-table-item-value-empty {
    display: none;
    }

    /* reduce extra padding */
    .kanji-glyph-data,
    div.entry[data-type='kanji'],
    div.entry[data-type='kanji']:nth-child(n + 2) .kanji-glyph-data > tbody > tr > *,
    .kanji-glyph-data dl.kanji-readings-japanese,
    div.entry[data-type='kanji']:nth-child(n + 2)
    .kanji-glyph-data
    dl.kanji-readings-chinese[data-count='0'] {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    margin-bottom: 0em;
    margin-top: 0 !important;
    }
    /* remove horizontal lines */
    .entry + .entry[data-type='kanji'],
    div#dictionary-entries > div.entry:nth-child(n + 2) .kanji-glyph-data > tbody > tr > * {
    border-top: none !important;
    }
    /* change decimal list */
    .kanji-gloss-list {
    list-style-type: circle;
    }


    .kanji-tag-list {
    padding-bottom: 3px;
    }

    .kanji-glyph-data {
    margin-top: 10px !important;
    }

    table th {
    font-size: 1.2em !important;
    }
    table dd {
    font-size: 1.3em !important;
    }

    /* Don't select Furigana on top of words */
    ruby rt {
    user-select: none;
    }


    /* Only shows the first 3 frequency lists */
    span.frequency-group-item:nth-child(n + 4) {
    display: none;
    }
    /* Show on hover */
    span.frequency-group-item:first-child:hover ~ * {
    transition: all 1s ease-out;
    display: inline-block;
    }

    ```

## Ebook reader 

You can import .epub files into [ッツ Reader](https://reader.ttsu.app/). It is great, supports vertical text and Yomitan works fine. You can find .epub files for Japanese books [here](https://learnjapanese.moe/resources/#novels-and-literary-texts).  
The default settings for Yomitan and ッツ will do, no further tweaking and setup is necessary. But one feature I personally always disable is "Blur Image".  


### Tips
- Make sure your device does not run out of space. When your device is low on space, Edge Canary will delete browser & extension data and cache to save space. This works just like it does on Windows when your C: drive is full.  
- You can add ッツ reader to your device's home screen by navigating to the webpage, tapping the three-lines icon on Edge, then go to "Add to phone" and press "Install".  


## AnkiConnect

You can set up AnkiConnect on your Android device so you can create Anki cards on your mobile device just as you would on your computer! This is very useful, here's how to set it up:  

### Setup  
Install AnkiDroid from the Google Play Store [here](https://play.google.com/store/apps/details?id=com.ichi2.anki).  
Install Ankiconnect Android from the .apk file [here](https://github.com/KamWithK/AnkiconnectAndroid/releases).  

First, you need to install AnkiDroid and make sure it is set up with your decks synced already.  

Then, you need to give Ankiconect Android the "appear on top" permission. 

1. Launch Ankiconnect Android, access the settings page by tapping the settings icon in the top-right corner.
2. Tap on the Access Overlay Permissions option. 
3. Enable access for Ankiconnect Android.

Then, launch Ankiconnect Android and press "Start Service", when the service is started, you should see a persistent notification from Ankiconnect Android in your status bar. AnkiConnect will be listening on port 8765.  

Then you can enable Anki Integration in Yomitan. No extra tinkering is required. You can then configure your card format as usual in "Configure Anki flashcards."  

!!! warning "Battery optimizations"
    Some Android devices (especially Chinese ones) may kill the Ankiconnect Android process in the background. This doesn't happen on all devices but if this happens to you, please disable all battery optimizations for the Ankiconnect Android app. More information can be found at [Don't kill my app!](https://dontkillmyapp.com/)  
 
## Local audio

Note: the local audio database uses 7.1GB of space on your device. Please ensure your device has sufficient space to not be out of space when the local audio database is imported to your device.   

You will need to use a computer with Android Debugging Bridge (ADB) for this step, as you cannot access the `Internal Storage/Android/data` directories and their contents on newer Android versions (11 and newer).  
But if you are on an older version (10 and older) you can access `Internal Storage/Android/data/com.kamwithk.ankiconnectandroid/files/` and the files within it without a computer, so on those versions, you don't need to use a computer for this.  

First, download the local audio database for Android [here](https://drive.proton.me/urls/TSV0HAK410#Qo7eQwcQPiG0), usually you would generate this yourself, but for your convenience I've uploaded the generated database already. If you would like to do that manually, see [here](https://github.com/KamWithK/AnkiconnectAndroid?tab=readme-ov-file#additional-instructions-local-audio).     

### Local audio transfer with ADB (Windows)  

ADB is necessary for Android 11 and above. Some workarounds exist for Android 11, but these were removed in later versions (it's absolutely necessary on Android 14 and above).  

**Close Ankiconnect Android fully before proceeding.**  

1. Download the SDK Platform-Tools for Windows .zip file [here](https://developer.android.com/tools/releases/platform-tools). Extract it anywhere on your PC.
2. Navigate to the platform-tools folder until you find `adb.exe`
3. On Windows 11, while in this folder, right click the blank space in Explorer and click "Open in Terminal". On Windows 10, while in this folder, click "File" in the top-left and then "Open Windows PowerShell"
4. Move your downloaded `android.db` file to the same place as `adb.exe` (platform-tools folder)
5. On the Android device, enable Developer options by repeatedly tapping "Build number" in the Settings in About phone / Software information. 
6. In Developer options, enable "USB debugging", then plug your device to your computer with a USB cable. 
7. In the Terminal/PowerShell window, type `.\adb.exe devices` and press ++enter++. On your Android device, allow access if prompted. You also need to change USB settings (there is a notification) from "Charging only" to "Transferring files".
8. In the Terminal/PowerShell window, type `.\adb.exe push android.db /sdcard/Android/data/com.kamwithk.ankiconnectandroid/files/` and press ++enter++
9. Wait for the transfer process to complete. 

The path for the `android.db` file should be:

```
/sdcard/Android/data/com.kamwithk.ankiconnectandroid/files/android.db
```

You can confirm with `.\adb.exe shell ls -l /sdcard/Android/data/com.kamwithk.ankiconnectandroid/files`. If you downloaded it from me the file size should be `7274643456` bytes.  

Now, launch Ankiconnect Android and start the service.  
### Yomitan Settings  
With the Ankiconnect Android service running, go to Yomitan Settings, and in "Audio", go on "Configure audio playback sources".
Remove the other audio sources such as JapanesePod101, and configure the local audio source with the following settings:

| Type    | URL |
| -------- | ------- |
| Custom URL **(JSON)**  | http://localhost:8765/localaudio/get/?term={term}&reading={reading}    |

Please note that `Custom URL` and `Custom URL (JSON)` are different things, and this will only work with `Custom URL (JSON)`
## OCR
TBA  

 