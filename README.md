## Requirements

- IONIC - `npm install -g ionic`
- Cordova - `npm install -g cordova`

## Installation

1. Clone the repo
2. Run `npm install`

## Live build

1. Run `ionic serve`
2. Go on [http://localhost:8100/](http://localhost:8100/)

# iOS

### Requirements

- Mac (Can be a VM with VMWare)
- Xcode

### Deploy

1. Run `rm -rf node_modules`
2. Run `npm install`
3. Run `ionic cordova build ios --prod` and wait till the result display "BUILD SUCCEEDED"
4. Open `plateforms/ios/.xcodeproj` in Xcode
5. Choose `Generic iOS Device` on the top and change `Build` and `Version`
6. Do this: `Product > Archive` and wait till the pop-up open
7. Then `Upload to App Store... ` and the rest is on App Store Connect

# Android

### Requirements

- Android Studio
- Android SDK 8
- An Android Device created on AVD

### Test

1. Run `rm -rf node_modules`
2. Run `npm install`
3. Launch Android Device created previously
4. Run `ionic cordova run Android`

### Deploy

1. Run `rm -rf node_modules`
2. Run `npm install`
3. Run `ionic cordova build android --prod --release` Then copy the .apk file
4. Find the `my-release-key.jks` file and then run `jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.jks app-release-unsigned.apk scaleway`
5. Then run `zipalign -v 4 app-release-unsigned.apk Scaleway_Manager.apk`, zipalign can be found on `/opt/android-sdk/build-tools/XX.X.X/apksigner`
6. And finally verify that the `.apk` has been signed by running `apksigner verify HelloWorld.apk`. Apksigner can be found in the same folder as zipalign.
7. The `.apk` file is ready to be uploaded.
