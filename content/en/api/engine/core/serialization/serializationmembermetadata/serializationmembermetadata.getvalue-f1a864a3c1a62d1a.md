---
uid: api.f1a864a3c1a62d1a5c6c2647429cb8c8ea9f6864026e5723f372c0798c7350fe
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationMemberMetadata.GetValue(System.Object)"
source: xml
reviewed: 83bc0945efd490a58ce4e3a0827255e12a5706b55a126d3978fd58021e1ae7cd
title: "SerializationMemberMetadata.GetValue"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Reads the current value through the selected declaration accessor.

**Parameter `target`:** The declaring object; ownership remains with the caller.

**Returns:** The current value, including null when allowed by the declaration.

**Exception `T:System.InvalidOperationException`:** Reading is not permitted by this metadata.
