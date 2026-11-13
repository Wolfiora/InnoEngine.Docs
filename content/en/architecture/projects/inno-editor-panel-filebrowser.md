---
title: Inno.Editor.Panel.FileBrowser
description: "The internal File Browser window consuming shared asset editing, browser presentation and interaction services."
uid: project.inno-editor-panel-filebrowser
kind: project
owners: [Inno.Editor.Panel.FileBrowser]
exampleMode: host
exampleProjects: [Inno.Editor.Panel.FileBrowser]
---
# Inno.Editor.Panel.FileBrowser

The internal File Browser window consuming shared asset editing, browser presentation and interaction services.

## Browse source-qualified entries

[Browse and change assets](../../manual/editor/files.md) explains writable Project and read-only Plugin roots, independent navigation, samples, creation, rename, move and source-preserving History. [Browser extensions](../../extending/asset-browser.md) locate reusable AssetEditor/icon/state contracts in their current owners. This panel itself has no selected public/protected declarations.

The old panel page mixed relocated feature APIs with internal window behavior. Source mutation now belongs to Assets; browser/icon/inspection presentation belongs to Assets.ImGui. File Browser does not own a second source database, compiler queue, History stack or Inspector implementation. The examples below deliberately reference those actual owners.

## Keep layout and interaction current

Tree/List/Grid share source-qualified entry identities, explicit directory drop sites and action-owned inline rename. Empty roots are navigation containers; active Plugin mount identity is not inferred merely from a non-Project path. Popup and foreground hit ownership prevents click-through; Child/Table/Tree/style scopes unwind on failures.

Each scrollable region owns its overflow. List splitters cover only actual table height, grid text/icons use draw overlays without expanding layout cursors, and glyph centering uses baked visible bounds. Panel state stores presentation preferences, while browser state stores root/paths; selection remains session-local.

## Host examples

These use the actual host contracts and borrowed live dependencies. They do not initialize a product or establish lifecycle/device acceptance.

```csharp
using Inno.Assets;
using Inno.Assets.Pipeline;
using Inno.Editor.Interactions;
using Inno.Editor.Assets;
using Inno.Editor.Assets.ImGui;

[AssetEditor(typeof(TextAsset), useForChildren: true, priority: 100)]
public sealed class TextAssetEditor : AssetEditor
{
    public override AssetOperationValidation ValidateDelete(AssetEditorContext context)
        => context.info.status == AssetImportStatus.Imported
            ? AssetOperationValidation.valid
            : AssetOperationValidation.Invalid("The source is not ready.");
}
```

```csharp
using Inno.Assets.Pipeline;
using Inno.Editor.Assets;
using Inno.Editor.Interactions;

[EditorAction("example.source.reimport", "panel/asset.file-browser")]
[EditorMenu("panel/asset.file-browser", "Source/Reimport", order: 400)]
public sealed class ReimportSourceAction(AssetPipeline assets) : EditorAction<AssetFileEntry>
{
    protected override void Execute(EditorActionContext<AssetFileEntry> context)
    {
        assets.Import(context.target.assetPath);
    }
}
```

```csharp
using Inno.Assets;
using Inno.Editor.Assets;
using Inno.Editor.Assets.ImGui;

[AssetIcon(typeof(TextAsset), "T", useForChildren: true, priority: 100)]
[AssetIcon(".txt", "T")]
internal static class TextAssetIcons
{
}
```

## Source boundary

[Source project](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/panels/Inno.Editor.Panel.FileBrowser/Inno.Editor.Panel.FileBrowser.csproj). Declarations, script selection and runtime behavior require separate matching evidence.
