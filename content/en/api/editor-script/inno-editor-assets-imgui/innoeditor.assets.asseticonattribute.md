---
title: "AssetIconAttribute"
description: "Reference for AssetIconAttribute in Inno.Editor.Assets.ImGui."
uid: api.inno.editor.assets.imgui.editor-script.b22d81e88afd0d1f
kind: api
owners:
  - Inno.Editor.Assets.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-assets-imgui
  - manual.scripting.use-script-api
---
# `AssetIconAttribute`

This reference describes `AssetIconAttribute` in `Inno.Editor.Assets.ImGui`. Read the [shared contract](../../projects/inno-editor-assets-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-24ed7a09ed2d6048) | Method |
| [`#ctor`](#api-67b6c02c08ae8686) | Method |
| [`assetType`](#api-594105034f18adfe) | Property |
| [`extension`](#api-8443722f0de8bab7) | Property |
| [`icon`](#api-e3df240413cf87b4) | Property |
| [`priority`](#api-3cbcf65e13a2954f) | Property |
| [`useForChildren`](#api-22f94d779ac786d5) | Property |

## Type declaration

<a id="api-b22d81e88afd0d1f"></a>
<!-- api: T:InnoEditor.Assets.AssetIconAttribute e2623fe340876e25bfb290d1f044963e6f441a187c4e819891774483f53a67df -->

```csharp
public sealed class InnoEditor.Assets.AssetIconAttribute : System.Attribute
```

Declares the icon used by the Asset Browser for an imported asset type or source extension.

**Constraints:** Apply one or more declarations to a container type. The container has no runtime responsibility;
it only keeps related icon declarations together so the type catalog can discover them.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L14).

## `#ctor`

<a id="api-24ed7a09ed2d6048"></a>
<!-- api: M:InnoEditor.Assets.AssetIconAttribute.#ctor(System.String,System.String,System.Int32) ef8ea85c74815fc9c3abb5471db654ae13b2c30cc2a666a8798a2be3670b17bb -->

```csharp
public InnoEditor.Assets.AssetIconAttribute.AssetIconAttribute(string extension, string icon, int priority = 0)
```

Creates an icon declaration for files ending with a source extension.

**Parameter `extension`:** The simple or compound file extension. A leading period is optional and matching is case-insensitive.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `priority`:** The tie-breaking priority after extension specificity.

**Throws `System.ArgumentException`:** Thrown when `extension` is empty or contains a path separator, or when
`icon` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L65).

## `#ctor`

<a id="api-67b6c02c08ae8686"></a>
<!-- api: M:InnoEditor.Assets.AssetIconAttribute.#ctor(System.Type,System.String,System.Boolean,System.Int32) 0dc9e0e3352c27d6c8b44e1b210e82209b98743c57d96428b98aa3e53919b679 -->

```csharp
public InnoEditor.Assets.AssetIconAttribute.AssetIconAttribute(System.Type assetType, string icon, bool useForChildren = false, int priority = 0)
```

Creates an icon declaration using a glyph from the Editor icon catalog.

**Parameter `assetType`:** The imported asset type represented by the icon.

**Parameter `icon`:** The Editor icon glyph to render.

**Parameter `useForChildren`:** Whether the declaration may also represent derived asset types.

**Parameter `priority`:** The tie-breaking priority after exactness and inheritance distance.

**Throws `System.ArgumentNullException`:** Thrown when `assetType` is `null`.

**Throws `System.ArgumentException`:** Thrown when `icon` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L37).

## `assetType`

<a id="api-594105034f18adfe"></a>
<!-- api: P:InnoEditor.Assets.AssetIconAttribute.assetType 117e03c7b1291933c2889f419d1d5998aee78066460f901755c3c07d90f5c91f -->

```csharp
public System.Type? InnoEditor.Assets.AssetIconAttribute.assetType { get; }
```

Gets the imported asset type represented by this declaration, or `null` for
an extension declaration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L79).

## `extension`

<a id="api-8443722f0de8bab7"></a>
<!-- api: P:InnoEditor.Assets.AssetIconAttribute.extension 80bdbc4034cc9c7688dbfb315b5714bc2e47a9706330d3132dfd62114fd82e83 -->

```csharp
public string? InnoEditor.Assets.AssetIconAttribute.extension { get; }
```

Gets the normalized source extension represented by this declaration, or `null`
for a type declaration.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L84).

## `icon`

<a id="api-e3df240413cf87b4"></a>
<!-- api: P:InnoEditor.Assets.AssetIconAttribute.icon 193929c3cc8cba6c3ad983d1616fc01d9a49baa2eadb1f305a4b738ce2bcac1d -->

```csharp
public string InnoEditor.Assets.AssetIconAttribute.icon { get; }
```

Gets the Editor icon glyph to render.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L88).

## `priority`

<a id="api-3cbcf65e13a2954f"></a>
<!-- api: P:InnoEditor.Assets.AssetIconAttribute.priority 61e0caffce725c9db19f5e18baff399e3d26c6496c1fc3598786dc88eb05bd57 -->

```csharp
public int InnoEditor.Assets.AssetIconAttribute.priority { get; }
```

Gets the tie-breaking priority after target specificity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L97).

## `useForChildren`

<a id="api-22f94d779ac786d5"></a>
<!-- api: P:InnoEditor.Assets.AssetIconAttribute.useForChildren db5fff17041e782c738f1e0d27d713dae239754ec896986b7bb0b157bc722509 -->

```csharp
public bool InnoEditor.Assets.AssetIconAttribute.useForChildren { get; }
```

Gets whether a type declaration may also represent derived asset types. Extension declarations
always return `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Assets.ImGui/Icons/AssetIconAttribute.cs#L93).
