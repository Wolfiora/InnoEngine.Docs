---
title: "EditorViewportNavigationProfile"
description: "Reference for EditorViewportNavigationProfile in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.57a7c5f658402ef9
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportNavigationProfile`

This reference describes `EditorViewportNavigationProfile` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-99c31677785a2fbd) | Method |
| [`capabilities`](#api-06f83431e9650a3a) | Property |
| [`defaultMode`](#api-9d18752ea9dd6420) | Property |
| [`disabled`](#api-731f8c29ab53ee32) | Property |
| [`fastMovementMultiplier`](#api-487f2af37b2759b3) | Property |
| [`focusBounds`](#api-b738fe25bcf7c4ed) | Property |
| [`framePadding`](#api-ba738615d299e9b0) | Property |
| [`id`](#api-8df03cd1ccdd2bc6) | Property |
| [`maximumFocusDistance`](#api-4acbe872577e49fe) | Property |
| [`maximumOrthographicSize`](#api-6ba2e22f898e420f) | Property |
| [`minimumFocusDistance`](#api-3bb60b589d36570f) | Property |
| [`minimumOrthographicSize`](#api-21aa3db74927b0c5) | Property |
| [`rotationSensitivity`](#api-a80ada3749f3c218) | Property |
| [`worldUp`](#api-3fed733c20c46953) | Property |
| [`zoomSensitivity`](#api-8619ad5e75a1b883) | Property |

## Type declaration

<a id="api-57a7c5f658402ef9"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportNavigationProfile 908eca8046b859e67ce764b0ad55d745f26a6b0d77691044a46edc30a51d1bc1 -->

```csharp
public sealed class InnoEditor.Rendering.EditorViewportNavigationProfile
```

Describes how the host may navigate one provider-owned viewport without exposing the provider's camera model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L170).

## `#ctor`

<a id="api-99c31677785a2fbd"></a>
<!-- api: M:InnoEditor.Rendering.EditorViewportNavigationProfile.#ctor(InnoEditor.Rendering.EditorViewportNavigationProfileId,InnoEditor.Rendering.EditorViewportNavigationCapabilities,InnoEditor.Rendering.EditorViewportNavigationMode) 2506c2fec7a500f0ac673d188d2fbe7b3d8d7b102cc99e77f27c742baecca97f -->

```csharp
public InnoEditor.Rendering.EditorViewportNavigationProfile.EditorViewportNavigationProfile(InnoEditor.Rendering.EditorViewportNavigationProfileId id, InnoEditor.Rendering.EditorViewportNavigationCapabilities capabilities, InnoEditor.Rendering.EditorViewportNavigationMode defaultMode)
```

Creates a provider-defined navigation profile.

**Parameter `id`:** Stable profile identity.

**Parameter `capabilities`:** Operations accepted by the provider.

**Parameter `defaultMode`:** Preferred mode when current state is unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L184).

## `capabilities`

<a id="api-06f83431e9650a3a"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.capabilities e49efb8d8bdb1f9392360719a4c4fc0cf8d16b91a14050c35131bb94ac83175f -->

```csharp
public InnoEditor.Rendering.EditorViewportNavigationCapabilities InnoEditor.Rendering.EditorViewportNavigationProfile.capabilities { get; }
```

Gets the operations accepted by this provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L219).

## `defaultMode`

<a id="api-9d18752ea9dd6420"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.defaultMode 535bcebd45d64efe52a63d857357b53880cc47301c2866851472769c3a1265c4 -->

```csharp
public InnoEditor.Rendering.EditorViewportNavigationMode InnoEditor.Rendering.EditorViewportNavigationProfile.defaultMode { get; }
```

Gets the mode selected when current state is not supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L224).

## `disabled`

<a id="api-731f8c29ab53ee32"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.disabled 329d18c2f55262fe458b680f33fe98af9afbabeb3713aa4a1bfaa9024282a30e -->

```csharp
public static InnoEditor.Rendering.EditorViewportNavigationProfile InnoEditor.Rendering.EditorViewportNavigationProfile.disabled { get; }
```

