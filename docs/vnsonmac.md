# Visual Novels on macOS Guide


### WINE Method (macOS 10.8 - 10.14)

WINE, in layman's terms, allows you to run Microsoft Windows apps on your Mac.

*TBA*

**Step 1. Installing Japanese fonts on your Mac.**

You can download all Japanese fonts needed from [this archive](https://drive.google.com/file/d/1gOv5Y4eDMtZTFJIXFWY62nFqkmeeBMkD/view?usp=sharing). Next you need to double click on the archive in Finder, it will extract it into the folder "macOS Japanese Fonts [learnjapanese.moe]"  
Now press `⌘+Space` to bring up Spotlight Search and search for *Font Book.* Now click the + button in Font Book, and select the folder *macOS Japanese Fonts [learnjapanese.moe]* and click *Open* to install the required fonts.

**Step 2. Using the Terminal and installing Brew**

To make this tutorial easier, we will be using the terminal to install a lot of things. We will need `brew` which allows you to install things from the terminal.  
Open Spotlight Search using `⌘+Space` and search for "Terminal" and open it.  
First we need to make sure we can install non App Store verified apps. Type the following command below and hit Return.
```bash
sudo spctl --master-disable
```  
Authenciate with the admin password. You can now go in **System Preferences** > **Security & Privacy** > click the **Lock** at the bottom left > choose **Anywhere**.  

Now go back in the terminal, we will now install `brew`.  
Copy and paste this command and hit Return:  
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```  
It will ask for your password because it is an administrative action. Hit Return when asked, and install Xcode when prompted.  
When the Xcode installation is complete, press any key. Now we will need to enter our password again to complete the installation of Brew.  


**Step 3. Installing WINE and other dependencies**  

We will install some dependencies using `brew` first.:  
```bash
brew install giflib libpng gnutls mpg123 libgpg-error libjpeg-turbo sqlite libxcomposite libxinerama libgcrypt ncurses libxslt libva gst-plugins-base xquartz
```  
If .  
```bash
brew install --build-from-source mpg123 libgpg-error jpeg-turbo sqlite
```

Now we will install WINE Staging manually. [You can get the .PKG for Wine Staging here](https://dl.winehq.org/wine-builds/macosx/pool/winehq-staging-5.7.pkg)  
*TBA*

### Virtual Machine Method (macOS 10.11 - 11.2)

It is usually best to do this option with Microsoft Windows 7, as it works on newer Macs and does not have a tedious hacky setup like WINE.

*TBA*

### Dual Boot Method (All Intel-based Macs)

All Intel-based Macs are able to run Microsoft Windows, with the exception of Macs that predate 2007.   
If your Mac supports it, I recommend you run Windows 7 instead of Windows 10.  

**Macs that support Windows 7:**  

Any Intel-based Mac that predates 2014. (With the exception of 2013 Mac Pro)

**Macs that support Windows 10:**

Intel-based MacBook introduced in 2015 or later   
Intel-based MacBook Air introduced in 2012 or later  
Intel-based MacBook Pro introduced in 2012 or later   
Intel-based Mac mini introduced in 2012 or later   
Intel-based iMac introduced in 2012 or later  
Intel-based iMac Pro (all models)    
Intel-based Mac Pro introduced in 2013 or later     

*TBA*