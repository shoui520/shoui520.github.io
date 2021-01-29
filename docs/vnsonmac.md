# Visual Novels on macOS Guide


### WINE Method (macOS 10.8 - 10.14)

WINE, in layman's terms, allows you to run Microsoft Windows apps on your Mac.

It is recommended you are running Mojave or newer for this tutorial.  

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
brew install xquartz zenity giflib libpng gnutls mpg123 libgpg-error libjpeg-turbo sqlite zenity libxcomposite libxinerama libgcrypt ncurses libva gst-plugins-base 
```   
If you are on a macOS version older than Mojave, you may encounter errors, please try to install older versions of incompatible packages instead.  

Now we will install WINE Staging manually. [You can get the .PKG for Wine Staging here](https://dl.winehq.org/wine-builds/macosx/pool/winehq-staging-5.7.pkg)  WINE STAGING IS FUCKING CRIPPLED ON OS X
Now need to add WINE to our PATH so we can use it in the terminal.  
First we need to open a terminal text editor.  
```bash
nano .profile
```  
From there we can add the following:  
```bash
export PATH="/Applications/Wine Staging.app/Contents/Resources/wine/bin:$PATH"
export FREETYPE_PROPERTIES="truetype:interpreter-version=35"
export DYLD_FALLBACK_LIBRARY_PATH="/usr/lib:/opt/X11/lib:$DYLD_FALLBACK_LIBRARY_PATH"
```  
Now press ^X to exit and Y and Return to save.  
Now we will install `winetricks` which will help us configure WINE.   
```bash
brew install winetricks
```  
We will now install common dependencies needed by visual novels such as DirectX and Visual C Runtimes.  
```bash
winetricks allcodecs d3dx9 dotnet35 dotnet452 vcrun2003 vcrun2005 vcrun2008 vcrun2010 vcrun2012 vcrun2013 vcrun2015
```

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