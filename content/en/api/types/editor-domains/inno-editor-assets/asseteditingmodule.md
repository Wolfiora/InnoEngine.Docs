---
title: "AssetEditingModule"
description: "Reference for AssetEditingModule in Inno.Editor.Assets."
uid: api.inno.editor.assets.229cb70d003e1680
kind: api
owners:
  - Inno.Editor.Assets
apiSurface: source-clr
contracts:
  - project.inno-editor-assets
---
# `AssetEditingModule`

This reference describes `AssetEditingModule` in `Inno.Editor.Assets`. Read the [shared contract](../../../projects/inno-editor-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Editor.Core.EditorModule`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-039f63debb9eea65) | Method |
| [`CanCreateAsset`](#api-395d642628c35fcb) | Method |
| [`CanMoveSelection`](#api-f0de8511db09ff2f) | Method |
| [`CanMoveToDirectory`](#api-b2ff5dc42f83972e) | Method |
| [`CreateAsset`](#api-825d6fb380311056) | Method |
| [`CreateDirectory`](#api-1b7a4541a35e413e) | Method |
| [`CreateSource`](#api-a7ee22bded39657c) | Method |
| [`DeleteSelection`](#api-f8f387430d31daba) | Method |
| [`DeleteWithHistory`](#api-979529e49ff08ad4) | Method |
| [`IsPluginRoot`](#api-abf8ecc71d64fc56) | Method |
| [`IsPluginSource`](#api-7364d050838e1f82) | Method |
| [`MoveSelection`](#api-5971cd7cf6ddc0b6) | Method |
| [`MoveToDirectoryWithHistory`](#api-c5b3f1bb2bf64fa3) | Method |
| [`OnDispose`](#api-11ed9c5714c80e58) | Method |
| [`OnStart`](#api-e675b77ce7138247) | Method |
| [`OnStop`](#api-83e2920e1c68ec16) | Method |
| [`Open`](#api-73bc9c692c43e0db) | Method |
| [`Rename`](#api-b89c79b48de62def) | Method |
| [`SelectPath`](#api-5bcd4c47eb49239e) | Method |
| [`TryCreateContext`](#api-48afec75bfc531ef) | Method |
| [`TryCreateDragData`](#api-317ae30fb67f4108) | Method |
| [`ValidateDeleteSelection`](#api-7f98f383bfd0092d) | Method |
| [`ValidateRename`](#api-8773a1a2b2489eb9) | Method |
| [`creationTemplates`](#api-6acbcf8306ad9dcb) | Property |
| [`interactions`](#api-e1a986009d8c07f1) | Property |
| [`pipeline`](#api-cc2507a0e094c124) | Property |

## Type declaration

<a id="api-229cb70d003e1680"></a>
<!-- api: T:Inno.Editor.Assets.AssetEditingModule 1dacfe1f271f57b7ae806ad6d3ccd49f4d4cffaff804f5bddb627ed13ebfec72 -->

```csharp
public sealed class Inno.Editor.Assets.AssetEditingModule : Inno.Editor.Core.EditorModule
```

Handles asset creation actions in the Editor file browser.

Owns source mutations, asset extension dispatch and neutral shared-history records independently of presentation.

Applies validated selection operations through the authoritative asset and History owners.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.Creation.cs#L13).

## `#ctor`

<a id="api-039f63debb9eea65"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.#ctor(Inno.Editor.Interactions.EditorInteractions,Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter) a56118adaecfac7b3d11df598b5153962dfd32fc6888689b465bbc0996956501 -->

```csharp
public Inno.Editor.Assets.AssetEditingModule.AssetEditingModule(Inno.Editor.Interactions.EditorInteractions interactions, Inno.Assets.Pipeline.AssetPipeline pipeline, Inno.Plugins.Authoring.PluginEnvironment plugins, Inno.Extensibility.Types.TypeCatalog types, Inno.Core.Logging.LogRouter logs)
```

Creates the asset editing service for one authoring generation.

**Parameter `interactions`:** The active editor interaction entry point.

**Parameter `pipeline`:** The isolated authoring asset pipeline used by browser operations.

**Parameter `plugins`:** The active Plugin catalog that authoritatively identifies Plugin-owned source mounts.

**Parameter `types`:** The active type catalog used to build extension registry snapshots.

**Parameter `logs`:** The application log router used for Asset Browser operation diagnostics.

**Throws `System.ArgumentNullException`:** Thrown when any required service is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L50).

