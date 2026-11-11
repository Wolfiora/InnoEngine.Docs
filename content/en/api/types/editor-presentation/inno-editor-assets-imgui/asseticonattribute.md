---
title: "AssetIconAttribute"
description: "Reference for AssetIconAttribute in Inno.Editor.Assets.ImGui."
uid: api.inno.editor.assets.imgui.e3a99d4a24230396
kind: api
owners:
  - Inno.Editor.Assets.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-assets-imgui
---
# `AssetIconAttribute`

This reference describes `AssetIconAttribute` in `Inno.Editor.Assets.ImGui`. Read the [shared contract](../../../projects/inno-editor-assets-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8a39fdebdbc959c7) | Method |
| [`#ctor`](#api-48df7cec94bcb825) | Method |
| [`assetType`](#api-ee894bc1e05e7a66) | Property |
| [`extension`](#api-178d66c99ce90d46) | Property |
| [`icon`](#api-1ed250e0587e3ee0) | Property |
| [`priority`](#api-c7e80d97dd2af75b) | Property |
| [`useForChildren`](#api-19fe75c85e4ef46a) | Property |

## Type declaration

<a id="api-e3a99d4a24230396"></a>
<!-- api: T:Inno.Editor.Assets.ImGui.AssetIconAttribute b66a9127807a6e0d561ac325c01b415937bb7748b0825d4bc194a4e4990b8fde -->

```csharp
public sealed class Inno.Editor.Assets.ImGui.AssetIconAttribute : System.Attribute
```

Declares the icon used by the Asset Browser for an imported asset type or source extension.

**Constraints:** Apply one or more declarations to a container type. The container has no runtime responsibility;
it only keeps related icon declarations together so the type catalog can discover them.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L14).

## `#ctor`

<a id="api-8a39fdebdbc959c7"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetIconAttribute.#ctor(System.String,System.String,System.Int32) eec6dd6a5f1105610c55b4118c452e8ac49280688489586040bb3c66a566e021 -->

```csharp
public Inno.Editor.Assets.ImGui.AssetIconAttribute.AssetIconAttribute(string extension, string icon, int priority = 0)
```

Creates an icon declaration for files ending with a source extension.

**Parameter `extension`:** The simple or compound file extension. A leading period is optional and matching is case-insensitive.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `priority`:** The tie-breaking priority after extension specificity.

**Throws `System.ArgumentException`:** Thrown when `extension` is empty or contains a path separator, or when
`icon` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L65).

## `#ctor`

<a id="api-48df7cec94bcb825"></a>
<!-- api: M:Inno.Editor.Assets.ImGui.AssetIconAttribute.#ctor(System.Type,System.String,System.Boolean,System.Int32) cd9aa19285c639fbccbdd41ac0295d460d8eac1be0b04c7f44f49b40c03264fb -->

```csharp
public Inno.Editor.Assets.ImGui.AssetIconAttribute.AssetIconAttribute(System.Type assetType, string icon, bool useForChildren = false, int priority = 0)
```

Creates an icon declaration using a glyph from the Editor icon catalog.

**Parameter `assetType`:** The imported asset type represented by the icon.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `useForChildren`:** Whether the declaration may also represent derived asset types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Throws `System.ArgumentNullException`:** Thrown when `assetType` is `null`.

**Throws `System.ArgumentException`:** Thrown when `icon` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L37).

## `assetType`

<a id="api-ee894bc1e05e7a66"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetIconAttribute.assetType f817a57ab160dcc7cb20a4b058a87ec2dfb73d8642d9754bb4838e49ab6365cd -->

```csharp
public System.Type? Inno.Editor.Assets.ImGui.AssetIconAttribute.assetType { get; }
```

Gets the imported asset type represented by this declaration, or `null` for
an extension declaration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L79).

## `extension`

<a id="api-178d66c99ce90d46"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetIconAttribute.extension e737313d90f6f0c242820a18b96bf76d7b9e2ae3cfa2a762813aef387c15b9d3 -->

```csharp
public string? Inno.Editor.Assets.ImGui.AssetIconAttribute.extension { get; }
```

Gets the normalized source extension represented by this declaration, or `null`
for a type declaration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L84).

## `icon`

<a id="api-1ed250e0587e3ee0"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetIconAttribute.icon 7d5797a61ada6ab5a8428e56f4ebe2b6d11d2f286126138b1f4735f420332380 -->

```csharp
public string Inno.Editor.Assets.ImGui.AssetIconAttribute.icon { get; }
```

Gets the Editor icon glyph to render.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L88).

## `priority`

<a id="api-c7e80d97dd2af75b"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetIconAttribute.priority f689f55ac7437a19026858599ad0e115ac24a14188ddd27b76d0e021ceaa2f90 -->

```csharp
public int Inno.Editor.Assets.ImGui.AssetIconAttribute.priority { get; }
```

Gets the tie-breaking priority after target specificity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L97).

## `useForChildren`

<a id="api-19fe75c85e4ef46a"></a>
<!-- api: P:Inno.Editor.Assets.ImGui.AssetIconAttribute.useForChildren 54908b93f505f9e225988dbb23e3d00666c7709405c577c279e0c39c1a4d78a4 -->

```csharp
public bool Inno.Editor.Assets.ImGui.AssetIconAttribute.useForChildren { get; }
```

Gets whether a type declaration may also represent derived asset types. Extension declarations
always return `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L93).
