---
uid: api.524d8e47c81ef1e0b98d918ef5b7d391d6f3c3a21b9d23db3d2dfe12dd0da8e4
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetPipeline.#ctor(Inno.Extensibility.Modules.ModuleHost,Inno.Extensibility.Types.TypeCatalog,Inno.Core.Serialization.SerializationRegistry,Inno.Core.Identity.IdentityAllocator,Inno.Core.Diagnostics.DiagnosticHub,Inno.Core.Logging.LogRouter,Inno.Assets.Pipeline.AssetPipelineOptions)"
source: xml
reviewed: 7606f1fe65ebb466fea533763831e374a222e8aeacce9d7a2def8fa826450d9c
title: "Constructor"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Creates one isolated authoring or deployed-runtime asset pipeline.

**Parameter `modules`:** The module host whose candidate generations coordinate importer refreshes.

**Parameter `types`:** The type catalog used to discover and resolve asset extensions.

**Parameter `serialization`:** The serialization registry used for metadata and canonical asset state.

**Parameter `identities`:** The identity allocator that owns every canonical asset in this pipeline.

**Parameter `logs`:** The explicitly owned router receiving asset pipeline diagnostics.

**Parameter `diagnostics`:** The diagnostic hub that owns source database and asset processing reports.

**Parameter `options`:** The asset source, artifact and watcher configuration.

**Exception `T:System.ArgumentNullException`:** Thrown when a required service is null.
