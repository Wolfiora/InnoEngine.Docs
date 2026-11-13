---
uid: api.bcc725323f67a8160ade62ca98c6e6180d8cc1c3e4be79291adb6b5c9fd7d0e3
symbol: "engine:Inno.Runtime:M:Inno.Runtime.EngineHostBuilder.UseMetadataSources(Inno.Extensibility.Modules.IAssemblyCatalogSource,Inno.Extensibility.Types.ITypeCatalogSource,Inno.Core.Serialization.ISerializationMetadataSource)"
source: xml
reviewed: b8dee047215b2636283a6866d13edeaebc06c49b7eef530e4000dc5805dcecb9
title: "UseMetadataSources"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Selects the code and metadata implementation before creating the application host.

**Parameter `modules`:** The host catalog source; ownership transfers to the built EngineHost.

**Parameter `types`:** The type metadata provider corresponding to the same code deployment strategy.

**Returns:** This builder for fluent composition.

**Parameter `serialization`:** The declaration access provider corresponding to the same managed deployment.
