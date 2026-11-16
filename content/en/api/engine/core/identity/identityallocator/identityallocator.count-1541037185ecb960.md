---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1541037185ecb9602cfd228c6e9b5e64ae2bdcd3702c7987a68a8b0899b0dfc2
symbol: engine:Inno.Core.Identity:P:Inno.Core.Identity.IdentityAllocator.count
title: IdentityAllocator.count
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
reviewed: 5447465229edac7362e0548884244f48cc7bd51b44fbb5b67e4f399e84898304
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Registry entries are weak. An entry whose object has been collected may remain counted until a lookup or registration observes and removes it. This property is not a strong-reference count or a liveness test.
