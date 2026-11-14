---
uid: api.directory.engine.adapter.input
title: "Input"
kind: landing
owners: []
---

# Input

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [EventInputBackend](eventinputbackend/index.md) | Accumulates backend-neutral platform events into complete runtime input snapshots. |
| [EventInputBackendProvider](eventinputbackendprovider/index.md) | Supplies the common event implementation through the neutral input creation boundary. |
| [EventInputSource](eventinputsource/index.md) | Routes backend-neutral platform events through Core Events to isolated runtime-session input backends. |
| [IInputBackendFactory](iinputbackendfactory/index.md) | Creates host-level input event sources from explicit backend selections. |
| [IInputEventSource](iinputeventsource/index.md) | Routes backend-neutral platform events into isolated runtime input backends. |
| [InputBackendCatalog](inputbackendcatalog/index.md) | Resolves input providers from one immutable, composition-owned registration snapshot. |
| [InputBackendId](inputbackendid/index.md) | Identifies a input implementation without closing the set of supported backends. |
| [InputBackendProvider](inputbackendprovider/index.md) | Describes one explicitly composed input implementation and its creation boundary. |

