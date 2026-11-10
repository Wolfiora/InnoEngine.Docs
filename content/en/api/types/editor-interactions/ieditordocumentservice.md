---
title: "IEditorDocumentService"
description: "Reference for IEditorDocumentService in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.10540acc5ca8eae4
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: source-clr
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
---
# `IEditorDocumentService`

This reference describes `IEditorDocumentService` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Apply`](#api-a193768558cd7fcd) | Method |
| [`Close`](#api-f43f8397949c1c11) | Method |
| [`Open`](#api-1fef2fabdef30b30) | Method |
| [`RegisterProvider`](#api-6f474cebbbe55468) | Method |
| [`Revert`](#api-721ee0e280612605) | Method |
| [`Save`](#api-3c6cec3606f30e5c) | Method |
| [`SaveAll`](#api-807e01b455a9e4cd) | Method |
| [`SetDirty`](#api-dd777f902129d6c0) | Method |
| [`UpdateAssetPath`](#api-b908ec33c7f3a3e5) | Method |
| [`documents`](#api-38ead3e14d663293) | Property |

## Type declaration

<a id="api-10540acc5ca8eae4"></a>
<!-- api: T:Inno.Editor.Interactions.IEditorDocumentService 4494899f5b6f657c405bdc3f89b028ad00bfc2022fd99831e3ebe73b842f4985 -->

```csharp
public interface Inno.Editor.Interactions.IEditorDocumentService
```

Owns single-instance editor documents independently from reloadable providers and presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L28).

## `Apply`

<a id="api-a193768558cd7fcd"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorDocumentService.Apply(System.Guid) 92a2c319d2225820c272f66f2caf4fb6105c0c3d6626602abfdc13f235ce5d7b -->

```csharp
bool Inno.Editor.Interactions.IEditorDocumentService.Apply(System.Guid documentId)
```

Applies staged changes through the current provider.

**Parameter `documentId`:** Stable tab identity.

**Returns:** `true` when changes are applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L122).

## `Close`

<a id="api-f43f8397949c1c11"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorDocumentService.Close(System.Guid,Inno.Editor.Interactions.EditorDocumentCloseMode) 463787e0e122608a018d151930f7d9e1627c0ab1cd3fa3b48953b4455e1447d1 -->

```csharp
bool Inno.Editor.Interactions.IEditorDocumentService.Close(System.Guid documentId, Inno.Editor.Interactions.EditorDocumentCloseMode mode)
```

Closes one document using an explicit dirty-document decision.

**Parameter `documentId`:** Stable tab identity.

**Parameter `mode`:** Explicit close behavior.

**Returns:** `true` when the document closed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L147).

## `Open`

<a id="api-1fef2fabdef30b30"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorDocumentService.Open(System.String,System.Guid) 35b5d1482877975ee3375b641c902b0828b50a6ea90fd1540c175d9d42432339 -->

```csharp
Inno.Editor.Interactions.EditorDocumentContext Inno.Editor.Interactions.IEditorDocumentService.Open(string assetPath, System.Guid assetId = default(System.Guid))
```

Opens a document or returns its existing single instance.

**Parameter `assetPath`:** Project asset path.

**Parameter `assetId`:** Persistent asset identity when available.

**Returns:** The stable document context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L58).

## `RegisterProvider`

<a id="api-6f474cebbbe55468"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorDocumentService.RegisterProvider(Inno.Editor.Interactions.EditorDocumentProvider) 3e604f6658b52b0c6190a4baa75cb3ee7b35de68eb0c67e8c57b0e67f09715e9 -->

```csharp
System.IDisposable Inno.Editor.Interactions.IEditorDocumentService.RegisterProvider(Inno.Editor.Interactions.EditorDocumentProvider provider)
```

Registers one current-generation document provider.

**Parameter `provider`:** Provider instance to register.

**Returns:** A lease that detaches only this provider instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L44).

## `Revert`

<a id="api-721ee0e280612605"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorDocumentService.Revert(System.Guid) 9cc3254ee5f07121e8c3487f9cd27869904d58da8e187937a86139162a67ce70 -->

```csharp
bool Inno.Editor.Interactions.IEditorDocumentService.Revert(System.Guid documentId)
```

Reverts staged changes through the current provider.

**Parameter `documentId`:** Stable tab identity.

**Returns:** `true` when changes are reverted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L133).

## `Save`

<a id="api-3c6cec3606f30e5c"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorDocumentService.Save(System.Guid) 122bd4c3dacf822cf244fba396ec95b5b09e3736b944ed59716cc2ff1c0cb8bf -->

```csharp
bool Inno.Editor.Interactions.IEditorDocumentService.Save(System.Guid documentId)
```

Saves one open document through its current provider.

**Parameter `documentId`:** Stable tab identity.

**Returns:** `true` when the document is saved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L103).

## `SaveAll`

<a id="api-807e01b455a9e4cd"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorDocumentService.SaveAll 730788cb543a573c4aed025b2f563879af4734d5bc8902ab8d24e4b839aca162 -->

```csharp
bool Inno.Editor.Interactions.IEditorDocumentService.SaveAll()
```

Saves every dirty open document.

**Returns:** `true` when every dirty document is saved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L111).

## `SetDirty`

<a id="api-dd777f902129d6c0"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorDocumentService.SetDirty(System.Guid,System.Boolean) 901638aa95034f50d207a2ed2397fc05864a9ef5c783e714ea42cfa1b7aaa164 -->

```csharp
void Inno.Editor.Interactions.IEditorDocumentService.SetDirty(System.Guid documentId, bool isDirty = true)
```

Updates a document's unsaved state without saving, discarding or changing its History.

**Parameter `documentId`:** Stable tab identity.

**Parameter `isDirty`:** Whether the provider's current draft differs from its saved baseline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L89).

## `UpdateAssetPath`

<a id="api-b908ec33c7f3a3e5"></a>
<!-- api: M:Inno.Editor.Interactions.IEditorDocumentService.UpdateAssetPath(System.Guid,System.String) 0d9f3fa898ba9f6bff917e8248a6d6a5cba18ba6283e8a36d2938ba82e445200 -->

```csharp
bool Inno.Editor.Interactions.IEditorDocumentService.UpdateAssetPath(System.Guid documentId, string assetPath)
```

Updates an open document's source location after an identity-preserving asset move, without changing history or focus.

**Parameter `documentId`:** Existing document identity.

**Parameter `assetPath`:** Current authoritative source location for the same persistent asset.

**Returns:** Whether the document exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L75).

## `documents`

<a id="api-38ead3e14d663293"></a>
<!-- api: P:Inno.Editor.Interactions.IEditorDocumentService.documents 9476ead8efb56a27ea329ad3e6fdf8a81031681bd6ef4400b981e6c293c9764f -->

```csharp
System.Collections.Generic.IReadOnlyList<Inno.Editor.Interactions.EditorDocumentContext> Inno.Editor.Interactions.IEditorDocumentService.documents { get; }
```

Gets the currently owned source documents.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/417557eb7687c7b488b67e0131430e9675feb496/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L33).
