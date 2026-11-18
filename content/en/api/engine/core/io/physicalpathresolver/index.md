---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.io.a1a9e8edbe3f8b47
symbol: engine:Inno.Core.IO:T:Inno.Core.IO.PhysicalPathResolver
title: PhysicalPathResolver
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
sourceFingerprint: 2cfab3b1512a3d24b2457073e6a60f8c0c23c6857ff6eae93b5ec3b0b1455232
contracts:
- project.inno-core-io#publication-and-ownership-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Remarks

Instances are not thread-safe. Create a fresh instance when validating filesystem changes. Resolved paths still require an explicit PathBoundary check before ownership or mutation.
