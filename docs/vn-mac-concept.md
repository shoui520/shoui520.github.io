Below is only a proof of concept.  

REQUIRE
https://github.com/XQuartz/XQuartz/releases/download/XQuartz-2.7.11/XQuartz-2.7.11.dmg 

```bash
brew install p7zip cabextract giflib libpng gnutls mpg123 openldap openal-soft jpeg-turbo libxcomposite libxinerama ncurses libxslt gtk3 gst-plugins-base gst-plugins-good cups dosbox
```  

```bash
brew tap gcenx/wine
brew install --cask --no-quarantine gcenx-wine-staging
```  

```bash
brew install winetricks zenity
```

```bash
winetricks fontsmooth=rgb
```

```bash
curl https://cdn.discordapp.com/attachments/813105334763126814/813105422285799464/wine_breeze_colors.reg -output wine_breeze_colors.reg
wine regedit wine_breeze_colors.reg
```

```bash
winetricks quartz ffdshow wmp9 d3dx9 dotnet35 vcrun2003 vcrun2005 vcrun2008 vcrun2010 vcrun2012 vcrun2013 vcrun2015
```
```bash
winetricks lavfilters
```

Install Japanese fonts https://drive.google.com/file/d/1OiBgAmt3vPRu08gPpxFfzrtDgarBGszK/view?usp=drivesdk


MOUNT YOUR ISO -- 


Now you must find the mount point by using diskutil, you can do that below.

```bash
diskutil list
```

Look at the output for the mounted .ISO, for me it is /dev/disk3. Now we need to find the mount point.

```bash
diskutil info /dev/your_disk_here | grep 'Mount Point'
```

The mount point for my .ISO is /Volumes/ab_1st. I can now cd into that directory.  

```bash
LC_ALL="ja_JP.UTF-8" TZ="Asia/Tokyo" wine setupexec.exe

LC_ALL="ja_JP.UTF-8" TZ="Asia/Tokyo" wine AlphaROMdiE.exe vnexec.exe
```