## `CanCreateAsset`

<a id="api-395d642628c35fcb"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.CanCreateAsset(System.String,System.String) d8aaa1f2bf7b79f242d451c85c6053a8bfe55ab762851415c931e87b0feb3581 -->

```csharp
public bool Inno.Editor.Assets.AssetEditingModule.CanCreateAsset(string directory, string templateId)
```

Checks that a creation template and writable destination are available.

**Parameter `directory`:** The source-relative writable destination directory.

**Parameter `templateId`:** The stable identity of a discovered creation template.

**Returns:** True when the request is accepted; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L96).

## `CanMoveSelection`

<a id="api-f0de8511db09ff2f"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.CanMoveSelection(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry},System.String) d1e15ba7c3844dd42c9be3d39a390f3ea4a8b87f40d203462c78585db0f8ce63 -->

```csharp
public bool Inno.Editor.Assets.AssetEditingModule.CanMoveSelection(System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetFileEntry> targets, string targetDirectory)
```

Validates every minimal selected source and rejects destination collisions before a batch move.

**Parameter `targets`:** Live source entries in selection order.

**Parameter `targetDirectory`:** The writable project destination.

**Returns:** True when every source can move to a distinct destination.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.Selection.cs#L99).

## `CanMoveToDirectory`

<a id="api-b2ff5dc42f83972e"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.CanMoveToDirectory(System.String,System.String) e8d72e6296e49630ffed4d583e2210b1c984ee068c6fbfa95f63f2a8e6740043 -->

```csharp
public bool Inno.Editor.Assets.AssetEditingModule.CanMoveToDirectory(string sourcePath, string targetDirectory)
```

Checks whether a source can move into the destination without a cycle or name collision.

**Parameter `sourcePath`:** The current isolated source-relative path.

**Parameter `targetDirectory`:** The isolated destination directory.

**Returns:** True when the request is accepted; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L314).

## `CreateAsset`

<a id="api-825d6fb380311056"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.CreateAsset(System.String,System.String) 8213345296218f176b895bf4b441faa0c0dd58583be600ac74fdc79600c26d6c -->

```csharp
public Inno.Assets.Pipeline.AssetFileEntry Inno.Editor.Assets.AssetEditingModule.CreateAsset(string directory, string templateId)
```

Creates and imports a source using a discovered template and records the committed change.

**Parameter `directory`:** The source-relative writable destination directory.

**Parameter `templateId`:** The stable identity of a discovered creation template.

**Returns:** The committed source identity, or a validation result describing why the operation is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L120).

## `CreateDirectory`

<a id="api-1b7a4541a35e413e"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.CreateDirectory(Inno.Assets.AssetPath) 4227705682860a5cc8cff6f6ba88a90cc0f97f1765b43b71e93c594f32e7e810 -->

```csharp
public Inno.Assets.Pipeline.AssetFileEntry Inno.Editor.Assets.AssetEditingModule.CreateDirectory(Inno.Assets.AssetPath parent)
```

Creates a uniquely named directory and records its removal and restoration in shared History.

**Parameter `parent`:** An existing writable source directory.

**Returns:** The indexed identity of the newly created directory.

**Throws `System.InvalidOperationException`:** The source is read-only, unavailable, or cannot retain the History entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.Creation.cs#L27).

## `CreateSource`

<a id="api-a7ee22bded39657c"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.CreateSource(Inno.Assets.AssetPath,System.ReadOnlySpan{System.Byte}) 925d4aabfe3cd8da481429013bef90d47b40394d6eccb7a323a545caeedddbdf -->

```csharp
public Inno.Assets.Pipeline.AssetFileEntry Inno.Editor.Assets.AssetEditingModule.CreateSource(Inno.Assets.AssetPath path, System.ReadOnlySpan<byte> bytes)
```

Creates a native or ordinary-text asset source as one recoverable shared-history operation.

**Parameter `path`:** A new file in an existing writable asset directory.

