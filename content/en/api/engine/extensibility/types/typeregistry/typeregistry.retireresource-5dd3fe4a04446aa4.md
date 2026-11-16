---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.5dd3fe4a04446aa46f1e5aaecae8da4c4a5e2c357bf8d80c4b9ccbc6428b2b42
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.RetireResource(System.String,System.Action)
title: TypeRegistry<TSnapshot>.RetireResource
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 4d2456683ecd83664adbdd14c778944520bfa91306f11069dc6832b6256f8a57
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `owner`:** The resource or extension identifier included in deadline diagnostics.

**Parameter `retire`:** The retirement operation, including owner-thread completion pumping when required.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** The operation exceeded its deadline. Its closure stays owned and further retirement or refresh is blocked.
