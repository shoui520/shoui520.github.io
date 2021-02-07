# Visual Novels on macOS Guide


### WINE Method (macOS 10.8 - 10.14)

!!! warning "Compatibility Issues"
	macOS has poor compatibility, therefore this guide may not work for everyone. 
	The best version to use if you want to run VNs with WINE is **macOS High Sierra 10.13.6**

WINE, in layman's terms, allows you to run Microsoft Windows apps on your Mac.
 
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
!!! warning "macOS Mojave"
	Mojave users need to run `gcc` in the terminal and install Xcode from there before you run the command below.  

Copy and paste this command and hit Return:  
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```  
It will ask for your password because it is an administrative action. Hit Return when asked, and install Xcode when prompted.  
When the Xcode installation is complete, press any key. Now we will need to enter our password again to complete the installation of Brew.  

!!! warning "macOS High Sierra or older"
	Brew no longer supports any version older than Mojave, it may take considerably long to install Brew, or fail entirely on anything older than High Sierra.  


**Step 3. Installing WINE and other dependencies**  

We will install some dependencies using `brew` first.:  
```bash
brew install xquartz zenity giflib libpng gnutls mpg123 libgpg-error libjpeg-turbo sqlite zenity libxcomposite libxinerama libgcrypt ncurses libva gst-plugins-base 
```   

!!! warning "macOS High Sierra or older"
	It is recommend you install old versions of these packages, or else it will not work.  

Now we will install WINE Staging manually. [You can get the .PKG for Wine Staging here](https://dl.winehq.org/wine-builds/macosx/pool/winehq-staging-5.7.pkg)
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
We will now install common dependencies needed by visual novels such as DirectX, Visual C Runtimes and the .NET framework.  

!!! failure "macOS Mojave"
	WINE on macOS Mojave has APFS errors and does not work at all. There is no workaround. Upgrade to Catalina and compile 64 bit version of WINE or downgrade to High Sierra.

```bash
winetricks allcodecs d3dx9 dotnet35 dotnet452 vcrun2003 vcrun2005 vcrun2008 vcrun2010 vcrun2012 vcrun2013 vcrun2015
```  
Then, we need to disable DLL overrides to make VNs work better.
```bash
winetricks settings alldlls=default
```   

You need to install Japanese fonts to WINE now. Please download the pack below.  
[[Google Drive]](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view?usp=drivesdk)  
Unzip the file and move the font files to your `Fonts` folder in `~/.wine/drive_c/Windows/Fonts`   

Some visual novels require you to have LAVFilters installed. You can find the download below.  
[[GitHub]](https://github.com/Nevcairiel/LAVFilters/releases/download/0.74.1/LAVFilters-0.74.1-Installer.exe) 
To run it, you can double click the `.exe` or `cd` to the path it is downloaded to and run `wine LAVFilters-0.74.1-Installer.exe`  
Proceed with the installation.  

**Step 4. CD Emulation**  
Some VNs have a form of DRM (Digital Rights Management) that require you to have the original disc inserted in order for it to run.  
We can use a handy application known as ToastMount 2.0 to mount .ISO files as if it were an actual disc in a CD reader. You can download it below.  
[SourceForge](http://prdownloads.sourceforge.net/toastmount/toastmount-2.0.dmg?download)  
Mount the .DMG file and proceed with the installation.  

**Step 5. Running the installer.**

If your VN comes in an .ISO file, you must mount it using ToastMount 2.0 before preceding. Then you need to `cd` into where the .ISO is mounted/where the installation files are. In the case of the VN I am using for this tutorial, the installation wizard is `Autorun.exe`.    
You can then run:  
```bash
LC_ALL="ja_JP.UTF-8" TZ="Asia/Tokyo" wine Autorun.exe
```
Proceed with the installation. You can reference [Sample VN Install (Windows)](https://learnjapanese.moe/vn/#sample-vn-install-windows) if you need help.  

I installed the game into `~/.wine/drive_c/Program Files/KEY/AngelBeats!`, and have applied the patch.  
I can run it in WINE by first using `cd` into that directory, then running the .exe file with the command below.  
```bash
LC_ALL="ja_JP.UTF-8" TZ="Asia/Tokyo" wine SiglusEngine.exe
```

**Step 6. Texthooking**

Refer to *[Looking up words in VNs using Yomichan and Textractor](https://learnjapanese.moe/vn/#looking-up-words-in-vns-using-yomichan-and-textractor)*.



### Virtual Machine Method (macOS 10.11 - 11.2)

It is usually best to do this option with Microsoft Windows 7, as it works on newer Macs and does not have a tedious hacky setup like WINE.

Search on Google for how to run a Windows virtual machine on your Mac using Parallels (paid) or VirtualBox (free)  
Contact me on Discord if you need help with getting either a Windows XP, 7 or 10 ISO.  

### Dual Boot using Bootcamp Method (All Intel-based Macs)

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

Search on Google for how to use Bootcamp on your Mac.
Contact me on Discord if you need help with getting either a Windows 7 or 10 ISO.  