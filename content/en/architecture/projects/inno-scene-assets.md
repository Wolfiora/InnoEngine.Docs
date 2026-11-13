---
title: Inno.Scene.Assets
description: Import and export scene and prefab source through the engine asset pipeline.
uid: project.inno-scene-assets
kind: project
owners:
  - Inno.Scene.Assets
---
# Inno.Scene.Assets

This assembly integrates `.iscene` and `.iprefab` authoring sources with the existing asset pipeline. It does not own the live Scene model or provide another serializer, database or recovery coordinator. SceneAsset, PrefabAsset and state restoration belong to [Inno.Scene](inno-scene.md).

## Import and export contract

The host includes this assembly in the importer discovery context after module, type-catalog and serialization setup. The internal importers use the normal candidate registry and asset transaction:

| Source | Importer identity | Result |
| --- | --- | --- |
| `.iscene` | `inno.engine.scene` | SceneAsset |
| `.iprefab` | `inno.engine.prefab` | PrefabAsset |

Import deserializes the common engine-resource envelope, validates its resource kind, declares each asset dependency, sets the runtime asset and writes its `runtime` artifact. Export captures the asset's neutral payload and dependencies into the same envelope. The generic loader appends asset state; these importers do not introduce a separate JSON or migration format.

Malformed envelopes, wrong kinds and unavailable dependencies report through the existing import transaction. Failure must not publish a partial artifact set. Scene Missing elements retain their logical identity and bytes through the Scene owner. Restore the original `.imeta` identity when recovering an asset; a new file at the same path is not the former referenced asset.

## Save and rename

Host infrastructure captures a SceneAsset and asks the asset pipeline to save it; [the state guide](../../extending/scene-state.md) supplies the actual example and prerequisites. Editor panels use SceneEdits and History instead of calling lower-level persistence directly. Game scripts do not run the authoring import/save pipeline.

The scene source filename determines the saved name. A source-only rename preserves asset identity through the pipeline. Removing a source file does not itself unload an open editing scene; workspace ownership remains responsible for unsaved data. Naming conflicts must not overwrite another asset.

## Public surface

The evaluated source inventory contains no public types or external protected extension points in this assembly. Both importers are internal implementations discovered through Assets.Pipeline. Extend the pipeline's importer contract rather than deriving from these implementations.
