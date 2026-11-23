---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a071e5f83ebefdefccc8130c8c33522a8f3d01da1eff1e533c717d8c485f703d
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Identity.IdentityAllocator,Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Logging.LogRouter,System.String,System.String,Inno.Assets.Pipeline.AssetSourcePolicy)
title: AssetLoader.Constructor
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 34acc7e8a846c45ab1e3697bd5be465e063a21907f2baba70bff1ec2dc852abb
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

**Parameter `assetRoot`:** The absolute source root.

**Parameter `libraryRoot`:** The absolute rebuildable Library root.

**Parameter `sourcePolicy`:** The source filtering policy, or `null` for defaults.
