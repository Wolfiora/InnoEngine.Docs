---
uid: api.inno.build.9ebaa157dd76d997
symbol: "engine:Inno.Build:T:Inno.Build.BuildProfileStore"
source: xml
reviewed: e4f0ae42639a4770aa65dfb65212a61bfcdde5ead4e6ce70edf4f5b8b8c4981b
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
