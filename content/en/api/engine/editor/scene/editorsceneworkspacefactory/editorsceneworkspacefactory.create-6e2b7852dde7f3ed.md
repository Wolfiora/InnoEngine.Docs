---
uid: api.6e2b7852dde7f3ed0e34b83a6c3b019d2b2fb3b8e4e3c6ad1965b74f33827e03
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.EditorSceneWorkspaceFactory.Create(Inno.Runtime.RuntimeSession,Inno.Assets.Pipeline.AssetPipeline,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Logging.LogRouter,Inno.Editor.Interactions.IEditorSelectionCoordinator)"
source: xml
reviewed: 692d731e2fbbfb0249a03f2b83bb563e25f4a899b178a134b9ed6195b64789fc
title: "EditorSceneWorkspaceFactory.Create"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Creates an unattached workspace over explicitly owned Edit-session services.

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
