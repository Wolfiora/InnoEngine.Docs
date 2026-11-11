---
title: "EditorViewportNavigationProfile"
description: "Reference for EditorViewportNavigationProfile in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.3c4ca56b4ed87113
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportNavigationProfile`

This reference describes `EditorViewportNavigationProfile` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9c3957eed848d438) | Method |
| [`capabilities`](#api-89ec5122706ffbd5) | Property |
| [`defaultMode`](#api-aabaa50647d39825) | Property |
| [`disabled`](#api-e3bf38ee5c373ead) | Property |
| [`fastMovementMultiplier`](#api-304878823c285416) | Property |
| [`focusBounds`](#api-6314901886c30e0d) | Property |
| [`framePadding`](#api-bbcefbdab3798dac) | Property |
| [`id`](#api-520c9ce2f6b22df2) | Property |
| [`maximumFocusDistance`](#api-c6f581cb4039cb83) | Property |
| [`maximumOrthographicSize`](#api-d73f54176fcc4b54) | Property |
| [`minimumFocusDistance`](#api-7ee982178d33e04b) | Property |
| [`minimumOrthographicSize`](#api-3b049f4a30fb8083) | Property |
| [`rotationSensitivity`](#api-927cb4e59e5a37aa) | Property |
| [`worldUp`](#api-9956fa5e92c3c0e8) | Property |
| [`zoomSensitivity`](#api-e3239d319596b8fa) | Property |

## Type declaration

<a id="api-3c4ca56b4ed87113"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportNavigationProfile ec144aa5001f002ce3402464c140e0c2f17285dc678efd6f249470de19a39566 -->

```csharp
public sealed class Inno.Editor.Rendering.EditorViewportNavigationProfile
```

Describes how the host may navigate one provider-owned viewport without exposing the provider's camera model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L170).

## `#ctor`

<a id="api-9c3957eed848d438"></a>
<!-- api: M:Inno.Editor.Rendering.EditorViewportNavigationProfile.#ctor(Inno.Editor.Rendering.EditorViewportNavigationProfileId,Inno.Editor.Rendering.EditorViewportNavigationCapabilities,Inno.Editor.Rendering.EditorViewportNavigationMode) 9fa295140163fd51a653add340ea02b6d4bf976aa94c5097926abf44b420bbad -->

```csharp
public Inno.Editor.Rendering.EditorViewportNavigationProfile.EditorViewportNavigationProfile(Inno.Editor.Rendering.EditorViewportNavigationProfileId id, Inno.Editor.Rendering.EditorViewportNavigationCapabilities capabilities, Inno.Editor.Rendering.EditorViewportNavigationMode defaultMode)
```

Creates a provider-defined navigation profile.

**Parameter `id`:** Stable profile identity.

**Parameter `capabilities`:** Operations accepted by the provider.

**Parameter `defaultMode`:** Preferred mode when current state is unsupported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L184).

## `capabilities`

<a id="api-89ec5122706ffbd5"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.capabilities 1cb1c580a8a683bb6158e1b989714adf5101e79ad6f458a4ee6f113651958029 -->

```csharp
public Inno.Editor.Rendering.EditorViewportNavigationCapabilities Inno.Editor.Rendering.EditorViewportNavigationProfile.capabilities { get; }
```

Gets the operations accepted by this provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L219).

## `defaultMode`

<a id="api-aabaa50647d39825"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.defaultMode 8d181bb054f8b9dcc2352c3f4dd04633fc17f143baa320434e065bd2f37cd6c2 -->

```csharp
public Inno.Editor.Rendering.EditorViewportNavigationMode Inno.Editor.Rendering.EditorViewportNavigationProfile.defaultMode { get; }
```

Gets the mode selected when current state is not supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L224).

## `disabled`

<a id="api-e3bf38ee5c373ead"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.disabled 48c9ad08e71fb3b2c8fc67f46c19efb53dd5ce488662caa0d4e5845e3b83bf97 -->

```csharp
public static Inno.Editor.Rendering.EditorViewportNavigationProfile Inno.Editor.Rendering.EditorViewportNavigationProfile.disabled { get; }
```

