# Yomitan Setup Tutorial

## What is Yomitan?
Yomitan is a browser extension that allows you to look up Japanese words with both the meaning and the reading on web pages with ease.  

## Getting Started 
Yomitan is available for both Chromium and Firefox based browsers. You can find the respective versions below.  
[Chrome Web Store](https://chromewebstore.google.com/detail/yomitan/likgccmbimhjbgkjambclfkhldnlhbnn)  
[Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/yomitan-popup-dictionary/idelnfbbmikgfiejhgmddlbkfgiifnnn)  
[Firefox Add-ons](https://addons.mozilla.org/en-GB/firefox/addon/yomitan/)  
Once installed, it will open a new tab page, just close it for now so we don't confuse each other.  

## Acquiring Dictionaries
When you first install Yomitan, you need to load dictionaries into it in order to use it.  
These files use the `.zip` extension and **are not to be extracted by the user.**

You can find my collection of Yomitan dictionaries below. This will have everything you need and (probably) don't need. :slight_smile:  
→→→→[Shoui's Yomitan Dictionary Collection](https://learnjapanese.link/dictionaries)←←←←　　    

Dictionaries can be found in their respective folders.  
I recommend you install the following dictionaries:  
	- `Bilingual/[Bilingual] JMdict (Recommended).zip`  
	- `Bilingual/[Bilingual] 新和英.zip`  
	- `Kanji/[Kanji] KANJIDIC (English).zip`  
	- `Grammar/Dictionary of Japanese Grammar.zip`  
	- `Pitch Accent/アクセント辞典v2 (Recommended).zip`

## Installing dictionaries and basic usage
  
1. Click on the ![yomitan-icon](img/yomitan-icon.png) icon in the browser toolbar.  
2. Click on the ![cog](img/yomitan-cog.png) icon to access the settings page.  
3. On the left sidebar, click on "Dictionaries" and then click on "Configure installed and enabled dictionaries…"  
4. Click the "Import" button on the bottom.  
5. Here's where you select the dictionaries to import. Please only import the following. 
	- `Bilingual/[Bilingual] JMdict (Recommended).zip`  
	- `Bilingual/[Bilingual] 新和英.zip`  
	- `Kanji/[Kanji] KANJIDIC (English).zip`  
	- `Grammar/[Grammar] Dictionary of Japanese Grammar 日本語文法辞典 (Recommended).zip` 
	- `Pitch Accent/アクセント辞典v2 (Recommended).zip`

6. Please wait for the dictionaries to import. This could take a while.
7. Once complete, you can test Yomitan by holding down the ++shift++ key and hovering over Japanese text. Here is a sample: 日本語. It will display a pop up box displaying the definitions separated by dictionary.  

![Yomichan Demo](img/yomidemo1.png) 

Click anywhere outside of the box or press the ++esc++ key to dismiss.
Click on an individual kanji in the headword to view kanji information (only functional with KANJIDIC installed).

You can click the ![audio](img/yomichan-audio.png) button to hear the word being pronounced by a native speaker.

In your browser extensions toolbar, if you click on the Yomitan logo, then on the ![search icon](img/yomitan-search.png) icon or by using the ++alt+insert++ keyboard shortcut, you can access Yomitan Search, this is where you can use Yomitan as a standalone Japanese to English dictionary. 

Pop up box size can be edited with advanced settings enabled.  
A full dark mode can be enabled in the settings too.  

**JMdict** is a free and openly licensed Japanese-to-English dictionary, which is used on many Japanese dictionary projects such as Jisho.org, Akebi, Shirabe Jisho, Takoboto etc. 

**新和英** (Shinwaei) is a Japanese-English dictionary intended for Japanese people. It has many example sentences which can prove to be very useful for Japanese learners. A variation of this with even more example sentences is called `[Bilingual] 研究社　新和英大辞典　第５版.zip` can also be found in my dictionaries collection.  

**KANJIDIC** is a kanji dictionary, it allows you to view information of individual kanji.  

**Dictionary of Japanese Grammar**, or 日本語文法辞典(全集), is a dictionary that helps you look up grammar (duh!).  

**アクセント辞典v2** lets you see pitch accent information of words. 

## Recommended frequency dictionaries  

Yomitan supports the use of frequency dictionaries that tell you how common a word is.  

**JPDB** - A frequency list made from jpdb.io, which is a site that has analyzed many light novels, visual novels, anime and j-drama. In turn, this is a frequency list from Japanese fictional media.  

**CC100** - Frequency list of corpus data from Japanese internet. Formal words will appear more common in this frequency list . Example: 審議会 (council) is 9733 frequency on CC100 and 58730 on JPDB.  

**What is a common word?**  

* Very common: 1-10,000  
* Commmon: 10,001-20,000    
* Fairly common: 20,001-30,000   
* Kind of uncommon: 30,001-40,000  
* Uncommon: 40,001-50,000  
* Rare: 50,001-100,000  
* Natives-probably-don't-know-it-level: 100,000+  

## Local audio (BETTER than default)

Using the default audio source (JapanesePod101) in Yomitan is not recommended, as JapanesePod101 sometimes pronounces words with the wrong pitch and has too many missing words.  


[Follow this guide to get local audio.](/shouimethod#local-audio-easy){ .md-button }
{: style="text-align: center" }


Additionally, you can check [Ultimate Yomitan Audio Source](https://animecards.site/yomitan_audio/).  

## Allowing access to file URLs

Enabling this allows you to use Yomitan on local files such as .HTML files.  

!!! failure "PDF Files"
    On Chrome, you need to use [PDF.js](https://mozilla.github.io/pdf.js/web/viewer.html). 

Chromium:  
	- Right click the ![yomi icon](img/yomitan-icon.png)  
	- Click "Manage Extensions"  
	- Enable "Allow access to file URLs"  

Firefox:  
	- Enabled by default.  


## Bonus: Android use with Edge Canary

![Yomitan on Android](img/yomichan_android_updated.jpg)
See [mobile readers](/mobile-reading).  

## Anki Setup

See [Mining Guide](/mining)



<h3>Found this useful? Consider supporting me on Patreon!</h3>   

[:fontawesome-brands-patreon: Support me on Patreon](https://www.patreon.com/shoui){: .md-button }

