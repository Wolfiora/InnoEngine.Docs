---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f9a969f25cce69f29e0b66d15434c6b11e36ac987c3e7da589ac2cf16705d4eb
symbol: engine:Inno.Plugins.Authoring:M:Inno.Plugins.Authoring.PluginEnvironment.#ctor(Inno.Assets.Pipeline.AssetPipeline,Inno.Core.Settings.ProjectSettingsStore,Inno.Core.Serialization.SerializationRegistry,System.String,System.String,Inno.Plugins.Authoring.PluginScanResult,Inno.Extensibility.Reload.GenerationCoordinator)
title: PluginEnvironment.Constructor
kind: api
owners:
- Inno.Plugins.Authoring
apiSurface: source-clr
reviewed: 50a0bfd86ce5a5a0058e3b7be034f087ab4197602e276f96ee5d3974b1dd2675
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `assets`:** The authoring asset pipeline that owns Plugin source mounts.

**Parameter `settings`:** The project settings store that composes active Plugin contributions.

**Parameter `serialization`:** The serialization registry used to validate installed Plugin manifests.

**Parameter `pluginRoot`:** Project Plugins directory.

**Parameter `libraryRoot`:** Project rebuildable Library directory.

**Parameter `initialScan`:** Scan already used to create the initial Asset mount generation.

**Parameter `generations`:** The shared Host gate for publication, Play, Build and unload verification.
