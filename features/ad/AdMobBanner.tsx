import React, { useRef } from 'react';
import { Platform } from 'react-native';
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  useForeground,
} from 'react-native-google-mobile-ads';

type AdUnitIdType = string;

const adUnitId: AdUnitIdType = Platform.select({
  ios: __DEV__ ? TestIds.BANNER : process.env.EXPO_PUBLIC_GOOGLE_ADMOB_IOS_ID!,
  android: __DEV__
    ? TestIds.BANNER
    : process.env.EXPO_PUBLIC_GOOGLE_ADMOB_ANDROID_ID!,
}) as AdUnitIdType;

export default function AdMobBanner() {
  const bannerRef = useRef<BannerAd>(null);

  // (iOS) WKWebView can terminate if app is in a "suspended state", resulting in an empty banner when app returns to foreground.
  // Therefore it's advised to "manually" request a new ad when the app is foregrounded (https://groups.google.com/g/google-admob-ads-sdk/c/rwBpqOUr8m8).
  useForeground(() => {
    Platform.OS === 'ios' && bannerRef.current?.load();
  });

  return (
    <BannerAd ref={bannerRef} unitId={adUnitId} size={BannerAdSize.BANNER} />
  );
}
