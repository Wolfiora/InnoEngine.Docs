---
title: "IEditorDocumentService"
description: "Reference for IEditorDocumentService in Inno.Editor.Interactions."
uid: api.inno.editor.interactions.editor-script.a21b729d8f4ec270
kind: api
owners:
  - Inno.Editor.Interactions
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-interactions#generation-and-lifetime-contracts
  - manual.scripting.use-script-api
---
# `IEditorDocumentService`

This reference describes `IEditorDocumentService` in `Inno.Editor.Interactions`. Read the [shared contract](../../projects/inno-editor-interactions.md#generation-and-lifetime-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## Members

| Member | Kind |
| --- | --- |
| [`Apply`](#api-cac2fbf10c12569b) | Method |
| [`Close`](#api-9f8710ef8534f0f8) | Method |
| [`Open`](#api-d922221b35b6b35e) | Method |
| [`RegisterProvider`](#api-7601bf7774f3f801) | Method |
| [`Revert`](#api-bed4ddd5db5d6b94) | Method |
| [`Save`](#api-e787ab2afbfe518c) | Method |
| [`SaveAll`](#api-46dc19a421ba1530) | Method |
| [`SetDirty`](#api-fd797594960e378e) | Method |
| [`UpdateAssetPath`](#api-955e3fe8fb730233) | Method |
| [`documents`](#api-7cc0880a18931971) | Property |

## Type declaration

<a id="api-a21b729d8f4ec270"></a>
<!-- api: T:InnoEditor.Interactions.IEditorDocumentService c00dc2ba613b6edd2f15db302646a6fa0552b85c6c1df232aac767ed6513085f -->

```csharp
public interface InnoEditor.Interactions.IEditorDocumentService
```

Owns single-instance editor documents independently from reloadable providers and presentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L28).

## `Apply`

<a id="api-cac2fbf10c12569b"></a>
<!-- api: M:InnoEditor.Interactions.IEditorDocumentService.Apply(System.Guid) 8fb8e2adaf0baa9b2031eb8c2521eb2666803844dbef7450f6b9e00e42fc6340 -->

```csharp
bool InnoEditor.Interactions.IEditorDocumentService.Apply(System.Guid documentId)
```

Applies staged changes through the current provider.

**Parameter `documentId`:** Stable tab identity.

**Returns:** `true` when changes are applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L122).

## `Close`

<a id="api-9f8710ef8534f0f8"></a>
<!-- api: M:InnoEditor.Interactions.IEditorDocumentService.Close(System.Guid,InnoEditor.Interactions.EditorDocumentCloseMode) d813f6f3f4cc662061f058943ad02cc95ad2da1f6a1d3a160dfd576a51f9db3f -->

```csharp
bool InnoEditor.Interactions.IEditorDocumentService.Close(System.Guid documentId, InnoEditor.Interactions.EditorDocumentCloseMode mode)
```

Closes one document using an explicit dirty-document decision.

**Parameter `documentId`:** Stable tab identity.

**Parameter `mode`:** Explicit close behavior.

**Returns:** `true` when the document closed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L147).

## `Open`

<a id="api-d922221b35b6b35e"></a>
<!-- api: M:InnoEditor.Interactions.IEditorDocumentService.Open(System.String,System.Guid) 65c91709196a5cfef60be640015e7ba8abbcc4774adafc11ae4256edf6f3de27 -->

```csharp
InnoEditor.Interactions.EditorDocumentContext InnoEditor.Interactions.IEditorDocumentService.Open(string assetPath, System.Guid assetId = default(System.Guid))
```

Opens a document or returns its existing single instance.

**Parameter `assetPath`:** Project asset path.

**Parameter `assetId`:** Persistent asset identity when available.

**Returns:** The stable document context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L58).

## `RegisterProvider`

<a id="api-7601bf7774f3f801"></a>
<!-- api: M:InnoEditor.Interactions.IEditorDocumentService.RegisterProvider(InnoEditor.Interactions.EditorDocumentProvider) ae74dd1436ef99adac1bd662bf671a06f160a915f999292662b56554513bf0b0 -->

```csharp
System.IDisposable InnoEditor.Interactions.IEditorDocumentService.RegisterProvider(InnoEditor.Interactions.EditorDocumentProvider provider)
```

Registers one current-generation document provider.

**Parameter `provider`:** Provider instance to register.

**Returns:** A lease that detaches only this provider instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L44).

## `Revert`

<a id="api-bed4ddd5db5d6b94"></a>
<!-- api: M:InnoEditor.Interactions.IEditorDocumentService.Revert(System.Guid) 479f226d50dabff59335b64294d75156126fdf64756d8f80a9f060faf71a0e1c -->

```csharp
bool InnoEditor.Interactions.IEditorDocumentService.Revert(System.Guid documentId)
```

Reverts staged changes through the current provider.

**Parameter `documentId`:** Stable tab identity.

**Returns:** `true` when changes are reverted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L133).

## `Save`

<a id="api-e787ab2afbfe518c"></a>
<!-- api: M:InnoEditor.Interactions.IEditorDocumentService.Save(System.Guid) 31267f1beda00a580f4451c2fa54b25d83ed3855bcd9b78bb923c6eda24136c5 -->

```csharp
bool InnoEditor.Interactions.IEditorDocumentService.Save(System.Guid documentId)
```

Saves one open document through its current provider.

**Parameter `documentId`:** Stable tab identity.

**Returns:** `true` when the document is saved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L103).

## `SaveAll`

<a id="api-46dc19a421ba1530"></a>
<!-- api: M:InnoEditor.Interactions.IEditorDocumentService.SaveAll 2cb4461b07a7ff41f1541fe60e4acdb67d803125e99b089865fef6d1aefc2fdf -->

```csharp
bool InnoEditor.Interactions.IEditorDocumentService.SaveAll()
```

Saves every dirty open document.

**Returns:** `true` when every dirty document is saved.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L111).

## `SetDirty`

<a id="api-fd797594960e378e"></a>
<!-- api: M:InnoEditor.Interactions.IEditorDocumentService.SetDirty(System.Guid,System.Boolean) 8f8c60da8be4506ef74219832482ffe207faecc8ece2d5819a1f109d04f13fc1 -->

```csharp
void InnoEditor.Interactions.IEditorDocumentService.SetDirty(System.Guid documentId, bool isDirty = true)
```

Updates a document's unsaved state without saving, discarding or changing its History.

**Parameter `documentId`:** Stable tab identity.

**Parameter `isDirty`:** Whether the provider's current draft differs from its saved baseline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L89).

## `UpdateAssetPath`

<a id="api-955e3fe8fb730233"></a>
<!-- api: M:InnoEditor.Interactions.IEditorDocumentService.UpdateAssetPath(System.Guid,System.String) 5b005f2cc7d6fd3b56c3130a08aec843d76460fc8eb959a25d62857193059d33 -->

```csharp
bool InnoEditor.Interactions.IEditorDocumentService.UpdateAssetPath(System.Guid documentId, string assetPath)
```

Updates an open document's source location after an identity-preserving asset move, without changing history or focus.

**Parameter `documentId`:** Existing document identity.

**Parameter `assetPath`:** Current authoritative source location for the same persistent asset.

**Returns:** Whether the document exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L75).

## `documents`

<a id="api-7cc0880a18931971"></a>
<!-- api: P:InnoEditor.Interactions.IEditorDocumentService.documents a5f8132fe700f35a2adbadc45ad3aee4d7c27d1fbbfcf93dd155abb0266e31ff -->

```csharp
System.Collections.Generic.IReadOnlyList<InnoEditor.Interactions.EditorDocumentContext> InnoEditor.Interactions.IEditorDocumentService.documents { get; }
```

Gets the currently owned source documents.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Interactions/Documents/IEditorDocumentService.cs#L33).
