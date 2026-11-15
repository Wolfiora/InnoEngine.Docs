---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.685db2be4756667dd13123346477b1d29c8f17495f16d8405db37b783d1e24cb
symbol: engine:Inno.Core.Serialization:M:Inno.Core.Serialization.SerializationReader.OnCompleted(System.Action)
title: SerializationReader.OnCompleted
kind: api
owners:
- Inno.Core.Serialization
apiSurface: source-clr
reviewed: 71ac8482d225b1c1ac92cb761cb40083161651193c499a7fe4b62d2e66345c72

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Schedules a callback to run after the complete decode operation succeeds.

## Parameters

**Parameter `callback`:** The callback to schedule.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `callback` is null.
