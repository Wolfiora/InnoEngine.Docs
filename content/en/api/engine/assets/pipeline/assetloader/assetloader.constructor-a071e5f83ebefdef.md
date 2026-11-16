---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a071e5f83ebefdefccc8130c8c33522a8f3d01da1eff1e533c717d8c485f703d
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.#ctor(Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Identity.IdentityAllocator,Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Logging.LogRouter,System.String,System.String,Inno.Assets.Pipeline.AssetSourcePolicy)
title: AssetLoader.Constructor
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: cadd6ab34ac75031b3e747f08bd513dfae298eb378b8f2ec1b15365c9d1b560b
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

**Parameter `logs`:** The explicitly owned router receiving importer and catalog diagnostics.

**Parameter `diagnostics`:** The diagnostic hub that owns import, build, catalog, and reference reports.

**Parameter `assetRoot`:** The absolute source root.

**Parameter `libraryRoot`:** The absolute rebuildable Library root.

**Parameter `sourcePolicy`:** The source filtering policy, or `null` for defaults.
