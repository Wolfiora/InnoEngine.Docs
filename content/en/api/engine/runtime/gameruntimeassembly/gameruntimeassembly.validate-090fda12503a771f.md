---
uid: api.090fda12503a771f5fbf2a62698a1e90d71ef3d01479d7fb37bc09551d6faa1e
symbol: "engine:Inno.Runtime:M:Inno.Runtime.GameRuntimeAssembly.Validate"
source: xml
reviewed: 6d555037b957c1aeadd4e41595059fde284e15c66622d1ed42e8a713a58bd292
title: "GameRuntimeAssembly.Validate"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
---

Rejects identities or fingerprints that cannot describe a frozen code input.

**Exception `T:System.IO.InvalidDataException`:** The assembly name is empty or nonportable, or the fingerprint is not a SHA-256 value.
