---
title: Inno.Editor.Assets
description: "Reusable source asset drafts, creation templates, file edits and operation-scoped sample progress."
uid: project.inno-editor-assets
kind: project
owners: [Inno.Editor.Assets]
exampleMode: host
exampleProjects: [Inno.Editor.Assets]
---
# Inno.Editor.Assets

Reusable source asset drafts, creation templates, file edits and operation-scoped sample progress.

## Extend the shared asset workflow

[Asset creation and draft editing](../../extending/asset-drafts.md) explains template discovery, importer/processor identity, source ownership and immediate neutral History. The feature does not introduce another asset database, document service or undo stack. Material and Pipeline reuse AssetDraftDocuments rather than encoding their own source/recovery protocol.

## Keep editing and saving distinct

Replace/ReplaceMany records a sample immediately. Continuous gestures share a transaction/merge key; Commit ends a gesture without saving, and Cancel uses the same History rollback. Multi-document History is not cross-file crash-atomic saving. Canonical reference assets remain read-only, and detached values are callback-scoped.

Save/Revert/dirty close belong to the shared document service. Save publishes source atomically and later import may still fail visibly. Recovery preserves source identity, baseline and draft; conflicting external edits refuse overwrite. Installed assets remain read-only. Batch file edits prevalidate the normalized selection and compensate failures. Sample progress and cancellation identify one live operation.

## Host examples

These use the actual host contracts and borrowed live dependencies. They do not initialize a product or establish lifecycle/device acceptance.

```csharp
using System;
using Inno.Assets;
using Inno.Editor.Assets;

public static class Example0
{
    static void ReplaceEditedDraft<T>(
        AssetDraftDocuments<T> documents,
        AssetPath path,
        Action<T> editDetachedDraft
    ) where T : AssetObject
    {
        var id = documents.Open(path);
        T draft = documents.Read(id);
        editDetachedDraft(draft);
        documents.Replace(id, draft);
    }
}
```

## Script examples

- [Explicit editor-script surface](../../extending/examples/inno-editor-assets-editor-script.md)

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Assets/Inno.Editor.Assets.csproj). Declarations, script selection and runtime behavior require separate matching evidence.

## API reference

[Types and exact member contracts](../types/editor-domains/inno-editor-assets/index.md) preserve captured declarations and source XML.
