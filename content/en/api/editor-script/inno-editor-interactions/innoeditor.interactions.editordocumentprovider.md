---
title: "EditorDocumentProvider"
description: "Reference for EditorDocumentProvider in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.e502527c447782ba
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `EditorDocumentProvider`

This reference describes `EditorDocumentProvider` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-63cb544561410972) | Method |
| [`Apply`](#api-8c829958feb4d802) | Method |
| [`CanOpen`](#api-71ebd33d03c2e6d7) | Method |
| [`Close`](#api-29504990f545b31b) | Method |
| [`Open`](#api-528c653c321652e6) | Method |
| [`Revert`](#api-457b752da65ac1f7) | Method |
| [`Save`](#api-d0c0b343c0d270b0) | Method |
| [`id`](#api-c485832c90ec741b) | Property |

## Type declaration

<a id="api-e502527c447782ba"></a>
<!-- api: T:InnoEditor.Interactions.EditorDocumentProvider 46fadac1aedea7aa3b6d4a55f3ecf91fc3a1dd997ec65a8b4121a9d8b028e774 -->

```csharp
public abstract class InnoEditor.Interactions.EditorDocumentProvider
```

Implements one reloadable asset-document kind without owning presentation or source identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L8).

## `#ctor`

<a id="api-63cb544561410972"></a>
<!-- api: M:InnoEditor.Interactions.EditorDocumentProvider.#ctor 7a486af3c2d70c244f7286307adcba34ccf525a8449b8b20656eba7b72c63dbc -->

```csharp
protected InnoEditor.Interactions.EditorDocumentProvider.EditorDocumentProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L8).

## `Apply`

<a id="api-8c829958feb4d802"></a>
<!-- api: M:InnoEditor.Interactions.EditorDocumentProvider.Apply(InnoEditor.Interactions.EditorDocumentContext) ec61dc0ded63089b991b3554493a7008d09504219dd462529b8ea0630d59ee0b -->

```csharp
public virtual bool InnoEditor.Interactions.EditorDocumentProvider.Apply(InnoEditor.Interactions.EditorDocumentContext context)
```

Applies staged authoring changes and saves their asset source.

**Parameter `context`:** Stable document context owned by the host.

**Returns:** `true` when staged changes are applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L54).

## `CanOpen`

<a id="api-71ebd33d03c2e6d7"></a>
<!-- api: M:InnoEditor.Interactions.EditorDocumentProvider.CanOpen(System.String) 8116781e9714bc0df62143147e59da09023eeef8f230d763c74da09a48015802 -->

```csharp
public abstract bool InnoEditor.Interactions.EditorDocumentProvider.CanOpen(string assetPath)
```

Returns whether this provider can open the supplied project asset path.

**Parameter `assetPath`:** Normalized project asset path.

**Returns:** `true` when the path is supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L24).

## `Close`

<a id="api-29504990f545b31b"></a>
<!-- api: M:InnoEditor.Interactions.EditorDocumentProvider.Close(InnoEditor.Interactions.EditorDocumentContext) b199c46d998f8ad822ee93e9e6a3f3c13d340756572a723e2326dac0c2a88220 -->

```csharp
public virtual void InnoEditor.Interactions.EditorDocumentProvider.Close(InnoEditor.Interactions.EditorDocumentContext context)
```

Releases transient provider state after a document closes.

**Parameter `context`:** Stable document context owned by the host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L77).

## `Open`

<a id="api-528c653c321652e6"></a>
<!-- api: M:InnoEditor.Interactions.EditorDocumentProvider.Open(InnoEditor.Interactions.EditorDocumentContext) 3bdca860c62b79cd85af2ab6ea76e33cd07e1981d178170c5bcb2ad3088ba0e5 -->

```csharp
public virtual void InnoEditor.Interactions.EditorDocumentProvider.Open(InnoEditor.Interactions.EditorDocumentContext context)
```

Initializes transient provider state for an opened or restored document.

**Parameter `context`:** Stable document context owned by the host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L32).

## `Revert`

<a id="api-457b752da65ac1f7"></a>
<!-- api: M:InnoEditor.Interactions.EditorDocumentProvider.Revert(InnoEditor.Interactions.EditorDocumentContext) f4e9f97b7b928d81b8d3028622a65691c77c79fe3f71f300ce7de7ce31a85578 -->

```csharp
public virtual bool InnoEditor.Interactions.EditorDocumentProvider.Revert(InnoEditor.Interactions.EditorDocumentContext context)
```

Discards staged authoring changes and reloads the last saved source.

**Parameter `context`:** Stable document context owned by the host.

**Returns:** `true` when the source is restored.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L65).

## `Save`

<a id="api-d0c0b343c0d270b0"></a>
<!-- api: M:InnoEditor.Interactions.EditorDocumentProvider.Save(InnoEditor.Interactions.EditorDocumentContext) c4c0f951f234488025681c2b372b41b7e788fa7c8e624dcd199706748146c9d7 -->

```csharp
public abstract bool InnoEditor.Interactions.EditorDocumentProvider.Save(InnoEditor.Interactions.EditorDocumentContext context)
```

Saves all document changes to its asset source.

**Parameter `context`:** Stable document context owned by the host.

**Returns:** `true` when the source is saved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L43).

## `id`

<a id="api-c485832c90ec741b"></a>
<!-- api: P:InnoEditor.Interactions.EditorDocumentProvider.id a410d128e828e3873c6eea50ab680e2ab4ca8274e770ceb9d7d389cd263007d7 -->

```csharp
public abstract string InnoEditor.Interactions.EditorDocumentProvider.id { get; }
```

Gets the globally stable provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L13).
