---
uid: api.cede2a6d0fb61b9503994a89aea458d90579ce4b32b1a42616be9fc5bdc2170f
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Get\u0060\u00601(System.Guid)"
source: xml
reviewed: 088e8bd0c6d6e55abbc306d259cedd6560d3b09d671f3c17b174672f1e59c057
title: "Get"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Resolves a registered object by its persistent identity.

**Type parameter `TIdentity`:** The required identity object contract.

**Parameter `persistentId`:** The non-empty persistent identity to resolve.

**Returns:** The live compatible object, or `null` when no matching object exists.