**Parameter `bytes`:** Complete source bytes supplied by the feature's native writer.

**Returns:** The indexed source identity, even when its first import reports a source error.

**Throws `System.IO.IOException`:** The source already exists, has no existing parent, or cannot be installed.

**Throws `System.InvalidOperationException`:** The source mount is unavailable/read-only or history cannot retain the change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.Creation.cs#L75).

## `DeleteSelection`

<a id="api-f8f387430d31daba"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.DeleteSelection(Inno.Editor.Core.EditorContext,System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry}) cfb22110ec5d19a393e9d18ca301223142c5b4f24adea8cf6fdc149042526376 -->

```csharp
public void Inno.Editor.Assets.AssetEditingModule.DeleteSelection(Inno.Editor.Core.EditorContext editor, System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetFileEntry> targets)
```

Deletes minimal selected source roots in one History transaction, restoring earlier deletions if a later one fails.

**Parameter `editor`:** The immediate Editor context.

**Parameter `targets`:** Fresh selected source entries; nested entries are covered by their selected directory.

**Throws `System.InvalidOperationException`:** Validation or a mutation fails; rollback failures remain explicit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.Selection.cs#L68).

## `DeleteWithHistory`

<a id="api-979529e49ff08ad4"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.DeleteWithHistory(Inno.Editor.Assets.AssetEditorContext,Inno.Editor.Interactions.IEditorHistory) 19cd54c9881731a71e75ba15dec0eed828a8b4a16ba7ddca7fe515a791cfa9e9 -->

```csharp
public bool Inno.Editor.Assets.AssetEditingModule.DeleteWithHistory(Inno.Editor.Assets.AssetEditorContext asset, Inno.Editor.Interactions.IEditorHistory history)
```

Deletes a source with a recoverable archive and records the committed mutation.

**Parameter `asset`:** The captured source metadata to validate and delete.

**Parameter `history`:** The authoritative History receiving this mutation.

**Returns:** True when the request is accepted; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L411).

## `IsPluginRoot`

<a id="api-abf8ecc71d64fc56"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.IsPluginRoot(Inno.Assets.Pipeline.AssetFileEntry) b6ce9756693e394aca7e6590cc064e7a2d4be118ebcb800c51544a3d1c6c7127 -->

```csharp
public bool Inno.Editor.Assets.AssetEditingModule.IsPluginRoot(Inno.Assets.Pipeline.AssetFileEntry entry)
```

Determines whether an indexed entry is the root of an installed Plugin.

**Parameter `entry`:** The currently indexed source identity.

**Returns:** True when the request is accepted; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L181).

## `IsPluginSource`

<a id="api-7364d050838e1f82"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.IsPluginSource(Inno.Assets.AssetSourceId) 60889ca64d070bc7cfd7e8b4b4e51c92005e337a2d3c047eacefb67b7a0d7638 -->

```csharp
public bool Inno.Editor.Assets.AssetEditingModule.IsPluginSource(Inno.Assets.AssetSourceId source)
```

Determines whether the active Plugin catalog owns a source mount.

**Parameter `source`:** The source mount identity to query.

**Returns:** True when the request is accepted; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L170).

## `MoveSelection`

<a id="api-5971cd7cf6ddc0b6"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.MoveSelection(System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry},System.String) 57d574e30dab01679a75869ce078c4c8a4e9b764b45973c7d3a3baaf6396fcab -->

```csharp
public void Inno.Editor.Assets.AssetEditingModule.MoveSelection(System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetFileEntry> targets, string targetDirectory)
```

Moves selected source roots in one transaction; a later failure restores earlier moves.

**Parameter `targets`:** Live entries, including descendants covered by a selected directory.

**Parameter `targetDirectory`:** The writable project destination.

**Throws `System.InvalidOperationException`:** Any source or destination rejects the operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.Selection.cs#L126).

## `MoveToDirectoryWithHistory`

<a id="api-c5b3f1bb2bf64fa3"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.MoveToDirectoryWithHistory(System.String,System.String,Inno.Editor.Interactions.IEditorHistory) 10faede73201753b8e04c5d40100f3c4f2fd24331a7e39496c0f36013f0a31f2 -->

