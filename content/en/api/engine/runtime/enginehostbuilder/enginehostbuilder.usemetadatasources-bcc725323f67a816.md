---
uid: api.bcc725323f67a8160ade62ca98c6e6180d8cc1c3e4be79291adb6b5c9fd7d0e3
symbol: "engine:Inno.Runtime:M:Inno.Runtime.EngineHostBuilder.UseMetadataSources(Inno.Extensibility.Modules.IAssemblyCatalogSource,Inno.Extensibility.Types.ITypeCatalogSource,Inno.Core.Serialization.ISerializationMetadataSource)"
source: xml
reviewed: 1c7a68a9f56aee0d4a7dfdcabe0ecefad6b52c3a396b2890654182523fe3026c
title: "EngineHostBuilder.UseMetadataSources"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Selects the code and metadata implementation before creating the application host.

## Parameters

**Parameter `modules`:** The host catalog source; ownership transfers to the built EngineHost.

**Parameter `types`:** The type metadata provider corresponding to the same code deployment strategy.

**Parameter `serialization`:** The declaration access provider corresponding to the same managed deployment.

## Returns

This builder for fluent composition.
