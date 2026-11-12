---
title: "ImGui"
description: "Reference for ImGui in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.00baca154a6f58ab
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `ImGui`

This reference describes `ImGui` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`Method: AlignTextToFramePadding`](member-method--aligntexttoframepadding-e53a6b7bb8c0fb38.md) | 1 declarations |
| [`Method: BeginChild`](member-method--beginchild-0a413d4555d345f0.md) | 1 declarations |
| [`Method: BeginCombo`](member-method--begincombo-1675d77d3ac9dd14.md) | 1 declarations |
| [`Method: BeginDisabled`](member-method--begindisabled-322a995deb182ba5.md) | 1 declarations |
| [`Method: BeginGroup`](member-method--begingroup-ae4cb015a0da6009.md) | 1 declarations |
| [`Method: BeginPopup`](member-method--beginpopup-225d7cb303d4e9aa.md) | 1 declarations |
| [`Method: BeginTabBar`](member-method--begintabbar-ccedf7e81a1a30f9.md) | 1 declarations |
| [`Method: BeginTabItem`](member-method--begintabitem-d648e61638cf1cba.md) | 2 declarations |
| [`Method: BeginTable`](member-method--begintable-4a208bc190c7e805.md) | 1 declarations |
| [`Method: Button`](member-method--button-bd528ef20813cae8.md) | 1 declarations |
| [`Method: Checkbox`](member-method--checkbox-05ced33db069a80d.md) | 1 declarations |
| [`Method: CloseCurrentPopup`](member-method--closecurrentpopup-aea0e2a9013810f5.md) | 1 declarations |
| [`Method: CollapsingHeader`](member-method--collapsingheader-ef7a73b7c6251013.md) | 1 declarations |
| [`Method: ColorEdit4`](member-method--coloredit4-3ecca78c128ebf51.md) | 1 declarations |
| [`Method: ColorEditLinear4`](member-method--coloreditlinear4-9be14cbd7855f43a.md) | 1 declarations |
| [`Method: DragFloat`](member-method--dragfloat-93a6800ce4c9e758.md) | 1 declarations |
| [`Method: DragInt`](member-method--dragint-8e4664905bc97484.md) | 1 declarations |
| [`Method: DrawCubicCurve`](member-method--drawcubiccurve-6758e5a0e5bb19d3.md) | 1 declarations |
| [`Method: DrawFilledRectangle`](member-method--drawfilledrectangle-acdfa7683afcaac0.md) | 1 declarations |
| [`Method: DrawLine`](member-method--drawline-7515d5561c4e3b98.md) | 1 declarations |
| [`Method: DrawRectangle`](member-method--drawrectangle-5371a0cbeb7fcdb9.md) | 1 declarations |
| [`Method: DrawText`](member-method--drawtext-6e5cd2a8f4913f05.md) | 1 declarations |
| [`Method: Dummy`](member-method--dummy-55dc25c98cdfad9b.md) | 1 declarations |
| [`Method: EndChild`](member-method--endchild-d1a7bf9dc94a0e2f.md) | 1 declarations |
| [`Method: EndCombo`](member-method--endcombo-02ea26ac8a63d141.md) | 1 declarations |
| [`Method: EndDisabled`](member-method--enddisabled-835186271c240ca7.md) | 1 declarations |
| [`Method: EndGroup`](member-method--endgroup-3bdee6bfd80c7934.md) | 1 declarations |
| [`Method: EndPopup`](member-method--endpopup-d5bf8d8cd9dd53af.md) | 1 declarations |
| [`Method: EndTabBar`](member-method--endtabbar-ad4a995bebf03c10.md) | 1 declarations |
| [`Method: EndTabItem`](member-method--endtabitem-96f9b80811352008.md) | 1 declarations |
| [`Method: EndTable`](member-method--endtable-581e26afd261dc9f.md) | 1 declarations |
| [`Method: FocusNextItem`](member-method--focusnextitem-c6c3e03cde0e239c.md) | 1 declarations |
| [`Method: GetClipBounds`](member-method--getclipbounds-d4a1d7c79dc2864f.md) | 1 declarations |
| [`Method: GetContentRegionAvailable`](member-method--getcontentregionavailable-935e6d83b0af3053.md) | 1 declarations |
| [`Method: GetControlId`](member-method--getcontrolid-a1ba87de14d82ad8.md) | 1 declarations |
| [`Method: GetCursorPosition`](member-method--getcursorposition-ddffb71d74147c29.md) | 1 declarations |
| [`Method: GetCursorPosX`](member-method--getcursorposx-301c629f62ed973a.md) | 1 declarations |
| [`Method: GetCursorPosY`](member-method--getcursorposy-5a62ec28c698e906.md) | 1 declarations |
| [`Method: GetCursorScreenPosition`](member-method--getcursorscreenposition-0c4ea49217cf6ae1.md) | 1 declarations |
| [`Method: GetDrawList`](member-method--getdrawlist-a5a9a47589e8651f.md) | 1 declarations |
| [`Method: GetFontSize`](member-method--getfontsize-34886acca4c28140.md) | 1 declarations |
| [`Method: GetFrameCount`](member-method--getframecount-fabd19ac5f112767.md) | 1 declarations |
| [`Method: GetFrameHeight`](member-method--getframeheight-6ed0dbd5862a1a40.md) | 1 declarations |
| [`Method: GetFrameHeightWithSpacing`](member-method--getframeheightwithspacing-ec725ef0d0f63601.md) | 1 declarations |
| [`Method: GetInput`](member-method--getinput-7bc773c0ec222222.md) | 1 declarations |
| [`Method: GetItemMaximum`](member-method--getitemmaximum-d5790be0d4904510.md) | 1 declarations |
| [`Method: GetItemMinimum`](member-method--getitemminimum-760a6d0d7d128afb.md) | 1 declarations |
| [`Method: GetLayout`](member-method--getlayout-3496a8290dfca759.md) | 1 declarations |
| [`Method: GetMouseDragDelta`](member-method--getmousedragdelta-74948268e1b14c0f.md) | 1 declarations |
| [`Method: GetMousePos`](member-method--getmousepos-ea8beede92758836.md) | 1 declarations |
| [`Method: GetScrollMaxY`](member-method--getscrollmaxy-a1996a8c86cbf8ac.md) | 1 declarations |
| [`Method: GetScrollY`](member-method--getscrolly-3847d7af933ccedc.md) | 1 declarations |
| [`Method: GetStyleColor`](member-method--getstylecolor-d2fa8a8070fea642.md) | 1 declarations |
| [`Method: GetStyleColorValue`](member-method--getstylecolorvalue-4f888c899d3cc0b5.md) | 1 declarations |
| [`Method: GetTableBounds`](member-method--gettablebounds-f01592cb98ebbc21.md) | 1 declarations |
| [`Method: GetTextLineHeight`](member-method--gettextlineheight-513ae65b0409041b.md) | 1 declarations |
| [`Method: GetViewport`](member-method--getviewport-20f2b66110bd6a5c.md) | 1 declarations |
| [`Method: GetWindowBounds`](member-method--getwindowbounds-db2241e4466efec7.md) | 1 declarations |
| [`Method: GetWindowDpiScale`](member-method--getwindowdpiscale-9b715db1d60477d4.md) | 1 declarations |
| [`Method: GetWindowPos`](member-method--getwindowpos-a16c533b6be1c4be.md) | 1 declarations |
| [`Method: GetWindowSize`](member-method--getwindowsize-32a63ddc2d6668e0.md) | 1 declarations |
| [`Method: HasDragPayload`](member-method--hasdragpayload-9845120b7d3e0b01.md) | 1 declarations |
| [`Method: Indent`](member-method--indent-df1ea00e257864de.md) | 1 declarations |
| [`Method: InputFloat`](member-method--inputfloat-878c3c92de0f4bc8.md) | 1 declarations |
| [`Method: InputInt`](member-method--inputint-5c0596b517a25c43.md) | 1 declarations |
| [`Method: InputText`](member-method--inputtext-e89f046ee5e32a94.md) | 1 declarations |
| [`Method: InputTextWithHint`](member-method--inputtextwithhint-9d1c3a8e4b92b787.md) | 1 declarations |
| [`Method: InvisibleButton`](member-method--invisiblebutton-0922270c1157f617.md) | 1 declarations |
| [`Method: IsAnyItemActive`](member-method--isanyitemactive-166ec280fbd0e1ad.md) | 1 declarations |
| [`Method: IsAnyItemHovered`](member-method--isanyitemhovered-7a4f13afabac4fd5.md) | 1 declarations |
| [`Method: IsAnyPopupOpen`](member-method--isanypopupopen-219adc66267076f2.md) | 1 declarations |
| [`Method: IsItemActivated`](member-method--isitemactivated-9ec731b2b6b96480.md) | 1 declarations |
| [`Method: IsItemActive`](member-method--isitemactive-60f887ec3c5810e6.md) | 1 declarations |
| [`Method: IsItemClicked`](member-method--isitemclicked-6164c434a165151e.md) | 1 declarations |
| [`Method: IsItemDeactivatedAfterEdit`](member-method--isitemdeactivatedafteredit-740eee64d34844b5.md) | 1 declarations |
| [`Method: IsItemHovered`](member-method--isitemhovered-0e1a6e2120e72c54.md) | 1 declarations |
| [`Method: IsKeyDown`](member-method--iskeydown-effdde9608785117.md) | 1 declarations |
| [`Method: IsKeyPressed`](member-method--iskeypressed-c2f0fee31bd963b6.md) | 1 declarations |
| [`Method: IsMouseButtonDown`](member-method--ismousebuttondown-c686198f942f4b34.md) | 1 declarations |
| [`Method: IsMouseClicked`](member-method--ismouseclicked-e40284309419e208.md) | 1 declarations |
| [`Method: IsMouseDoubleClicked`](member-method--ismousedoubleclicked-8c11d6bec2a4b376.md) | 1 declarations |
| [`Method: IsMouseHoveringRect`](member-method--ismousehoveringrect-1f8fecbbdd07c98c.md) | 1 declarations |
| [`Method: IsMouseReleased`](member-method--ismousereleased-c71805d6a8ad9d5c.md) | 1 declarations |
| [`Method: IsWindowFocused`](member-method--iswindowfocused-52b00c71c330b81a.md) | 1 declarations |
| [`Method: IsWindowHovered`](member-method--iswindowhovered-3b97f3009457e988.md) | 1 declarations |
| [`Method: MeasureText`](member-method--measuretext-0d75529b78f5faf7.md) | 2 declarations |
| [`Method: MeasureWrappedText`](member-method--measurewrappedtext-db70515f422ef340.md) | 1 declarations |
| [`Method: MenuItem`](member-method--menuitem-2c882837092d195e.md) | 1 declarations |
| [`Method: OpenPopup`](member-method--openpopup-ebf2014d723367b6.md) | 1 declarations |
| [`Method: PopClipRect`](member-method--popcliprect-a62a71d65799b92b.md) | 1 declarations |
| [`Method: PopId`](member-method--popid-321f911967b05f7c.md) | 1 declarations |
| [`Method: PopStyleColor`](member-method--popstylecolor-07e7f4f1f04ae949.md) | 1 declarations |
| [`Method: PopStyleVar`](member-method--popstylevar-1e14ec523a43cfe0.md) | 1 declarations |
| [`Method: PopTextWrapPos`](member-method--poptextwrappos-b32df961c2d2b9be.md) | 1 declarations |
| [`Method: PushClipRect`](member-method--pushcliprect-97b1b43fd82a094c.md) | 1 declarations |
| [`Method: PushId`](member-method--pushid-d8755b8fc04e3122.md) | 2 declarations |
| [`Method: PushStyleColor`](member-method--pushstylecolor-4cc54221b3b0b6e1.md) | 1 declarations |
| [`Method: PushStyleVar`](member-method--pushstylevar-fb3175e9c6c6587f.md) | 2 declarations |
| [`Method: PushTextWrapPos`](member-method--pushtextwrappos-af0674334a420516.md) | 1 declarations |
| [`Method: ResetMouseDragDelta`](member-method--resetmousedragdelta-17375696de842e73.md) | 1 declarations |
| [`Method: SameLine`](member-method--sameline-9c31952038d590e7.md) | 1 declarations |
| [`Method: Selectable`](member-method--selectable-6d73ffea6ff5e9af.md) | 1 declarations |
| [`Method: Separator`](member-method--separator-07a59a4d7b011387.md) | 1 declarations |
| [`Method: SeparatorText`](member-method--separatortext-129527d7b4b58140.md) | 1 declarations |
| [`Method: SetClipboardText`](member-method--setclipboardtext-c3b9168b7c070ff3.md) | 1 declarations |
| [`Method: SetCursorPosition`](member-method--setcursorposition-49a75c2d28ba08c9.md) | 1 declarations |
| [`Method: SetCursorPosX`](member-method--setcursorposx-fb1a0f5045ab45bf.md) | 1 declarations |
| [`Method: SetCursorPosY`](member-method--setcursorposy-ae6a3bd5e6514426.md) | 1 declarations |
| [`Method: SetCursorScreenPosition`](member-method--setcursorscreenposition-4b62547ccdaa4021.md) | 1 declarations |
| [`Method: SetItemDefaultFocus`](member-method--setitemdefaultfocus-96d1f31b1a338dd6.md) | 1 declarations |
| [`Method: SetKeyboardFocusHere`](member-method--setkeyboardfocushere-40b55f896aee746a.md) | 1 declarations |
| [`Method: SetMouseCursor`](member-method--setmousecursor-b8839237f5a9cf95.md) | 1 declarations |
| [`Method: SetNextItemAllowOverlap`](member-method--setnextitemallowoverlap-89ff7dc8d8242c94.md) | 1 declarations |
| [`Method: SetNextItemWidth`](member-method--setnextitemwidth-931f9cfd9dd53e50.md) | 1 declarations |
| [`Method: SetNextWindowContentSize`](member-method--setnextwindowcontentsize-4ef7c459a21c0909.md) | 1 declarations |
| [`Method: SetNextWindowSize`](member-method--setnextwindowsize-8bbcd2ee4e9bdd58.md) | 1 declarations |
| [`Method: SetScrollHereY`](member-method--setscrollherey-b184e955011b2275.md) | 1 declarations |
| [`Method: SliderFloat`](member-method--sliderfloat-a88540350c2fab0d.md) | 1 declarations |
| [`Method: SliderInt`](member-method--sliderint-0b86fdc8d17dabe5.md) | 1 declarations |
| [`Method: SmallButton`](member-method--smallbutton-274f7abff37e0f93.md) | 1 declarations |
| [`Method: Spacing`](member-method--spacing-ed608e31c3526452.md) | 1 declarations |
| [`Method: TableHeadersRow`](member-method--tableheadersrow-e3fc41885b6fe699.md) | 1 declarations |
| [`Method: TableNextColumn`](member-method--tablenextcolumn-537c5bbb6bf995a0.md) | 1 declarations |
| [`Method: TableNextRow`](member-method--tablenextrow-ca67627aa319eb0b.md) | 1 declarations |
| [`Method: TableSetBgColor`](member-method--tablesetbgcolor-807001b0ef9b5cc0.md) | 1 declarations |
| [`Method: TableSetColumnIndex`](member-method--tablesetcolumnindex-fe1dbec3fa3841c6.md) | 1 declarations |
| [`Method: TableSetupColumn`](member-method--tablesetupcolumn-7919f6a09a7b7cd1.md) | 1 declarations |
| [`Method: Text`](member-method--text-be18ba10125f438f.md) | 1 declarations |
| [`Method: ToPackedColor`](member-method--topackedcolor-025d15075a7f918a.md) | 1 declarations |
| [`Method: TreeNode`](member-method--treenode-920dff03f5124cbf.md) | 1 declarations |
| [`Method: TreePop`](member-method--treepop-1a229905d7948def.md) | 1 declarations |
| [`Method: Unindent`](member-method--unindent-ecb378b0b6721c79.md) | 1 declarations |

## Type declaration

<a id="api-00baca154a6f58ab"></a>
<!-- api: T:InnoEditor.ImGui.ImGui ef3aa2cc0bf1e4a45d45c62108e462f34fa062278e1e26d6ebcdee84741d3d92 -->

```csharp
public static class InnoEditor.ImGui.ImGui
```

Provides pointer-free controls within the active Editor UI session.

Provides frame-bounded drawing access and copied presentation values.

Reads copied input values from the active Editor UI session.

Provides scoped layout operations without exposing native context storage.

Presents tables through the active Editor UI context.

Copies presentation values and creates frame-bounded drawing borrows.

Exposes a script-safe, pointer-free subset of Dear ImGui for custom Editor tools.
Every call is valid only while an Editor drawing callback is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Controls.cs#L9).
