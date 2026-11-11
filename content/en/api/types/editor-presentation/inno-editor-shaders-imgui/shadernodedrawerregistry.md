---
title: "ShaderNodeDrawerRegistry"
description: "Reference for ShaderNodeDrawerRegistry in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.19b9535884ca19b8
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders-imgui
---
# `ShaderNodeDrawerRegistry`

This reference describes `ShaderNodeDrawerRegistry` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `System.IDisposable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3aa47338b3042880) | Method |
| [`Dispose`](#api-8dc104f166f013db) | Method |
| [`GetDisplayName`](#api-bd3e10af64241f97) | Method |
| [`TryDraw`](#api-28342d5c6db599fa) | Method |
| [`TryGetPresentation`](#api-2787739e2e32671f) | Method |

## Type declaration

<a id="api-19b9535884ca19b8"></a>
<!-- api: T:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry 90faf0b55d0dde6f35b413376a8a24b0d7adfa589ab0702d540c8dfce13a368e -->

```csharp
public sealed class Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry : System.IDisposable
```

Shares generation-scoped node presentation between graph and Inspector hosts.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawerRegistry.cs#L12).

## `#ctor`

<a id="api-3aa47338b3042880"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.#ctor(Inno.Extensibility.Types.TypeCatalog) e9c0d044fdb2bc78cce8c3c97c30b703f09cf4eb3f157928fbe9ff43ee0fdc3d -->

```csharp
public Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.ShaderNodeDrawerRegistry(Inno.Extensibility.Types.TypeCatalog types)
```

Creates a presentation registry owned by the current editor feature lifetime.

**Parameter `types`:** Shared type catalog, which must outlive this registry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawerRegistry.cs#L22).

## `Dispose`

<a id="api-8dc104f166f013db"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.Dispose ec1719e15c5fba49435f252dd7d440f79d19dfb09592ed26d9518cd18b2a2515 -->

```csharp
public void Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.Dispose()
```

Retires the current presentation providers through the shared lifecycle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawerRegistry.cs#L89).

## `GetDisplayName`

<a id="api-bd3e10af64241f97"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.GetDisplayName(System.String) 7eb28c8c9843480a574a9e50e8e3d25ae438f3148b367df46acd6e4d4a28bb67 -->

```csharp
public string? Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.GetDisplayName(string definitionId)
```

Resolves an optional artist-facing name without executing a drawer or retaining its generation.

**Parameter `definitionId`:** Stable compiler-independent node identity.

**Returns:** The contributed name, or null when the host should use its generic presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawerRegistry.cs#L60).

## `TryDraw`

<a id="api-28342d5c6db599fa"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.TryDraw(System.String,Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext) 3665111b347c50504c997f48c6a3489628400b718edf34120991b816e52ed659 -->

```csharp
public bool Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.TryDraw(string definitionId, Inno.Editor.Shaders.ImGui.ShaderNodeDrawContext context)
```

Invokes optional node controls within one generation lease.

**Parameter `definitionId`:** Stable node definition identity.

**Parameter `context`:** Invocation-scoped host values, history callback and previews.

**Returns:** True when a registered drawer rendered the controls; false leaves presentation to the host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawerRegistry.cs#L40).

## `TryGetPresentation`

<a id="api-2787739e2e32671f"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.TryGetPresentation(System.String,Inno.Editor.Shaders.ImGui.ShaderNodePresentation@) 9601efa8bc5ce99674dc8df57a4842b85a13e2600f71252ef16af5b53635445b -->

```csharp
public bool Inno.Editor.Shaders.ImGui.ShaderNodeDrawerRegistry.TryGetPresentation(string definitionId, out Inno.Editor.Shaders.ImGui.ShaderNodePresentation presentation)
```

Gets optional creation-menu presentation without executing the drawer.

**Parameter `definitionId`:** Stable compiler-independent node identity.

**Parameter `presentation`:** Receives immutable creation-menu presentation when registered.

**Returns:** True when the current generation contributes presentation for the node; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawerRegistry.cs#L78).