```csharp
public Inno.Assets.Pipeline.AssetFileEntry Inno.Editor.Assets.AssetEditingModule.MoveToDirectoryWithHistory(string sourcePath, string targetDirectory, Inno.Editor.Interactions.IEditorHistory history)
```

Moves a source and records the committed mutation in the supplied history.

**Parameter `sourcePath`:** The current isolated source-relative path.

**Parameter `targetDirectory`:** The isolated destination directory.

**Parameter `history`:** The authoritative history that receives the committed mutation.

**Returns:** The committed source identity, or a validation result describing why the operation is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L334).

## `OnDispose`

<a id="api-11ed9c5714c80e58"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.OnDispose d2fa5bfc77945c54b069c8bdacfc3e6de7cfa39b9b5e02acd19e956afe8a3b7f -->

```csharp
protected override void Inno.Editor.Assets.AssetEditingModule.OnDispose()
```

Releases resources retained by this feature after it has stopped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L521).

## `OnStart`

<a id="api-e675b77ce7138247"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.OnStart(Inno.Editor.Core.EditorContext) da50f202392440268c09ecfe00d5faa40691cc755bc1311c78bbcf2f5b678eff -->

```csharp
protected override void Inno.Editor.Assets.AssetEditingModule.OnStart(Inno.Editor.Core.EditorContext context)
```

Initializes this feature when its owning runtime becomes active.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L502).

## `OnStop`

<a id="api-83e2920e1c68ec16"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.OnStop(Inno.Editor.Core.EditorContext) a4e66a07c00396451e5a3dfc29574bb99c272c31bc0ec3780a38516252ecb54e -->

```csharp
protected override void Inno.Editor.Assets.AssetEditingModule.OnStop(Inno.Editor.Core.EditorContext context)
```

Stops this feature before its owning runtime releases the active generation.

**Parameter `context`:** The context that supplies state and services for this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L513).

## `Open`

<a id="api-73bc9c692c43e0db"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.Open(Inno.Editor.Assets.AssetEditorContext) ea146260c08c12b55f6eb19e499fc6ab54bc4d80c7f8344b7755bd45ae47253e -->

```csharp
public bool Inno.Editor.Assets.AssetEditingModule.Open(Inno.Editor.Assets.AssetEditorContext context)
```

Opens a source using its current asset editor extension and reports rejected or failed opens.

**Parameter `context`:** The immutable metadata captured for this immediate source operation.

**Returns:** True when the request is accepted; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L230).

## `Rename`

<a id="api-b89c79b48de62def"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.Rename(Inno.Editor.Assets.AssetEditorContext,System.String) e8abccb32682dba7b18f6a939641e5f660912e177109e382267e6c18e57b00f7 -->

```csharp
public void Inno.Editor.Assets.AssetEditingModule.Rename(Inno.Editor.Assets.AssetEditorContext context, string newName)
```

Renames a source atomically and records its reversible history payload.

**Parameter `context`:** The immutable metadata captured for this immediate source operation.

**Parameter `newName`:** The requested entry name without its protected file extension.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L278).

## `SelectPath`

<a id="api-5bcd4c47eb49239e"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.SelectPath(System.String) 5f89d50cdaff7d726bde49a2a2c6cde0a295de9509602734ab71bd006b7c15c4 -->

```csharp
public void Inno.Editor.Assets.AssetEditingModule.SelectPath(string relativePath)
```

Selects the current source identity without retaining an indexed entry across generations.

**Parameter `relativePath`:** The isolated source-relative path to resolve.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L462).

## `TryCreateContext`

<a id="api-48afec75bfc531ef"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.TryCreateContext(Inno.Editor.Core.EditorContext,System.String,Inno.Editor.Assets.AssetEditorContext@) 557a5abcf45ab99fdc8ac171967087dbfd8dd4c149f4d16a3e886e7ad921e4a4 -->

```csharp
public bool Inno.Editor.Assets.AssetEditingModule.TryCreateContext(Inno.Editor.Core.EditorContext editor, string relativePath, out Inno.Editor.Assets.AssetEditorContext? context)
```

Captures the currently indexed source and extension metadata for one immediate operation.

