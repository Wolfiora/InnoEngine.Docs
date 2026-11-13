---
uid: api.e8fc5f5d03f9f6256421c1574894823803f448556566ed32e75e6e9cbf45f017
symbol: "engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationRegistry.GetMetadata(System.Type)"
source: xml
reviewed: a8fd4391d86e752ad0123b2078efe0e73fd98c8221ee406b60b72ba2edb59c13
title: "GetMetadata"
kind: api
owners: [Inno.Core.Serialization]
apiSurface: source-clr
---

Reads the current provider's declaration metadata for domain operations such as prefab overrides.

**Parameter `type`:** The exact declaration owned by the current serialization generation.

**Returns:** Immutable declaration accessors owned by this generation; unsupported declarations throw. The caller must not retain the result across generation retirement.

**Exception `T:System.ArgumentNullException`:** The declaration is null.

**Exception `T:System.ObjectDisposedException`:** The registry has been disposed.
