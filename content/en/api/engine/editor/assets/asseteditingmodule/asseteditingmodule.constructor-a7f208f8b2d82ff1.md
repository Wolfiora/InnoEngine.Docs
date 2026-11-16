---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a7f208f8b2d82ff192c80a0494711764f3104c394a24249342c86fbd39576a42
symbol: engine:Inno.Editor.Assets:M:Inno.Editor.Assets.AssetEditingModule.#ctor(Inno.Editor.Interactions.EditorInteractions,Inno.Assets.Pipeline.AssetPipeline,Inno.Plugins.Authoring.PluginEnvironment,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Logging.LogRouter)
title: AssetEditingModule.Constructor
kind: api
owners:
- Inno.Editor.Assets
apiSurface: source-clr
reviewed: 4e5d566b204bc2fab940ec86a2c1d924577d3934512044b5be4df4ee9858d008
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `interactions`:** The active editor interaction entry point.

**Parameter `pipeline`:** The isolated authoring asset pipeline used by browser operations.

**Parameter `plugins`:** The active Plugin catalog that authoritatively identifies Plugin-owned source mounts.

**Parameter `types`:** The active type catalog used to build extension registry snapshots.

**Parameter `logs`:** The application log router used for Asset Browser operation diagnostics.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when any required service is `null`.
