# Cross Platform Visual Novel Setup 

This page will go over how to set up visual novels on all platforms.  

## Getting Visual Novels

Check out the [Resources](/resources/#the-following-may-be-nsfw) page to find where to get Visual novels.

Visual novels for Microsoft Windows are distributed commonly in disc image files. Usually in .ISO and sometimes .MDF/.MDS files, or, these files but contained in a .rar/.zip/.7z file.

!!! question "Glossary: disc image file"
	A disc image file does not refer to a picture of a disc, rather it is a file (usually `.iso`) that contains an exact copy of what was on a disc. Remember: Japanese visual novels are sold on optical discs, and then people make an exact copy of what is on the disc onto an `.iso` or `.mdf/.mds` file.

## Microsoft Windows (7 - 10)

Visual novels are always Microsoft Windows applications. If you have a Windows PC, you will always be able to run visual novels as long as your visual novel supports the Windows version you are running. For most VNs out there, Windows 7 is a minimum, older titles will also work on XP. Newer titles released after 2019 will require Windows 8.1 as a minimum.  

### Step 1. Setting Japanese Locale

!!! tip "Word of Wisdom"
	Always create a Restore Point before making any administrative modifications to your system, even if what you're doing is extremely unlikely to cause any damage. ++windows+r++ > `sysdm.cpl` > System Protection > Create > *enter a name*

Japanese visual novels will not run without Japanese locale. You may use a locale emulator, though it is less of a hassle to just change system-wide locale in my opinion.
Follow the steps below to set Japanese locale on your Windows system.  

1. Open the Run dialog box using ++windows+r++
2. Type `intl.cpl` and hit ++enter++.
3. Click on the **Administrative** tab, go to **Change System Locale** and select **Japanese (Japan)** and click **OK**.
4. Reboot your PC to apply the changes.

Japanese locale can also be enabled using **Windows Powershell (Administrator)**:
```powershell
Set-WinSystemLocale -SystemLocale ja-JP; Restart-Computer
```
This will restart your PC.

### Step 2. Extracting archives and mounting images

Requirements:  
[Get 7-Zip](https://www.7-zip.org/)  
[Get WinCDEmu](https://wincdemu.sysprogs.org/download/)  

!!! info "Alternatives"
	I am aware of alternatives such as DAEMON Tools as an alternative for WinCDEmu and WinRAR as an alternative for 7-Zip. However, I would **rather not** use crappy software. #FOSS

We will be using 2 pieces of software today, *7-Zip* which is a tool for making and extracting archives such as `.zip` , `.tar` and `.7z` files, and *WinCDEmu* which allows us to mount image files such as `.mds/.mdf`, `.iso`.  
	
If you have downloaded a visual novel, and it came in a .rar/.zip/.7z archive, you must extract it before you can mount the installation files. You can use 7-Zip for this. 

> Right click the archive > 7-Zip > Extract to %folder%

![Image](img/vnwin1.jpg)

Above is an example of extracting the archive using 7-Zip.  

After the archive has been extracted, we will now use WinCDEmu to mount the image that has been extracted from it.  

> Right click the image > Select drive letter & mount > OK

![Image](img/vnwin2.jpg)  

After that,

![Image](img/vnwin3.jpg)  

The disc image is now mounted. You should see a new volume appear on your Explorer sidebar.

![Image](img/vnwin4.jpg)  

!!! info ".MDS/.MDF files"
	It is a little different if you have .MDS/.MDF files, see below.  

![Image](img/vnwin5.jpg)

### Step 3. Installing the VN and applying patch

Click on the new volume that appeared on your sidebar and run the installer. See below for details.  

![Image](img/vnwin6.jpg)  

Proceed with the installation, you may want to take note of where you installed the game. I installed Angel Beats! into `D:\Games\KEY\AngelBeats!`

If your visual novel came with a crack, you will need to apply this crack before you are able to launch the game. Cracks often come in the form of a .exe/.dll file found in folders/archives called "AlphaROM" or  "NoDVD" or simply just "Patch" or "Crack", whatever it may be, copy these files into the installation directory of the game.  

You can find an example below. Sorry for the "awkward" cursor placement, it happens in the recording for some reason.  

![Image](img/vnwin7.gif)  

After that, you should just be able to launch the game! 

!!! info "Common problems"
	Common problems that persist is the game asking for the original disc to be inserted, even after a crack is applied, restart your PC to fix this.
	Another issue is the game not loading at all or having garbled text, in this case, check Japanese locale is set and then restart your PC.
!!! tip "No Crack?"
	If there is no crack available for your VN, and your VN does not launch, use [AlphaROMdiE](https://cdn.discordapp.com/attachments/813105334763126814/813105570567159898/AlphaROMdiE-Build20140214.zip). See pictures within .zip file for instructions.

Now go back to [Visual Novel Guide](https://learnjapanese.moe/vn/#looking-up-words-in-vns-using-yomichan-and-textractor) to learn how to use Textractor with Yomichan.

### Windows: Troubleshooting

!!! info "Direct3D, Visual C++ Related Issues" 
	This can be easily fixed by installing DirectX [here](https://www.microsoft.com/en-us/Download/confirmation.aspx?id=35) and all the Visual C++ Redistributable Runtimes [here](https://www.techpowerup.com/download/visual-c-redistributable-runtime-package-all-in-one/).  
!!! info "Garbled Text (文字化け)"  
	Solution 1: Check [Japanese locale](#step-1-setting-japanese-locale) and restart your PC.  
	Solution 2: Install Japanese fonts. Download [this .zip file](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view?usp=drivesdk). Extract, ++ctrl+a++(select all), Right click, Install, check "Do this for all current items", then Yes.  
!!! info "Japan Time Zone Required"
	Make sure all patch(es)/crack(s) are applied. If the problem persists, do the following: ++windows+i++ > Time & Language > "Set time zone automatically" OFF > Time zone: (UTC+9:00 Osaka, Sapporo, Tokyo)

!!! info "Legacy Visual Novels"
	If your visual novel is particularly old and does not work with recent versions of Windows, you can try using a [Windows XP Virtual Machine](#windows-xp-virtual-machine)  
!!! failure  "Rare error: Boot failure 0xc000000f"  
	This is an issue that happens after locale settings are changed on a system that is missing NLS (National Language Support) files. If this happens to you, then it is likely you were using a **unofficial modified copy of Windows**. See [this article](https://support.microsoft.com/en-us/windows/about-genuine-windows-0b88ba3d-f799-7c15-9f36-2be445a56493) to check. Also check Windows Update for Japanese language packs and [Microsoft Software Download Center](https://www.microsoft.com/en-us/software-download/) for getting clean disc images for Windows. If you need to restore your system, insert a Windows recovery media and restore from a restore point.  

## macOS

Visual novels are only Microsoft Windows applications, therefore if you want to run a visual novel on your Mac you must either, virtualize/dual boot Windows or use *Wine*.

### Virtual Machines (10.11 - 11.x)

It is usually best to use a Virtual Machine of Microsoft Windows 7, as it works on newer Macs and does not have a hacky setup like Wine. Why not Windows 10? Simply because 10 is not necessary for Visual Novels and is also bloated.  

Search on Google for how to run a Windows virtual machine on your Mac using Parallels (paid) or VirtualBox (free). I do not own an actual Mac, so I can't provide instructions on how to do this. Fortunately this isn't VN specific, and you can just find instructions everywhere on Google.    
Contact me on Discord if you need help with getting either a Windows XP, 7 or 10 ISO.  

### Boot Camp Assistant (Intel® based Macs)

You can check if your Mac is an Intel® based Mac by doing the following command in Terminal:
```bash
sysctl -n machdep.cpu.brand_string 
```
You can pipe this together with `| grep Intel(R)` if you want.  

All Intel® based Macs are able to run Microsoft Windows, with the exception of Macs that predate 2007.   
If your Mac supports it, I recommend you run Windows 7 instead of Windows 10.  

**Macs that support Windows 7:**  

Any Intel® based Mac that predates 2014. (With the exception of 2013 Mac Pro)

**Macs that support Windows 10:**

Intel® based MacBook introduced in 2015 or later   
Intel® based MacBook Air introduced in 2012 or later  
Intel® based MacBook Pro introduced in 2012 or later   
Intel® based Mac mini introduced in 2012 or later   
Intel® based iMac introduced in 2012 or later  
Intel® based iMac Pro (all models)    
Intel® based Mac Pro introduced in 2013 or later     

Search on Google for how to use Boot Camp on your Mac. I do not own an actual Mac, so I can't provide instructions on how to do this. Fortunately this isn't VN specific, and you can just find instructions everywhere on Google.
Contact me on Discord if you need help with getting either a Windows 7 or 10 ISO.  

### Wine (10.8 - 11.x)

!!! info "macOS Catalina"
	Only CrossOver-19 and later will run on macOS Catalina.  
!!! info "macOS Big Sur"
	Only CrossOver-20 and later will run on macOS Big Sur.  
!!! warning "Compatibility Issues"
	macOS has poor backwards compatibility, therefore this guide may not work for everyone. 


Wine, in layman's terms, allows you to run Microsoft Windows applications on your Mac without any virtualization or dual booting.
 
#### Step 1. Installing Japanese fonts on your Mac.

You can download all Japanese fonts needed from [this archive](https://drive.google.com/file/d/1gOv5Y4eDMtZTFJIXFWY62nFqkmeeBMkD/view?usp=sharing). Next you need to double click on the archive in Finder, it will extract it into the folder "macOS Japanese Fonts [learnjapanese.moe]"  
Now press ++command+space++ to bring up Spotlight Search and search for *Font Book.* Now click the + button in Font Book, and select the folder *macOS Japanese Fonts [learnjapanese.moe]* and click *Open* to install the required fonts.

#### Step 2. Using the Terminal and installing Brew

!!! warning "macOS High Sierra or older"
	Brew no longer officially supports any version older than Mojave, it may take considerably long to install Brew, or fail entirely on anything older than High Sierra.  

To make this tutorial easier, we will be using the terminal to install a lot of things. We will need `brew` which allows you to install things from the terminal.  
Open Spotlight Search using ++cmd+space++ and search for "Terminal" and open it.  

First we need to set Gatekeeper to allow us to install non App Store verified apps. Type the following command below and hit Return.
```bash
sudo spctl --master-disable
```  
Authenticate with the admin password. You can now go in **System Preferences** > **Security & Privacy** > click the **Lock** at the bottom left > choose **Anywhere**.

!!! note "Re-enabling Gatekeeper"
	You can revert this change using `sudo spctl --master-enable`

Now go back in the terminal, we will now install `brew`.  

!!! info "macOS Mojave"
	Mojave users need to run `gcc` in the terminal and install Xcode from there before you run the command below.  

Copy and paste this command and hit Return:  
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```  
It will ask for your password because it is an administrative action. Hit Return when asked, and install Xcode when prompted.  
When the Xcode installation is complete, press any key. Now we will need to enter our password again to complete the installation of Brew.  

#### Step 3. Installing Wine and other dependencies  

First, we need to make sure **XQuartz 2.7.7** or above is installed. We can install it with `brew`

```bash
brew install --cask xquartz
```  

Now we can install Wine-Staging, which is the best for macOS as it has all the patches. 
First add the casks,  
```bash
brew tap homebrew/cask-versions
brew tap gcenx/wine
```  

Now:  
```bash
brew install --cask --no-quarantine gcenx-wine-staging
```  

!!! info "macOS Catalina & later"  
	You need to do `brew install --cask --no-quarantine wine-crossover` instead.

We will now create a **32-bit** Wine prefix, this has the best compatibility and stability.  

!!! warning "AMD Hackintosh"
	If you are using a Hackintosh with an AMD processor, you must use a 64-bit Wine prefix. `wineboot` without a `WINEARCH` parameter, also `wine` commands must be run with `wine64` instead.  

!!! info "macOS Catalina & later"
	From [Gcenx/wine-on-mac](https://github.com/Gcenx/wine-on-mac): On macOS Catalina 10.15.0 to 10.15.3, [SIP](https://support.apple.com/en-us/HT204899) needs to be disabled this will allow `wine32on64` to change the state of `i386_set_ldt`. 

```bash
WINEARCH=win32 wineboot
```  

Now we can install `winetricks` which helps us configure Wine and install software along with `zenity` which gives us a graphical interface.  

```bash
brew install winetricks zenity
```

Now we need to use XQuartz as our display driver, this will let us use hardware acceleration for the Wine window.  

```bash
winetricks macdriver=x11
```  

!!! question "Having issues?"  
	You can set the display driver back to the native Mac driver using `winetricks macdriver=mac`  

Now let's install the needed dependencies to run visual novels as well as some components to make video cutscenes work.  

```bash
winetricks quartz ffdshow lavfilters wmp10 d3dx9 dotnet35 vcrun2003 vcrun2005 vcrun2008 vcrun2010 vcrun2012 vcrun2013 vcrun2015
```  
Graphical installers will show up, this is very similar to .pkg installers on macOS, so you should be pretty familiar already. 

!!! tip "Optional: Font smoothing"
	You can do `winetricks fontsmooth=rgb` because without it, the font is simply awful.  

!!! tip "Optional: GUI Improvments"
	You can open the Registry Editor using `wine regedit` and import [this .reg file](https://cdn.discordapp.com/attachments/813105334763126814/813105422285799464/wine_breeze_colors.reg), the GUI should look nice and clean then.  

You need to install Japanese fonts into Wine now. Please download the pack below.  
[[Google Drive]](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view?usp=drivesdk)  
Unzip the file and move the font files to your `Fonts` folder in `~/.wine/drive_c/Windows/Fonts`    

!!! tip "Spotlight Search"
	If you cannot find the `.wine` folder or have no idea what `~` is, just copy and paste that into Spotlight Search and it will open the directory for you. 

!!! question "Why not install `cjkfonts` in winetricks?"
	Because it doesn't work properly for visual novels.

#### Step 4. Running the installer

If your VN comes in an .ISO file, you must double click on it to mount it, I will be using Angel Beats! ~1st beat~ for this tutorial. The .ISO file is `ab_1st.iso`.  
![ab_1st.iso in Finder](img/vnmac1.jpg)  

Now you must find the mount point by using `diskutil`, you can do that below.  
```bash
diskutil list
```
Look at the output for the mounted .ISO, for me it is `/dev/disk3`. Now we need to find the mount point. 

```bash
diskutil info /dev/your_disk_here | grep 'Mount Point'
```
The mount point for my .ISO is `/Volumes/ab_1st`. I can now `cd` into that directory.  

![Macintosh Terminal](img/vnmac2.jpg)  

You can then run:  

```bash
LC_ALL="ja_JP.UTF-8" TZ="Asia/Tokyo" wine Autorun.exe
```  

!!! info "Executable Filenames"
	Filenames for executables will not always be the same for every visual novel, please run whatever you have.  
	It is `Autorun.exe` for me but it may be `setup.exe` for you, for example.  

Proceed with the installation.   

I installed the game into `~/.wine/drive_c/Program Files/KEY/AngelBeats!`, and have applied the patch.  
I can run it in Wine by first using `cd` into that directory, then running the .exe file with the command below.  

```bash
LC_ALL="ja_JP.UTF-8" TZ="Asia/Tokyo" wine SiglusEngine.exe
```

!!! question "cd not working, directory not found?"
	Because `Program Files` has a space, you must put the path in quotation marks. 
	Example: `"~/.wine/drive_c/Program Files/"`  

!!! question "DirectX (Direct3D) not working?"  
	Make sure `d3dx9` is installed with winetricks. 
	Note that you cannot use hardware 3D accelerated programs on a macOS virtual machine without GPU passthrough.  

#### Step 5. CD Emulation  
Some VNs have a form of DRM (Digital Rights Management) that require you to have the original disc inserted in order for it to run.  
If the VN you downloaded does not come with a crack, CD emulation needs to be done in order to launch the game, that is done using a tool called CDEmu on Linux and WinCDEmu on Windows, however, there is no macOS version, so you can just mount the .ISO file normally and use [AlphaROMdiE](https://cdn.discordapp.com/attachments/813105334763126814/813105570567159898/AlphaROMdiE-Build20140214.zip) to trick the VN executable into thinking that the original disc is insterted. To use, drag the VN executable onto the AlphaROM GUI.  

#### Step 6. Texthooking

Now go back to [Visual Novel Guide](https://learnjapanese.moe/vn/#looking-up-words-in-vns-using-yomichan-and-textractor) to learn how to use Textractor, it works perfectly under Wine.


## GNU/Linux

Visual novels are only Microsoft Windows applications, therefore you must use Wine in order to run them. This works exceptionally well on Linux.  

### Wine

Follow the steps below to run VNs on Linux. 

#### Step 1. Install Dependencies

**Arch**

You will need to enable multilib before running this command. To do this, uncomment the `[multilib]` section in `/etc/pacman.conf`.

```bash
sudo pacman -S wine winetricks giflib lib32-giflib libpng lib32-libpng libldap lib32-libldap gnutls lib32-gnutls mpg123 lib32-mpg123 openal lib32-openal v4l-utils lib32-v4l-utils libpulse lib32-libpulse libgpg-error lib32-libgpg-error alsa-plugins lib32-alsa-plugins alsa-lib lib32-alsa-lib libjpeg-turbo lib32-libjpeg-turbo sqlite lib32-sqlite libxcomposite lib32-libxcomposite libxinerama lib32-libgcrypt libgcrypt lib32-libxinerama ncurses lib32-ncurses opencl-icd-loader lib32-opencl-icd-loader libxslt lib32-libxslt libva lib32-libva gst-plugins-base-libs lib32-gst-plugins-base-libs lutris cdemu-client cdemu-daemon
```

!!! info "Custom Kernels"
	If you are using a custom kernel such as Xanmod, install `vhba-module-dkms`. Otherwise, install `vhba-module`.  

You can then enable the CDEmu daemon by running:

```bash
sudo systemctl enable --now cdemu-daemon
```
**Debian/Ubuntu**

!!! info "Ubuntu 20.10"
	If you are on Ubuntu 20.10 you must do `sudo add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ groovy main' -y` instead. 

First you will need to enable 32-bit architecture.  
```bash
sudo dpkg --add-architecture i386
```  
Download the WineHQ repository key:  
```bash
wget -nc https://dl.winehq.org/wine-builds/winehq.key
```  
Now add the WineHQ repository key:  
```bash
sudo apt-key add winehq.key
```  
Add the repository:  
```bash
sudo add-apt-repository 'deb https://dl.winehq.org/wine-builds/ubuntu/ focal main' -y
```
Add PPA's for Lutris:  
```bash
sudo add-apt-repository ppa:lutris-team/lutris -y
```
Add PPA's for CDEmu:  
```bash
sudo add-apt-repository ppa:cdemu/ppa -y
```
Update packages:  
```bash
sudo apt update
```
Now install the stable version of Wine:  
```bash
sudo apt-get install --install-recommends winehq-stable -y
```
Now install Lutris, CDEmu and some needed libraries:  
```bash
sudo apt-get install lutris gcdemu cdemu-client libgnutls30:i386 libldap-2.4-2:i386 libgpg-error0:i386 libxml2:i386 libasound2-plugins:i386 libsdl2-2.0-0:i386 libfreetype6:i386 libdbus-1-3:i386 libsqlite3-0:i386 libgstreamer-plugins-good1.0-0:1386 ocl-icd-dev:i386 -y
```
Now we need to install `winetricks` manually because the one on the repository already is outdated and causes errors.  
First, wget the binary:  
```bash
wget https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
```
Use `chmod` to make it into an executable:  
```bash
chmod +x winetricks
```
Now copy it to your `/usr/bin` so it can be used in a command line.  
```bash
sudo cp winetricks /usr/bin
```  
All done!  

**Gentoo**

Make sure your kernel is compiled with the following options enabled:

1. `CONFIG_BLK_DEV_SR`
2. `CONFIG_ISO9660_FS`
3. `CONFIG_UDF_FS`

It is recommended to have the following global use flags in your `make.conf`:

1. `X`
2. `pulseaudio`
3. `jpeg`
4. `png`

```bash
sudo emerge -av virtual/wine games-util/lutris app-cdr/cdemu app-emulation/winetricks
sudo modprobe vhba
```

Edit your `/etc/conf.d/modules` file and add this:

```toml
modules="vhba"
```

In order for the CDEmu daemon to be started automatically on boot, you will need to have dbus enabled. You can enable it by running:

```bash
sudo rc-update add dbus default
```

#### Step 2. Configure Wine and install runtimes

First we need to create a 32 bit Wine prefix, this has the best compatibility and 64 bit is unnecessary for VNs.

```bash
WINEARCH=win32 wineboot
```
Now we need to install the common redistributables such as DirectX, Visual C++ Runtimes and .NET Framework 3.5 and other things that make video cutscenes work. 

!!! tip "Optional: Font smoothing"
	You can do `winetricks fontsmooth=rgb` because without it, the font is simply awful.  

!!! tip "Optional: GUI Improvments"
	You can open the Registry Editor using `wine regedit` and import [this .reg file](https://cdn.discordapp.com/attachments/813105334763126814/813105422285799464/wine_breeze_colors.reg), the GUI should look nice and clean then.  


```bash
winetricks ffdshow quartz wmp10 lavfilters d3dx9 dxvk dotnet35 vcrun2003 vcrun2005 vcrun2008 vcrun2010 vcrun2012 vcrun2013 vcrun2015
```
Then, run this command to disable DLL overrides:

```bash
winetricks alldlls=default
```

You need to install Japanese fonts to Wine now. Please download the pack below.  
[[Google Drive]](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view?usp=drivesdk)  
Unzip the file and move the font files to your `Fonts` folder in `~/.wine/drive_c/Windows/Fonts`    

!!! question "Why not install `cjkfonts` in winetricks?"
	Because it doesn't work properly for VNs.

If your Wine Windows version was set to XP, set it back to 7 using:  

```bash
winecfg -v win7
```  
It is useful to know that changing the Windows version in Wine does not change the way Wine behaves, rather, it only changes what it reports to the application, since 99% of VNs recommend Windows 7, we will be using that.  

Once thats done, we can setup Lutris.

Open Lutris, and click the plus icon in the top left corner, and click Install runners.

![Image](img/vnlinux1.jpg)

Scroll down to the bottom and find "Wine" and click the cog icon next to it.  

![Image](img/vnlinux2.jpg)  

Now go to System options and set the environment variables as shown below and click Save.  

![Image](img/vnlinux3.jpg)  

#### Step 3. Installing the visual novel

I will be using 古色迷宮輪舞曲～HISTOIRE DE DESTIN～ for this demonstration. Visual Novels usually come in .ISO files and if not, an .MDS/.MDF file which can be converted to an .ISO using tools such as mdf2iso.  
In the case of 古色迷宮輪舞曲～HISTOIRE DE DESTIN～, the install files came in an .ISO, so we got lucky here.  

Navigate to the path of the .ISO  

```bash
cd /path/to/visualnovelfolder
```

Load the .ISO file with CDEmu
```bash
cdemu load 0 file.ISO
```

Create a mount point for the ISO file.

```bash
sudo mkdir -p /media/cdrom0
```
Now we can mount our ISO to our mount point.  

```bash
sudo mount -o loop file.ISO /media/cdrom0
```  

If all went well, you will be able to see the ISO contents like:  

![Image](img/vnlinux4.jpg)

Next, we will run the setup file using `wine`:

```bash
LC_ALL="ja_JP.UTF-8" TZ="Asia/Tokyo" wine launcher.exe
```

Proceed with the installation. The game may be installed in `~/.wine/drive_c/Program Files` or wherever you chose to install it.

Now we can add the game to Lutris so we can launch it quickly.  

Back in Lutris, click the plus icon in the corner, add the name of the VN, choose Wine as the runner and under "Game Options" navigate to the game's executable. You should also change the prefix architecture to 32-bit.

![Image](img/vnlinux5-sup.jpg)  

![Image](img/vnlinux5.jpg)  

!!! warning "Vulkan Unsupported Systems"
	If your system does not support Vulkan, you must disable DXVK in "Runner options", this will fallback to regular D3DX9. DXVK is a Vulkan implementation of Direct3D so we will be keeping it on even though VNs don't use 3D graphics.  

Now you can just launch it in Lutris!  

![Image](img/vnlinux6.jpg)  

and viola!  

![Image](img/vnlinux7.jpg)

!!! question "Why do you use *that* distro?"
	I don't. I only used it in a virtual machine for this tutorial.

Now go back to [Visual Novel Guide](https://learnjapanese.moe/vn/#looking-up-words-in-vns-using-yomichan-and-textractor) to learn how to use Textractor, it works perfectly under Wine.
 

## BSD (FreeBSD)

Visual novels are only Microsoft Windows applications, therefore you must use Wine in order to run them.

### Wine

TBA

## Android

### Using PPSSSPP Emulator

There are a couple of native Android visual novels but these are usually spin-offs/gacha cash-grabs.  

The best option is to use [PPSSPP](https://play.google.com/store/apps/details?id=org.ppsspp.ppsspp) emulator and download PSP ROMs.

PSP games are probably the best quality visual novels you can get on a mobile device.

![Image](img/vnpsp1.jpg)  

### Running Microsoft Windows in QEMU

deprecated

## iOS

### Non-jailbreak: Using PPSSPP Emulator

Again, there *are* in fact native iOS visual novels, but I feel like emulating PSP visual novels is a better idea, just because the games on a PSP console are just going to be *so* much higher quality than games made for phones.

It is a little more tricky to get PPSSPP working on iOS without a jailbreak, but it is definitely possible.  
You will need:  
[AltStore](https://altstore.io/) - check the [FAQ](https://altstore.io/faq/) on the website for instructions  
[PPSSPP IPA](https://build.ppsspp.org/builds/iOS/ppssppbuildbot-org.ppsspp.ppsspp-dev-working-ios.ipa)

### Jailbreak: Using PPSSPP Emulator

PPSSPP can be installed via Cydia package by adding the repository: `https://cydia.ppsspp.org/`.

## Emulators

TBA

## Windows XP Virtual Machine

### Requirements
	
Oracle VM VirtualBox [(Link)](https://www.virtualbox.org/wiki/Downloads)  

Windows XP Professional SP3 Disc Image (.ISO) (Will not be provided here due to copyright, contact me at the Discord)  

At least 4GB RAM (Recommended)  

At least 30GB free disk space. (Recommended) 

Virtualization technology enabled in your BIOS. (Highly Recommended, you can search on Google how to do this for your computer.)  


### Full Setup

Here I'll walk you through the entire process. From installing Windows XP to getting a VN hooked and working.

1. Install Oracle VM VirtualBox  
2. Acquire a disc image for Windows XP Professional SP3  
3. Open Oracle VM Virtual Box, at the top, click the blue "New" button.  
4. You can set any name you wish.  
5. Make the "Type" `Microsoft Windows` and the "Version" `Windows XP (32-bit)`. Click next.   
6. For the memory size, make it at least `768` MB. Click next.  
7. Keep on clicking next until you reach the "File location and size". Over here you'd want to set the size of the virtual hard disk to `30.00 GB`. Now click Create.  
8. Now double click the virtual machine that has now appeared in the left menu to run the virtual machine.    
9. In the "Select start-up disk" dialog box, click the little folder icon, and then click "Add".  
10. Navigate to the disc image (.ISO) for Windows XP Professional SP3, open it and then click "Choose".  
11. Now click "Start" and wait for Windows XP to boot into the installation.  
12. You will be greeted with a blue installation screen. Don't worry. Just keep hitting the ++enter++ key.  
13. When the initial setup is complete, Windows XP will boot into another installation screen. Wait it out.  
14. Before installation finishes, it will ask for your name, computer name, password. Just do whatever. I put "shoui" for every field. You will be asked to set a time zone too, do Tokyo because some VNs actually check for Japanese time zone.
15. Once it finishes installation and reboots, you will be greeted with Windows XP setup. Enjoy the music!  
16. Click Next, then Yes, then Next, then No, then Next, then No, then put your name, then Finish.  
17. Wait until Windows XP boots into the desktop. Nostalgic isn't it?  
18. Turn off your Windows XP virtual machine. ++alt+f4++ > Turn Off  
19. We will now increase the specs of your VM. Click on the VM on the left menu, then click the orange "Settings" button.  
20. Go in System > Processor, and increase the CPU core count to whatever is on the green bar. For me it's `2` CPUs. If you want to use more than 4GB of memory on this VM, enable PAE/NX too.
21. Now go in Display and enable 3D acceleration and set video memory to `128 MB`
22. Now launch your VM again by double clicking it in the left menu.
23. Once you are in the XP desktop. On the VirtualBox window, click "Devices" and then click on "Insert Guest Addons CD Image"  
24. It will now automatically run VBox Guest Additions setup, install it and reboot your VM. Go in Devices again and set Drag and Drop to Bidirectional. This will allow us to drag and drop files from our actual PC to our VM.  
25. Now we will enable Japanese locale. Again in "Devices", click on Optical Drives > select the disc image you used to install Windows XP. Exit setup when prompted.  
26. Now open a Run dialog box, by doing ++windows+r++, and enter `intl.cpl`. Go in the `Languages` tab and check "Install files for East Asian languages" now hit Apply. Do not reboot yet.   
27. Go in the Regional Options tab and set format to Japanese and location to Japan. Hit Apply.  
28. Now go in the Advanced tab and set "Language for non-Unicode programs" to Japanese. Hit Apply. Now reboot your VM when prompted.  
29. Now go and install some software. I recommend you download these on your actual PC and just drag and drop it into your VM.  
		[7-Zip (32 bit)](https://www.7-zip.org/a/7z1900.exe)  	
		[Mozilla Firefox 52.9.0 ESR](https://ftp.mozilla.org/pub/firefox/releases/52.9.0esr/win32/en-US/Firefox%20Setup%2052.9.0esr.exe)  - Most recent browser that supports XP.  
		[ITHVNR](https://cdn.discordapp.com/attachments/715225470798659667/799731133683728404/ITHVNR-3.4524.1-win32.7z) - because Textractor is not supported on XP. Install vcredist_x86 to make it work.  
		[MacType](https://github.com/snowie2000/mactype/releases/download/2019.1-beta6/MacTypeInstaller_2019.1-beta6.exe) - Fix pixelated CJK font. Also recommend on Win10. Use registry mode. :slight_smile:  
30. In "Devices" enable bidirectional clipboard.
31. Download your visual novel of choice and drag and drop it to your VM. If it needs to be installed, then install it.
32. Open ITHVNR and your VN. In ITHVNR, go in "Process", find the process of the VN, then click "Attach" and "OK"
33. Advance some text in the VN. Now cycle through the hooks in ITHVNR and find the right hook.
34. ITHVNR will automatically copy text to your clipboard, which is shared with your actual PC. I recommend you use [Yomichan](/yomichan)'s clipboard monitor :)
35. Phew, that's pretty much it, have fun!
![Image](img/winxp1.jpg)
*from vm*
![Image](img/winxp2.jpg)  
*from actual pc*

## MS-DOS

TBA