**Parameter `editor`:** The current editor context used only during this invocation.

**Parameter `relativePath`:** The isolated source-relative path to resolve.

**Parameter `context`:** Receives the current source snapshot, or null when the source is unavailable.

**Returns:** True when the request is accepted; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L203).

## `TryCreateDragData`

<a id="api-317ae30fb67f4108"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.TryCreateDragData(Inno.Editor.Assets.AssetEditorContext,Inno.Editor.Interactions.EditorDragData@) a4658ae250db2f4b920bef6777303213331fd7b29409a7984213641f65cf2077 -->

```csharp
public bool Inno.Editor.Assets.AssetEditingModule.TryCreateDragData(Inno.Editor.Assets.AssetEditorContext context, out Inno.Editor.Interactions.EditorDragData? data)
```

Creates identity-based drag data when the current extension permits dragging.

**Parameter `context`:** The immutable metadata captured for this immediate source operation.

**Parameter `data`:** Receives identity-based drag data, or null when dragging is unavailable.

**Returns:** True when the request is accepted; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L481).

## `ValidateDeleteSelection`

<a id="api-7f98f383bfd0092d"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.ValidateDeleteSelection(Inno.Editor.Core.EditorContext,System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetFileEntry}) d161b456501c84722522eb5efb1a3b4f6ce505fe20b0bd203ac079cda16934d1 -->

```csharp
public Inno.Editor.Assets.AssetOperationValidation Inno.Editor.Assets.AssetEditingModule.ValidateDeleteSelection(Inno.Editor.Core.EditorContext editor, System.Collections.Generic.IReadOnlyList<Inno.Assets.Pipeline.AssetFileEntry> targets)
```

Checks the entire source selection before a batch mutation, including extension validation and read-only ownership.

**Parameter `editor`:** The immediate Editor context.

**Parameter `targets`:** Fresh source entries in selection order.

**Returns:** The first rejection, or a valid result when every source can be deleted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.Selection.cs#L28).

## `ValidateRename`

<a id="api-8773a1a2b2489eb9"></a>
<!-- api: M:Inno.Editor.Assets.AssetEditingModule.ValidateRename(Inno.Editor.Assets.AssetEditorContext,System.String) 7d8ffb80b5a000cd0cfc8da9b68c24726a18565ac1d36c24d6d3f3a887ca9f02 -->

```csharp
public Inno.Editor.Interactions.EditorValidationResult Inno.Editor.Assets.AssetEditingModule.ValidateRename(Inno.Editor.Assets.AssetEditorContext context, string newName)
```

Validates a requested name without modifying the source.

**Parameter `context`:** The immutable metadata captured for this immediate source operation.

**Parameter `newName`:** The requested entry name without its protected file extension.

**Returns:** The committed source identity, or a validation result describing why the operation is unavailable.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L260).

## `creationTemplates`

<a id="api-6acbcf8306ad9dcb"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditingModule.creationTemplates 2b0ebb5d754cd9c4c0b48fcc70c76689e9b8b3caac56ad97d2654afe3c15b213 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Editor.Assets.AssetCreationMenuAttribute> Inno.Editor.Assets.AssetEditingModule.creationTemplates { get; }
```

Gets the current immutable creation menu declarations without retaining template instances.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L81).

## `interactions`

<a id="api-e1a986009d8c07f1"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditingModule.interactions 09a2fe45a4025b428745c1bc2aadcf04c395f35700ec85f6f445d27c906c505f -->

```csharp
public Inno.Editor.Interactions.EditorInteractions Inno.Editor.Assets.AssetEditingModule.interactions { get; }
```

Gets the editor interaction owner used by source operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L71).

## `pipeline`

<a id="api-cc2507a0e094c124"></a>
<!-- api: P:Inno.Editor.Assets.AssetEditingModule.pipeline 1ddc54691a949dbec6868907b4874bf8728dd3526c3c9f56490ceacb07744f8a -->

```csharp
public Inno.Assets.Pipeline.AssetPipeline Inno.Editor.Assets.AssetEditingModule.pipeline { get; }
```

Gets the authoritative authoring pipeline; mutations must use its existing ownership protocol.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Editing/AssetEditingModule.cs#L77).
