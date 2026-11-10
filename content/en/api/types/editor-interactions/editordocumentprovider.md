---
title: "EditorDocumentProvider"
description: "Reference for EditorDocumentProvider in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.1a91669968465750
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `EditorDocumentProvider`

This reference describes `EditorDocumentProvider` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-42a84cefe4518488) | Method |
| [`Apply`](#api-091115a4c409fc7a) | Method |
| [`CanOpen`](#api-2838443c67d360e5) | Method |
| [`Close`](#api-7def4bf03adf9d79) | Method |
| [`Open`](#api-651669fe0a7a776b) | Method |
| [`Revert`](#api-026223b2b179a61d) | Method |
| [`Save`](#api-c6d8404aee373c33) | Method |
| [`id`](#api-0aec504589973262) | Property |

## Type declaration

<a id="api-1a91669968465750"></a>
<!-- api: T:Inno.Editor.Interactions.EditorDocumentProvider bd6a7774ac8c12d92d1a07a77c4d9f830d741e3df9c6f2247d32389b5c8ebd55 -->

```csharp
public abstract class Inno.Editor.Interactions.EditorDocumentProvider
```

Implements one reloadable asset-document kind without owning presentation or source identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L8).

## `#ctor`

<a id="api-42a84cefe4518488"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDocumentProvider.#ctor 351ba9f014b0dc1c189f074f6796e5759941daa945b33e29cd9f9cf0f6103a39 -->

```csharp
protected Inno.Editor.Interactions.EditorDocumentProvider.EditorDocumentProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L8).

## `Apply`

<a id="api-091115a4c409fc7a"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDocumentProvider.Apply(Inno.Editor.Interactions.EditorDocumentContext) b81283298035d2a97ec29785e759fe7a24ecb3089f81700e03fa2735b489591b -->

```csharp
public virtual bool Inno.Editor.Interactions.EditorDocumentProvider.Apply(Inno.Editor.Interactions.EditorDocumentContext context)
```

Applies staged authoring changes and saves their asset source.

**Parameter `context`:** Stable document context owned by the host.

**Returns:** `true` when staged changes are applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L54).

## `CanOpen`

<a id="api-2838443c67d360e5"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDocumentProvider.CanOpen(System.String) 5424711fbc264a2589b86cfcb349524bea5f52276caee55512bea4d5cb0d1103 -->

```csharp
public abstract bool Inno.Editor.Interactions.EditorDocumentProvider.CanOpen(string assetPath)
```

Returns whether this provider can open the supplied project asset path.

**Parameter `assetPath`:** Normalized project asset path.

**Returns:** `true` when the path is supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L24).

## `Close`

<a id="api-7def4bf03adf9d79"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDocumentProvider.Close(Inno.Editor.Interactions.EditorDocumentContext) 0b13326910054d53a248bdfb5df9dc9bd454f7915b2e7390db00fc9df62d8b76 -->

```csharp
public virtual void Inno.Editor.Interactions.EditorDocumentProvider.Close(Inno.Editor.Interactions.EditorDocumentContext context)
```

Releases transient provider state after a document closes.

**Parameter `context`:** Stable document context owned by the host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L77).

## `Open`

<a id="api-651669fe0a7a776b"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDocumentProvider.Open(Inno.Editor.Interactions.EditorDocumentContext) 6f850b34fb54313e11f735686b58e3c936bc9472cc5ff953a9ca12b356694802 -->

```csharp
public virtual void Inno.Editor.Interactions.EditorDocumentProvider.Open(Inno.Editor.Interactions.EditorDocumentContext context)
```

Initializes transient provider state for an opened or restored document.

**Parameter `context`:** Stable document context owned by the host.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L32).

## `Revert`

<a id="api-026223b2b179a61d"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDocumentProvider.Revert(Inno.Editor.Interactions.EditorDocumentContext) 21be3827a25e230d17b772f81a4c4c8af13a4aa81d09c45bd37201d4ba082208 -->

```csharp
public virtual bool Inno.Editor.Interactions.EditorDocumentProvider.Revert(Inno.Editor.Interactions.EditorDocumentContext context)
```

Discards staged authoring changes and reloads the last saved source.

**Parameter `context`:** Stable document context owned by the host.

**Returns:** `true` when the source is restored.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L65).

## `Save`

<a id="api-c6d8404aee373c33"></a>
<!-- api: M:Inno.Editor.Interactions.EditorDocumentProvider.Save(Inno.Editor.Interactions.EditorDocumentContext) 2aecfb9a1eb1a5e311baa26adce5d50b0c2974a1886f402d1d45ab4ab8a1a523 -->

```csharp
public abstract bool Inno.Editor.Interactions.EditorDocumentProvider.Save(Inno.Editor.Interactions.EditorDocumentContext context)
```

Saves all document changes to its asset source.

**Parameter `context`:** Stable document context owned by the host.

**Returns:** `true` when the source is saved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L43).

## `id`

<a id="api-0aec504589973262"></a>
<!-- api: P:Inno.Editor.Interactions.EditorDocumentProvider.id 024e800c9a22daa6ca46de06513e6c581b2d6c08f80ca7fb4c740e8f685c8c39 -->

```csharp
public abstract string Inno.Editor.Interactions.EditorDocumentProvider.id { get; }
```

Gets the globally stable provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/EditorDocumentProvider.cs#L13).
