# Visual novels on macOS

Visual novels are only Microsoft Windows programs, therefore if you want to run a visual novel on your Mac you must either virtualize or dual boot Windows.

## Virtual Machines (10.10 - 11.x)

The most convenient way would be to play VNs on your Mac is to use a virtual machine. You can use Parallels (Paid), VMWare (Paid) or VirtualBox (Free). Parallels is the most simple, fastest, offers almost native performance while still being virtualized. VMWare is pretty fast but is quite technical. VirtualBox is free but the performance can be abysmal.  
You should search on Google how to use either one of these to virtualize Windows, it is not VN specific and there are a ton of guides out there.  


## M1 Macs

![Image](img/vn_mac_disclaimer.png)
## Boot Camp Assistant (Intel® based Macs)

Boot Camp allows you to dual boot Windows on your Mac. You will get to keep macOS and also have Windows, and get to choose between them when ++option++ is pressed down at startup.  

You can check if your Mac is an Intel® based Mac by running the following command in Terminal:
```bash
sysctl -n machdep.cpu.brand_string 
```
All Intel® based Macs are able to run Microsoft Windows.  

**Macs that support Windows 7:**  

*Theoretically any Intel® based Mac will be able to run Windows 7, this is just Apple's official support list.* 

Any Intel® based Mac that predates 2014. (With the exception of 2013 Mac Pro)

**Macs that support Windows 10:**

*Theoretically any Intel® based Mac will be able to run Windows 10, this is just Apple's official support list.*  

Intel® based MacBook introduced in 2015 or later   
Intel® based MacBook Air introduced in 2012 or later  
Intel® based MacBook Pro introduced in 2012 or later   
Intel® based Mac mini introduced in 2012 or later   
Intel® based iMac introduced in 2012 or later  
Intel® based iMac Pro (all models)    
Intel® based Mac Pro introduced in 2013 or later     

Search on Google for how to use Boot Camp on your Mac. I do not own an actual Mac, so I can't provide instructions on how to do this. Fortunately this isn't VN specific, and you can just find instructions everywhere on Google, and even on Apple's own official website.  
Contact me on Discord if you need help with getting either a Windows 7 or 10 ISO.  

## Wine (Borked)

This process differs substantially across different versions of macOS, so I decided to scrap the Wine guide. 

<h3>Found this useful? Consider supporting me on Patreon!</h3>   

[:fontawesome-brands-patreon: Support me on Patreon](https://www.patreon.com/shoui){: .md-button }
