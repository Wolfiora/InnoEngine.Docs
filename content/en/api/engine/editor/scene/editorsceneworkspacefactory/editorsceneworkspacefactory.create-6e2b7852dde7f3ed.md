---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6e2b7852dde7f3ed0e34b83a6c3b019d2b2fb3b8e4e3c6ad1965b74f33827e03
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.EditorSceneWorkspaceFactory.Create(Inno.Runtime.RuntimeSession,Inno.Assets.Pipeline.AssetPipeline,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Logging.LogRouter,Inno.Editor.Interactions.IEditorSelectionCoordinator)
title: EditorSceneWorkspaceFactory.Create
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: 90fc392ed1f7e28b6f9b9501ffec1536c2ba499393c0c9a69beff3505b942fdc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `runtimeSession`:** The Edit session that owns the workspace scene world.

**Parameter `assets`:** The authoring asset pipeline used for scene and prefab documents.

**Parameter `types`:** The host type catalog used for scene extension generations.

**Parameter `serialization`:** The host serialization registry used for scene snapshots.

**Parameter `logs`:** The application log router used for workspace lifecycle diagnostics.

**Parameter `selection`:** The optional selection coordinator used by the standalone document workspace.

## Returns

A host that owns both the document and Play Mode interfaces of the workspace.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when a required owner is `null`.
