---
uid: api.inno.build.9ebaa157dd76d997
symbol: "engine:Inno.Build:T:Inno.Build.BuildProfileStore"
source: xml
reviewed: 8c1ee72ac04d41c002f09f0313ea2a446368a34bbe67a3ae0a933c757e06feaa
title: "BuildProfileStore"
kind: api
owners: [Inno.Build]
apiSurface: source-clr
contracts:
- project.inno-build
aliases: []
---

Persists one project's current game build profile through the engine serialization contract.

## Remarks

The store writes a complete candidate beside the destination and replaces the active document only after serialization and validation succeed.
