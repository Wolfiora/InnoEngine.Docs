---
title: "UiTextureUpdate"
description: "Reference for UiTextureUpdate in Inno.UI."
uid: api.inno.ui.runtime-script.cb663d65cbe60598
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiTextureUpdate`

This reference describes `UiTextureUpdate` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e0fc311b606fad12) | Method |
| [`height`](#api-a3feaa626688d07e) | Property |
| [`pixels`](#api-2723805573d48e5c) | Property |
| [`revision`](#api-7ddfc989724beb01) | Property |
| [`texture`](#api-c8fad5d2a03b2c78) | Property |
| [`width`](#api-de87c985bbc9c60b) | Property |

## Type declaration

<a id="api-cb663d65cbe60598"></a>
<!-- api: T:InnoEngine.UI.UiTextureUpdate 98542c239ceac6ea338d06e52498fc6b8d752b267a1a35fbc495eea7cdd3cf8b -->

```csharp
public sealed class InnoEngine.UI.UiTextureUpdate
```

Publishes one immutable premultiplied RGBA8 texture generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L96).

## `#ctor`

<a id="api-e0fc311b606fad12"></a>
<!-- api: M:InnoEngine.UI.UiTextureUpdate.#ctor 56b993a7f7373b275de47f412251d7a7a38292cdb1c068b328ca0754c312644e -->

```csharp
public InnoEngine.UI.UiTextureUpdate.UiTextureUpdate()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L96).

## `height`

<a id="api-a3feaa626688d07e"></a>
<!-- api: P:InnoEngine.UI.UiTextureUpdate.height c573a00826d16341d6716f06afb97cae0fdebaf8f3c8d987789c23acee9ea056 -->

```csharp
public int InnoEngine.UI.UiTextureUpdate.height { get; }
```

Gets the texture height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L129).

## `pixels`

<a id="api-2723805573d48e5c"></a>
<!-- api: P:InnoEngine.UI.UiTextureUpdate.pixels a25d13063310f67381f7b5e613dab73d88da6a8b0dc5f5a0fa063732d7a11c11 -->

```csharp
public System.ReadOnlyMemory<byte> InnoEngine.UI.UiTextureUpdate.pixels { get; }
```

Gets immutable tightly packed premultiplied RGBA8 pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L133).

## `revision`

<a id="api-7ddfc989724beb01"></a>
<!-- api: P:InnoEngine.UI.UiTextureUpdate.revision e88e689054bf059c98689d1db788510388a333b3332d977383617c720c19e872 -->

```csharp
public ulong InnoEngine.UI.UiTextureUpdate.revision { get; }
```

Gets the monotonically increasing content revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L121).

## `texture`

<a id="api-c8fad5d2a03b2c78"></a>
<!-- api: P:InnoEngine.UI.UiTextureUpdate.texture 64c39efbc5735f821865b741d176cbf19620ac56eedbcc77730482e05b16e991 -->

```csharp
public InnoEngine.UI.UiTextureHandle InnoEngine.UI.UiTextureUpdate.texture { get; }
```

Gets the generation-scoped texture handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L117).

## `width`

<a id="api-de87c985bbc9c60b"></a>
<!-- api: P:InnoEngine.UI.UiTextureUpdate.width 8d6052487a87f34a3f0d723766459a4ba5e4438bf1f6e74344372d11ef001a56 -->

```csharp
public int InnoEngine.UI.UiTextureUpdate.width { get; }
```

Gets the texture width.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L125).