Gets a disabled fallback profile used when no provider navigation contract exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L279).

## `fastMovementMultiplier`

<a id="api-487f2af37b2759b3"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.fastMovementMultiplier 1d23e6d88487d7514dc3e9064c819472c4aa256145a14a56e4e54130493c6df1 -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationProfile.fastMovementMultiplier { get; set; }
```

Gets or sets the multiplier used while fast fly movement is requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L269).

## `focusBounds`

<a id="api-b738fe25bcf7c4ed"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.focusBounds d18915dfae25832102c381a739a1a968fa66891ec9b24f2ba73c150068941575 -->

```csharp
public InnoEditor.Rendering.EditorViewportFocusBounds? InnoEditor.Rendering.EditorViewportNavigationProfile.focusBounds { get; set; }
```

Gets or sets the optional current selection bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L234).

## `framePadding`

<a id="api-ba738615d299e9b0"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.framePadding a2bbb7552365e6ae4f2098d9fc130bdaa9b2adfb24fcf70e33eba1910ba03044 -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationProfile.framePadding { get; set; }
```

Gets or sets additional framing space around selection bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L274).

## `id`

<a id="api-8df03cd1ccdd2bc6"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.id d00cbbf73c2039bba455fb1d585089990a62e1f67d7ff21b943c87a96d3851b8 -->

```csharp
public InnoEditor.Rendering.EditorViewportNavigationProfileId InnoEditor.Rendering.EditorViewportNavigationProfile.id { get; }
```

Gets the stable profile identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L214).

## `maximumFocusDistance`

<a id="api-4acbe872577e49fe"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.maximumFocusDistance ba5e800bcec9b0f5d5f21585595bd77d43502f872a39c4204022d9d31a4ac996 -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationProfile.maximumFocusDistance { get; set; }
```

Gets or sets maximum orbit or framing distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L264).

## `maximumOrthographicSize`

<a id="api-6ba2e22f898e420f"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.maximumOrthographicSize 5feafd15a60d5f29c4f3c746128abab62338e29f2126fe50c471794c5c28b217 -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationProfile.maximumOrthographicSize { get; set; }
```

Gets or sets maximum orthographic half-height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L254).

## `minimumFocusDistance`

<a id="api-3bb60b589d36570f"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.minimumFocusDistance ecff0f13e1195a51355b41fe7982d3feb2d2b79401d6acd1e5b8938715353419 -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationProfile.minimumFocusDistance { get; set; }
```

Gets or sets minimum orbit or framing distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L259).

## `minimumOrthographicSize`

<a id="api-21aa3db74927b0c5"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.minimumOrthographicSize 0d3a32521a6c11c5a932e20e8b718e9eab52f13f3945b41376a7da0ea14825d6 -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationProfile.minimumOrthographicSize { get; set; }
```

Gets or sets minimum orthographic half-height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L249).

## `rotationSensitivity`

<a id="api-a80ada3749f3c218"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.rotationSensitivity 3e72f6f76069be47d7165280f5a89847ac61055bad61f28371bff0542343f393 -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationProfile.rotationSensitivity { get; set; }
```

Gets or sets pointer rotation sensitivity in radians per pixel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L239).

## `worldUp`

<a id="api-3fed733c20c46953"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.worldUp dbb1210dc384e31466a6f878dcbef6e9dc4286666277418d37cd0ba4eb322e53 -->

```csharp
public InnoEngine.Mathematics.Vector3 InnoEditor.Rendering.EditorViewportNavigationProfile.worldUp { get; set; }
```

Gets or sets the provider-defined world-up direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L229).

## `zoomSensitivity`

<a id="api-8619ad5e75a1b883"></a>
<!-- api: P:InnoEditor.Rendering.EditorViewportNavigationProfile.zoomSensitivity 274633e89a24bbe37c622f967044001d63d5c375ecf112651188833d23312932 -->

```csharp
public float InnoEditor.Rendering.EditorViewportNavigationProfile.zoomSensitivity { get; set; }
```

Gets or sets exponential wheel zoom sensitivity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L244).
