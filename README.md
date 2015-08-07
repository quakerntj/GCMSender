#GCMSender
Send message to Google Cloud Message by HTTP server.

#Install App in Phone
You have to install GCMTest (傳訊到手機) from Google Play.  Or build it your own.
The code is here: https://github.com/quakerntj/SendMesageToPhoneByGCM

#Token setup
Follow the instruction of the GCMTest to get a TOKEN of your phone.  
In Firefox, open the preference pages of GCMSender.  Enter TOKEN to the token 
field.  Then the install is done.
The message is means the text from your clipboard.  You can copy any text 
to clipboard, but not limited to doing in firefox.  Then click the 
GCMSender button.  The text in your PC's clipboard will be copied to the 
phone's clipboard. Only the phone have the same TOKEN can receive it.

#WARNNING!
DO NOT SEND PRIVACY DATA.  This software do not have a server.
All data are send to Google Cloud Message server, then to your phone 
directlly. And all transfered message are NOT processed by any ENCRYPTION.  
You should take responsible for your own PRIVACY LEAK.  If you not press the 
GCMSender button, the content in your clipboard will not leak to internet.
