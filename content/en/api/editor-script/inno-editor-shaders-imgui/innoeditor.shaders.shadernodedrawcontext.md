---
title: "ShaderNodeDrawContext"
description: "Reference for ShaderNodeDrawContext in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.editor-script.eb2638d97707ccc7
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-shaders-imgui
  - manual.scripting.use-script-api
---
# `ShaderNodeDrawContext`

This reference describes `ShaderNodeDrawContext` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7330c30123cc763e) | Method |
| [```DrawProperty``1```](#api-e1b6cb8a0fa373c9) | Method |
| [```Read``1```](#api-6bdacd4904c7dcd4) | Method |
| [```Write``1```](#api-192a8ba8bbf96be7) | Method |
| [`nodeId`](#api-743095ee433247fc) | Property |
| [`previews`](#api-7e0d199d7a390661) | Property |

## Type declaration

<a id="api-eb2638d97707ccc7"></a>
<!-- api: T:InnoEditor.Shaders.ShaderNodeDrawContext 9de7e901f964a361672347a5c2d216499d73c08bd0c52ca2643473982c868f42 -->

```csharp
public sealed class InnoEditor.Shaders.ShaderNodeDrawContext
```

Exposes detached node values and one-gesture writes without exposing the live graph document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L137).

## `#ctor`

<a id="api-7330c30123cc763e"></a>
<!-- api: M:InnoEditor.Shaders.ShaderNodeDrawContext.#ctor(InnoEngine.Graphs.GraphNodeRecord,InnoEngine.Serialization.SerializationRegistry,InnoEngine.Serialization.SerializationContext,System.Action{System.String,InnoEngine.Graphs.GraphSerializedValue,System.String},InnoEditor.Rendering.IEditorPreviewService,InnoEditor.Inspection.InspectionDrawContext,System.Boolean) df996e0b8e2e264557679ba21cc7c38f8ea845cfac40df3653f6d4704ebd659c -->

```csharp
public InnoEditor.Shaders.ShaderNodeDrawContext.ShaderNodeDrawContext(InnoEngine.Graphs.GraphNodeRecord node, InnoEngine.Serialization.SerializationRegistry serialization, InnoEngine.Serialization.SerializationContext context, System.Action<string, InnoEngine.Graphs.GraphSerializedValue, string?> write, InnoEditor.Rendering.IEditorPreviewService previews, InnoEditor.Inspection.InspectionDrawContext inspection, bool readOnly)
```

Creates invocation-scoped access for a graph or Inspector host.

**Parameter `node`:** Detached node values for this invocation.

**Parameter `serialization`:** Current owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Parameter `write`:** Host callback recording changes in the shared draft history.

**Parameter `previews`:** Current generation preview service.

**Parameter `inspection`:** Shared Inspector context, including native property controls and drag/drop.

**Parameter `readOnly`:** Whether the source belongs to an immutable installation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L169).

## ```DrawProperty``1```

<a id="api-e1b6cb8a0fa373c9"></a>
<!-- api: M:InnoEditor.Shaders.ShaderNodeDrawContext.DrawProperty``1(System.String,System.String,``0) 4727825a18196d1d3348fd191493cda79ee278fb9fb790a8711862641984fafc -->

```csharp
public void InnoEditor.Shaders.ShaderNodeDrawContext.DrawProperty<T>(string key, string label, T defaultValue)
```

Draws a node property through the existing Inspector controls, including precise numbers and asset picking.

**Type parameter `T`:** Supported native property type.

**Parameter `key`:** Stable node property identity.

**Parameter `label`:** Artist-facing property label.

**Parameter `defaultValue`:** Value used only when no property is stored.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L255).

## ```Read``1```

<a id="api-6bdacd4904c7dcd4"></a>
<!-- api: M:InnoEditor.Shaders.ShaderNodeDrawContext.Read``1(System.String,``0) 8f49eaa5833b4db47d6532a4ff2dcb20f9acc15ac42eeb91ad7885597ab1dcb6 -->

```csharp
public T InnoEditor.Shaders.ShaderNodeDrawContext.Read<T>(string key, T defaultValue)
```

Reads a detached property value; missing values use the node's declared default.

**Type parameter `T`:** Native serializable property type.

**Parameter `key`:** Stable node-local property key.

**Parameter `defaultValue`:** Default used only when the property is absent.

**Returns:** The detached value. Malformed stored data is not silently replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L211).

## ```Write``1```

<a id="api-192a8ba8bbf96be7"></a>
<!-- api: M:InnoEditor.Shaders.ShaderNodeDrawContext.Write``1(System.String,``0,System.String) 715248a9a94592381d7bb4f5c3a7da977c751336293797e701b690a3772af87d -->

```csharp
public void InnoEditor.Shaders.ShaderNodeDrawContext.Write<T>(string key, T value, string? mergeKey = null)
```

Records an unsaved draft edit through shared history; only an explicit document save applies it to the asset.

**Type parameter `T`:** Native serializable property type.

**Parameter `key`:** Stable node-local property key.

**Parameter `value`:** New detached value.

**Parameter `mergeKey`:** The current shared gesture key, or null for an independent edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L230).

## `nodeId`

<a id="api-743095ee433247fc"></a>
<!-- api: P:InnoEditor.Shaders.ShaderNodeDrawContext.nodeId 84a2e8e6a27bc6a483655defabec491a9a1bfde9310d05d24f6b59002cc4b312 -->

```csharp
public InnoEngine.Graphs.GraphNodeId InnoEditor.Shaders.ShaderNodeDrawContext.nodeId { get; }
```

Gets the stable node identity for Editor widget IDs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L194).

## `previews`

<a id="api-7e0d199d7a390661"></a>
<!-- api: P:InnoEditor.Shaders.ShaderNodeDrawContext.previews ea3b0db902baf9333a8485c731cc472aea4bc14c7da2cd093d8ad35cbc1308b1 -->

```csharp
public InnoEditor.Rendering.IEditorPreviewService InnoEditor.Shaders.ShaderNodeDrawContext.previews { get; }
```

Gets the shared generation-scoped preview service for optional inline texture previews; valid only during this draw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L190).
