---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a1edc54fdaca9e7a269ea8f391ab8311646574aae95beadc32de94e26a66841a
symbol: engine:Inno.Runtime:M:Inno.Runtime.EngineHost.CreateSession(Inno.Runtime.RuntimeSessionOptions)
title: EngineHost.CreateSession
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 76c007bd463a3035de8d05240aeae835746ad65ec83e0d784fc9948cc08df605

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `options`:** The validated ownership, storage, and timing options for the session.

## Returns

A started session owned by this host and the caller.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `options` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown when this host has been disposed.
