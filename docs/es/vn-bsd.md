# Visual novels on FreeBSD

Visual novels are only Microsoft Windows programs, therefore you must use *Wine* in order to run them.  

Follow the steps below to run VNs on FreeBSD.  

## Japanese and UTF-8 support  

By default, FreeBSD is unable to display Japanese text. 
### Installing a Japanese font  

Make sure you have a Japanese font before proceeding.
I recommend the following fonts:  
**ja-font-ipa**   
**ja-font-koruri**  
**ja-font-sazanami**  
**ja-font-kochi**  
**ja-font-mplus-ipa**  
**ja-font-vlgothic**  
**hanazono-fonts-ttf**  
  
You can install them from binary package by doing:  
```bash
sudo pkg install ja-font-ipa ja-font-koruri ja-font-sazanami ja-font-kochi ja-font-mplus-ipa ja-font-vlgothic hanazono-fonts-ttf
```  
You can verify that your FreeBSD system is able to display Japanese text if you can see the Japanese text below:  

> てすとテスト試験  

### Enabling Unicode UTF-8  

FreeBSD also does not use Unicode by default. So Japanese filenames will be broken. You need to add these lines to your `/etc/login.conf`  

```{linenums="25 1" hl_lines="3 4"}
default:\
			[...]
			:charset=UTF-8:\
			:lang=en_US.UTF-8:
```  
Now rebuild database for this file:  

```bash
sudo cap_mkdb /etc/login.conf
```
Log out by using `pkill -u $USER` and log back in.  

!!! info "KDE5/SDDM"  
	If you are using KDE, create a file called `locale.sh` in `$HOME/.config/plasma-workspace/env/`. If the directory doesn't exist then just make it. Add the following contents:  
	```{linenums="1 1" hl_lines="1 2"}
	export LANG=en_US.UTF-8
	export MM_CHARSET=UTF-8
	```

## Graphics Drivers  

This is important as we will need hardware acceleration. If you haven't already installed graphics drivers on your FreeBSD system, please do that now.  

