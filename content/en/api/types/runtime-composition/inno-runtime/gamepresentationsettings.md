---
title: "GamePresentationSettings"
description: "Reference for GamePresentationSettings in Inno.Runtime."
uid: api.inno.runtime.9cd830f217603b7d
kind: api
owners:
  - Inno.Runtime
apiSurface: source-clr
contracts:
  - project.inno-runtime
---
# `GamePresentationSettings`

This reference describes `GamePresentationSettings` in `Inno.Runtime`. Read the [shared contract](../../../projects/inno-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`settingProtocolId`](#api-298b2eadc745cf06) | Field |
| [`#ctor`](#api-1ffe99dd59dceb68) | Method |
| [`CalculateViewport`](#api-9b02f58e226e3919) | Method |
| [`preserveAspectRatio`](#api-79427885e25456f3) | Property |
| [`referenceHeight`](#api-ff8ca3a427fe5f0b) | Property |
| [`referenceWidth`](#api-439123508a26a260) | Property |
| [`settingId`](#api-4f7b3945cd705fbb) | Property |

## Type declaration

<a id="api-9cd830f217603b7d"></a>
<!-- api: T:Inno.Runtime.GamePresentationSettings 74f9f4dab2dd85613997215eb04b8fa6a981f9a398df3d17fe048e012c02d551 -->

```csharp
public sealed class Inno.Runtime.GamePresentationSettings : Inno.Core.Serialization.ISerializable
```

Defines the project-wide game presentation area shared by Editor previews and deployed Players.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L15).

## `settingProtocolId`

<a id="api-298b2eadc745cf06"></a>
<!-- api: F:Inno.Runtime.GamePresentationSettings.settingProtocolId d45debbf52dfadb0db494afe1d5bcd5cda0ac740ab501e6bd264c74ed74c6abc -->

```csharp
public const string Inno.Runtime.GamePresentationSettings.settingProtocolId = "inno.runtime.game-presentation"
```

Gets the immutable project-setting protocol value used by discovery metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L20).

## `#ctor`

<a id="api-1ffe99dd59dceb68"></a>
<!-- api: M:Inno.Runtime.GamePresentationSettings.#ctor 0572c89817c2312ef08dc9f1a3dd74ccd1381eb0b39b068ef1eca4e5f36a4cbd -->

```csharp
public Inno.Runtime.GamePresentationSettings.GamePresentationSettings()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L15).

## `CalculateViewport`

<a id="api-9b02f58e226e3919"></a>
<!-- api: M:Inno.Runtime.GamePresentationSettings.CalculateViewport(System.Int32,System.Int32) cdd26540f2ddea68bb9215674a16c1d1bae631bc199bc12bdef8096c13b2385e -->

```csharp
public Inno.Runtime.GamePresentationViewport Inno.Runtime.GamePresentationSettings.CalculateViewport(int availableWidth, int availableHeight)
```

Calculates the centered content region for an available presentation surface.

**Parameter `availableWidth`:** Positive available surface width in pixels or logical preview units.

**Parameter `availableHeight`:** Positive available surface height in pixels or logical preview units.

**Returns:** A positive region that fills the surface or fits the configured reference aspect ratio.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when an available or reference dimension is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L60).

## `preserveAspectRatio`

<a id="api-79427885e25456f3"></a>
<!-- api: P:Inno.Runtime.GamePresentationSettings.preserveAspectRatio 3fa6f335ecb6e862be610f3028a71f60d99bcf7e6db832e3c19b35b888419b38 -->

```csharp
public bool Inno.Runtime.GamePresentationSettings.preserveAspectRatio { get; set; }
```

Gets or sets whether the complete reference frame is fitted inside the available surface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L31).

## `referenceHeight`

<a id="api-ff8ca3a427fe5f0b"></a>
<!-- api: P:Inno.Runtime.GamePresentationSettings.referenceHeight 03d8798ab3da587eddc1d0ec947fb753f776e1d59533de446bffd7e4d4fd3514 -->

```csharp
public int Inno.Runtime.GamePresentationSettings.referenceHeight { get; set; }
```

Gets or sets the positive reference-frame height used to derive the presentation aspect ratio.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L43).

## `referenceWidth`

<a id="api-439123508a26a260"></a>
<!-- api: P:Inno.Runtime.GamePresentationSettings.referenceWidth 803a85933d3a2fbf37028b9b7a6be2da6413e5bd6c17b2e7cd6b0f73989905fb -->

```csharp
public int Inno.Runtime.GamePresentationSettings.referenceWidth { get; set; }
```

Gets or sets the positive reference-frame width used to derive the presentation aspect ratio.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L37).

## `settingId`

<a id="api-4f7b3945cd705fbb"></a>
<!-- api: P:Inno.Runtime.GamePresentationSettings.settingId 54c858c344998b27921614dbe283a327b01c28de3ea778a27257ea33baa10a7d -->

```csharp
public static Inno.Core.Settings.ProjectSettingId Inno.Runtime.GamePresentationSettings.settingId { get; }
```

Gets the stable project-setting identity for game presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/runtime/engine/Inno.Runtime/Presentation/GamePresentationSettings.cs#L25).
