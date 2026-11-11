---
title: Add source asset creation and draft editing
description: Reuse the asset owner, shared documents and immediate neutral History instead of adding a private editor database.
uid: extending.asset-drafts
kind: how-to
owners: [Inno.Editor.Assets]
contracts: [project.inno-editor-assets]
---
# Add source asset creation and draft editing

The Assets Editor feature supplies creation templates and a reusable source-draft lifecycle. AssetPipeline/AssetSourceStore own codecs, reference contexts and atomic source writes. EditorInteractions owns documents and undo/redo. A Material, Pipeline or plugin feature must not add another asset database or History stack.

## Register a meaningful creation template

Derive from `AssetCreationTemplate` and declare a stable ID, menu path, extension, default filename and ordering with `AssetCreationMenuAttribute`. The registry owns template instances. The generic template creates the declared asset type and uses the current asset owner's native Serialization context; a matching importer must understand that format.

Use a custom encoder for genuinely textual/binary sources, not a JSON shortcut around structured engine serialization. Returning null, returning a different type, duplicate IDs/menu paths or invalid extensions rejects the entire candidate registry.

Template discovery supplies menu metadata and initial content. Each menu item passes its template ID to the same create action, which owns enabled-state checks, target validation, shortcuts and writing. Adding a type does not require a File Browser switch or a second interaction system.

Subclassing AssetObject alone does not imply a useful blank asset. Textures, geometry, clips and ordinary external files arrive through import; Scene/Prefab creation follows its domain workflow. This is a semantic distinction rather than a hardcoded type allowlist.

## Declare importer and processor identity

Concrete `AssetImporter<TAsset>` and `AssetBuildProcessor<TDefinition>` implementations declare immutable protocol IDs in their attributes. The registry validates types, IDs, extensions and competing processors before constructing/binding instances. It does not obtain identity by calling a virtual property on an unvalidated extension. Duplicate registrations reject the whole candidate.

## Own the draft service

Construct `AssetDraftDocuments<TAsset>` with assets, serialization, interactions, stable provider/history IDs, a dotted extension and display label. Register a matching History handler, then call Start once. The service joins the shared document owner rather than opening another Inspector.

Open identifies a source even when import fails. Read returns a detached value; referenced canonical assets stay read-only. Draft state exposes identity, document ID, path, read-only/error/dirty state and neutral bytes, not retained assets, CLR types or delegates.

Replace and ReplaceMany record neutral changes immediately. Continuous input uses one `EditorEditGesture`; its merge key is not a save command. Cancel rolls back through the same History transaction. Commit ends a gesture without saving. Multi-document replacement is one undo transaction, not a promise of crash-atomic cross-file saving. TouchInspection/Update finish abandoned gestures and process source changes through the existing lifecycle.

## Save, revert and recover deliberately

Save atomically writes the source, then Update imports it. A saved source whose import fails remains visibly saved-but-failed. Revert reads the latest source as a new baseline and records History. Undo/redo changes drafts; another explicit Save is required to publish them.

Recovery stores source fingerprint, baseline and draft beneath the provider's owned `Library/Editor/AssetDrafts` area. Conflicts preserve the draft and reject overwriting the changed source. If recovery writing fails, in-memory draft/history remain and the risk is reported. Missing sources retain bytes/history. Read-only installed assets reject replacement/saving. Selection changes do not save; the shared document service owns dirty-close confirmation even without a visible panel.

Read detached values only for the current callback/frame. Dispose unregisters the provider and preserves dirty recovery. Source-aware draft helpers must not pin plugin instances or generations.

## Reuse shared file operations

AssetEditingModule owns creation, delete, rename, move, read-only checks and source History. Batch delete/move prevalidates all items, removes redundant selected descendants and executes one transaction; later failure compensates earlier steps. Import settings and sample import have their existing owners; File Browser only dispatches intent.

Sample progress snapshots are captured under the owner's progress lock and identify one operation. Observers stop after retirement, cancel validates that ID, and ordinary late messages cannot overwrite cancellation. Success follows publication and payload release, with rollback/dependency retirement remaining in the original transaction.
