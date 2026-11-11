---
title: "UiRenderFrameBuilder"
description: "Reference for UiRenderFrameBuilder in Inno.UI."
uid: api.inno.ui.f4ac5b2e2b699df2
kind: api
owners:
  - Inno.UI
apiSurface: source-clr
contracts:
  - project.inno-ui#document-and-frame-contract
---
# `UiRenderFrameBuilder`

This reference describes `UiRenderFrameBuilder` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-30dc5b27e71ac14b) | Method |
| [`AddCommand`](#api-17fd6de911683c90) | Method |
| [`AddMeshUpdate`](#api-544518aedea2597b) | Method |
| [`AddReleasedMesh`](#api-19cd0d5424d810b2) | Method |
| [`AddReleasedTexture`](#api-08245c74b32339a0) | Method |
| [`AddTextureUpdate`](#api-234f406318729212) | Method |
| [`Build`](#api-887ed96f5417d5e6) | Method |

## Type declaration

<a id="api-f4ac5b2e2b699df2"></a>
<!-- api: T:Inno.UI.UiRenderFrameBuilder b165510a9ce6d6a4db7d5a89f09d961a44370bbea4f6440f71f101a29decc841 -->

```csharp
public sealed class Inno.UI.UiRenderFrameBuilder
```

Builds one immutable backend-neutral frame while transferring ownership of update arrays.

**Constraints:** This backend SPI is intentionally not exported to ordinary game scripts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L240).

## `#ctor`

<a id="api-30dc5b27e71ac14b"></a>
<!-- api: M:Inno.UI.UiRenderFrameBuilder.#ctor 3df4d1a786af259c14a477beba3f230ddf122befa2a09ad2fad38f3d3618dd3d -->

```csharp
public Inno.UI.UiRenderFrameBuilder.UiRenderFrameBuilder()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L240).

## `AddCommand`

<a id="api-17fd6de911683c90"></a>
<!-- api: M:Inno.UI.UiRenderFrameBuilder.AddCommand(Inno.UI.UiDrawCommand) 96e9299ea4ab0395b988cfd844777d3c27563a3d96c4ac0aa2f87f012ce046aa -->

```csharp
public void Inno.UI.UiRenderFrameBuilder.AddCommand(Inno.UI.UiDrawCommand command)
```

Adds one ordered mesh draw.

**Parameter `command`:** Draw command referencing an assigned mesh.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L357).

## `AddMeshUpdate`

<a id="api-544518aedea2597b"></a>
<!-- api: M:Inno.UI.UiRenderFrameBuilder.AddMeshUpdate(Inno.UI.UiMeshHandle,System.UInt64,Inno.UI.UiVertex[],System.UInt32[]) 7899b3af9877a5c1085b7ec0d6859755ed8df52e3326029d7561545b734f99b1 -->

```csharp
public void Inno.UI.UiRenderFrameBuilder.AddMeshUpdate(Inno.UI.UiMeshHandle mesh, ulong revision, Inno.UI.UiVertex[] vertices, uint[] indices)
```

Adds one mesh update and takes exclusive ownership of both arrays.

**Parameter `mesh`:** Assigned mesh handle.

**Parameter `revision`:** Positive content revision.

**Parameter `vertices`:** Owned vertex array; the caller must not mutate it afterward.

**Parameter `indices`:** Owned index array; the caller must not mutate it afterward.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L264).

## `AddReleasedMesh`

<a id="api-19cd0d5424d810b2"></a>
<!-- api: M:Inno.UI.UiRenderFrameBuilder.AddReleasedMesh(Inno.UI.UiMeshHandle) 1bcfabb5acd536bfd91c7660d0ff4a8156ae3ea41b4cb0dca1e48493a68bceb7 -->

```csharp
public void Inno.UI.UiRenderFrameBuilder.AddReleasedMesh(Inno.UI.UiMeshHandle mesh)
```

Adds one mesh retirement.

**Parameter `mesh`:** Assigned mesh handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L291).

## `AddReleasedTexture`

<a id="api-08245c74b32339a0"></a>
<!-- api: M:Inno.UI.UiRenderFrameBuilder.AddReleasedTexture(Inno.UI.UiTextureHandle) 70b47da5e68c98f1438c98f1f1b0493a048df5727c01d767de28a72bd10d6de8 -->

```csharp
public void Inno.UI.UiRenderFrameBuilder.AddReleasedTexture(Inno.UI.UiTextureHandle texture)
```

Adds one texture retirement.

**Parameter `texture`:** Assigned texture handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L343).

## `AddTextureUpdate`

<a id="api-234f406318729212"></a>
<!-- api: M:Inno.UI.UiRenderFrameBuilder.AddTextureUpdate(Inno.UI.UiTextureHandle,System.UInt64,System.Int32,System.Int32,System.Byte[]) c2875621f6f9acda426b793b55b1e40044afa02a12e81031a44a0f8d89b3a9db -->

```csharp
public void Inno.UI.UiRenderFrameBuilder.AddTextureUpdate(Inno.UI.UiTextureHandle texture, ulong revision, int width, int height, byte[] pixels)
```

Adds one texture update and takes exclusive ownership of its pixel array.

**Parameter `texture`:** Assigned texture handle.

**Parameter `revision`:** Positive content revision.

**Parameter `width`:** Positive pixel width.

**Parameter `height`:** Positive pixel height.

**Parameter `pixels`:** Owned tightly packed premultiplied RGBA8 pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L317).

## `Build`

<a id="api-887ed96f5417d5e6"></a>
<!-- api: M:Inno.UI.UiRenderFrameBuilder.Build cf39a7ca24a3e7925279bf469143ce728d67b367d43befce36e7bf6a4022002d -->

```csharp
public Inno.UI.UiRenderFrame Inno.UI.UiRenderFrameBuilder.Build()
```

Freezes the accumulated frame. The builder cannot be reused.

**Returns:** An immutable frame owning every supplied array.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/7e741e05b4eec4a757c7fe5934b94655271f2e2d/src/services/ui/Inno.UI/UiRendering.cs#L371).
