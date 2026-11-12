---
title: "ShaderNodeDrawerAttribute"
description: "Reference for ShaderNodeDrawerAttribute in Inno.Editor.Shaders.ImGui."
uid: api.inno.editor.shaders.imgui.editor-script.11987ce7f3fd745b
kind: api
owners:
  - Inno.Editor.Shaders.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-shaders-imgui
  - manual.scripting.use-script-api
---
# `ShaderNodeDrawerAttribute`

This reference describes `ShaderNodeDrawerAttribute` in `Inno.Editor.Shaders.ImGui`. Read the [shared contract](../../projects/inno-editor-shaders-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3c9c59fd37ad3bf8) | Method |
| [`createOrder`](#api-01c9dc8e52f430f1) | Property |
| [`createPath`](#api-421d4ed87948f52e) | Property |
| [`definitionId`](#api-6f7ad1b3b3bbcc1c) | Property |
| [`displayName`](#api-a2f5f8f9d489eb41) | Property |
| [`separatorBefore`](#api-5c350b7e01c97bf4) | Property |

## Type declaration

<a id="api-11987ce7f3fd745b"></a>
<!-- api: T:InnoEditor.Shaders.ShaderNodeDrawerAttribute c997e1c5d1c6768ee3161ba07b99a942bb75cf4638995ddce60e302fb8289eb4 -->

```csharp
public sealed class InnoEditor.Shaders.ShaderNodeDrawerAttribute : System.Attribute
```

Registers Editor-only node controls independently from a node's shader compiler.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L13).

## `#ctor`

<a id="api-3c9c59fd37ad3bf8"></a>
<!-- api: M:InnoEditor.Shaders.ShaderNodeDrawerAttribute.#ctor(System.String,System.String,System.String,System.Int32,System.Boolean) 2bdd17d06ed15a73c2a3b410ca08f622c50cb0b47c175e80397a3c5fcf791b6d -->

```csharp
public InnoEditor.Shaders.ShaderNodeDrawerAttribute.ShaderNodeDrawerAttribute(string definitionId, string displayName = "", string createPath = "", int createOrder = 0, bool separatorBefore = false)
```

Associates the drawer with one stable node definition.

**Parameter `definitionId`:** The compiler-independent graph node identity.

**Parameter `displayName`:** Optional artist-facing name used in node headers and creation menus.

**Parameter `createPath`:** Optional slash-delimited path below Create. Empty uses the host's built-in classification.

**Parameter `createOrder`:** Stable ordering value among sibling creation groups and nodes.

**Parameter `separatorBefore`:** Whether the contributed creation group is preceded by a separator at its own level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L33).

## `createOrder`

<a id="api-01c9dc8e52f430f1"></a>
<!-- api: P:InnoEditor.Shaders.ShaderNodeDrawerAttribute.createOrder ab158098596243318dfd37d8d62116148b0f103eaf57cf02110ca6e3a6ab569d -->

```csharp
public int InnoEditor.Shaders.ShaderNodeDrawerAttribute.createOrder { get; }
```

Gets the creation-menu order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L63).

## `createPath`

<a id="api-421d4ed87948f52e"></a>
<!-- api: P:InnoEditor.Shaders.ShaderNodeDrawerAttribute.createPath 2aee7e3dd0c6aba1b60f6142eeec2ab6038c4ef5688564976365f9cbc06c4c75 -->

```csharp
public string InnoEditor.Shaders.ShaderNodeDrawerAttribute.createPath { get; }
```

Gets the optional creation-menu path below Create.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L59).

## `definitionId`

<a id="api-6f7ad1b3b3bbcc1c"></a>
<!-- api: P:InnoEditor.Shaders.ShaderNodeDrawerAttribute.definitionId 2a1da0910db068eb220029332dca3bf9141e006bed8c0e37d49111c75d7d698d -->

```csharp
public string InnoEditor.Shaders.ShaderNodeDrawerAttribute.definitionId { get; }
```

Gets the stable node identity handled by this drawer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L51).

## `displayName`

<a id="api-a2f5f8f9d489eb41"></a>
<!-- api: P:InnoEditor.Shaders.ShaderNodeDrawerAttribute.displayName c96f4f3ca14cc8cce4a332028795ce9f7e075c7d812a7d18d9ecf1027e8170a9 -->

```csharp
public string InnoEditor.Shaders.ShaderNodeDrawerAttribute.displayName { get; }
```

Gets the optional presentation-only name; it does not participate in Shader compilation or identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L55).

## `separatorBefore`

<a id="api-5c350b7e01c97bf4"></a>
<!-- api: P:InnoEditor.Shaders.ShaderNodeDrawerAttribute.separatorBefore 9ead0efc7d42214bbe484f14729889ec2c5539422fc41b1b5295ba274e06bab3 -->

```csharp
public bool InnoEditor.Shaders.ShaderNodeDrawerAttribute.separatorBefore { get; }
```

Gets whether the contributed creation group starts a new visual section.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Shaders.ImGui/Nodes/ShaderNodeDrawer.cs#L67).
