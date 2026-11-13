---
uid: api.a7f208f8b2d82ff192c80a0494711764f3104c394a24249342c86fbd39576a42
symbol: "engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.#ctor(Inno.Editor.Interactions.EditorInteractions,Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter)"
source: xml
reviewed: 713e728b7db3c3341dbe11a5aeb588f0cde5eb379dc0f11378516c90aeb9f813
title: "Constructor"
kind: api
owners: [Inno.Editor.Assets]
apiSurface: source-clr
---

Creates the asset editing service for one authoring generation.

**Parameter `interactions`:** The active editor interaction entry point.

**Parameter `pipeline`:** The isolated authoring asset pipeline used by browser operations.

**Parameter `plugins`:** The active Plugin catalog that authoritatively identifies Plugin-owned source mounts.

**Parameter `types`:** The active type catalog used to build extension registry snapshots.

**Parameter `logs`:** The application log router used for Asset Browser operation diagnostics.

**Exception `T:System.ArgumentNullException`:** Thrown when any required service is `null`.
