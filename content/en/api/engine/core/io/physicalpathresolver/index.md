---
uid: api.inno.core.io.a1a9e8edbe3f8b47
symbol: "engine:Inno.Core.IO:T:Inno.Core.IO.PhysicalPathResolver"
source: xml
reviewed: 003e0074a94216a7876eecd21fbbcce80bbe8fc870fbc87441825107ed96c011
title: "PhysicalPathResolver"
kind: api
owners: [Inno.Core.IO]
apiSurface: source-clr
contracts:
- project.inno-core-io#publication-and-ownership-contract
aliases: []
---

Resolves filesystem aliases within one caller-owned reading phase without granting write authority.

## Remarks

Instances are not thread-safe. Create a fresh instance when validating filesystem changes. Resolved paths still require an explicit PathBoundary check before ownership or mutation.