Gets a disabled fallback profile used when no provider navigation contract exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L279).

## `fastMovementMultiplier`

<a id="api-304878823c285416"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.fastMovementMultiplier 6da8efbf0819fe1e0611ee15b144c8f44bcc0da8eaf574628cced21cb79fb597 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationProfile.fastMovementMultiplier { get; set; }
```

Gets or sets the multiplier used while fast fly movement is requested.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L269).

## `focusBounds`

<a id="api-6314901886c30e0d"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.focusBounds 2b264546a4383bc72ccfb7f524effd28558061a74af69aa7ae11ff0500189ea3 -->

```csharp
public Inno.Editor.Rendering.EditorViewportFocusBounds? Inno.Editor.Rendering.EditorViewportNavigationProfile.focusBounds { get; set; }
```

Gets or sets the optional current selection bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L234).

## `framePadding`

<a id="api-bbcefbdab3798dac"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.framePadding d8ee076e8a6ff22840d093c103697002000471ef8018f67c411e8bd10702ee0a -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationProfile.framePadding { get; set; }
```

Gets or sets additional framing space around selection bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L274).

## `id`

<a id="api-520c9ce2f6b22df2"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.id ced5f6d6257b9464cf8bde82bd1176a1f42e70172c36f78208229771e9213685 -->

```csharp
public Inno.Editor.Rendering.EditorViewportNavigationProfileId Inno.Editor.Rendering.EditorViewportNavigationProfile.id { get; }
```

Gets the stable profile identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L214).

## `maximumFocusDistance`

<a id="api-c6f581cb4039cb83"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.maximumFocusDistance 6ed75e92607f3c718e50adb2e3a098f4bbc1d92014e0fe1f95f3778411b44778 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationProfile.maximumFocusDistance { get; set; }
```

Gets or sets maximum orbit or framing distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L264).

## `maximumOrthographicSize`

<a id="api-d73f54176fcc4b54"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.maximumOrthographicSize a8296fae8e838a48cf57e2c375788f2323096aaba8819ca56a8d2c0a492a4525 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationProfile.maximumOrthographicSize { get; set; }
```

Gets or sets maximum orthographic half-height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L254).

## `minimumFocusDistance`

<a id="api-7ee982178d33e04b"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.minimumFocusDistance 130b5c4e8eed3ada720ed7a8cd83ae4b9efff54a8cdeed09f359eaece8f9c269 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationProfile.minimumFocusDistance { get; set; }
```

Gets or sets minimum orbit or framing distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L259).

## `minimumOrthographicSize`

<a id="api-3b049f4a30fb8083"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.minimumOrthographicSize 87f892388eb8c5d12b3b5ee63ae5318b16e7188c7cce50eabfdddc366fae1104 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationProfile.minimumOrthographicSize { get; set; }
```

Gets or sets minimum orthographic half-height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L249).

## `rotationSensitivity`

<a id="api-927cb4e59e5a37aa"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.rotationSensitivity d3bae95878e02e21704e4100f7c489036adcb9ea6c29794a045abc6386554369 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationProfile.rotationSensitivity { get; set; }
```

Gets or sets pointer rotation sensitivity in radians per pixel.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L239).

## `worldUp`

<a id="api-9956fa5e92c3c0e8"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.worldUp 85a7381a561e124827e97c665d93458d12ce446139568315f2afed6d7de239f8 -->

```csharp
public Inno.Core.Mathematics.Vector3 Inno.Editor.Rendering.EditorViewportNavigationProfile.worldUp { get; set; }
```

Gets or sets the provider-defined world-up direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L229).

## `zoomSensitivity`

<a id="api-e3239d319596b8fa"></a>
<!-- api: P:Inno.Editor.Rendering.EditorViewportNavigationProfile.zoomSensitivity af1b5289095a9e29f7397d6342295f7f42f12a0cd93e044ed5ff577b74cc2629 -->

```csharp
public float Inno.Editor.Rendering.EditorViewportNavigationProfile.zoomSensitivity { get; set; }
```

Gets or sets exponential wheel zoom sensitivity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L244).
