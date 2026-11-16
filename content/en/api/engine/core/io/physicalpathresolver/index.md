---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.core.io.a1a9e8edbe3f8b47
symbol: engine:Inno.Core.IO:T:Inno.Core.IO.PhysicalPathResolver
title: PhysicalPathResolver
kind: api
owners:
- Inno.Core.IO
apiSurface: source-clr
reviewed: d032feba5b028c0dd573f02c6b3be805130cc5566963cef3b620a255260f1a78
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
