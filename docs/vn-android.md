# Visual novels on Android

## The Google Play Store  

There are native Android visual novels but most of these are gacha cash grab trash. There are a few Android ports of Windows visual novels which you can buy at the Japanese Play Store or... *wink* *wink* by "other means". You can switch to the Japanese Play Store by putting on a Japanese VPN and then clearing your Play Store data & cache.  

## Using PPSSSPP Emulator

While they are a couple of native Android visual novels but these are usually spin-offs and gacha trash, and no one wants to play them.

one of the best options is to use [PPSSPP](https://play.google.com/store/apps/details?id=org.ppsspp.ppsspp) emulator and download PSP ROMs.

![Image](img/vnpsp1.jpg)  

## Vita3k

As technology improves, something that used to be almost completely impossible has now been made normal. That's probably the best way to define the existence of [Vita3k](https://github.com/Vita3K/Vita3K-Android/releases/) on android phones. With this wonderful software, it's possible to emulate many of the best Japanese games available on the best handheld that a Japanese student could ever ask for. Vita has received official (and unofficial) ports of several different VNs, and all of them are top quality! 

Well, as expected, this emulator is fairly demanding. Most intermediate and high-end smartphones from the last 5~6 years are capable of running most VNs on it, in other words, there are certain minimum requirements that you need to meet before downloading the emulator itself. Here I'll mention all the requirements that are important for running VNs, i.e. commercial games other than VNs are heavier and require more from your smartphone. Therefore, don't expect to run all that much besides VNs with what I'm going to tell you here

#### requirements:

- At least 4GB of ram
- 64-bit processors
- EGL3.2 
- At least something with comparable performance to the snapdragon 732g 

You'll find everything you need to know about setting up Vita 3k on its [oficial_website](https://vita3k.org/quickstart.html), with links to download the necessary files. It's all very simple and takes no more than 10 minutes to get the emulator up and running.

## Suyu/Yuzu

Now, the switch emulator is also available on android. Thanks to the native support provided by certain parts within the Switch architecture linked to the android system, it is possible for the emulator to perform very well through a function called NCE, in other words, Native Code Execution. As a result, the code for Switch games ends up running natively on your phone... at least to some extent. Now, you're probably wondering what results this actually yields, right? Well, thanks to this amazing feature, we can run most Switch games on an android phone these days. Not just that, but combined with some custom drivers, you can run almost any VN on Switch without hardly any graphical issues.

Well, since Nintendo took down the original yuzu, you now have about two options when it comes to downloading it. First, of course, would be to download the latest version of yuzu available on the [archives](https://web.archive.org/web/20240304142742/https://github.com/yuzu-emu/yuzu-android/releases/tag/android-278). On the other hand, the second, a little more practical, would be to get [Suyu](https://git.suyu.dev/suyu/suyu/releases), which is the most stable of all yuzu's descendants. It should be noted that at the time of this writing, the difference in performance between yuzu and Suyu is non-existent. I mean, Suyu is a recent follow-up project, so you can't expect it to improve much in such a short space of time. And yes, there are other switch emulators on android, but from my tests, they are completely outdated (most of these projects are dead) and/or compatibility is extremely limited when compared to something more up-to-date like yuzu/suyu.

Okay, if the Vita 3k was a bit demanding, then this one is just downright frightful. Although it uses NCE to run part of the processes natively, we still need to emulate the rest. Of course, this applies more to 3d games, as most VNs available on the Switch are extremely smooth and simple to emulate, however, you still need a more up-to-date phone.

#### requirements:

- At least 6GB ram*
- 64-bit processors
- android 11+
- At least something with comparable performance to the sanpdragon 865*

  <div>
    <b>OBS 1:</b> I have specified 6GBs of ram as a minimum requirement for the emulator, yet, when playing for a long time, I would advise you to close the emulator once every 50-60 minutes and restart the phone. If you don't, there's a chance that it will crash due to lack of RAM (yuzu's memory leak occurs even on android). And although you'd be able to run most VNs with 6GB ram, that is not true for games in general. So don't expect too much from it.
  </div>

  <div>
    <b>OBS 2:</b> While the Snapdragon 865 is the recommended SOC for running most of the Yuzu/Suyu library, I wouldn't recommend using it for anything too demanding. This SOC was quite good with all the VNs I tested, so in that respect I don't think you'll have a problem even if you use a weaker SOC. That being said, I tried it with the 732g as well, but it stuttered in a good number of VNs. Therefore, I believe that something stronger than the 732g but weaker than the 865 will be able to run most VNs on this emulator.
  </div>

All the information on how to set up the emulator can be found [here](https://yuzu-mirror.github.io/entry/yuzu-android/) and [here](https://www.youtube.com/watch?v=RxBGJdafY6k). The whole thing is very simple and they already provide the link to everything, besides, there's a brief explanation of the cutomized drivers that I mentioned earlier. With that, you can now read your VNs on your cell phone!

## WINDOWS FUCKING EMULATOR

Now... now i can finally talk about my babies!!! i think it is worth mentioning that although I do refer to them as 'Windows emulators', they are not exactly working like that. if i had to say it, I would say they are closer to Wine emulators. Well, leaving my autistic behaviour aside, let's get to the important stuff. At least for now, we have 3 enmulators in charge of running Windows' programs on Android: Exagear, winlator and mobox. I'm going to talk about each one of them here. so be prepared to hell!

#### Exagear

  
  <b>OBS:</b>  Only use it if your phone can't run the other emulators on this list, or if you want to test something that doesn't work on the other two.
 


 Well, let's start by talking about ExaGear. It was a paid project whose focus was essentially to run 32-bit Windows programs on Android. As I've mentioned before, even though I referred to them as 'Windows emulators', the truth is that they are nothing more than Wine emulators.

Having said that, let me rank ExaGear among the other three. It's the slowest and has the least support on this list. As I mentioned before, it only works on 32-bit programs, so any 64-bit visual novel won't work on it. Furthermore, running it decently will depend a lot on the VN (visual novel) itself. I also recommend having a decent phone, but compared to yuzu and vita3k, anything with performance comparable to Snapdragon 845 should be more than enough for this emulator. Oh, and even with a VERY good device, your VN may still lag a bit, or even take 10 minutes to open. It all depends on the VN, and I recommend that you test the game you want to play individually.

what do you need to set it up:

- [Exagear APK + OBB](https://mega.nz/file/ZcMnXIQA#_uhqRyS0-YeTmMQzgKOCGLa5x0wARQoEMzYEqvCmX6c)
- [Basic exagear files](https://mega.nz/file/VQ1RySQD#TwVTuEJB-woteCXr2ul-VfcHgQJgNwRPwDHkhzeyW9I)

Super ultra mega blaster tutorial on how to set this one up:

1. after downloading and extracting the ExaGear APK + OBB, you'll move the 'com.eltechs.ee' folder to a folder called OBB within the Android folder on your phone -> 0/android/obb.
2. Now, install the ExaGear APK that was included with the extracted files.
3. You'll now open the app, swipe to the right, and go to the tab labeled 'manage containers'. Once inside, swipe to the left and click on the '+' symbol in the top left corner.
4. With the new container created, you'll now click on the three dots next to it and go to properties. Here, you'll change the color depth to 32 bits, set the locale to Japan, and uncheck all the option boxes below.
5. Now you can return to the container's home page, click on the three dots again, and open the 'run explorer' option. It may take a little while to start.
6. When it opens, you'll notice that the interface looks quite like Windows. That said, in its file window, under 'My Computer', you'll navigate to the folder where you downloaded the 'basic ExaGear files' earlier.
7. Now, double-click on 'k lite...'. Once it opens, you'll need to choose 'Advanced' instead of 'Normal'.
8. Now you can click on 'Next', and in the next window, under the 'Preferred audio player' option, choose 'Media Player Classic...'
9. Keep clicking on 'Next' until you reach the 'additional task and options' window. Here, you'll uncheck all 4 boxes within the 'system tray icons' field.
10. Now, install all the files in the 'Visual C' folder.
11. After installing them, go back to the location where you downloaded the 'basic ExaGear files' and run MPsetup
12. You click 'Next' and 'Next' until it installs. Usually, the first installation attempt ends in an error. If that's the case for you, click again and try to install until it succeeds.
13. now u can run your game!

First of all, I'd like to remind you that it was quite a hassle testing all of this (all the emulators). So if you encounter any errors, just ping me on TMW's Discord, and we can sort it out there. Now, back to the emulator, haha. Well, you'll install the game as you normally would on PC. I recommend getting VNs that don't require installation, meaning you only need to open the executable. Remember that it only runs 32-bit programs.

## Kirikiroid2

Any games that use the Kirikiri2 engine (e.g. has `.xp3` files) can be loaded and played natively without any virtualization on Android.  

This is very easy, I got this working in a matter of minutes.  
You will need:  
- Kirikiroid2 APK [[Download]](https://cdn.discordapp.com/attachments/813105334763126814/831315953081253938/kirikiri2.apk)  
- Kirikiri2 Engine-compatible visual novel. (Look for `.xp3` files)  
- Kirikiroid2 patch for *YOUR* VN! [[Repository here]](https://zeas2.github.io/Kirikiroid2_patch/patch/)  

Now follow the steps below.  

1. Install the APK of Kirikiroid2. You may need to allow install unknown apps for this source.  
2. On your computer, copy the patch files into the same folder as the game files.
3. Now copy all these files over to your phone.  
4. Launch Kirikiroid2 and navigate to the folder and select the .exe of the VN, just like you'd launch it on your PC.  

## ONScripter

Any games that use the NScripter engine (e.g. has an `nscript.dat` file) can be loaded and played natively without any virtualization on Android.  

TBA

## QEMU/Limbo/Bochs PC Emulator  

This way is dreadfully slow and I recommend you stay FAR away from this. If you want a portable PC visual novel experience, I recommend you pick up a GPD Win. The first model equipped with an Intel Atom will be fine for VNs, the second model with an Intel Core m3 is more likely to be in stock though.  

<h3>Found this useful? Consider supporting me on Patreon!</h3>   

[:fontawesome-brands-patreon: Support me on Patreon](https://www.patreon.com/shoui){: .md-button }
