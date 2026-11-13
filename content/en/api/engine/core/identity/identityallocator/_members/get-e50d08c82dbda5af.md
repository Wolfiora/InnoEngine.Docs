---
uid: api.e50d08c82dbda5af9b0f03b73ef320be4969c80d979eee1a996357a9275a418a
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Get\u0060\u00601(System.Int32)"
source: xml
reviewed: 9fbba88070c68952564d51a6caaebb68cfe6f7d7a61da192ee5b9781857dfd3b
title: "Get"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Resolves a registered object by its session-local runtime identity.

**Type parameter `TIdentity`:** The required identity object contract.

**Parameter `runtimeId`:** The packed runtime identity allocated by this instance.

**Returns:** The live compatible object, or `null` when no matching object exists.
