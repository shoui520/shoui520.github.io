# Visual Novel Guide 

### What are Visual Novels?

Visual Novels (often abbreviated as **VN**) can be described as sort of a mix of a novel and a game, they feature a text-based storyline and only little interaction from the player. Most VNs have anime-like visuals, and are usually accompanied by voice acting, background music and sound effects. Throughout the game, the player may be given choices, which will affect how the story will play out, so if you play it a second time, with different choices, you may get an entirely different plot.

![Image](img/vn1.jpg)

### Why Visual Novels?
Reading Japanese is extremely important, but not everyone loves reading books, you may feel fatigued after a while reading a standard, text-only novel but oddly enough you may be able to read VNs for hours without feeling fatigued. VNs have a mix of literary prose and conversational Japanese, so it is perfect for reading immersion.
For the people that probably don't enjoy reading, and even find manga boring, VNs might just be perfect for you.
![Image](img/vn2.jpg)

### Playing visual novels to learn Japanese

This guide will go over how to play visual novels in Japanese and learn Japanese from them, this guide assumes you already have a Japanese visual novel set up and working, if not, check out [Cross Platform VN Setup](/vn-setup).

Requirements:

[Textractor](https://github.com/Artikash/Textractor/releases)  
[Yomichan](https://foosoft.net/projects/yomichan/)  
[Clipboard Inserter](https://github.com/kmltml/clipboard-inserter) ([Firefox Version Here](https://addons.mozilla.org/en-US/firefox/addon/lap-clipboard-inserter/))  
[Texthooking Page](https://learnjapanese.moe/texthooker.html)  

A detailed Yomichan setup tutorial can be found [here](/yomichan)

For most applications, use the x86 executable of Textractor.

!!! info "Steins;Gate"
	If you wish to hook Steins;Gate and Steins;Gate 0, please check out [Steins;Gate Textractor](https://github.com/shiiion/steinsgate_textractor)  

Launch your VN and Textractor and first remove all the unneeded extensions by pressing the ++delete++ key. 

Remove the following:

- Bing Translate
- Any other translate
- Extra Window
- Extra Newlines
- Styler 

![Image](img/textractor1.png)  

!!! warning "Order of extensions" 
	Your order of extensions is important. Here is what I usually recommend:  
	- Remove Repeated Characters  
	- Remove Repeated Phrases  
	- Regex Filter (optional, but needs to be above clipboard)  
	- Copy to Clipboard  

Now we need to *attach* Textractor to your VN. 

![Image](img/textractor2.png)  

When it is attached, advance the text in the VN then cycle through the hooks to find the hook that matches the text displayed on the VN.  

![Image](img/textractor3.png)  

Now open your browser, head over to my [texthooking page](https://learnjapanese.moe/texthooker.html) make sure **Clipboard Inserter** is installed and enabled and then advance the text in the VN again.  

![Image](img/textractor4.png)  

You can then just press ++shift++ to use Yomichan.  

![Image](img/textractor5.png)  

All done! Enjoy the reading!! :smirk_cat:

You can track how much characters you have read using the indicator in the top right corner of the texthooking page.
You can choose to keep the text when you refresh the page, or just the character count, or nothing.  
The texthooking page has an "accurate character count", meaning it does not count special characters and punctuation such as 。「」 in the count.   

!!! info "Can't hook?"
	Try referring to the [H-Code list @ Visual Novel Texthooking Wiki](https://vn-hooking.fandom.com/wiki/H-Code)  
	Little Busters! players, use the Ecstasy version and see [this](https://cdn.discordapp.com/attachments/813105334763126814/1047252417735036988/little_busters.png)  

### Need a walkthrough?
If you are not used to visual novels, or games that make you make choices that decide the fate of the story, you may want to use a walkthrough. After all, you wouldn't want to get a bad ending.  
You can find walkthroughs by searching “[vn name] 攻略” e.g. “Angel Beats! -1st Beat- 攻略”.  

If you insist on not using a walkthrough, it is a wise decision to create a save file everytime you are faced with a choice. VN's often have 99+ save data slots, because they assume you'll be populating them with every decision point in the game.  

### Unsure what to play?

Have a look at visual novel lists below

[jamal's list](https://anacreondjt.gitlab.io/vn-chart/)  
[This infamous list](https://docs.google.com/document/u/1/d/1KnyyDt7jimEz-dgeMSKymRaT2r3QKBPm9AzqZ6oUWAs/pub)  
[Dinuz's list](/dinuzlist)  
[Chronopolize's list](https://docs.google.com/spreadsheets/d/18vCgQHhBNBeRJdcTcyUi2Atq-nAapQW--33qrwl5Yfw)  
[The best visual novels ever made (according to VNDB rankings)](https://vndb.org/v?f=022gja3gja&s=34w)  

Have fun reading!

Consider joining our **VN Club** in the [Discord](https://discord.gg/nhqjydaR8j)!

### Bonus: Using Textractor for PPSSPP Visual Novels
Hooking PPSSPP Visual Novels require you to use the x86 (32-bit) version of PPSSPP along with the x86 version of Textractor.  
 
1. Launch PPSSPP (32-bit)  
2. Launch the Visual Novel.  
3. Attach Textractor (x86) to PPSSPP (32-bit)  
4. Advance the text in the VN (O button)  
5. Using the "Search for hooks" feature, select "search for specific text"  
6. Search for the specific text that is on the PPSSPP VN. It needs to be **exact.**  
7. It will take a while to search for the hook, your emulator may start to lag for a while.  
8. If Textractor asks, (keep an eye on the Console) frantically advance the text (O button) on the PPSSPP VN.  
9. Now it will have found the hook.  
10. Advance the text once more (O button)  
11. Cycle through the hooks to see which hook has the newly advanced text.   
12. That's it! :tada: You could save the hook to make the process more convenient later.  

Proof of texthooking working with PPSSPP:  
  
![Image](img/vnpsp2.jpg)  
