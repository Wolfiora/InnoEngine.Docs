---
title: "ShaderNodeDrawContext"
description: "Reference for ShaderNodeDrawContext in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.3013aadde2e2a483
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders-imgui
---
# `ShaderNodeDrawContext`

This reference describes `ShaderNodeDrawContext` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-93308a6b56376258) | Method |
| [```DrawProperty``1```](#api-dce592a85cc74214) | Method |
| [```Read``1```](#api-c2bfbaf30dfafae6) | Method |
| [```Write``1```](#api-9924d2545bdd779e) | Method |
| [`nodeId`](#api-4c47ee07567692ff) | Property |
| [`previews`](#api-f2ceb0396bce069c) | Property |

## Type declaration

<a id="api-3013aadde2e2a483"></a>
<!-- api: T:Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext 21c485770a7e099144c7ea76919391594c497fbfb5080d731c83f7262893d7fb -->

```csharp
public sealed class Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext
```

Exposes detached node values and one-gesture writes without exposing the live graph document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L137).

## `#ctor`

<a id="api-93308a6b56376258"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.#ctor(Inno.Core.Graphs.GraphNodeRecord,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Serialization.SerializationContext,System.Action{System.String,Inno.Core.Graphs.GraphSerializedValue,System.String},Inno.Editor.Rendering.IEditorPreviewService,Inno.Editor.Inspection.InspectionDrawContext,System.Boolean) 16b0f5f377b8ca97340dddc8e0ade2dfb267c16f7cbf77d733d2786cf382336e -->

```csharp
public Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.ShaderNodeDrawContext(Inno.Core.Graphs.GraphNodeRecord node, Inno.Core.Serialization.SerializationRegistry serialization, Inno.Core.Serialization.SerializationContext context, System.Action<string, Inno.Core.Graphs.GraphSerializedValue, string?> write, Inno.Editor.Rendering.IEditorPreviewService previews, Inno.Editor.Inspection.InspectionDrawContext inspection, bool readOnly)
```

Creates invocation-scoped access for a graph or Inspector host.

**Parameter `node`:** Detached node values for this invocation.

**Parameter `serialization`:** Current owner converter registry.

**Parameter `context`:** Complete owner reference context.

**Parameter `write`:** Host callback recording changes in the shared draft history.

**Parameter `previews`:** Current generation preview service.

**Parameter `inspection`:** Shared Inspector context, including native property controls and drag/drop.

**Parameter `readOnly`:** Whether the source belongs to an immutable installation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L169).

## ```DrawProperty``1```

<a id="api-dce592a85cc74214"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.DrawProperty``1(System.String,System.String,``0) b3180a8be6eef479a3cb437798791bb209d35c7753eed3a97743ecf9107fc96e -->

```csharp
public void Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.DrawProperty<T>(string key, string label, T defaultValue)
```

Draws a node property through the existing Inspector controls, including precise numbers and asset picking.

**Type parameter `T`:** Supported native property type.

**Parameter `key`:** Stable node property identity.

**Parameter `label`:** Artist-facing property label.

**Parameter `defaultValue`:** Value used only when no property is stored.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L255).

## ```Read``1```

<a id="api-c2bfbaf30dfafae6"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.Read``1(System.String,``0) 35989e68c33489fafe476b729fc49ce9ba1b8c7b4cc81cb4fffbba3aa8caa40c -->

```csharp
public T Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.Read<T>(string key, T defaultValue)
```

Reads a detached property value; missing values use the node's declared default.

**Type parameter `T`:** Native serializable property type.

**Parameter `key`:** Stable node-local property key.

**Parameter `defaultValue`:** Default used only when the property is absent.

**Returns:** The detached value. Malformed stored data is not silently replaced.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L211).

## ```Write``1```

<a id="api-9924d2545bdd779e"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.Write``1(System.String,``0,System.String) 1e3d2ad4adfbf21082afa326ac11cf9962cded917f10686052e2906368dcdb48 -->

```csharp
public void Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.Write<T>(string key, T value, string? mergeKey = null)
```

Records an unsaved draft edit through shared history; only an explicit document save applies it to the asset.

**Type parameter `T`:** Native serializable property type.

**Parameter `key`:** Stable node-local property key.

**Parameter `value`:** New detached value.

**Parameter `mergeKey`:** The current shared gesture key, or null for an independent edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L230).

## `nodeId`

<a id="api-4c47ee07567692ff"></a>
<!-- api: P:Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.nodeId b645d1eade6b38d969da424a07d47e585f549852b7af9abbcb32cbfbcb3bb525 -->

```csharp
public Inno.Core.Graphs.GraphNodeId Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.nodeId { get; }
```

Gets the stable node identity for Editor widget IDs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L194).

## `previews`

<a id="api-f2ceb0396bce069c"></a>
<!-- api: P:Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.previews a04c3f8c6679f1f13e088eff7ee60df0062babf5811a4c5224939df1180123cb -->

```csharp
public Inno.Editor.Rendering.IEditorPreviewService Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext.previews { get; }
```

Gets the shared generation-scoped preview service for optional inline texture previews; valid only during this draw.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L190).