[[AMD/ATI Radeon and Intel Graphics]](https://wiki.freebsd.org/Graphics)  
[[NVIDIA Graphics]](https://wiki.ghostbsd.org/index.php/Nvidia_driver_installation)  

## Installing Wine and dependencies 

!!! tip "Tip"  
	If you are having issues with the binary packages, try compiling from the ports.  

Wine on FreeBSD has limited functionality compared to its Linux counterpart. For example, you are not able to use WOW64 (64 bit Windows but able to run 32-bit applications) and you also must use the `i386-wine` package of Wine if on an amd64 system. Do not be fooled by this name, if you are on a 32-bit system, use the regular `wine` package. However. lack of WOW64 support is not an issue for visual novels, as they are all 32-bit anyway.    
First install all the needed dependencies for Wine first, this is to ensure you don't end up in "Wine dependency hell":  

!!! warning "lib32"
	You need to have lib32 for this to work! Check if `/usr/lib32` exists! If you did not get it when installing FreeBSD, get it now.  
	Get `lib32.txz` for your FreeBSD version [[here]](https://download.freebsd.org/ftp/releases/amd64/)  
	Then run `sudo tar -C / -xpf lib32.txz` and then run `sudo freebsd-update`  

```bash
sudo pkg install p7zip cabextract freetype libosmesa libpcap libjpeg-turbo sane-backends ncurses ocl-icd liberation-fonts-ttf libgphoto2 json-c unixODBC nss_mdns gstreamer1 gstreamer1-plugins-good gstreamer1-plugins-ugly gstreamer-plugins-bad alsa-plugins libx11 libXcursor libXi libXext libXxf86vm libXrandr libXinerama libGLU libXrender libzip lcms2 cups libxml2 libxslt flac libICE libSM libXtst libXcomposite openal-soft gtk3 libva libexif mpg123
```  

Now, we need to install Wine:  

```bash
sudo pkg install i386-wine-devel
``` 

We will now need `winetricks`, do not use the one on the FreeBSD repository as it is outdated and WILL cause headaches.  
Using, `curl`, download the latest winetricks binary.  
```bash
curl https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks --output winetricks
```
Using `chmod`, make it executable.  
```bash
chmod +x winetricks
```  
Now copy it to your `/usr/local/bin` so it can be used in a command line.  
```bash
sudo cp winetricks /usr/local/bin
```  

## Configuring Wine and installing runtimes  

### Creating the Wineprefix

First we need to create a 32 bit Wine prefix, this has the best compatibility and all visual novels are 32-bit anyway.

```bash
WINEPREFIX=~/.winevn WINEARCH=win32 wineboot
```  

When Wine is started for the first time, you will need to let it install Gecko and Mono packages.  

### Using Winetricks
Now we need to install the common redistributables such as DirectX, Visual C++ Runtimes and .NET Framework 3.5 and other things that make video cutscenes work. 

!!! tip "Optional: Font smoothing"
	You can do `winetricks fontsmooth=rgb` because without it, the font is simply awful.  

!!! tip "Optional: GUI Improvments"
	You can open the Registry Editor using `wine regedit` and import [this .reg file](https://cdn.discordapp.com/attachments/813105334763126814/813105422285799464/wine_breeze_colors.reg), the GUI should look nice and clean then.  

First, please update Winetricks, or else it will not work. 
```bash
sudo winetricks --self-update
```
Now we can use Winetricks:  

```bash
WINEPREFIX=~/.winevn winetricks ffdshow quartz wmp10 d3dx9 dotnet35 vcrun2003 vcrun2005 vcrun2008 vcrun2010 vcrun2012 vcrun2013 vcrun2015
```  
!!! tip "ffdshow"
	When installing ffdshow, make sure you check (tick) ☑ every single codec/format or else it will not work!  

For some VNs, such as TYPE-MOON's, LAVFilters may be needed to playback video.  
```bash
WINEPREFIX=~/.winevn winetricks lavfilters
```  
!!! failure "ffdshow and LAVFilters"
	Some games may break if you have both ffdshow and LAVFilters installed! Make sure you experiment!  

Then, run this command to disable DLL overrides, and use the native DLLs instead:

```bash
WINEPREFIX=~/.winevn winetricks alldlls=default
```   

### Japanese fonts in Wine  

You need to install Japanese fonts to Wine now. Please download the pack below.  
[[Google Drive]](https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view?usp=drivesdk)  
Unzip the file and move the font files to your `Fonts` folder in `~/.winevn/drive_c/windows/Fonts`    

!!! question "Why not install `cjkfonts` in winetricks?"
	Because it doesn't work properly for VNs.

## Installing the visual novel  

FreeBSD does not have CDEmu, FUSEISO or anything similar, so you'll need to mount the disc image file regularly. Luckily, FreeBSD doesn't make the distinction between virtual drives and physical drives.  
BUT... FreeBSD does not support the simple mounting of drives without using mdconfig and EXECUTING AS ROOT! Even accessing a mounted disc image requires you to have root privileges.   
You cannot execute Wine as root so we will not be mounting image files. So we will be using 7zip. 

### Extracting the ISO  

!!! info "MDS/MDF"  
	If you have Alcohol 120% CD/DVD Images (MDS/MDF), you need to use tools such as `mdf2iso`. Common syntax is
	```bash
	mdf2iso <source>.MDF <output>.ISO
	```
	In other cases you may be able to rename the .MDF file to use the .ISO extension and it will just work.  
 
Let's first make our destination folder and `cd` into it.  
```bash
mkdir ~/extracted
cd ~/extracted
```  

Now, extract it with `7z`:  

```bash
7z -x /path/to/<disc_image>.ISO
```  
### Running the installer  

Now we can finally launch the installer with Wine.  

```bash
LC_ALL="ja_JP.UTF-8" TZ="Asia/Tokyo" WINEPREFIX=~/.winevn wine <setup_executable>.exe
```  
!!! info ".msi installer"
	If the installer executable is an .msi, run with `msiexec` instead of `wine`.  

Proceed with the installation. You may want to take note of the installation directory. `C:\` is relative to `$WINEPREFIX/drive_c`.  

### Launching the visual novel  

I used Kanon Memorial Edition for this guide. I can `cd` into `$WINEPREFIX/drive_c/KEY/KANON_ME_ALL` and then run `REALLIVE.EXE` with Wine to launch the VN at any time.  

```bash
cd /path/to/visualnovelfolder
LC_ALL="ja_JP.UTF-8" TZ="Asia/Tokyo" WINEPREFIX=~/.winevn wine <vn_executable.exe>
```

!!! info "AlphaROMdiE"
	For AlphaROMdiE, you need to run it with Wine and the VN executable as an argument. It should look like this:  
	```bash
	LC_ALL="ja_JP.UTF-8" TZ="Asia/Tokyo" WINEPREFIX=~/.winevn wine AlphaROMdiE.exe <VN_executable.exe>
	``` 
	For the 1st option, you must create an empty file `disable_conv` in the same location as AlphaROMdiE.exe, for the 3rd option, you must create an empty file `other_engine` in the same location as AlphaROMdiE.exe. You can do this easily by doing: 
	```bash
	touch disable_conv other_engine
	```

And viola! Here's a demonstration of 2 VNs working at the same time:

![Image](img/vnbsd1.jpg)  

And the actual games work see:  

![Image](img/vnbsd2.jpg)  

Now go back to [Visual Novel Guide](https://learnjapanese.moe/vn/#playing-visual-novels-to-learn-japanese) to learn how to use Textractor, it works perfectly under Wine. Please note that it needs to be launched with `LC_ALL=ja_JP.UTF-8` environment variable.

!!! tip "Need shortcuts?"  
	You can add shortcuts to your `${HOME}/Desktop`. Create a file such as "[vn].desktop". You can also put it in `/usr/local/share/applications` so it appears in application launchers. Here's how I am launching Kanon from a shortcut (with the icon too!)  
	```conf
	#!/usr/bin/env xdg-open
	[Desktop Entry]
	Name=Kanon Memorial Edition
	Name[ja]=Kanon メモリアルエディション 全年齢対象版
	Icon=/home/shoui/.winevn/drive_c/KEY/KANON_ME_ALL/KANON_ME_ALL.ICO
	Exec=LC_ALL=ja_JP.UTF-8 TZ=Asia/Tokyo wine ~/.winevn/drive_c/KEY/KANON_ME_ALL/RealLive.exe
	Terminal=false
	Type=Application
	Categories=Game
	```
	Remember, paths to icons must be absolute!
??? tip "Preview"
	![Image](img/vnbsd3.gif)  

### Troubleshooting: Fuguriya VNs

VNs made by Fuguriya such as Sono *Hanabira ni Kuchizuke o* and *Hanahira*  will not launch with Wine by default. Follow the steps below to fix this.  

Download fjfix [[here]](https://cdn.discordapp.com/attachments/813105334763126814/832650409167945798/fjfix.tar.gz).   
Extract the archive.   
Now in the terminal, run:  
```bash
LC_ALL=ja_JP.UTF-8 WINEPREFIX=~/.winevn wine fjfix.exe -f /path/to/MGD
```

Now it should just work.  

<h3>Found this useful? Consider supporting me on Patreon!</h3>   

[:fontawesome-brands-patreon: Support me on Patreon](https://www.patreon.com/shoui){: .md-button }
