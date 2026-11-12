---
title: "UiRenderFrame"
description: "Reference for UiRenderFrame in Inno.UI."
uid: api.inno.ui.runtime-script.f68e4df127e22581
kind: api
owners:
  - Inno.UI
apiSurface: runtime-script
contracts:
  - project.inno-ui#document-and-frame-contract
  - manual.scripting.use-script-api
---
# `UiRenderFrame`

This reference describes `UiRenderFrame` in `Inno.UI`. Read the [shared contract](../../projects/inno-ui.md#document-and-frame-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-86246475c02b4ee0) | Method |
| [`CreateRetirement`](#api-a787b0958b1c28ac) | Method |
| [`commands`](#api-840005cde36d1ba6) | Property |
| [`empty`](#api-0ee14b6f098bf09e) | Property |
| [`meshUpdates`](#api-7be5f41184b3fa3f) | Property |
| [`releasedMeshes`](#api-f6123ba2dd11e697) | Property |
| [`releasedTextures`](#api-c0ccf140324fa150) | Property |
| [`textureUpdates`](#api-d8e783cc8b72291f) | Property |

## Type declaration

<a id="api-f68e4df127e22581"></a>
<!-- api: T:InnoEngine.UI.UiRenderFrame 82eb11707dac2f4fe836ca697e0b4122851db0972b2f10fdbdc263b9db4d29a3 -->

```csharp
public sealed class InnoEngine.UI.UiRenderFrame
```

Contains incremental resource changes and ordered draw commands for one UI context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L161).

## `#ctor`

<a id="api-86246475c02b4ee0"></a>
<!-- api: M:InnoEngine.UI.UiRenderFrame.#ctor e6b948f22e6a6ee4e0d9f0faccee0321e1f92c62b090cf4f60fcbbf7aa037290 -->

```csharp
public InnoEngine.UI.UiRenderFrame.UiRenderFrame()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L161).

## `CreateRetirement`

<a id="api-a787b0958b1c28ac"></a>
<!-- api: M:InnoEngine.UI.UiRenderFrame.CreateRetirement(InnoEngine.UI.UiMeshHandle[],InnoEngine.UI.UiTextureHandle[]) c6dae25ebb322601d2e3dcd0489dcd05dc0ebd778a3a9c535c20a7f4d7cc1137 -->

```csharp
public static InnoEngine.UI.UiRenderFrame InnoEngine.UI.UiRenderFrame.CreateRetirement(InnoEngine.UI.UiMeshHandle[] meshes, InnoEngine.UI.UiTextureHandle[] textures)
```

Creates a command-free frame that deterministically retires plugin-owned resources.

**Parameter `meshes`:** Assigned mesh handles to retire.

**Parameter `textures`:** Assigned texture handles to retire.

**Returns:** An immutable retirement frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L200).

## `commands`

<a id="api-840005cde36d1ba6"></a>
<!-- api: P:InnoEngine.UI.UiRenderFrame.commands f0b32e38e26d68537da927fd6b8c500557361f26d278e6e16e08195bc511d45b -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.UI.UiDrawCommand> InnoEngine.UI.UiRenderFrame.commands { get; }
```

Gets ordered draws referencing published resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L231).

## `empty`

<a id="api-0ee14b6f098bf09e"></a>
<!-- api: P:InnoEngine.UI.UiRenderFrame.empty 289086d0c727a8ea1e6c3ecc3bb74305b21d91d5949d9230dfb3b4b64906744e -->

```csharp
public static InnoEngine.UI.UiRenderFrame InnoEngine.UI.UiRenderFrame.empty { get; }
```

Gets an empty resource-delta frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L186).

## `meshUpdates`

<a id="api-7be5f41184b3fa3f"></a>
<!-- api: P:InnoEngine.UI.UiRenderFrame.meshUpdates 466a0c945fed375c5423e8d3db56fc4a0be9a3cacdf543b815e9d97d017d74fd -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.UI.UiMeshUpdate> InnoEngine.UI.UiRenderFrame.meshUpdates { get; }
```

Gets created or replaced mesh generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L215).

## `releasedMeshes`

<a id="api-f6123ba2dd11e697"></a>
<!-- api: P:InnoEngine.UI.UiRenderFrame.releasedMeshes 815f382c88467ab6838f9ef7520669e0f8dc485b9c23ca4c2531810d288bb548 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.UI.UiMeshHandle> InnoEngine.UI.UiRenderFrame.releasedMeshes { get; }
```

Gets mesh generations that must be retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L219).

## `releasedTextures`

<a id="api-c0ccf140324fa150"></a>
<!-- api: P:InnoEngine.UI.UiRenderFrame.releasedTextures ad9844ef480bc3e003121040a86cabe8079698bccd52b7fa60e039b161d30ef6 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.UI.UiTextureHandle> InnoEngine.UI.UiRenderFrame.releasedTextures { get; }
```

Gets texture generations that must be retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L227).

## `textureUpdates`

<a id="api-d8e783cc8b72291f"></a>
<!-- api: P:InnoEngine.UI.UiRenderFrame.textureUpdates 6e4a5f7694b5c79575a5881e4dad250fbfe40e6567f019fb5a18be3fa605a8dd -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.UI.UiTextureUpdate> InnoEngine.UI.UiRenderFrame.textureUpdates { get; }
```

Gets created or replaced texture generations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/ui/Inno.UI/UiRendering.cs#L223).
