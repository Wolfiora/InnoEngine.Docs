---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a7607eacf5afe92ba4db26cb5061bf08770bb8ad051fa000b306170b8df7027a
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Identity.IdentityAllocator,Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Logging.LogRouter,System.Collections.Generic.IReadOnlyList{Inno.Assets.Pipeline.AssetSourceMount},System.String,Inno.Assets.Pipeline.AssetSourcePolicy,System.Boolean)
title: AssetLoader.Constructor
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: bbe514f19db932b51d87d4c8f7784c1a5e9223c86b2c8cbf2b34e03944a22dc9
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `types`:** The immutable type-generation owner used to discover importers and resolve asset types.

**Parameter `serialization`:** The serialization registry used for catalog, metadata, and asset state persistence.

**Parameter `identities`:** The identity allocator that owns every canonical asset loaded by this instance.

**Parameter `diagnostics`:** The diagnostic hub that owns import, build, catalog, and reference reports.

**Parameter `logs`:** The explicitly owned router receiving importer and catalog diagnostics.

**Parameter `mounts`:** Complete isolated source mount snapshot.

**Parameter `libraryRoot`:** Absolute rebuildable Library root.

**Parameter `sourcePolicy`:** Source filtering policy, or `null` for defaults.

**Parameter `runtimeArtifactsOnly`:** Whether to trust a deployed read-only catalog and skip every source reconciliation operation.
