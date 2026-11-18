---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bcc725323f67a8160ade62ca98c6e6180d8cc1c3e4be79291adb6b5c9fd7d0e3
symbol: engine:Inno.Runtime:M:Inno.Runtime.EngineHostBuilder.UseMetadataSources(Inno.Extensibility.Modules.IAssemblyCatalogSource,Inno.Extensibility.Types.ITypeCatalogSource,Inno.Core.Serialization.ISerializationMetadataSource)
title: EngineHostBuilder.UseMetadataSources
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: b31c3f580b42f62f013bc49df011888be6e1a046a02f3edb6a1cef2f4198c6fc
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `modules`:** The host catalog source; ownership transfers to the built EngineHost.

**Parameter `types`:** The type metadata provider corresponding to the same code deployment strategy.

**Parameter `serialization`:** The declaration access provider corresponding to the same managed deployment.

## Returns

This builder for fluent composition.
