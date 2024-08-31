# Bạn có đang sử dụng đúng phông chữ không?

Phông chữ tiếng Trung và Tiếng Nhật

Mặc định máy tính/điện thoại của bạn sẽ hiển thị chữ Kanji theo phông chữ tiếng Trung. Chữ Kanji trong Tiếng Nhật trông hơi khác một chút và sẽ khá vấn đề nếu bạn học Kanji kiểu tiếng Trung thay vì kiểu chữ Nhật.

Kiểm tra xem trình duyệt của bạn hiện có đang sử dụng phông chữ Tiếng Nhật không

Một ký tự trông khác biệt rõ rệt giữa phông chữ Tiếng Nhật và tiếng Trung là [直](https://jisho.org/search/%E7%9B%B4%20%23kanji) được sử dụng trong từ [直す](https://jpdb.io/search?q=%E7%9B%B4%E3%81%99) (naosu) nghĩa là chữa bệnh, chữa lành, sửa chữa.

![](img/font2.png)
_Naosu in a Chinese font (DengXian)_

![](img/font3.png)
_Naosu in a Japanese font (IPAex Gothic)_

Nếu 直 của bạn trông giống như hình ảnh thứ hai, thì bạn đang dùng font Tiếng Nhật, nếu không thì nhớ đổi phông chữ nha.

## Windows 10

++win+i++ để mở **Settings** > **Apps** > **Optional features** > **Add a feature** > Search **"Japanese supplemental fonts"** và **Install**  

??? tip "Cho người dùng nâng cao: Powershell"
	Tải phông chữ thông qua **Windows Powershell (Administrator)**:
	```powershell
	Get-WindowsCapability -Online -Name Language.Fonts.Jpan~~~und-JPAN* | Add-WindowsCapability -Online
	```  
	Không cần khởi động lại máy.
??? question "Also have Chinese supplemental fonts already installed?"
	You will need to set your locale to Japanese (Japan).
	!!! abstract "Setting Japanese locale"
		1. Open the Run dialog box by pressing ++windows+r++
		2. Type `intl.cpl` and press ++enter++
		3. Click on the *Administrative* tab, go to *Change system locale...* and select **Japanese (Japan)** and click OK.
		

Bây giờ nếu bạn đang sử dụng trình duyệt dựa trên Chrome (VD: Google Chrome, Brave), hãy chọn Menu :material-dots-vertical: > **Settings** > chọn **Appearance** ở bên trái > **Customize fonts**. Đây là nơi bạn cần đặt phông chữ của mình.

Phông chữ tiêu chuẩn: Meiryo UI

Phông chữ Serif: Yu Mincho

Phông chữ Sans-serif: Meiryo

Monospace: MS Gothic

Nếu bạn đang sử dụng Firefox thì nó đã được làm sẵn cho bạn

## macOS

Bạn chỉ cần thêm Tiếng Nhật làm ngôn ngữ trong Tùy chọn hệ thống.

 > System Preferences, sau đó chọn "Language & Region". Bấm vào "General", sau đó "Add a language" và chọn "Japanese 日本語"

## Linux

Cần có locale `ja_JP.UTF-8`. Nếu không thì bỏ dấu thăng ở dòng `#ja_JP.UTF-8 UTF-8` trong `/etc/locale.gen` và chạy:

```bash
sudo locale-gen
```

Bây giờ hãy cài đặt gói [noto-fonts-cjk](https://archlinux.org/packages/extra/any/noto-fonts-cjk/).

Now install the [noto-fonts-cjk](https://archlinux.org/packages/extra/any/noto-fonts-cjk/) package. It is available on the official Arch repositories and it's known to set up the necessary fontconfig rules when installed in Arch.  

If _**any**_ part of that does not apply to you (p.e. different distro, different font, different method of installation), fontconfig may or may not have been set up properly.  
If you don't know how to check that, simply create a new file with the necessary fontconfig rules in the `~/.config/fontconfig/conf.d` directory (create the directory if it doesn't exist) for Japanese text. You can use [this](https://wiki.archlinux.org/title/Font_configuration/Examples#Japanese) section of the Arch Wiki or [this](https://github.com/tatsumoto-ren/dotfiles/blob/main/.config/fontconfig/conf.d/99-japanese-fonts.conf) excellent example config file by tatsumoto-ren as references.  

#### Caveats

#### Browsers

##### Chromium-based

Chinese fonts can still persist even with the right setup in place (no idea why), so you may need to force it by doing the following:
 
:material-dots-vertical: > **Settings** > click on **Appearance** on the left > **Customize fonts**

Standard font: Noto Sans CJK JP Regular  
Serif font: Noto Serif CJK JP Regular  
Sans-serif font: Noto Sans CJK JP Regular  

##### Firefox

Unless Firefox has Japanese set as one of its languages or the webpage (or one of its sections) explicitly claims to be in Japanese (`lang="ja"`), it tends to fallback to Chinese characters. This is because Chinese fonts tend to have a more complete character coverage.  
To counteract this, do the following:

1. Open a new tab to `about:config`
2. Click through the warning page (if it appears)
3. Search for `font.cjk_pref_fallback_order`
4. Move `ja` to the front of the entire value

!!! warning "The commas are important"  
	They are there to separate the language values in that sentence, take care not to carelessly remove one.

Before:
![Firefox settings 1](img/font10.png)

After:
![Firefox settings 2](img/font11.png)

## Android

Just add Japanese (it looks like this: 日本語) as a secondary language, it won't change your display language unless you move it to the top.  

![Android settings](img/font9.jpg)

## iOS

Adding the Japanese keyboard (kana or romaji whatever works) should do the trick.  

## Anki

I think Chinese fonts on Anki cards looks the worst because Kana will be sans-serif and Kanji will be serif AND out of proportion AND Chinese so it looks all out of place.

<figure>
  <img src="img/font4.png" width="900" />
  <figcaption>Oh god. Unironically a lot of people's cards look like this.</figcaption>
</figure>


After you have installed Japanese fonts on your system it *should* automatically use Japanese fonts. If not, you will need to force it.  

### Forcing Japanese font in Anki   

IPAex Gothic is a good sans-serif Japanese font I recommend for Anki. You can download it [here](https://moji.or.jp/wp-content/ipafont/IPAexfont/ipaexg00401.zip)  

Install the font onto your system and reboot.  

Windows: Double click and click Install  
macOS: Drag the font into the Font Book  
Linux: Move the file to `~/.local/share/fonts/` and then run `fc-cache -f -v`  

Now in Anki click "Add" then click on "Cards" and then "Styling" and modify your font family accordingly.  

```css
.card {
 font-family: IPAexGothic; /* here is where you set font */
}
```

You can also change the font by putting the font into the Anki collection.media directory.  

Windows: `C:\Users\<user>\AppData\Roaming\Anki2\(profile)\collection.media`  
macOS: ` ~/Library/Application Support/Anki2/(profile)/collection.media`  
Linux: `~/.local/share/Anki2/(profile)/collection.media`  
Android: `/storage/emulated/0/AnkiDroid/collection.media`  

Now in Anki click "Add" then click on "Cards" and then "Styling" and modify your font family accordingly.  

!!! warning "Don't copy exactly!"
	Just add what you don't already have. 

```css
.card {
 font-family: CustomFont; /* here is where you set font */

 @font-face { 
 	font-family: CustomFont; src: url('ipaexg.ttf'); } /* here is where you define the font */

}  
```

Preview:

<figure>
  <img src="img/font5.png" width="900" />
  <figcaption>With a full Japanese definition.</figcaption>
</figure>

<figure>
  <img src="img/font6.png" width="900" />
  <figcaption>With a bilingual definition.</figcaption>
</figure>

Now also change your font for the Anki *editor*. Click on "Add" then "Fields" and change the Editing font of each field to any one of these (or any other font you know is a Japanese font)

IPAexGothic  
Meiryo  
MS Gothic  
Yu Gothic  
Hiragino Kaku Gothic Pro  
Noto Sans CJK JP Regular  

## Yomichan 

Yomichan's font should change according to your browser's font, but you can force Japanese font if not.   

Using Popup CSS...

```css
.kanji-link {
   font-family: IPAexGothic;
}

.source-text {
   font-family: IPAexGothic;
}

.gloss-content {
   font-family: IPAexGothic;
}

.tag-label-content {
   font-family: IPAexGothic;
}
```  


<figure>
  <img src="img/font7.png" width="900" />
  <figcaption>Japanese to Japanese defintion with IPAexゴシック font.</figcaption>
</figure>


