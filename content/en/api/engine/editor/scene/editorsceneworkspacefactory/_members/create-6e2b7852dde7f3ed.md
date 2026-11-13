---
uid: api.6e2b7852dde7f3ed0e34b83a6c3b019d2b2fb3b8e4e3c6ad1965b74f33827e03
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.EditorSceneWorkspaceFactory.Create(Inno.Runtime.RuntimeSession,Inno.Assets.Pipeline.AssetPipeline,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Logging.LogRouter,Inno.Editor.Interactions.IEditorSelectionCoordinator)"
source: xml
reviewed: e27bcc975ef59e8dcf6f6b179a10d069c9411ec5792b130e3cc5c48382462383
title: "Create"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Creates an unattached workspace over explicitly owned Edit-session services.

**Parameter `runtimeSession`:** The Edit session that owns the workspace scene world.

**Parameter `assets`:** The authoring asset pipeline used for scene and prefab documents.

**Parameter `types`:** The host type catalog used for scene extension generations.

**Parameter `serialization`:** The host serialization registry used for scene snapshots.

**Parameter `logs`:** The application log router used for workspace lifecycle diagnostics.

**Parameter `selection`:** The optional selection coordinator used by the standalone document workspace.

**Returns:** A host that owns both the document and Play Mode interfaces of the workspace.

**Exception `T:System.ArgumentNullException`:** Thrown when a required owner is `null`.
