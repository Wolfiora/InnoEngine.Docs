---
uid: api.292da08ec80516d0f35e2a88ceec86bd38a1890bcc416533126113767e082c47
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.StaticSerializationMetadataSource.GetMetadata(System.Type)"
source: xml
reviewed: 3db9f8d598ec0142c29c8c6cbf61df4e841232c8c0de709e2613fbade30af178
title: "GetMetadata"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Resolves a complete serialization shape for the current declaration.

**Parameter `type`:** The exact closed declaration, including its generic arguments.

**Returns:** Immutable access metadata; an unsupported declaration throws instead of probing another provider.
