---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1541037185ecb9602cfd228c6e9b5e64ae2bdcd3702c7987a68a8b0899b0dfc2
symbol: engine:Inno.Core.Identity:P:Inno.Core.Identity.IdentityAllocator.count
title: IdentityAllocator.count
kind: api
owners:
- Inno.Core.Identity
apiSurface: source-clr
sourceFingerprint: 13ba40985b99e6b8df1accbd0a463f393ec2b34f66b8bf83cccbdbb342c826bf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Registry entries are weak. An entry whose object has been collected may remain counted until a lookup or registration observes and removes it. This property is not a strong-reference count or a liveness test.
