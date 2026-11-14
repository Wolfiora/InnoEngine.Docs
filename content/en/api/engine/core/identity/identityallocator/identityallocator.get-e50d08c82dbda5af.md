---
uid: api.e50d08c82dbda5af9b0f03b73ef320be4969c80d979eee1a996357a9275a418a
symbol: "engine:Inno.Core.Identity:M:Inno.Core.Identity.IdentityAllocator.Get\u0060\u00601(System.Int32)"
source: xml
reviewed: 1c4daca16400da7b8b74c7e23ea155f8f2f1081a498348891afaf407251bf8a6
title: "IdentityAllocator.Get"
kind: api
owners: [Inno.Core.Identity]
apiSurface: source-clr
---

Resolves a registered object by its session-local runtime identity.

## Type parameters

**Type parameter `TIdentity`:** The required identity object contract.

## Parameters

**Parameter `runtimeId`:** The packed runtime identity allocated by this instance.

## Returns

The live compatible object, or `null` when no matching object exists.
