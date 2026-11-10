---
title: "EditorDocumentContext"
description: "Reference for EditorDocumentContext in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.f264244e42e86b1a
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDocumentContext`

This reference describes `EditorDocumentContext` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`SetViewParameter`](#api-ebc620b4e8d95c6c) | Method |
| [`TryGetViewParameter`](#api-aafd928cf5606862) | Method |
| [`assetId`](#api-136ebace2b5bdf6b) | Property |
| [`assetPath`](#api-b8abd71107268fe5) | Property |
| [`documentId`](#api-5d7df649dc4f498c) | Property |
| [`isDirty`](#api-8f52cdb5155cfb0f) | Property |
| [`isProviderAvailable`](#api-40d8676cee1885f6) | Property |
| [`providerId`](#api-00114a26cc2a85dd) | Property |
| [`title`](#api-d23ec6177d28743c) | Property |
| [`viewParameters`](#api-422a5198c8fe913e) | Property |

## Type declaration

<a id="api-f264244e42e86b1a"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDocumentContext 45e594c5608307d885cdbf4fa79dbea89d33ca18748f5a708ac80a6db760cc9d -->

```csharp
public sealed class Inno.Editor.Interactions.EditorDocumentContext
```

Stores only stable, reload-safe document identity and provider-owned draft parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L10).

## `SetViewParameter`

<a id="api-ebc620b4e8d95c6c"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDocumentContext.SetViewParameter(System.String,System.String) 7e5405c77f2d117c890265e16ea63d5cbc3255af4ae4f561f5eeda459062d6d7 -->

```csharp
public void Inno.Editor.Interactions.EditorDocumentContext.SetViewParameter(string key, string value)
```

Adds or replaces one stable scalar or JSON-formatted view parameter.

**Parameter `key`:** Stable provider-local parameter name.

**Parameter `value`:** Persistent scalar or JSON-formatted value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L76).

## `TryGetViewParameter`

<a id="api-aafd928cf5606862"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDocumentContext.TryGetViewParameter(System.String,System.String@) 556ea3a9cb9026af4e19c2b04f6b8e7c870505fb755aa8f5b1a9a4d4e7160ed4 -->

```csharp
public bool Inno.Editor.Interactions.EditorDocumentContext.TryGetViewParameter(string key, out string value)
```

Tries to read one stable view parameter.

**Parameter `key`:** Stable provider-local parameter name.

**Parameter `value`:** Receives the stored value.

**Returns:** `true` when the parameter exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L97).

## `assetId`

<a id="api-136ebace2b5bdf6b"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDocumentContext.assetId 0cf7d8b6345cfeb4919622b4f4e2f5052664d48556da29816f06ea4372dbf00a -->

```csharp
public System.Guid Inno.Editor.Interactions.EditorDocumentContext.assetId { get; }
```

Gets the persistent asset identity, or an empty value before the source has one.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L35).

## `assetPath`

<a id="api-b8abd71107268fe5"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDocumentContext.assetPath 3a31d3cc59ba0ec25ef205a787eaac1e52a7fb419d696e0fd60913fdf870f912 -->

```csharp
public string Inno.Editor.Interactions.EditorDocumentContext.assetPath { get; internal set; }
```

Gets the normalized project asset path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L40).

## `documentId`

<a id="api-5d7df649dc4f498c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDocumentContext.documentId a002e9bf891ce4e7321259df58a4dd66e25fc47fb14e6e79b609fd322cca65f1 -->

```csharp
public System.Guid Inno.Editor.Interactions.EditorDocumentContext.documentId { get; }
```

Gets the stable identity of this open source document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L30).

## `isDirty`

<a id="api-8f52cdb5155cfb0f"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDocumentContext.isDirty 00eef0a0631773944e766e6e4f530c7c80dab8b879c0c58f35fbc80463697671 -->

```csharp
public bool Inno.Editor.Interactions.EditorDocumentContext.isDirty { get; internal set; }
```

Gets whether unsaved source or staged changes exist.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L55).

## `isProviderAvailable`

<a id="api-40d8676cee1885f6"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDocumentContext.isProviderAvailable 926721d3758661983211d9e261ee3dff562a53bd886d0a1ea95ae63a50cd074a -->

```csharp
public bool Inno.Editor.Interactions.EditorDocumentContext.isProviderAvailable { get; internal set; }
```

Gets whether a current-generation provider is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L60).

## `providerId`

<a id="api-00114a26cc2a85dd"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDocumentContext.providerId 750aac4663e5f69333ea94717887b15ff0ea7274f2ee2cc65934e99bcb0fe044 -->

```csharp
public string Inno.Editor.Interactions.EditorDocumentContext.providerId { get; }
```

Gets the stable provider identity used to recover across extension reload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L45).

## `title`

<a id="api-d23ec6177d28743c"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDocumentContext.title ac66e528e6c2d30a29323a28a3a4fae2ed75a000704c8a8605237afd044bd245 -->

```csharp
public string Inno.Editor.Interactions.EditorDocumentContext.title { get; set; }
```

Gets or sets the author-facing source title used by diagnostics and dedicated editors.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L50).

## `viewParameters`

<a id="api-422a5198c8fe913e"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDocumentContext.viewParameters 7e6615783556e4409e9f45aa0ecd26738e23617ec08e5fb5918ea3325b8b1495 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, string> Inno.Editor.Interactions.EditorDocumentContext.viewParameters { get; }
```

Gets an immutable snapshot of stable view parameters.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/abcf9e34e4d70fb1ce9e67e2c7aee0d34043e5fe/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentContext.cs#L65).
