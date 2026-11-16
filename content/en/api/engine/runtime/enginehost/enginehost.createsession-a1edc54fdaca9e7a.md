---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a1edc54fdaca9e7a269ea8f391ab8311646574aae95beadc32de94e26a66841a
symbol: engine:Inno.Runtime:M:Inno.Runtime.EngineHost.CreateSession(Inno.Runtime.RuntimeSessionOptions)
title: EngineHost.CreateSession
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 0d9e033bdc9316aa90a57d600a17d56af0e5a28276f58926a9b1d9a01bd587f4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `options`:** The validated ownership, storage, and timing options for the session.

## Returns

A started session owned by this host and the caller.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `options` is null.

**Exception `T:System.ObjectDisposedException`:** Thrown when this host has been disposed.
