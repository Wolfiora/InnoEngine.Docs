---
title: "ShaderNodeDrawerAttribute"
description: "Reference for ShaderNodeDrawerAttribute in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.4d4cd0bb6ce3b647
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-shaders-imgui
---
# `ShaderNodeDrawerAttribute`

This reference describes `ShaderNodeDrawerAttribute` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-9019bcabcd144198) | Method |
| [`createOrder`](#api-3ea0cb301f79b60c) | Property |
| [`createPath`](#api-48cf0a96b4a835ce) | Property |
| [`definitionId`](#api-962922d8d53dff2c) | Property |
| [`displayName`](#api-73f6b16c8eaa2e58) | Property |
| [`separatorBefore`](#api-f920644726355605) | Property |

## Type declaration

<a id="api-4d4cd0bb6ce3b647"></a>
<!-- api: T:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute df9eb3c52c06633d900ef67ecb3e8a0d81ae2eb8b5294d302be520f16bf4f677 -->

```csharp
public sealed class Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute : System.Attribute
```

Registers Editor-only node controls independently from a node's shader compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L13).

## `#ctor`

<a id="api-9019bcabcd144198"></a>
<!-- api: M:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.#ctor(System.String,System.String,System.String,System.Int32,System.Boolean) b3af8dec12986190ae81da09f92c850c4d5886dcce0282cb150e4c4a0c3969a7 -->

```csharp
public Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.ShaderNodeDrawerAttribute(string definitionId, string displayName = "", string createPath = "", int createOrder = 0, bool separatorBefore = false)
```

Associates the drawer with one stable node definition.

**Parameter `definitionId`:** The compiler-independent graph node identity.

**Parameter `displayName`:** Optional artist-facing name used in node headers and creation menus.

**Parameter `createPath`:** Optional slash-delimited path below Create. Empty uses the host's built-in classification.

**Parameter `createOrder`:** Stable ordering value among sibling creation groups and nodes.

**Parameter `separatorBefore`:** Whether the contributed creation group is preceded by a separator at its own level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L33).

## `createOrder`

<a id="api-3ea0cb301f79b60c"></a>
<!-- api: P:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.createOrder 60fb29bf6d1169a97394b9ac5e15dfb73f9d391b21b6de1356b334bed555f6be -->

```csharp
public int Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.createOrder { get; }
```

Gets the creation-menu order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L63).

## `createPath`

<a id="api-48cf0a96b4a835ce"></a>
<!-- api: P:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.createPath 901fe97fcac94ff8c96529b4a01e298ae67d638712057f7d24c6003bcc537c6a -->

```csharp
public string Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.createPath { get; }
```

Gets the optional creation-menu path below Create.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L59).

## `definitionId`

<a id="api-962922d8d53dff2c"></a>
<!-- api: P:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.definitionId 21d19659ee618cd6401d4f4c7d4ecd7efd7a618b822f1e7cfe11efe021c94c6b -->

```csharp
public string Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.definitionId { get; }
```

Gets the stable node identity handled by this drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L51).

## `displayName`

<a id="api-73f6b16c8eaa2e58"></a>
<!-- api: P:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.displayName 03612fc8fd764597a193385ac8bf0131781a49494d470c1baf601719c8a2b4a8 -->

```csharp
public string Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.displayName { get; }
```

Gets the optional presentation-only name; it does not participate in Shader compilation or identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L55).

## `separatorBefore`

<a id="api-f920644726355605"></a>
<!-- api: P:Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.separatorBefore aeb126343db6848ec1bc2e41aab4c27306c3f67d2d2afd6971bfa742139115ec -->

```csharp
public bool Inno.Editor.Shaders.ImGui.ShaderNodeDrawerAttribute.separatorBefore { get; }
```

Gets whether the contributed creation group starts a new visual section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L67).
