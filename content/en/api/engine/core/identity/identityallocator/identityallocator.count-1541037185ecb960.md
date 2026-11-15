---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1541037185ecb9602cfd228c6e9b5e64ae2bdcd3702c7987a68a8b0899b0dfc2
symbol: engine:Inno.Core.Identity:P:Inno.Core.Identity.IdentityAllocator.count
title: IdentityAllocator.count
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
reviewed: 55e863911943c380dd23a443e3453cea9e1d3fa5307e025eac802ca7f17d7342

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Gets the number of currently registered identity entries.

## Remarks

Registry entries are weak. An entry whose object has been collected may remain counted until a lookup or registration observes and removes it. This property is not a strong-reference count or a liveness test.
