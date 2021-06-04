# Yomichan Setup Tutorial

## What is Yomichan?
Yomichan is a browser extension that allows you to look up Japanese words with both the meaning and the reading on web pages with ease. As you can see, I made a dedicated tutorial for it, even though the process is simple and there are already guides out there, only so I can stress how it is a very important tool when it comes to learning Japanese. Yomichan also has extra features such as Anki flashcard creation, which makes it a powerful learning tool.

## Getting Started 
Yomichan is available for both Chromium and Firefox based browsers. You can find the respective versions below.  
[Chrome Web Store](https://chrome.google.com/webstore/detail/yomichan/ogmnaimimemjmbakcfefmnahgdfhfami)  
[Firefox Add-Ons](https://addons.mozilla.org/en-US/firefox/addon/yomichan/)  
Once installed, it will open a new tab page, just close it for now so we don't confuse each other.  

## Acquiring Dictionaries
When you first install Yomichan, you need to load dictionaries into it in order to use it.  
These come in `.zip` extension and **are not to be extracted by the user.**

Download my pack of Yomichan dictionaries below. This will have everything you need and (probably) don't need. :slight_smile:  
[shoui Yomichan Dictionaries Pack v5](https://drive.google.com/file/d/1t_y_MbyjEDkAkcvJlHZxlSJ5rAM6kvVu/view?usp=sharing)  

Once downloaded, extract the .7z to any location on your computer. You can use [7-Zip](http://7zip.org/) for this.  
**Do not touch the .zip files inside.**

## Installing Dictionaries and basic usage
*Updated for the "new" settings page.*  
  
1. Click on the ![yomichan-icon](img/yomichan-icon.png) icon in the browser toolbar.  
2. Click on the ![cog](img/yomichan-cog.png) icon to access the settings page.  
3. On the left sidebar, click on "Dictionaries" and then click on "Configure installed and enabled dictionaries…"  
4. Click the "Import" button on the bottom.  
5. Here's where you select the dictionaries to import. Please only import the following. Do not import every dictionary if you don't need to.
	- `[Bilingual] JMdict (English).zip`
	- `[Bilingual] KireiCake.zip`
	- `[Bilingual] 研究社　新和英大辞典　第５版.zip`
	- `[Kanji] KANJIDIC (English).zip`
6. Please wait for the dictionaries to import. This could take a while if you are using a mechanical hard drive.  
7. Once complete, you can test Yomichan by holding down the ++shift++ key and hovering over Japanese text. Here is a sample: 日本語. It will display a pop up box displaying the definitions separated by dictionary.  
Click anywhere outside of the box or press the ++esc++ key to dismiss. Click on an individual kanji in the headword to view kanji information (only functional with KANJIDIC installed).
8. You can click the ![audio](img/yomichan-audio.png) button to hear the word being pronounced by a native speaker.

![demo](img/yomidemo1.jpg)  

Pop up box size can be edited with advanced settings enabled.  
A full dark mode can be enabled in the settings too.  

**JMDict** is the dictionary hosted on Jisho.org. Jisho.org is not its own dictionary, rather it's a portal that accesses JMDict. This is the most common Japanese to English dictionary.  

**KireiCake** is based on an older version of JMDict but includes extra entries for slang. You may often see duplicate entries when used in tandem with JMDict, but for the entries that are exclusive to KireiCake, you should keep it.

**研究社　新和英大辞典　第５版** (Kenkyuusha New Japanese-English Dictionary, 5th Edition) is a Japanese-English dictionary intended for Japanese people. It has many example sentences which can prove to be very useful for Japanese learners. A variation of this with example sentences stripped called is `[Bilingual] 新和英.zip` can also be found in my dictionary pack (not recommended).  

**KANJIDIC** is a kanji dictionary, it allows you to view information of individual kanji.

You can use the ![search icon](img/yomichan-search.png) icon to access Yomichan Search. Where you can use Yomichan as a standalone Japanese to English dictionary, however, Yomichan does not support any advanced dictionary features.

## Allowing access to file URLs

Enabling this allows you to use Yomichan on local files such as .HTML files.  

!!! failure "PDF Files"
    On Chrome, it is impossible to use Yomichan on PDF files.  

Chromium:  
	- Right click the ![yomi icon](img/yomichan-icon.png)  
	- Click "Manage Extensions"  
	- Enable "Allow access to file URLs"  

Firefox:  
	- Enabled by default.  

## Bonus: Adding Forvo extra audio source  

You may encounter missing audio with the default Yomichan audio sources, adding [Forvo](https://ja.forvo.com/) will help fill in the gaps.  

Thanks to [jamesnicholas](https://github.com/jamesnicolas/yomichan-forvo-server) for this wonderful add-on!

This requires you to have Anki (2.1 and newer) installed and open on your computer to work.  

1. Copy this code `580654285`
2. In Anki, in the menu at the top, click on **Tools**, then **Add-ons**.
3. In the new window, click **Get Add-ons...** and paste the code `580654285` into the text box and click **OK**
4. Restart Anki by closing it and opening it back up again.
5. In the Yomichan settings page ![cog](img/yomichan-cog.png), click **Audio** on the left, and then click on **Configure audio playback sources...**
6. Click **Add** and then select **Custom** from the drop down menu. 
7. Now where it says **Custom audio source (?)**, select the type **JSON** from the drop down menu.
8. In the URL text box, enter this `http://localhost:8770/?expression={expression}&reading={reading}`

## Bonus: Android use with Kiwi Browser  

Kiwi Browser is a Chromium browser that supports extensions, including Yomichan. You can download it below.  
[Google Play](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser)  

Download the Yomichan extension [here](https://chrome.google.com/webstore/detail/yomichan/ogmnaimimemjmbakcfefmnahgdfhfami).  

Download the Yomichan dictionaries pack [here](https://drive.google.com/file/d/1t_y_MbyjEDkAkcvJlHZxlSJ5rAM6kvVu/view?usp=sharing)  

You can use FX File Explorer to extract the .7z file. [Download here](https://play.google.com/store/apps/details?id=nextapp.fx)  

You can access the Yomichan settings page by going in :material-dots-vertical: > Yomichan	![yomi icon](img/yomichan-icon.png) > Settings.  

Please see above for recommended starter dictionaries.  
Importing a dictionary is a very processor intensive process and will take a long time depending on your phone. Please be patient.  

Tap on a word to look it up. In the case that it is not working, you may need to turn off the modifier key.  

![Yomichan Android](img/yomichan_android_alt.png)  

## Anki Setup

See [AnimeCards Site](https://animecards.site/)


<h3>Found this useful? Consider supporting me on Patreon!</h3>   

[:fontawesome-brands-patreon: Support me on Patreon](https://www.patreon.com/shoui){: .md-button }