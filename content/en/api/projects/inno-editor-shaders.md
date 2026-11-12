---
title: Inno.Editor.Shaders
description: "UI-free material source drafts, neutral History and Editor-only shader parameter presentation."
uid: project.inno-editor-shaders
kind: project
owners: [Inno.Editor.Shaders]
exampleMode: editor-script
exampleProjects: [Inno.Editor.Shaders]
---
# Inno.Editor.Shaders

UI-free material source drafts, neutral History and Editor-only shader parameter presentation.

Read the linked task or ownership explanation before using the exact API below.

## Edit without publishing prematurely

[Material draft editing](../../manual/editor/material-drafts.md) explains detached reads, immediate History samples, atomic ReplaceMany, gesture identity and explicit Save/Revert/Close. AssetDraftDocuments supplies codecs, dirty/recovery state and neutral History. The module registry supplies dependencies; the service does not draw ImGui or own a panel.

ShaderParameterPresentation records grouping, descriptions, visibility and finite ranges with native Serialization, stable binding IDs and the owner reference context. It does not mutate runtime shader interfaces or existing parameter values.

## Keep live objects with their owner

Canonical material, referenced assets and published runtime values stay with Assets. Source conflicts preserve drafts and diagnostics; missing sources/types form recovery barriers. Persistent IDs reconnect History after reopening. Shutdown clears generation caches but preserves unsaved recovery. Do not retain detached assets, types, previews or registries across callbacks.

The example below uses the projected Editor-script namespace. The exact reference section separately describes captured host declarations; script availability is not inferred from host presence.

## Executable usage

Supply existing live dependencies on the declared API surface. Compiling the example does not initialize a product or certify a physical device.

```csharp
using System;
using InnoEditor.Shaders;

static void ReadCurrentDraft(
    MaterialDocuments documents,
    Guid assetId
) {
    _ = documents.Read(assetId);
}
```

## Source boundary

[The source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Shaders/Inno.Editor.Shaders.csproj) defines the selected host declarations. Script projection and platform execution require their separate evidence.

## API reference

[Types and exact member contracts](../types/editor-services/inno-editor-shaders/index.md) preserve captured declarations and source XML.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Editor script API](../editor-script/inno-editor-shaders/index.md)
