# Visual novels on Android

## Google Play Store

Native Android visual novels exist, but most of these are gacha cash grab trash. There are a few Android ports of Windows visual novels which you can buy at the Japanese Play Store or... _wink wink_ by "other means". You can switch to the Japanese Play Store by using a Japanese VPN, then clearing your Play Store data and cache.

## PSP Emulation

One of the best options to emulate PSP games is by using the [PPSSPP](https://play.google.com/store/apps/details?id=org.ppsspp.ppsspp) emulator.

![Image](img/vnpsp1.jpg)

## PS Vita Emulation

As technology improves, something that used to be almost completely impossible has now been made normal. That's probably the best way to define the existence of [Vita3K](https://github.com/Vita3K/Vita3K-Android/releases/) on Android phones. With this wonderful software, it's possible to emulate many of the best Japanese games available from the best handheld that a Japanese student could ever ask for. Vita has received both official and unofficial ports of several different visual novels (VN), and all of them are top quality!

Well, as expected, this emulator is fairly demanding. Most intermediate and high-end smartphones from the last 5~6 years are capable of running most VNs, in other words, there are certain minimum requirements that you need to meet before downloading the emulator itself. I'll mention all the requirements that are important for running VNs, i.e. commercial games other than VNs are heavier and require more from your smartphone. Therefore, don't expect to run all that much besides VNs with what I'm going to tell you here

Requirements:

- At least 4GB of RAM
- 64-bit processors
- EGL3.2
- At least something with comparable performance to the Snapdragon 732g

You'll find everything you need to know about setting up Vita3K on its [official website](https://vita3k.org/quickstart.html), along with links to download the necessary files. It's very simple and takes no more than 10 minutes to get the emulator up and running.

## Nintendo Switch Emulation

Nintendo Switch emulation is also available on Android through Yuzu. Thanks to the hard work of Yuzu's developers, we can run most Switch games on Android phones these days. Not only that, but combined with some custom drivers, hardly any graphical issues appear at all.

Well, since Nintendo took down the original Yuzu repository, there are now two options when it comes to downloading the emulator. The first is downloading the latest version of Yuzu available on the [archives](https://web.archive.org/web/20240304142742/https://github.com/yuzu-emu/yuzu-android/releases/tag/android-278). The second is downloading [Suyu](https://git.suyu.dev/suyu/suyu/releases) instead, which is a fork (whose development imploded) of Yuzu with some minor improvements.

Okay, if Vita3K was a bit demanding, then Yuzu is just downright frightful as it requires a more up-to-date device. Thankfully, most VNs available on the Switch are extremely simple and easy to emulate due to their nature as fancy PowerPoint slides.

Requirements:

- At least 6GB RAM\*
- 64-bit processors
- Android 11+
- At least something with comparable performance to the Snapdragon 865\*

!!! warning "Memory leaks"
    I specified 6GB of RAM as a minimum requirement for the emulator, but I would advise you to close it once every 50-60 minutes and restart the phone. If you don't, there's a chance that it will crash due to a lack of RAM from Yuzu's memory leaks. And while you can run most VNs with 6GB of RAM, other games could require even greater amounts of RAM.

!!! info "Minimum required SoC"
    While the Snapdragon 865 _is_ the official recommended SoC, it might struggle with particularly demanding games. Nevertheless, this SoC performed well with all the VNs I tested. I also tried emulating with the Snapdragon 732g as well, but it stuttered in a good number of VNs. Therefore, I believe that something stronger than the Snapdragon 732g will be able to run most VNs on this emulator.

All the information on how to set up the emulator can be found [here](https://yuzu-mirror.github.io/entry/yuzu-android/) and [here](https://www.youtube.com/watch?v=RxBGJdafY6k). The setup is straightforward with links to every necessary resource. There's even a brief explanation of the customized drivers that I mentioned earlier. With that, you can now read your VNs on your phone!

## Windows Emulation... or something close to it

Now... now I can finally talk about my babies!!! It is worth mentioning that although I do refer to them as "Windows emulators", I would say they are closer to Wine emulators. Well, leaving my autistic behaviour aside, let's get to the important stuff. At least for now, we have 3 emulators in charge of running Windows programs on Android: ExaGear, Winlator, and Mobox. I'm going to talk about each two of them here, so be prepared!

### ExaGear

!!! warning "Only use ExaGear if you have to!"
    Only use ExaGear if your phone can't run the other emulators on the page, or if you want to test something that doesn't work on the other Windows emulators.

Well, let's start by talking about ExaGear. It was a paid project whose focus was essentially to run 32-bit Windows programs on Android. As I've mentioned before, even though I referred to them as "Windows emulators", the truth is that they are nothing more than Wine emulators.

Having said that, let me rank ExaGear among the other three: it's the slowest and has the least support. As I mentioned before, it only works with 32-bit programs, so any 64-bit visual novel won't work on it. Furthermore, running it decently will depend a lot on the VN itself. I also recommend having a decent phone, but compared to Yuzu and Vita3K, anything with performance comparable to the Snapdragon 845 should be more than enough for this emulator. Oh, and even with a VERY good device, your VN may still lag a bit, or even take 10 minutes to open. It all depends on the VN, and I recommend you test each game.

Setup files:

- [ExaGear APK + OBB](https://mega.nz/file/ZcMnXIQA#_uhqRyS0-YeTmMQzgKOCGLa5x0wARQoEMzYEqvCmX6c)
- [Basic ExaGear files](https://mega.nz/file/VQ1RySQD#TwVTuEJB-woteCXr2ul-VfcHgQJgNwRPwDHkhzeyW9I)

Super ultra mega blaster tutorial on how to set this one up:

1. After downloading and extracting the ExaGear APK + OBB, you'll move the `com.eltechs.ee` folder to a folder called `OBB` within the Android folder on your phone -> `0/android/obb`.
2. Install the ExaGear APK that was included with the extracted files.
3. Open the app, swipe to the right, and go to the tab labeled `Manage Containers`. Once inside, swipe to the left and click on the "+" button in the top-right corner.
4. With the new container created, click on the three dots next to it and go to `Properties`. Here, you'll change the color depth to `32bit`, set the locale to `Japanese`, and uncheck all the option boxes below.
5. Return to the container's home page, click on the three dots again, and open the `Run Explorer` option. It may take a while to start.
6. When it opens, in its file window and under `Computer`, navigate to the folder where you downloaded the basic ExaGear files earlier.
7. Double-click on `K-Lite...`. Once it opens, you'll need to choose `Advanced` instead of `Normal`.
8. Click on `Next`, and in the next window under the `Preferred audio player` option, choose `Media Player Classic...`.
9. Keep clicking on `Next` until you reach the `Additional Tasks and Options` window. Here, you'll uncheck all 4 boxes within the `System tray icons` field.
10. Continue clicking on `Next` until the installation finishes.
11. Install all the files in the `Visual-C...` folder.
12. After installing them, go back to the location where you downloaded the basic ExaGear files and run `MPSetupXP.exe`.
13. Continue clicking on `Next` until the installation finishes. The first installation attempt usually ends in an error. If that's the case for you, rerun `MPSetupXP.exe` until it succeeds.
14. Now you can run your game!

!!! info "Need more help?"
    It was quite the hassle to test all of this. If you encounter any errors, just ping me (@elderruna) on TMW's Discord, and we can sort it out there.

You'll install the game as you normally would on PC. I recommend getting 32-bit VNs that don't require installation where you only need to open the executable. It's also worth mentioning that not all VNs work on it. You need to experiment to see how it goes or look through some forums, such as Reddit, where people discuss the VN compatibility with ExaGear.

### Winlator

HE IS THE GOAT! THE GOAT!!!!

Jokes aside, Winlator is probably, along with Mobox, the best Windows emulator on Android. Unlike ExaGear, it actually works with 64-bit programs. You'll find videos of people playing all sorts of games on it if you search online.

Unfortunately, quality comes with a price, and the price is performance in this case. You really need a good phone to run Winlator at its best. I recommend one with the Snapdragon 855 or higher, but I believe anything above the Snapdragon 732g should be enough for most VNs.

!!! info "Troubles with new emulators"
    Since Winlator is still relatively new, it's a bit finicky. You'll need to test each VN and adjust the emulator settings accordingly. The upside is that the community is quite active, so if you encounter any issues, you can reach out to them.

Setup files for "the goat":

- [Winlator APK](https://github.com/brunodev85/winlator/releases)
- [Japanese fonts](https://mega.nz/file/Ew4kgbLZ#50_ZK6tLdcv5AlWs9c00LOGoql_bA6HAbHDqTt1y0Rc)

Super ultra mega blaster tutorial on how to set "the GOAT" up:

<ol>
  <li>Download and extract the Japanese fonts from <code>MSFonts.zip</code>; they will be needed later.</li>
  <li>Download the APK from above, install it, and open the application while connected to the internet. It will download all the necessary data for it to run. </li>
  <li>After the installation is complete, swipe the screen to the right or click on the button with three stacked lines in the top-left corner, go to <code>Containers</code>, and then click on the "+" button to create a container.</li>
  <li>Container settings:
    <ul>
      <li><code>Name</code> -> You can choose anything. It doesn't matter.</li>
      <li><code>Screen Size</code> -> Choose <code>800x600</code> only if your phone is weak. You'll lose compatibility with a lot of VNs that don't support this resolution. If you want to focus on compatibility and your phone can handle it, go for <code>1280x720</code>.</li>
      <li><code>Graphics Driver</code> -> If your SoC is Snapdragon, choose <code>Turnip</code>. If it's anything else, choose <code>VirGL</code>.</li>
      <li><code>DX Wrapper</code> -> If your SoC is Snapdragon, choose <code>DXVK</code>. If you have any other SoC, choose <code>WineD3D</code>. Selecting <code>DXVK</code> makes a gear icon appear next to the setting, and clicking it shows a menu where you can choose the in-game screen framerate, the driver version, and also the amount of RAM to allocate. Since we're talking about VNs, 2GB (2048 MB) should be enough for allocation. If the VN doesn't run, allocate more RAM and test again.</li>
      <li><code>Audio Driver</code> -> <code>PulseAudio</code></li>
      <li>Enable all CPU boxes (0, 1, 2, 3...)</li>
      <li>In the <code>Wine Configuration</code> tab, choose a GPU and allocate its memory. Depending on what you choose, the container may crash. Test your VN with the default GPU <code>GT 9800GT</code>. If it doesn't work, create a new container and change the GPU in it until it works.</li>
      <li>Grab the slider where the <code>Wine Configuration</code> tab is located, drag it to the left until the <code>ENVIRONMENT VARIABLES</code> tab appears, click on it, and then click the <code>Add</code> button at the bottom. Enter in <code>LC_ALL</code> for the <code>Name</code> field, and <code>ja_JP.UTF-8</code> for the <code>Value</code> field. Click <code>OK</code>.
      <li>Drag the slider to the left until the <code>Advanced</code> tab appears, and in it, set both <code>Box86</code> and <code>Box64</code> to <code>Compatibility</code>.</li>
    </ul>
  </li>
  <li>Click on the checkmark button to save your container settings.</li>
  <li>Back in the <code>Containers</code> menu, click on the three dots of the new container and then click on <code>Run</code>.</li>
  <li>In the file explorer window that opens up, navigate to the <code>D:</code> drive and find the folder where you extracted fonts to.</li>
  <li>Copy and paste <code>msgothic.ttc</code> and <code>msmincho.ttc</code> to <code>C:\windows\Fonts</code>.</li>
  <li>Now you can run your game!</li>
</ol>

## Kirikiroid2

Any games that use the Kirikiri2 engine (e.g. has `.xp3` files) can be loaded and played natively without any virtualization on Android.

The setup is very easy, I got it working in a matter of minutes.

You will need:

- [Kirikiroid2 APK](https://github.com/enaix/Kirikiroid2-debloated)
- Kirikiri2 Engine-compatible visual novel. (Look for `.xp3` files)
- [Kirikiroid2 patch for _YOUR_ VN!](https://zeas2.github.io/Kirikiroid2_patch/patch/)

Follow the steps below:

1. Install the APK of Kirikiroid2. You may need to allow "install unknown apps for this source."
2. On your computer, copy the patch files into the same folder as the game files.
3. Copy all these files over to your phone.
4. Launch Kirikiroid2, navigate to the folder, and select the .exe of the VN, just like how you'd launch it on your PC.

## ONScripter

Any games that use the NScripter engine (e.g. has an `nscript.dat` file) can be loaded and played natively without any virtualization on Android.

TBA

<h3>Found this useful? Consider supporting me on Patreon!</h3>

[:fontawesome-brands-patreon: Support me on Patreon](https://www.patreon.com/shoui){: .md-button }
