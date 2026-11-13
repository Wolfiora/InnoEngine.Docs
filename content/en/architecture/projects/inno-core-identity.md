---
title: Inno.Core.Identity
description: Persistent object identity and generation-safe lookup within an
  explicitly owned runtime domain.
uid: api.projects.inno-core-identity
kind: project
owners:
  - Inno.Core.Identity
contracts:
  - manual.identity-and-missing
---
# Inno.Core.Identity

This project gives objects a persistent identity for saving and reconstruction, plus a temporary address while registered in a runtime domain. It supplies identity mechanics; asset recovery, Missing content and reload transactions belong to their respective owners.

## Start with your task

| Task | Entry |
| --- | --- |
| Choose an identity for a saved reference | [Identity and Missing states](../../manual/identity-and-missing.md) |
| Register and release an owned object | [Register an identity object](../../manual/register-identity.md) |
| Understand borrowing and retirement | [Resource ownership](../ownership.md) |

## The model

An `IdentityObject` starts with a nonempty persistent ID. Its `Identity` property is a value snapshot. An `IdentityAllocator` registers it into one isolated domain and supplies temporary lookup. A runtime address combines a domain, slot and generation, so an old address cannot silently resolve to a new occupant of a recycled slot.

The registry uses weak object entries and a conditional weak table for object-to-slot lookup. Registration does not become the object's strong lifetime owner. Copying an identity neither transfers ownership nor keeps the object or allocator alive.

Each runtime session has its own allocator. The current allocator is bound through an asynchronous execution scope; there is no process-wide mutable identity manager. A scope must be released in last-in-first-out order.

## Lifecycle and failure contracts

The lifecycle owner keeps the object alive, registers it and explicitly unregisters it when it leaves that domain. Unregistration removes the runtime mapping and preserves persistent identity. Unregistration observers run after removal; every observer is attempted, and multiple failures are aggregated. An observer failure does not restore the object to the registry.

Two different live objects cannot share a persistent ID within an allocator. Such a conflict throws rather than replacing the existing object. Initializing an explicit persistent ID requires a detached object and a nonempty GUID.

For reconstruction, transfer the persistent ID to the new detached instance and register it through the owning session. External saved references use the persistent ID. They must not store a raw runtime ID, a domain identifier or an old instance reference as their persistent format.

The registry's internal synchronization does not establish thread safety for an object's own state or a multi-step lifecycle transaction. Follow the lifecycle owner's execution rules. An asynchronous allocator scope does not promise a particular thread.

## Types

| Type | Responsibility |
| --- | --- |
| [Identity](../../api/engine/core/identity/identity/index.md) | Copyable persistent/runtime snapshot that resolves through its original weak registry association. |
| [IdentityObject](../../api/engine/core/identity/identityobject/index.md) | Base class with instance-owned identity state. |
| [IdentityAllocator](../../api/engine/core/identity/identityallocator/index.md) | Isolated registration, lookup, unregistration and execution scope. |
| [IdentityDomainId](../../api/engine/core/identity/identitydomainid/index.md) | Process-local runtime namespace identifier. |
| [RuntimeIdentity](../../api/engine/core/identity/runtimeidentity/index.md) | Domain-qualified, generation-safe transient object address. |

These references describe the evaluated CLR source contract. They do not certify runtime or Editor script projections, which require their own export manifests and acceptance.

## Logical script references

The compiler-selected script declarations are separate from this project's host CLR surface. Read the script calling guide and the associated module contracts before using a projected member.

- [Runtime script API](../../api/scripting/index.md)
