---
uid: api.cede2a6d0fb61b9503994a89aea458d90579ce4b32b1a42616be9fc5bdc2170f
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Get\u0060\u00601(System.Guid)"
source: xml
reviewed: a72bc857dcb7e2ba9c34ca21db48f9ead3b162fbe60c0d014b02aba8327dee1f
title: "Get"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Resolves a registered object by its persistent identity.

**Type parameter `TIdentity`:** The required identity object contract.

**Parameter `persistentId`:** The non-empty persistent identity to resolve.

**Returns:** The live compatible object, or `null` when no matching object exists.
