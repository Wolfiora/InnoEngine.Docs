---
uid: api.bedc5b735e489a5bf1950ba96a5da584abf73c91e2fe77676911f832dd366b5f
symbol: "engine:Inno.Core.IO:M:Inno.Core.IO.ProcessOwnerStamp.#ctor(System.Int32,System.Int64)"
source: xml
reviewed: e9bfd2b639e7d4ef21d621d5901a2f24051076d4758b680420566b72e54daa75
title: "Constructor"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
---

Freezes the identifier and UTC start timestamp observed from the same process.

**Parameter `processId`:** The positive operating-system identifier.

**Parameter `startedUtcTicks`:** The positive UTC start timestamp in DateTime ticks.

**Exception `T:System.ArgumentOutOfRangeException`:** The identifier or timestamp is outside its valid range.
