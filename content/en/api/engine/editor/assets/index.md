---
uid: api.directory.engine.editor.assets
title: "Assets"
kind: landing
owners: []
---

# Assets

Find types in this project category. Each type links to its exact declarations and member contracts.

## Categories

| Category | Purpose |
| --- | --- |
| [ImGui](imgui/index.md) | Reusable asset browsing state, icon discovery, styles and inspection presentation. |

## Types

| Type | Purpose |
| --- | --- |
| [AssetCreationContext](assetcreationcontext/index.md) | Provides source encoding services to one detached Asset creation template invocation. |
| [AssetCreationMenuAttribute](assetcreationmenuattribute/index.md) | Declares the source name, extension, and menu placement that cannot be inferred from an T:Inno.Assets.AssetObject type alone. |
| [AssetCreationTemplate](assetcreationtemplate-f18e701bd7f6/index.md) | Produces the detached initial value for one authorable native asset source. |
| [AssetCreationTemplate&lt;TAsset&gt;](assetcreationtemplate-a331d599ec6b/index.md) | Creates a default-constructed native source for an authorable asset type. |
| [AssetDraftDocuments&lt;TAsset&gt;](assetdraftdocuments/index.md) | Owns detached native asset drafts with shared document, History, recovery and explicit-save semantics. |
| [AssetDraftDocuments&lt;TAsset&gt;.Draft](draft/index.md) | Contains neutral draft status; only the owning store can change it. |
| [AssetEditingModule](asseteditingmodule/index.md) | Handles asset creation actions in the Editor file browser. |
| [AssetEditor](asseteditor/index.md) | Customizes editor interactions for one imported asset type. |
| [AssetEditorAttribute](asseteditorattribute/index.md) | Associates an asset editor with an imported asset type. |
| [AssetEditorContext](asseteditorcontext/index.md) | Provides an immutable snapshot for an asset editor operation. |
| [AssetImportSettingsEdits](assetimportsettingsedits/index.md) | Applies importer configuration through the common sidecar pipeline and stable-identity Editor history. |
| [AssetOperationValidation](assetoperationvalidation/index.md) | Describes whether an editor asset operation may proceed. |
| [AssetSampleImportModule](assetsampleimportmodule/index.md) | Owns sample import validation, publication and rollback independently of its progress window. |
| [AssetSampleImportProgress](assetsampleimportprogress/index.md) | Contains one atomically captured sample import status. |

