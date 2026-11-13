---
title: Identity and Missing states
description: Keep persistent references stable while runtime objects and generations change.
uid: manual.identity-and-missing
kind: explanation
owners:
  - Inno.Core.Identity
aliases:
  - persistent identity
  - missing reference
  - 跨代身份
  - 缺失恢复
contracts:
  - architecture.ownership
---
# Identity and Missing states

A saved reference and a live object address solve different problems. InnoEngine keeps persistent identity separate from a runtime registration so that reconstruction does not make an old runtime address point at an unrelated object.

## Choose the right identity

| Need | Identity |
| --- | --- |
| Save a reference or reconstruct it after reload | Persistent ID |
| Address a currently registered object | Runtime identity within its live domain and generation |
| Keep an object alive | An explicit owner; copying an identity does not provide ownership |

An `IdentityObject` receives a persistent identity before registration. Its runtime identity becomes available while an `IdentityAllocator` owns its registration. A runtime identity is transient and must not become an asset or History persistence format.

## Why generation matters

A registry can reuse storage after an object is unregistered. Runtime lookup checks generation as well as the registration slot, and domain-qualified identity distinguishes registries. A copied snapshot resolves through its original weak registry association; it cannot extend the resource's lifetime.

Unregistering removes the runtime mapping while preserving persistent identity. Registering two live objects with the same persistent ID is a conflict, not an implicit replacement.

## Missing is recoverable state

An unavailable type, asset, or target can leave a reference unresolved. Preserve its stable identity and the neutral state required by the owning domain's recovery protocol. Do not interpret unresolved content as an instruction to delete it or assign a new identity.

Missing recovery belongs to the reference, serialization, asset, or scene workflow that owns the data. The Core Identity allocator supplies identity mechanics; it does not by itself implement every domain's recovery procedure.

## Reload without retaining retired objects

Use persistent identities to reconnect reconstructed objects. Avoid holding a retired generation's live objects, types, or delegates in long-lived state. Prepare replacement state, validate it, and switch at the owner's safe point according to the relevant reload protocol.

Failure must not silently discard the last accepted state. Read [ownership and retirement](../architecture/ownership.md) before implementing a participant in this lifecycle.
