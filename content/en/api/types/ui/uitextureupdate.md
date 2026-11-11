---
title: "UiTextureUpdate"
description: "Reference for UiTextureUpdate in Inno.UI."
uid: api.inno.ui.1022bf3ae548f8a5
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiTextureUpdate`

This reference describes `UiTextureUpdate` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`height`](#api-b6a3ff734d3db9c3) | Property |
| [`pixels`](#api-e9f3004a8c2e7265) | Property |
| [`revision`](#api-36e2e1bb95fe61f8) | Property |
| [`texture`](#api-02bf8ec55b8f0499) | Property |
| [`width`](#api-47ca80bf92f8e7f0) | Property |

## Type declaration

<a id="api-1022bf3ae548f8a5"></a>
<!-- api: T:Inno.UI.UiTextureUpdate 1f5abdc77181b34fa5f82f0fc16756d392c423f71df52769fb897425baf5f2ab -->

```csharp
public sealed class Inno.UI.UiTextureUpdate
```

Publishes one immutable premultiplied RGBA8 texture generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L96).

## `height`

<a id="api-b6a3ff734d3db9c3"></a>
<!-- api: P:Inno.UI.UiTextureUpdate.height c5bbe7c79aaf97bb4aca6856c8e141508f704b31a4de33375fd8dd20f1793977 -->

```csharp
public int Inno.UI.UiTextureUpdate.height { get; }
```

Gets the texture height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L129).

## `pixels`

<a id="api-e9f3004a8c2e7265"></a>
<!-- api: P:Inno.UI.UiTextureUpdate.pixels ea993536fedfc27aa7a36146e751c8c98966e909b943dcea2ba95758d1f09c4b -->

```csharp
public System.ReadOnlyMemory<byte> Inno.UI.UiTextureUpdate.pixels { get; }
```

Gets immutable tightly packed premultiplied RGBA8 pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L133).

## `revision`

<a id="api-36e2e1bb95fe61f8"></a>
<!-- api: P:Inno.UI.UiTextureUpdate.revision 45a0e8ddc515f54b7912791d8f16df9e7f32d891f0523cdb9646ede1f00eacdc -->

```csharp
public ulong Inno.UI.UiTextureUpdate.revision { get; }
```

Gets the monotonically increasing content revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L121).

## `texture`

<a id="api-02bf8ec55b8f0499"></a>
<!-- api: P:Inno.UI.UiTextureUpdate.texture 77b8b5ca285deee38c3e9c4d731d10f69db3cebac39ab2fc898830a45cac74c3 -->

```csharp
public Inno.UI.UiTextureHandle Inno.UI.UiTextureUpdate.texture { get; }
```

Gets the generation-scoped texture handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L117).

## `width`

<a id="api-47ca80bf92f8e7f0"></a>
<!-- api: P:Inno.UI.UiTextureUpdate.width 185d133b5b50c25a1e5abc4b97848ec3e9fd3b82dd4c3a0a310a240ae78c681d -->

```csharp
public int Inno.UI.UiTextureUpdate.width { get; }
```

Gets the texture width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L125).
