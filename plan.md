# Implementation Plan - ANGIOSCANNER Medical App - Update Background

## User Request
- Change the background image of the 'Main' screen to `bg_main.png`.

## Changes
1. **Update `src/screens/MainScreen.tsx`**:
   - Replace the current background image URL with the new one: `https://storage.googleapis.com/dala-prod-public-storage/attachments/d72d17ec-a3be-4e7e-bcca-533f54043adf/1779956183258_bg_main.png`.
   - Ensure the image remains full-screen and covered.
   - Maintain all existing UI components (Header, GlassButtons) and overlay gradients.

## Verification
- Run build validation to ensure no breakage.
